import template from './creditcard.html';

// Component decorations
let component = {
	bindings: {
		onProcessPayment: '&'
	},
	template: template
};

export default component;
