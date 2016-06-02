import template from './customer-details.html';

// Inject dependencies
@Inject()
class CustomerDetailsComponent {
	constructor() {
		this.customer = {
			firstName: 'Haukur'
		};
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
	bindings: {},
	template : template,
	controller: CustomerDetailsComponent
};

export default component;
