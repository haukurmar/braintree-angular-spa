import BraintreeService from './braintree.service';
import DropinComponent from './components/braintree-dropin/dropin.component';
import CreditCardComponent from './components/braintree-creditcard/creditcard.component';
import CustomerComponent from './components/braintree-customer/customer.component';

let ngModule = angular.module('braintree', []);

/**
 * App Module
 */
ngModule
	.service('braintreeService', BraintreeService)
	.component('braintreeCustomer', CustomerComponent)
	.component('braintreeDropin', DropinComponent)
	.component('braintreeCreditcard', CreditCardComponent);

export default ngModule;
