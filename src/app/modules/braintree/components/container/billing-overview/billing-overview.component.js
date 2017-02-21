import template from './billing-overview.html';
import {ROUTES} from '../../../braintree.constants';
import _ from 'lodash';

// Inject dependencies
@Inject('braintreeDataService', 'braintreeAppService', 'moment', '$animate', '$translate')
class CustomerDetailsComponent {
	constructor() {
		this.state = {
			header: {
				visible: true,
				text: 'Billing overview'
			},
			loading: {
				isLoading: false,
				text: ''
			},
			message: {
				descriptionHtml: '',
				text: '',
				link: '',
				linkText: '',
				type: 'warning'
			},
			showDetailsPanel: true,
			plans: {
				loading: {
					isLoading: false,
					text: ''
				}
			}
		};

		this.customer = null;
		this.plans = [];
		this.selectedMerchantAccount = this.braintreeDataService.selectedMerchantAccount;
	}

	// Private methods
	// --------------------------------------------------
	$onInit() {
		// When set by an outside app
		if(this.language) {
			this.$translate.use(this.language);
		}

		let customer = {};
		this.$translate('subscription.heading.BILLING_OVERVIEW').then((value) => {this.state.header.text = value});
		if (this.customerData) {
			if (this.customerData.id) {
				customer.id = this.customerData.id;

				// Update existing customer in service
				this.braintreeDataService.updateCustomerData(customer);
			}
		}

		// Get Customer from service
		this.customer = this.braintreeDataService.customer;
		//console.log('customer', this.customer);

		// If we get a customerId, we fetch it from API
		if (this.customer.id) {
			this.getCustomerDetails(this.customer.id);
		}

		if (this.headerVisible === false) {
			this.state.header.visible = false;
		}
		if (this.headerText) {
			this.state.header.text = this.headerText;
		}

		// Disable animation (tmp because of implementation problems)
		this.$animate.enabled(false);
	}

	_clearMessage() {
		this.state.message.text = '';
	}

	_displayMessage(type, resourceString, extraText, descriptionHtml) {
		this.state.message.type = type;
		if (resourceString) {
			this.$translate(resourceString).then((value) => {this.state.message.text = value + (extraText ? extraText : '')});
		} else if (extraText) {
			this.state.message.text = extraText;
		}

		if (descriptionHtml) {
			this.state.message.descriptionHtml = descriptionHtml;
		}
	}

	getCurrencySymbol(currencyIsoCode) {
		return this.braintreeAppService.getCurrencySymbol(currencyIsoCode);
	}

	formatCurrencyAmount(amount, currencyIsoCode) {
		return this.braintreeAppService.formatCurrencyAmount(amount, currencyIsoCode);
	}

	_startLoading(resourceString) {
		this.state.loading.isLoading = true;
		this.$translate(resourceString).then((value) => {this.state.loading.text = value});
	}

	_stopLoading() {
		this.state.loading.isLoading = false;
		this.state.loading.text = '';

		this.state.plans.loading.isLoading = false;
		this.state.plans.loading.text = '';
	}

	// Public viewModel methods
	// --------------------------------------------------

	/**
	 * Save a creditcard to the vault and adding as a default payment method for subscription.
	 * @param paymentMethod
	 * @param subscription
	 */
	addCreditCard(paymentMethod, subscription) {
		this._clearMessage();
		this._startLoading('payment.loading.SAVING_PAYMENT_INFORMATION');
		let customerId = this.braintreeDataService.customer.id;

		paymentMethod.verificationMerchantAccountId = this.selectedMerchantAccount.id;

		// Send request to get token, then use the token to tokenize credit card info and verify the card
		this.braintreeDataService.createVaultedPayment(customerId, paymentMethod).then(
			(response) => {
				this._stopLoading();

				this.addPaymentMethod(response.data.customer.paymentMethod, subscription);
			},
			(error) => {
				// TODO: Handle errors better
				this._displayMessage('warning', null, error);
				this._stopLoading();
				this.state.showForm = true;
			}
		);
	}

