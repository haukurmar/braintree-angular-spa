import CONFIG from './config.service';

let ngModule = angular.module('core', [
	'ngComponentRouter'
]);

ngModule
	.constant('CONFIG', CONFIG);

export default ngModule;
