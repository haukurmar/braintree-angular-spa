// Services
import BraintreeService from './braintree.service';

// Presentation Components
import DropinComponent from './components/presentation/braintree-dropin/dropin.component';
import CreditCardComponent from './components/presentation/braintree-creditcard/creditcard.component';
import CustomerComponent from './components/presentation/braintree-customer/customer.component';

// View Components (Route Components)
import HomeViewComponent from './components/view/braintree-home/braintree-home.component';

let ngModule = angular.module('braintree', []);

/**
 * App Module
 */
ngModule
	.service('braintreeService', BraintreeService)
	.component('braintreeHome', HomeViewComponent)
	.component('braintreeCustomer', CustomerComponent)
	.component('braintreeDropin', DropinComponent)
	.component('braintreeCreditcard', CreditCardComponent);

export default ngModule;
