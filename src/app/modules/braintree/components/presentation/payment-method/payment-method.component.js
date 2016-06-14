import template from './payment-method.html';

// Component decorations
let component = {
	bindings: {
		paymentMethod: '<',
		cardButtonText: '<',
		paypalButtonText: '<',
		onCardButtonClick: '&',
		onPaypalButtonClick: '&'
	},
	template : template
};

export default component;
