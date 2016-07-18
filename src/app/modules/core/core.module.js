import CONFIG from './config.service';

let ngModule = angular.module('braintree-angular-spa.core', [
	'ngRoute'

]);

ngModule
	.constant('CONFIG', CONFIG);

export default ngModule;
