// Container Components
import DebugComponent from './debug.component';

let ngModule = angular.module('braintree-angular-spa.modules.debug', [
	'jsonFormatter'
]);

/**
 * App Module
 */
ngModule
	// Container components
	.component('appDebug', DebugComponent);

export default ngModule;
