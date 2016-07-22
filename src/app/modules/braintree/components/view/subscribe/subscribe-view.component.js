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

		var customer = {
			id: this.customerId
		};

		this.braintreeDataService.updateCustomerData(customer);
	}

	// Public viewModel methods
	// --------------------------------------------------
}

// Component decorations
let component = {
	bindings: {
		customerId: '<'
	},
	template : template,
	controller: SubscribeViewComponent
};

export default component;
