import template from './app.html';
import controller from './app.controller';

// Component decorations
let component = {
	bindings: {},
	template,
	controller,
	controllerAs: 'vm',
	$routeConfig: [
		{ path: '/', name: 'Home', component: 'appHome', useAsDefault: true },
		{ path: '/braintree/...', name: 'BraintreeHome', component: 'braintreeHome' }
	]
};

export default component;
