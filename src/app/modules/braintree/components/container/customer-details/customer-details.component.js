import template from './customer-details.html';
import {ROUTES} from '../../../braintree.constants';

// Inject dependencies
@Inject('braintreeDataService', 'moment')
class CustomerDetailsComponent {
	constructor() {
		this.state = {
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
	}

	// Private methods
	// --------------------------------------------------
	$onInit() {
		// Get Customer from service
		this.customer = this.braintreeDataService.customer;

		// If we get a customerId, we fetch it from API
		if (this.customer.id) {
			this.getCustomerDetails(this.customer.id);
		}
	}

	_clearMessage() {
		this.state.message.text = '';
	}

	_displayMessage(text, type, descriptionHtml) {
		this.state.message.type = type;
		this.state.message.text = text;
		this.state.message.descriptionHtml = descriptionHtml;
	}

	_getAllSubscriptionPlans() {
		if (this.plans.length > 0) {
			return;
		}

		this.state.plans.loading.isLoading = true;
		this.state.plans.loading.text = 'Loading plans...';

		this.braintreeDataService.getAllSubscriptionPlans().then(
			(response) => {
				this.plans = response.data.plans;
				this._stopLoading();
			},
			(error) => {
				// TODO: Notify development team or do it via api
				this._displayMessage('Unable to get subscription plans, the development team has been notified, please try again later.', 'error');
				this._stopLoading();
			}
		);
	}

	_getCurrencySymbol(currencyIsoCode) {
		switch (currencyIsoCode) {
		case 'USD':
			return '$';
			break;
		case 'EUR':
			return '€';
			break;
		case 'GBP':
			return '£';
			break;
		default:
			return '$';
		}
	}

	_startLoading(text) {
		this.state.loading.isLoading = true;
		this.state.loading.text = text;
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
		this._startLoading('Saving payment information...');
		let customerId = this.braintreeDataService.customer.id;

		// Send request to get token, then use the token to tokenize credit card info and verify the card
		this.braintreeDataService.createVaultedPayment(customerId, paymentMethod).then(
			(response) => {
				this._stopLoading();

				this.addPaymentMethod(response.data.customer.paymentMethod, subscription);
			},
			(error) => {
				// TODO: Handle errors better
				this._displayMessage(error, 'danger');
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
		let loadingText = 'Updating payment method...';
		let messageSuccessText = 'Payment method has been updated.';
		let subscriptionChanges = {
			planId: subscription.planId,
			paymentMethodToken: paymentMethod.token
		};

		this.updateSubscription(subscription, subscriptionChanges, loadingText, messageSuccessText);
	}

	/**
	 * Cancel a specific subscription.
	 * @param subscription
	 */
	cancelSubscription(subscription) {
		this._clearMessage();
		this._startLoading('Canceling subscription...');

		this.braintreeDataService.cancelSubscription(subscription.id).then(
			(response) => {
				if (this.customer.id) {
					this.getCustomerDetails(this.customer.id).then(
						() => {
							this._displayMessage('Subscription has been canceled.', 'success');
						}
					);
				}
			},
			(error) => {
				this._stopLoading();
				this._displayMessage(error.data.message, 'danger');
			}
		);
	}

	/**
	 * Change payment method for a specific subscription.
	 * @param newPaymentMethod
	 * @param subscription
	 */
	changePaymentMethodForSubscription(newPaymentMethod, subscription) {
		let loadingText = 'Updating payment method...';
		let messageSuccessText = 'Payment method has been updated.';
		let subscriptionChanges = {
			planId: subscription.planId,
			paymentMethodToken: newPaymentMethod.token
		};

		this.updateSubscription(subscription, subscriptionChanges, loadingText, messageSuccessText);
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
		console.log('plan chosen', newSubscriptionPlan, currentSubscription);

		this._clearMessage();
		this._startLoading('Updating subscription plan...');

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
							planId: newSubscriptionPlan.id
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
								inheritedFromId: 'testDiscount'
							}]
						};
					} else {
						// Set the StartDate on the new subscription to be the end of the current one.
						newSubscriptionData.subscription.firstBillingDate = currentSubscription.paidThroughDate
					}

