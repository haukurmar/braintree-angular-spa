// Inject dependencies
@Inject('$http', 'braintreeService')
export default class CustomerComponent {
	constructor() {
		this.message = '';
		this.isError = false;
		this.isCreated = false;
		this.showForm = true;

		this.customerModel = {};

		this._activate();
	}

	// Private methods
	// --------------------------------------------------
	_activate() {
		console.log('Braintree Customer Component...');
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
