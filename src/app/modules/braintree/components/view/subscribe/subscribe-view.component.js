import template from './subscribe-view.html';

// Inject dependencies
@Inject('braintreeService')
class SubscribeViewComponent {
	constructor() {
	}

	// Private methods
	// --------------------------------------------------
	$onInit() {
		this.braintreeService.initMode('subscription');
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
