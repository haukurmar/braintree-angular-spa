import template from './customer-details.html';

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
}

// Component decorations
let component = {
	bindings: {},
	template : template,
	controller: CustomerDetailsComponent
};

export default component;
