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
		if(this.customerData) {
			if(this.customerData.id) {
				customer.id = this.customerData.id;
			}
			if(this.customerData.email) {
				customer.email = this.customerData.email;
			}
			if(this.customerData.firstName) {
				customer.firstName = this.customerData.firstName;
			}
			if(this.customerData.lastName) {
				customer.lastName = this.customerData.lastName;
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
		customerData: '<'
	},
	template : template,
	controller: SubscribeViewComponent
};

export default component;
