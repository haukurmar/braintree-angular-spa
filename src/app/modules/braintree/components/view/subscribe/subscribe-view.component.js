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
	}

	// Public viewModel methods
	// --------------------------------------------------
}

// Component decorations
let component = {
	bindings: {},
	template : template,
	controller: SubscribeViewComponent
};

export default component;
