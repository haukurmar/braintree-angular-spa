import template from './customer.html';

// Inject dependencies
@Inject('braintreeService')
class BraintreeSubscribeComponent {
	constructor() {
		this.message = '';
		this.loadingText = '';
		this.state = {
			loading: false,
			showForm: true
		};
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
		console.log('Creating customer from customer', customerModel);
		this.loadingText = 'Creating customer...';
		this.state.loading = true;

		this.braintreeService.createCustomer(customerModel).then(
			(success) => {
				this.state.loading = false;
				this.state.showForm = false;
				this.message = 'Customer created successfully!';
			},
			(error) => {
				// TODO: Handle errors better (use error.data.errors collection)
				this.message = error.data.message;
				this.state.loading = false;
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