	/**
	 * Adding a default PaymentMethod to subscription
	 * @param paymentMethod
	 * @param subscription
	 */
	addPaymentMethod(paymentMethod, subscription) {
		let loadingTextResource = 'payment.loading.UPDATING_PAYMENT_METHOD';
		let messageSuccessResource = 'payment.message.PAYMENT_METHOD_UPDATED';
		let subscriptionChanges = {
			planId: subscription.planId,
			paymentMethodToken: paymentMethod.token
		};

		this.updateSubscription(subscription, subscriptionChanges, loadingTextResource, messageSuccessResource);
	}

	/**
	 * Cancel a specific subscription.
	 * @param subscription
	 */
	cancelSubscription(subscription) {
		this._clearMessage();
		this._startLoading('subscription.loading.CANCELLING_SUBSCRIPTION');

		this.braintreeDataService.cancelSubscription(subscription.id).then(
			(response) => {
				if (this.customer.id) {
					this.getCustomerDetails(this.customer.id).then(
						() => {
							this._displayMessage('success', 'subscription.message.SUBSCRIPTION_CANCELLED');
						}
					);
				}
			},
			(error) => {
				this._stopLoading();
				this._displayMessage('warning', 'subscription.message.ERROR_CANCELLING_SUBSCRIPTION', null, error.data.message);
			}
		);
	}

	/**
	 * Change payment method for a specific subscription.
	 * @param newPaymentMethod
	 * @param subscription
	 */
	changePaymentMethodForSubscription(newPaymentMethod, subscription) {
		let loadingTextResource = 'payment.loading.UPDATING_PAYMENT_METHOD';
		let messageSuccessResource = 'payment.message.PAYMENT_METHOD_UPDATED';

		let subscriptionChanges = {
			planId: subscription.planId,
			paymentMethodToken: newPaymentMethod.token
		};

		this.updateSubscription(subscription, subscriptionChanges, loadingTextResource, messageSuccessResource);
	}

