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
			subscriptions: {
				loading: {
					isLoading: false,
					text: ''
				}
			},
			message: {
				text: '',
				link: '',
				linkText: '',
				type: 'warning'
			},
			showDetailsPanel: true,
			showEditPaymentMethodsPanel: false,
			showCreditCardForm: false,
			showPaypalForm: false
		};

		this.routes = {
			editSubscriptionRoute: ROUTES.SUBSCRIPTION,
			cancelSubscriptionRoute: ROUTES.SUBSCRIPTION // TODO: CHANGE
		};

		this.customer = null;
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

	// Public viewModel methods
	// --------------------------------------------------

	/**
	 * Save a creditcard to the vault and adding as a default payment method for subscription.
	 * @param paymentMethod
	 * @param subscription
	 */
	addCreditCard(paymentMethod, subscription) {
		this.state.loading.text = 'Saving payment information...';
		this.state.loading.isLoading = true;
		let customerId = this.braintreeService.customer.id;

		// Send request to get token, then use the token to tokenize credit card info and verify the card
		this.braintreeService.createVaultedPayment(customerId, paymentMethod).then(
			(response) => {
				this.state.loading.isLoading = false;

				this.addPaymentMethod(response.data.customer.paymentMethod, subscription);
			},
			(error) => {
				// TODO: Handle errors better
				this._displayMessage(error, 'danger');
				this.state.loading.isLoading = false;
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
		this.state.loading.isLoading = true;
		this.state.loading.text = 'Canceling subscription...';

		this.braintreeService.cancelSubscription(subscription.id).then(
			(response) => {
				console.log('cancel response', response);
				if (this.customer.id) {
					this.getCustomerDetails(this.customer.id);
				}

				this.state.loading.isLoading = false;
			},
			(error) => {
				console.log(error.data.message);
				this.state.loading.isLoading = false;
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
			paymentMethodToken: newPaymentMethod.token
		};

		this.updateSubscription(subscription, subscriptionChanges, loadingText, messageSuccessText);
	}

	/**
	 * Delete a payment method for a specific subscription.
	 * Subscription will also be canceled
	 * @param paymentMethod
	 */
	deletePaymentMethod(paymentMethod) {
		this._clearMessage();
		this.state.loading.isLoading = true;
		this.state.loading.text = 'Deleting payment method...';

		this.braintreeService.deletePaymentMethod(paymentMethod).then(
			(response) => {
				if (this.customer.id) {
					this.getCustomerDetails(this.customer.id);
				}

				this.state.loading.isLoading = false;
				this._displayMessage('Payment method has been deleted, and all connected subscriptions have been cancelled.', 'success');
			},
			(error) => {
				this.state.loading.isLoading = false;
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
		let loadingText = 'Disabling auto renew';
		let messageSuccessText = 'Auto renew has been enabled.';

		let subscriptionChanges = {
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
		this.state.loading.isLoading = true;
		this.state.loading.text = 'Loading profile details...';

		//Get Customer if logged in
		this.braintreeService.getCustomer(customerId, true).then(
			(response) => {
				this.braintreeService.updateCustomerData(response.data.customer);
				this.customer = response.data.customer;
				this.state.loading.isLoading = false;
			},
			(error) => {
				this.state.loading.isLoading = false;
				this._displayMessage(error.data.message, 'danger');
			}
		);
	}

	// TODO: Change this so we use an endpoint in the api for this, so we are not sending the price over the wire
	updateSubscription(subscription, subscriptionChanges, loadingText, messageSuccessText) {
		this._clearMessage();
		this.state.loading.isLoading = true;
		this.state.loading.text = loadingText;

		this.braintreeService.updateSubscription(subscription.id, subscriptionChanges).then(
			(response) => {
				if (this.customer.id) {
					this.getCustomerDetails(this.customer.id);
				}

				this.state.loading.isLoading = false;
				this.state.showEditPaymentMethodsPanel = false;
				this._displayMessage(messageSuccessText, 'success');
			},
			(error) => {
				console.log(error.data.message);
				this.state.loading.isLoading = false;
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
