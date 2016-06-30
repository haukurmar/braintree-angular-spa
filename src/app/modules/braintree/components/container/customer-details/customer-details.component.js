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
				linkText: ''
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

	// Public viewModel methods
	// --------------------------------------------------

	/**
	 * Cancel a specific subscription.
	 * @param subscription
	 */
	cancelSubscription(subscription) {
		this.state.subscriptions.loading.isLoading = true;
		this.state.subscriptions.loading.text = 'Canceling subscription...';

		this.braintreeService.cancelSubscription(subscription.id).then(
			(response) => {
				console.log('cancel response', response);
				if (this.customer.id) {
					this.getCustomerDetails(this.customer.id);
				}

				this.state.subscriptions.loading.isLoading = false;
			},
			(error) => {
				console.log(error.data.message);
				this.state.subscriptions.loading.isLoading = false;
				this.state.message.text = error.data.message;
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
		let subscriptionChanges = {
			paymentMethodToken: newPaymentMethod.token
		};

		this.updateSubscription(subscription, subscriptionChanges, loadingText);
	}

	/**
	 * Delete a payment method for a specific subscription.
	 * Subscription will also be canceled
	 * @param paymentMethod
	 */
	deletePaymentMethod(paymentMethod) {
		this.state.subscriptions.loading.isLoading = true;
		this.state.subscriptions.loading.text = 'Deleting payment method...';

		this.braintreeService.deletePaymentMethod(paymentMethod).then(
			(response) => {
				if (this.customer.id) {
					this.getCustomerDetails(this.customer.id);
				}

				this.state.subscriptions.loading.isLoading = false;
			},
			(error) => {
				this.state.subscriptions.loading.isLoading = false;
				this.state.message.text = error.data.message;
			}
		);
	}

	/**
	 * Disables auto renew for a specific subscription.
	 * @param subscription
	 */
	disableAutoRenew(subscription) {
		let loadingText = 'Disabling auto renew';
		let subscriptionChanges = {
			price: 0.00,
			numberOfBillingCycles: subscription.currentBillingCycle
		};

		this.updateSubscription(subscription, subscriptionChanges, loadingText);
	}

	/**
	 * Enables auto renew for a specific subscription.
	 * @param subscription
	 */
	enableAutoRenew(subscription) {
		let loadingText = 'Disabling auto renew';

		let subscriptionChanges = {
			price: subscription.plan.price,
			numberOfBillingCycles: null
		};

		this.updateSubscription(subscription, subscriptionChanges, loadingText);
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
				this.state.message.text = error.data.message;
			}
		);
	}

	// TODO: Change this so we use an endpoint in the api for this, so we are not sending the price over the wire
	updateSubscription(subscription, subscriptionChanges, loadingText) {
		this.state.subscriptions.loading.isLoading = true;
		this.state.subscriptions.loading.text = loadingText;

		this.braintreeService.updateSubscription(subscription.id, subscriptionChanges).then(
			(response) => {
				if (this.customer.id) {
					this.getCustomerDetails(this.customer.id);
				}

				this.state.subscriptions.loading.isLoading = false;
			},
			(error) => {
				console.log(error.data.message);
				this.state.subscriptions.loading.isLoading = false;
				this.state.message.text = error.data.message;
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
