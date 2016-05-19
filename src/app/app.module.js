// Styles
import '../assets/less/app.less';
// Components
import AppComponent from './app.component';
import AppHomeViewComponent from './components/view/home/home.component';
// Modules
import BrainTreeModule from './modules/braintree/braintree.module';
import CoreModule from './modules/core/core.module';

let ngModule = angular.module('app', [
	BrainTreeModule.name,
	CoreModule.name
]);

/**
 * App Module
 */
ngModule
	.config(appConfig)
	.run(appRun)
	.component('app', AppComponent)
	.component('appHome', AppHomeViewComponent)
	.value('$routerRootComponent', 'app');

/* @ngInject */
function appConfig($locationProvider) {
	$locationProvider.html5Mode(false);
}

/* @ngInject */
function appRun($rootScope) {

}

export default ngModule;
