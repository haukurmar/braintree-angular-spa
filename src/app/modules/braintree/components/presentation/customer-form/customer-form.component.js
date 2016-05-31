import template from './customer-form.html';

let component = {
	bindings: {
		onSubmit: '&',
		buttonText: '<',
		customerModel: '<'
	},
	template: template
};

export default component;
