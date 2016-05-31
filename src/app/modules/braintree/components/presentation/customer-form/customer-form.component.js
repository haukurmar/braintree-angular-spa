import template from './customer-form.html';

let component = {
	bindings: {
		backButtonText: '<',
		backButtonRoute: '<',
		backButtonVisible: '<',
		customerModel: '<',
		onSubmit: '&',
		submitButtonText: '<'
	},
	template: template
};

export default component;