	/**
	 * Change to a new subscription plan.
	 * 1. Cancels the current subscription
	 * 2. Calculates discount if appropriate
	 * 3. Creates a new subscription.
	 * @param newSubscriptionPlan
	 * @param currentSubscription
	 */
	changeSubscriptionPlan(newSubscriptionPlan, currentSubscription) {
		//console.log('plan chosen', newSubscriptionPlan, currentSubscription);

		this._clearMessage();
		this._startLoading('subscription.loading.UPDATING_SUBSCRIPTION_PLANS');
		// Set the selectedMerchantAccount
		this.braintreeDataService.setSelectedMerchantAccountByCurrency(newSubscriptionPlan.currencyIsoCode);

		// Cancel the current subscription
		this.braintreeDataService.cancelSubscription(currentSubscription.id).then(
			(response) => {
				if (this.customer.id) {
					let subLessFrequent = (newSubscriptionPlan.billingFrequency > currentSubscription.plan.billingFrequency);
					let discount = 0;

					// New subscription data
					let newSubscriptionData = {
						subscription: {
							paymentMethodToken: currentSubscription.defaultPaymentMethod.token,
							planId: newSubscriptionPlan.id,
							merchantAccountId: this.braintreeDataService.selectedMerchantAccount.id
						}
					};

					// Calculate discount if we are going to a less frequent billing cycle.
					if (subLessFrequent) {
						// Get remaining days of current subscription
						let nextBillingDate = this.moment(currentSubscription.nextBillingDate).startOf('days');
						let today = this.moment(this.moment().startOf('days'));
						let duration = this.moment.duration(nextBillingDate.diff(today));
						let remainingDays = duration.asDays();
						let billingCycleDays = currentSubscription.plan.billingFrequency * 31;

						// Calculate discount
						// Discount = (RemaningDays / TotalBillingCycleDays) * CurrentPlanPrice
						discount = ((remainingDays / billingCycleDays) * currentSubscription.plan.price).toFixed(2);

						// Add discount to new subscription data
						newSubscriptionData.subscription.discounts = {
							add: [{
								amount: discount,
								numberOfBillingCycles: 1,
								inheritedFromId: 'upgradeDiscount'
							}]
						};
					} else {
						// Set the StartDate on the new subscription to be the end of the current one.
						newSubscriptionData.subscription.firstBillingDate = currentSubscription.paidThroughDate
					}

					// Create a new subscription
					this.braintreeDataService.createSubscription(newSubscriptionData).then(
						(response) => {
							//console.log('response', response);
							if (response.data.success) {
								this.getCustomerDetails(this.customer.id).then(
									() => {
										let descriptionHtml = '';

										if (response.data.subscription.transactions.length) {
											let transactionAmount = response.data.subscription.transactions[0].amount;
											let currencySymbol = this.getCurrencySymbol(response.data.subscription.transactions[0].currencyIsoCode);

											if (discount > 0) {
												//
												this.$translate('subscription.message.UPDATED_SUBSCRIPTION_WITH_DISCOUNT', {
													amount: currencySymbol + transactionAmount,
													discount: currencySymbol + discount
												}).then((value) => {
													descriptionHtml = '<p>';
													descriptionHtml += value;
													descriptionHtml += '</p>';

													this._displayMessage('success', 'subscription.message.SUBSCRIPTION_CHANGED_TO_NEW_PLAN', null, descriptionHtml);
												});
											} else {
												this._displayMessage('success', 'subscription.message.SUBSCRIPTION_CHANGED_TO_NEW_PLAN', null);
											}
										}

									}
								);
							} else {
								// TODO: Handle different failures maybe?
								this._displayMessage('warning', 'subscription.message.ERROR_CREATING_SUBSCRIPTION', null, response.data.message);
								this._stopLoading();
							}
						},
						(error) => {
							//console.log('Error creating a subcription', error);
							this._displayMessage('warning', 'subscription.message.ERROR_CREATING_SUBSCRIPTION', null, error);
							this._stopLoading();
						}
					);
				}
			},
			(error) => {
				this._stopLoading();
				this._displayMessage('warning', 'subscription.message.ERROR_CANCELLING_SUBSCRIPTION', null, error.data.message);
			}
		);
	}

	/**
	 * Delete a payment method for a specific subscription.
	 * Subscription will also be canceled
	 * @param paymentMethod
	 */
	deletePaymentMethod(paymentMethod) {
		this._clearMessage();
		this._startLoading('payment.loading.DELETING_PAYMENT_METHOD');

		this.braintreeDataService.deletePaymentMethod(paymentMethod).then(
			(response) => {
				if (this.customer.id) {
					this.getCustomerDetails(this.customer.id).then(
						() => {
							this._displayMessage('success', 'payment.message.PAYMENT_METHOD_DELETED');
						}
					);
				}
			},
			(error) => {
				this._stopLoading();
				this._displayMessage('warning', 'payment.message.ERROR_DELETING_PAYMENT_METHOD', null, error.data.message);
			}
		);
	}

	/**
	 * Disables auto renew for a specific subscription.
	 * @param subscription
	 */
	disableAutoRenew(subscription) {
		let loadingResource = 'subscription.loading.DISABLING_AUTO_RENEW';
		let messageSuccessResource = 'subscription.message.AUTO_RENEW_HAS_BEEN_DISABLED';

		let subscriptionChanges = {
			planId: subscription.planId,
			price: 0.00,
			numberOfBillingCycles: subscription.currentBillingCycle
		};

		this.updateSubscription(subscription, subscriptionChanges, loadingResource, messageSuccessResource);
	}

	getAllPlans() {
		this._startLoading('subscription.loading.FETCHING_SUBSCRIPTION_PLANS');

		this.braintreeDataService.getAllSubscriptionPlans().then(
			(response) => {
				this.plans = response.data.plans;
				this._stopLoading();
			},
			(error) => {
				// TODO: Notify development team or do it via api
				this._displayMessage('error', 'subscription.message.ERROR_FETCHING_SUBSCRIPTION_PLANS');
				this._stopLoading();
			}
		);
	}

