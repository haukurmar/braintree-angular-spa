import '../assets/less/app.less';
import AppComponent from './app.component';

let ngModule = angular.module('app', [
	'ui.router'
]);

/**
 * App Module
 */
ngModule
	.config(appConfig)
	.run(appRun)
	.component('app', AppComponent);

/* @ngInject */
function appConfig($stateProvider, $urlRouterProvider) {
	console.log('appConfig');
	// ---------- Routes ----------
	$urlRouterProvider.otherwise('/');

	// ----- States -----
	let home = {
		name: 'app',
		url: '/',
		abstract: true,
		views: {
			'appMain': {template: '<div ui-view="appContent"></div>'}
		}
	};

	// ----- Register states -----
	$stateProvider
		.state(home);
}

/* @ngInject */
function appRun($rootScope, $state) {

}

export default ngModule;
