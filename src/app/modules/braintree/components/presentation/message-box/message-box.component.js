import template from './message-box.html';

// Inject dependencies
@Inject()
class MessageBoxComponent {
	constructor() {
	}

	// Private methods
	// --------------------------------------------------
	$onInit() {

	}

	// Public viewModel methods
	// --------------------------------------------------
}

// Component decorations
let component = {
	bindings: {
		message: '<',
		onRoute: '&'
	},
	template : template,
	controller: MessageBoxComponent
};

export default component;
