import template from './customer.html';

// Inject dependencies
@Inject()
class CustomerComponent {
	constructor() {
		this.message = '';
		this.isError = false;
		this.isCreated = false;
	}

	// Private methods
	// --------------------------------------------------
	$onInit() {
		console.log('Braintree Customer Component $onInit...');
	}

	$onChanges(changesObj) {
		console.log('Customer object change', changesObj);
	}
}

// Component decorations
let component = {
	bindings: {
		onCreateCustomer: '&'
	},
	template: template,
	controller: CustomerComponent
};

export default component;
