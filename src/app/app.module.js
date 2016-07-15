// Styles
import '../assets/less/app.less';
// Components
import AppComponent from './app.component';
import AppHomeViewComponent from './components/view/home/home.component';
// Modules
import BrainTreeModule from './modules/braintree/braintree.module';
import CoreModule from './modules/core/core.module';

let ngModule = angular.module('braintree-angular-spa', [
	BrainTreeModule.name,
	CoreModule.name
]);

/**
 * App Module
 */
ngModule
	.run(appRun)
	.config(appConfig)
	.component('braintreeApp', AppComponent)
	.component('appHome', AppHomeViewComponent)
	.value('$routerRootComponent', 'braintreeApp');

/* @ngInject */
function appConfig($locationProvider) {
	$locationProvider.html5Mode(false);
}

/* @ngInject */
function appRun() {

}

export default ngModule;
