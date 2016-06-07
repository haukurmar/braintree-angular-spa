import template from './customer-details.html';

// Component decorations
let component = {
	bindings: {
		customer: '<',
		cancelButtonRoute: '<',
		cancelButtonText: '<',
		editButtonRoute: '<',
		editButtonText: '<'
	},
	template : template
};

export default component;
