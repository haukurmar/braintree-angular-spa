import template from './customer-form.html';

let component = {
	bindings: {
		backButtonText: '<',
		backButtonRoute: '<',
		customerModel: '<',
		backButtonVisible: '<',
		onSubmit: '&',
		submitButtonText: '<'
	},
	template: template
};

export default component;