	getPlansByCurrency(currencyIsoCode) {
		this._startLoading('subscription.loading.FETCHING_SUBSCRIPTION_PLANS');
		this.braintreeDataService.getSubscriptionPlansForCurrency(currencyIsoCode).then(
			(response) => {

				// Little hack to Exclude some plans (TODO: Find a better solution for this)
				// Looks for "hidden" in description to exclude plan from displaying
				this.plans = _.filter(response.data.plans, (plan) => {
					return plan.description !== 'hidden';
				});

				this._stopLoading();
			},
			(error) => {
				// TODO: Notify development team or do it via api
				this._displayMessage('error', 'subscription.message.ERROR_FETCHING_SUBSCRIPTION_PLANS');
				this._stopLoading();
			}
		);
	}

	/**
	 * Enables auto renew for a specific subscription.
	 * @param subscription
	 */
	enableAutoRenew(subscription) {
		let loadingTextResource = 'subscription.loading.ENABLING_AUTO_RENEW';
		let messageSuccessResource = 'subscription.message.AUTO_RENEW_HAS_BEEN_ENABLED';

		let subscriptionChanges = {
			planId: subscription.planId,
			price: subscription.plan.price,
			numberOfBillingCycles: null
		};

		this.updateSubscription(subscription, subscriptionChanges, loadingTextResource, messageSuccessResource);
	}

	/**
	 * Get Customer details, including current subscription plans, payment methods etc.
	 * @param customerId
	 */
	getCustomerDetails(customerId) {
		this._startLoading('customer.loading.LOADING_PROFILE_DETAILS');

		//Get Customer if logged in
		return this.braintreeDataService.getCustomer(customerId, true).then(
			(response) => {
				this.braintreeDataService.updateCustomerData(response.data.customer);
				this.customer = response.data.customer;
				this._stopLoading();
			},
			(error) => {
				this._stopLoading();
				this._displayMessage('warning', 'customer.message.ERROR_FETCHING_CUSTOMER_INFO', null, error.data.message);
			}
		);
	}

	retryCharge(subscription) {
		this._clearMessage();
		this._startLoading('payment.loading.RETRYING_TRANSACTION');

		this.braintreeDataService.retrySubscriptionCharge(subscription).then(
			(response) => {
				if (response.success) {
					this._stopLoading();
					this._displayMessage('success', 'payment.message.TRANSACTION_SUCCESSFUL');
				} else {
					this._stopLoading();
					this._displayMessage('warning', 'payment.message.RETRY_TRANSACTION_UNSUCCESSFUL', null, response.data.message);
				}
			},
			(error) => {
				this._stopLoading();
				this._displayMessage('error', 'payment.message.RETRY_TRANSACTION_UNSUCCESSFUL', null, error.data.message);
			}
		);
	}

	updateSubscription(subscription, subscriptionChanges, loadingResourceString, messageSuccessResourceString) {
		this._clearMessage();
		this._startLoading(loadingResourceString);

		this.braintreeDataService.updateSubscription(subscription.id, subscriptionChanges).then(
			(response) => {
				this.getCustomerDetails(this.customer.id).then(
					() => {
						this._displayMessage('success', messageSuccessResourceString);
					}
				);

			},
			(error) => {
				this._stopLoading();
				this._displayMessage('warning', 'subscription.message.ERROR_UPDATING_SUBSCRIPTION', null, error.data.message);
			}
		);
	}

	routeTo(path) {
		return this.braintreeAppService.routeTo(path);
	}

	subscribeNow() {
		// If an external link has been set.
		if (this.subscribeRedirectUrl) {
			window.location = this.subscribeRedirectUrl;
		} else {
			this.routeTo('/subscribe');
		}
	}
}

// Component decorations
let component = {
	bindings: {
		customerData: '<',
		headerText: '<',
		headerVisible: '<',
		subscribeRedirectUrl: '<',
		language: '<'
	},
	template: template,
	controller: CustomerDetailsComponent
};

export default component;
