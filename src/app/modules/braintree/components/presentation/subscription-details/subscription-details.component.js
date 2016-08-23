import template from './subscription-details.html';

// Component decorations
let component = {
	bindings: {
		subscription: '<',
		formatCurrencyAmount: '&'
	},
	template : template
};

export default component;
