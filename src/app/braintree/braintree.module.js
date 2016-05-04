import BraintreeService from './braintree.service';
import DropinComponent from './braintree-dropin/dropin.component';
import CreditCardComponent from './braintree-creditcard/creditcard.component';


let ngModule = angular.module('braintree', []);

/**
 * App Module
 */
ngModule
	.service('braintreeService', BraintreeService)
	.component('braintreeDropin', DropinComponent)
	.component('braintreeCreditcard', CreditCardComponent);

export default ngModule;
