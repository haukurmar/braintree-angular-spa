import template from './subscribe.html';

// Inject dependencies
@Inject('$http', 'braintreeService')
class BraintreeSubscribeComponent {
	constructor() {
		this.message = '';
		this.isError = false;
		this.isCreated = false;
		this.showForm = true;
	}

	// Private methods
	// --------------------------------------------------
	$onInit() {

	}

	$onChanges(changesObj) {
		console.log('Subscribe change detected', changesObj);
	}

	// Public viewModel methods
	// --------------------------------------------------
	createCustomer(customerModel) {
		console.log('Creating customer from subscribe', customerModel);
		this.message = 'Creating customer...';
		this.showForm = false;

		this.braintreeService.createCustomer(customerModel).then(
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
	bindings: {

	},
	template : template,
	controller: BraintreeSubscribeComponent
};

export default component;
