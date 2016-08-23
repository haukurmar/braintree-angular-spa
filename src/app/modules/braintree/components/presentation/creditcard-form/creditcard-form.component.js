import template from './creditcard-form.html';

// Component decorations
let component = {
	bindings: {
		backButtonText: '<',
		backButtonRoute: '<',
		backButtonVisible: '<',
		hideAmount: '<',
		hideCurrency: '<',
		selectedMerchantAccount: '<',
		merchantAccounts: '<',
		submitButtonText: '<',
		onSubmit: '&',
		routeTo: '&'
	},
	template: template
};

export default component;
