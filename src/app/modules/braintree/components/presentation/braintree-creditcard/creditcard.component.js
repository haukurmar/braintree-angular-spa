import template from './creditcard.html';

// Component decorations
let component = {
	bindings: {
		onSubmit: '&',
		buttonText: '<'
	},
	template: template
};

export default component;
