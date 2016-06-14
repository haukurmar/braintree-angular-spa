import template from './payment-method.html';

// Component decorations
let component = {
	bindings: {
		paymentMethod: '<',
		cardButtonText: '<',
		cardButtonVisible: '<',
		paypalButtonText: '<',
		paypalButtonVisible: '<',
		onCardButtonClick: '&',
		onPaypalButtonClick: '&',

	},
	template : template
};

export default component;
