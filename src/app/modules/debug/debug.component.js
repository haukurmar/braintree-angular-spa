import template from './debug.html';

// Inject dependencies
@Inject('braintreeDataService')
class AppDebugComponent {
	constructor() {
		this.customer = {};
		this.selectedSubscription = {};
	}

	// Private methods
	// --------------------------------------------------
	$onInit() {
		this.customer = this.braintreeDataService.customer;
	}

	refresh() {
		this.customer = this.braintreeDataService.customer;
	}
}

// Component decorations
let component = {
	bindings: {
	},
	template: template,
	controller: AppDebugComponent
};

export default component;
