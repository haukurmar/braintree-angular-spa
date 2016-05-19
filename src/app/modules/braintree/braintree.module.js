// Services
import BraintreeService from './braintree.service';

// Presentation Components
import UICreditCardComponent from './components/presentation/braintree-creditcard/creditcard.component';
import UICustomerComponent from './components/presentation/braintree-customer/customer.component';

// Business Components
import CustomerBusinessComponent from './components/business/braintree-customer/customer.component';
import CreditCardBusinessComponent from './components/business/braintree-creditcard/creditcard.component';
import DropinComponent from './components/business/braintree-dropin/dropin.component';
// View Components (Route Components)
import HomeViewComponent from './components/view/braintree-home/braintree-home.component';

let ngModule = angular.module('braintree', []);

/**
 * App Module
 */
ngModule
	.service('braintreeService', BraintreeService)
	.component('braintreeCustomer', CustomerBusinessComponent)
	.component('braintreeDropin', DropinComponent)
	.component('braintreeCreditCard', CreditCardBusinessComponent)
	.component('braintreeHome', HomeViewComponent)
	.component('uiBraintreeCustomer', UICustomerComponent)
	.component('uiBraintreeCreditcard', UICreditCardComponent);

export default ngModule;
