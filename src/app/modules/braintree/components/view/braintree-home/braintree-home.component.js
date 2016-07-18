import template from './braintree-home.html';
import {ROUTES} from '../../../braintree.constants';

// Inject dependencies
@Inject('braintreeService')
class BraintreeHomeComponent {
	constructor() {
		this.state = {
			enableWizardMode: false
		}
	}

	// Private methods
	// --------------------------------------------------
	$onInit() {
		this.initFlowMode();

		// Init registered customer (debug)
		let customer = {
			//id: '27547087'
			id: '37312055'
		};
		this.braintreeService.updateCustomerData(customer);
	}

	// Public viewModel methods
	// --------------------------------------------------
	initFlowMode() {
		if(this.state.enableWizardMode) {
			this.braintreeService.initMode('subscription');
		} else {
			this.braintreeService.initMode('standAlone');
		}
	}
}

// Component decorations
let component = {
	bindings: {},
	template,
	controller: BraintreeHomeComponent,
	// $routeConfig: [
	// 	{path: '/',         name: ROUTES.CUSTOMER_DETAILS,   component: 'braintreeCustomerDetails', useAsDefault: true},
	// 	{path: '/subscribe', name: ROUTES.SUBSCRIPTION,   component: 'braintreeSubscription'},
	// 	{path: '/subscription-overview', name: ROUTES.SUBSCRIPTION_OVERVIEW,   component: 'braintreeSubscriptionOverview'},
	// 	{path: '/customer', name: ROUTES.CUSTOMER,   component: 'braintreeCustomer'},
	// 	{path: '/customer-details', name: ROUTES.CUSTOMER_DETAILS,   component: 'braintreeCustomerDetails'},
	// 	{path: '/payment-methods', name: ROUTES.PAYMENT_METHODS,   component: 'braintreePaymentMethods'},
	// 	{path: '/cards', name: ROUTES.CARDS,   component: 'braintreeCreditCard'},
	// 	{path: '/paypal', name: ROUTES.PAYPAL,   component: 'braintreePaypal'},
	// 	{path: '/dropin', name: ROUTES.DROPIN,   component: 'braintreeDropin'}
	// ]
};

export default component;
