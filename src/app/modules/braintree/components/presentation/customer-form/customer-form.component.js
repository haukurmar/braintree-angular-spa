import template from './customer-form.html';

let component = {
	bindings: {
		onSubmit: '&',
		buttonText: '<'
	},
	template: template
};

export default component;
