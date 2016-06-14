import template from './customer-details.html';
import { ROUTES } from '../../../braintree.constants';

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
		console.log('cancel it', subscription);
		this.braintreeService.cancelSubscription(subscription.id).then(
			(response) => {
				console.log('cancel response', response);
				if (this.customer.id) {
					this.getCustomerDetails(this.customer.id);
				}
			},
			(error) => {
				console.log(error.data.message);
				this.state.loading.isLoading = false;
				this.state.message.text = error.data.message;
			}
		);
	}

	enableSubscription(subscription) {
		console.log('Enable subscription again', subscription);

		let subscriptionData = {
			paymentMethodToken: subscription.paymentMethodToken,
			planId: subscription.planId
		};

		this.braintreeService.createSubscription(subscriptionData).then(
			(response) => {
				if (response.data.success) {
					this.message = 'Subscription was created!';

					if (this.customer.id) {
						this.getCustomerDetails(this.customer.id);
					}

				} else {
					console.log('Error creating a sub', response.data.message);
					// TODO: Handle different failures maybe?
					this.message = 'An error occurred creating a subscription: ' + response.data.message;
				}
			},
			(error) => {
				console.log('Error creating a subcription', error);
				this.message = error.data.message;
				this.state.loading = false;
			}
		);
	}
}

// Component decorations
let component = {
	bindings: {

	},
	template : template,
	controller: CustomerDetailsComponent
};

export default component;
