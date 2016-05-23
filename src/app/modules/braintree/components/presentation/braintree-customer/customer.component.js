import template from './customer.html';

let component = {
	bindings: {
		onSubmit: '&',
		buttonText: '<'
	},
	template: template
};

export default component;
