import template from './customer.html';
import {ROUTES} from '../../../braintree.constants';

// Inject dependencies
@Inject('braintreeService')
class BraintreeSubscribeComponent {
	constructor() {
		this.message = '';
		this.loadingText = '';
		this.state = {
			loading: false,
			showForm: true,
			nextRoute: '',
			buttonText: 'Create customer'
		};

		this.customer = null;
	}

	// Private methods
	// --------------------------------------------------
	$onInit() {
		// Get Customer from service
		this.customer = this.braintreeService.customer;
		// If we get a customerId, we fetch it from API
		if(this.customer.id) {
			this.getCustomerDetails(this.customer.id);
		}

		let mode = this.braintreeService.mode;
		if(mode.subscription) {
			this.state.buttonText = 'Continue';
		}

		console.log('Customer', this.customer);
	}

	$onChanges(changesObj) {
		console.log('Subscribe change detected', changesObj);
	}

	// Public viewModel methods
	// --------------------------------------------------
	/**
	 * Get Customer details, including current subscription plans, payment methods etc.
	 * @param customerId
	 */
	getCustomerDetails(customerId) {
		//Get Customer if logged in
		this.braintreeService.getCustomerDetails(customerId).then(
			(response) => {
				console.log('success', response);
				this.braintreeService.updateCustomerModel(response.data.customer);

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
		this.loadingText = 'Creating customer...';
		this.state.loading = true;

		// TODO: Update a current one if we have a customerId
		this.braintreeService.createCustomer(customerModel).then(
			(response) => {
				this.state.loading = false;
				this.state.showCustomerForm = false;
				this.state.showPaymentMethods = true;
				this.braintreeService.updateCustomerModel(response.data.customer);
				this.state.nextRoute = ROUTES.PAYMENT_METHODS;
				this.$router.navigate([this.state.nextRoute]);
			},
			(error) => {
				// TODO: Handle errors better (use error.data.errors collection)
				this.message = error.data.message;
				this.state.loading = false;
				this.state.showCustomerForm = true;

				console.log('Error message', error.data.message);
				console.log('Errors:', error.data.errors);
			}
		);
	}
}

// Component decorations
let component = {
	bindings: {
		$router: '<'
	},
	template: template,
	controller: BraintreeSubscribeComponent
};

export default component;
