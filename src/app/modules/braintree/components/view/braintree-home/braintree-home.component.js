import template from './braintree-home.html';
import {ROUTES} from '../../../braintree.constants';

// Component decorations
let component = {
	bindings: {},
	template,
	$routeConfig: [
		{path: '/',         name: ROUTES.SUBSCRIPTION,   component: 'braintreeSubscription', useAsDefault: true},
		{path: '/subscribe', name: ROUTES.SUBSCRIPTION,   component: 'braintreeSubscription'},
		{path: '/subscription-overview', name: ROUTES.SUBSCRIPTION_OVERVIEW,   component: 'braintreeSubscriptionOverview'},
		{path: '/customer', name: ROUTES.CUSTOMER,   component: 'braintreeCustomer'},
		{path: '/payment-methods', name: ROUTES.PAYMENT_METHODS,   component: 'braintreePaymentMethods'},
		{path: '/cards', name: ROUTES.CARDS,   component: 'braintreeCreditCard'},
		{path: '/paypal', name: ROUTES.PAYPAL,   component: 'braintreePaypal'},
		{path: '/dropin', name: ROUTES.DROPIN,   component: 'braintreeDropin'}
	]
};

export default component;
