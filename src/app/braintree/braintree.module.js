import DropinComponent from './braintree-dropin/dropin.component';
import CreditCardComponent from './braintree-creditcard/creditcard.component';

let ngModule = angular.module('braintree', []);

/**
 * App Module
 */
ngModule
	.component('braintreeDropin', DropinComponent)
	.component('braintreeCreditcard', CreditCardComponent);

export default ngModule;
