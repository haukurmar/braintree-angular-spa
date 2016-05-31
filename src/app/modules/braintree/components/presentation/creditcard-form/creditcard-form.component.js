import template from './creditcard-form.html';

// Component decorations
let component = {
	bindings: {
		backButtonText: '<',
		backButtonRoute: '<',
		backButtonVisible: '<',
		hideAmount: '<',
		submitButtonText: '<',
		onSubmit: '&'
	},
	template: template
};

export default component;
