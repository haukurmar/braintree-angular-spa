import template from './customer-form.html';

let component = {
	bindings: {
		backButtonText: '<',
		backButtonRoute: '<',
		backButtonVisible: '<',
		customerModel: '<',
		onSubmit: '&',
		submitButtonText: '=', // Use 2-way here because it can change from parent
		routeTo: '&'
	},
	template: template
};

export default component;
