import template from './app.html';

// Inject dependencies
@Inject()
export default class AppComponent {
	constructor() {

	}

	// Class methods
	// --------------------------------------------------
	$onInit() {
		//console.log('App Component...');
	}
}

// Component decorations
let component = {
	bindings: {},
	template: template,
	controller: AppComponent,
	$routeConfig: [
		{path: '/', name: 'Home', component: 'appHome', useAsDefault: true},
		{path: '/braintree/...', name: 'Braintree', component: 'braintreeHome'}
	]
};

export default component;
