import template from './braintree-home.html';

// Component decorations
let component = {
	bindings: {},
	template,
	$routeConfig: [
		{path: '/',         name: 'Subscribe',   component: 'braintreeSubscribe', useAsDefault: true},
		{path: '/subscribe', name: 'Subscribe',   component: 'braintreeSubscribe'},
		{path: '/customer', name: 'Customer',   component: 'braintreeCustomer'},
		{path: '/cards',    name: 'CreditCards',component: 'braintreeCreditCard'},
		{path: '/dropin',   name: 'Dropin',     component: 'braintreeDropin'}
	]
};

export default component;