					// Create a new subscription
					this.braintreeDataService.createSubscription(newSubscriptionData).then(
						(response) => {
							console.log('response', response);
							if (response.data.success) {
								this.getCustomerDetails(this.customer.id).then(
									() => {
										let descriptionHtml = '';

										if (response.data.subscription.transactions.length) {
											let transactionAmount = response.data.subscription.transactions[0].amount;
											let currencySymbol = this._getCurrencySymbol(response.data.subscription.transactions[0].currencyIsoCode);

											if (discount > 0) {
												descriptionHtml = '<p>A payment of ' + currencySymbol + transactionAmount + ' has been submitted, Your previous subscription credit of ' + currencySymbol + discount + ' was deducted from the full amount.</p>';
											}
										}

										this._displayMessage('Your subscription has been changed to the new plan.', 'success', descriptionHtml);
									}
								);
							} else {
								console.log('Error creating a sub', response.data.message);
								// TODO: Handle different failures maybe?
								this._displayMessage('An error occurred creating a subscription: ' + response.data.message, 'danger');
								this._stopLoading();
							}
						},
						(error) => {
							console.log('Error creating a subcription', error);
							this._displayMessage(error.data.message, 'danger');
							this._stopLoading();
						}
					);
				}
			},
			(error) => {
				this._stopLoading();
				this._displayMessage(error.data.message, 'danger');
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
		this._startLoading('Deleting payment method...');

		this.braintreeDataService.deletePaymentMethod(paymentMethod).then(
			(response) => {
				if (this.customer.id) {
					this.getCustomerDetails(this.customer.id).then(
						() => {
							this._displayMessage('Payment method has been deleted, and all connected subscriptions have been cancelled.', 'success');
						}
					);
				}
			},
			(error) => {
				this._stopLoading();
				this._displayMessage(error.data.message, 'danger');
			}
		);
	}

	/**
	 * Disables auto renew for a specific subscription.
	 * @param subscription
	 */
	disableAutoRenew(subscription) {
		let loadingText = 'Disabling auto renew';
		let messageSuccessText = 'Auto renew has been disabled';
		let subscriptionChanges = {
			planId: subscription.planId,
			price: 0.00,
			numberOfBillingCycles: subscription.currentBillingCycle
		};

		this.updateSubscription(subscription, subscriptionChanges, loadingText, messageSuccessText);
	}

	getAllPlans() {
		this._getAllSubscriptionPlans();
	}

	/**
	 * Enables auto renew for a specific subscription.
	 * @param subscription
	 */
	enableAutoRenew(subscription) {
		let loadingText = 'Enabling auto renew';
		let messageSuccessText = 'Auto renew has been enabled.';

		let subscriptionChanges = {
			planId: subscription.planId,
			price: subscription.plan.price,
			numberOfBillingCycles: null
		};

		this.updateSubscription(subscription, subscriptionChanges, loadingText, messageSuccessText);
	}

	/**
	 * Get Customer details, including current subscription plans, payment methods etc.
	 * @param customerId
	 */
	getCustomerDetails(customerId) {
		this._startLoading('Loading profile details...');

		//Get Customer if logged in
		return this.braintreeDataService.getCustomer(customerId, true).then(
			(response) => {
				this.braintreeDataService.updateCustomerData(response.data.customer);
				this.customer = response.data.customer;
				this._stopLoading();
			},
			(error) => {
				this._stopLoading();
				this._displayMessage(error.data.message, 'danger');
			}
		);
	}

	// TODO: Change this so we use an endpoint in the api for this, so we are not sending the price over the wire
	updateSubscription(subscription, subscriptionChanges, loadingText, messageSuccessText) {
		this._clearMessage();
		this._startLoading(loadingText);

		this.braintreeDataService.updateSubscription(subscription.id, subscriptionChanges).then(
			(response) => {
				this.getCustomerDetails(this.customer.id).then(
					() => {
						this._displayMessage(messageSuccessText, 'success');
					}
				);

			},
			(error) => {
				console.log(error.data.message);
				this._stopLoading();
				this._displayMessage(error.data.message, 'danger');
			}
		);
	}
}

// Component decorations
let component = {
	bindings: {},
	template: template,
	controller: CustomerDetailsComponent
};

export default component;
