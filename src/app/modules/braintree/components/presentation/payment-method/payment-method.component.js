import template from './payment-method.html';

// Component decorations
let component = {
	bindings: {
		paymentMethod: '<',
		cardButtonText: '<',
		cardButtonVisible: '<',
		deleteLinkText: '<',
		deleteLinkVisible: '<',
		paypalButtonText: '<',
		paypalButtonVisible: '<',
		onCardButtonClick: '&',
		onDeleteClick: '&',
		onPaypalButtonClick: '&',

	},
	template : template
};

export default component;
