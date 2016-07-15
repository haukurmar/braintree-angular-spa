import CONFIG from './config.service';

let ngModule = angular.module('braintree-angular-spa.core', [
	'ngComponentRouter'
]);

ngModule
	.constant('CONFIG', CONFIG);

export default ngModule;
