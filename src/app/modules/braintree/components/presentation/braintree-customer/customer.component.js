import template from './customer.html';

// Inject dependencies
@Inject('$http', 'braintreeService')
class CustomerComponent {
	constructor() {
		this.message = '';
		this.isError = false;
		this.isCreated = false;
		this.showForm = true;

		this.customerModel = {};
	}

	// Private methods
	// --------------------------------------------------
	$onInit() {
		console.log('Braintree Customer Component $onInit...');
	}

	// Public viewModel methods
	// --------------------------------------------------
	createCustomer() {
		this.message = 'Creating customer...';
		this.showForm = false;

		this.braintreeService.createCustomer(this.customerModel).then(
			(success) => {
				this.message = 'Customer created: ' + JSON.stringify(success.data);
			},
			(error) => {
				// TODO: Handle errors better (use error.data.errors collection)
				this.message = error.data.message;
				console.log('Error message', error.data.message);
				console.log('Errors:', error.data.errors);
			}
		);
	}
}

// Component decorations
let component = {
	bindings: {},
	template: template,
	controller: CustomerComponent
};

export default component;
