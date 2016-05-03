import AppModule from './app.module';

/**
 * Manually bootstrap the application when AngularJS and
 * the application classes have been loaded.
 */
angular
	.element(document)
	.ready(function () {
		let appName = 'braintree-angular-web';
		let body = document.getElementsByTagName("body")[0];

		let app = angular.module(appName, [AppModule.name]);
		angular.bootstrap(body, [app.name], {strictDi: false})
	});
