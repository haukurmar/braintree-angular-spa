import template from './customer-details.html';

// Component decorations
let component = {
	bindings: {
		customer: '<',
		cancelButtonText: '<',
		enableButtonText: '<',
		editButtonRoute: '<',
		editButtonText: '<',
		onCancelSubscription: '&',
		onEnableSubscription: '&'
	},
	template : template
};

export default component;
