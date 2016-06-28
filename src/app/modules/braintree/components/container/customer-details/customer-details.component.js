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
			showDetailsPanel: true
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
	 * Get Customer details, including current subscription plans, payment methods etc.
	 * @param customerId
	 */
	getCustomerDetails(customerId) {
		this.state.loading.isLoading = true;
		this.state.loading.text = 'Loading...';

		//Get Customer if logged in
		this.braintreeService.getCustomer(customerId, true).then(
			(response) => {
				console.log('success', response);
				this.braintreeService.updateCustomerData(response.data.customer);
				this.customer = this.braintreeService.customer;
				this.state.loading.isLoading = false;
			},
			(error) => {
				console.log(error.data.message);
				this.state.loading.isLoading = false;
				this.state.message.text = error.data.message;
			}
		);
	}

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

	disableAutoRenew(subscription) {
		this.state.subscriptions.loading.isLoading = true;
		this.state.subscriptions.loading.text = 'Updating subscription...';

		let updatedSubscription = {
			price: 0.00,
		};

		this.braintreeService.updateSubscription(subscription.id, updatedSubscription).then(
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

	enableAutoRenew(subscription) {
		this.state.subscriptions.loading.isLoading = true;
		this.state.subscriptions.loading.text = 'Updating subscription...';

		let updatedSubscription = {
			price: subscription.plan.price
		};

		this.braintreeService.updateSubscription(subscription.id, updatedSubscription).then(
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
}

// Component decorations
let component = {
	bindings: {},
	template: template,
	controller: CustomerDetailsComponent
};

export default component;
