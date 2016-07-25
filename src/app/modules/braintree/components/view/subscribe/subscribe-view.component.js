import template from './subscribe-view.html';

// Inject dependencies
@Inject('braintreeDataService')
class SubscribeViewComponent {
	constructor() {
	}

	// Private methods
	// --------------------------------------------------
	$onInit() {
		this.braintreeDataService.initMode('subscription');
		let customer = {};
		if(this.customer) {
			if(this.customer.id) {
				customer.id = this.customer.id;
			}
			if(this.customer.email) {
				customer.email = this.customer.email;
			}
			if(this.customer.firstName) {
				customer.firstName = this.customer.firstName;
			}
			if(this.customer.lastName) {
				customer.lastName = this.customer.lastName;
			}
		}

		this.braintreeDataService.updateCustomerData(customer);
	}

	// Public viewModel methods
	// --------------------------------------------------
}

// Component decorations
let component = {
	bindings: {
		customer: '<'
	},
	template : template,
	controller: SubscribeViewComponent
};

export default component;
