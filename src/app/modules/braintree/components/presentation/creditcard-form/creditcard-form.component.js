import template from './creditcard-form.html';

// Component decorations
let component = {
	bindings: {
		buttonText: '<',
		hideAmount: '<',
		onSubmit: '&',
	},
	template: template
};

export default component;
