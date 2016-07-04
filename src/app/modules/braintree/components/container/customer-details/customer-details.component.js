import template from './customer-details.html';
import {ROUTES} from '../../../braintree.constants';

// Inject dependencies
@Inject('braintreeService')
class CustomerDetailsComponent {
	constructor() {
		this.state = {
			loading: {
				isLoading: false,
				text: ''
			},
			message: {
				text: '',
				link: '',
				linkText: '',
				type: 'warning'
			},
			showDetailsPanel: true,
			showEditPaymentMethodsPanel: false,
			showEditPlan: false,
			showCreditCardForm: false,
			showPaypalForm: false,
			plans: {
				loading: {
					isLoading: false,
					text: ''
				}
			}
		};

		this.routes = {
			editSubscriptionRoute: ROUTES.SUBSCRIPTION,
			cancelSubscriptionRoute: ROUTES.SUBSCRIPTION // TODO: CHANGE
		};

		this.customer = null;
		this.plans = [];
	}

	// Private methods
	// --------------------------------------------------
	$onInit() {
		// Get Customer from service
		this.customer = this.braintreeService.customer;

		// If we get a customerId, we fetch it from API
		if (this.customer.id) {
			this.getCustomerDetails(this.customer.id);
		}
	}

	_clearMessage() {
		this.state.message.text = '';
	}

	_displayMessage(text, type) {
		this.state.message.type = type;
		this.state.message.text = text;
	}

	_getAllSubscriptionPlans() {
		if (this.plans.length > 0) {
			return;
		}

		this.state.plans.loading.isLoading = true;
		this.state.plans.loading.text = 'Loading plans...';

		this.braintreeService.getAllSubscriptionPlans().then(
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
		let customerId = this.braintreeService.customer.id;

		// Send request to get token, then use the token to tokenize credit card info and verify the card
		this.braintreeService.createVaultedPayment(customerId, paymentMethod).then(
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

		this.braintreeService.cancelSubscription(subscription.id).then(
			(response) => {
				console.log('cancel response', response);
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
		this.state.showEditPlan = false;

		// Cancel the current subscription
		this.braintreeService.cancelSubscription(currentSubscription.id).then(
			(response) => {
				console.log('cancel response', response);
				if (this.customer.id) {

					// Calculate price difference

					// Create a new subscription
					let subscriptionData = {
						paymentMethodToken: currentSubscription.defaultPaymentMethod.token,
						planId: newSubscriptionPlan.id
					};

					this.braintreeService.createSubscription(subscriptionData).then(
						(response) => {
							if (response.data.success) {
								this.getCustomerDetails(this.customer.id).then(
									() => {
										this._displayMessage('Your subscription has been changed to the new plan.', 'success');
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

		this.braintreeService.deletePaymentMethod(paymentMethod).then(
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
		return this.braintreeService.getCustomer(customerId, true).then(
			(response) => {
				this.braintreeService.updateCustomerData(response.data.customer);
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

		this.braintreeService.updateSubscription(subscription.id, subscriptionChanges).then(
			(response) => {
				this.getCustomerDetails(this.customer.id).then(
					() => {
						this.state.showEditPaymentMethodsPanel = false;
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

	showPaymentMethodForm(type) {
		if (type === 'cards') {
			this.state.showCreditCardForm = true;
			this.state.showPaypalForm = false;
		} else if (type === 'paypal') {
			this.state.showCreditCardForm = false;
			this.state.showPaypalForm = true;
		}
	}

	toggleEditPlan() {
		this.state.showEditPlan = !this.state.showEditPlan;

		if (this.state.showEditPlan) {
			this._getAllSubscriptionPlans();
		}
	}

	// TODO: Only show payment method for the selected subscription, not all
	togglePaymentMethodsForSubscription() {
		this.state.showEditPaymentMethodsPanel = !this.state.showEditPaymentMethodsPanel;
	}
}

// Component decorations
let component = {
	bindings: {},
	template: template,
	controller: CustomerDetailsComponent
};

export default component;
