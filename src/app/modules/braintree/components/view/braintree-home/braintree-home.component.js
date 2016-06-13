import template from './braintree-home.html';
import {ROUTES} from '../../../braintree.constants';

// Inject dependencies
@Inject('braintreeService')
class BraintreeHomeComponent {
	constructor() {
	}

	// Private methods
	// --------------------------------------------------
	$onInit() {
		// tmp
		this.braintreeService.initMode('subscription');
		let customer = {
			id: 'haukurmar21'
			//id: 'multiplesubs'
			//id: 'nosub'
		};
		this.braintreeService.updateCustomerData(customer);
	}

	// Public viewModel methods
	// --------------------------------------------------
}

// Component decorations
let component = {
	bindings: {},
	template,
	controller: BraintreeHomeComponent,
	$routeConfig: [
		{path: '/',         name: ROUTES.CUSTOMER_DETAILS,   component: 'braintreeCustomerDetails', useAsDefault: true},
		{path: '/subscribe', name: ROUTES.SUBSCRIPTION,   component: 'braintreeSubscription'},
		{path: '/subscription-overview', name: ROUTES.SUBSCRIPTION_OVERVIEW,   component: 'braintreeSubscriptionOverview'},
		{path: '/customer', name: ROUTES.CUSTOMER,   component: 'braintreeCustomer'},
		{path: '/customer-details', name: ROUTES.CUSTOMER_DETAILS,   component: 'braintreeCustomerDetails'},
		{path: '/payment-methods', name: ROUTES.PAYMENT_METHODS,   component: 'braintreePaymentMethods'},
		{path: '/cards', name: ROUTES.CARDS,   component: 'braintreeCreditCard'},
		{path: '/paypal', name: ROUTES.PAYPAL,   component: 'braintreePaypal'},
		{path: '/dropin', name: ROUTES.DROPIN,   component: 'braintreeDropin'}
	]
};

export default component;
