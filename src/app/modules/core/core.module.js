import CONFIG from './config.service';

let ngModule = angular.module('braintree-angular-spa.modules.core', [
	'ngRoute'

]);

ngModule
	.constant('CONFIG', CONFIG);

export default ngModule;
