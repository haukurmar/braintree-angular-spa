// Styles
import '../assets/less/app.less';
// Components
import AppComponent from './app.component';
import AppHomeViewComponent from './components/view/home/home.component';
// Modules
import BrainTreeModule from './modules/braintree/braintree.module';
import CoreModule from './modules/core/core.module';
import DebugModule from './modules/debug/debug.module';

let ngModule = angular.module('braintree-angular-spa.modules.app', [
	BrainTreeModule.name,
	CoreModule.name,
	DebugModule.name
]);

/**
 * App Module
 */
ngModule
	.run(appRun)
	.config(appConfig)
	.component('braintreeApp', AppComponent)
	.component('appHome', AppHomeViewComponent);

/* @ngInject */
function appConfig() {


}

/* @ngInject */
function appRun() {

}

export default ngModule;
