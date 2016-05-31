import template from './customer.html';
import {ROUTES} from '../../../braintree.constants';

// Inject dependencies
@Inject('braintreeService')
class BraintreeSubscriptionComponent {
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
			showForm: true,
			buttonText: 'Create customer'
		};

		this.routes = {
			nextRoute: '',
			subscription: ROUTES.SUBSCRIPTION
		};

		this.customer = null;
		this.customerModel = {};
	}

	// Private methods
	// --------------------------------------------------
	$onInit() {
		// Get Customer from service
		this.customer = this.braintreeService.customer;

		// Subscription mode
		let mode = this.braintreeService.mode;
		if (mode.subscription) {
			//this.state.buttonText = 'Continue';

			// If the user has not chosen a subscription plan (or refreshed the page)
			if (!this.customer.subscriptionPlan) {
				this.state.message.text = 'You need to choose a subscription plan before you proceed';
				this.state.message.linkText = 'Go to subscription page';
				this.state.message.link = ROUTES.SUBSCRIPTION;
				this.state.showForm = false;
			}
		}

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
		//Get Customer if logged in
		this.braintreeService.getCustomer(customerId).then(
			(response) => {
				console.log('success', response);
				this.braintreeService.updateCustomerData(response.data.customer);
				this.customerModel = response.data.customer;

				// TODO: What to do here?
			},
			(error) => {
				console.log(error.data.message);
			}
		);
	}

	/**
	 * Create a new customer or update an existing one
	 * @param customerModel
	 */
	saveCustomer(customerModel) {
		this.state.showform = false;
		this.routes.nextRoute = ROUTES.PAYMENT_METHODS;

		console.log('customerModel', customerModel);

		if (!this.customer.id) {
			this.state.loading.text = 'Creating customer...';
			this.state.loading.isLoading = true;

			this.braintreeService.createCustomer(customerModel).then(
				(response) => {
					this.state.loading.isLoading = false;

					// Save customer data to service
					this.braintreeService.updateCustomerData(response.data.customer);

					// Redirect to next step
					this.$router.navigate([this.routes.nextRoute]);
				},
				(error) => {
					// TODO: Handle errors better (use error.data.errors collection)
					this.state.message.text = error.data.message;
					this.state.loading.isLoading = false;
					this.state.showform = true;

					console.log('Error message', error.data.message);
					console.log('Errors:', error.data.errors);
				}
			);
		} else {
			this.braintreeService.updateCustomerData(customerModel);
			// TODO: Update customer in Braintree
			this.$router.navigate([this.routes.nextRoute]);
		}
	}
}

// Component decorations
let component = {
	bindings: {
		$router: '<'
	},
	template: template,
	controller: BraintreeSubscriptionComponent
};

export default component;
