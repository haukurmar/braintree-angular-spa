import template from './braintree-home.html';

// Component decorations
let component = {
	bindings: {},
	template,
	$routeConfig: [
		{path: '/',         name: 'Customer',   component: 'braintreeCustomer', useAsDefault: true},
		{path: '/customer', name: 'Customer',   component: 'braintreeCustomer'},
		{path: '/cards',    name: 'CreditCards',component: 'braintreeCreditCard'},
		{path: '/dropin',   name: 'Dropin',     component: 'braintreeDropin'}
	]
};

export default component;
