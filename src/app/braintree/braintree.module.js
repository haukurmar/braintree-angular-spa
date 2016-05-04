import DropinComponent from './braintree-dropin/dropin.component';

let ngModule = angular.module('braintree', []);

/**
 * App Module
 */
ngModule
	.component('braintreeDropin', DropinComponent);

export default ngModule;
