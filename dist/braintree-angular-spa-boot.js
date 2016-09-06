/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(144);


/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	// Styles
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	__webpack_require__(71);
	
	// Components
	
	var _appComponent = __webpack_require__(81);
	
	var _appComponent2 = _interopRequireDefault(_appComponent);
	
	var _componentsViewHomeHomeComponent = __webpack_require__(84);
	
	var _componentsViewHomeHomeComponent2 = _interopRequireDefault(_componentsViewHomeHomeComponent);
	
	// Modules
	
	var _modulesBraintreeBraintreeModule = __webpack_require__(86);
	
	var _modulesBraintreeBraintreeModule2 = _interopRequireDefault(_modulesBraintreeBraintreeModule);
	
	var _modulesCoreCoreModule = __webpack_require__(94);
	
	var _modulesCoreCoreModule2 = _interopRequireDefault(_modulesCoreCoreModule);
	
	var ngModule = angular.module('braintree-angular-spa.modules.app', [_modulesBraintreeBraintreeModule2['default'].name, _modulesCoreCoreModule2['default'].name]);
	
	/**
	 * App Module
	 */
	ngModule.run(appRun).config(appConfig).component('braintreeApp', _appComponent2['default']).component('appHome', _componentsViewHomeHomeComponent2['default']);
	
	/* @ngInject */
	function appConfig() {}
	
	/* @ngInject */
	function appRun() {}
	
	exports['default'] = ngModule;
	module.exports = exports['default'];

/***/ },
/* 71 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _appHtml = __webpack_require__(82);
	
	var _appHtml2 = _interopRequireDefault(_appHtml);
	
	// Inject dependencies
	
	var Inject = __webpack_require__(83);
	
	var AppComponent = (function () {
		function AppComponent() {
			_classCallCheck(this, _AppComponent);
		}
	
		// Component decorations
	
		// Class methods
		// --------------------------------------------------
	
		_createClass(AppComponent, [{
			key: '$onInit',
			value: function $onInit() {
				//console.log('App Component...');
			}
		}]);
	
		var _AppComponent = AppComponent;
		AppComponent = Inject()(AppComponent) || AppComponent;
		return AppComponent;
	})();
	
	exports['default'] = AppComponent;
	var component = {
		bindings: {},
		template: _appHtml2['default'],
		controller: AppComponent,
		$routeConfig: [{ path: '/', name: 'Home', component: 'appHome', useAsDefault: true }, { path: '/braintree/...', name: 'Braintree', component: 'braintreeHome' }]
	};
	
	exports['default'] = component;
	module.exports = exports['default'];

/***/ },
/* 82 */
/***/ function(module, exports) {

	module.exports = "\n\n"

/***/ },
/* 83 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = Inject;
	
	function Inject() {
	  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	    args[_key] = arguments[_key];
	  }
	
	  return function (target) {
	    target.$inject = args;
	  };
	}
	
	module.exports = exports["default"];

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _homeHtml = __webpack_require__(85);
	
	var _homeHtml2 = _interopRequireDefault(_homeHtml);
	
	// Component decorations
	var component = {
		bindings: {},
		template: _homeHtml2['default']
	};
	
	exports['default'] = component;
	module.exports = exports['default'];

/***/ },
/* 85 */
/***/ function(module, exports) {

	module.exports = "<h1>Home</h1>\n<ul class=\"Nav Nav--tabs\">\n\t<li class=\"Nav-item\">\n\t\t<a class=\"Nav-link\" href=\"/\">Home</a>\n\t</li>\n\t<li class=\"Nav-item\">\n\t\t<a class=\"Nav-link\" href=\"/braintree\">Braintree</a>\n\t</li>\n</ul>\n<hr class=\"Divider\">\n"

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	// Modules
	'use strict';
	
	braintreeConfig.$inject = ["$locationProvider", "$routeProvider"];
	braintreeRun.$inject = ["$route", "$rootScope"];
	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _commonCommonModule = __webpack_require__(87);
	
	var _commonCommonModule2 = _interopRequireDefault(_commonCommonModule);
	
	var _coreCoreModule = __webpack_require__(94);
	
	var _coreCoreModule2 = _interopRequireDefault(_coreCoreModule);
	
	// Services
	
	var _servicesBraintreeDataService = __webpack_require__(95);
	
	var _servicesBraintreeDataService2 = _interopRequireDefault(_servicesBraintreeDataService);
	
	var _servicesBraintreeConfigService = __webpack_require__(99);
	
	var _servicesBraintreeConfigService2 = _interopRequireDefault(_servicesBraintreeConfigService);
	
	var _servicesBraintreeAppService = __webpack_require__(100);
	
	var _servicesBraintreeAppService2 = _interopRequireDefault(_servicesBraintreeAppService);
	
	// Container Components
	
	var _componentsContainerCustomerCustomerComponent = __webpack_require__(101);
	
	var _componentsContainerCustomerCustomerComponent2 = _interopRequireDefault(_componentsContainerCustomerCustomerComponent);
	
	var _componentsContainerCreditcardCreditcardComponent = __webpack_require__(104);
	
	var _componentsContainerCreditcardCreditcardComponent2 = _interopRequireDefault(_componentsContainerCreditcardCreditcardComponent);
	
	var _componentsContainerDropinDropinComponent = __webpack_require__(106);
	
	var _componentsContainerDropinDropinComponent2 = _interopRequireDefault(_componentsContainerDropinDropinComponent);
	
	var _componentsContainerPaypalPaypalComponent = __webpack_require__(108);
	
	var _componentsContainerPaypalPaypalComponent2 = _interopRequireDefault(_componentsContainerPaypalPaypalComponent);
	
	var _componentsContainerPaypalButtonPaypalButtonComponent = __webpack_require__(110);
	
	var _componentsContainerPaypalButtonPaypalButtonComponent2 = _interopRequireDefault(_componentsContainerPaypalButtonPaypalButtonComponent);
	
	var _componentsContainerSubscriptionPlansSubscriptionPlansComponent = __webpack_require__(112);
	
	var _componentsContainerSubscriptionPlansSubscriptionPlansComponent2 = _interopRequireDefault(_componentsContainerSubscriptionPlansSubscriptionPlansComponent);
	
	var _componentsContainerSubscriptionPlansCustomSubscriptionPlansCustomComponent = __webpack_require__(114);
	
	var _componentsContainerSubscriptionPlansCustomSubscriptionPlansCustomComponent2 = _interopRequireDefault(_componentsContainerSubscriptionPlansCustomSubscriptionPlansCustomComponent);
	
	var _componentsContainerSubscriptionOverviewSubscriptionOverviewComponent = __webpack_require__(116);
	
	var _componentsContainerSubscriptionOverviewSubscriptionOverviewComponent2 = _interopRequireDefault(_componentsContainerSubscriptionOverviewSubscriptionOverviewComponent);
	
	var _componentsContainerPaymentMethodsPaymentMethodsComponent = __webpack_require__(118);
	
	var _componentsContainerPaymentMethodsPaymentMethodsComponent2 = _interopRequireDefault(_componentsContainerPaymentMethodsPaymentMethodsComponent);
	
	var _componentsContainerBillingOverviewBillingOverviewComponent = __webpack_require__(120);
	
	var _componentsContainerBillingOverviewBillingOverviewComponent2 = _interopRequireDefault(_componentsContainerBillingOverviewBillingOverviewComponent);
	
	// Presentation Components
	
	var _componentsPresentationCreditcardFormCreditcardFormComponent = __webpack_require__(122);
	
	var _componentsPresentationCreditcardFormCreditcardFormComponent2 = _interopRequireDefault(_componentsPresentationCreditcardFormCreditcardFormComponent);
	
	var _componentsPresentationCustomerFormCustomerFormComponent = __webpack_require__(124);
	
	var _componentsPresentationCustomerFormCustomerFormComponent2 = _interopRequireDefault(_componentsPresentationCustomerFormCustomerFormComponent);
	
	var _componentsPresentationMessageBoxMessageBoxComponent = __webpack_require__(126);
	
	var _componentsPresentationMessageBoxMessageBoxComponent2 = _interopRequireDefault(_componentsPresentationMessageBoxMessageBoxComponent);
	
	var _componentsPresentationSubscriptionPlanSubscriptionPlanComponent = __webpack_require__(128);
	
	var _componentsPresentationSubscriptionPlanSubscriptionPlanComponent2 = _interopRequireDefault(_componentsPresentationSubscriptionPlanSubscriptionPlanComponent);
	
	var _componentsPresentationSubscriptionDetailsSubscriptionDetailsComponent = __webpack_require__(130);
	
	var _componentsPresentationSubscriptionDetailsSubscriptionDetailsComponent2 = _interopRequireDefault(_componentsPresentationSubscriptionDetailsSubscriptionDetailsComponent);
	
	var _componentsPresentationSubscriptionOverviewSubscriptionOverviewComponent = __webpack_require__(132);
	
	var _componentsPresentationSubscriptionOverviewSubscriptionOverviewComponent2 = _interopRequireDefault(_componentsPresentationSubscriptionOverviewSubscriptionOverviewComponent);
	
	var _componentsPresentationSubscriptionProgressSubscriptionProgressComponent = __webpack_require__(134);
	
	var _componentsPresentationSubscriptionProgressSubscriptionProgressComponent2 = _interopRequireDefault(_componentsPresentationSubscriptionProgressSubscriptionProgressComponent);
	
	var _componentsPresentationSubscribeNavigationSubscribeNavigationComponent = __webpack_require__(136);
	
	var _componentsPresentationSubscribeNavigationSubscribeNavigationComponent2 = _interopRequireDefault(_componentsPresentationSubscribeNavigationSubscribeNavigationComponent);
	
	var _componentsPresentationPaymentMethodPaymentMethodComponent = __webpack_require__(138);
	
	var _componentsPresentationPaymentMethodPaymentMethodComponent2 = _interopRequireDefault(_componentsPresentationPaymentMethodPaymentMethodComponent);
	
	// View Components (Route Components)
	
	var _componentsViewBraintreeHomeBraintreeHomeComponent = __webpack_require__(140);
	
	var _componentsViewBraintreeHomeBraintreeHomeComponent2 = _interopRequireDefault(_componentsViewBraintreeHomeBraintreeHomeComponent);
	
	var _componentsViewSubscribeSubscribeViewComponent = __webpack_require__(142);
	
	var _componentsViewSubscribeSubscribeViewComponent2 = _interopRequireDefault(_componentsViewSubscribeSubscribeViewComponent);
	
	var ngModule = angular.module('braintree-angular-spa.modules.braintree', [_commonCommonModule2['default'].name, _coreCoreModule2['default'].name]);
	
	/**
	 * App Module
	 */
	ngModule.config(braintreeConfig).run(braintreeRun)
	// Services
	// TODO: Rename to braintreeDataService
	.service('braintreeDataService', _servicesBraintreeDataService2['default']).service('braintreeConfigService', _servicesBraintreeConfigService2['default']).service('braintreeAppService', _servicesBraintreeAppService2['default'])
	
	// Container components
	.component('braintreeBillingOverview', _componentsContainerBillingOverviewBillingOverviewComponent2['default']).component('braintreeCustomer', _componentsContainerCustomerCustomerComponent2['default']).component('braintreeCreditCard', _componentsContainerCreditcardCreditcardComponent2['default']).component('braintreeDropin', _componentsContainerDropinDropinComponent2['default']).component('braintreeSubscriptionPlans', _componentsContainerSubscriptionPlansSubscriptionPlansComponent2['default']).component('braintreeSubscriptionPlansCustom', _componentsContainerSubscriptionPlansCustomSubscriptionPlansCustomComponent2['default']).component('braintreeSubscriptionOverview', _componentsContainerSubscriptionOverviewSubscriptionOverviewComponent2['default']).component('braintreePaymentMethods', _componentsContainerPaymentMethodsPaymentMethodsComponent2['default']).component('braintreePaypal', _componentsContainerPaypalPaypalComponent2['default']).component('braintreePaypalButton', _componentsContainerPaypalButtonPaypalButtonComponent2['default'])
	
	// Presentational components
	.component('uiBraintreeCustomerForm', _componentsPresentationCustomerFormCustomerFormComponent2['default']).component('uiBraintreeCreditcardForm', _componentsPresentationCreditcardFormCreditcardFormComponent2['default']).component('uiBraintreeMessageBox', _componentsPresentationMessageBoxMessageBoxComponent2['default']).component('uiBraintreeSubscriptionDetails', _componentsPresentationSubscriptionDetailsSubscriptionDetailsComponent2['default']).component('uiBraintreeSubscriptionNavigation', _componentsPresentationSubscribeNavigationSubscribeNavigationComponent2['default']).component('uiBraintreeSubscriptionPlan', _componentsPresentationSubscriptionPlanSubscriptionPlanComponent2['default']).component('uiBraintreeSubscriptionProgress', _componentsPresentationSubscriptionProgressSubscriptionProgressComponent2['default']).component('uiBraintreeSubscriptionOverview', _componentsPresentationSubscriptionOverviewSubscriptionOverviewComponent2['default']).component('uiBraintreePaymentMethod', _componentsPresentationPaymentMethodPaymentMethodComponent2['default'])
	
	// View components
	.component('braintreeHome', _componentsViewBraintreeHomeBraintreeHomeComponent2['default']).component('braintreeSubscribeView', _componentsViewSubscribeSubscribeViewComponent2['default']);
	
	/* @ngInject */
	function braintreeConfig($locationProvider, $routeProvider) {
		$locationProvider.html5Mode(false);
	
		// Route configs
		// -----------------------------------------------------
		$routeProvider.when('/', {
			template: '<braintree-subscription-plans-custom></braintree-subscription-plans-custom>'
		}).when('/billing-overview', {
			template: '<braintree-billing-overview></braintree-billing-overview>'
		}).when('/cards', {
			template: '<braintree-credit-card></braintree-credit-card>'
		}).when('/drop-in', {
			template: '<braintree-dropin></braintree-dropin>'
		}).when('/customer', {
			template: '<braintree-customer></braintree-customer>'
		}).when('/payment-methods', {
			template: '<braintree-payment-methods></braintree-payment-methods>'
		}).when('/paypal', {
			template: '<braintree-paypal></braintree-paypal>'
		}).when('/subscribe', {
			template: '<braintree-subscription-plans-custom></braintree-subscription-plans-custom>'
		}).when('/subscription-overview', {
			template: '<braintree-subscription-overview></braintree-subscription-overview>'
		});
	}
	
	/* @ngInject */
	function braintreeRun($route, $rootScope) {
		$rootScope.$on("$locationChangeStart", function (event, next, current) {});
	}
	
	exports['default'] = ngModule;
	module.exports = exports['default'];

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	// Components
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _componentsPresentationLoadingIconLoadingIconComponent = __webpack_require__(88);
	
	var _componentsPresentationLoadingIconLoadingIconComponent2 = _interopRequireDefault(_componentsPresentationLoadingIconLoadingIconComponent);
	
	var _componentsContainerModalModalComponent = __webpack_require__(90);
	
	var _componentsContainerModalModalComponent2 = _interopRequireDefault(_componentsContainerModalModalComponent);
	
	// Directives
	
	var _directivesToggleDirective = __webpack_require__(92);
	
	var _directivesToggleDirective2 = _interopRequireDefault(_directivesToggleDirective);
	
	var _directivesConfirmClickDirective = __webpack_require__(93);
	
	var _directivesConfirmClickDirective2 = _interopRequireDefault(_directivesConfirmClickDirective);
	
	var ngModule = angular.module('braintree-angular-spa.modules.common', ['angularMoment', 'ngSanitize', 'ngAnimate', 'angular-click-outside', 'mp.escAction', 'angularPayments']);
	
	ngModule.directive('uiToggle', _directivesToggleDirective2['default']).directive('uiConfirmClick', _directivesConfirmClickDirective2['default']).component('uiLoadingIcon', _componentsPresentationLoadingIconLoadingIconComponent2['default']).component('uiModal', _componentsContainerModalModalComponent2['default']).filter('toArray', function () {
		return function (obj, addKey) {
			if (!angular.isObject(obj)) return obj;
			if (addKey === false) {
				return Object.keys(obj).map(function (key) {
					return obj[key];
				});
			} else {
				return Object.keys(obj).map(function (key) {
					var value = obj[key];
					return angular.isObject(value) ? Object.defineProperty(value, '$key', { enumerable: false, value: key }) : { $key: key, $value: value };
				});
			}
		};
	});
	
	exports['default'] = ngModule;
	module.exports = exports['default'];

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _loadingIconHtml = __webpack_require__(89);
	
	var _loadingIconHtml2 = _interopRequireDefault(_loadingIconHtml);
	
	// Component decorations
	var component = {
		bindings: {
			iconModifier: '<',
			size: '<',
			text: '<',
			visible: '<'
		},
		template: _loadingIconHtml2['default']
	};
	
	exports['default'] = component;
	module.exports = exports['default'];

/***/ },
/* 89 */
/***/ function(module, exports) {

	module.exports = "<div class=\"u-textCenter m--4\" ng-if=\"$ctrl.visible\">\n\t<i class=\"fa fa-spin fa-{{$ctrl.iconModifier}} fa-{{ $ctrl.size }}\"></i>\n\t<p class=\"u-textCenter\" ng-bind=\"$ctrl.text\" ng-if=\"$ctrl.text\"></p>\n</div>\n"

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _modalHtml = __webpack_require__(91);
	
	var _modalHtml2 = _interopRequireDefault(_modalHtml);
	
	// Inject dependencies
	
	var Inject = __webpack_require__(83);
	
	var ModalComponent = (function () {
		function ModalComponent() {
			_classCallCheck(this, _ModalComponent);
	
			this.styles = {};
		}
	
		// Component decorations
	
		// Private methods
		// --------------------------------------------------
	
		_createClass(ModalComponent, [{
			key: '$onInit',
			value: function $onInit() {
				if (!this.modalId) {
					this.modalId = 'modal-body';
				}
	
				this._setModalStyles();
			}
		}, {
			key: '_setModalStyles',
			value: function _setModalStyles() {
				if (this.modalMaxHeight) {
					this.styles.maxHeight = this.modalMaxHeight;
				}
	
				if (this.modalMaxWidth) {
					this.styles.maxWidth = this.modalMaxWidth;
				}
	
				if (this.modalMinHeight) {
					this.styles.minHeight = this.modalMinHeight;
				}
	
				if (this.modalMinWidth) {
					this.styles.minWidth = this.modalMinWidth;
				}
	
				if (this.modalWidth) {
					this.styles.width = this.modalWidth;
				}
			}
	
			// Public viewModel methods
			// --------------------------------------------------
		}, {
			key: 'close',
			value: function close() {
				//console.log('Close');
				this.modalVisible = false;
			}
		}]);
	
		var _ModalComponent = ModalComponent;
		ModalComponent = Inject()(ModalComponent) || ModalComponent;
		return ModalComponent;
	})();
	
	var component = {
		bindings: {
			modalVisible: '<',
			modalId: '<',
			modalMaxWidth: '<',
			modalMinWidth: '<',
			modalMaxHeight: '<',
			modalMinHeight: '<',
			modalWidth: '<'
		},
		template: _modalHtml2['default'],
		transclude: {
			//title: 'modalTitle',
			body: 'modalBody'
		},
		controller: ModalComponent
	};
	
	exports['default'] = component;
	module.exports = exports['default'];

/***/ },
/* 91 */
/***/ function(module, exports) {

	module.exports = "<div class=\"Modal-container animate-if\"\n     ng-if=\"$ctrl.modalVisible\"\n     esc-action=\"$ctrl.close()\"\n     click-outside=\"$ctrl.close()\"\n     outside-if-not=\"$ctrl.modalId\"\n     tabindex=\"0\">\n\t<section class=\"Modal\" id=\"$ctrl.modalId\" ng-style=\"$ctrl.styles\">\n\t\t<!--<div ng-transclude=\"title\"></div>-->\n\t\t<div ng-transclude=\"body\"></div>\n\t\t<a class=\"Modal-close\" href=\"\" ng-click=\"$ctrl.close()\"><i class=\"fa fa-close Modal-closeIcon\"></i></a>\n\t</section>\n</div>\n"

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var Inject = __webpack_require__(83);
	
	var ToggleDirective = (function () {
		function ToggleDirective() {
			_classCallCheck(this, _ToggleDirective);
	
			this.scope = {
				toggleElId: '@', // Id of the element to be toggled
				toggleElCssClass: '@', // Class name of the element to be toggled, finds the first element from the source element
				toggleCssClassHide: '@', // If hide or show classes are set, we use the classes instead of .hide() and .show()
				toggleCssClassShow: '@',
				toggleIconCssClass: '@',
				toggleIconCssClassHide: '@',
				toggleIconCssClassShow: '@',
				toggleDisabled: '@',
				toggleOnHover: '@'
			};
		}
	
		_createClass(ToggleDirective, [{
			key: 'link',
			value: function link(scope, elem, attrs) {
				var elToToggle;
				var toggleIconCssClass = '.js-toggleIcon';
				if (attrs.toggleIconCssClass) {
					toggleIconCssClass = '.' + attrs.toggleIconCssClass;
				}
				var iconEl = elem.find(toggleIconCssClass);
				var eventToBindTo = 'click';
	
				if (attrs.toggleElId) {
					elToToggle = angular.element(document).find('#' + attrs.toggleElId);
				} else if (attrs.toggleElCssClass) {
					elToToggle = elem.parent().find('.' + attrs.toggleElCssClass);
				}
	
				if (attrs.toggleOnHover === 'true') {
					eventToBindTo = 'mouseenter mouseleave';
				}
	
				if (attrs.toggleDisabled !== undefined && attrs.toggleDisabled === 'true') {
					return;
				}
	
				elem.bind(eventToBindTo, function () {
					if (!attrs.toggleElId && !attrs.toggleElCssClass) {
						return;
					}
	
					if (!elToToggle) {
						//console.log('Element to toggle was not found');
						return;
					}
	
					if (attrs.toggleCssClassHide && attrs.toggleCssClassShow) {
						// Toggle using css classes
						if (elToToggle.is(':visible')) {
							// Hide
							elToToggle.removeClass(attrs.toggleCssClassShow).addClass(attrs.toggleCssClassHide);
							iconEl.removeClass(attrs.toggleIconCssClassHide).addClass(attrs.toggleIconCssClassShow);
						} else {
							// Show
							elToToggle.removeClass(attrs.toggleCssClassHide).addClass(attrs.toggleCssClassShow);
							iconEl.removeClass(attrs.toggleIconCssClassShow).addClass(attrs.toggleIconCssClassHide);
						}
					} else {
						// Toggle using .hide() and .show()
						if (elToToggle.is(':visible')) {
							// Hide
							elToToggle.hide();
							iconEl.removeClass(attrs.toggleIconCssClassHide).addClass(attrs.toggleIconCssClassShow);
						} else {
							// Show
							elToToggle.show();
							iconEl.removeClass(attrs.toggleIconCssClassShow).addClass(attrs.toggleIconCssClassHide);
						}
					}
				});
			}
		}], [{
			key: 'toggleDirectiveFactory',
			value: function toggleDirectiveFactory() {
				ToggleDirective.instance = new ToggleDirective();
				return ToggleDirective.instance;
			}
		}]);
	
		var _ToggleDirective = ToggleDirective;
		ToggleDirective = Inject()(ToggleDirective) || ToggleDirective;
		return ToggleDirective;
	})();
	
	exports['default'] = ToggleDirective.toggleDirectiveFactory;
	module.exports = exports['default'];
	/**
	 * Toggle directive
	 * Requires jQuery since we use .closest() which is not supported by jQLite
	 */

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Inject = __webpack_require__(83);
	
	var ConfirmClick = (function () {
		function ConfirmClick() {
			_classCallCheck(this, _ConfirmClick);
		}
	
		_createClass(ConfirmClick, [{
			key: "link",
			value: function link(scope, element, attr) {
				var msg = attr.confirmMessage || "Are you sure?";
				var clickAction = attr.uiConfirmClick;
				element.bind('click', function (event) {
					if (window.confirm(msg)) {
						scope.$eval(clickAction);
					}
				});
			}
		}], [{
			key: "confirmClickDirectiveFactory",
			value: function confirmClickDirectiveFactory() {
				ConfirmClick.instance = new ConfirmClick();
				return ConfirmClick.instance;
			}
		}]);
	
		var _ConfirmClick = ConfirmClick;
		ConfirmClick = Inject()(ConfirmClick) || ConfirmClick;
		return ConfirmClick;
	})();
	
	exports["default"] = ConfirmClick.confirmClickDirectiveFactory;
	module.exports = exports["default"];
	/**
	 * Directive for basic Confirm dialog
	 */

/***/ },
/* 94 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	
	var ngModule = angular.module('braintree-angular-spa.modules.core', ['ngRoute']);
	
	exports['default'] = ngModule;
	module.exports = exports['default'];

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _braintreeWeb = __webpack_require__(96);
	
	var _braintreeWeb2 = _interopRequireDefault(_braintreeWeb);
	
	var _underscore = __webpack_require__(98);
	
	var _underscore2 = _interopRequireDefault(_underscore);
	
	var Inject = __webpack_require__(83);
	
	var BraintreeService = (function () {
		function BraintreeService($http, braintreeConfigService, $q) {
			_classCallCheck(this, _BraintreeService);
	
			this.$http = $http;
			this.braintreeConfigService = braintreeConfigService;
			this.$q = $q;
	
			this._apiUrl = this.braintreeConfigService.apiUrl;
			this._tokenPath = '/v1/token';
			this._processPath = '/v1/process';
			this._customerPath = '/v1/customers';
			this._subscriptionsPath = '/v1/subscriptions';
			this._subscriptionPlansPath = '/v1/plans';
			this._paymentMethodsPath = '/v1/paymentmethods';
			this._customerData = {
				customer: {}
			};
	
			this._merchantAccounts = {
				USD: {
					id: 'jivaroUSD',
					currencyIsoCode: 'USD',
					currencySymbol: '$',
					currencyName: 'US Dollar',
					currencyLongName: 'US Dollar (USD)'
				},
				EUR: {
					id: 'jivaroEUR',
					currencyIsoCode: 'EUR',
					currencySymbol: '€',
					currencyName: 'Euro',
					currencyLongName: 'Euro (EUR)'
				},
				GBP: {
					id: 'jivaroGBP',
					currencyIsoCode: 'GBP',
					currencySymbol: '£',
					currencyName: 'British Pound',
					currencyLongName: 'British Pound (GBP)'
				},
				ISK: {
					id: 'jivaroISK',
					currencyIsoCode: 'ISK',
					currencySymbol: 'kr',
					currencyName: 'Icelandic Krona',
					currencyLongName: 'Icelandic Krona (ISK)'
				}
			};
	
			this._merchantAccountsArray = [this._merchantAccounts.USD, this._merchantAccounts.EUR, this._merchantAccounts.GBP, this._merchantAccounts.ISK];
	
			this._selectedSubscription = {};
	
			this._selectedMerchantAccount = this._merchantAccounts.USD;
			this._mode = {
				subscription: false
			};
	
			// Object to be used to override or add to customPlans
			// Example:
			// {
			// 	USD: {premiumTwelve: {customPlanTitle: 'FREE One Year', firstBillingDate: '2016-09-29', offerPrice: '0'}},
			// 	EUR: {premiumTwelve: {customPlanTitle: 'FREE One Year', firstBillingDate: '2016-09-29', offerPrice: '0'}},
			// }
			this._customPlansDefaults = null;
	
			// window.customer = this._customerData;
			// window.selectedSubscription = this._selectedSubscription;
			// window.customPlansDefaults = this._customPlansDefaults;
		}
	
		// Private methods
		// --------------------------------------------------
	
		// Public methods
		// --------------------------------------------------
	
		_createClass(BraintreeService, [{
			key: 'setup',
	
			// TODO: Depricate this, doing this inside of components instead
			value: function setup() {
				var _this = this;
	
				this.getClientToken().then(function (response) {
					_this.$braintree.setup(response.data.client_token, "custom");
					var customer = {
						clientToken: response.data.client_token
					};
	
					_this.updateCustomerData(customer);
				});
			}
		}, {
			key: 'addCurrencyDiscountsToSelectedSubscription',
			value: function addCurrencyDiscountsToSelectedSubscription(discountArray) {
				var _this2 = this;
	
				if (!this._selectedSubscription.currencyDiscounts) {
					this._selectedSubscription.currencyDiscounts = [];
				}
	
				_underscore2['default'].each(discountArray, function (discount) {
					_this2._selectedSubscription.currencyDiscounts.push(discount);
				});
			}
		}, {
			key: 'addDiscountToSelectedSubscription',
			value: function addDiscountToSelectedSubscription(discountModel) {
				if (!this._selectedSubscription.discounts) {
					this._selectedSubscription.discounts = {};
				}
	
				if (!this._selectedSubscription.discounts.add) {
					this._selectedSubscription.discounts.add = [];
				}
	
				this._selectedSubscription.discounts.add.push(discountModel);
			}
	
			/**
	   * Creating a new customer
	   * @param customerData
	   * @returns {*}
	   */
		}, {
			key: 'createCustomer',
			value: function createCustomer(customerData) {
				return this.$http.post(this.apiUrl + this._customerPath, customerData);
			}
		}, {
			key: 'cancelSubscription',
			value: function cancelSubscription(subscriptionId) {
				return this.$http['delete'](this.apiUrl + this._subscriptionsPath + '/' + subscriptionId);
			}
	
			/**
	   * Creates a new subscription for customer
	   * Expects subscriptionData: {paymentMethodToken: x, planId: x }
	   * @param subscriptionData
	   * @returns {*}
	   */
		}, {
			key: 'createSubscription',
			value: function createSubscription(subscriptionData) {
				// TODO: Find out what to do with a current subscriptionplan if user has any
	
				return this.$http.post(this.apiUrl + this._subscriptionsPath, subscriptionData);
			}
		}, {
			key: 'createVaultedPayment',
			value: function createVaultedPayment(customerId, paymentModel) {
				var _this3 = this;
	
				return this.$q(function (resolve, reject) {
					// Get PaymentMethodNonce to send when saving a payment method to the braintree vault.
					_this3.getPaymentMethodNonce(paymentModel).then(function (nonce) {
						var paymentMethodModel = {
							customerId: customerId,
							paymentMethodNonce: nonce,
							verificationMerchantAccountId: paymentModel.verificationMerchantAccountId
						};
						//console.log('Vault payment data', paymentMethodModel);
	
						// Save to Vault
						_this3.createPaymentMethod(paymentMethodModel).then(function (response) {
							_this3.updateCustomerData(response.data.customer);
							//console.log('Payment method created!', response);
							resolve(response);
						}, function (error) {
							reject('Failed to create payment method:' + error.data.message);
						});
					}, function (error) {
						reject('Failed to get PaymentMethodNonce' + error);
					});
				});
			}
	
			/**
	   * Add a payment method to customer
	   * Expects a paymentMethodModel: {customerId: x, paymentMethodNonce: x }
	   * @param paymentMethodModel
	   */
		}, {
			key: 'createPaymentMethod',
			value: function createPaymentMethod(paymentMethodModel) {
				return this.$http.post(this.apiUrl + this._paymentMethodsPath, paymentMethodModel);
			}
		}, {
			key: 'deletePaymentMethod',
			value: function deletePaymentMethod(paymentMethod) {
				return this.$http['delete'](this.apiUrl + this._paymentMethodsPath + '/' + paymentMethod.token);
			}
		}, {
			key: 'getAllSubscriptionPlans',
			value: function getAllSubscriptionPlans() {
				return this.$http.get(this.apiUrl + this._subscriptionPlansPath);
			}
		}, {
			key: 'getCurrencyForMerchantAccountId',
			value: function getCurrencyForMerchantAccountId(merchantAccountId) {
				var currency = undefined;
				var merchantAccount = _underscore2['default'].find(this._merchantAccountsArray, { id: merchantAccountId });
	
				if (merchantAccount) {
					currency = merchantAccount.currencyIsoCode;
				}
	
				return currency;
			}
		}, {
			key: 'getSubscriptionPlansForCurrency',
			value: function getSubscriptionPlansForCurrency(currencyIsoCode) {
				var _this4 = this;
	
				var responseObject = {
					data: {
						plans: [],
						message: '',
						success: false
					}
				};
	
				// Since Braintree offers no filtering we need to fetch all plans and filter them
				return this.$q(function (resolve, reject) {
					_this4.getAllSubscriptionPlans().then(function (response) {
						if (!response.data || !response.data.plans) {
							responseObject.data.message = 'No subscription plans found.';
							reject(responseObject);
						} else {
							var currencyPlans = _underscore2['default'].where(response.data.plans, { currencyIsoCode: currencyIsoCode });
	
							if (!currencyPlans.length) {
								responseObject.data.message = 'No plans found for currency: ' + currencyIsoCode;
								reject(responseObject);
							} else {
								responseObject.data.success = true;
								responseObject.data.plans = currencyPlans;
								resolve(responseObject);
							}
						}
					}, function (error) {
						responseObject.data.message = error;
						reject(responseObject);
					});
				});
			}
	
			/**
	   * Get the client token which is generated on the server
	   * @returns {promise}
	   */
		}, {
			key: 'getClientToken',
			value: function getClientToken() {
				return this.$http.get(this.apiUrl + this._tokenPath);
			}
	
			/**
	   * Get a specific customer
	   * @param customerId
	   * @returns {*}
	   */
		}, {
			key: 'getCustomer',
			value: function getCustomer(customerId) {
				var includeSubscriptions = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];
	
				var path = this.apiUrl + this._customerPath + '/' + customerId;
	
				if (includeSubscriptions) {
					path += '/subscriptions';
				}
	
				return this.$http.get(path);
			}
	
			/**
	   * Tokenize creditcard and get paymentMethodNonce
	   * @param paymentModel
	   */
		}, {
			key: 'getPaymentMethodNonce',
			value: function getPaymentMethodNonce(paymentModel) {
				var _this5 = this;
	
				return this.$q(function (resolve, reject) {
					_this5.getClientToken().then(function (response) {
						// Create new client and tokenize card
						var client = new _this5.$braintree.api.Client({ clientToken: response.data.client_token });
	
						client.tokenizeCard({
							number: paymentModel.creditCardNumber,
							expirationDate: paymentModel.expirationDate
						}, function (err, nonce) {
							// TODO: Handle errors better
							if (err) {
								reject(err);
							}
	
							resolve(nonce);
						});
					}, function (error) {
						//console.log('Error: cannot connect to server. Please try again. Erromessage: ' + error.data);
						reject(error);
					});
				});
			}
	
			/**
	   * Init the mode flow
	   * @param type
	   */
		}, {
			key: 'initMode',
			value: function initMode(type) {
				if (type.toLowerCase() === 'subscription') {
					this._mode.subscription = true;
				} else {
					this._mode.subscription = false;
				}
			}
		}, {
			key: 'initCustomerData',
			value: function initCustomerData() {
				this._customerData = {
					customer: {}
				};
			}
		}, {
			key: 'initSelectedSubscriptionData',
			value: function initSelectedSubscriptionData() {
				this._selectedSubscription = {};
			}
	
			/**
	   * Process the payment
	   * @param paymentData
	   * @returns {promise}
	   */
		}, {
			key: 'processPayment',
			value: function processPayment(paymentData) {
				return this.$http.post(this.apiUrl + this._processPath, paymentData);
			}
		}, {
			key: 'updateCustomerData',
			value: function updateCustomerData(customerModel) {
				this.setObjectValues(this._customerData.customer, customerModel);
				//console.log('customer model updated in service', customerModel);
			}
		}, {
			key: 'updateSelectedSubscription',
			value: function updateSelectedSubscription(model) {
				this.setObjectValues(this._selectedSubscription, model);
				//console.log('selected subscription model updated in service', model);
			}
		}, {
			key: 'updateSubscription',
			value: function updateSubscription(currentSubscriptionId, subscription) {
				var requestBody = {
					currentSubscriptionId: currentSubscriptionId,
					subscriptionChanges: subscription
				};
	
				return this.$http.put(this.apiUrl + this._subscriptionsPath, requestBody);
			}
		}, {
			key: 'setSelectedMerchantAccount',
			value: function setSelectedMerchantAccount(account) {
				this._selectedMerchantAccount = account;
			}
		}, {
			key: 'setCustomPlansDefaults',
			value: function setCustomPlansDefaults(defaults) {
				if (!this._customPlansDefaults) {
					this._customPlansDefaults = {};
				}
	
				this.setObjectValues(this._customPlansDefaults, defaults);
			}
	
			/**
	   * Recursively merge properties of two objects (also overwrites if value is in source)
	   * @param source
	   * @param dest
	   * @returns {*}
	   */
		}, {
			key: 'mergeObjectsRecursive',
			value: function mergeObjectsRecursive(source, dest) {
				var self = this;
				for (var p in source) {
					try {
						// Property in destination object set; update its value.
						if (source[p].constructor == Object) {
							dest[p] = self.mergeObjectsRecursive(dest[p], source[p]);
						} else {
							dest[p] = source[p];
						}
					} catch (e) {
						// Property in destination object not set; create it and set its value.
						dest[p] = source[p];
					}
				}
	
				return dest;
			}
	
			// TODO: Move somewhere else
			// Walk throught the object tree and set values
		}, {
			key: 'setObjectValues',
			value: function setObjectValues(src, dest) {
				for (var key in dest) {
					if (!src.hasOwnProperty(key)) {
						if (typeof dest[key] === 'object') {
							src[key] = {};
							this.setObjectValues(src[key], dest[key]);
						} else {
							src[key] = dest[key];
						}
					} else {
						if (typeof dest[key] === 'object') {
							this.setObjectValues(src[key], dest[key]);
						} else {
							src[key] = dest[key];
						}
					}
				}
			}
		}, {
			key: 'apiUrl',
			get: function get() {
				return this.braintreeConfigService.apiUrl;
			}
		}, {
			key: '$braintree',
			get: function get() {
				return _braintreeWeb2['default'];
			}
		}, {
			key: 'customer',
			get: function get() {
				return this._customerData.customer;
			}
		}, {
			key: 'customPlansDefaults',
			get: function get() {
				return this._customPlansDefaults;
			}
		}, {
			key: 'merchantAccounts',
			get: function get() {
				return this._merchantAccounts;
			}
		}, {
			key: 'merchantAccountsArray',
			get: function get() {
				return this._merchantAccountsArray;
			}
		}, {
			key: 'selectedSubscription',
			get: function get() {
				return this._selectedSubscription;
			}
		}, {
			key: 'selectedMerchantAccount',
			get: function get() {
				return this._selectedMerchantAccount;
			}
	
			/**
	   * Used to determine payment mode in paymentMethods,
	   * If to process payment right away or save to vault
	   * @returns {{subscription: boolean}|*}
	   */
		}, {
			key: 'mode',
			get: function get() {
				return this._mode;
			}
		}]);
	
		var _BraintreeService = BraintreeService;
		BraintreeService = Inject('$http', 'braintreeConfigService', '$q')(BraintreeService) || BraintreeService;
		return BraintreeService;
	})();
	
	exports['default'] = BraintreeService;
	module.exports = exports['default'];

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	var require;var require;/* WEBPACK VAR INJECTION */(function(__webpack_provided_window_dot_jQuery, jQuery, global, $) {!function(){function t(e,n){e instanceof t?(this.enc=e.enc,this.pos=e.pos):(this.enc=e,this.pos=n)}function e(t,e,n,i,o){this.stream=t,this.header=e,this.length=n,this.tag=i,this.sub=o}function n(t){var e,n,i="";for(e=0;e+3<=t.length;e+=3)n=parseInt(t.substring(e,e+3),16),i+=et.charAt(n>>6)+et.charAt(63&n);for(e+1==t.length?(n=parseInt(t.substring(e,e+1),16),i+=et.charAt(n<<2)):e+2==t.length&&(n=parseInt(t.substring(e,e+2),16),i+=et.charAt(n>>2)+et.charAt((3&n)<<4));(3&i.length)>0;)i+=nt;return i}function i(t){var e,n,i,o="",r=0;for(e=0;e<t.length&&t.charAt(e)!=nt;++e)i=et.indexOf(t.charAt(e)),0>i||(0==r?(o+=l(i>>2),n=3&i,r=1):1==r?(o+=l(n<<2|i>>4),n=15&i,r=2):2==r?(o+=l(n),o+=l(i>>2),n=3&i,r=3):(o+=l(n<<2|i>>4),o+=l(15&i),r=0));return 1==r&&(o+=l(n<<2)),o}function o(t){var e,n=i(t),o=new Array;for(e=0;2*e<n.length;++e)o[e]=parseInt(n.substring(2*e,2*e+2),16);return o}function r(t,e,n){null!=t&&("number"==typeof t?this.fromNumber(t,e,n):null==e&&"string"!=typeof t?this.fromString(t,256):this.fromString(t,e))}function s(){return new r(null)}function a(t,e,n,i,o,r){for(;--r>=0;){var s=e*this[t++]+n[i]+o;o=Math.floor(s/67108864),n[i++]=67108863&s}return o}function c(t,e,n,i,o,r){for(var s=32767&e,a=e>>15;--r>=0;){var c=32767&this[t],u=this[t++]>>15,l=a*c+u*s;c=s*c+((32767&l)<<15)+n[i]+(1073741823&o),o=(c>>>30)+(l>>>15)+a*u+(o>>>30),n[i++]=1073741823&c}return o}function u(t,e,n,i,o,r){for(var s=16383&e,a=e>>14;--r>=0;){var c=16383&this[t],u=this[t++]>>14,l=a*c+u*s;c=s*c+((16383&l)<<14)+n[i]+o,o=(c>>28)+(l>>14)+a*u,n[i++]=268435455&c}return o}function l(t){return ct.charAt(t)}function h(t,e){var n=ut[t.charCodeAt(e)];return null==n?-1:n}function p(t){for(var e=this.t-1;e>=0;--e)t[e]=this[e];t.t=this.t,t.s=this.s}function d(t){this.t=1,this.s=0>t?-1:0,t>0?this[0]=t:-1>t?this[0]=t+this.DV:this.t=0}function f(t){var e=s();return e.fromInt(t),e}function m(t,e){var n;if(16==e)n=4;else if(8==e)n=3;else if(256==e)n=8;else if(2==e)n=1;else if(32==e)n=5;else{if(4!=e)return void this.fromRadix(t,e);n=2}this.t=0,this.s=0;for(var i=t.length,o=!1,s=0;--i>=0;){var a=8==n?255&t[i]:h(t,i);0>a?"-"==t.charAt(i)&&(o=!0):(o=!1,0==s?this[this.t++]=a:s+n>this.DB?(this[this.t-1]|=(a&(1<<this.DB-s)-1)<<s,this[this.t++]=a>>this.DB-s):this[this.t-1]|=a<<s,s+=n,s>=this.DB&&(s-=this.DB))}8==n&&0!=(128&t[0])&&(this.s=-1,s>0&&(this[this.t-1]|=(1<<this.DB-s)-1<<s)),this.clamp(),o&&r.ZERO.subTo(this,this)}function y(){for(var t=this.s&this.DM;this.t>0&&this[this.t-1]==t;)--this.t}function g(t){if(this.s<0)return"-"+this.negate().toString(t);var e;if(16==t)e=4;else if(8==t)e=3;else if(2==t)e=1;else if(32==t)e=5;else{if(4!=t)return this.toRadix(t);e=2}var n,i=(1<<e)-1,o=!1,r="",s=this.t,a=this.DB-s*this.DB%e;if(s-->0)for(a<this.DB&&(n=this[s]>>a)>0&&(o=!0,r=l(n));s>=0;)e>a?(n=(this[s]&(1<<a)-1)<<e-a,n|=this[--s]>>(a+=this.DB-e)):(n=this[s]>>(a-=e)&i,0>=a&&(a+=this.DB,--s)),n>0&&(o=!0),o&&(r+=l(n));return o?r:"0"}function v(){var t=s();return r.ZERO.subTo(this,t),t}function _(){return this.s<0?this.negate():this}function b(t){var e=this.s-t.s;if(0!=e)return e;var n=this.t;if(e=n-t.t,0!=e)return this.s<0?-e:e;for(;--n>=0;)if(0!=(e=this[n]-t[n]))return e;return 0}function E(t){var e,n=1;return 0!=(e=t>>>16)&&(t=e,n+=16),0!=(e=t>>8)&&(t=e,n+=8),0!=(e=t>>4)&&(t=e,n+=4),0!=(e=t>>2)&&(t=e,n+=2),0!=(e=t>>1)&&(t=e,n+=1),n}function w(){return this.t<=0?0:this.DB*(this.t-1)+E(this[this.t-1]^this.s&this.DM)}function A(t,e){var n;for(n=this.t-1;n>=0;--n)e[n+t]=this[n];for(n=t-1;n>=0;--n)e[n]=0;e.t=this.t+t,e.s=this.s}function C(t,e){for(var n=t;n<this.t;++n)e[n-t]=this[n];e.t=Math.max(this.t-t,0),e.s=this.s}function N(t,e){var n,i=t%this.DB,o=this.DB-i,r=(1<<o)-1,s=Math.floor(t/this.DB),a=this.s<<i&this.DM;for(n=this.t-1;n>=0;--n)e[n+s+1]=this[n]>>o|a,a=(this[n]&r)<<i;for(n=s-1;n>=0;--n)e[n]=0;e[s]=a,e.t=this.t+s+1,e.s=this.s,e.clamp()}function T(t,e){e.s=this.s;var n=Math.floor(t/this.DB);if(n>=this.t)return void(e.t=0);var i=t%this.DB,o=this.DB-i,r=(1<<i)-1;e[0]=this[n]>>i;for(var s=n+1;s<this.t;++s)e[s-n-1]|=(this[s]&r)<<o,e[s-n]=this[s]>>i;i>0&&(e[this.t-n-1]|=(this.s&r)<<o),e.t=this.t-n,e.clamp()}function I(t,e){for(var n=0,i=0,o=Math.min(t.t,this.t);o>n;)i+=this[n]-t[n],e[n++]=i&this.DM,i>>=this.DB;if(t.t<this.t){for(i-=t.s;n<this.t;)i+=this[n],e[n++]=i&this.DM,i>>=this.DB;i+=this.s}else{for(i+=this.s;n<t.t;)i-=t[n],e[n++]=i&this.DM,i>>=this.DB;i-=t.s}e.s=0>i?-1:0,-1>i?e[n++]=this.DV+i:i>0&&(e[n++]=i),e.t=n,e.clamp()}function S(t,e){var n=this.abs(),i=t.abs(),o=n.t;for(e.t=o+i.t;--o>=0;)e[o]=0;for(o=0;o<i.t;++o)e[o+n.t]=n.am(0,i[o],e,o,0,n.t);e.s=0,e.clamp(),this.s!=t.s&&r.ZERO.subTo(e,e)}function x(t){for(var e=this.abs(),n=t.t=2*e.t;--n>=0;)t[n]=0;for(n=0;n<e.t-1;++n){var i=e.am(n,e[n],t,2*n,0,1);(t[n+e.t]+=e.am(n+1,2*e[n],t,2*n+1,i,e.t-n-1))>=e.DV&&(t[n+e.t]-=e.DV,t[n+e.t+1]=1)}t.t>0&&(t[t.t-1]+=e.am(n,e[n],t,2*n,0,1)),t.s=0,t.clamp()}function P(t,e,n){var i=t.abs();if(!(i.t<=0)){var o=this.abs();if(o.t<i.t)return null!=e&&e.fromInt(0),void(null!=n&&this.copyTo(n));null==n&&(n=s());var a=s(),c=this.s,u=t.s,l=this.DB-E(i[i.t-1]);l>0?(i.lShiftTo(l,a),o.lShiftTo(l,n)):(i.copyTo(a),o.copyTo(n));var h=a.t,p=a[h-1];if(0!=p){var d=p*(1<<this.F1)+(h>1?a[h-2]>>this.F2:0),f=this.FV/d,m=(1<<this.F1)/d,y=1<<this.F2,g=n.t,v=g-h,_=null==e?s():e;for(a.dlShiftTo(v,_),n.compareTo(_)>=0&&(n[n.t++]=1,n.subTo(_,n)),r.ONE.dlShiftTo(h,_),_.subTo(a,a);a.t<h;)a[a.t++]=0;for(;--v>=0;){var b=n[--g]==p?this.DM:Math.floor(n[g]*f+(n[g-1]+y)*m);if((n[g]+=a.am(0,b,n,v,0,h))<b)for(a.dlShiftTo(v,_),n.subTo(_,n);n[g]<--b;)n.subTo(_,n)}null!=e&&(n.drShiftTo(h,e),c!=u&&r.ZERO.subTo(e,e)),n.t=h,n.clamp(),l>0&&n.rShiftTo(l,n),0>c&&r.ZERO.subTo(n,n)}}}function O(t){var e=s();return this.abs().divRemTo(t,null,e),this.s<0&&e.compareTo(r.ZERO)>0&&t.subTo(e,e),e}function R(t){this.m=t}function D(t){return t.s<0||t.compareTo(this.m)>=0?t.mod(this.m):t}function M(t){return t}function U(t){t.divRemTo(this.m,null,t)}function F(t,e,n){t.multiplyTo(e,n),this.reduce(n)}function L(t,e){t.squareTo(e),this.reduce(e)}function k(){if(this.t<1)return 0;var t=this[0];if(0==(1&t))return 0;var e=3&t;return e=e*(2-(15&t)*e)&15,e=e*(2-(255&t)*e)&255,e=e*(2-((65535&t)*e&65535))&65535,e=e*(2-t*e%this.DV)%this.DV,e>0?this.DV-e:-e}function B(t){this.m=t,this.mp=t.invDigit(),this.mpl=32767&this.mp,this.mph=this.mp>>15,this.um=(1<<t.DB-15)-1,this.mt2=2*t.t}function j(t){var e=s();return t.abs().dlShiftTo(this.m.t,e),e.divRemTo(this.m,null,e),t.s<0&&e.compareTo(r.ZERO)>0&&this.m.subTo(e,e),e}function V(t){var e=s();return t.copyTo(e),this.reduce(e),e}function H(t){for(;t.t<=this.mt2;)t[t.t++]=0;for(var e=0;e<this.m.t;++e){var n=32767&t[e],i=n*this.mpl+((n*this.mph+(t[e]>>15)*this.mpl&this.um)<<15)&t.DM;for(n=e+this.m.t,t[n]+=this.m.am(0,i,t,e,0,this.m.t);t[n]>=t.DV;)t[n]-=t.DV,t[++n]++}t.clamp(),t.drShiftTo(this.m.t,t),t.compareTo(this.m)>=0&&t.subTo(this.m,t)}function z(t,e){t.squareTo(e),this.reduce(e)}function Y(t,e,n){t.multiplyTo(e,n),this.reduce(n)}function G(){return 0==(this.t>0?1&this[0]:this.s)}function W(t,e){if(t>4294967295||1>t)return r.ONE;var n=s(),i=s(),o=e.convert(this),a=E(t)-1;for(o.copyTo(n);--a>=0;)if(e.sqrTo(n,i),(t&1<<a)>0)e.mulTo(i,o,n);else{var c=n;n=i,i=c}return e.revert(n)}function q(t,e){var n;return n=256>t||e.isEven()?new R(e):new B(e),this.exp(t,n)}function K(t,e){return new r(t,e)}function Q(t,e){if(e<t.length+11)throw new Error("Message too long for RSA");for(var n=new Array,i=t.length-1;i>=0&&e>0;){var o=t.charCodeAt(i--);128>o?n[--e]=o:o>127&&2048>o?(n[--e]=63&o|128,n[--e]=o>>6|192):(n[--e]=63&o|128,n[--e]=o>>6&63|128,n[--e]=o>>12|224)}n[--e]=0;for(var s=0,a=0,c=0;e>2;)0==c&&(a=lt.random.randomWords(1,0)[0]),s=a>>c&255,c=(c+8)%32,0!=s&&(n[--e]=s);return n[--e]=2,n[--e]=0,new r(n)}function Z(){this.n=null,this.e=0,this.d=null,this.p=null,this.q=null,this.dmp1=null,this.dmq1=null,this.coeff=null}function X(t,e){if(!(null!=t&&null!=e&&t.length>0&&e.length>0))throw new Error("Invalid RSA public key");this.n=K(t,16),this.e=parseInt(e,16)}function $(t){return t.modPowInt(this.e,this.n)}function J(t){var e=Q(t,this.n.bitLength()+7>>3);if(null==e)return null;var n=this.doPublic(e);if(null==n)return null;var i=n.toString(16);return 0==(1&i.length)?i:"0"+i}t.prototype.get=function(t){if(void 0==t&&(t=this.pos++),t>=this.enc.length)throw"Requesting byte offset "+t+" on a stream of length "+this.enc.length;return this.enc[t]},t.prototype.hexDigits="0123456789ABCDEF",t.prototype.hexByte=function(t){return this.hexDigits.charAt(t>>4&15)+this.hexDigits.charAt(15&t)},t.prototype.hexDump=function(t,e){for(var n="",i=t;e>i;++i)switch(n+=this.hexByte(this.get(i)),15&i){case 7:n+="  ";break;case 15:n+="\n";break;default:n+=" "}return n},t.prototype.parseStringISO=function(t,e){for(var n="",i=t;e>i;++i)n+=String.fromCharCode(this.get(i));return n},t.prototype.parseStringUTF=function(t,e){for(var n="",i=0,o=t;e>o;){var i=this.get(o++);n+=String.fromCharCode(128>i?i:i>191&&224>i?(31&i)<<6|63&this.get(o++):(15&i)<<12|(63&this.get(o++))<<6|63&this.get(o++))}return n},t.prototype.reTime=/^((?:1[89]|2\d)?\d\d)(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])([01]\d|2[0-3])(?:([0-5]\d)(?:([0-5]\d)(?:[.,](\d{1,3}))?)?)?(Z|[-+](?:[0]\d|1[0-2])([0-5]\d)?)?$/,t.prototype.parseTime=function(t,e){var n=this.parseStringISO(t,e),i=this.reTime.exec(n);return i?(n=i[1]+"-"+i[2]+"-"+i[3]+" "+i[4],i[5]&&(n+=":"+i[5],i[6]&&(n+=":"+i[6],i[7]&&(n+="."+i[7]))),i[8]&&(n+=" UTC","Z"!=i[8]&&(n+=i[8],i[9]&&(n+=":"+i[9]))),n):"Unrecognized time: "+n},t.prototype.parseInteger=function(t,e){var n=e-t;if(n>4){n<<=3;var i=this.get(t);if(0==i)n-=8;else for(;128>i;)i<<=1,--n;return"("+n+" bit)"}for(var o=0,r=t;e>r;++r)o=o<<8|this.get(r);return o},t.prototype.parseBitString=function(t,e){var n=this.get(t),i=(e-t-1<<3)-n,o="("+i+" bit)";if(20>=i){var r=n;o+=" ";for(var s=e-1;s>t;--s){for(var a=this.get(s),c=r;8>c;++c)o+=a>>c&1?"1":"0";r=0}}return o},t.prototype.parseOctetString=function(t,e){var n=e-t,i="("+n+" byte) ";n>20&&(e=t+20);for(var o=t;e>o;++o)i+=this.hexByte(this.get(o));return n>20&&(i+=String.fromCharCode(8230)),i},t.prototype.parseOID=function(t,e){for(var n,i=0,o=0,r=t;e>r;++r){var s=this.get(r);i=i<<7|127&s,o+=7,128&s||(void 0==n?n=parseInt(i/40)+"."+i%40:n+="."+(o>=31?"bigint":i),i=o=0),n+=String.fromCharCode()}return n},e.prototype.typeName=function(){if(void 0==this.tag)return"unknown";var t=this.tag>>6,e=(this.tag>>5&1,31&this.tag);switch(t){case 0:switch(e){case 0:return"EOC";case 1:return"BOOLEAN";case 2:return"INTEGER";case 3:return"BIT_STRING";case 4:return"OCTET_STRING";case 5:return"NULL";case 6:return"OBJECT_IDENTIFIER";case 7:return"ObjectDescriptor";case 8:return"EXTERNAL";case 9:return"REAL";case 10:return"ENUMERATED";case 11:return"EMBEDDED_PDV";case 12:return"UTF8String";case 16:return"SEQUENCE";case 17:return"SET";case 18:return"NumericString";case 19:return"PrintableString";case 20:return"TeletexString";case 21:return"VideotexString";case 22:return"IA5String";case 23:return"UTCTime";case 24:return"GeneralizedTime";case 25:return"GraphicString";case 26:return"VisibleString";case 27:return"GeneralString";case 28:return"UniversalString";case 30:return"BMPString";default:return"Universal_"+e.toString(16)}case 1:return"Application_"+e.toString(16);case 2:return"["+e+"]";case 3:return"Private_"+e.toString(16)}},e.prototype.content=function(){if(void 0==this.tag)return null;var t=this.tag>>6;if(0!=t)return null==this.sub?null:"("+this.sub.length+")";var e=31&this.tag,n=this.posContent(),i=Math.abs(this.length);switch(e){case 1:return 0==this.stream.get(n)?"false":"true";case 2:return this.stream.parseInteger(n,n+i);case 3:return this.sub?"("+this.sub.length+" elem)":this.stream.parseBitString(n,n+i);case 4:return this.sub?"("+this.sub.length+" elem)":this.stream.parseOctetString(n,n+i);case 6:return this.stream.parseOID(n,n+i);case 16:case 17:return"("+this.sub.length+" elem)";case 12:return this.stream.parseStringUTF(n,n+i);case 18:case 19:case 20:case 21:case 22:case 26:return this.stream.parseStringISO(n,n+i);case 23:case 24:return this.stream.parseTime(n,n+i)}return null},e.prototype.toString=function(){return this.typeName()+"@"+this.stream.pos+"[header:"+this.header+",length:"+this.length+",sub:"+(null==this.sub?"null":this.sub.length)+"]"},e.prototype.print=function(t){if(void 0==t&&(t=""),document.writeln(t+this),null!=this.sub){t+="  ";for(var e=0,n=this.sub.length;n>e;++e)this.sub[e].print(t)}},e.prototype.toPrettyString=function(t){void 0==t&&(t="");var e=t+this.typeName()+" @"+this.stream.pos;if(this.length>=0&&(e+="+"),e+=this.length,32&this.tag?e+=" (constructed)":3!=this.tag&&4!=this.tag||null==this.sub||(e+=" (encapsulates)"),e+="\n",null!=this.sub){t+="  ";for(var n=0,i=this.sub.length;i>n;++n)e+=this.sub[n].toPrettyString(t)}return e},e.prototype.posStart=function(){return this.stream.pos},e.prototype.posContent=function(){return this.stream.pos+this.header},e.prototype.posEnd=function(){return this.stream.pos+this.header+Math.abs(this.length)},e.decodeLength=function(t){var e=t.get(),n=127&e;if(n==e)return n;if(n>3)throw"Length over 24 bits not supported at position "+(t.pos-1);if(0==n)return-1;e=0;for(var i=0;n>i;++i)e=e<<8|t.get();return e},e.hasContent=function(n,i,o){if(32&n)return!0;if(3>n||n>4)return!1;var r=new t(o);3==n&&r.get();var s=r.get();if(s>>6&1)return!1;try{var a=e.decodeLength(r);return r.pos-o.pos+a==i}catch(c){return!1}},e.decode=function(n){n instanceof t||(n=new t(n,0));var i=new t(n),o=n.get(),r=e.decodeLength(n),s=n.pos-i.pos,a=null;if(e.hasContent(o,r,n)){var c=n.pos;if(3==o&&n.get(),a=[],r>=0){for(var u=c+r;n.pos<u;)a[a.length]=e.decode(n);if(n.pos!=u)throw"Content size is not correct for container starting at offset "+c}else try{for(;;){var l=e.decode(n);if(0==l.tag)break;a[a.length]=l}r=c-n.pos}catch(h){throw"Exception while decoding undefined length content: "+h}}else n.pos+=r;return new e(i,s,r,o,a)};var tt,et="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",nt="=",it=0xdeadbeefcafe,ot=15715070==(16777215&it);ot&&"Microsoft Internet Explorer"==navigator.appName?(r.prototype.am=c,tt=30):ot&&"Netscape"!=navigator.appName?(r.prototype.am=a,tt=26):(r.prototype.am=u,tt=28),r.prototype.DB=tt,r.prototype.DM=(1<<tt)-1,r.prototype.DV=1<<tt;var rt=52;r.prototype.FV=Math.pow(2,rt),r.prototype.F1=rt-tt,r.prototype.F2=2*tt-rt;var st,at,ct="0123456789abcdefghijklmnopqrstuvwxyz",ut=new Array;for(st="0".charCodeAt(0),at=0;9>=at;++at)ut[st++]=at;for(st="a".charCodeAt(0),at=10;36>at;++at)ut[st++]=at;for(st="A".charCodeAt(0),at=10;36>at;++at)ut[st++]=at;R.prototype.convert=D,R.prototype.revert=M,R.prototype.reduce=U,R.prototype.mulTo=F,R.prototype.sqrTo=L,B.prototype.convert=j,B.prototype.revert=V,B.prototype.reduce=H,B.prototype.mulTo=Y,B.prototype.sqrTo=z,r.prototype.copyTo=p,r.prototype.fromInt=d,r.prototype.fromString=m,r.prototype.clamp=y,r.prototype.dlShiftTo=A,r.prototype.drShiftTo=C,r.prototype.lShiftTo=N,r.prototype.rShiftTo=T,r.prototype.subTo=I,r.prototype.multiplyTo=S,r.prototype.squareTo=x,r.prototype.divRemTo=P,r.prototype.invDigit=k,r.prototype.isEven=G,r.prototype.exp=W,r.prototype.toString=g,r.prototype.negate=v,r.prototype.abs=_,r.prototype.compareTo=b,r.prototype.bitLength=w,r.prototype.mod=O,r.prototype.modPowInt=q,r.ZERO=f(0),r.ONE=f(1),Z.prototype.doPublic=$,Z.prototype.setPublic=X,Z.prototype.encrypt=J;var lt={cipher:{},hash:{},keyexchange:{},mode:{},misc:{},codec:{},exception:{corrupt:function(t){this.toString=function(){return"CORRUPT: "+this.message},this.message=t},invalid:function(t){this.toString=function(){return"INVALID: "+this.message},this.message=t},bug:function(t){this.toString=function(){return"BUG: "+this.message},this.message=t},notReady:function(t){this.toString=function(){return"NOT READY: "+this.message},this.message=t}}};"undefined"!=typeof module&&module.exports&&(module.exports=lt),lt.cipher.aes=function(t){this._tables[0][0][0]||this._precompute();var e,n,i,o,r,s=this._tables[0][4],a=this._tables[1],c=t.length,u=1;if(4!==c&&6!==c&&8!==c)throw new lt.exception.invalid("invalid aes key size");for(this._key=[o=t.slice(0),r=[]],e=c;4*c+28>e;e++)i=o[e-1],(e%c===0||8===c&&e%c===4)&&(i=s[i>>>24]<<24^s[i>>16&255]<<16^s[i>>8&255]<<8^s[255&i],e%c===0&&(i=i<<8^i>>>24^u<<24,u=u<<1^283*(u>>7))),o[e]=o[e-c]^i;for(n=0;e;n++,e--)i=o[3&n?e:e-4],r[n]=4>=e||4>n?i:a[0][s[i>>>24]]^a[1][s[i>>16&255]]^a[2][s[i>>8&255]]^a[3][s[255&i]]},lt.cipher.aes.prototype={encrypt:function(t){return this._crypt(t,0)},decrypt:function(t){return this._crypt(t,1)},_tables:[[[],[],[],[],[]],[[],[],[],[],[]]],_precompute:function(){var t,e,n,i,o,r,s,a,c,u=this._tables[0],l=this._tables[1],h=u[4],p=l[4],d=[],f=[];for(t=0;256>t;t++)f[(d[t]=t<<1^283*(t>>7))^t]=t;for(e=n=0;!h[e];e^=i||1,n=f[n]||1)for(s=n^n<<1^n<<2^n<<3^n<<4,s=s>>8^255&s^99,h[e]=s,p[s]=e,r=d[o=d[i=d[e]]],c=16843009*r^65537*o^257*i^16843008*e,a=257*d[s]^16843008*s,t=0;4>t;t++)u[t][e]=a=a<<24^a>>>8,l[t][s]=c=c<<24^c>>>8;for(t=0;5>t;t++)u[t]=u[t].slice(0),l[t]=l[t].slice(0)},_crypt:function(t,e){if(4!==t.length)throw new lt.exception.invalid("invalid aes block size");var n,i,o,r,s=this._key[e],a=t[0]^s[0],c=t[e?3:1]^s[1],u=t[2]^s[2],l=t[e?1:3]^s[3],h=s.length/4-2,p=4,d=[0,0,0,0],f=this._tables[e],m=f[0],y=f[1],g=f[2],v=f[3],_=f[4];for(r=0;h>r;r++)n=m[a>>>24]^y[c>>16&255]^g[u>>8&255]^v[255&l]^s[p],i=m[c>>>24]^y[u>>16&255]^g[l>>8&255]^v[255&a]^s[p+1],o=m[u>>>24]^y[l>>16&255]^g[a>>8&255]^v[255&c]^s[p+2],l=m[l>>>24]^y[a>>16&255]^g[c>>8&255]^v[255&u]^s[p+3],p+=4,a=n,c=i,u=o;for(r=0;4>r;r++)d[e?3&-r:r]=_[a>>>24]<<24^_[c>>16&255]<<16^_[u>>8&255]<<8^_[255&l]^s[p++],n=a,a=c,c=u,u=l,l=n;return d}},lt.bitArray={bitSlice:function(t,e,n){return t=lt.bitArray._shiftRight(t.slice(e/32),32-(31&e)).slice(1),void 0===n?t:lt.bitArray.clamp(t,n-e)},extract:function(t,e,n){var i,o=Math.floor(-e-n&31);return i=-32&(e+n-1^e)?t[e/32|0]<<32-o^t[e/32+1|0]>>>o:t[e/32|0]>>>o,i&(1<<n)-1},concat:function(t,e){if(0===t.length||0===e.length)return t.concat(e);var n=t[t.length-1],i=lt.bitArray.getPartial(n);return 32===i?t.concat(e):lt.bitArray._shiftRight(e,i,0|n,t.slice(0,t.length-1))},bitLength:function(t){var e,n=t.length;return 0===n?0:(e=t[n-1],32*(n-1)+lt.bitArray.getPartial(e))},clamp:function(t,e){if(32*t.length<e)return t;t=t.slice(0,Math.ceil(e/32));var n=t.length;return e=31&e,n>0&&e&&(t[n-1]=lt.bitArray.partial(e,t[n-1]&2147483648>>e-1,1)),t},partial:function(t,e,n){return 32===t?e:(n?0|e:e<<32-t)+1099511627776*t},getPartial:function(t){return Math.round(t/1099511627776)||32},equal:function(t,e){if(lt.bitArray.bitLength(t)!==lt.bitArray.bitLength(e))return!1;var n,i=0;for(n=0;n<t.length;n++)i|=t[n]^e[n];return 0===i},_shiftRight:function(t,e,n,i){var o,r,s=0;for(void 0===i&&(i=[]);e>=32;e-=32)i.push(n),n=0;if(0===e)return i.concat(t);for(o=0;o<t.length;o++)i.push(n|t[o]>>>e),n=t[o]<<32-e;return s=t.length?t[t.length-1]:0,r=lt.bitArray.getPartial(s),i.push(lt.bitArray.partial(e+r&31,e+r>32?n:i.pop(),1)),i},_xor4:function(t,e){return[t[0]^e[0],t[1]^e[1],t[2]^e[2],t[3]^e[3]]}},lt.codec.hex={fromBits:function(t){var e,n="";for(e=0;e<t.length;e++)n+=((0|t[e])+0xf00000000000).toString(16).substr(4);return n.substr(0,lt.bitArray.bitLength(t)/4)},toBits:function(t){var e,n,i=[];for(t=t.replace(/\s|0x/g,""),n=t.length,t+="00000000",e=0;e<t.length;e+=8)i.push(0^parseInt(t.substr(e,8),16));return lt.bitArray.clamp(i,4*n)}},lt.codec.utf8String={fromBits:function(t){var e,n,i="",o=lt.bitArray.bitLength(t);for(e=0;o/8>e;e++)0===(3&e)&&(n=t[e/4]),i+=String.fromCharCode(n>>>24),n<<=8;return decodeURIComponent(escape(i))},toBits:function(t){t=unescape(encodeURIComponent(t));var e,n=[],i=0;for(e=0;e<t.length;e++)i=i<<8|t.charCodeAt(e),3===(3&e)&&(n.push(i),i=0);return 3&e&&n.push(lt.bitArray.partial(8*(3&e),i)),n}},lt.codec.base64={_chars:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",fromBits:function(t,e,n){var i,o="",r=0,s=lt.codec.base64._chars,a=0,c=lt.bitArray.bitLength(t);for(n&&(s=s.substr(0,62)+"-_"),i=0;6*o.length<c;)o+=s.charAt((a^t[i]>>>r)>>>26),6>r?(a=t[i]<<6-r,r+=26,i++):(a<<=6,r-=6);for(;3&o.length&&!e;)o+="=";return o},toBits:function(t,e){t=t.replace(/\s|=/g,"");var n,i,o=[],r=0,s=lt.codec.base64._chars,a=0;for(e&&(s=s.substr(0,62)+"-_"),n=0;n<t.length;n++){if(i=s.indexOf(t.charAt(n)),0>i)throw new lt.exception.invalid("this isn't base64!");r>26?(r-=26,o.push(a^i>>>r),a=i<<32-r):(r+=6,a^=i<<32-r)}return 56&r&&o.push(lt.bitArray.partial(56&r,a,1)),o}},lt.codec.base64url={fromBits:function(t){return lt.codec.base64.fromBits(t,1,1)},toBits:function(t){return lt.codec.base64.toBits(t,1)}},void 0===lt.beware&&(lt.beware={}),lt.beware["CBC mode is dangerous because it doesn't protect message integrity."]=function(){lt.mode.cbc={name:"cbc",encrypt:function(t,e,n,i){if(i&&i.length)throw new lt.exception.invalid("cbc can't authenticate data");if(128!==lt.bitArray.bitLength(n))throw new lt.exception.invalid("cbc iv must be 128 bits");var o,r=lt.bitArray,s=r._xor4,a=r.bitLength(e),c=0,u=[];if(7&a)throw new lt.exception.invalid("pkcs#5 padding only works for multiples of a byte");for(o=0;a>=c+128;o+=4,c+=128)n=t.encrypt(s(n,e.slice(o,o+4))),u.splice(o,0,n[0],n[1],n[2],n[3]);return a=16843009*(16-(a>>3&15)),n=t.encrypt(s(n,r.concat(e,[a,a,a,a]).slice(o,o+4))),u.splice(o,0,n[0],n[1],n[2],n[3]),u},decrypt:function(t,e,n,i){if(i&&i.length)throw new lt.exception.invalid("cbc can't authenticate data");if(128!==lt.bitArray.bitLength(n))throw new lt.exception.invalid("cbc iv must be 128 bits");if(127&lt.bitArray.bitLength(e)||!e.length)throw new lt.exception.corrupt("cbc ciphertext must be a positive multiple of the block size");var o,r,s,a=lt.bitArray,c=a._xor4,u=[];for(i=i||[],o=0;o<e.length;o+=4)r=e.slice(o,o+4),s=c(n,t.decrypt(r)),u.splice(o,0,s[0],s[1],s[2],s[3]),n=r;if(r=255&u[o-1],0==r||r>16)throw new lt.exception.corrupt("pkcs#5 padding corrupt");if(s=16843009*r,!a.equal(a.bitSlice([s,s,s,s],0,8*r),a.bitSlice(u,32*u.length-8*r,32*u.length)))throw new lt.exception.corrupt("pkcs#5 padding corrupt");return a.bitSlice(u,0,32*u.length-8*r)}}},lt.misc.hmac=function(t,e){this._hash=e=e||lt.hash.sha256;var n,i=[[],[]],o=e.prototype.blockSize/32;for(this._baseHash=[new e,new e],t.length>o&&(t=e.hash(t)),n=0;o>n;n++)i[0][n]=909522486^t[n],i[1][n]=1549556828^t[n];this._baseHash[0].update(i[0]),this._baseHash[1].update(i[1])},lt.misc.hmac.prototype.encrypt=lt.misc.hmac.prototype.mac=function(t,e){var n=new this._hash(this._baseHash[0]).update(t,e).finalize();return new this._hash(this._baseHash[1]).update(n).finalize()},lt.hash.sha256=function(t){this._key[0]||this._precompute(),t?(this._h=t._h.slice(0),this._buffer=t._buffer.slice(0),this._length=t._length):this.reset()},lt.hash.sha256.hash=function(t){return(new lt.hash.sha256).update(t).finalize()},lt.hash.sha256.prototype={blockSize:512,reset:function(){return this._h=this._init.slice(0),this._buffer=[],this._length=0,this},update:function(t){"string"==typeof t&&(t=lt.codec.utf8String.toBits(t));var e,n=this._buffer=lt.bitArray.concat(this._buffer,t),i=this._length,o=this._length=i+lt.bitArray.bitLength(t);for(e=512+i&-512;o>=e;e+=512)this._block(n.splice(0,16));return this},finalize:function(){var t,e=this._buffer,n=this._h;for(e=lt.bitArray.concat(e,[lt.bitArray.partial(1,1)]),t=e.length+2;15&t;t++)e.push(0);for(e.push(Math.floor(this._length/4294967296)),e.push(0|this._length);e.length;)this._block(e.splice(0,16));return this.reset(),n},_init:[],_key:[],_precompute:function(){function t(t){return 4294967296*(t-Math.floor(t))|0}var e,n=0,i=2;t:for(;64>n;i++){for(e=2;i>=e*e;e++)if(i%e===0)continue t;8>n&&(this._init[n]=t(Math.pow(i,.5))),this._key[n]=t(Math.pow(i,1/3)),n++}},_block:function(t){var e,n,i,o,r=t.slice(0),s=this._h,a=this._key,c=s[0],u=s[1],l=s[2],h=s[3],p=s[4],d=s[5],f=s[6],m=s[7];for(e=0;64>e;e++)16>e?n=r[e]:(i=r[e+1&15],o=r[e+14&15],n=r[15&e]=(i>>>7^i>>>18^i>>>3^i<<25^i<<14)+(o>>>17^o>>>19^o>>>10^o<<15^o<<13)+r[15&e]+r[e+9&15]|0),n=n+m+(p>>>6^p>>>11^p>>>25^p<<26^p<<21^p<<7)+(f^p&(d^f))+a[e],m=f,f=d,d=p,p=h+n|0,h=l,l=u,u=c,c=n+(u&l^h&(u^l))+(u>>>2^u>>>13^u>>>22^u<<30^u<<19^u<<10)|0;s[0]=s[0]+c|0,s[1]=s[1]+u|0,s[2]=s[2]+l|0,s[3]=s[3]+h|0,s[4]=s[4]+p|0,s[5]=s[5]+d|0,s[6]=s[6]+f|0,s[7]=s[7]+m|0}},lt.random={randomWords:function(t,e){var n,i,o=[],r=this.isReady(e);if(r===this._NOT_READY)throw new lt.exception.notReady("generator isn't seeded");for(r&this._REQUIRES_RESEED&&this._reseedFromPools(!(r&this._READY)),n=0;t>n;n+=4)(n+1)%this._MAX_WORDS_PER_BURST===0&&this._gate(),i=this._gen4words(),o.push(i[0],i[1],i[2],i[3]);return this._gate(),o.slice(0,t)},setDefaultParanoia:function(t){this._defaultParanoia=t},addEntropy:function(t,e,n){n=n||"user";var i,o,r,s=(new Date).valueOf(),a=this._robins[n],c=this.isReady(),u=0;switch(i=this._collectorIds[n],void 0===i&&(i=this._collectorIds[n]=this._collectorIdNext++),void 0===a&&(a=this._robins[n]=0),this._robins[n]=(this._robins[n]+1)%this._pools.length,typeof t){case"number":void 0===e&&(e=1),this._pools[a].update([i,this._eventId++,1,e,s,1,0|t]);break;case"object":var l=Object.prototype.toString.call(t);if("[object Uint32Array]"===l){for(r=[],o=0;o<t.length;o++)r.push(t[o]);t=r}else for("[object Array]"!==l&&(u=1),o=0;o<t.length&&!u;o++)"number"!=typeof t[o]&&(u=1);if(!u){if(void 0===e)for(e=0,o=0;o<t.length;o++)for(r=t[o];r>0;)e++,r>>>=1;this._pools[a].update([i,this._eventId++,2,e,s,t.length].concat(t))}break;case"string":void 0===e&&(e=t.length),this._pools[a].update([i,this._eventId++,3,e,s,t.length]),this._pools[a].update(t);break;default:u=1}if(u)throw new lt.exception.bug("random: addEntropy only supports number, array of numbers or string");this._poolEntropy[a]+=e,this._poolStrength+=e,c===this._NOT_READY&&(this.isReady()!==this._NOT_READY&&this._fireEvent("seeded",Math.max(this._strength,this._poolStrength)),this._fireEvent("progress",this.getProgress()))},isReady:function(t){var e=this._PARANOIA_LEVELS[void 0!==t?t:this._defaultParanoia];return this._strength&&this._strength>=e?this._poolEntropy[0]>this._BITS_PER_RESEED&&(new Date).valueOf()>this._nextReseed?this._REQUIRES_RESEED|this._READY:this._READY:this._poolStrength>=e?this._REQUIRES_RESEED|this._NOT_READY:this._NOT_READY},getProgress:function(t){var e=this._PARANOIA_LEVELS[t?t:this._defaultParanoia];return this._strength>=e?1:this._poolStrength>e?1:this._poolStrength/e},startCollectors:function(){if(!this._collectorsStarted){if(window.addEventListener)window.addEventListener("load",this._loadTimeCollector,!1),window.addEventListener("mousemove",this._mouseCollector,!1);else{if(!document.attachEvent)throw new lt.exception.bug("can't attach event");document.attachEvent("onload",this._loadTimeCollector),document.attachEvent("onmousemove",this._mouseCollector)}this._collectorsStarted=!0}},stopCollectors:function(){this._collectorsStarted&&(window.removeEventListener?(window.removeEventListener("load",this._loadTimeCollector,!1),window.removeEventListener("mousemove",this._mouseCollector,!1)):window.detachEvent&&(window.detachEvent("onload",this._loadTimeCollector),window.detachEvent("onmousemove",this._mouseCollector)),this._collectorsStarted=!1)},addEventListener:function(t,e){this._callbacks[t][this._callbackI++]=e},removeEventListener:function(t,e){var n,i,o=this._callbacks[t],r=[];for(i in o)o.hasOwnProperty(i)&&o[i]===e&&r.push(i);for(n=0;n<r.length;n++)i=r[n],delete o[i]},_pools:[new lt.hash.sha256],_poolEntropy:[0],_reseedCount:0,_robins:{},_eventId:0,_collectorIds:{},_collectorIdNext:0,_strength:0,_poolStrength:0,_nextReseed:0,_key:[0,0,0,0,0,0,0,0],_counter:[0,0,0,0],_cipher:void 0,_defaultParanoia:6,_collectorsStarted:!1,_callbacks:{progress:{},seeded:{}},_callbackI:0,_NOT_READY:0,_READY:1,_REQUIRES_RESEED:2,_MAX_WORDS_PER_BURST:65536,_PARANOIA_LEVELS:[0,48,64,96,128,192,256,384,512,768,1024],_MILLISECONDS_PER_RESEED:3e4,_BITS_PER_RESEED:80,_gen4words:function(){for(var t=0;4>t&&(this._counter[t]=this._counter[t]+1|0,!this._counter[t]);t++);return this._cipher.encrypt(this._counter)},_gate:function(){this._key=this._gen4words().concat(this._gen4words()),this._cipher=new lt.cipher.aes(this._key)},_reseed:function(t){this._key=lt.hash.sha256.hash(this._key.concat(t)),this._cipher=new lt.cipher.aes(this._key);for(var e=0;4>e&&(this._counter[e]=this._counter[e]+1|0,!this._counter[e]);e++);},_reseedFromPools:function(t){var e,n=[],i=0;for(this._nextReseed=n[0]=(new Date).valueOf()+this._MILLISECONDS_PER_RESEED,e=0;16>e;e++)n.push(4294967296*Math.random()|0);for(e=0;e<this._pools.length&&(n=n.concat(this._pools[e].finalize()),i+=this._poolEntropy[e],this._poolEntropy[e]=0,t||!(this._reseedCount&1<<e));e++);this._reseedCount>=1<<this._pools.length&&(this._pools.push(new lt.hash.sha256),this._poolEntropy.push(0)),this._poolStrength-=i,i>this._strength&&(this._strength=i),this._reseedCount++,this._reseed(n)},_mouseCollector:function(t){var e=t.x||t.clientX||t.offsetX||0,n=t.y||t.clientY||t.offsetY||0;lt.random.addEntropy([e,n],2,"mouse")},_loadTimeCollector:function(t){lt.random.addEntropy((new Date).valueOf(),2,"loadtime")},_fireEvent:function(t,e){var n,i=lt.random._callbacks[t],o=[];for(n in i)i.hasOwnProperty(n)&&o.push(i[n]);for(n=0;n<o.length;n++)o[n](e)}},function(){try{var t=new Uint32Array(32);crypto.getRandomValues(t),lt.random.addEntropy(t,1024,"crypto.getRandomValues")}catch(e){}}(),function(){for(var t in lt.beware)lt.beware.hasOwnProperty(t)&&lt.beware[t]()}();var ht={sjcl:lt,version:"1.3.10"};ht.generateAesKey=function(){return{key:lt.random.randomWords(8,0),encrypt:function(t){return this.encryptWithIv(t,lt.random.randomWords(4,0))},encryptWithIv:function(t,e){var n=new lt.cipher.aes(this.key),i=lt.codec.utf8String.toBits(t),o=lt.mode.cbc.encrypt(n,i,e),r=lt.bitArray.concat(e,o);return lt.codec.base64.fromBits(r)}}},ht.create=function(t){return new ht.EncryptionClient(t)},ht.EncryptionClient=function(t){var i=this,r=[];i.publicKey=t,i.version=ht.version;var s=function(t,e){var n,i,o;n=document.createElement(t);for(i in e)e.hasOwnProperty(i)&&(o=e[i],n.setAttribute(i,o));return n},a=function(t){return __webpack_provided_window_dot_jQuery&&t instanceof jQuery?t[0]:t.nodeType&&1===t.nodeType?t:document.getElementById(t)},c=function(t){var e,n,i,o,r=[];if("INTEGER"===t.typeName()&&(e=t.posContent(),n=t.posEnd(),i=t.stream.hexDump(e,n).replace(/[ \n]/g,""),r.push(i)),null!==t.sub)for(o=0;o<t.sub.length;o++)r=r.concat(c(t.sub[o]));return r},u=function(t){var e,n,i=[],o=t.children;for(n=0;n<o.length;n++)e=o[n],1===e.nodeType&&e.attributes["data-encrypted-name"]?i.push(e):e.children&&e.children.length>0&&(i=i.concat(u(e)));return i},l=function(){var n,i,r,s,a,u;try{a=o(t),n=e.decode(a)}catch(l){throw"Invalid encryption key. Please use the key labeled 'Client-Side Encryption Key'"}if(r=c(n),2!==r.length)throw"Invalid encryption key. Please use the key labeled 'Client-Side Encryption Key'";return s=r[0],i=r[1],u=new Z,u.setPublic(s,i),u},h=function(){return{key:lt.random.randomWords(8,0),sign:function(t){var e=new lt.misc.hmac(this.key,lt.hash.sha256),n=e.encrypt(t);return lt.codec.base64.fromBits(n)}}};i.encrypt=function(t){var e=l(),o=ht.generateAesKey(),r=h(),s=o.encrypt(t),a=r.sign(lt.codec.base64.toBits(s)),c=lt.bitArray.concat(o.key,r.key),u=lt.codec.base64.fromBits(c),p=e.encrypt(u),d="$bt4|javascript_"+i.version.replace(/\./g,"_")+"$",f=null;return p&&(f=n(p)),d+f+"$"+s+"$"+a},i.encryptForm=function(t){var e,n,o,c,l,h;for(t=a(t),h=u(t);r.length>0;){try{t.removeChild(r[0])}catch(p){}r.splice(0,1)}for(l=0;l<h.length;l++)e=h[l],o=e.getAttribute("data-encrypted-name"),n=i.encrypt(e.value),e.removeAttribute("name"),c=s("input",{value:n,type:"hidden",name:o}),r.push(c),t.appendChild(c)},i.onSubmitEncryptForm=function(t,e){var n;t=a(t),n=function(n){return i.encryptForm(t),e?e(n):n},__webpack_provided_window_dot_jQuery?__webpack_provided_window_dot_jQuery(t).submit(n):t.addEventListener?t.addEventListener("submit",n,!1):t.attachEvent&&t.attachEvent("onsubmit",n)},i.formEncrypter={encryptForm:i.encryptForm,extractForm:a,onSubmitEncryptForm:i.onSubmitEncryptForm},lt.random.startCollectors()},window.Braintree=ht;
	
	}(),function(t){if(true)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var e;e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,e.braintree=t()}}(function(){var t;return function e(t,n,i){function o(s,a){if(!n[s]){if(!t[s]){var c="function"==typeof require&&require;if(!a&&c)return require(s,!0);if(r)return r(s,!0);var u=new Error("Cannot find module '"+s+"'");throw u.code="MODULE_NOT_FOUND",u}var l=n[s]={exports:{}};t[s][0].call(l.exports,function(e){var n=t[s][1][e];return o(n?n:e)},l,l.exports,e,t,n,i)}return n[s].exports}for(var r="function"==typeof require&&require,s=0;s<i.length;s++)o(i[s]);return o}({1:[function(t,e,n){(function(n){"use strict";function i(t){var e=t.analyticsConfiguration||{},i=n.braintree?n.braintree.VERSION:null,o=i?"braintree/web/"+i:"";return{sdkVersion:e.sdkVersion||o,merchantAppId:e.merchantAppId||n.location.host}}function o(t){var e=i(t);this.options=t,this.driver=t.driver||m({enableCORS:y(t)}),this.customerId=t.customerId,this.integration=t.integrationType||t.integration||"",this.sdkVersion=e.sdkVersion,this.merchantAppId=e.merchantAppId,this.sessionId=t.channel||_(),this.authorization=t.authorization||t.clientToken,c.isTokenizationKey(this.authorization)?(this.authorizationType=v.authorizationTypes.TOKENIZATION_KEY,this.gatewayConfiguration=t.gatewayConfiguration):(this.gatewayConfiguration=t.gatewayConfiguration||a(this.authorization),this.authorizationFingerprint=a(this.authorization).authorizationFingerprint,this.authorizationType=v.authorizationTypes.CLIENT_TOKEN),this.requestTimeout=t.hasOwnProperty("timeout")?t.timeout:6e4}var r=t(87),s=t(26),a=t(8),c=t(13),u=t(11),l=t(5),h=t(4),p=t(2),d=t(9),f=t(7).normalizeCreditCardFields,m=t(40).chooseDriver,y=t(12),g=t(6),v=t(3),_=t(49).uuid;o.prototype._getGatewayConfiguration=function(t){var e=this;return this.gatewayConfiguration?void t(null,this.gatewayConfiguration):void g({authorization:this.authorization,enableCORS:y(this.options)},function(n,i){return n?void t(n,null):(e.gatewayConfiguration=i,void t(null,i))})},o.prototype._getAttrs=function(t){var e={};return this.options.hasOwnProperty("sharedCustomerIdentifier")&&(e.sharedCustomerIdentifier=this.options.sharedCustomerIdentifier),e.sharedCustomerIdentifierType=this.options.sharedCustomerIdentifierType,e.braintreeLibraryVersion=this.sdkVersion,t.merchantAccountId&&(e.merchantAccountId=t.merchantAccountId),this.authorizationType===v.authorizationTypes.TOKENIZATION_KEY?e.clientKey=this.options.authorization:e.authorizationFingerprint=this.authorizationFingerprint,e._meta={sessionId:this.sessionId},e},o.prototype.getCreditCards=function(t,e){"function"==typeof t&&(e=t,t={}),this._getGatewayConfiguration(r(function(n,i){var o;return n?e(n):(o=this._getAttrs(i),t.defaultFirst===!0&&(o.defaultFirst=1),void this.driver.get(c.joinUrlFragments([i.clientApiUrl,"v1","payment_methods"]),o,function(t){var e=0,n=t.paymentMethods.length,i=[];for(e;n>e;e++)i.push(new h(t.paymentMethods[e]));return i},e,this.requestTimeout))},this))},o.prototype.tokenizeCoinbase=function(t,e){t.options={validate:!1},this.addCoinbase(t,function(t,n){t?e(t,null):n&&n.nonce?e(t,n):e("Unable to tokenize coinbase account.",null)})},o.prototype.tokenizePayPalAccount=function(t,e){t.options={validate:!1},this.addPayPalAccount(t,function(t,n){t?e(t,null):n&&n.nonce?e(null,n):e("Unable to tokenize paypal account.",null)})},o.prototype.tokenizeCard=function(t,e){t.options={validate:!1},this.addCreditCard(t,function(t,n){n&&n.nonce?e(t,n.nonce,{type:n.type,details:n.details}):e("Unable to tokenize card.",null)})},o.prototype.lookup3DS=function(t,e){this._getGatewayConfiguration(r(function(n,i){var o,r;return n?e(n):(o=c.joinUrlFragments([i.clientApiUrl,"v1/payment_methods",t.nonce,"three_d_secure/lookup"]),r=c.mergeOptions(this._getAttrs(i),{amount:t.amount}),void this.driver.post(o,r,function(t){return t},e,this.requestTimeout))},this))},o.prototype.createSEPAMandate=function(t,e){this._getGatewayConfiguration(r(function(n,i){var o;return n?e(n):(o=c.mergeOptions(this._getAttrs(i),{sepaMandate:t}),void this.driver.post(c.joinUrlFragments([i.clientApiUrl,"v1","sepa_mandates.json"]),o,function(t){return{sepaMandate:new u(t.europeBankAccounts[0].sepaMandates[0]),sepaBankAccount:new l(t.europeBankAccounts[0])}},e,this.requestTimeout))},this))},o.prototype.getSEPAMandate=function(t,e){this._getGatewayConfiguration(r(function(n,i){var o;return n?e(n):(o=c.mergeOptions(this._getAttrs(i),t),void this.driver.get(c.joinUrlFragments([i.clientApiUrl,"v1","sepa_mandates.json"]),o,function(t){return{sepaMandate:new u(t.sepaMandates[0])}},e,this.requestTimeout))},this))},o.prototype.addCoinbase=function(t,e){this._getGatewayConfiguration(r(function(n,i){var o;return n?e(n):(delete t.share,o=c.mergeOptions(this._getAttrs(i),{coinbaseAccount:t,_meta:{integration:this.integration||"custom",source:"coinbase",sessionId:this.sessionId}}),void this.driver.post(c.joinUrlFragments([i.clientApiUrl,"v1","payment_methods/coinbase_accounts"]),o,function(t){return new p(t.coinbaseAccounts[0])},e,this.requestTimeout))},this))},o.prototype.addPayPalAccount=function(t,e){this._getGatewayConfiguration(r(function(n,i){var o;return n?e(n):(delete t.share,o=c.mergeOptions(this._getAttrs(i),{paypalAccount:t,_meta:{integration:this.integration||"paypal",source:"paypal",sessionId:this.sessionId}}),void this.driver.post(c.joinUrlFragments([i.clientApiUrl,"v1","payment_methods","paypal_accounts"]),o,function(t){return new d(t.paypalAccounts[0])},e,this.requestTimeout))},this))},o.prototype.addCreditCard=function(t,e){this._getGatewayConfiguration(r(function(n,i){var o,r,s;return n?e(n):(s=t.share,delete t.share,r=f(t),o=c.mergeOptions(this._getAttrs(i),{share:s,creditCard:r,_meta:{integration:this.integration||"custom",source:"form",sessionId:this.sessionId}}),void this.driver.post(c.joinUrlFragments([i.clientApiUrl,"v1","payment_methods/credit_cards"]),o,function(t){return new h(t.creditCards[0])},e,this.requestTimeout))},this))},o.prototype.sendAnalyticsEvents=function(t,e){this._getGatewayConfiguration(r(function(i,o){var r,s,a,u;if(i)return void e(i);if(a=o.analytics.url,u=[],t=c.isArray(t)?t:[t],!a)return void(e&&e(null,{}));for(s in t)t.hasOwnProperty(s)&&u.push({kind:t[s]});r=c.mergeOptions(this._getAttrs(o),{analytics:u,_meta:{merchantAppId:this.merchantAppId,platform:"web",platformVersion:n.navigator.userAgent,integrationType:this.integration,sdkVersion:this.sdkVersion,sessionId:this.sessionId}}),this.driver.post(a,r,function(t){return t},e,v.ANALYTICS_TIMEOUT_MS)},this))},o.prototype.decryptBrowserswitchPayload=function(t,e){this._getGatewayConfiguration(r(function(n,i){var o,r;return n?e(n):(o=c.mergeOptions(this._getAttrs(i),{asymmetricEncryptedPayload:t}),r=c.joinUrlFragments([i.clientApiUrl,"/v1/paypal_browser_switch/decrypt"]),void this.driver.post(r,o,function(t){return t},e,this.requestTimeout))},this))},o.prototype.encryptBrowserswitchReturnPayload=function(t,e,n){this._getGatewayConfiguration(r(function(i,o){var r,s;return i?n(i):(r=c.mergeOptions(this._getAttrs(o),{payload:t,aesKey:e}),s=c.joinUrlFragments([o.clientApiUrl,"/v1/paypal_browser_switch/encrypt"]),void this.driver.post(s,r,function(t){return t},n,this.requestTimeout))},this))},o.prototype.exchangePaypalTokenForConsentCode=function(t,e){this._getGatewayConfiguration(r(function(n,i){var o,r;return n?e(n):(o=c.mergeOptions(this._getAttrs(i),t),i.merchantAccountId&&(o.merchantAccountId=i.merchantAccountId),r=c.joinUrlFragments([i.clientApiUrl,"/v1/paypal_account_service/merchant_consent"]),void this.driver.post(r,o,function(t){return t},e,this.requestTimeout))},this))},o.prototype.getAmexRewardsBalance=function(t,e){this._getGatewayConfiguration(r(function(n,i){var o;return n?e(n):(o=c.mergeOptions(this._getAttrs(i),t),o.nonce&&(o.paymentMethodNonce=o.nonce,delete o.nonce),void this.driver.get(c.joinUrlFragments([i.clientApiUrl,"v1/payment_methods/amex_rewards_balance"]),o,function(t){return t},e,this.requestTimeout))},this))},o.prototype.getAmexExpressCheckoutNonceProfile=function(t,e){this._getGatewayConfiguration(r(function(n,i){var o;return n?e(n):(o=c.mergeOptions(this._getAttrs(i),t),o.nonce&&(o.paymentMethodNonce=o.nonce,delete o.nonce),void this.driver.get(c.joinUrlFragments([i.clientApiUrl,"v1/payment_methods/amex_express_checkout_cards",o.paymentMethodNonce]),o,function(t){return t},e,this.requestTimeout))},this))},o.prototype.verify3DS=function(){var t=arguments;return this._secure3d?this._secure3d.verify.apply(this._secure3d,t):void this._getGatewayConfiguration(r(function(e,n){var i;return e?(i=t[t.length-1])(e):(this._secure3d=s.create(this,{container:this.options.container,clientToken:n}),this._secure3d.verify.apply(this._secure3d,t))},this))},e.exports=o}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{11:11,12:12,13:13,2:2,26:26,3:3,4:4,40:40,49:49,5:5,6:6,7:7,8:8,87:87,9:9}],2:[function(t,e,n){"use strict";function i(t){var e,n;for(e=0;e<o.length;e++)n=o[e],this[n]=t[n]}var o=["nonce","type","description","details"];e.exports=i},{}],3:[function(t,e,n){"use strict";var i={production:"https://api.braintreegateway.com:443",sandbox:"https://api.sandbox.braintreegateway.com:443"};e.exports={apiUrls:i,errors:{UNKNOWN_ERROR:"Unknown error",INVALID_TIMEOUT:"Timeout must be a number"},ANALYTICS_TIMEOUT_MS:4e3,authorizationTypes:{CLIENT_TOKEN:"CLIENT_TOKEN",TOKENIZATION_KEY:"TOKENIZATION_KEY"}}},{}],4:[function(t,e,n){"use strict";function i(t){var e,n;for(e=0;e<o.length;e++)n=o[e],this[n]=t[n]}var o=["billingAddress","branding","createdAt","createdAtMerchant","createdAtMerchantName","details","isLocked","lastUsedAt","lastUsedAtMerchant","lastUsedAtMerchantName","lastUsedByCurrentMerchant","nonce","securityQuestions","type"];e.exports=i},{}],5:[function(t,e,n){"use strict";function i(t){var e,n=["bic","maskedIBAN","nonce","accountHolderName"],i=0;for(i=0;i<n.length;i++)e=n[i],this[e]=t[e]}e.exports=i},{}],6:[function(t,e,n){"use strict";function i(t){var e=t.split("_"),n=e[0],i=e.slice(2).join("_");return{merchantId:i,environment:n}}function o(t,e){var n,o,l,h=a({enableCORS:c(t)}),p={};s.isTokenizationKey(t.authorization)?(p.clientKey=t.authorization,o=i(t.authorization),n=u.apiUrls[o.environment]+"/merchants/"+o.merchantId+"/client_api/v1/configuration"):(l=r(t.authorization),p.authorizationFingerprint=l.authorizationFingerprint,n=l.configUrl),t.sessionId&&(p._meta={sessionId:t.sessionId}),h.get(n,p,function(t){return t},e,t.timeout)}var r=t(8),s=t(13),a=t(40).chooseDriver,c=t(12),u=t(3);e.exports=o},{12:12,13:13,3:3,40:40,8:8}],7:[function(t,e,n){"use strict";function i(t){var e,n={billingAddress:t.billingAddress||{}};for(e in t)if(t.hasOwnProperty(e))switch(e.replace(/_/g,"").toLowerCase()){case"postalcode":case"countryname":case"countrycodenumeric":case"countrycodealpha2":case"countrycodealpha3":case"region":case"extendedaddress":case"locality":case"firstname":case"lastname":case"company":case"streetaddress":n.billingAddress[e]=t[e];break;default:n[e]=t[e]}return n}e.exports={normalizeCreditCardFields:i}},{}],8:[function(t,e,n){"use strict";function i(t){var e;if(!t)throw new Error("Braintree API Client Misconfigured: clientToken required.");if("object"==typeof t&&null!==t)e=t;else{try{t=window.atob(t)}catch(n){}try{e=JSON.parse(t)}catch(i){throw new Error("Braintree API Client Misconfigured: clientToken is not valid JSON.")}}if(!e.hasOwnProperty("clientApiUrl")||!o.isWhitelistedDomain(e.clientApiUrl))throw new Error("Braintree API Client Misconfigured: the clientApiUrl provided in the clientToken is invalid.");return e}var o=t(49);t(10),e.exports=i},{10:10,49:49}],9:[function(t,e,n){"use strict";function i(t){var e,n;for(e=0;e<o.length;e++)n=o[e],this[n]=t[n]}var o=["nonce","type","description","details"];e.exports=i},{}],10:[function(t,e,n){(function(t){"use strict";var n=function(t){var e=new RegExp("^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{4})([=]{1,2})?$"),n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",i="";if(!e.test(t))throw new Error("Non base64 encoded input passed to window.atob polyfill");var o=0;do{var r=n.indexOf(t.charAt(o++)),s=n.indexOf(t.charAt(o++)),a=n.indexOf(t.charAt(o++)),c=n.indexOf(t.charAt(o++)),u=(63&r)<<2|s>>4&3,l=(15&s)<<4|a>>2&15,h=(3&a)<<6|63&c;i+=String.fromCharCode(u)+(l?String.fromCharCode(l):"")+(h?String.fromCharCode(h):"")}while(o<t.length);return i};t.atob=t.atob||n,e.exports={atobPolyfill:n}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],11:[function(t,e,n){"use strict";function i(t){var e,n=0,i=["accountHolderName","bic","longFormURL","mandateReferenceNumber","maskedIBAN","shortForm"];for(n=0;n<i.length;n++)e=i[n],this[e]=t[e]}e.exports=i},{}],12:[function(t,e,n){"use strict";e.exports=function(t){return null!=t.enableCORS?t.enableCORS:t.merchantConfiguration?t.merchantConfiguration.enableCORS:!1}},{}],13:[function(t,e,n){"use strict";function i(t){var e,n,i=[];for(n=0;n<t.length;n++)e=t[n],"/"===e.charAt(e.length-1)&&(e=e.substring(0,e.length-1)),"/"===e.charAt(0)&&(e=e.substring(1)),i.push(e);return i.join("/")}function o(t){return t&&"object"==typeof t&&"number"==typeof t.length&&"[object Array]"===Object.prototype.toString.call(t)||!1}function r(t,e){var n,i={};for(n in t)t.hasOwnProperty(n)&&(i[n]=t[n]);for(n in e)e.hasOwnProperty(n)&&(i[n]=e[n]);return i}function s(t){return/^[a-zA-Z0-9]+_[a-zA-Z0-9]+_[a-zA-Z0-9_]+$/.test(t)}e.exports={joinUrlFragments:i,isArray:o,mergeOptions:r,isTokenizationKey:s}},{}],14:[function(t,e,n){"use strict";function i(t){return new o(t)}var o=t(1),r=t(13),s=t(8),a=t(6);e.exports={Client:o,configure:i,util:r,parseClientToken:s,_getConfiguration:a}},{1:1,13:13,6:6,8:8}],15:[function(t,e,n){"use strict";var i,o=Array.prototype.indexOf;i=o?function(t,e){return t.indexOf(e)}:function(t,e){for(var n=0,i=t.length;i>n;n++)if(t[n]===e)return n;return-1},e.exports={indexOf:i}},{}],16:[function(t,e,n){"use strict";function i(t){var e,n,i="";for(e=0;e<t.length;e++)i+="%",n=t[e].charCodeAt(0).toString(16).toUpperCase(),n.length<2&&(i+="0"),i+=n;return i}function o(t){return decodeURIComponent(i(atob(t)))}e.exports={decodeUtf8:o}},{}],17:[function(t,e,n){"use strict";function i(t,e){if(e=e||"["+t+"] is not a valid DOM Element",t&&t.nodeType&&1===t.nodeType)return t;if(t&&__webpack_provided_window_dot_jQuery&&(t instanceof jQuery||"jquery"in Object(t))&&0!==t.length)return t[0];if("string"==typeof t&&document.getElementById(t))return document.getElementById(t);throw new Error(e)}e.exports={normalizeElement:i}},{}],18:[function(t,e,n){"use strict";function i(t,e,n,i){t.addEventListener?t.addEventListener(e,n,i||!1):t.attachEvent&&t.attachEvent("on"+e,n)}function o(t,e,n,i){t.removeEventListener?t.removeEventListener(e,n,i||!1):t.detachEvent&&t.detachEvent("on"+e,n)}function r(t){t.preventDefault?t.preventDefault():t.returnValue=!1}e.exports={addEventListener:i,removeEventListener:o,preventDefault:r}},{}],19:[function(t,e,n){"use strict";function i(t){return"[object Function]"===r.call(t)}function o(t,e){return function(){return t.apply(e,arguments)}}var r=Object.prototype.toString;e.exports={bind:o,isFunction:i}},{}],20:[function(t,e,n){"use strict";function i(t){var e,n,i,o,r=[{min:0,max:180,chars:7},{min:181,max:620,chars:14},{min:621,max:960,chars:22}];for(o=r.length,t=t||window.innerWidth,n=0;o>n;n++)i=r[n],t>=i.min&&t<=i.max&&(e=i.chars);return e||60}function o(t,e){var n,i;return-1===t.indexOf("@")?t:(t=t.split("@"),n=t[0],i=t[1],n.length>e&&(n=n.slice(0,e)+"..."),i.length>e&&(i="..."+i.slice(-e)),n+"@"+i)}e.exports={truncateEmail:o,getMaxCharLength:i}},{}],21:[function(t,e,n){"use strict";function i(){return"https:"===window.location.protocol}function o(t){switch(t){case null:case void 0:return"";case!0:return"1";case!1:return"0";default:return encodeURIComponent(t)}}function r(t,e){var n,i,s=[];for(i in t)if(t.hasOwnProperty(i)){var a=t[i];n=e?e+"["+i+"]":i,"object"==typeof a?s.push(r(a,n)):void 0!==a&&null!==a&&s.push(o(n)+"="+o(a))}return s.join("&")}function s(t){for(var e={},n=t.split("&"),i=0;i<n.length;i++){var o=n[i].split("="),r=o[0],s=decodeURIComponent(o[1]);e[r]=s}return e}function a(t){var e=t.split("?");return 2!==e.length?{}:s(e[1])}function c(t){if(t=t.toLowerCase(),!/^http/.test(t))return!1;l.href=t;var e=l.hostname.split("."),n=e.slice(-2).join(".");return-1===u.indexOf(h,n)?!1:!0}var u=t(15),l=document.createElement("a"),h=["paypal.com","braintreepayments.com","braintreegateway.com","localhost"];e.exports={isBrowserHttps:i,makeQueryString:r,decodeQueryString:s,getParams:a,isWhitelistedDomain:c}},{15:15}],22:[function(t,e,n){"use strict";function i(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){var e=16*Math.random()|0,n="x"===t?e:3&e|8;return n.toString(16)})}e.exports=i},{}],23:[function(t,e,n){var i=t(17),o=t(21),r=t(19),s=t(18),a=t(20),c=t(15),u=t(16),l=t(22);e.exports={string:a,array:c,normalizeElement:i.normalizeElement,isBrowserHttps:o.isBrowserHttps,makeQueryString:o.makeQueryString,decodeQueryString:o.decodeQueryString,getParams:o.getParams,isWhitelistedDomain:o.isWhitelistedDomain,removeEventListener:s.removeEventListener,addEventListener:s.addEventListener,preventDefault:s.preventDefault,bind:r.bind,isFunction:r.isFunction,base64ToUtf8:u.decodeUtf8,uuid:l}},{15:15,16:16,17:17,18:18,19:19,20:20,21:21,22:22}],24:[function(t,e,n){"use strict";function i(t,e){var n=window.getComputedStyle?getComputedStyle(t):t.currentStyle;return n[e]}function o(){return{html:{height:s.style.height||"",overflow:i(s,"overflow"),position:i(s,"position")},body:{height:a.style.height||"",overflow:i(a,"overflow")}}}function r(t,e){this.assetsUrl=t,this.container=e||document.body,this.iframe=null,s=document.documentElement,a=document.body,this.merchantPageDefaultStyles=o()}var s,a,c=t(23),u=t(146),l=t(31),h="1.3.3";r.prototype.get=function(t,e){var n=this,i=this.constructAuthorizationURL(t);this.container&&u(this.container)?this.container(i+"&no_style=1"):this.insertIframe(i),new l(function(t){u(n.container)||n.removeIframe(),e(t)})},r.prototype.removeIframe=function(){this.container&&this.container.nodeType&&1===this.container.nodeType?this.container.removeChild(this.iframe):this.container&&__webpack_provided_window_dot_jQuery&&this.container instanceof jQuery?$(this.iframe,this.container).remove():"string"==typeof this.container&&document.getElementById(this.container).removeChild(this.iframe),this.unlockMerchantWindowSize()},r.prototype.insertIframe=function(t){var e=document.createElement("iframe");if(e.src=t,this.applyStyles(e),this.lockMerchantWindowSize(),this.container&&this.container.nodeType&&1===this.container.nodeType)this.container.appendChild(e);else if(this.container&&__webpack_provided_window_dot_jQuery&&this.container instanceof jQuery&&0!==this.container.length)this.container.append(e);else{if("string"!=typeof this.container||!document.getElementById(this.container))throw new Error("Unable to find valid container for iframe.");document.getElementById(this.container).appendChild(e)}this.iframe=e},r.prototype.applyStyles=function(t){t.style.position="fixed",t.style.top="0",t.style.left="0",t.style.height="100%",t.style.width="100%",t.setAttribute("frameborder","0"),t.setAttribute("allowTransparency","true"),t.style.border="0",t.style.zIndex="99999"},r.prototype.lockMerchantWindowSize=function(){s.style.overflow="hidden",a.style.overflow="hidden",a.style.height="100%"},r.prototype.unlockMerchantWindowSize=function(){var t=this.merchantPageDefaultStyles;a.style.height=t.body.height,a.style.overflow=t.body.overflow,s.style.overflow=t.html.overflow},r.prototype.constructAuthorizationURL=function(t){var e,n=window.location.href;return n.indexOf("#")>-1&&(n=n.split("#")[0]),e=c.makeQueryString({acsUrl:t.acsUrl,pareq:t.pareq,termUrl:t.termUrl+"&three_d_secure_version="+h,md:t.md,parentUrl:n}),this.assetsUrl+"/3ds/"+h+"/html/style_frame?"+e},e.exports=r},{146:146,23:23,31:31}],25:[function(t,e,n){"use strict";function i(){}function o(t,e){e=e||{},this.clientToken=e.clientToken,this.container=e.container,this.api=t,this.nonce=null,this._loader=null,this._boundHandleUserClose=s(this._handleUserClose,this)}var r=t(23),s=t(87),a=t(146),c=t(24),u=t(27);o.prototype.verify=function(t,e){if(!a(e))throw this.api.sendAnalyticsEvents("3ds.web.no_callback"),new Error("No suitable callback argument was given");a(t.onUserClose)&&(this._onUserClose=t.onUserClose),a(t.onLookupComplete)&&(this._onLookupComplete=t.onLookupComplete),(void 0===t.useDefaultLoader||t.useDefaultLoader===!0)&&this._createDefaultLoader();var n={nonce:"",amount:t.amount},i=t.creditCard;if("string"==typeof i)n.nonce=i,this.api.sendAnalyticsEvents("3ds.web.verify.nonce"),this.startVerification(n,e);else{var o=this,r=function(t,i){return t?(o._removeDefaultLoader(),e(t)):(n.nonce=i,void o.startVerification(n,e))};this.api.sendAnalyticsEvents("3ds.web.verify.credit_card"),this.api.tokenizeCard(i,r)}},o.prototype.startVerification=function(t,e){this.api.lookup3DS(t,s(this.handleLookupResponse(e),this))},o.prototype.handleLookupResponse=function(t){var e=this;return function(n,i){var o;this._onLookupComplete(),n?t(n.error):i.lookup&&i.lookup.acsUrl&&i.lookup.acsUrl.length>0?(e.nonce=i.paymentMethod.nonce,o=new c(this.clientToken.assetsUrl,this.container),o.get(i.lookup,s(this.handleAuthenticationResponse(t),this)),this._detachListeners(),this._attachListeners()):(e.nonce=i.paymentMethod.nonce,t(null,{nonce:e.nonce,verificationDetails:i.threeDSecureInfo}))}},o.prototype.handleAuthenticationResponse=function(t){return function(e){var n,i=r.decodeQueryString(e);i.user_closed||(n=JSON.parse(i.auth_response),n.success?t(null,{nonce:n.paymentMethod.nonce,verificationDetails:n.threeDSecureInfo}):n.threeDSecureInfo&&n.threeDSecureInfo.liabilityShiftPossible?t(null,{nonce:this.nonce,verificationDetails:n.threeDSecureInfo}):t(n.error))}},o.prototype._attachListeners=function(){r.addEventListener(window,"message",this._boundHandleUserClose)},o.prototype._detachListeners=function(){r.removeEventListener(window,"message",this._boundHandleUserClose)},o.prototype._createDefaultLoader=function(){this._loader=new u,document.body.appendChild(this._loader.getElement())},o.prototype._removeDefaultLoader=function(){if(this._loader){var t=this._loader.getElement(),e=t.parentNode;e&&e.removeChild(t),this._loader.dispose(),this._loader=null}},o.prototype._handleUserClose=function(t){"user_closed=true"===t.data&&this._onUserClose()},o.prototype._onUserClose=i,o.prototype._onLookupComplete=function(){this._removeDefaultLoader()},e.exports=o},{146:146,23:23,24:24,27:27,87:87}],26:[function(t,e,n){"use strict";var i=t(25);e.exports={create:function(t,e){var n=new i(t,e);return n}}},{25:25}],27:[function(t,e,n){"use strict";function i(){this._element=document.createElement("div"),this._element.style.cssText=this._cssDeclarations,this._display=null,this._initialize()}var o=t(28),r=t(29),s=t(30);i.prototype._cssDeclarations=["filter:progid:DXImageTransform.Microsoft.Gradient(StartColorStr=#7F000000, EndColorStr=#7F000000)","background-color: rgba(0, 0, 0, 0.5)","display: table","height: 100%","left: 0","position: fixed","right: 0","top: 0","width: 100%","z-index: 99999"].join(";"),i.prototype.getElement=function(){return this._element},i.prototype.dispose=function(){this._display.dispose(),this._display=null,this._element=null},i.prototype._initialize=function(){var t=new s,e=window.SVGElement&&window.SVGAnimateElement&&window.SVGAnimateTransformElement;e||(t=new r("Loading...")),this._display=new o(t),this.getElement().appendChild(this._display.getElement())},e.exports=i},{28:28,29:29,30:30}],28:[function(t,e,n){"use strict";function i(t){this._element=document.createElement("div"),this._element.style.cssText=this._cssDeclarations,this._displayObject=t,this._initialize()}i.prototype._cssDeclarations=["display: table-cell","vertical-align: middle"].join(";"),i.prototype.getElement=function(){return this._element},i.prototype.dispose=function(){this._displayObject.dispose(),this._displayObject=null,this._element=null},i.prototype._initialize=function(){this.getElement().appendChild(this._displayObject.getElement())},e.exports=i},{}],29:[function(t,e,n){"use strict";function i(t){this._element=document.createElement("div"),this._element.style.cssText=this._cssDeclarations,this._element.innerHTML=t}i.prototype._cssDeclarations=["color: #fff","font-family: Helvetica, sans-serif","font-size: 12px","text-align: center"].join(";"),i.prototype.getElement=function(){return this._element},i.prototype.dispose=function(){this._element=null},e.exports=i},{}],30:[function(t,e,n){"use strict";function i(){this._element=document.createElement("div"),this._element.style.cssText=this._cssDeclarations,this._element.innerHTML=this._markup}i.prototype._cssDeclarations=["height: 36px","margin-left: auto","margin-right: auto","width: 36px"].join(";"),i.prototype._markup=['<svg version="1.1" id="loader-1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"','width="100%" height="100%" viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve">','  <path fill="#FFF" d="M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z">','    <animateTransform attributeType="xml"','    attributeName="transform"','    type="rotate"','    from="0 25 25"','    to="360 25 25"','    dur="780ms"','    repeatCount="indefinite"','    calcMode="spline"','    keySplines="0.44, 0.22, 0, 1"','    keyTimes="0;1"/>',"  </path>","</svg>"].join(""),i.prototype.getElement=function(){return this._element},i.prototype.dispose=function(){this._element=null},e.exports=i},{}],31:[function(t,e,n){"use strict";function i(t){this.postMessageReceiver(t),this.hashChangeReceiver(t)}var o=t(23);i.prototype.postMessageReceiver=function(t){var e=this;this.wrappedCallback=function(n){var i=n.data;(/^(auth_response=)/.test(i)||"user_closed=true"===i)&&(t(i),e.stopListening())},o.addEventListener(window,"message",this.wrappedCallback)},i.prototype.hashChangeReceiver=function(t){var e,n=window.location.hash,i=this;this.poll=setInterval(function(){e=window.location.hash,e.length>0&&e!==n&&(i.stopListening(),e=e.substring(1,e.length),t(e),window.location.hash=n.length>0?n:"")},10)},i.prototype.stopListening=function(){clearTimeout(this.poll),o.removeEventListener(window,"message",this.wrappedCallback)},e.exports=i},{23:23}],32:[function(t,e,n){(function(n){"use strict";function i(){return h?new XMLHttpRequest:new XDomainRequest}function o(t,e,n,i,o){var r=a.createURLParams(t,e);s("GET",r,null,n,i,o)}function r(t,e,n,i,o){s("POST",t,e,n,i,o)}function s(t,e,n,o,r,s){var a,p,d=i();r=r||function(){},h?d.onreadystatechange=function(){4===d.readyState&&(a=d.status,p=u(d.responseText),a>=400||0===a?r.call(null,p||{errors:l.errors.UNKNOWN_ERROR},null):a>0&&r.call(null,null,o(p)))}:(d.onload=function(){r.call(null,null,o(u(d.responseText)))},d.onerror=function(){r.call(null,d.responseText,null)},d.onprogress=function(){},d.ontimeout=function(){r.call(null,{errors:l.errors.UNKNOWN_ERROR},null)}),d.open(t,e,!0),d.timeout=null==s?6e4:s,h&&"POST"===t&&d.setRequestHeader("Content-Type","application/json"),setTimeout(function(){d.send(c(t,n))},0)}var a=t(39),c=t(38),u=t(37),l=t(34),h=n.XMLHttpRequest&&"withCredentials"in new n.XMLHttpRequest;e.exports={get:o,post:r}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{34:34,37:37,38:38,39:39}],33:[function(t,e,n){"use strict";function i(t){var e=s.getUserAgent(),n=!(s.isHTTP()&&/(MSIE\s(8|9))|(Phantom)/.test(e));return t=t||{},t.enableCORS&&n?r:o}var o=t(35),r=t(32),s=t(39);e.exports=i},{32:32,35:35,39:39}],34:[function(t,e,n){e.exports={errors:{UNKNOWN_ERROR:"Unknown error",INVALID_TIMEOUT:"Timeout must be a number"}}},{}],35:[function(t,e,n){"use strict";function i(t,e){return t.status>=400?[t,null]:[null,e(t)]}function o(){}function r(t,e,n,r,s,a){var c;s=s||o,null==a&&(a=6e4),c=r(t,e,function(t,e,o){l[o]&&(clearTimeout(l[o]),t?s.call(null,t):s.apply(null,i(e,function(t){return n(t)})))}),"number"==typeof a?l[c]=setTimeout(function(){l[c]=null,s.apply(null,[{errors:u.errors.UNKNOWN_ERROR},null])},a):s.apply(null,[{errors:u.errors.INVALID_TIMEOUT},null])}function s(t,e,n,i,o){e._method="POST",r(t,e,n,c.get,i,o)}function a(t,e,n,i,o){r(t,e,n,c.get,i,o)}var c=t(36),u=t(34),l=[];e.exports={get:a,post:s}},{34:34,36:36}],36:[function(t,e,n){(function(n){"use strict";function i(t,e){var n=document.createElement("script"),i=!1;n.src=t,n.async=!0;var o=e||u.error;"function"==typeof o&&(n.onerror=function(e){o({url:t,event:e})}),n.onload=n.onreadystatechange=function(){i||this.readyState&&"loaded"!==this.readyState&&"complete"!==this.readyState||(i=!0,n.onload=n.onreadystatechange=null,n&&n.parentNode&&n.parentNode.removeChild(n))},s||(s=document.getElementsByTagName("head")[0]),s.appendChild(n)}function o(t,e,n,o){var r,s;return o=o||u.callbackName||"callback",s=o+"_json"+a.generateUUID(),e[o]=s,r=a.createURLParams(t,e),c[s]=function(t){n(null,t,s);try{delete c[s]}catch(e){}c[s]=null},i(r,function(t){n(t,null,s)}),s}function r(t){u=t}var s,a=t(39),c=n,u={};e.exports={get:o,init:r}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{39:39}],37:[function(t,e,n){"use strict";e.exports=function(t){try{t=JSON.parse(t)}catch(e){}return t}},{}],38:[function(t,e,n){"use strict";e.exports=function(t,e){if("string"!=typeof t)throw new Error("Method must be a string");return"get"!==t.toLowerCase()&&null!=e&&(e="string"==typeof e?e:JSON.stringify(e)),e}},{}],39:[function(t,e,n){(function(t){"use strict";function n(t){var e;for(e in t)if(t.hasOwnProperty(e))return!0;return!1}function i(t){return t&&"object"==typeof t&&"number"==typeof t.length&&"[object Array]"===Object.prototype.toString.call(t)||!1}function o(t,e){var n,r,s,a=[];for(s in t)t.hasOwnProperty(s)&&(r=t[s],n=e?i(t)?e+"[]":e+"["+s+"]":s,a.push("object"==typeof r?o(r,n):encodeURIComponent(n)+"="+encodeURIComponent(r)));return a.join("&")}function r(){return"xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g,function(t){var e=Math.floor(16*Math.random()),n="x"===t?e:3&e|8;return n.toString(16)})}function s(t,e){return t=t||"",null!=e&&"object"==typeof e&&n(e)&&(t+=-1===t.indexOf("?")?"?":"",t+=-1!==t.indexOf("=")?"&":"",t+=o(e)),t}function a(){return t.navigator.userAgent}function c(){return"http:"===t.location.protocol}e.exports={isArray:i,generateUUID:r,stringify:o,createURLParams:s,getUserAgent:a,isHTTP:c}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],40:[function(t,e,n){"use strict";var i=t(32),o=t(35),r=t(33),s=t(39);e.exports={AJAXDriver:i,JSONPDriver:o,chooseDriver:r,util:s}},{32:32,33:33,35:35,39:39}],41:[function(t,e,n){arguments[4][15][0].apply(n,arguments)},{15:15}],42:[function(t,e,n){arguments[4][16][0].apply(n,arguments)},{16:16}],43:[function(t,e,n){arguments[4][17][0].apply(n,arguments)},{17:17}],44:[function(t,e,n){arguments[4][18][0].apply(n,arguments)},{18:18}],45:[function(t,e,n){arguments[4][19][0].apply(n,arguments)},{19:19}],46:[function(t,e,n){arguments[4][20][0].apply(n,arguments)},{20:20}],47:[function(t,e,n){arguments[4][21][0].apply(n,arguments)},{21:21,41:41}],48:[function(t,e,n){arguments[4][22][0].apply(n,arguments)},{22:22}],49:[function(t,e,n){arguments[4][23][0].apply(n,arguments)},{23:23,41:41,42:42,43:43,44:44,45:45,46:46,47:47,48:48}],50:[function(t,e,n){"use strict";function i(t,e){this.host=t||window,this.channel=e||null,this.handlers=[],o.addEventListener(this.host,"message",o.bind(this.receive,this));
	
	}var o=t(64);i.prototype.receive=function(t){var e,n,o,r;try{o=JSON.parse(t.data)}catch(s){return}for(r=o.type,n=new i.Message(this,t.source,o.data),e=0;e<this.handlers.length;e++)this.handlers[e].type===r&&this.handlers[e].handler(n)},i.prototype.send=function(t,e,n){try{t.postMessage(JSON.stringify({type:this._namespaceEvent(e),data:n}),"*")}catch(i){}},i.prototype.register=function(t,e){this.handlers.push({type:this._namespaceEvent(t),handler:e})},i.prototype.unregister=function(t,e){for(var n=this.handlers.length-1;n>=0;n--)if(this.handlers[n].type===t&&this.handlers[n].handler===e)return this.handlers.splice(n,1)},i.prototype._namespaceEvent=function(t){return this.channel?["braintree",this.channel,t].join(":"):t},i.Message=function(t,e,n){this.bus=t,this.source=e,this.content=n},i.Message.prototype.reply=function(t,e){this.bus.send(this.source,t,e)},e.exports=i},{64:64}],51:[function(t,e,n){"use strict";function i(t,e){this.bus=t,this.target=e,this.handlers=[],this.bus.register("publish",o.bind(this._handleMessage,this))}var o=t(64);i.prototype._handleMessage=function(t){var e,n=t.content,i=this.handlers[n.channel];if("undefined"!=typeof i)for(e=0;e<i.length;e++)i[e](n.data)},i.prototype.publish=function(t,e){this.bus.send(this.target,"publish",{channel:t,data:e})},i.prototype.subscribe=function(t,e){this.handlers[t]=this.handlers[t]||[],this.handlers[t].push(e)},i.prototype.unsubscribe=function(t,e){var n,i=this.handlers[t];if("undefined"!=typeof i)for(n=0;n<i.length;n++)i[n]===e&&i.splice(n,1)},e.exports=i},{64:64}],52:[function(t,e,n){"use strict";function i(t){this.bus=t,this.frames=[],this.handlers=[]}i.prototype.subscribe=function(t,e){this.handlers[t]=this.handlers[t]||[],this.handlers[t].push(e)},i.prototype.registerFrame=function(t){this.frames.push(t)},i.prototype.unregisterFrame=function(t){for(var e=0;e<this.frames.length;e++)this.frames[e]===t&&this.frames.splice(e,1)},i.prototype.publish=function(t,e){var n,i=this.handlers[t];if("undefined"!=typeof i)for(n=0;n<i.length;n++)i[n](e);for(n=0;n<this.frames.length;n++)this.bus.send(this.frames[n],"publish",{channel:t,data:e})},i.prototype.unsubscribe=function(t,e){var n,i=this.handlers[t];if("undefined"!=typeof i)for(n=0;n<i.length;n++)i[n]===e&&i.splice(n,1)},e.exports=i},{}],53:[function(t,e,n){"use strict";function i(t,e){this.bus=t,this.target=e||window.parent,this.counter=0,this.callbacks={},this.bus.register("rpc_response",o.bind(this._handleResponse,this))}var o=t(64);i.prototype._handleResponse=function(t){var e=t.content,n=this.callbacks[e.id];"function"==typeof n&&(n.apply(null,e.response),delete this.callbacks[e.id])},i.prototype.invoke=function(t,e,n){var i=this.counter++;this.callbacks[i]=n,this.bus.send(this.target,"rpc_request",{id:i,method:t,args:e})},e.exports=i},{64:64}],54:[function(t,e,n){"use strict";function i(t){this.bus=t,this.methods={},this.bus.register("rpc_request",o.bind(this._handleRequest,this))}var o=t(64);i.prototype._handleRequest=function(t){var e,n=t.content,i=n.args||[],o=this.methods[n.method];"function"==typeof o&&(e=function(){t.reply("rpc_response",{id:n.id,response:Array.prototype.slice.call(arguments)})},i.push(e),o.apply(null,i))},i.prototype.reset=function(){this.methods={}},i.prototype.define=function(t,e){this.methods[t]=e},e.exports=i},{64:64}],55:[function(t,e,n){var i=t(50),o=t(51),r=t(52),s=t(53),a=t(54);e.exports={MessageBus:i,PubsubClient:o,PubsubServer:r,RPCClient:s,RPCServer:a}},{50:50,51:51,52:52,53:53,54:54}],56:[function(t,e,n){arguments[4][15][0].apply(n,arguments)},{15:15}],57:[function(t,e,n){arguments[4][16][0].apply(n,arguments)},{16:16}],58:[function(t,e,n){arguments[4][17][0].apply(n,arguments)},{17:17}],59:[function(t,e,n){arguments[4][18][0].apply(n,arguments)},{18:18}],60:[function(t,e,n){arguments[4][19][0].apply(n,arguments)},{19:19}],61:[function(t,e,n){arguments[4][20][0].apply(n,arguments)},{20:20}],62:[function(t,e,n){arguments[4][21][0].apply(n,arguments)},{21:21,56:56}],63:[function(t,e,n){arguments[4][22][0].apply(n,arguments)},{22:22}],64:[function(t,e,n){arguments[4][23][0].apply(n,arguments)},{23:23,56:56,57:57,58:58,59:59,60:60,61:61,62:62,63:63}],65:[function(t,e,n){arguments[4][15][0].apply(n,arguments)},{15:15}],66:[function(t,e,n){arguments[4][16][0].apply(n,arguments)},{16:16}],67:[function(t,e,n){arguments[4][17][0].apply(n,arguments)},{17:17}],68:[function(t,e,n){arguments[4][18][0].apply(n,arguments)},{18:18}],69:[function(t,e,n){arguments[4][19][0].apply(n,arguments)},{19:19}],70:[function(t,e,n){arguments[4][20][0].apply(n,arguments)},{20:20}],71:[function(t,e,n){arguments[4][21][0].apply(n,arguments)},{21:21,65:65}],72:[function(t,e,n){arguments[4][22][0].apply(n,arguments)},{22:22}],73:[function(t,e,n){arguments[4][23][0].apply(n,arguments)},{23:23,65:65,66:66,67:67,68:68,69:69,70:70,71:71,72:72}],74:[function(t,e,n){"use strict";function i(t){if(!(this instanceof i))return new i(t);var e,n=r(t.className).split(/\s+/);for(this._elem=t,this.length=0,e=0;e<n.length;e+=1)n[e]&&s.push.call(this,n[e])}e.exports=i;var o=t(75),r=t(76),s=Array.prototype;i.prototype.add=function(){var t,e;for(e=0;e<arguments.length;e+=1)t=""+arguments[e],o(this,t)>=0||s.push.call(this,t);return this._elem.className=this.toString(),this},i.prototype.remove=function(){var t,e,n;for(n=0;n<arguments.length;n+=1)e=""+arguments[n],t=o(this,e),0>t||s.splice.call(this,t,1);return this._elem.className=this.toString(),this},i.prototype.contains=function(t){return t+="",o(this,t)>=0},i.prototype.toggle=function(t,e){return t+="",e===!0?this.add(t):e===!1?this.remove(t):this[this.contains(t)?"remove":"add"](t)},i.prototype.toString=function(){return s.join.call(this," ")}},{75:75,76:76}],75:[function(t,e,n){e.exports=function(t,e){if(t.indexOf)return t.indexOf(e);for(var n=0;n<t.length;++n)if(t[n]===e)return n;return-1}},{}],76:[function(t,e,n){function i(t){return t.replace(/^\s*|\s*$/g,"")}n=e.exports=i,n.left=function(t){return t.replace(/^\s*/,"")},n.right=function(t){return t.replace(/\s*$/,"")}},{}],77:[function(t,e,n){"use strict";function i(){this._teardownRegistry=[]}var o=t(78),r=t(79);i.prototype.registerFunctionForTeardown=function(t){r.isFunction(t)&&this._teardownRegistry.push(t)},i.prototype.teardown=function(t){o(this._teardownRegistry,r.bind(function(e){this._teardownRegistry=[],r.isFunction(t)&&t(e)},this))},e.exports=i},{78:78,79:79}],78:[function(t,e,n){"use strict";function i(t,e){var n,i=0===t.length;i?(t(),e(null)):(n=o(e),t(n))}function o(t){var e=!1;return function(){e||(e=!0,t.apply(this,arguments))}}e.exports=function(t,e){var n=t.length,o=n;if(0===n)return void e(null);for(var r=0;n>r;r++)i(t[r],function(t){return t?void e(t):(o-=1,void(0===o&&e(null)))})}},{}],79:[function(t,e,n){arguments[4][19][0].apply(n,arguments)},{19:19}],80:[function(t,e,n){(function(t){"use strict";function n(t){if(("string"==typeof t||t instanceof String)&&(t=document.getElementById(t)),!(t instanceof HTMLFormElement))throw new TypeError("FormNapper requires an HTMLFormElement element or the id string of one.");this.htmlForm=t}n.prototype.hijack=function(e){this.submitHandler||(this.submitHandler=function(t){t.preventDefault?t.preventDefault():t.returnValue=!1,e(t)},null!=t.addEventListener?this.htmlForm.addEventListener("submit",this.submitHandler,!1):null!=t.attachEvent?this.htmlForm.attachEvent("onsubmit",this.submitHandler):this.htmlForm.onsubmit=this.submitHandler)},n.prototype.inject=function(t,e){var n=this.htmlForm.querySelector('input[name="'+t+'"]');return null==n&&(n=document.createElement("input"),n.type="hidden",n.name=t,this.htmlForm.appendChild(n)),n.value=e,n},n.prototype.submit=function(){HTMLFormElement.prototype.submit.call(this.htmlForm)},n.prototype.detach=function(){this.submitHandler&&(null!=t.removeEventListener?this.htmlForm.removeEventListener("submit",this.submitHandler,!1):null!=t.detachEvent?this.htmlForm.detachEvent("onsubmit",this.submitHandler):this.htmlForm.onsubmit=null,delete this.submitHandler)},e.exports=n}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],81:[function(e,n,i){"use strict";!function(e,o){"object"==typeof i&&"undefined"!=typeof n?n.exports=o():"function"==typeof t&&t.amd?t([],o):e.framebus=o()}(this,function(){function t(t){return null==t?!1:null==t.Window?!1:t.constructor!==t.Window?!1:(b.push(t),!0)}function e(t){var e,n={};for(e in _)_.hasOwnProperty(e)&&(n[e]=_[e]);return n._origin=t||"*",n}function n(t){var e,n,i=r(this);return s(t)?!1:s(i)?!1:(n=Array.prototype.slice.call(arguments,1),e=a(t,n,i),e===!1?!1:(f(v.top,e,i),!0))}function i(t,e){var n=r(this);return g(t,e,n)?!1:(E[n]=E[n]||{},E[n][t]=E[n][t]||[],E[n][t].push(e),!0)}function o(t,e){var n,i,o=r(this);if(g(t,e,o))return!1;if(i=E[o]&&E[o][t],!i)return!1;for(n=0;n<i.length;n++)if(i[n]===e)return i.splice(n,1),!0;return!1}function r(t){return t&&t._origin||"*"}function s(t){return"string"!=typeof t}function a(t,e,n){var i=!1,o={event:t,origin:n},r=e[e.length-1];"function"==typeof r&&(o.reply=y(r,n),e=e.slice(0,-1)),o.args=e;try{i=w+JSON.stringify(o)}catch(s){throw new Error("Could not stringify event: "+s.message)}return i}function c(t){var e,n,i,o;if(t.data.slice(0,w.length)!==w)return!1;try{e=JSON.parse(t.data.slice(w.length))}catch(r){return!1}return null!=e.reply&&(n=t.origin,i=t.source,o=e.reply,e.reply=function(t){var e=a(o,[t],n);return e===!1?!1:void i.postMessage(e,n)},e.args.push(e.reply)),e}function u(t){v||(v=t||window,v.addEventListener?v.addEventListener("message",h,!1):v.attachEvent?v.attachEvent("onmessage",h):null===v.onmessage?v.onmessage=h:v=null)}function l(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){var e=16*Math.random()|0,n="x"===t?e:3&e|8;return n.toString(16)})}function h(t){var e;s(t.data)||(e=c(t),e&&(p("*",e.event,e.args,t),p(t.origin,e.event,e.args,t),m(t.data,e.origin,t.source)))}function p(t,e,n,i){var o;if(E[t]&&E[t][e])for(o=0;o<E[t][e].length;o++)E[t][e][o].apply(i,n)}function d(t){return t.top!==t?!1:null==t.opener?!1:t.opener===t?!1:t.opener.closed===!0?!1:!0}function f(t,e,n){var i;try{for(t.postMessage(e,n),d(t)&&f(t.opener.top,e,n),i=0;i<t.frames.length;i++)f(t.frames[i],e,n)}catch(o){}}function m(t,e,n){var i,o;for(i=b.length-1;i>=0;i--)o=b[i],o.closed===!0?b=b.slice(i,1):n!==o&&f(o.top,t,e)}function y(t,e){function n(o,r){t(o,r),_.target(e).unsubscribe(i,n)}var i=l();return _.target(e).subscribe(i,n),i}function g(t,e,n){return s(t)?!0:"function"!=typeof e?!0:s(n)?!0:!1}var v,_,b=[],E={},w="/*framebus*/";return u(),_={target:e,include:t,publish:n,pub:n,trigger:n,emit:n,subscribe:i,sub:i,on:i,unsubscribe:o,unsub:o,off:o}})},{}],82:[function(t,e,n){"use strict";var i=t(150),o=t(149),r=t(84),s=t(83);e.exports=function(t){var e=document.createElement("iframe"),n=i({},s,t);return n.style&&!o(n.style)&&(i(e.style,n.style),delete n.style),r(e,n),e.getAttribute("id")||(e.id=e.name),e}},{149:149,150:150,83:83,84:84}],83:[function(t,e,n){e.exports={src:"about:blank",frameBorder:0,allowtransparency:!0,scrolling:"no"}},{}],84:[function(t,e,n){e.exports=function(t,e){var n;for(var i in e)e.hasOwnProperty(i)&&(n=e[i],null==n?t.removeAttribute(i):t.setAttribute(i,n))}},{}],85:[function(t,e,n){function i(t){if(c(t)&&!a(t)&&!(t instanceof o)){if(t instanceof r)return t;if(h.call(t,"__chain__")&&h.call(t,"__wrapped__"))return u(t)}return new r(t)}var o=t(92),r=t(93),s=t(107),a=t(145),c=t(133),u=t(142),l=Object.prototype,h=l.hasOwnProperty;i.prototype=s.prototype,e.exports=i},{107:107,133:133,142:142,145:145,92:92,93:93}],86:[function(t,e,n){var i=t(124),o=i(Date,"now"),r=o||function(){return(new Date).getTime()};e.exports=r},{124:124}],87:[function(t,e,n){var i=t(120),o=t(138),r=t(91),s=1,a=32,c=r(function(t,e,n){var r=s;if(n.length){var u=o(n,c.placeholder);r|=a}return i(t,r,e,n,u)});c.placeholder={},e.exports=c},{120:120,138:138,91:91}],88:[function(t,e,n){var i=t(103),o=t(120),r=t(152),s=t(91),a=1,c=s(function(t,e){e=e.length?i(e):r(t);for(var n=-1,s=e.length;++n<s;){var c=e[n];t[c]=o(t[c],a,t)}return t});e.exports=c},{103:103,120:120,152:152,91:91}],89:[function(t,e,n){function i(t,e,n){function i(){g&&clearTimeout(g),d&&clearTimeout(d),_=0,d=g=v=void 0}function c(e,n){n&&clearTimeout(n),d=g=v=void 0,e&&(_=r(),f=t.apply(y,p),g||d||(p=y=void 0))}function u(){var t=e-(r()-m);0>=t||t>e?c(v,d):g=setTimeout(u,t)}function l(){c(E,g)}function h(){if(p=arguments,m=r(),y=this,v=E&&(g||!w),b===!1)var n=w&&!g;else{d||w||(_=m);var i=b-(m-_),o=0>=i||i>b;o?(d&&(d=clearTimeout(d)),_=m,f=t.apply(y,p)):d||(d=setTimeout(l,i))}return o&&g?g=clearTimeout(g):g||e===b||(g=setTimeout(u,e)),n&&(o=!0,f=t.apply(y,p)),!o||g||d||(p=y=void 0),f}var p,d,f,m,y,g,v,_=0,b=!1,E=!0;if("function"!=typeof t)throw new TypeError(s);if(e=0>e?0:+e||0,n===!0){var w=!0;E=!1}else o(n)&&(w=!!n.leading,b="maxWait"in n&&a(+n.maxWait||0,e),E="trailing"in n?!!n.trailing:E);return h.cancel=i,h}var o=t(148),r=t(86),s="Expected a function",a=Math.max;e.exports=i},{148:148,86:86}],90:[function(t,e,n){var i=t(102),o=t(91),r=o(function(t,e){return i(t,1,e)});e.exports=r},{102:102,91:91}],91:[function(t,e,n){function i(t,e){if("function"!=typeof t)throw new TypeError(o);return e=r(void 0===e?t.length-1:+e||0,0),function(){for(var n=arguments,i=-1,o=r(n.length-e,0),s=Array(o);++i<o;)s[i]=n[e+i];switch(e){case 0:return t.call(this,s);case 1:return t.call(this,n[0],s);case 2:return t.call(this,n[0],n[1],s)}var a=Array(e+1);for(i=-1;++i<e;)a[i]=n[i];return a[e]=s,t.apply(this,a)}}var o="Expected a function",r=Math.max;e.exports=i},{}],92:[function(t,e,n){function i(t){this.__wrapped__=t,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=s,this.__views__=[]}var o=t(101),r=t(107),s=Number.POSITIVE_INFINITY;i.prototype=o(r.prototype),i.prototype.constructor=i,e.exports=i},{101:101,107:107}],93:[function(t,e,n){function i(t,e,n){this.__wrapped__=t,this.__actions__=n||[],this.__chain__=!!e}var o=t(101),r=t(107);i.prototype=o(r.prototype),i.prototype.constructor=i,e.exports=i},{101:101,107:107}],94:[function(t,e,n){function i(t,e){var n=-1,i=t.length;for(e||(e=Array(i));++n<i;)e[n]=t[n];return e}e.exports=i},{}],95:[function(t,e,n){function i(t,e){for(var n=-1,i=t.length;++n<i&&e(t[n],n,t)!==!1;);return t}e.exports=i},{}],96:[function(t,e,n){function i(t,e){for(var n=-1,i=e.length,o=t.length;++n<i;)t[o+n]=e[n];return t}e.exports=i},{}],97:[function(t,e,n){function i(t,e,n){for(var i=-1,r=o(e),s=r.length;++i<s;){var a=r[i],c=t[a],u=n(c,e[a],a,t,e);(u===u?u===c:c!==c)&&(void 0!==c||a in t)||(t[a]=u)}return t}var o=t(153);e.exports=i},{153:153}],98:[function(t,e,n){function i(t,e){return null==e?t:o(e,r(e),t)}var o=t(100),r=t(153);e.exports=i},{100:100,153:153}],99:[function(t,e,n){function i(t,e,n,f,m,y,g){var _;if(n&&(_=m?n(t,f,m):n(t)),void 0!==_)return _;if(!p(t))return t;var b=h(t);if(b){if(_=c(t),!e)return o(t,_)}else{var w=k.call(t),A=w==v;if(w!=E&&w!=d&&(!A||m))return F[w]?u(t,w,e):m?t:{};if(_=l(A?{}:t),!e)return s(_,t)}y||(y=[]),g||(g=[]);for(var C=y.length;C--;)if(y[C]==t)return g[C];return y.push(t),g.push(_),(b?r:a)(t,function(o,r){_[r]=i(o,e,n,r,t,y,g)}),_}var o=t(94),r=t(95),s=t(98),a=t(105),c=t(125),u=t(126),l=t(127),h=t(145),p=t(148),d="[object Arguments]",f="[object Array]",m="[object Boolean]",y="[object Date]",g="[object Error]",v="[object Function]",_="[object Map]",b="[object Number]",E="[object Object]",w="[object RegExp]",A="[object Set]",C="[object String]",N="[object WeakMap]",T="[object ArrayBuffer]",I="[object Float32Array]",S="[object Float64Array]",x="[object Int8Array]",P="[object Int16Array]",O="[object Int32Array]",R="[object Uint8Array]",D="[object Uint8ClampedArray]",M="[object Uint16Array]",U="[object Uint32Array]",F={};F[d]=F[f]=F[T]=F[m]=F[y]=F[I]=F[S]=F[x]=F[P]=F[O]=F[b]=F[E]=F[w]=F[C]=F[R]=F[D]=F[M]=F[U]=!0,F[g]=F[v]=F[_]=F[A]=F[N]=!1;var L=Object.prototype,k=L.toString;e.exports=i},{105:105,125:125,126:126,127:127,145:145,148:148,94:94,95:95,98:98}],100:[function(t,e,n){function i(t,e,n){n||(n={});for(var i=-1,o=e.length;++i<o;){var r=e[i];n[r]=t[r]}return n}e.exports=i},{}],101:[function(t,e,n){var i=t(148),o=function(){function t(){}return function(e){if(i(e)){t.prototype=e;var n=new t;t.prototype=void 0}return n||{}}}();e.exports=o},{148:148}],102:[function(t,e,n){function i(t,e,n){if("function"!=typeof t)throw new TypeError(o);return setTimeout(function(){t.apply(void 0,n)},e)}var o="Expected a function";e.exports=i},{}],103:[function(t,e,n){function i(t,e,n,u){u||(u=[]);for(var l=-1,h=t.length;++l<h;){var p=t[l];c(p)&&a(p)&&(n||s(p)||r(p))?e?i(p,e,n,u):o(u,p):n||(u[u.length]=p)}return u}var o=t(96),r=t(144),s=t(145),a=t(128),c=t(133);e.exports=i},{128:128,133:133,144:144,145:145,96:96}],104:[function(t,e,n){var i=t(115),o=i();e.exports=o},{115:115}],105:[function(t,e,n){function i(t,e){return o(t,e,r)}var o=t(104),r=t(153);e.exports=i},{104:104,153:153}],106:[function(t,e,n){function i(t,e){for(var n=-1,i=e.length,r=-1,s=[];++n<i;){var a=e[n];o(t[a])&&(s[++r]=a)}return s}var o=t(146);e.exports=i},{146:146}],107:[function(t,e,n){function i(){}e.exports=i},{}],108:[function(t,e,n){function i(t){return function(e){return null==e?void 0:e[t]}}e.exports=i},{}],109:[function(t,e,n){var i=t(155),o=t(135),r=o?function(t,e){return o.set(t,e),t}:i;e.exports=r},{135:135,155:155}],110:[function(t,e,n){function i(t,e,n){if("function"!=typeof t)return o;if(void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 3:return function(n,i,o){return t.call(e,n,i,o)};case 4:return function(n,i,o,r){return t.call(e,n,i,o,r)};case 5:return function(n,i,o,r,s){return t.call(e,n,i,o,r,s)}}return function(){return t.apply(e,arguments)}}var o=t(155);e.exports=i},{155:155}],111:[function(t,e,n){(function(t){function n(t){var e=new i(t.byteLength),n=new o(e);return n.set(new o(t)),e}var i=t.ArrayBuffer,o=t.Uint8Array;e.exports=n}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],112:[function(t,e,n){function i(t,e,n){for(var i=n.length,r=-1,s=o(t.length-i,0),a=-1,c=e.length,u=Array(c+s);++a<c;)u[a]=e[a];for(;++r<i;)u[n[r]]=t[r];for(;s--;)u[a++]=t[r++];return u}var o=Math.max;e.exports=i},{}],113:[function(t,e,n){function i(t,e,n){for(var i=-1,r=n.length,s=-1,a=o(t.length-r,0),c=-1,u=e.length,l=Array(a+u);++s<a;)l[s]=t[s];for(var h=s;++c<u;)l[h+c]=e[c];for(;++i<r;)l[h+n[i]]=t[s++];return l}var o=Math.max;e.exports=i},{}],114:[function(t,e,n){function i(t){return s(function(e,n){var i=-1,s=null==e?0:n.length,a=s>2?n[s-2]:void 0,c=s>2?n[2]:void 0,u=s>1?n[s-1]:void 0;for("function"==typeof a?(a=o(a,u,5),s-=2):(a="function"==typeof u?u:void 0,s-=a?1:0),c&&r(n[0],n[1],c)&&(a=3>s?void 0:a,s=1);++i<s;){var l=n[i];l&&t(e,l,a)}return e})}var o=t(110),r=t(130),s=t(91);e.exports=i},{110:110,130:130,91:91}],115:[function(t,e,n){function i(t){return function(e,n,i){for(var r=o(e),s=i(e),a=s.length,c=t?a:-1;t?c--:++c<a;){var u=s[c];if(n(r[u],u,r)===!1)break}return e}}var o=t(141);e.exports=i},{141:141}],116:[function(t,e,n){(function(n){function i(t,e){function i(){var o=this&&this!==n&&this instanceof i?r:t;return o.apply(e,arguments)}var r=o(t);return i}var o=t(117);e.exports=i}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{117:117}],117:[function(t,e,n){function i(t){return function(){var e=arguments;switch(e.length){case 0:return new t;case 1:return new t(e[0]);case 2:return new t(e[0],e[1]);case 3:return new t(e[0],e[1],e[2]);case 4:return new t(e[0],e[1],e[2],e[3]);case 5:return new t(e[0],e[1],e[2],e[3],e[4]);case 6:return new t(e[0],e[1],e[2],e[3],e[4],e[5]);case 7:return new t(e[0],e[1],e[2],e[3],e[4],e[5],e[6])}var n=o(t.prototype),i=t.apply(n,e);return r(i)?i:n}}var o=t(101),r=t(148);e.exports=i},{101:101,148:148}],118:[function(t,e,n){(function(n){function i(t,e,E,w,A,C,N,T,I,S){function x(){for(var f=arguments.length,m=f,y=Array(f);m--;)y[m]=arguments[m];if(w&&(y=r(y,w,A)),C&&(y=s(y,C,N)),D||U){var _=x.placeholder,L=l(y,_);if(f-=L.length,S>f){var k=T?o(T):void 0,B=b(S-f,0),j=D?L:void 0,V=D?void 0:L,H=D?y:void 0,z=D?void 0:y;e|=D?g:v,e&=~(D?v:g),M||(e&=~(p|d));var Y=[t,e,E,H,j,z,V,k,I,B],G=i.apply(void 0,Y);return c(t)&&h(G,Y),G.placeholder=_,G}}var W=O?E:this,q=R?W[t]:t;return T&&(y=u(y,T)),P&&I<y.length&&(y.length=I),this&&this!==n&&this instanceof x&&(q=F||a(t)),q.apply(W,y)}var P=e&_,O=e&p,R=e&d,D=e&m,M=e&f,U=e&y,F=R?void 0:a(t);return x}var o=t(94),r=t(112),s=t(113),a=t(117),c=t(131),u=t(137),l=t(138),h=t(139),p=1,d=2,f=4,m=8,y=16,g=32,v=64,_=128,b=Math.max;e.exports=i}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{112:112,113:113,117:117,131:131,137:137,138:138,139:139,94:94}],119:[function(t,e,n){(function(n){function i(t,e,i,s){function a(){for(var e=-1,o=arguments.length,r=-1,l=s.length,h=Array(l+o);++r<l;)h[r]=s[r];for(;o--;)h[r++]=arguments[++e];var p=this&&this!==n&&this instanceof a?u:t;return p.apply(c?i:this,h)}var c=e&r,u=o(t);return a}var o=t(117),r=1;e.exports=i}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{117:117}],120:[function(t,e,n){function i(t,e,n,i,g,v,_,b){var E=e&p;if(!E&&"function"!=typeof t)throw new TypeError(m);var w=i?i.length:0;if(w||(e&=~(d|f),i=g=void 0),w-=g?g.length:0,e&f){var A=i,C=g;i=g=void 0}var N=E?void 0:c(t),T=[t,e,n,i,g,A,C,v,_,b];if(N&&(u(T,N),e=T[1],b=T[9]),T[9]=null==b?E?0:t.length:y(b-w,0)||0,e==h)var I=r(T[0],T[2]);else I=e!=d&&e!=(h|d)||T[4].length?s.apply(void 0,T):a.apply(void 0,T);var S=N?o:l;return S(I,T)}var o=t(109),r=t(116),s=t(118),a=t(119),c=t(121),u=t(134),l=t(139),h=1,p=2,d=32,f=64,m="Expected a function",y=Math.max;e.exports=i},{109:109,116:116,118:118,119:119,121:121,134:134,139:139}],121:[function(t,e,n){var i=t(135),o=t(156),r=i?function(t){return i.get(t)}:o;e.exports=r},{135:135,156:156}],122:[function(t,e,n){function i(t){for(var e=t.name+"",n=o[e],i=n?n.length:0;i--;){var r=n[i],s=r.func;if(null==s||s==t)return r.name}return e}var o=t(136);e.exports=i},{136:136}],123:[function(t,e,n){var i=t(108),o=i("length");e.exports=o},{108:108}],124:[function(t,e,n){function i(t,e){var n=null==t?void 0:t[e];return o(n)?n:void 0}var o=t(147);e.exports=i},{147:147}],125:[function(t,e,n){function i(t){var e=t.length,n=new t.constructor(e);return e&&"string"==typeof t[0]&&r.call(t,"index")&&(n.index=t.index,n.input=t.input),n}var o=Object.prototype,r=o.hasOwnProperty;e.exports=i},{}],126:[function(t,e,n){function i(t,e,n){var i=t.constructor;switch(e){case l:return o(t);case r:case s:return new i(+t);case h:case p:case d:case f:case m:case y:case g:case v:case _:var E=t.buffer;return new i(n?o(E):E,t.byteOffset,t.length);case a:case u:return new i(t);case c:var w=new i(t.source,b.exec(t));w.lastIndex=t.lastIndex}return w}var o=t(111),r="[object Boolean]",s="[object Date]",a="[object Number]",c="[object RegExp]",u="[object String]",l="[object ArrayBuffer]",h="[object Float32Array]",p="[object Float64Array]",d="[object Int8Array]",f="[object Int16Array]",m="[object Int32Array]",y="[object Uint8Array]",g="[object Uint8ClampedArray]",v="[object Uint16Array]",_="[object Uint32Array]",b=/\w*$/;e.exports=i},{111:111}],127:[function(t,e,n){function i(t){var e=t.constructor;return"function"==typeof e&&e instanceof e||(e=Object),new e}e.exports=i},{}],128:[function(t,e,n){function i(t){return null!=t&&r(o(t))}var o=t(123),r=t(132);e.exports=i},{123:123,132:132}],129:[function(t,e,n){function i(t,e){return t="number"==typeof t||o.test(t)?+t:-1,e=null==e?r:e,t>-1&&t%1==0&&e>t}var o=/^\d+$/,r=9007199254740991;e.exports=i},{}],130:[function(t,e,n){function i(t,e,n){if(!s(n))return!1;var i=typeof e;if("number"==i?o(n)&&r(e,n.length):"string"==i&&e in n){var a=n[e];return t===t?t===a:a!==a}return!1}var o=t(128),r=t(129),s=t(148);e.exports=i},{128:128,129:129,148:148}],131:[function(t,e,n){function i(t){var e=s(t),n=a[e];if("function"!=typeof n||!(e in o.prototype))return!1;if(t===n)return!0;var i=r(n);return!!i&&t===i[0]}var o=t(92),r=t(121),s=t(122),a=t(85);e.exports=i},{121:121,122:122,85:85,92:92}],132:[function(t,e,n){function i(t){return"number"==typeof t&&t>-1&&t%1==0&&o>=t}var o=9007199254740991;e.exports=i},{}],133:[function(t,e,n){function i(t){return!!t&&"object"==typeof t}e.exports=i},{}],134:[function(t,e,n){function i(t,e){var n=t[1],i=e[1],m=n|i,y=h>m,g=i==h&&n==l||i==h&&n==p&&t[7].length<=e[8]||i==(h|p)&&n==l;if(!y&&!g)return t;i&c&&(t[2]=e[2],m|=n&c?0:u);var v=e[3];if(v){var _=t[3];t[3]=_?r(_,v,e[4]):o(v),t[4]=_?a(t[3],d):o(e[4])}return v=e[5],v&&(_=t[5],t[5]=_?s(_,v,e[6]):o(v),t[6]=_?a(t[5],d):o(e[6])),v=e[7],v&&(t[7]=o(v)),i&h&&(t[8]=null==t[8]?e[8]:f(t[8],e[8])),null==t[9]&&(t[9]=e[9]),t[0]=e[0],t[1]=m,t}var o=t(94),r=t(112),s=t(113),a=t(138),c=1,u=4,l=8,h=128,p=256,d="__lodash_placeholder__",f=Math.min;e.exports=i},{112:112,113:113,138:138,94:94}],135:[function(t,e,n){(function(n){var i=t(124),o=i(n,"WeakMap"),r=o&&new o;e.exports=r}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{124:124}],136:[function(t,e,n){var i={};e.exports=i},{}],137:[function(t,e,n){function i(t,e){for(var n=t.length,i=s(e.length,n),a=o(t);i--;){var c=e[i];t[i]=r(c,n)?a[c]:void 0}return t}var o=t(94),r=t(129),s=Math.min;e.exports=i},{129:129,94:94}],138:[function(t,e,n){function i(t,e){for(var n=-1,i=t.length,r=-1,s=[];++n<i;)t[n]===e&&(t[n]=o,s[++r]=n);return s}var o="__lodash_placeholder__";e.exports=i},{}],139:[function(t,e,n){var i=t(109),o=t(86),r=150,s=16,a=function(){var t=0,e=0;return function(n,a){var c=o(),u=s-(c-e);if(e=c,u>0){if(++t>=r)return n}else t=0;return i(n,a)}}();e.exports=a},{109:109,86:86}],140:[function(t,e,n){function i(t){for(var e=c(t),n=e.length,i=n&&t.length,u=!!i&&a(i)&&(r(t)||o(t)),h=-1,p=[];++h<n;){var d=e[h];(u&&s(d,i)||l.call(t,d))&&p.push(d)}return p}var o=t(144),r=t(145),s=t(129),a=t(132),c=t(154),u=Object.prototype,l=u.hasOwnProperty;e.exports=i},{129:129,132:132,144:144,145:145,154:154}],141:[function(t,e,n){function i(t){return o(t)?t:Object(t)}var o=t(148);e.exports=i},{148:148}],142:[function(t,e,n){function i(t){return t instanceof o?t.clone():new r(t.__wrapped__,t.__chain__,s(t.__actions__))}var o=t(92),r=t(93),s=t(94);e.exports=i},{92:92,93:93,94:94}],143:[function(t,e,n){function i(t,e,n){return"function"==typeof e?o(t,!0,r(e,n,3)):o(t,!0)}var o=t(99),r=t(110);e.exports=i},{110:110,99:99}],144:[function(t,e,n){function i(t){return r(t)&&o(t)&&a.call(t,"callee")&&!c.call(t,"callee")}var o=t(128),r=t(133),s=Object.prototype,a=s.hasOwnProperty,c=s.propertyIsEnumerable;e.exports=i},{128:128,133:133}],145:[function(t,e,n){var i=t(124),o=t(132),r=t(133),s="[object Array]",a=Object.prototype,c=a.toString,u=i(Array,"isArray"),l=u||function(t){return r(t)&&o(t.length)&&c.call(t)==s};e.exports=l},{124:124,132:132,133:133}],146:[function(t,e,n){function i(t){return o(t)&&a.call(t)==r}var o=t(148),r="[object Function]",s=Object.prototype,a=s.toString;e.exports=i},{148:148}],147:[function(t,e,n){function i(t){return null==t?!1:o(t)?l.test(c.call(t)):r(t)&&s.test(t)}var o=t(146),r=t(133),s=/^\[object .+?Constructor\]$/,a=Object.prototype,c=Function.prototype.toString,u=a.hasOwnProperty,l=RegExp("^"+c.call(u).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");e.exports=i},{133:133,146:146}],148:[function(t,e,n){function i(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}e.exports=i},{}],149:[function(t,e,n){function i(t){return"string"==typeof t||o(t)&&a.call(t)==r}var o=t(133),r="[object String]",s=Object.prototype,a=s.toString;e.exports=i},{133:133}],150:[function(t,e,n){var i=t(97),o=t(98),r=t(114),s=r(function(t,e,n){return n?i(t,e,n):o(t,e)});e.exports=s},{114:114,97:97,98:98}],151:[function(t,e,n){function i(t,e,n){var i=r(t);return n&&s(t,e,n)&&(e=void 0),e?o(i,e):i}var o=t(98),r=t(101),s=t(130);e.exports=i},{101:101,130:130,98:98}],152:[function(t,e,n){function i(t){return o(t,r(t))}var o=t(106),r=t(154);e.exports=i},{106:106,154:154}],153:[function(t,e,n){var i=t(124),o=t(128),r=t(148),s=t(140),a=i(Object,"keys"),c=a?function(t){var e=null==t?void 0:t.constructor;return"function"==typeof e&&e.prototype===t||"function"!=typeof t&&o(t)?s(t):r(t)?a(t):[]}:s;e.exports=c},{124:124,128:128,140:140,148:148}],154:[function(t,e,n){function i(t){if(null==t)return[];c(t)||(t=Object(t));var e=t.length;e=e&&a(e)&&(r(t)||o(t))&&e||0;for(var n=t.constructor,i=-1,u="function"==typeof n&&n.prototype===t,h=Array(e),p=e>0;++i<e;)h[i]=i+"";for(var d in t)p&&s(d,e)||"constructor"==d&&(u||!l.call(t,d))||h.push(d);return h}var o=t(144),r=t(145),s=t(129),a=t(132),c=t(148),u=Object.prototype,l=u.hasOwnProperty;e.exports=i},{129:129,132:132,144:144,145:145,148:148}],155:[function(t,e,n){function i(t){return t}e.exports=i},{}],156:[function(t,e,n){function i(){}e.exports=i},{}],157:[function(t,e,n){function i(t){try{return Array.prototype.slice.call(t)}catch(e){for(var n=[],i=0;i<t.length;i++)n.push(t[i]);return n}}"undefined"!=typeof e&&(e.exports=i)},{}],158:[function(t,e,n){"use strict";function i(t){if(t=t||{},this.channel=t.channel,!this.channel)throw new Error("Channel ID must be specified");this.merchantUrl=t.merchantUrl,this._isDestroyed=!1,this._isVerbose=!1,this._listeners=[],this._log("new bus on channel "+this.channel,[location.href])}var o=t(81),r=t(160),s=t(159).checkOrigin;i.prototype.on=function(t,e){var n,i,r=e,a=this;this._isDestroyed||(this.merchantUrl&&(r=function(){s(this.origin,a.merchantUrl)&&e.apply(this,arguments)}),n=this._namespaceEvent(t),i=Array.prototype.slice.call(arguments),i[0]=n,i[1]=r,this._log("on",i),o.on.apply(o,i),this._listeners.push({eventName:t,handler:r,originalHandler:e}))},i.prototype.emit=function(t){var e;this._isDestroyed||(e=Array.prototype.slice.call(arguments),e[0]=this._namespaceEvent(t),this._log("emit",e),o.emit.apply(o,e))},i.prototype._offDirect=function(t){var e=Array.prototype.slice.call(arguments);this._isDestroyed||(e[0]=this._namespaceEvent(t),this._log("off",e),o.off.apply(o,e))},i.prototype.off=function(t,e){var n,i,o=e;if(!this._isDestroyed){if(this.merchantUrl)for(n=0;n<this._listeners.length;n++)i=this._listeners[n],i.originalHandler===e&&(o=i.handler);this._offDirect(t,o)}},i.prototype._namespaceEvent=function(t){return["braintree",this.channel,t].join(":")},i.prototype.teardown=function(){var t,e;for(e=0;e<this._listeners.length;e++)t=this._listeners[e],this._offDirect(t.eventName,t.handler);this._listeners.length=0,this._isDestroyed=!0},i.prototype._log=function(t,e){this._isVerbose&&console.log(t,e)},i.events=r,e.exports=i},{159:159,160:160,81:81}],159:[function(t,e,n){"use strict";function i(t,e){var n,i,r=document.createElement("a");return r.href=e,i="https:"===r.protocol?r.host.replace(/:443$/,""):"http:"===r.protocol?r.host.replace(/:80$/,""):r.host,n=r.protocol+"//"+i,n===t||o.test(t)}var o=/^https:\/\/([a-zA-Z0-9-]+\.)*(braintreepayments|braintreegateway|paypal)\.com(:\d{1,5})?$/;e.exports={checkOrigin:i}},{}],160:[function(t,e,n){"use strict";var i,o,r=["PAYMENT_METHOD_REQUEST","PAYMENT_METHOD_RECEIVED","PAYMENT_METHOD_GENERATED","PAYMENT_METHOD_NOT_GENERATED","PAYMENT_METHOD_CANCELLED","PAYMENT_METHOD_ERROR","CONFIGURATION_REQUEST","ROOT_METADATA_REQUEST","ERROR","WARNING","UI_POPUP_DID_OPEN","UI_POPUP_DID_CLOSE","UI_POPUP_FORCE_CLOSE","UI_MODAL_DID_OPEN","UI_MODAL_DID_CLOSE","ASYNC_DEPENDENCY_INITIALIZING","ASYNC_DEPENDENCY_READY","USER_FORM_SUBMIT_REQUEST","SEND_ANALYTICS_EVENTS"],s={};for(i=0;i<r.length;i++)o=r[i],s[o]=o;e.exports=s},{}],161:[function(t,e,n){"use strict";function i(t){var e,n={};if(t){for(e in t)t.hasOwnProperty(e)&&(n[o(e)]=t[e]);return n}}function o(t){return t.replace(/([A-Z])/g,function(t){return"_"+t.toLowerCase()})}e.exports={convertToLegacyShippingAddress:i
	}},{}],162:[function(t,e,n){"use strict";e.exports={ROOT_SUCCESS_CALLBACK:"onPaymentMethodReceived",ROOT_ERROR_CALLBACK:"onError",ROOT_READY_CALLBACK:"onReady",TEARDOWN_STATE:{IN_PROGRESS:"inProgress",COMPLETE:"complete"}}},{}],163:[function(t,e,n){(function(n){"use strict";function i(){}function o(t){t.paypal=t.paypal||{}}function r(){this._dependenciesRemaining++}function s(){this._dependenciesRemaining--,0===this._dependenciesRemaining&&(delete this._dependenciesRemaining,this.bus.off(l.events.ASYNC_DEPENDENCY_INITIALIZING,this._handleDependencyInitializing),this.bus.off(l.events.ASYNC_DEPENDENCY_READY,this._handleDependencyReady),this._onIntegrationReady())}function a(t){this.configuration=t,this.isReady=!1,this.destructor=new h,this.bus=new l({channel:this.configuration.channel,merchantUrl:n.location.href}),this.apiClient=new u.Client(this.configuration),this._configureCallbacks(),this._configureAnalytics(),this._attachEvents(),this._emitInitializing()}var c=t(169).cloneAndStripDOM,u=t(14),l=t(158),h=t(77),p=t(87),d=t(162),f=t(174),m=t(172),y=t(170),g=t(188);a.prototype._emitInitializing=function(){this.bus.emit(l.events.ASYNC_DEPENDENCY_INITIALIZING)},a.prototype._configureCallbacks=function(){function t(t){return function(e){t(f(e))}}var e=m(this.configuration.merchantConfiguration);this.onSuccess=t(e(d.ROOT_SUCCESS_CALLBACK)),this.onError=e(d.ROOT_ERROR_CALLBACK,y),this.onReady=e(d.ROOT_READY_CALLBACK)},a.prototype._configureAnalytics=function(){var t="web."+this.configuration.integrationType+".",e=this.apiClient;this.bus.on(l.events.SEND_ANALYTICS_EVENTS,function(n,i){var o;for(n instanceof Array||(n=[n]),o=0;o<n.length;o++)n[o]=t+n[o];e.sendAnalyticsEvents(n,i)})},a.prototype._attachEvents=function(){var t=c(this.configuration);"dropin"===t.integrationType&&o(t.merchantConfiguration),this.bus.on(l.events.ERROR,this.onError),this.bus.on(l.events.PAYMENT_METHOD_RECEIVED,this.onSuccess),this.bus.on(l.events.WARNING,function(t){try{console.warn(t)}catch(e){}}),this.bus.on(l.events.CONFIGURATION_REQUEST,function(e){e(t)}),this._dependenciesRemaining=0,this._handleDependencyInitializing=p(r,this),this._handleDependencyReady=p(s,this),this.bus.on(l.events.ASYNC_DEPENDENCY_INITIALIZING,this._handleDependencyInitializing),this.bus.on(l.events.ASYNC_DEPENDENCY_READY,this._handleDependencyReady)},a.prototype._addDeviceData=function(t){var e,n=this.configuration.merchantConfiguration,i=this.configuration.gatewayConfiguration,o={};if(null!=n.dataCollector&&(i.kount&&n.dataCollector.kount&&(o.kount={merchantId:n.dataCollector.kount.merchantId||i.kount.kountMerchantId,environment:n.dataCollector.kount.environment||i.environment}),o.paypal=n.dataCollector.paypal===!0,o.kount||o.paypal)){try{e=g.setup(o)}catch(r){this.bus.emit(l.events.ERROR,{type:"CONFIGURATION",message:r.message})}null!=e&&(this.destructor.registerFunctionForTeardown(function(){e.teardown()}),t.deviceData=e.deviceData)}},a.prototype.teardown=function(t){if(this.teardownState===d.TEARDOWN_STATE.IN_PROGRESS)throw new Error("Cannot call teardown while in progress");if(this.teardownState===d.TEARDOWN_STATE.COMPLETE)throw new Error("Cannot teardown integration more than once");this.teardownMerchantCallback=t||i,this.teardownState=d.TEARDOWN_STATE.IN_PROGRESS,this.destructor.teardown(p(this._handleTeardown,this))},a.prototype._handleTeardown=function(){this.bus.teardown(),this.teardownState=d.TEARDOWN_STATE.COMPLETE,this.teardownMerchantCallback()},a.prototype._wrapWithTeardownReply=function(t,e){var n=this;return function(){if(n.teardownState===d.TEARDOWN_STATE.IN_PROGRESS)throw new Error("Cannot call "+t+" while teardown is in progress");if(n.teardownState===d.TEARDOWN_STATE.COMPLETE)throw new Error("Cannot call "+t+" after teardown has completed");e()}},a.prototype._onIntegrationReady=function(t){this.returnedInstance=t||{},this.returnedInstance.teardown=p(this.teardown,this),this._addDeviceData(this.returnedInstance),this.isReady=!0,this.onReady(this.returnedInstance)},e.exports=a}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{14:14,158:158,162:162,169:169,170:170,172:172,174:174,188:188,77:77,87:87}],164:[function(t,e,n){"use strict";function i(){var t,e;u.apply(this,arguments),e=o(this.configuration),e.apiClient=this.apiClient,this._attachBusEvents(),t=a.create(e),null!=t&&this.destructor.registerFunctionForTeardown(function(e){t.teardown(e)}),this.bus.emit(c.events.ASYNC_DEPENDENCY_READY)}var o=t(169).cloneAndPreserveDOM,r=t(151),s=t(87),a=t(176),c=t(158),u=t(163);i.prototype=r(u.prototype,{constructor:i}),i.prototype._attachBusEvents=function(){this.bus.on(c.events.PAYMENT_METHOD_GENERATED,s(this._onPaymentMethodGenerated,this))},i.prototype._onPaymentMethodGenerated=function(t){this.bus.emit(c.events.PAYMENT_METHOD_RECEIVED,t)},e.exports=i},{151:151,158:158,163:163,169:169,176:176,87:87}],165:[function(t,e,n){"use strict";function i(){_.apply(this,arguments),null!=this.configuration.merchantConfiguration.hostedFields?this._setupHostedFields():this._setupForm(),this._setupPayPal(),this._setupCoinbase(),this.bus.emit(g.events.ASYNC_DEPENDENCY_READY)}function o(t,e){return function(n){return e in t&&d(t[e][n])?t[e][n]:function(){}}}var r=t(169).cloneAndPreserveDOM,s=t(151),a=t(89),c=t(90),u=t(197),l=t(209),h=t(176),p=t(87),d=t(146),f=t(203),m=t(80),y=t(162),g=t(158),v=t(161).convertToLegacyShippingAddress,_=t(163),b=t(171);i.prototype=s(_.prototype,{constructor:i}),i.prototype._setupHostedFields=function(){var t,e=this.configuration.merchantConfiguration,n=e[y.ROOT_SUCCESS_CALLBACK],i=new m(e.id),o=f.create(this.configuration),r=new b({formNapper:i,rootCallback:n,channel:this.configuration.channel});return null==i.htmlForm?void this.bus.emit(g.events.ERROR,{type:"CONFIGURATION",message:"options.id does not reference a valid DOM element"}):(t=p(r.handleSubmitRequest,r),i.hijack(t),this.bus.on(g.events.USER_FORM_SUBMIT_REQUEST,t),void this.destructor.registerFunctionForTeardown(p(function(t){r.teardown(),i.detach(),o.teardown(t)},this)))},i.prototype._setupForm=function(){var t,e,n,i=this.configuration.merchantConfiguration;i.id?(n=u.setup(this.apiClient,this.configuration),t=!d(i[y.ROOT_SUCCESS_CALLBACK]),t||(e=this.onSuccess,n.onNonceReceived=p(function(t,n){t?this.bus.emit(g.events.ERROR,t):e(n)},this)),this.destructor.registerFunctionForTeardown(function(){n.teardown()})):this.bus.on(g.events.PAYMENT_METHOD_GENERATED,p(function(t){this.bus.emit(g.events.PAYMENT_METHOD_RECEIVED,t)},this))},i.prototype._setupPayPal=function(){var t,e,n,i,s,u,h,f,m;this.configuration.merchantConfiguration.paypal&&(t=r(this.configuration),h=t.merchantConfiguration,u=h.paypal,e=o(h,"paypal"),n=e("onSuccess"),i=e("onCancelled"),u.paymentMethodNonceInputField||(s=document.createElement("input"),s.id="braintree-custom-integration-dummy-input",u.paymentMethodNonceInputField=s),u.onSuccess=function(t){m=t.nonce,n(t.nonce,t.details.email,v(t.details.shippingAddress))},d(u.onAuthorizationDismissed)&&(f=a(function(t){c(function(){t&&"PayPal"===t.source&&!m&&u.onAuthorizationDismissed()})},200,{leading:!0}),this.bus.on(g.events.UI_POPUP_DID_CLOSE,f),this.bus.on(g.events.UI_MODAL_DID_CLOSE,f)),u.onCancelled=function(){m=null,i()},h.enableCORS&&(u.enableCORS=!0),this.paypalIntegration=l.create(t),null!=this.paypalIntegration&&this.destructor.registerFunctionForTeardown(p(function(){this.paypalIntegration.teardown()},this)))},i.prototype._setupCoinbase=function(){var t,e;this.configuration.merchantConfiguration.coinbase&&(navigator.userAgent.match(/MSIE 8\.0/)||(t=r(this.configuration),t.apiClient=this.apiClient,e=h.create(t),null!=e&&this.destructor.registerFunctionForTeardown(function(t){e.teardown(t)})))},i.prototype._onIntegrationReady=function(){var t=this,e={};this.paypalIntegration&&(e.paypal={initAuthFlow:this._wrapWithTeardownReply("initAuthFlow",function(){t.bus.emit(g.events.SEND_ANALYTICS_EVENTS,"paypal.auth.init"),t.paypalIntegration.initAuthFlow()}),closeAuthFlow:this._wrapWithTeardownReply("closeAuthFlow",function(){t.bus.emit(g.events.SEND_ANALYTICS_EVENTS,"paypal.auth.close"),t.paypalIntegration.closeAuthFlow()})}),_.prototype._onIntegrationReady.call(this,e)},e.exports=i},{146:146,151:151,158:158,161:161,162:162,163:163,169:169,171:171,176:176,197:197,203:203,209:209,80:80,87:87,89:89,90:90}],166:[function(t,e,n){"use strict";function i(t){return l(t.paymentMethodNonceReceived)?t.paymentMethodNonceReceived:null}function o(t){return l(t[p.ROOT_SUCCESS_CALLBACK])}function r(){var t,e,n,r,a;f.apply(this,arguments),a=s(this.configuration),t=a.merchantConfiguration,e=i(t),n=o(t),(e||n)&&(t.paymentMethodNonceReceived=u(function(t){e&&e(t.originalEvent,t.nonce),this.bus.emit(h.events.PAYMENT_METHOD_RECEIVED,d(t))},this)),r=c.create(a),this.destructor.registerFunctionForTeardown(function(t){r.teardown(t)}),this.bus.emit(h.events.ASYNC_DEPENDENCY_READY)}var s=t(169).cloneAndPreserveDOM,a=t(151),c=t(195),u=t(87),l=t(146),h=t(158),p=t(162),d=t(174),f=t(163);r.prototype=a(f.prototype,{constructor:r}),e.exports=r},{146:146,151:151,158:158,162:162,163:163,169:169,174:174,195:195,87:87}],167:[function(t,e,n){"use strict";e.exports={custom:t(165),dropin:t(166),paypal:t(168),coinbase:t(164)}},{164:164,165:165,166:166,168:168}],168:[function(t,e,n){"use strict";function i(t){return"onSuccess"in t&&p(t.onSuccess)?t.onSuccess:"paypal"in t&&p(t.paypal.onSuccess)?t.paypal.onSuccess:null}function o(t){return p(t[d.ROOT_SUCCESS_CALLBACK])}function r(t){var e,n,r,a,d,g,v;t=s(t),t.merchantConfiguration.paypal=t.merchantConfiguration.paypal||{};for(a in t.merchantConfiguration)t.merchantConfiguration.hasOwnProperty(a)&&"paypal"!==a&&(t.merchantConfiguration.paypal[a]=t.merchantConfiguration[a]);y.call(this,t),e=this.configuration.merchantConfiguration,n=i(e),r=o(e),d=p(e.paypal.onCancelled)?e.paypal.onCancelled:function(){},(n||r)&&(e.paypal.onSuccess=h(function(t){v=t.nonce,n&&n(t.nonce,t.details.email,m(t.details.shippingAddress)),this.bus.emit(f.events.PAYMENT_METHOD_RECEIVED,t)},this)),p(e.paypal.onAuthorizationDismissed)&&(g=c(function(t){u(function(){t&&"PayPal"===t.source&&!v&&e.paypal.onAuthorizationDismissed()})},200,{leading:!0}),this.bus.on(f.events.UI_POPUP_DID_CLOSE,g),this.bus.on(f.events.UI_MODAL_DID_CLOSE,g)),e.paypal.onCancelled=function(){v=null,d&&d()},this.paypalIntegration=l.create(this.configuration),this.destructor.registerFunctionForTeardown(h(function(){this.paypalIntegration.teardown()},this)),this.bus.emit(f.events.ASYNC_DEPENDENCY_READY)}var s=t(169).cloneAndPreserveDOM,a=t(151),c=t(89),u=t(90),l=t(209),h=t(87),p=t(146),d=t(162),f=t(158),m=t(161).convertToLegacyShippingAddress,y=t(163);r.prototype=a(y.prototype,{constructor:r}),r.prototype._onIntegrationReady=function(){var t=this,e={};this.paypalIntegration&&(e.paypal={initAuthFlow:this._wrapWithTeardownReply("initAuthFlow",function(){t.bus.emit(f.events.SEND_ANALYTICS_EVENTS,"paypal.auth.init"),t.paypalIntegration.initAuthFlow()}),closeAuthFlow:this._wrapWithTeardownReply("closeAuthFlow",function(){t.bus.emit(f.events.SEND_ANALYTICS_EVENTS,"paypal.auth.close"),t.paypalIntegration.closeAuthFlow()})}),y.prototype._onIntegrationReady.call(this,e)},e.exports=r},{146:146,151:151,158:158,161:161,162:162,163:163,169:169,209:209,87:87,89:89,90:90}],169:[function(t,e,n){"use strict";function i(t){return r(t,function(t){return a(t)?t.get(0):c(t)?t:void 0})}function o(t){return r(t,function(t){return a(t)||c(t)?{}:void 0})}var r=t(143),s=t(173),a=s.isJQueryElement,c=s.isHTMLElement;e.exports={cloneAndPreserveDOM:i,cloneAndStripDOM:o}},{143:143,173:173}],170:[function(t,e,n){"use strict";e.exports=function(t){if("CONFIGURATION"===t.type||"IMMEDIATE"===t.type)throw new Error(t.message);try{console.error(-1===navigator.userAgent.indexOf("MSIE")?t:JSON.stringify(t,null,2))}catch(e){}}},{}],171:[function(t,e,n){"use strict";function i(t){this.paymentMethod=null,this.nonceInputElement=null,this.bus=new o({channel:t.channel}),this.formNapper=t.formNapper,this.rootCallback=t.rootCallback,this._attachEvents()}var o=t(158),r=t(203),s="web.custom.hosted-fields.via.",a="payment_method_nonce";i.prototype._shouldStrictlyValidate=function(t){return null!=t?!1:null==this.paymentMethod||"CreditCard"===this.paymentMethod.type},i.prototype._clearNonce=function(){this.paymentMethod&&this.paymentMethod.nonce&&(this.paymentMethod=null,this.nonceInputElement=this.formNapper.inject(a,""))},i.prototype._attachEvents=function(){var t=this;this.bus.on(o.events.PAYMENT_METHOD_CANCELLED,function(){t._clearNonce()}),this.bus.on(o.events.PAYMENT_METHOD_GENERATED,function(e){t.paymentMethod=e,t.nonceInputElement=t.formNapper.inject(a,t.paymentMethod.nonce)})},i.prototype.handleSubmitRequest=function(){var t=this;this.bus.emit(r.events.TOKENIZATION_REQUEST,function(e){var n=e[0],i=e[1];return n?void t.bus.emit(o.events.ERROR,n):(t.paymentMethod=i||t.paymentMethod,t._shouldStrictlyValidate(i)?(t.bus.emit(r.events.VALIDATE_STRICT),void t.bus.emit(o.events.ERROR,{type:"VALIDATION",message:"User did not enter a payment method"})):void(t.rootCallback?t.bus.emit(o.events.SEND_ANALYTICS_EVENTS,s+"callback.success",function(){t.rootCallback(t.paymentMethod)}):t.bus.emit(o.events.SEND_ANALYTICS_EVENTS,s+"formsubmit.success",function(){t.nonceInputElement=t.formNapper.inject(a,t.paymentMethod.nonce),t.formNapper.submit()})))})},i.prototype.teardown=function(){this._clearNonce()},e.exports=i},{158:158,203:203}],172:[function(t,e,n){"use strict";function i(){}var o=t(146);e.exports=function(t){return function(e,n){return o(t[e])?t[e]:o(n)?n:i}}},{146:146}],173:[function(t,e,n){"use strict";function i(t){return Boolean(t)&&"object"==typeof t&&"jquery"in t}function o(t){return Boolean(t)&&1===t.nodeType}e.exports={isJQueryElement:i,isHTMLElement:o}},{}],174:[function(t,e,n){"use strict";e.exports=function(t){return{nonce:t.nonce,details:t.details,type:t.type}}},{}],175:[function(t,e,n){(function(n){"use strict";function i(t,e,i){var s;if(!c.hasOwnProperty(e))throw new Error(e+" is an unsupported integration");i=i||{},s=p.uuid(),r._getConfiguration({enableCORS:i.enableCORS||!1,authorization:t,sessionId:s},function(r,a){var d;return r?(d=h(i)(u.ROOT_ERROR_CALLBACK,l),void d({message:r.errors})):void new c[e]({channel:s,authorization:t,gatewayConfiguration:a,integrationType:e,merchantConfiguration:i,analyticsConfiguration:{sdkVersion:"braintree/web/"+o,merchantAppId:n.location.host},isMerchantPageHttps:p.isBrowserHttps()})})}var o="2.26.0",r=t(14),s=t(209),a=t(195),c=t(167),u=t(162),l=t(170),h=t(172),p=t(73),d=t(188);e.exports={api:r,data:d,cse:n.Braintree,paypal:s,dropin:a,hostedFields:{VERSION:t(203).VERSION},setup:i,VERSION:o}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{14:14,162:162,167:167,170:170,172:172,188:188,195:195,203:203,209:209,73:73}],176:[function(t,e,n){"use strict";function i(t){var e=new o(t);return e.canCreateIntegration?e:null}var o=t(179);e.exports={create:i}},{179:179}],177:[function(t,e,n){(function(t){"use strict";function n(e){return e=e||t.navigator.userAgent,/AppleWebKit\//.test(e)&&/Mobile\//.test(e)?e.replace(/.* OS ([0-9_]+) like Mac OS X.*/,"$1").replace(/_/g,"."):null}function i(e){var n=e||t.navigator.userAgent,i=null,o=/MSIE.(\d+)/.exec(n);return/Trident/.test(n)&&(i=11),o&&(i=parseInt(o[1],10)),i}function o(e){return e=e||t.navigator.userAgent,/Android/.test(e)?e.replace(/^.* Android ([0-9\.]+).*$/,"$1"):null}e.exports={ieVersion:i,iOSSafariVersion:n,androidVersion:o}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],178:[function(t,e,n){"use strict";function i(t,e,n){return t?(n.bus.emit(o.ERROR,t.error),void n.bus.emit(o.SEND_ANALYTICS_EVENTS,"coinbase.generate.nonce.failed")):(n.bus.emit(o.PAYMENT_METHOD_GENERATED,e),void n.bus.emit(o.SEND_ANALYTICS_EVENTS,"coinbase.generate.nonce.succeeded"))}var o=t(158).events;e.exports={tokenize:i}},{158:158}],179:[function(t,e,n){(function(n){"use strict";function i(t){return{clientId:t.gatewayConfiguration.coinbase.clientId,redirectUrl:t.gatewayConfiguration.coinbase.redirectUrl,scopes:t.gatewayConfiguration.coinbase.scopes||d.SCOPES,meta:{authorizations_merchant_account:t.gatewayConfiguration.coinbase.merchantAccount||""}}}function o(t){return function(e,n){t.emit(m.events.ERROR,{type:n,message:e})}}function r(t,e){var n=(t.merchantConfiguration||{}).coinbase,i=o(e);if(null==t.apiClient)i("apiClient is required for coinbase",d.CONFIGURATION_ERROR);else if(t.gatewayConfiguration.coinbaseEnabled)if(n&&(n.container||n.button))if(n.container&&n.button)i("options.coinbase.container and options.coinbase.button are mutually exclusive",d.CONFIGURATION_ERROR);else{if(f.isSupportedBrowser())return!0;i("Coinbase is not supported by your browser. Please consider upgrading",d.UNSUPPORTED_BROWSER_ERROR)}else i("Either options.coinbase.container or options.coinbase.button is required for Coinbase integrations",d.CONFIGURATION_ERROR);else i("Coinbase is not enabled for your merchant account",d.CONFIGURATION_ERROR);return!1}function s(t){var e,o,s=this;this.configuration=t,this.destructor=new u,o={channel:t.channel};try{t.coinbase.container&&(o.merchantUrl=n.location.href)}catch(l){}this.bus=t.bus||new m(o),this.canCreateIntegration=r(t,this.bus),this.canCreateIntegration&&(this.buttonId=t.merchantConfiguration.coinbase.button||d.BUTTON_ID,this.apiClient=t.apiClient||new y.Client(t),this._onOAuthSuccess=a(this._onOAuthSuccess,this),this._handleButtonClick=a(this._handleButtonClick,this),this.popupParams=i(t),this.redirectDoneInterval=null,t.merchantConfiguration.coinbase.container?(e=c.normalizeElement(t.merchantConfiguration.coinbase.container),this._insertFrame(e)):(n.braintreeCoinbasePopupCallback=this._onOAuthSuccess,e=document.body,c.addEventListener(e,"click",this._handleButtonClick),this.bus.emit(m.events.SEND_ANALYTICS_EVENTS,"coinbase.initialized"),this.destructor.registerFunctionForTeardown(function(){s._closePopup()}),this.bus.on(d.TEARDOWN_EVENT,a(this.destructor.teardown,this.destructor))))}var a=t(87),c=t(73),u=t(77),l=t(183),h=t(186),p=t(178),d=t(180),f=t(181),m=t(158),y=t(14);s.prototype._insertFrame=function(t){var e=this,n=l.createFrame({channel:this.configuration.channel});this.bus.emit(m.events.ASYNC_DEPENDENCY_INITIALIZING),t.appendChild(n),this.destructor.registerFunctionForTeardown(function(){t.removeChild(n)}),setTimeout(function(){n.src=e.configuration.gatewayConfiguration.assetsUrl+"/coinbase/"+d.VERSION+"/coinbase-frame.html#"+e.configuration.channel},0)},s.prototype._onOAuthSuccess=function(t){var e=this;return t.code?(this.bus.emit("coinbase:view:navigate","loading"),this.bus.emit(m.events.SEND_ANALYTICS_EVENTS,"coinbase.popup.authorized"),this.apiClient.tokenizeCoinbase({code:t.code,query:h.getQueryString()},function(t,n){p.tokenize.apply(null,[t,n,e])}),void this._closePopup()):(this.bus.emit(m.events.SEND_ANALYTICS_EVENTS,"coinbase.popup.denied"),void this._closePopup())},s.prototype._clearPollForRedirectDone=function(){this.redirectDoneInterval&&(clearInterval(this.redirectDoneInterval),this.redirectDoneInterval=null)},s.prototype._closePopup=function(t){t=t||this.popup,null!=t&&(f.shouldCloseFromParent()&&t.close(),this._popupCleanup())},s.prototype._popupCleanup=function(){this._clearPollForRedirectDone(),this.bus.emit(m.events.UI_POPUP_DID_CLOSE,{source:d.INTEGRATION_NAME})},s.prototype._pollForRedirectDone=function(t){var e=this,n=setInterval(function(){var n;if(null==t||t.closed)return e.bus.emit(m.events.SEND_ANALYTICS_EVENTS,"coinbase.popup.aborted"),void e._popupCleanup();try{if("about:blank"===t.location.href)throw new Error("Not finished loading");n=c.decodeQueryString(t.location.search.replace(/^\?/,"")).code}catch(i){return}e._onOAuthSuccess({code:n})},100);return this.redirectDoneInterval=n,n},s.prototype._openPopup=function(){var t;this.bus.emit(m.events.SEND_ANALYTICS_EVENTS,"coinbase.popup.started"),t=l.createPopup(h.compose(this._getOAuthBaseUrl(),this.popupParams)),t.focus(),this._pollForRedirectDone(t),this.bus.emit(m.events.UI_POPUP_DID_OPEN,{source:d.INTEGRATION_NAME}),this.bus.on(m.events.UI_POPUP_FORCE_CLOSE,function(e){e.target===d.INTEGRATION_NAME&&t.close()}),this.popup=t},s.prototype._getOAuthBaseUrl=function(){var t;return t="shared_sandbox"===this.configuration.gatewayConfiguration.coinbase.environment?d.SANDBOX_OAUTH_BASE_URL:d.PRODUCTION_OAUTH_BASE_URL},s.prototype._handleButtonClick=function(t){for(var e=t.target||t.srcElement;;){if(null==e)return;if(e===t.currentTarget)return;if(e.id===this.buttonId)break;e=e.parentNode}t&&t.preventDefault?t.preventDefault():t.returnValue=!1,this._openPopup()},s.prototype.teardown=function(t){var e=this;return this.canCreateIntegration?void this.bus.emit(d.TEARDOWN_EVENT,function(){e.destructor.teardown(function(n){return n?t(n):(e.bus.teardown(),void t(null))})}):void t(null)},e.exports=s}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{14:14,158:158,178:178,180:180,181:181,183:183,186:186,73:73,77:77,87:87}],180:[function(t,e,n){"use strict";e.exports={PRODUCTION_OAUTH_BASE_URL:"https://coinbase.com",SANDBOX_OAUTH_BASE_URL:"https://sandbox.coinbase.com",ORIGIN_URL:"https://www.coinbase.com",FRAME_NAME:"braintree-coinbase-frame",POPUP_NAME:"coinbase",BUTTON_ID:"bt-coinbase-button",SCOPES:"send",VERSION:"2.26.0",INTEGRATION_NAME:"Coinbase",CONFIGURATION_ERROR:"CONFIGURATION",UNSUPPORTED_BROWSER_ERROR:"UNSUPPORTED_BROWSER",TEARDOWN_EVENT:"coinbase:TEARDOWN"}},{}],181:[function(t,e,n){"use strict";function i(){var t=a.ieVersion();return!t||t>8}function o(){var t=a.androidVersion();return null==t?!1:/^5/.test(t)}function r(){return!(o()||s())}function s(){var t=a.iOSSafariVersion();return null==t?!1:/^8\.0/.test(t)||/^8\.1$/.test(t)}var a=t(177);e.exports={isSupportedBrowser:i,shouldCloseFromParent:r,shouldDisplayIOSClose:s,shouldDisplayLollipopClose:o}},{177:177}],182:[function(t,e,n){"use strict";function i(t){var e=document.createElement("button");return t=t||{},e.id=t.id||"coinbase-button",e.style.backgroundColor=t.backgroundColor||"#EEE",e.style.color=t.color||"#4597C3",e.style.border=t.border||"0",e.style.borderRadius=t.borderRadius||"6px",e.style.padding=t.padding||"12px",e.innerHTML=t.innerHTML||"coinbase",e}e.exports={create:i}},{}],183:[function(t,e,n){"use strict";var i=t(185),o=t(182),r=t(184);e.exports={createButton:o.create,createPopup:i.create,createFrame:r.create}},{182:182,184:184,185:185}],184:[function(t,e,n){"use strict";function i(){return r({name:o.FRAME_NAME,height:"70px",width:"100%",style:{padding:0,margin:0,border:0,outline:"none"}})}var o=t(180),r=t(82);e.exports={create:i}},{180:180,82:82}],185:[function(t,e,n){(function(n){"use strict";function i(t){var e,n=[];for(e in t)t.hasOwnProperty(e)&&n.push([e,t[e]].join("="));return n.join(",")}function o(){var t=580,e=810;return i({width:t,height:e,left:(screen.width-t)/2,top:(screen.height-e)/4})}function r(t){return n.open(t,s.POPUP_NAME,o())}var s=t(180);e.exports={create:r}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{180:180}],186:[function(t,e,n){"use strict";function i(){return"version="+r.VERSION}function o(t,e){var n,o=t+"/oauth/authorize?response_type=code",r=e.redirectUrl+"?"+i();if(o+="&redirect_uri="+encodeURIComponent(r),o+="&client_id="+e.clientId,e.scopes&&(o+="&scope="+encodeURIComponent(e.scopes)),e.meta)for(n in e.meta)e.meta.hasOwnProperty(n)&&(o+="&meta["+encodeURIComponent(n)+"]="+encodeURIComponent(e.meta[n]));return o}var r=t(180);e.exports={compose:o,getQueryString:i}},{180:180}],187:[function(t,e,n){"use strict";function i(){return new o}function o(){this.sessionId=r(),this._beaconId=s(this.sessionId),this._parameterBlock=a(this.sessionId,this._beaconId),this._thirdPartyBlock=c()}function r(){var t,e="";for(t=0;32>t;t++)e+=Math.floor(16*Math.random()).toString(16);return e}function s(t){var e=(new Date).getTime()/1e3;return"https://b.stats.paypal.com/counter.cgi?i=127.0.0.1&p="+t+"&t="+e+"&a=14"}function a(t,e){var n=document.body.appendChild(document.createElement("script"));return n.type="application/json",n.setAttribute("fncls","fnparams-dede7cc5-15fd-4c75-a9f4-36c430ee3a99"),n.text=JSON.stringify({f:t,s:"BRAINTREE_SIGNIN",b:e}),n}function c(){function t(){n._l()}var e,n,i="https://www.paypalobjects.com/webstatic/r/fb/",o=document.createElement("iframe");o.src="about:blank",o.title="",o.role="presentation",(o.frameElement||o).style.cssText="width: 0; height: 0; border: 0",document.body.appendChild(o);try{n=o.contentWindow.document}catch(r){e=document.domain,o.src='javascript:var d=document.open();d.domain="'+e+'";void(0);',n=o.contentWindow.document}return n.open()._l=function(){var t=this.createElement("script");e&&(this.domain=e),t.id="js-iframe-async",t.src=i+"fb-all-prod.pp.min.js",this.body.appendChild(t)},o.addEventListener?o.addEventListener("load",t,!1):o.attachEvent?o.attachEvent("onload",t):n.write('<body onload="document._l();">'),n.close(),o}o.prototype.teardown=function(){this._thirdPartyBlock.parentNode.removeChild(this._thirdPartyBlock)},e.exports={setup:i}},{}],188:[function(t,e,n){"use strict";function i(t){function e(){var t;for(t=0;t<a.length;t++)a[t].teardown()}var n,i,s,a=[];return null!=t.kount?(i=o.setup(t.kount),n=i.deviceData,a.push(i)):n={},t.paypal===!0&&(s=r.setup(),n.correlation_id=s.sessionId,a.push(s)),{deviceData:JSON.stringify(n),teardown:e}}var o=t(189),r=t(187);e.exports={setup:i}},{187:187,189:189}],189:[function(t,e,n){(function(t){"use strict";function n(t){var e=null!=t?t:{};return new i(e)}function i(t){o.random.startCollectors(),this._currentEnvironment=this._initializeEnvironment(t),this._deviceSessionId=this._generateDeviceSessionId(),this.deviceData=this._getDeviceData(),this._iframe=this._setupIFrame()}var o=t.Braintree.sjcl,r="braintreeDataFrame",s="600000",a="https://assets.qa.braintreepayments.com/data",c={development:a,qa:a,sandbox:"https://assets.braintreegateway.com/sandbox/data",production:"https://assets.braintreegateway.com/data"};i.prototype.teardown=function(){o.random.stopCollectors(),this._removeIframe()},i.prototype._removeIframe=function(){this._iframe.parentNode.removeChild(this._iframe)},i.prototype._getDeviceData=function(){return{device_session_id:this._deviceSessionId,fraud_merchant_id:this._currentEnvironment.id}},i.prototype._generateDeviceSessionId=function(){var t,e;return t=o.random.randomWords(4,0),e=o.codec.hex.fromBits(t)},i.prototype._setupIFrame=function(){var t,e=this,n=document.getElementById(r);return null!=n?n:(t="?m="+this._currentEnvironment.id+"&s="+this._deviceSessionId,n=document.createElement("iframe"),n.width=1,n.id=r,n.height=1,n.frameBorder=0,n.scrolling="no",document.body.appendChild(n),setTimeout(function(){n.src=e._currentEnvironment.url+"/logo.htm"+t;try{n.innerHTML='<img src="'+e._currentEnvironment.url+"/logo.gif"+t+'" />'}catch(i){}},10),n)},i.prototype._initializeEnvironment=function(t){var e=c[t.environment];if(null==e)throw new Error(t.environment+" is not a valid environment for kount.environment");return{url:e,name:t.environment,id:null==t.merchantId?s:t.merchantId}},e.exports={setup:n,Kount:i,environmentUrls:c}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],190:[function(t,e,n){"use strict";function i(t){this.apiClient=t}var o=["unlockCreditCard"];i.prototype.attach=function(t){function e(e){t.define(e,function(){n.apiClient[e].apply(n.apiClient,arguments)})}var n=this,i=0,r=o.length;for(i;r>i;i++)e(o[i])},e.exports=i},{}],191:[function(t,e,n){(function(n){"use strict";function i(t,e){var n=window.getComputedStyle?getComputedStyle(t):t.currentStyle;return n[e]}function o(){return{html:{height:a.style.height||"",overflow:i(a,"overflow"),position:i(a,"position")},body:{height:c.style.height||"",overflow:i(c,"overflow")}}}function r(){var t=/Android|iPhone|iPod|iPad/i.test(window.navigator.userAgent);return t}function s(t){var e,i,o,r=this;this.configuration=t,this.destructor=new h,this.container=null,this.merchantFormManager=null,this.configurationRequests=[],this.braintreeApiClient=new u.Client(this.configuration),this.braintreeBus=new l({merchantUrl:n.location.href,channel:this.configuration.channel}),this.bus=new p.MessageBus(this.configuration.root,this.configuration.channel),this.rpcServer=new p.RPCServer(this.bus),this.apiProxyServer=new y(this.braintreeApiClient),this.apiProxyServer.attach(this.rpcServer),e=this.configuration.inlineFramePath||this.configuration.gatewayConfiguration.assetsUrl+"/dropin/"+b+"/inline-frame.html",i=this.configuration.modalFramePath||this.configuration.gatewayConfiguration.assetsUrl+"/dropin/"+b+"/modal-frame.html",a=document.documentElement,c=document.body,this.frames={inline:this._createFrame(e,_.INLINE_FRAME_NAME),modal:this._createFrame(i,_.MODAL_FRAME_NAME)},this.container=f(this.configuration.merchantConfiguration.container,"Unable to find valid container."),o=f(this.configuration.merchantConfiguration.form||this._findClosest(this.container,"form")),this.merchantFormManager=new g({form:o,frames:this.frames,onSubmit:this.configuration.merchantConfiguration.paymentMethodNonceReceived,apiClient:this.braintreeApiClient}).initialize(),this.destructor.registerFunctionForTeardown(function(){r.merchantFormManager.teardown()}),this.configuration.gatewayConfiguration.paypalEnabled&&this._configurePayPal(),this.braintreeApiClient.sendAnalyticsEvents("dropin.web.initialized")}var a,c,u=t(14),l=t(158),h=t(77),p=t(55),d=t(73),f=d.normalizeElement,m=t(87),y=t(190),g=t(194),v=t(193),_=t(196),b="2.26.0",E=t(213);s.prototype.initialize=function(){var t,e=this;this._initializeModal(),this.braintreeBus.emit(l.events.ASYNC_DEPENDENCY_INITIALIZING),this.container.appendChild(this.frames.inline.element),c.appendChild(this.frames.modal.element),this.destructor.registerFunctionForTeardown(function(t){e._hideModal(function(){e.container.removeChild(e.frames.inline.element),c.removeChild(e.frames.modal.element),t()})}),this.rpcServer.define("receiveSharedCustomerIdentifier",function(n){for(e.braintreeApiClient.attrs.sharedCustomerIdentifier=n,e.braintreeApiClient.attrs.sharedCustomerIdentifierType="browser_session_cookie_store",t=0;t<e.configurationRequests.length;t++)e.configurationRequests[t](e.encodedClientToken);e.configurationRequests=[]}),this.braintreeBus.on(l.events.PAYMENT_METHOD_GENERATED,m(this._handleAltPayData,this)),this.rpcServer.define("selectPaymentMethod",function(t){e.frames.modal.rpcClient.invoke("selectPaymentMethod",[t]),e._showModal()}),this.rpcServer.define("sendAddedPaymentMethod",function(t){e.merchantFormManager.setNoncePayload(t),e.frames.inline.rpcClient.invoke("receiveNewPaymentMethod",[t])}),this.rpcServer.define("sendUsedPaymentMethod",function(t){e.frames.inline.rpcClient.invoke("selectPaymentMethod",[t])}),this.rpcServer.define("sendUnlockedNonce",function(t){e.merchantFormManager.setNoncePayload(t)}),this.rpcServer.define("clearNonce",function(){e.merchantFormManager.clearNoncePayload()}),this.rpcServer.define("closeDropInModal",function(){e._hideModal()}),this.rpcServer.define("setInlineFrameHeight",function(t){e.frames.inline.element.style.height=t+"px"}),this.bus.register("ready",function(t){t.source===e.frames.inline.element.contentWindow?e.frames.inline.rpcClient=new p.RPCClient(e.bus,t.source):t.source===e.frames.modal.element.contentWindow&&(e.frames.modal.rpcClient=new p.RPCClient(e.bus,t.source))})},s.prototype._createFrame=function(t,e){return new v(t,e,this.braintreeBus)},s.prototype._initializeModal=function(){this.frames.modal.element.style.display="none",this.frames.modal.element.style.position=r()?"absolute":"fixed",this.frames.modal.element.style.top="0",this.frames.modal.element.style.left="0",this.frames.modal.element.style.height="100%",
	this.frames.modal.element.style.width="100%"},s.prototype._lockMerchantWindowSize=function(){setTimeout(function(){a.style.overflow="hidden",c.style.overflow="hidden",c.style.height="100%",r()&&(a.style.position="relative",a.style.height=window.innerHeight+"px")},160)},s.prototype._unlockMerchantWindowSize=function(){var t=this.merchantPageDefaultStyles;t&&(c.style.height=t.body.height,c.style.overflow=t.body.overflow,a.style.overflow=t.html.overflow,r()&&(a.style.height=t.html.height,a.style.position=t.html.position),delete this.merchantPageDefaultStyles)},s.prototype._showModal=function(){var t=this,e=this.frames.modal.element;this.merchantPageDefaultStyles=o(),e.style.display="block",this.frames.modal.rpcClient.invoke("open",[],function(){setTimeout(function(){t._lockMerchantWindowSize(),e.contentWindow.focus()},200)})},s.prototype._hideModal=function(t){this._unlockMerchantWindowSize(),this.frames.modal.element.style.display="none",t&&t()},s.prototype._configurePayPal=function(){var t=this.configuration.merchantConfiguration.paypal||{};this.paypalModalView=new E({channel:this.configuration.channel,insertFrameFunction:t.insertFrame,paypalAssetsUrl:this.configuration.gatewayConfiguration.paypal.assetsUrl,isHermes:Boolean(t.singleUse)&&Boolean(t.amount)&&Boolean(t.currency)})},s.prototype._handleAltPayData=function(t){this.merchantFormManager.setNoncePayload(t),this.frames.inline.rpcClient.invoke("receiveNewPaymentMethod",[t]),this.frames.modal.rpcClient.invoke("modalViewClose")},s.prototype._findClosest=function(t,e){e=e.toUpperCase();do{if(t.nodeName===e)return t;t=t.parentNode}while(t);throw new Error("Unable to find a valid "+e)},s.prototype.teardown=function(t){var e=this;this.paypalModalView&&this.paypalModalView.teardown(),this.braintreeBus.emit(_.MODAL_FRAME_TEARDOWN_EVENT,function(){e.braintreeBus.emit(_.INLINE_FRAME_TEARDOWN_EVENT,function(){e.destructor.teardown(function(n){return n?t(n):(e.braintreeBus.teardown(),void t())})})})},e.exports=s}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{14:14,158:158,190:190,193:193,194:194,196:196,213:213,55:55,73:73,77:77,87:87}],192:[function(t,e,n){"use strict";function i(t){var e=new o(t);return e.initialize(),e}var o=t(191),r="2.26.0";e.exports={create:i,VERSION:r}},{191:191}],193:[function(t,e,n){"use strict";function i(){var t,e=document.createElement("fakeelement");for(t in u)if("undefined"!=typeof e.style[t])return u[t];return null}function o(t,e){function n(i){i.target===t&&"height"===i.propertyName&&(e.emit(s.events.ASYNC_DEPENDENCY_READY),t.removeEventListener(o,n))}var o=i();o?t.addEventListener(o,n):setTimeout(function(){e.emit(s.events.ASYNC_DEPENDENCY_READY)},500)}function r(t,e,n){var i="height 210ms cubic-bezier(0.390, 0.575, 0.565, 1.000)",r=c({name:e,width:"100%",height:"68",style:{transition:i,WebkitTransition:i,MozTransition:i,msTransition:i,OTransition:i,border:"0",zIndex:"9999"}});this.element=r,setTimeout(function(){r.src=t+"#"+n.channel},0),e===a.INLINE_FRAME_NAME&&o(r,n)}var s=t(158),a=t(196),c=t(82),u={transition:"transitionend","-o-transition":"otransitionEnd","-moz-transition":"transitionend","-webkit-transition":"webkitTransitionEnd"};e.exports=r},{158:158,196:196,82:82}],194:[function(t,e,n){"use strict";function i(t){this.formNapper=new r(t.form),this.frames=t.frames,this.onSubmit=t.onSubmit,this.apiClient=t.apiClient}var o=t(87),r=t(80);i.prototype.initialize=function(){return this._isSubmitBased()&&this._setElements(),this._setEvents(),this},i.prototype.setNoncePayload=function(t){this.noncePayload=t},i.prototype.clearNoncePayload=function(){this.noncePayload=null},i.prototype._isSubmitBased=function(){return!this.onSubmit},i.prototype._isCallbackBased=function(){return Boolean(this.onSubmit)},i.prototype._setElements=function(){this.nonceInput=this.formNapper.inject("payment_method_nonce","")},i.prototype._setEvents=function(){this.formNapper.hijack(o(this._handleFormSubmit,this))},i.prototype._handleFormSubmit=function(t){var e=this;this.noncePayload&&this.noncePayload.nonce?this._handleNonceReply(t):this.frames.inline.rpcClient.invoke("requestNonce",[],function(n){e.setNoncePayload(n),e._handleNonceReply(t)})},i.prototype._handleNonceReply=function(t){var e=this;this._isCallbackBased()?this.apiClient.sendAnalyticsEvents("dropin.web.end.callback",function(){var n=e.noncePayload;n.originalEvent=t,e.onSubmit(n),setTimeout(function(){delete n.originalEvent,e.frames.inline.rpcClient.invoke("clearLoadingState"),e.frames.inline.rpcClient.invoke("receiveNewPaymentMethod",[n])},200)}):this._triggerFormSubmission()},i.prototype._triggerFormSubmission=function(){var t=this;this.nonceInput=this.formNapper.inject("payment_method_nonce",this.noncePayload.nonce),this.apiClient.sendAnalyticsEvents("dropin.web.end.auto-submit",function(){t.formNapper.submit()})},i.prototype.teardown=function(){var t;this.nonceInput&&(t=this.formNapper.htmlForm,t.removeChild(this.nonceInput)),this.formNapper.detach()},e.exports=i},{80:80,87:87}],195:[function(t,e,n){"use strict";e.exports=t(192)},{192:192}],196:[function(t,e,n){e.exports={PAYPAL_INTEGRATION_NAME:"PayPal",INLINE_FRAME_NAME:"braintree-dropin-frame",MODAL_FRAME_NAME:"braintree-dropin-modal-frame",PAYMENT_METHOD_TYPES:["CoinbaseAccount","PayPalAccount","CreditCard"],cssClassMap:{"American Express":"american-express","Diners Club":"diners-club",DinersClub:"diners-club",Discover:"discover",JCB:"jcb",Maestro:"maestro",MasterCard:"master-card",Solo:"solo",Switch:"switch",UKMaestro:"maestro",UnionPay:"unionpay",Visa:"visa"},INLINE_FRAME_TEARDOWN_EVENT:"dropin:TEARDOWN_INLINE_FRAME",MODAL_FRAME_TEARDOWN_EVENT:"dropin:TEARDOWN_MODAL_FRAME"}},{}],197:[function(t,e,n){"use strict";function i(t,e){var n=e.merchantConfiguration||{},i=document.getElementById(n.id),s=n.useCreditCard!==!1;if(!i)throw new Error('Unable to find form with id: "'+n.id+'"');return s&&r(i),new o(t,e)}var o=t(199),r=t(202);e.exports={setup:i}},{199:199,202:202}],198:[function(t,e,n){(function(t){"use strict";function n(t,e){var o,s,a,c=t.children;for(e=e||{},s=0;s<c.length;s++)o=c[s],r(o)?(a=o.getAttribute("data-braintree-name"),"postal_code"===a?e.billingAddress={postalCode:o.value}:e[a]=o.value,i(o)):o.children&&o.children.length>0&&n(o,e);return e}function i(t){try{t.attributes.removeNamedItem("name")}catch(e){}}function o(t){n(t)}function r(t){return t.nodeType===s&&t.attributes["data-braintree-name"]}var s=t.Node?t.Node.ELEMENT_NODE:1;e.exports={extractValues:n,scrubAllAttributes:o,scrubAttributes:i,isBraintreeNode:r}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],199:[function(t,e,n){(function(n){"use strict";function i(t,e){var i=e.merchantConfiguration,o="object"==typeof i.paymentMethodNonceInputField,r=this;this.destructor=new a,this.apiClient=t,this.isCreditCardForm=i.useCreditCard!==!1,this.htmlForm=document.getElementById(i.id),this.paymentMethodNonceInput=l(i.paymentMethodNonceInputField),this.htmlForm.appendChild(this.paymentMethodNonceInput),this.destructor.registerFunctionForTeardown(function(){o?r.paymentMethodNonceInput.value="":r.htmlForm.removeChild(r.paymentMethodNonceInput)}),this.model=new u,this.bus=new c({merchantUrl:n.location.href,channel:e.channel}),this.setEvents(),this.destructor.registerFunctionForTeardown(function(){r.bus.teardown()})}var o=t(87),r=t(73),s=t(198),a=t(77),c=t(158),u=t(201),l=t(200),h={message:"Unable to process payments at this time",type:"IMMEDIATE"};i.prototype.setEvents=function(){var t=this;this.onSubmitHandler=o(this.handleSubmit,this),this.onExternalNonceReceived=o(this.onExternalNonceReceived,this),this.clearExternalNonce=o(this.clearExternalNonce,this),r.addEventListener(this.htmlForm,"submit",this.onSubmitHandler),this.destructor.registerFunctionForTeardown(function(){r.removeEventListener(t.htmlForm,"submit",t.onSubmitHandler)}),this.bus.on(c.events.PAYMENT_METHOD_GENERATED,this.onExternalNonceReceived),this.bus.on(c.events.PAYMENT_METHOD_CANCELLED,this.clearExternalNonce)},i.prototype.handleSubmit=function(t){var e,n=this;return t.preventDefault?t.preventDefault():t.returnValue=!1,this.isCreditCardForm?(e=this.model.get("type"),e&&"CreditCard"!==e?(s.scrubAllAttributes(this.htmlForm),void this.onNonceReceived(null,this.model.attributes)):void this.apiClient.tokenizeCard(s.extractValues(this.htmlForm),function(t,e,i){t?n.onNonceReceived(h,null):(n.model.set({nonce:e,type:i.type,details:i.details}),n.onNonceReceived(null,n.model.attributes))})):void this.onNonceReceived(null,this.model.attributes)},i.prototype.writeNonceToDOM=function(){this.paymentMethodNonceInput.value=this.model.get("nonce")},i.prototype.onExternalNonceReceived=function(t){this.model.set(t),this.writeNonceToDOM()},i.prototype.clearExternalNonce=function(){this.model.reset()},i.prototype.onNonceReceived=function(t){var e=this.htmlForm;return t?void this.bus.emit(c.events.ERROR,h):(r.removeEventListener(e,"submit",this.onSubmitHandler),this.writeNonceToDOM(),void(e.submit&&("function"==typeof e.submit||e.submit.call)?e.submit():setTimeout(function(){e.querySelector('[type="submit"]').click()},1)))},i.prototype.teardown=function(){this.destructor.teardown()},e.exports=i}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{158:158,198:198,200:200,201:201,73:73,77:77,87:87}],200:[function(t,e,n){"use strict";e.exports=function(t){var e,n;return"object"==typeof t?t:(e="payment_method_nonce","string"==typeof t&&(e=t),n=document.createElement("input"),n.name=e,n.type="hidden",n)}},{}],201:[function(t,e,n){"use strict";function i(){this.reset()}i.prototype.get=function(t){return this.attributes[t]},i.prototype.set=function(t){this.attributes=t||{}},i.prototype.reset=function(){this.attributes={}},e.exports=i},{}],202:[function(t,e,n){"use strict";e.exports=function(t){var e,n,i=t.getElementsByTagName("*"),o={};for(e=0;e<i.length;e++)n=i[e].getAttribute("data-braintree-name"),o[n]=!0;if(!o.number)throw new Error('Unable to find an input with data-braintree-name="number" in your form. Please add one.');if(o.expiration_date){if(o.expiration_month||o.expiration_year)throw new Error('You have inputs with data-braintree-name="expiration_date" AND data-braintree-name="expiration_(year|month)". Please use either "expiration_date" or "expiration_year" and "expiration_month".')}else{if(!o.expiration_month&&!o.expiration_year)throw new Error('Unable to find an input with data-braintree-name="expiration_date" in your form. Please add one.');if(!o.expiration_month)throw new Error('Unable to find an input with data-braintree-name="expiration_month" in your form. Please add one.');if(!o.expiration_year)throw new Error('Unable to find an input with data-braintree-name="expiration_year" in your form. Please add one.')}}},{}],203:[function(t,e,n){"use strict";var i=t(205),o=t(207).events,r="2.26.0";e.exports={create:function(t){return new i(t)},events:o,VERSION:r}},{205:205,207:207}],204:[function(t,e,n){"use strict";var i=t(207);e.exports=function(t,e){return t+"/hosted-fields/"+i.VERSION+"/hosted-fields-frame.html#"+e}},{207:207}],205:[function(t,e,n){"use strict";function i(t,e){var n=document.createElement("div");return n.style.clear="both",e=e||document.body,e.appendChild(t),e.appendChild(n),{parent:e,children:[t,n]}}function o(t,e){return function(n){var i=t[n.fieldKey].containerElement,o=a(i);n.target={fieldKey:n.fieldKey,container:i},o.toggle(h.externalClasses.FOCUSED,n.isFocused).toggle(h.externalClasses.VALID,n.isValid),n.isStrictlyValidating?o.toggle(h.externalClasses.INVALID,!n.isValid):o.toggle(h.externalClasses.INVALID,!n.isPotentiallyValid),delete n.fieldKey,delete n.isStrictlyValidating,e&&e(n)}}function r(t){var e,n,r,p,d,f=this,m={},g=0;this.injectedNodes=[],this.destructor=new s,this.bus=new u({channel:t.channel,merchantUrl:location.href}),this.destructor.registerFunctionForTeardown(function(){f.bus.teardown()}),this.bus.emit(u.events.ASYNC_DEPENDENCY_INITIALIZING),this.bus.emit(u.events.SEND_ANALYTICS_EVENTS,"hosted-fields.initialized");for(p in h.whitelistedFields)if(h.whitelistedFields.hasOwnProperty(p)){if(e=t.merchantConfiguration.hostedFields[p],!e)continue;if(n=document.querySelector(e.selector),!n){d='Unable to find element with selector "'+e.selector+'" for hostedFields.'+p,this.bus.emit(u.events.ERROR,{message:d});continue}if(n.querySelector('iframe[name^="braintree-"]')){this.bus.emit(u.events.ERROR,{message:'Cannot place two elements in "'+e.selector+'"'});continue}r=c({type:p,name:"braintree-hosted-field-"+p,style:h.defaultIFrameStyle}),this.injectedNodes.push(i(r,n)),this.setupLabelFocus(p,n),m[p]={frameElement:r,containerElement:n},g++,setTimeout(function(e){return function(){e.src=l(t.gatewayConfiguration.assetsUrl,t.channel)}}(r),0)}this.bus.on(y.FRAME_READY,function(t){g--,t(0===g)}),this.bus.on(y.INPUT_EVENT,o(m,t.merchantConfiguration.hostedFields.onFieldEvent)),this.destructor.registerFunctionForTeardown(function(){var t,e,n;for(t=0;t<f.injectedNodes.length;t++){for(n=f.injectedNodes[t],e=0;e<n.children.length;e++)n.parent.removeChild(n.children[e]);a(n.parent).remove(h.externalClasses.FOCUSED,h.externalClasses.INVALID,h.externalClasses.VALID)}})}var s=t(77),a=t(74),c=t(82),u=t(158),l=t(204),h=t(207),p=t(157),d=t(73),f=t(208),m=t(206),y=h.events;r.prototype.setupLabelFocus=function(t,e){function n(){r.emit(y.TRIGGER_INPUT_FOCUS,t)}var i,o,r=this.bus;if(m()&&null!=e.id){for(i=p(document.querySelectorAll('label[for="'+e.id+'"]')),i=i.concat(f(e,"label")),o=0;o<i.length;o++)d.addEventListener(i[o],"click",n,!1);this.destructor.registerFunctionForTeardown(function(){for(o=0;o<i.length;o++)d.removeEventListener(i[o],"click",n,!1)})}},r.prototype.teardown=function(t){this.destructor.teardown(t)},e.exports=r},{157:157,158:158,204:204,206:206,207:207,208:208,73:73,74:74,77:77,82:82}],206:[function(t,e,n){"use strict";e.exports=function(){return!/(iPad|iPhone|iPod)/i.test(navigator.userAgent)}},{}],207:[function(t,e,n){"use strict";var i="2.26.0";e.exports={VERSION:i,events:{FRAME_READY:"hosted-fields:FRAME_READY",VALIDATE_STRICT:"hosted-fields:VALIDATE_STRICT",CONFIGURATION:"hosted-fields:CONFIGURATION",TOKENIZATION_REQUEST:"hosted-fields:TOKENIZATION_REQUEST",INPUT_EVENT:"hosted-fields:INPUT_EVENT",TRIGGER_INPUT_FOCUS:"hosted-fields:TRIGGER_INPUT_FOCUS"},externalEvents:{FOCUS:"focus",BLUR:"blur",FIELD_STATE_CHANGE:"fieldStateChange"},defaultMaxLengths:{number:19,postalCode:8,expirationDate:7,expirationMonth:2,expirationYear:4,cvv:3},externalClasses:{FOCUSED:"braintree-hosted-fields-focused",INVALID:"braintree-hosted-fields-invalid",VALID:"braintree-hosted-fields-valid"},defaultIFrameStyle:{border:"none",width:"100%",height:"100%","float":"left"},whitelistedStyles:["-moz-osx-font-smoothing","-moz-transition","-moz-tap-highlight-color","-webkit-font-smoothing","-webkit-transition","-webkit-tap-highlight-color","color","font","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-variant-alternates","font-variant-caps","font-variant-east-asian","font-variant-ligatures","font-variant-numeric","font-weight","line-height","opacity","outline","text-shadow","transition"],whitelistedFields:{number:{name:"credit-card-number",label:"Credit Card Number"},cvv:{name:"cvv",label:"CVV"},expirationDate:{name:"expiration",label:"Expiration Date"},expirationMonth:{name:"expiration-month",label:"Expiration Month"},expirationYear:{name:"expiration-year",label:"Expiration Year"},postalCode:{name:"postal-code",label:"Postal Code"}}}},{}],208:[function(t,e,n){"use strict";function i(t,e){for(var n=t.parentNode,i=[];null!=n;)null!=n.tagName&&n.tagName.toLowerCase()===e&&i.push(n),n=n.parentNode;return i}e.exports=i},{}],209:[function(t,e,n){"use strict";e.exports=t(211)},{211:211}],210:[function(t,e,n){(function(n){"use strict";function i(t){this.configuration=t,this.destructor=new a,this.bus=new c({merchantUrl:n.location.href,channel:this.configuration.channel}),this.container=o.normalizeElement(this.configuration.merchantConfiguration.paypal.container||document.body),this.loggedInView=null,this.loggedOutView=null,this.appView=null,this.merchantPageView=null,this.paymentMethodNonceInputFieldView=null,this.overlayView=null,this.bridgeIframeView=null,b(this,["initAuthFlow","closeAuthFlow"])}var o=t(73),r=t(87),s=t(146),a=t(77),c=t(158),u=t(213),l=t(215),h=t(216),p=t(219),d=t(217),f=t(220),m=t(214),y=t(230),g=t(226),v=t(222),_=t(232),b=t(88);i.prototype.initialize=function(){var t=r(this._handleClickLogin,this);this._createViews(),this.bus.on(c.events.PAYMENT_METHOD_CANCELLED,r(this._handlePaymentMethodCancelled,this)),"dropin"!==this.configuration.integrationType&&this.bus.on(c.events.PAYMENT_METHOD_GENERATED,r(this._handlePaymentMethodGenerated,this)),o.addEventListener(document.body,"click",t),this.destructor.registerFunctionForTeardown(function(){o.removeEventListener(document.body,"click",t)})},i.prototype._createViews=function(){function t(){g.isFirefox()?(i.closeAuthFlow(),i.initAuthFlow()):i.bus.emit(v.events.FOCUS_APP)}var e,n=[],i=this,o="dropin"===this.configuration.integrationType;y.isBridgeIframeRequired()&&(this.bridgeIframeView=new m({container:this.container,paypalAssetsUrl:this.configuration.gatewayConfiguration.paypal.assetsUrl,channel:this.configuration.channel}),n.push(this.bridgeIframeView)),this.appView=new u({insertFrameFunction:this.configuration.merchantConfiguration.paypal.insertFrameFunction,paypalAssetsUrl:this.configuration.gatewayConfiguration.paypal.assetsUrl,isHermes:_.isHermesConfiguration(this.configuration),isDropin:o,channel:this.configuration.channel}),n.push(this.appView),o||(this.merchantPageView=new d({channel:this.configuration.channel}),n.push(this.merchantPageView),y.isPopupSupported()&&y.isOverlaySupported()&&(this.overlayView=new p({paypalAssetsUrl:this.configuration.gatewayConfiguration.paypal.assetsUrl,onFocus:t,onClose:function(){i.bus.emit(v.events.CLOSE_APP)},locale:this.configuration.merchantConfiguration.paypal.locale,channel:this.configuration.channel}),n.push(this.overlayView))),o||this.configuration.merchantConfiguration.paypal.headless||(this.paymentMethodNonceInputFieldView=new f({container:this.container,el:this.configuration.merchantConfiguration.paypal.paymentMethodNonceInputField,channel:this.configuration.channel}),n.push(this.paymentMethodNonceInputFieldView),this.loggedInView=new l({paypalAssetsUrl:this.configuration.gatewayConfiguration.paypal.assetsUrl,container:this.container,locale:this.configuration.merchantConfiguration.paypal.locale,channel:this.configuration.channel}),n.push(this.loggedInView),this.loggedOutView=new h({paypalAssetsUrl:this.configuration.gatewayConfiguration.paypal.assetsUrl,container:this.container,enablePayPalButton:_.isOnetimeHermesConfiguration(this.configuration),locale:this.configuration.merchantConfiguration.paypal.locale,channel:this.configuration.channel}),n.push(this.loggedOutView)),this.destructor.registerFunctionForTeardown(function(){for(e=0;e<n.length;e++)n[e].teardown()})},i.prototype._handleClickLogin=function(t){for(var e=t.target||t.srcElement;;){if(null==e)return;if(e===t.currentTarget)return;if(this._isButton(e))break;e=e.parentNode}_.preventDefault(t),this.initAuthFlow()},i.prototype.initAuthFlow=function(){this.appView.open()},i.prototype.closeAuthFlow=function(){this.appView.close()},i.prototype._isButton=function(t){var e="braintree-paypal-button"===t.id,n=_.isOnetimeHermesConfiguration(this.configuration)&&t.className.match(/paypal-button(?!-widget)/);return e||n},i.prototype._handlePaymentMethodGenerated=function(t){var e=this.configuration.merchantConfiguration.paypal.onSuccess;t.type===v.NONCE_TYPE&&s(e)&&e(t)},i.prototype._handlePaymentMethodCancelled=function(t){var e=this.configuration.merchantConfiguration.paypal.onCancelled;t.source===v.PAYPAL_INTEGRATION_NAME&&s(e)&&e()},i.prototype.teardown=function(){var t=this;this.destructor.teardown(function(){t.bus.teardown()})},e.exports=i}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{146:146,158:158,213:213,214:214,215:215,216:216,217:217,219:219,220:220,222:222,226:226,230:230,232:232,73:73,77:77,87:87,88:88}],211:[function(t,e,n){"use strict";function i(t){var e,n;if(n=t.merchantConfiguration.onUnsupported,"function"!=typeof n&&(n=function(t){try{console.log(t)}catch(e){}}),!t.gatewayConfiguration.paypalEnabled)return n(new Error("PayPal is not enabled")),null;if(!h.detectedPostMessage())return n(new Error("unsupported browser detected")),null;if(!t.merchantConfiguration.paypal.container&&!t.merchantConfiguration.paypal.headless)return n(new Error("Please supply a container for the PayPal button to be appended to")),null;if(!u(t))return n(new Error("unsupported protocol detected")),null;if(c(t))return n(new Error("Unvetted merchant client token does not include a payee email")),null;if(f.isHermesConfiguration(t)&&!s(t.merchantConfiguration.paypal.locale))return n(new Error("This PayPal integration does not support this country")),null;if(f.isOnetimeHermesConfiguration(t)){if(!r(t.merchantConfiguration.paypal.currency))return n(new Error("This PayPal integration does not support this currency")),null;if(!a(t.merchantConfiguration.paypal.amount))return n(new Error("Amount must be a number")),null}return e=new l(t),e.initialize(),e}function o(t,e){var n,i=e.length,o=!1;for(n=0;i>n;n++)t.toLowerCase()===e[n].toLowerCase()&&(o=!0);return o}function r(t){return o(t,p.HERMES_SUPPORTED_CURRENCIES)}function s(t){return o(d(t).split("_")[1],p.HERMES_SUPPORTED_COUNTRIES)}function a(t){return t=parseFloat(t),"number"==typeof t&&!isNaN(t)&&t>=0}function c(t){return t.gatewayConfiguration.paypal.unvettedMerchant&&(!f.isHermesConfiguration(t)||!t.gatewayConfiguration.paypal.payeeEmail)}function u(t){return t.gatewayConfiguration.paypal.allowHttp?!0:h.isPopupSupported()?!0:"isMerchantPageHttps"in t?t.isMerchantPageHttps:y.isBrowserHttps()}var l=t(210),h=t(230),p=t(222),d=t(224),f=t(232),m="2.26.0",y=t(73);e.exports={create:i,VERSION:m}},{210:210,222:222,224:224,230:230,232:232,73:73}],212:[function(t,e,n){e.exports={en_us:{cancel:"Cancel",overlay_text:"Don't see the secure PayPal browser? We'll help you re-launch the window to complete your purchase.",continue_link:"Continue"},en_uk:{cancel:"Cancel",overlay_text:"Don't see the secure PayPal browser? We'll help you re-launch the window to complete your purchase.",continue_link:"Continue"},en_au:{cancel:"Cancel",overlay_text:"Don't see the secure PayPal browser? We'll help you re-launch the window to complete your purchase.",continue_link:"Continue"},sv_se:{cancel:"Avbryt",overlay_text:"Ser du inte den säkra PayPal-webbl&auml;saren? Vi hj&auml;lper dig att starta om f&ouml;nstret f&ouml;r att slutf&ouml;ra k&ouml;pet.",continue_link:"Forts&auml;tt"},de_de:{cancel:"Abbrechen",overlay_text:"Sie sehen das sichere Browserfenster von PayPal nicht? Das Fenster wird neu ge&ouml;ffnet, damit Sie Ihren Einkauf abschlie&szlig;en k&ouml;nnen.",continue_link:"Weiter"},fr_fr:{cancel:"Annuler",overlay_text:"Vous ne voyez pas le navigateur s&eacute;curis&eacute; PayPal ? Nous allons vous aider &agrave; relancer la fen&ecirc;tre pour effectuer votre achat.",continue_link:"Continuer"},en_ca:{cancel:"Cancel",overlay_text:"Don't see the secure PayPal browser? We'll help you re-launch the window to complete your purchase.",continue_link:"Continue"},fr_ca:{cancel:"Annuler",overlay_text:"Vous ne voyez pas le navigateur s&eacute;curis&eacute; de PayPal ? Nous vous aiderons &agrave; relancer la fen&ecirc;tre afin d'effectuer votre achat.",continue_link:"Continuer"},es_es:{cancel:"Cancelar",overlay_text:"&iquest;No ves el s&iacute;mbolo de navegaci&oacute;n segura de PayPal? Te ayudaremos a abrir de nuevo la ventana para completar la compra.",continue_link:"Continuar"},es_xc:{cancel:"Cancelar",overlay_text:"&iquest;No ve el s&iacute;mbolo de navegaci&oacute;n segura de PayPal? Abriremos la ventana nuevamente para que pueda completar su compra.",continue_link:"Continuar"},fr_xc:{cancel:"Annuler",overlay_text:"Le navigateur s&eacute;curis&eacute; de PayPal n'appara&icirc;t pas ? Nous allons vous aider &agrave; rouvrir la fen&ecirc;tre pour finaliser votre achat.",continue_link:"Continuer"},nl_nl:{cancel:"Annuleren",overlay_text:"Ziet u de beveiligde PayPal-browser niet? We helpen u het venster opnieuw te openen zodat u uw aankoop kunt voltooien.",continue_link:"Doorgaan"},pt_pt:{cancel:"Cancelar",overlay_text:"N&atilde;o est&aacute; a ver a indica&ccedil;&atilde;o de liga&ccedil;&atilde;o segura PayPal no browser? Vamos ent&atilde;o voltar a abrir a janela para concluir a sua compra.",continue_link:"Continuar"},ru_ru:{cancel:"Отмена",overlay_text:"Не отображается безопасная страница PayPal в браузере? Мы поможем вам повторно загрузить окно, чтобы завершить покупку.",continue_link:"Продолжить"},da_dk:{cancel:"Annuller",overlay_text:"Kan du ikke se PayPals sikre browser? Vi hj&aelig;lper dig med at &aring;bne vinduet igen, s&aring; du kan betale.",continue_link:"Forts&aelig;t"},it_it:{cancel:"Annulla",overlay_text:"Non vedi il browser sicuro di PayPal? Ti aiuteremo a riavviare la pagina per completare l'acquisto.",continue_link:"Continua"},no_no:{cancel:"Avbryt",overlay_text:"Ser du ikke den sikre PayPal-nettleseren? Vi hjelper deg med &aring; &aring;pne vinduet p&aring; nytt s&aring; du kan fullf&oslash;re kj&oslash;pet.",continue_link:"Fortsett"},pl_pl:{cancel:"Anuluj",overlay_text:"Nie widzisz bezpiecznej przeglądarki PayPal? Pomożemy Ci ponownie uruchomić to okno w celu dokonania zakupu.",continue_link:"Kontynuuj"},tr_tr:{cancel:"İptal",overlay_text:"G&uuml;venli PayPal tarayıcısını g&ouml;rm&uuml;yor musunuz? Alışverişinizi tamamlamak i&ccedil;in pencereyi yeniden başlatmanıza yardımcı olacağız.",continue_link:"Devam"},zh_xc:{cancel:"取消",overlay_text:"没有看到安全的PayPal浏览器？我们将帮助您重启窗口以完成购物。",continue_link:"继续"},en_hk:{cancel:"Cancel",overlay_text:"Don't see the secure PayPal browser? We'll help you re-launch the window to complete your purchase.",continue_link:"Continue"},zh_hk:{cancel:"取消",overlay_text:"看不到安全的 PayPal 瀏覽器視窗？我們會助你重新啟動視窗，以完成購物。",continue_link:"繼續"},en_my:{cancel:"Cancel",overlay_text:"Don't see the secure PayPal browser? We'll help you re-launch the window to complete your purchase.",continue_link:"Continue"},en_nz:{cancel:"Cancel",overlay_text:"Don't see the secure PayPal browser? We'll help you re-launch the window to complete your purchase.",continue_link:"Continue"},en_sg:{cancel:"Cancel",overlay_text:"Don't see the secure PayPal browser? We'll help you re-launch the window to complete your purchase.",continue_link:"Continue"}}},{}],213:[function(t,e,n){(function(n){"use strict";function i(t){var e=this;this.options=t||{},this.destructor=new a,this.bus=new c({merchantUrl:n.location.href,channel:this.options.channel}),this.destructor.registerFunctionForTeardown(function(){e.bus.teardown()}),this._initialize()}var o=t(87),r=t(146),s=t(230),a=t(77),c=t(158),u=t(222),l=t(221),h=t(218);i.prototype._initialize=function(){var t=this;this.app=s.isPopupSupported()?new l({src:this._buildUrl(),isHermes:this.options.isHermes,channel:this.options.channel}):new h({src:this._buildUrl(),isDropin:this.options.isDropin,isHermes:this.options.isHermes,insertFrameFunction:this.options.insertFrameFunction,channel:this.options.channel}),this.destructor.registerFunctionForTeardown(function(){t.app.teardown()}),this.bus.on(u.events.CLOSE_APP,o(this.close,this)),this.bus.on(u.events.FOCUS_APP,o(this.focus,this)),this.bus.on(c.events.PAYMENT_METHOD_GENERATED,o(this._handlePaymentMethodGenerated,this)),this.bus.on(c.events.UI_POPUP_FORCE_CLOSE,o(this._handleForceClose,this))},i.prototype._buildUrl=function(){var t=this.options.paypalAssetsUrl;return t+="/pwpp/",t+=u.VERSION,t+="/html/braintree-frame.html",t+="#"+this.options.channel},i.prototype.open=function(){this.focus(),this.app.open(),this.poll()},i.prototype._handleForceClose=function(t){t.target===u.PAYPAL_INTEGRATION_NAME&&this.close()},i.prototype.close=function(){this.app.close()},i.prototype.focus=function(){r(this.app.focus)&&this.app.focus()},i.prototype.isClosed=function(){return this.app.isClosed()},i.prototype.stopPolling=function(){clearInterval(this.pollId)},i.prototype.poll=function(){var t=this;this.pollId=setInterval(function(){t.isClosed()&&t._handleClosed()},100)},i.prototype._handlePaymentMethodGenerated=function(t){t.type===u.NONCE_TYPE&&this.close()},i.prototype._handleClosed=function(){this.stopPolling(),this.close(),s.isPopupSupported()&&(this.app.el=null)},i.prototype.teardown=function(){this.destructor.teardown()},e.exports=i}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{146:146,158:158,218:218,221:221,222:222,230:230,77:77,87:87}],214:[function(t,e,n){"use strict";function i(t){this.options=t||{},this.el=r({src:this._buildUrl(),name:o.BRIDGE_FRAME_NAME,height:1,width:1,style:{position:"static",top:0,left:0,bottom:0,padding:0,margin:0,border:0,outline:"none",background:"transparent"}}),this.options.container.appendChild(this.el)}var o=t(222),r=t(82);i.prototype._buildUrl=function(){var t=this.options.paypalAssetsUrl;return t+="/pwpp/",t+=o.VERSION,t+="/html/bridge-frame.html",t+="#"+this.options.channel},i.prototype.teardown=function(){this.options.container.removeChild(this.el)},e.exports=i},{222:222,82:82}],215:[function(t,e,n){(function(n){"use strict";function i(t){var e;this.options=t||{},this.wrapper=this.options.container||document.body,this.destructor=new s,this.bus=new a({merchantUrl:n.location.href,channel:t.channel}),e=h(this.options.locale,p),this.translation=e.translation,this._initialize()}var o=t(73),r=t(87),s=t(77),a=t(158),c=t(232),u=t(231),l=t(222),h=t(225),p=t(212);i.prototype._initialize=function(){var t=this,e=r(this._handleClickLogout,this);this._createViewContainer(),this._createPayPalName(),this._createEmailNode(),this._createLogoutNode(),o.addEventListener(this.logoutNode,"click",e),this.destructor.registerFunctionForTeardown(function(){o.removeEventListener(t.logoutNode,"click",e)}),this.bus.on(a.events.PAYMENT_METHOD_GENERATED,r(this._handlePaymentMethodGenerated,this)),this.bus.on(a.events.PAYMENT_METHOD_CANCELLED,r(this._handlePaymentMethodCancelled,this))},i.prototype._createViewContainer=function(){var t=["display: none","max-width: 500px","overflow: hidden","padding: 16px","background-image: url("+this.options.paypalAssetsUrl+"/pwpp/"+l.VERSION+"/images/paypal-small.png)","background-image: url("+this.options.paypalAssetsUrl+"/pwpp/"+l.VERSION+"/images/paypal-small.svg), none","background-position: 20px 50%","background-repeat: no-repeat","background-size: 13px 15px","border-top: 1px solid #d1d4d6","border-bottom: 1px solid #d1d4d6"].join(";");this.container=document.createElement("div"),this.container.id="braintree-paypal-loggedin",this.container.style.cssText=t,this.wrapper.appendChild(this.container)},i.prototype._createPayPalName=function(){var t=["color: #283036","font-size: 13px","font-weight: 800",'font-family: "Helvetica Neue", Helvetica, Arial, sans-serif',"margin-left: 36px","-webkit-font-smoothing: antialiased","-moz-font-smoothing: antialiased","-ms-font-smoothing: antialiased","font-smoothing: antialiased"].join(";");return this.payPalName=document.createElement("span"),this.payPalName.id="bt-pp-name",this.payPalName.innerHTML="PayPal",this.payPalName.style.cssText=t,this.container.appendChild(this.payPalName)},i.prototype._createEmailNode=function(){var t=["color: #6e787f","font-size: 13px",'font-family: "Helvetica Neue", Helvetica, Arial, sans-serif',"margin-left: 5px","-webkit-font-smoothing: antialiased","-moz-font-smoothing: antialiased","-ms-font-smoothing: antialiased","font-smoothing: antialiased"].join(";");this.emailNode=document.createElement("span"),
	this.emailNode.id="bt-pp-email",this.emailNode.style.cssText=t,this.container.appendChild(this.emailNode)},i.prototype._createLogoutNode=function(){var t=["color: #3d95ce","font-size: 11px",'font-family: "Helvetica Neue", Helvetica, Arial, sans-serif',"line-height: 20px","margin: 0 0 0 25px","padding: 0","background-color: transparent","border: 0","cursor: pointer","text-decoration: underline","float: right","-webkit-font-smoothing: antialiased","-moz-font-smoothing: antialiased","-ms-font-smoothing: antialiased","font-smoothing: antialiased"].join(";");this.logoutNode=document.createElement("button"),this.logoutNode.id="bt-pp-cancel",this.logoutNode.innerHTML=this.translation.cancel,this.logoutNode.setAttribute("type","button"),this.logoutNode.style.cssText=t,this.container.appendChild(this.logoutNode)},i.prototype.show=function(t){this.container.style.display="block",u.setTextContent(this.emailNode,t)},i.prototype.hide=function(){this.container.style.display="none"},i.prototype._handleClickLogout=function(t){c.preventDefault(t),this.bus.emit(a.events.PAYMENT_METHOD_CANCELLED,{source:l.PAYPAL_INTEGRATION_NAME})},i.prototype._handlePaymentMethodGenerated=function(t){var e;t.type===l.NONCE_TYPE&&(e=t&&t.details&&t.details.email?t.details.email:"",this.show(e))},i.prototype._handlePaymentMethodCancelled=function(t){t.source===l.PAYPAL_INTEGRATION_NAME&&this.hide()},i.prototype.teardown=function(){this.wrapper.removeChild(this.container),this.destructor.teardown(),this.bus.teardown()},e.exports=i}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{158:158,212:212,222:222,225:225,231:231,232:232,73:73,77:77,87:87}],216:[function(t,e,n){(function(n){"use strict";function i(t){this.options=t,this.wrapper=this.options.container||document.body,this.bus=new r({merchantUrl:n.location.href,channel:t.channel}),this._initialize()}var o=t(87),r=t(158),s=t(222),a=t(224);i.prototype._initialize=function(){this.createViewContainer(),this.options.enablePayPalButton?this.createCheckoutWithPayPalButton():this.createPayWithPayPalButton(),this.bus.on(r.events.PAYMENT_METHOD_GENERATED,o(this._handlePaymentMethodGenerated,this)),this.bus.on(r.events.PAYMENT_METHOD_CANCELLED,o(this._handlePaymentMethodCancelled,this))},i.prototype.createViewContainer=function(){this.container=document.createElement("div"),this.container.id="braintree-paypal-loggedout",this.wrapper.appendChild(this.container),this.loginNode=this.container},i.prototype.createPayWithPayPalButton=function(){var t=document.createElement("a"),e=new Image,n=["max-width: 100%","display: block","width: 100%","height: 100%","outline: none","border: 0"].join(";"),i=["display: block","width: 115px","height: 44px","overflow: hidden"].join(";");t.id="braintree-paypal-button",t.href="#",t.style.cssText=i,e.src=this.options.paypalAssetsUrl+"/pwpp/"+s.VERSION+"/images/pay-with-paypal.png",e.setAttribute("alt","Pay with PayPal"),e.style.cssText=n,t.appendChild(e),this.container.appendChild(t)},i.prototype.createCheckoutWithPayPalButton=function(){var t,e=document.createElement("script"),n={"data-merchant":"merchant-id","data-button":"checkout","data-type":"button","data-color":"blue","data-lc":a(this.options.locale)};e.src="//www.paypalobjects.com/api/button.js",e.async=!0;for(t in n)n.hasOwnProperty(t)&&e.setAttribute(t,n[t]);this.container.appendChild(e)},i.prototype.show=function(){this.container.style.display="block"},i.prototype.hide=function(){this.container.style.display="none"},i.prototype._handlePaymentMethodGenerated=function(t){t.type===s.NONCE_TYPE&&this.hide()},i.prototype._handlePaymentMethodCancelled=function(t){t.source===s.PAYPAL_INTEGRATION_NAME&&this.show()},i.prototype.teardown=function(){this.wrapper.removeChild(this.container),this.bus.teardown()},e.exports=i}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{158:158,222:222,224:224,87:87}],217:[function(t,e,n){(function(n){"use strict";function i(t){this.options=t,this.bus=new s({merchantUrl:n.location.href,channel:t.channel}),this.bus.on(s.events.UI_MODAL_DID_OPEN,a(this.lockWindowSize,this)),this.bus.on(s.events.UI_MODAL_DID_CLOSE,a(this.unlockWindowSize,this))}function o(t){var e=window.getComputedStyle?getComputedStyle(t):t.currentStyle;return{overflow:e.overflow||"",height:t.style.height||""}}function r(){return{html:{node:document.documentElement,styles:o(document.documentElement)},body:{node:document.body,styles:o(document.body)}}}var s=t(158),a=t(87),c=t(222);i.prototype.lockWindowSize=function(){this.defaultStyles=r(),document.documentElement.style.height="100%",document.documentElement.style.overflow="hidden",document.body.style.height="100%",document.body.style.overflow="hidden"},i.prototype.unlockWindowSize=function(){this.defaultStyles&&(document.documentElement.style.height=this.defaultStyles.html.styles.height,document.documentElement.style.overflow=this.defaultStyles.html.styles.overflow,document.body.style.height=this.defaultStyles.body.styles.height,document.body.style.overflow=this.defaultStyles.body.styles.overflow,delete this.defaultStyles)},i.prototype._handleUIModalDidOpen=function(t){t.source===c.PAYPAL_INTEGRATION_NAME&&this.lockWindowSize()},i.prototype._handleUIModalDidClose=function(t){t.source===c.PAYPAL_INTEGRATION_NAME&&this.unlockWindowSize()},i.prototype.teardown=function(){this.unlockWindowSize(),this.bus.teardown()},e.exports=i}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{158:158,222:222,87:87}],218:[function(t,e,n){(function(n){"use strict";function i(t){this.options=t||{},this.container=document.body,this.bus=new u({merchantUrl:n.location.href,channel:t.channel}),this.options.isDropin?this._open=this._openHeadless:this._attachBusEvents(),this._initialize()}var o=t(87),r=t(150),s=t(146),a=t(228),c=t(222),u=t(158),l=t(82),h=t(230).isIosUIWebView,p={position:"fixed",top:0,left:0,bottom:0,padding:0,margin:0,border:0,outline:"none",zIndex:20001,background:"#FFFFFF"};i.prototype._attachBusEvents=function(){this.bus.on(c.events.OPEN_MODAL,o(this.open,this))},i.prototype._initialize=function(){var t=this.options.isHermes?c.HERMES_FRAME_NAME:c.FRAME_NAME;a.isIos()?(this.el=document.createElement("div"),this.el.className=c.FRAME_CONTAINER_NAME,r(this.el.style,p,{height:this.options.height||"100%",width:this.options.width||"100%",overflow:"scroll"}),h()||(this.el.style.webkitOverflowScrolling="touch"),this.el.appendChild(l({src:this.options.src,name:t,scrolling:"yes",height:"100%",width:"100%",style:{position:"absolute",top:0,left:0,border:0,outline:"none",background:"#FFFFFF"}}))):this.el=l({src:this.options.src,name:t,scrolling:"yes",height:this.options.height||"100%",width:this.options.width||"100%",style:p})},i.prototype.isClosed=function(){return!this.container.contains(this.el)},i.prototype._openHeadless=function(){this.bus.emit(c.events.OPEN_MODAL)},i.prototype._open=function(){s(this.options.insertFrameFunction)?this.options.insertFrameFunction(this.el.src):this.container.appendChild(this.el),this.bus.emit(u.events.UI_MODAL_DID_OPEN,{source:c.PAYPAL_INTEGRATION_NAME})},i.prototype.open=function(){this.isClosed()&&this._open()},i.prototype.close=function(){this.isClosed()||(this.container.removeChild(this.el),this.bus.emit(u.events.UI_MODAL_DID_CLOSE,{source:c.PAYPAL_INTEGRATION_NAME}))},i.prototype.teardown=function(){this.close(),this.bus.teardown()},e.exports=i}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{146:146,150:150,158:158,222:222,228:228,230:230,82:82,87:87}],219:[function(t,e,n){(function(n){"use strict";function i(t){var e;this.options=t,this.spriteSrc=this.options.paypalAssetsUrl+"/pwpp/"+u.VERSION+"/images/pp_overlay_sprite.png",this.bus=new c({merchantUrl:n.location.href,channel:t.channel}),this.destructor=new a,e=l(this.options.locale,h),this.translation=e.translation,this._create(),this._setupEvents(),this.bus.on(c.events.UI_POPUP_DID_OPEN,r(this._handleUIPopupDidOpen,this)),this.bus.on(c.events.UI_POPUP_DID_CLOSE,r(this._handleUIPopupDidClose,this))}var o=t(73),r=t(87),s=t(146),a=t(77),c=t(158),u=t(222),l=t(225),h=t(212);i.prototype.open=function(){document.body.contains(this.el)||document.body.appendChild(this.el)},i.prototype.close=function(){document.body.contains(this.el)&&document.body.removeChild(this.el)},i.prototype._handleUIPopupDidClose=function(t){t.source===u.PAYPAL_INTEGRATION_NAME&&this.close()},i.prototype._handleUIPopupDidOpen=function(t){t.source===u.PAYPAL_INTEGRATION_NAME&&this.open()},i.prototype._create=function(){this.el=document.createElement("div"),this.el.className="bt-overlay",this._setStyles(this.el,["z-index: 20001","position: fixed","top: 0","left: 0","height: 100%","width: 100%","text-align: center","background: #000","background: rgba(0,0,0,0.7)",'-ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=52)"']),this.el.appendChild(this._createCloseIcon()),this.el.appendChild(this._createMessage())},i.prototype._createCloseIcon=function(){return this.closeIcon=document.createElement("div"),this.closeIcon.className="bt-close-overlay",this._setStyles(this.closeIcon,["position: absolute","top: 10px","right: 10px","cursor: pointer","background: url("+this.spriteSrc+") no-repeat 0 -67px","height: 14px","width: 14px"]),this.closeIcon},i.prototype._createMessage=function(){var t=document.createElement("div");return this._setStyles(t,["position: relative","top: 50%","max-width: 350px",'font-family: "HelveticaNeue", "HelveticaNeue-Light", "Helvetica Neue Light", helvetica, arial, sans-serif',"font-size: 14px","line-height: 20px","margin: -70px auto 0"]),t.appendChild(this._createLogo()),t.appendChild(this._createExplanation()),t.appendChild(this._createFocusLink()),t},i.prototype._createExplanation=function(){return this.explanation=document.createElement("div"),this._setStyles(this.explanation,["color: #FFF","margin-bottom: 20px"]),this.explanation.innerHTML=this.translation.overlay_text,this.explanation},i.prototype._createLogo=function(){var t=document.createElement("div");return this._setStyles(t,["background: url("+this.spriteSrc+") no-repeat 0 0","width: 94px","height: 25px","margin: 0 auto 26px auto"]),t},i.prototype._createFocusLink=function(){return this.focusLink=document.createElement("a"),this._setStyles(this.focusLink,["color: #009be1","cursor: pointer"]),this.focusLink.innerHTML=this.translation.continue_link,this.focusLink},i.prototype._setStyles=function(t,e){var n=e.join(";");t.style.cssText=n},i.prototype._setupEvents=function(){var t=this,e=r(this._handleClose,this),n=r(this._handleFocus,this);o.addEventListener(this.closeIcon,"click",e),o.addEventListener(this.focusLink,"click",n),this.destructor.registerFunctionForTeardown(function(){o.removeEventListener(t.closeIcon,"click",e),o.removeEventListener(t.focusLink,"click",n)})},i.prototype._handleClose=function(t){t.preventDefault(),this.close(),s(this.options.onClose)&&this.options.onClose()},i.prototype._handleFocus=function(t){t.preventDefault(),s(this.options.onFocus)&&this.options.onFocus()},i.prototype.teardown=function(){this.bus.teardown(),this.destructor.teardown(),this.close()},e.exports=i}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{146:146,158:158,212:212,222:222,225:225,73:73,77:77,87:87}],220:[function(t,e,n){(function(n){"use strict";function i(t){this.options=t||{},this.container=this.options.container||document.body,this.el=this.options.el,this.destructor=new a,this.bus=new c({merchantUrl:n.location.href,channel:t.channel}),this._initialize()}var o=t(73),r=t(87),s=t(146),a=t(77),c=t(158),u=t(222);i.prototype._initialize=function(){var t=this;s(this.el)||(null!=this.el?(this.el=o.normalizeElement(this.el),this.destructor.registerFunctionForTeardown(function(){t.clear()})):this.el=this.create()),this.bus.on(c.events.PAYMENT_METHOD_GENERATED,r(this._handlePaymentMethodGenerated,this)),this.bus.on(c.events.PAYMENT_METHOD_CANCELLED,r(this._handlePaymentMethodCancelled,this))},i.prototype.create=function(){var t=this,e=document.createElement("input");return e.name="payment_method_nonce",e.type="hidden",this.container.appendChild(e),this.destructor.registerFunctionForTeardown(function(){t.container.removeChild(e)}),e},i.prototype.value=function(t){s(this.el)?this.el(t):this.el.value=t},i.prototype.clear=function(){this.value("")},i.prototype._handlePaymentMethodCancelled=function(t){t.source===u.PAYPAL_INTEGRATION_NAME&&this.clear()},i.prototype._handlePaymentMethodGenerated=function(t){t.type===u.NONCE_TYPE&&this.value(t.nonce)},i.prototype.teardown=function(){this.destructor.teardown(),this.bus.teardown()},e.exports=i}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{146:146,158:158,222:222,73:73,77:77,87:87}],221:[function(t,e,n){(function(n){"use strict";function i(t){this.options=t,this.bus=new r({merchantUrl:n.location.href,channel:this.options.channel}),t.isHermes?(this.name=o.HERMES_POPUP_NAME,this.popupHeight=o.HERMES_POPUP_HEIGHT,this.popupWidth=o.HERMES_POPUP_WIDTH):(this.name=o.POPUP_NAME,this.popupHeight=o.POPUP_HEIGHT,this.popupWidth=o.POPUP_WIDTH)}var o=t(222),r=t(158),s=t(226);i.prototype._getPopupOptions=function(){return["height="+this.popupHeight,"width="+this.popupWidth,"top="+this._getTopPosition(),"left="+this._getLeftPosition(),o.POPUP_OPTIONS].join(",")},i.prototype._centerPosition=function(t,e,n){return(t-e)/2+n},i.prototype._getTopPosition=function(){var t=window.outerHeight||document.documentElement.clientHeight,e="undefined"==typeof window.screenY?window.screenTop:window.screenY;return this._centerPosition(t,this.popupHeight,e)},i.prototype._getLeftPosition=function(){var t=window.outerWidth||document.documentElement.clientWidth,e="undefined"==typeof window.screenX?window.screenLeft:window.screenX;return this._centerPosition(t,this.popupWidth,e)},i.prototype.isClosed=function(){return this.el?this.el.closed:void 0},i.prototype.open=function(){(!this.el||this.isClosed())&&(this.el=window.open(this.options.src,this.name,this._getPopupOptions()),this.focus(),this.bus.emit(r.events.UI_POPUP_DID_OPEN,{source:o.PAYPAL_INTEGRATION_NAME}))},i.prototype.close=function(){this.el&&((s.isIE8()&&!this.isClosed()||!s.isIE8())&&this.el.close(),this.bus.emit(r.events.UI_POPUP_DID_CLOSE,{source:o.PAYPAL_INTEGRATION_NAME}))},i.prototype.focus=function(){this.el&&this.el.focus()},i.prototype.teardown=function(){this.close(),this.bus.teardown()},e.exports=i}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{158:158,222:222,226:226}],222:[function(t,e,n){"use strict";var i,o="2.26.0",r=["GET_CLIENT_TOKEN","GET_CLIENT_OPTIONS","OPEN_MODAL","CLOSE_APP","FOCUS_APP"],s={LEGACY_ONETIME:"Legacy Onetime",HERMES_ONETIME:"Hermes Onetime",LEGACY_FUTURE_PAYMENTS:"Legacy Future Payments",HERMES_BILLING_AGREEMENTS:"Hermes Billing Agreements"};for(n.VERSION=o,n.POPUP_NAME="braintree_paypal_popup",n.HERMES_POPUP_NAME="PPFrameRedirect",n.FRAME_NAME="braintree-paypal-frame",n.HERMES_FRAME_NAME="PPFrameRedirect",n.FRAME_CONTAINER_NAME="braintree-paypal-frame-container",n.POPUP_PATH="/pwpp/"+o+"/html/braintree-frame.html",n.POPUP_OPTIONS="resizable,scrollbars",n.POPUP_HEIGHT=470,n.POPUP_WIDTH=410,n.HERMES_POPUP_HEIGHT=535,n.HERMES_POPUP_WIDTH=450,n.BRIDGE_FRAME_NAME="bt-proxy-frame",n.HERMES_SUPPORTED_CURRENCIES=["USD","GBP","EUR","AUD","CAD","DKK","NOK","PLN","SEK","CHF","TRY","BRL","MXN","ILS","SGD","THB","PHP","NZD","HKD","MYR","CZK","JPY","RUB"],n.HERMES_SUPPORTED_COUNTRIES=["US","GB","AU","CA","ES","FR","DE","IT","NL","NO","PL","CH","TR","DK","BE","AT","SE","HK","BR","XC"],n.NONCE_TYPE="PayPalAccount",n.PAYPAL_INTEGRATION_NAME="PayPal",n.ILLEGAL_XHR_ERROR="Illegal XHR request attempted",n.CONFIGURATION_TYPES=s,n.events={},i=0;i<r.length;i++)n.events[r[i]]="paypal:"+r[i]},{}],223:[function(t,e,n){"use strict";e.exports={us:"en_us",gb:"en_uk",uk:"en_uk",de:"de_de",fr:"fr_fr",it:"it_it",es:"es_es",ca:"en_ca",au:"en_au",at:"de_de",be:"en_us",ch:"de_de",dk:"da_dk",nl:"nl_nl",no:"no_no",pl:"pl_pl",se:"sv_se",tr:"tr_tr",bg:"en_us",cy:"en_us",hr:"en_us",is:"en_us",kh:"en_us",mt:"en_us",my:"en_us",ru:"ru_ru"}},{}],224:[function(t,e,n){"use strict";function i(t){return-1!==t.indexOf("_")&&5===t.length}function o(t){var e,n;for(e in s)s.hasOwnProperty(e)&&(e===t?n=s[e]:s[e]===t&&(n=s[e]));return n}function r(t){var e,n;return t=t?t.toLowerCase():"us",t=t.replace(/-/g,"_"),e=i(t)?t:o(t),e?(n=e.split("_"),[n[0],n[1].toUpperCase()].join("_")):"en_US"}var s=t(223);e.exports=r},{223:223}],225:[function(t,e,n){"use strict";function i(t){var e=t?t.toLowerCase().replace(/-/g,"_"):"us";return-1!==e.indexOf("_")&&(e=e.split("_")[1]),e=s[e]?e:"us","uk"===e&&(e="gb"),e}function o(t,e){return t=t.toLowerCase(),e[t]?e[t]:e.en_us}function r(t,e){var n=i(t),r=a(t),s=o(r,e);return{country:n,locale:r,translation:s}}var s=t(223),a=t(224);e.exports=r},{223:223,224:224}],226:[function(t,e,n){"use strict";function i(){return d.matchUserAgent("Android")&&!o()}function o(){return d.matchUserAgent("Chrome")||d.matchUserAgent("CriOS")}function r(){return d.matchUserAgent("Firefox")}function s(){return d.matchUserAgent("Trident")||d.matchUserAgent("MSIE")}function a(){return d.matchUserAgent(/MSIE 8\.0/)}function c(){return d.matchUserAgent("Opera")||d.matchUserAgent("OPR")}function u(){return c()&&"[object OperaMini]"===Object.prototype.toString.call(window.operamini)}function l(){return d.matchUserAgent("Safari")&&!o()&&!i()}function h(){return f.isIos()&&!o()&&!l()}function p(){var t=/Version\/[\w\.]+ Chrome\/[\w\.]+ Mobile/;return f.isAndroid()&&d.matchUserAgent(t)}var d=t(229),f=t(228);e.exports={isAndroid:i,isChrome:o,isFirefox:r,isIE:s,isIE8:a,isOpera:c,isOperaMini:u,isSafari:l,isIosWebView:h,isAndroidWebView:p}},{228:228,229:229}],227:[function(t,e,n){"use strict";function i(){return!o()&&(a.isAndroid()||a.isIpod()||a.isIphone()||s.matchUserAgent("IEMobile"))}function o(){return a.isIpad()||a.isAndroid()&&!s.matchUserAgent("Mobile")}function r(){return!i()&&!o()}var s=t(229),a=t(228);e.exports={isMobile:i,isTablet:o,isDesktop:r}},{228:228,229:229}],228:[function(t,e,n){"use strict";function i(){return u.matchUserAgent("Android")}function o(){return u.matchUserAgent("iPad")}function r(){return u.matchUserAgent("iPod")}function s(){return u.matchUserAgent("iPhone")&&!r()}function a(){return o()||r()||s()}function c(){return u.matchUserAgent("(iPhone|iPod|iPad) OS 9")}var u=t(229);e.exports={isAndroid:i,isIpad:o,isIpod:r,isIphone:s,isIos:a,isIos9:c}},{229:229}],229:[function(t,e,n){"use strict";function i(){return r}function o(t){var e=n.getNativeUserAgent(),i=e.match(t);return i?!0:!1}var r=window.navigator.userAgent;n.getNativeUserAgent=i,n.matchUserAgent=o},{}],230:[function(t,e,n){"use strict";function i(){return o()&&window.outerWidth<600}function o(){return y.test(m)}function r(){return Boolean(window.postMessage)}function s(){if(h.isOperaMini())return!1;if(d.isIos9()&&h.isChrome())return!0;if(p.isDesktop())return!0;if(p.isMobile()||p.isTablet()){if(h.isIE())return!1;if(d.isAndroid())return h.isAndroidWebView()?!1:!0;if(d.isIos())return h.isChrome()?!1:h.isSafari()&&f.matchUserAgent(/OS (?:8_1|8_0|8)(?!_\d)/i)?!1:h.isIosWebView()?!1:!0}return!1}function a(){if(h.isIE8())return!1;try{return window.self===window.top}catch(t){return!1}}function c(){return h.isIE()}function u(){var t=null,e="";try{new ActiveXObject("")}catch(n){e=n.name}try{t=Boolean(new ActiveXObject("htmlfile"))}catch(n){t=!1}return t="ReferenceError"!==e&&t===!1?!1:!0,!t}function l(){return h.isIosWebView()&&!window.indexedDB}var h=t(226),p=t(227),d=t(228),f=t(229),m=window.navigator.userAgent,y=/[Mm]obi|tablet|iOS|Android|IEMobile|Windows\sPhone/;e.exports={isMobile:i,isMobileDevice:o,detectedPostMessage:r,isPopupSupported:s,isOverlaySupported:a,isBridgeIframeRequired:c,isMetroBrowser:u,isIosUIWebView:l}},{226:226,227:227,228:228,229:229}],231:[function(t,e,n){"use strict";function i(t,e){var n="innerText";document&&document.body&&"textContent"in document.body&&(n="textContent"),t[n]=e}e.exports={setTextContent:i}},{}],232:[function(t,e,n){"use strict";function i(){var t,e,n="";for(t=0;32>t;t++)e=Math.floor(16*Math.random()),n+=e.toString(16);return n}function o(t){return/^(true|1)$/i.test(t)}function r(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\"/g,"&quot;").replace(/\'/g,"&apos;")}function s(t){var e,n,i,o,r,s,a,c,u=t.indexOf("?"),l={};if(u>=0&&(t=t.substr(u+1)),0===t.length)return null;for(e=t.split("&"),n=0,i=e.length;i>n;n++)o=e[n],r=o.indexOf("="),s=o.substr(0,r),c=o.substr(r+1),a=decodeURIComponent(c),a=a.replace(/</g,"&lt;").replace(/>/g,"&gt;"),"false"===a&&(a=!1),(null==a||"true"===a)&&(a=!0),l[s]=a;return l}function a(t){t.preventDefault?t.preventDefault():t.returnValue=!1}function c(t){var e;return e=Boolean(t.merchantConfiguration.paypal.amount)&&Boolean(t.merchantConfiguration.paypal.currency)?d.CONFIGURATION_TYPES.HERMES_ONETIME:d.CONFIGURATION_TYPES.LEGACY_ONETIME}function u(t){var e;return e=Boolean(t.gatewayConfiguration.paypal.billingAgreementsEnabled)?d.CONFIGURATION_TYPES.HERMES_BILLING_AGREEMENTS:d.CONFIGURATION_TYPES.LEGACY_FUTURE_PAYMENTS}function l(t){var e;return e=Boolean(t.merchantConfiguration.paypal.singleUse)?c(t):u(t)}function h(t){var e=l(t);return e===d.CONFIGURATION_TYPES.HERMES_ONETIME||e===d.CONFIGURATION_TYPES.HERMES_BILLING_AGREEMENTS}function p(t){var e=l(t);return e===d.CONFIGURATION_TYPES.HERMES_ONETIME}var d=t(222),f="function"==typeof String.prototype.trim?function(t){return t.trim()}:function(t){return t.replace(/^\s+|\s+$/,"")},m="function"==typeof window.btoa?function(t){return window.btoa(t)}:function(t){for(var e,n,i,o,r,s,a,c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",u="",l=0;l<t.length;)e=t.charCodeAt(l++),n=t.charCodeAt(l++),i=t.charCodeAt(l++),o=e>>2,r=(3&e)<<4|n>>4,s=(15&n)<<2|i>>6,a=63&i,isNaN(n)?s=a=64:isNaN(i)&&(a=64),u=u+c.charAt(o)+c.charAt(r)+c.charAt(s)+c.charAt(a);return u};e.exports={trim:f,btoa:m,generateUid:i,castToBoolean:o,htmlEscape:r,parseUrlParams:s,preventDefault:a,isHermesConfiguration:h,isOnetimeHermesConfiguration:p,getConfigurationType:l}},{222:222}]},{},[175])(175)});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(97), __webpack_require__(97), (function() { return this; }()), __webpack_require__(97)))

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * jQuery JavaScript Library v2.2.4
	 * http://jquery.com/
	 *
	 * Includes Sizzle.js
	 * http://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2016-05-20T17:23Z
	 */
	
	(function( global, factory ) {
	
		if ( typeof module === "object" && typeof module.exports === "object" ) {
			// For CommonJS and CommonJS-like environments where a proper `window`
			// is present, execute the factory and get jQuery.
			// For environments that do not have a `window` with a `document`
			// (such as Node.js), expose a factory as module.exports.
			// This accentuates the need for the creation of a real `window`.
			// e.g. var jQuery = require("jquery")(window);
			// See ticket #14549 for more info.
			module.exports = global.document ?
				factory( global, true ) :
				function( w ) {
					if ( !w.document ) {
						throw new Error( "jQuery requires a window with a document" );
					}
					return factory( w );
				};
		} else {
			factory( global );
		}
	
	// Pass this if window is not defined yet
	}(typeof window !== "undefined" ? window : this, function( window, noGlobal ) {
	
	// Support: Firefox 18+
	// Can't be in strict mode, several libs including ASP.NET trace
	// the stack via arguments.caller.callee and Firefox dies if
	// you try to trace through "use strict" call chains. (#13335)
	//"use strict";
	var arr = [];
	
	var document = window.document;
	
	var slice = arr.slice;
	
	var concat = arr.concat;
	
	var push = arr.push;
	
	var indexOf = arr.indexOf;
	
	var class2type = {};
	
	var toString = class2type.toString;
	
	var hasOwn = class2type.hasOwnProperty;
	
	var support = {};
	
	
	
	var
		version = "2.2.4",
	
		// Define a local copy of jQuery
		jQuery = function( selector, context ) {
	
			// The jQuery object is actually just the init constructor 'enhanced'
			// Need init if jQuery is called (just allow error to be thrown if not included)
			return new jQuery.fn.init( selector, context );
		},
	
		// Support: Android<4.1
		// Make sure we trim BOM and NBSP
		rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
	
		// Matches dashed string for camelizing
		rmsPrefix = /^-ms-/,
		rdashAlpha = /-([\da-z])/gi,
	
		// Used by jQuery.camelCase as callback to replace()
		fcamelCase = function( all, letter ) {
			return letter.toUpperCase();
		};
	
	jQuery.fn = jQuery.prototype = {
	
		// The current version of jQuery being used
		jquery: version,
	
		constructor: jQuery,
	
		// Start with an empty selector
		selector: "",
	
		// The default length of a jQuery object is 0
		length: 0,
	
		toArray: function() {
			return slice.call( this );
		},
	
		// Get the Nth element in the matched element set OR
		// Get the whole matched element set as a clean array
		get: function( num ) {
			return num != null ?
	
				// Return just the one element from the set
				( num < 0 ? this[ num + this.length ] : this[ num ] ) :
	
				// Return all the elements in a clean array
				slice.call( this );
		},
	
		// Take an array of elements and push it onto the stack
		// (returning the new matched element set)
		pushStack: function( elems ) {
	
			// Build a new jQuery matched element set
			var ret = jQuery.merge( this.constructor(), elems );
	
			// Add the old object onto the stack (as a reference)
			ret.prevObject = this;
			ret.context = this.context;
	
			// Return the newly-formed element set
			return ret;
		},
	
		// Execute a callback for every element in the matched set.
		each: function( callback ) {
			return jQuery.each( this, callback );
		},
	
		map: function( callback ) {
			return this.pushStack( jQuery.map( this, function( elem, i ) {
				return callback.call( elem, i, elem );
			} ) );
		},
	
		slice: function() {
			return this.pushStack( slice.apply( this, arguments ) );
		},
	
		first: function() {
			return this.eq( 0 );
		},
	
		last: function() {
			return this.eq( -1 );
		},
	
		eq: function( i ) {
			var len = this.length,
				j = +i + ( i < 0 ? len : 0 );
			return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
		},
	
		end: function() {
			return this.prevObject || this.constructor();
		},
	
		// For internal use only.
		// Behaves like an Array's method, not like a jQuery method.
		push: push,
		sort: arr.sort,
		splice: arr.splice
	};
	
	jQuery.extend = jQuery.fn.extend = function() {
		var options, name, src, copy, copyIsArray, clone,
			target = arguments[ 0 ] || {},
			i = 1,
			length = arguments.length,
			deep = false;
	
		// Handle a deep copy situation
		if ( typeof target === "boolean" ) {
			deep = target;
	
			// Skip the boolean and the target
			target = arguments[ i ] || {};
			i++;
		}
	
		// Handle case when target is a string or something (possible in deep copy)
		if ( typeof target !== "object" && !jQuery.isFunction( target ) ) {
			target = {};
		}
	
		// Extend jQuery itself if only one argument is passed
		if ( i === length ) {
			target = this;
			i--;
		}
	
		for ( ; i < length; i++ ) {
	
			// Only deal with non-null/undefined values
			if ( ( options = arguments[ i ] ) != null ) {
	
				// Extend the base object
				for ( name in options ) {
					src = target[ name ];
					copy = options[ name ];
	
					// Prevent never-ending loop
					if ( target === copy ) {
						continue;
					}
	
					// Recurse if we're merging plain objects or arrays
					if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
						( copyIsArray = jQuery.isArray( copy ) ) ) ) {
	
						if ( copyIsArray ) {
							copyIsArray = false;
							clone = src && jQuery.isArray( src ) ? src : [];
	
						} else {
							clone = src && jQuery.isPlainObject( src ) ? src : {};
						}
	
						// Never move original objects, clone them
						target[ name ] = jQuery.extend( deep, clone, copy );
	
					// Don't bring in undefined values
					} else if ( copy !== undefined ) {
						target[ name ] = copy;
					}
				}
			}
		}
	
		// Return the modified object
		return target;
	};
	
	jQuery.extend( {
	
		// Unique for each copy of jQuery on the page
		expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),
	
		// Assume jQuery is ready without the ready module
		isReady: true,
	
		error: function( msg ) {
			throw new Error( msg );
		},
	
		noop: function() {},
	
		isFunction: function( obj ) {
			return jQuery.type( obj ) === "function";
		},
	
		isArray: Array.isArray,
	
		isWindow: function( obj ) {
			return obj != null && obj === obj.window;
		},
	
		isNumeric: function( obj ) {
	
			// parseFloat NaNs numeric-cast false positives (null|true|false|"")
			// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
			// subtraction forces infinities to NaN
			// adding 1 corrects loss of precision from parseFloat (#15100)
			var realStringObj = obj && obj.toString();
			return !jQuery.isArray( obj ) && ( realStringObj - parseFloat( realStringObj ) + 1 ) >= 0;
		},
	
		isPlainObject: function( obj ) {
			var key;
	
			// Not plain objects:
			// - Any object or value whose internal [[Class]] property is not "[object Object]"
			// - DOM nodes
			// - window
			if ( jQuery.type( obj ) !== "object" || obj.nodeType || jQuery.isWindow( obj ) ) {
				return false;
			}
	
			// Not own constructor property must be Object
			if ( obj.constructor &&
					!hasOwn.call( obj, "constructor" ) &&
					!hasOwn.call( obj.constructor.prototype || {}, "isPrototypeOf" ) ) {
				return false;
			}
	
			// Own properties are enumerated firstly, so to speed up,
			// if last one is own, then all properties are own
			for ( key in obj ) {}
	
			return key === undefined || hasOwn.call( obj, key );
		},
	
		isEmptyObject: function( obj ) {
			var name;
			for ( name in obj ) {
				return false;
			}
			return true;
		},
	
		type: function( obj ) {
			if ( obj == null ) {
				return obj + "";
			}
	
			// Support: Android<4.0, iOS<6 (functionish RegExp)
			return typeof obj === "object" || typeof obj === "function" ?
				class2type[ toString.call( obj ) ] || "object" :
				typeof obj;
		},
	
		// Evaluates a script in a global context
		globalEval: function( code ) {
			var script,
				indirect = eval;
	
			code = jQuery.trim( code );
	
			if ( code ) {
	
				// If the code includes a valid, prologue position
				// strict mode pragma, execute code by injecting a
				// script tag into the document.
				if ( code.indexOf( "use strict" ) === 1 ) {
					script = document.createElement( "script" );
					script.text = code;
					document.head.appendChild( script ).parentNode.removeChild( script );
				} else {
	
					// Otherwise, avoid the DOM node creation, insertion
					// and removal by using an indirect global eval
	
					indirect( code );
				}
			}
		},
	
		// Convert dashed to camelCase; used by the css and data modules
		// Support: IE9-11+
		// Microsoft forgot to hump their vendor prefix (#9572)
		camelCase: function( string ) {
			return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
		},
	
		nodeName: function( elem, name ) {
			return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
		},
	
		each: function( obj, callback ) {
			var length, i = 0;
	
			if ( isArrayLike( obj ) ) {
				length = obj.length;
				for ( ; i < length; i++ ) {
					if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
						break;
					}
				}
			} else {
				for ( i in obj ) {
					if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
						break;
					}
				}
			}
	
			return obj;
		},
	
		// Support: Android<4.1
		trim: function( text ) {
			return text == null ?
				"" :
				( text + "" ).replace( rtrim, "" );
		},
	
		// results is for internal usage only
		makeArray: function( arr, results ) {
			var ret = results || [];
	
			if ( arr != null ) {
				if ( isArrayLike( Object( arr ) ) ) {
					jQuery.merge( ret,
						typeof arr === "string" ?
						[ arr ] : arr
					);
				} else {
					push.call( ret, arr );
				}
			}
	
			return ret;
		},
	
		inArray: function( elem, arr, i ) {
			return arr == null ? -1 : indexOf.call( arr, elem, i );
		},
	
		merge: function( first, second ) {
			var len = +second.length,
				j = 0,
				i = first.length;
	
			for ( ; j < len; j++ ) {
				first[ i++ ] = second[ j ];
			}
	
			first.length = i;
	
			return first;
		},
	
		grep: function( elems, callback, invert ) {
			var callbackInverse,
				matches = [],
				i = 0,
				length = elems.length,
				callbackExpect = !invert;
	
			// Go through the array, only saving the items
			// that pass the validator function
			for ( ; i < length; i++ ) {
				callbackInverse = !callback( elems[ i ], i );
				if ( callbackInverse !== callbackExpect ) {
					matches.push( elems[ i ] );
				}
			}
	
			return matches;
		},
	
		// arg is for internal usage only
		map: function( elems, callback, arg ) {
			var length, value,
				i = 0,
				ret = [];
	
			// Go through the array, translating each of the items to their new values
			if ( isArrayLike( elems ) ) {
				length = elems.length;
				for ( ; i < length; i++ ) {
					value = callback( elems[ i ], i, arg );
	
					if ( value != null ) {
						ret.push( value );
					}
				}
	
			// Go through every key on the object,
			} else {
				for ( i in elems ) {
					value = callback( elems[ i ], i, arg );
	
					if ( value != null ) {
						ret.push( value );
					}
				}
			}
	
			// Flatten any nested arrays
			return concat.apply( [], ret );
		},
	
		// A global GUID counter for objects
		guid: 1,
	
		// Bind a function to a context, optionally partially applying any
		// arguments.
		proxy: function( fn, context ) {
			var tmp, args, proxy;
	
			if ( typeof context === "string" ) {
				tmp = fn[ context ];
				context = fn;
				fn = tmp;
			}
	
			// Quick check to determine if target is callable, in the spec
			// this throws a TypeError, but we will just return undefined.
			if ( !jQuery.isFunction( fn ) ) {
				return undefined;
			}
	
			// Simulated bind
			args = slice.call( arguments, 2 );
			proxy = function() {
				return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
			};
	
			// Set the guid of unique handler to the same of original handler, so it can be removed
			proxy.guid = fn.guid = fn.guid || jQuery.guid++;
	
			return proxy;
		},
	
		now: Date.now,
	
		// jQuery.support is not used in Core but other projects attach their
		// properties to it so it needs to exist.
		support: support
	} );
	
	// JSHint would error on this code due to the Symbol not being defined in ES5.
	// Defining this global in .jshintrc would create a danger of using the global
	// unguarded in another place, it seems safer to just disable JSHint for these
	// three lines.
	/* jshint ignore: start */
	if ( typeof Symbol === "function" ) {
		jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
	}
	/* jshint ignore: end */
	
	// Populate the class2type map
	jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
	function( i, name ) {
		class2type[ "[object " + name + "]" ] = name.toLowerCase();
	} );
	
	function isArrayLike( obj ) {
	
		// Support: iOS 8.2 (not reproducible in simulator)
		// `in` check used to prevent JIT error (gh-2145)
		// hasOwn isn't used here due to false negatives
		// regarding Nodelist length in IE
		var length = !!obj && "length" in obj && obj.length,
			type = jQuery.type( obj );
	
		if ( type === "function" || jQuery.isWindow( obj ) ) {
			return false;
		}
	
		return type === "array" || length === 0 ||
			typeof length === "number" && length > 0 && ( length - 1 ) in obj;
	}
	var Sizzle =
	/*!
	 * Sizzle CSS Selector Engine v2.2.1
	 * http://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2015-10-17
	 */
	(function( window ) {
	
	var i,
		support,
		Expr,
		getText,
		isXML,
		tokenize,
		compile,
		select,
		outermostContext,
		sortInput,
		hasDuplicate,
	
		// Local document vars
		setDocument,
		document,
		docElem,
		documentIsHTML,
		rbuggyQSA,
		rbuggyMatches,
		matches,
		contains,
	
		// Instance-specific data
		expando = "sizzle" + 1 * new Date(),
		preferredDoc = window.document,
		dirruns = 0,
		done = 0,
		classCache = createCache(),
		tokenCache = createCache(),
		compilerCache = createCache(),
		sortOrder = function( a, b ) {
			if ( a === b ) {
				hasDuplicate = true;
			}
			return 0;
		},
	
		// General-purpose constants
		MAX_NEGATIVE = 1 << 31,
	
		// Instance methods
		hasOwn = ({}).hasOwnProperty,
		arr = [],
		pop = arr.pop,
		push_native = arr.push,
		push = arr.push,
		slice = arr.slice,
		// Use a stripped-down indexOf as it's faster than native
		// http://jsperf.com/thor-indexof-vs-for/5
		indexOf = function( list, elem ) {
			var i = 0,
				len = list.length;
			for ( ; i < len; i++ ) {
				if ( list[i] === elem ) {
					return i;
				}
			}
			return -1;
		},
	
		booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
	
		// Regular expressions
	
		// http://www.w3.org/TR/css3-selectors/#whitespace
		whitespace = "[\\x20\\t\\r\\n\\f]",
	
		// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
		identifier = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
	
		// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
		attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
			// Operator (capture 2)
			"*([*^$|!~]?=)" + whitespace +
			// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
			"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
			"*\\]",
	
		pseudos = ":(" + identifier + ")(?:\\((" +
			// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
			// 1. quoted (capture 3; capture 4 or capture 5)
			"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
			// 2. simple (capture 6)
			"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
			// 3. anything else (capture 2)
			".*" +
			")\\)|)",
	
		// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
		rwhitespace = new RegExp( whitespace + "+", "g" ),
		rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),
	
		rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
		rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),
	
		rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),
	
		rpseudo = new RegExp( pseudos ),
		ridentifier = new RegExp( "^" + identifier + "$" ),
	
		matchExpr = {
			"ID": new RegExp( "^#(" + identifier + ")" ),
			"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
			"TAG": new RegExp( "^(" + identifier + "|[*])" ),
			"ATTR": new RegExp( "^" + attributes ),
			"PSEUDO": new RegExp( "^" + pseudos ),
			"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
				"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
				"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
			"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
			// For use in libraries implementing .is()
			// We use this for POS matching in `select`
			"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
				whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
		},
	
		rinputs = /^(?:input|select|textarea|button)$/i,
		rheader = /^h\d$/i,
	
		rnative = /^[^{]+\{\s*\[native \w/,
	
		// Easily-parseable/retrievable ID or TAG or CLASS selectors
		rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
	
		rsibling = /[+~]/,
		rescape = /'|\\/g,
	
		// CSS escapes http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
		runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
		funescape = function( _, escaped, escapedWhitespace ) {
			var high = "0x" + escaped - 0x10000;
			// NaN means non-codepoint
			// Support: Firefox<24
			// Workaround erroneous numeric interpretation of +"0x"
			return high !== high || escapedWhitespace ?
				escaped :
				high < 0 ?
					// BMP codepoint
					String.fromCharCode( high + 0x10000 ) :
					// Supplemental Plane codepoint (surrogate pair)
					String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
		},
	
		// Used for iframes
		// See setDocument()
		// Removing the function wrapper causes a "Permission Denied"
		// error in IE
		unloadHandler = function() {
			setDocument();
		};
	
	// Optimize for push.apply( _, NodeList )
	try {
		push.apply(
			(arr = slice.call( preferredDoc.childNodes )),
			preferredDoc.childNodes
		);
		// Support: Android<4.0
		// Detect silently failing push.apply
		arr[ preferredDoc.childNodes.length ].nodeType;
	} catch ( e ) {
		push = { apply: arr.length ?
	
			// Leverage slice if possible
			function( target, els ) {
				push_native.apply( target, slice.call(els) );
			} :
	
			// Support: IE<9
			// Otherwise append directly
			function( target, els ) {
				var j = target.length,
					i = 0;
				// Can't trust NodeList.length
				while ( (target[j++] = els[i++]) ) {}
				target.length = j - 1;
			}
		};
	}
	
	function Sizzle( selector, context, results, seed ) {
		var m, i, elem, nid, nidselect, match, groups, newSelector,
			newContext = context && context.ownerDocument,
	
			// nodeType defaults to 9, since context defaults to document
			nodeType = context ? context.nodeType : 9;
	
		results = results || [];
	
		// Return early from calls with invalid selector or context
		if ( typeof selector !== "string" || !selector ||
			nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {
	
			return results;
		}
	
		// Try to shortcut find operations (as opposed to filters) in HTML documents
		if ( !seed ) {
	
			if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
				setDocument( context );
			}
			context = context || document;
	
			if ( documentIsHTML ) {
	
				// If the selector is sufficiently simple, try using a "get*By*" DOM method
				// (excepting DocumentFragment context, where the methods don't exist)
				if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {
	
					// ID selector
					if ( (m = match[1]) ) {
	
						// Document context
						if ( nodeType === 9 ) {
							if ( (elem = context.getElementById( m )) ) {
	
								// Support: IE, Opera, Webkit
								// TODO: identify versions
								// getElementById can match elements by name instead of ID
								if ( elem.id === m ) {
									results.push( elem );
									return results;
								}
							} else {
								return results;
							}
	
						// Element context
						} else {
	
							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( newContext && (elem = newContext.getElementById( m )) &&
								contains( context, elem ) &&
								elem.id === m ) {
	
								results.push( elem );
								return results;
							}
						}
	
					// Type selector
					} else if ( match[2] ) {
						push.apply( results, context.getElementsByTagName( selector ) );
						return results;
	
					// Class selector
					} else if ( (m = match[3]) && support.getElementsByClassName &&
						context.getElementsByClassName ) {
	
						push.apply( results, context.getElementsByClassName( m ) );
						return results;
					}
				}
	
				// Take advantage of querySelectorAll
				if ( support.qsa &&
					!compilerCache[ selector + " " ] &&
					(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {
	
					if ( nodeType !== 1 ) {
						newContext = context;
						newSelector = selector;
	
					// qSA looks outside Element context, which is not what we want
					// Thanks to Andrew Dupont for this workaround technique
					// Support: IE <=8
					// Exclude object elements
					} else if ( context.nodeName.toLowerCase() !== "object" ) {
	
						// Capture the context ID, setting it first if necessary
						if ( (nid = context.getAttribute( "id" )) ) {
							nid = nid.replace( rescape, "\\$&" );
						} else {
							context.setAttribute( "id", (nid = expando) );
						}
	
						// Prefix every selector in the list
						groups = tokenize( selector );
						i = groups.length;
						nidselect = ridentifier.test( nid ) ? "#" + nid : "[id='" + nid + "']";
						while ( i-- ) {
							groups[i] = nidselect + " " + toSelector( groups[i] );
						}
						newSelector = groups.join( "," );
	
						// Expand context for sibling selectors
						newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
							context;
					}
	
					if ( newSelector ) {
						try {
							push.apply( results,
								newContext.querySelectorAll( newSelector )
							);
							return results;
						} catch ( qsaError ) {
						} finally {
							if ( nid === expando ) {
								context.removeAttribute( "id" );
							}
						}
					}
				}
			}
		}
	
		// All others
		return select( selector.replace( rtrim, "$1" ), context, results, seed );
	}
	
	/**
	 * Create key-value caches of limited size
	 * @returns {function(string, object)} Returns the Object data after storing it on itself with
	 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
	 *	deleting the oldest entry
	 */
	function createCache() {
		var keys = [];
	
		function cache( key, value ) {
			// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
			if ( keys.push( key + " " ) > Expr.cacheLength ) {
				// Only keep the most recent entries
				delete cache[ keys.shift() ];
			}
			return (cache[ key + " " ] = value);
		}
		return cache;
	}
	
	/**
	 * Mark a function for special use by Sizzle
	 * @param {Function} fn The function to mark
	 */
	function markFunction( fn ) {
		fn[ expando ] = true;
		return fn;
	}
	
	/**
	 * Support testing using an element
	 * @param {Function} fn Passed the created div and expects a boolean result
	 */
	function assert( fn ) {
		var div = document.createElement("div");
	
		try {
			return !!fn( div );
		} catch (e) {
			return false;
		} finally {
			// Remove from its parent by default
			if ( div.parentNode ) {
				div.parentNode.removeChild( div );
			}
			// release memory in IE
			div = null;
		}
	}
	
	/**
	 * Adds the same handler for all of the specified attrs
	 * @param {String} attrs Pipe-separated list of attributes
	 * @param {Function} handler The method that will be applied
	 */
	function addHandle( attrs, handler ) {
		var arr = attrs.split("|"),
			i = arr.length;
	
		while ( i-- ) {
			Expr.attrHandle[ arr[i] ] = handler;
		}
	}
	
	/**
	 * Checks document order of two siblings
	 * @param {Element} a
	 * @param {Element} b
	 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
	 */
	function siblingCheck( a, b ) {
		var cur = b && a,
			diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
				( ~b.sourceIndex || MAX_NEGATIVE ) -
				( ~a.sourceIndex || MAX_NEGATIVE );
	
		// Use IE sourceIndex if available on both nodes
		if ( diff ) {
			return diff;
		}
	
		// Check if b follows a
		if ( cur ) {
			while ( (cur = cur.nextSibling) ) {
				if ( cur === b ) {
					return -1;
				}
			}
		}
	
		return a ? 1 : -1;
	}
	
	/**
	 * Returns a function to use in pseudos for input types
	 * @param {String} type
	 */
	function createInputPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === type;
		};
	}
	
	/**
	 * Returns a function to use in pseudos for buttons
	 * @param {String} type
	 */
	function createButtonPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return (name === "input" || name === "button") && elem.type === type;
		};
	}
	
	/**
	 * Returns a function to use in pseudos for positionals
	 * @param {Function} fn
	 */
	function createPositionalPseudo( fn ) {
		return markFunction(function( argument ) {
			argument = +argument;
			return markFunction(function( seed, matches ) {
				var j,
					matchIndexes = fn( [], seed.length, argument ),
					i = matchIndexes.length;
	
				// Match elements found at the specified indexes
				while ( i-- ) {
					if ( seed[ (j = matchIndexes[i]) ] ) {
						seed[j] = !(matches[j] = seed[j]);
					}
				}
			});
		});
	}
	
	/**
	 * Checks a node for validity as a Sizzle context
	 * @param {Element|Object=} context
	 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
	 */
	function testContext( context ) {
		return context && typeof context.getElementsByTagName !== "undefined" && context;
	}
	
	// Expose support vars for convenience
	support = Sizzle.support = {};
	
	/**
	 * Detects XML nodes
	 * @param {Element|Object} elem An element or a document
	 * @returns {Boolean} True iff elem is a non-HTML XML node
	 */
	isXML = Sizzle.isXML = function( elem ) {
		// documentElement is verified for cases where it doesn't yet exist
		// (such as loading iframes in IE - #4833)
		var documentElement = elem && (elem.ownerDocument || elem).documentElement;
		return documentElement ? documentElement.nodeName !== "HTML" : false;
	};
	
	/**
	 * Sets document-related variables once based on the current document
	 * @param {Element|Object} [doc] An element or document object to use to set the document
	 * @returns {Object} Returns the current document
	 */
	setDocument = Sizzle.setDocument = function( node ) {
		var hasCompare, parent,
			doc = node ? node.ownerDocument || node : preferredDoc;
	
		// Return early if doc is invalid or already selected
		if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
			return document;
		}
	
		// Update global variables
		document = doc;
		docElem = document.documentElement;
		documentIsHTML = !isXML( document );
	
		// Support: IE 9-11, Edge
		// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
		if ( (parent = document.defaultView) && parent.top !== parent ) {
			// Support: IE 11
			if ( parent.addEventListener ) {
				parent.addEventListener( "unload", unloadHandler, false );
	
			// Support: IE 9 - 10 only
			} else if ( parent.attachEvent ) {
				parent.attachEvent( "onunload", unloadHandler );
			}
		}
	
		/* Attributes
		---------------------------------------------------------------------- */
	
		// Support: IE<8
		// Verify that getAttribute really returns attributes and not properties
		// (excepting IE8 booleans)
		support.attributes = assert(function( div ) {
			div.className = "i";
			return !div.getAttribute("className");
		});
	
		/* getElement(s)By*
		---------------------------------------------------------------------- */
	
		// Check if getElementsByTagName("*") returns only elements
		support.getElementsByTagName = assert(function( div ) {
			div.appendChild( document.createComment("") );
			return !div.getElementsByTagName("*").length;
		});
	
		// Support: IE<9
		support.getElementsByClassName = rnative.test( document.getElementsByClassName );
	
		// Support: IE<10
		// Check if getElementById returns elements by name
		// The broken getElementById methods don't pick up programatically-set names,
		// so use a roundabout getElementsByName test
		support.getById = assert(function( div ) {
			docElem.appendChild( div ).id = expando;
			return !document.getElementsByName || !document.getElementsByName( expando ).length;
		});
	
		// ID find and filter
		if ( support.getById ) {
			Expr.find["ID"] = function( id, context ) {
				if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
					var m = context.getElementById( id );
					return m ? [ m ] : [];
				}
			};
			Expr.filter["ID"] = function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					return elem.getAttribute("id") === attrId;
				};
			};
		} else {
			// Support: IE6/7
			// getElementById is not reliable as a find shortcut
			delete Expr.find["ID"];
	
			Expr.filter["ID"] =  function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					var node = typeof elem.getAttributeNode !== "undefined" &&
						elem.getAttributeNode("id");
					return node && node.value === attrId;
				};
			};
		}
	
		// Tag
		Expr.find["TAG"] = support.getElementsByTagName ?
			function( tag, context ) {
				if ( typeof context.getElementsByTagName !== "undefined" ) {
					return context.getElementsByTagName( tag );
	
				// DocumentFragment nodes don't have gEBTN
				} else if ( support.qsa ) {
					return context.querySelectorAll( tag );
				}
			} :
	
			function( tag, context ) {
				var elem,
					tmp = [],
					i = 0,
					// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
					results = context.getElementsByTagName( tag );
	
				// Filter out possible comments
				if ( tag === "*" ) {
					while ( (elem = results[i++]) ) {
						if ( elem.nodeType === 1 ) {
							tmp.push( elem );
						}
					}
	
					return tmp;
				}
				return results;
			};
	
		// Class
		Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
			if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
				return context.getElementsByClassName( className );
			}
		};
	
		/* QSA/matchesSelector
		---------------------------------------------------------------------- */
	
		// QSA and matchesSelector support
	
		// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
		rbuggyMatches = [];
	
		// qSa(:focus) reports false when true (Chrome 21)
		// We allow this because of a bug in IE8/9 that throws an error
		// whenever `document.activeElement` is accessed on an iframe
		// So, we allow :focus to pass through QSA all the time to avoid the IE error
		// See http://bugs.jquery.com/ticket/13378
		rbuggyQSA = [];
	
		if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
			// Build QSA regex
			// Regex strategy adopted from Diego Perini
			assert(function( div ) {
				// Select is set to empty string on purpose
				// This is to test IE's treatment of not explicitly
				// setting a boolean content attribute,
				// since its presence should be enough
				// http://bugs.jquery.com/ticket/12359
				docElem.appendChild( div ).innerHTML = "<a id='" + expando + "'></a>" +
					"<select id='" + expando + "-\r\\' msallowcapture=''>" +
					"<option selected=''></option></select>";
	
				// Support: IE8, Opera 11-12.16
				// Nothing should be selected when empty strings follow ^= or $= or *=
				// The test attribute must be unknown in Opera but "safe" for WinRT
				// http://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
				if ( div.querySelectorAll("[msallowcapture^='']").length ) {
					rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
				}
	
				// Support: IE8
				// Boolean attributes and "value" are not treated correctly
				if ( !div.querySelectorAll("[selected]").length ) {
					rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
				}
	
				// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
				if ( !div.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
					rbuggyQSA.push("~=");
				}
	
				// Webkit/Opera - :checked should return selected option elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				// IE8 throws error here and will not see later tests
				if ( !div.querySelectorAll(":checked").length ) {
					rbuggyQSA.push(":checked");
				}
	
				// Support: Safari 8+, iOS 8+
				// https://bugs.webkit.org/show_bug.cgi?id=136851
				// In-page `selector#id sibing-combinator selector` fails
				if ( !div.querySelectorAll( "a#" + expando + "+*" ).length ) {
					rbuggyQSA.push(".#.+[+~]");
				}
			});
	
			assert(function( div ) {
				// Support: Windows 8 Native Apps
				// The type and name attributes are restricted during .innerHTML assignment
				var input = document.createElement("input");
				input.setAttribute( "type", "hidden" );
				div.appendChild( input ).setAttribute( "name", "D" );
	
				// Support: IE8
				// Enforce case-sensitivity of name attribute
				if ( div.querySelectorAll("[name=d]").length ) {
					rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
				}
	
				// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
				// IE8 throws error here and will not see later tests
				if ( !div.querySelectorAll(":enabled").length ) {
					rbuggyQSA.push( ":enabled", ":disabled" );
				}
	
				// Opera 10-11 does not throw on post-comma invalid pseudos
				div.querySelectorAll("*,:x");
				rbuggyQSA.push(",.*:");
			});
		}
	
		if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
			docElem.webkitMatchesSelector ||
			docElem.mozMatchesSelector ||
			docElem.oMatchesSelector ||
			docElem.msMatchesSelector) )) ) {
	
			assert(function( div ) {
				// Check to see if it's possible to do matchesSelector
				// on a disconnected node (IE 9)
				support.disconnectedMatch = matches.call( div, "div" );
	
				// This should fail with an exception
				// Gecko does not error, returns false instead
				matches.call( div, "[s!='']:x" );
				rbuggyMatches.push( "!=", pseudos );
			});
		}
	
		rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
		rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );
	
		/* Contains
		---------------------------------------------------------------------- */
		hasCompare = rnative.test( docElem.compareDocumentPosition );
	
		// Element contains another
		// Purposefully self-exclusive
		// As in, an element does not contain itself
		contains = hasCompare || rnative.test( docElem.contains ) ?
			function( a, b ) {
				var adown = a.nodeType === 9 ? a.documentElement : a,
					bup = b && b.parentNode;
				return a === bup || !!( bup && bup.nodeType === 1 && (
					adown.contains ?
						adown.contains( bup ) :
						a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
				));
			} :
			function( a, b ) {
				if ( b ) {
					while ( (b = b.parentNode) ) {
						if ( b === a ) {
							return true;
						}
					}
				}
				return false;
			};
	
		/* Sorting
		---------------------------------------------------------------------- */
	
		// Document order sorting
		sortOrder = hasCompare ?
		function( a, b ) {
	
			// Flag for duplicate removal
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}
	
			// Sort on method existence if only one input has compareDocumentPosition
			var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
			if ( compare ) {
				return compare;
			}
	
			// Calculate position if both inputs belong to the same document
			compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
				a.compareDocumentPosition( b ) :
	
				// Otherwise we know they are disconnected
				1;
	
			// Disconnected nodes
			if ( compare & 1 ||
				(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {
	
				// Choose the first element that is related to our preferred document
				if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
					return -1;
				}
				if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
					return 1;
				}
	
				// Maintain original order
				return sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;
			}
	
			return compare & 4 ? -1 : 1;
		} :
		function( a, b ) {
			// Exit early if the nodes are identical
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}
	
			var cur,
				i = 0,
				aup = a.parentNode,
				bup = b.parentNode,
				ap = [ a ],
				bp = [ b ];
	
			// Parentless nodes are either documents or disconnected
			if ( !aup || !bup ) {
				return a === document ? -1 :
					b === document ? 1 :
					aup ? -1 :
					bup ? 1 :
					sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;
	
			// If the nodes are siblings, we can do a quick check
			} else if ( aup === bup ) {
				return siblingCheck( a, b );
			}
	
			// Otherwise we need full lists of their ancestors for comparison
			cur = a;
			while ( (cur = cur.parentNode) ) {
				ap.unshift( cur );
			}
			cur = b;
			while ( (cur = cur.parentNode) ) {
				bp.unshift( cur );
			}
	
			// Walk down the tree looking for a discrepancy
			while ( ap[i] === bp[i] ) {
				i++;
			}
	
			return i ?
				// Do a sibling check if the nodes have a common ancestor
				siblingCheck( ap[i], bp[i] ) :
	
				// Otherwise nodes in our document sort first
				ap[i] === preferredDoc ? -1 :
				bp[i] === preferredDoc ? 1 :
				0;
		};
	
		return document;
	};
	
	Sizzle.matches = function( expr, elements ) {
		return Sizzle( expr, null, null, elements );
	};
	
	Sizzle.matchesSelector = function( elem, expr ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}
	
		// Make sure that attribute selectors are quoted
		expr = expr.replace( rattributeQuotes, "='$1']" );
	
		if ( support.matchesSelector && documentIsHTML &&
			!compilerCache[ expr + " " ] &&
			( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
			( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {
	
			try {
				var ret = matches.call( elem, expr );
	
				// IE 9's matchesSelector returns false on disconnected nodes
				if ( ret || support.disconnectedMatch ||
						// As well, disconnected nodes are said to be in a document
						// fragment in IE 9
						elem.document && elem.document.nodeType !== 11 ) {
					return ret;
				}
			} catch (e) {}
		}
	
		return Sizzle( expr, document, null, [ elem ] ).length > 0;
	};
	
	Sizzle.contains = function( context, elem ) {
		// Set document vars if needed
		if ( ( context.ownerDocument || context ) !== document ) {
			setDocument( context );
		}
		return contains( context, elem );
	};
	
	Sizzle.attr = function( elem, name ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}
	
		var fn = Expr.attrHandle[ name.toLowerCase() ],
			// Don't get fooled by Object.prototype properties (jQuery #13807)
			val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
				fn( elem, name, !documentIsHTML ) :
				undefined;
	
		return val !== undefined ?
			val :
			support.attributes || !documentIsHTML ?
				elem.getAttribute( name ) :
				(val = elem.getAttributeNode(name)) && val.specified ?
					val.value :
					null;
	};
	
	Sizzle.error = function( msg ) {
		throw new Error( "Syntax error, unrecognized expression: " + msg );
	};
	
	/**
	 * Document sorting and removing duplicates
	 * @param {ArrayLike} results
	 */
	Sizzle.uniqueSort = function( results ) {
		var elem,
			duplicates = [],
			j = 0,
			i = 0;
	
		// Unless we *know* we can detect duplicates, assume their presence
		hasDuplicate = !support.detectDuplicates;
		sortInput = !support.sortStable && results.slice( 0 );
		results.sort( sortOrder );
	
		if ( hasDuplicate ) {
			while ( (elem = results[i++]) ) {
				if ( elem === results[ i ] ) {
					j = duplicates.push( i );
				}
			}
			while ( j-- ) {
				results.splice( duplicates[ j ], 1 );
			}
		}
	
		// Clear input after sorting to release objects
		// See https://github.com/jquery/sizzle/pull/225
		sortInput = null;
	
		return results;
	};
	
	/**
	 * Utility function for retrieving the text value of an array of DOM nodes
	 * @param {Array|Element} elem
	 */
	getText = Sizzle.getText = function( elem ) {
		var node,
			ret = "",
			i = 0,
			nodeType = elem.nodeType;
	
		if ( !nodeType ) {
			// If no nodeType, this is expected to be an array
			while ( (node = elem[i++]) ) {
				// Do not traverse comment nodes
				ret += getText( node );
			}
		} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
			// Use textContent for elements
			// innerText usage removed for consistency of new lines (jQuery #11153)
			if ( typeof elem.textContent === "string" ) {
				return elem.textContent;
			} else {
				// Traverse its children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					ret += getText( elem );
				}
			}
		} else if ( nodeType === 3 || nodeType === 4 ) {
			return elem.nodeValue;
		}
		// Do not include comment or processing instruction nodes
	
		return ret;
	};
	
	Expr = Sizzle.selectors = {
	
		// Can be adjusted by the user
		cacheLength: 50,
	
		createPseudo: markFunction,
	
		match: matchExpr,
	
		attrHandle: {},
	
		find: {},
	
		relative: {
			">": { dir: "parentNode", first: true },
			" ": { dir: "parentNode" },
			"+": { dir: "previousSibling", first: true },
			"~": { dir: "previousSibling" }
		},
	
		preFilter: {
			"ATTR": function( match ) {
				match[1] = match[1].replace( runescape, funescape );
	
				// Move the given value to match[3] whether quoted or unquoted
				match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );
	
				if ( match[2] === "~=" ) {
					match[3] = " " + match[3] + " ";
				}
	
				return match.slice( 0, 4 );
			},
	
			"CHILD": function( match ) {
				/* matches from matchExpr["CHILD"]
					1 type (only|nth|...)
					2 what (child|of-type)
					3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
					4 xn-component of xn+y argument ([+-]?\d*n|)
					5 sign of xn-component
					6 x of xn-component
					7 sign of y-component
					8 y of y-component
				*/
				match[1] = match[1].toLowerCase();
	
				if ( match[1].slice( 0, 3 ) === "nth" ) {
					// nth-* requires argument
					if ( !match[3] ) {
						Sizzle.error( match[0] );
					}
	
					// numeric x and y parameters for Expr.filter.CHILD
					// remember that false/true cast respectively to 0/1
					match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
					match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );
	
				// other types prohibit arguments
				} else if ( match[3] ) {
					Sizzle.error( match[0] );
				}
	
				return match;
			},
	
			"PSEUDO": function( match ) {
				var excess,
					unquoted = !match[6] && match[2];
	
				if ( matchExpr["CHILD"].test( match[0] ) ) {
					return null;
				}
	
				// Accept quoted arguments as-is
				if ( match[3] ) {
					match[2] = match[4] || match[5] || "";
	
				// Strip excess characters from unquoted arguments
				} else if ( unquoted && rpseudo.test( unquoted ) &&
					// Get excess from tokenize (recursively)
					(excess = tokenize( unquoted, true )) &&
					// advance to the next closing parenthesis
					(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {
	
					// excess is a negative index
					match[0] = match[0].slice( 0, excess );
					match[2] = unquoted.slice( 0, excess );
				}
	
				// Return only captures needed by the pseudo filter method (type and argument)
				return match.slice( 0, 3 );
			}
		},
	
		filter: {
	
			"TAG": function( nodeNameSelector ) {
				var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
				return nodeNameSelector === "*" ?
					function() { return true; } :
					function( elem ) {
						return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
					};
			},
	
			"CLASS": function( className ) {
				var pattern = classCache[ className + " " ];
	
				return pattern ||
					(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
					classCache( className, function( elem ) {
						return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
					});
			},
	
			"ATTR": function( name, operator, check ) {
				return function( elem ) {
					var result = Sizzle.attr( elem, name );
	
					if ( result == null ) {
						return operator === "!=";
					}
					if ( !operator ) {
						return true;
					}
	
					result += "";
	
					return operator === "=" ? result === check :
						operator === "!=" ? result !== check :
						operator === "^=" ? check && result.indexOf( check ) === 0 :
						operator === "*=" ? check && result.indexOf( check ) > -1 :
						operator === "$=" ? check && result.slice( -check.length ) === check :
						operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
						operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
						false;
				};
			},
	
			"CHILD": function( type, what, argument, first, last ) {
				var simple = type.slice( 0, 3 ) !== "nth",
					forward = type.slice( -4 ) !== "last",
					ofType = what === "of-type";
	
				return first === 1 && last === 0 ?
	
					// Shortcut for :nth-*(n)
					function( elem ) {
						return !!elem.parentNode;
					} :
	
					function( elem, context, xml ) {
						var cache, uniqueCache, outerCache, node, nodeIndex, start,
							dir = simple !== forward ? "nextSibling" : "previousSibling",
							parent = elem.parentNode,
							name = ofType && elem.nodeName.toLowerCase(),
							useCache = !xml && !ofType,
							diff = false;
	
						if ( parent ) {
	
							// :(first|last|only)-(child|of-type)
							if ( simple ) {
								while ( dir ) {
									node = elem;
									while ( (node = node[ dir ]) ) {
										if ( ofType ?
											node.nodeName.toLowerCase() === name :
											node.nodeType === 1 ) {
	
											return false;
										}
									}
									// Reverse direction for :only-* (if we haven't yet done so)
									start = dir = type === "only" && !start && "nextSibling";
								}
								return true;
							}
	
							start = [ forward ? parent.firstChild : parent.lastChild ];
	
							// non-xml :nth-child(...) stores cache data on `parent`
							if ( forward && useCache ) {
	
								// Seek `elem` from a previously-cached index
	
								// ...in a gzip-friendly way
								node = parent;
								outerCache = node[ expando ] || (node[ expando ] = {});
	
								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});
	
								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex && cache[ 2 ];
								node = nodeIndex && parent.childNodes[ nodeIndex ];
	
								while ( (node = ++nodeIndex && node && node[ dir ] ||
	
									// Fallback to seeking `elem` from the start
									(diff = nodeIndex = 0) || start.pop()) ) {
	
									// When found, cache indexes on `parent` and break
									if ( node.nodeType === 1 && ++diff && node === elem ) {
										uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
										break;
									}
								}
	
							} else {
								// Use previously-cached element index if available
								if ( useCache ) {
									// ...in a gzip-friendly way
									node = elem;
									outerCache = node[ expando ] || (node[ expando ] = {});
	
									// Support: IE <9 only
									// Defend against cloned attroperties (jQuery gh-1709)
									uniqueCache = outerCache[ node.uniqueID ] ||
										(outerCache[ node.uniqueID ] = {});
	
									cache = uniqueCache[ type ] || [];
									nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
									diff = nodeIndex;
								}
	
								// xml :nth-child(...)
								// or :nth-last-child(...) or :nth(-last)?-of-type(...)
								if ( diff === false ) {
									// Use the same loop as above to seek `elem` from the start
									while ( (node = ++nodeIndex && node && node[ dir ] ||
										(diff = nodeIndex = 0) || start.pop()) ) {
	
										if ( ( ofType ?
											node.nodeName.toLowerCase() === name :
											node.nodeType === 1 ) &&
											++diff ) {
	
											// Cache the index of each encountered element
											if ( useCache ) {
												outerCache = node[ expando ] || (node[ expando ] = {});
	
												// Support: IE <9 only
												// Defend against cloned attroperties (jQuery gh-1709)
												uniqueCache = outerCache[ node.uniqueID ] ||
													(outerCache[ node.uniqueID ] = {});
	
												uniqueCache[ type ] = [ dirruns, diff ];
											}
	
											if ( node === elem ) {
												break;
											}
										}
									}
								}
							}
	
							// Incorporate the offset, then check against cycle size
							diff -= last;
							return diff === first || ( diff % first === 0 && diff / first >= 0 );
						}
					};
			},
	
			"PSEUDO": function( pseudo, argument ) {
				// pseudo-class names are case-insensitive
				// http://www.w3.org/TR/selectors/#pseudo-classes
				// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
				// Remember that setFilters inherits from pseudos
				var args,
					fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
						Sizzle.error( "unsupported pseudo: " + pseudo );
	
				// The user may use createPseudo to indicate that
				// arguments are needed to create the filter function
				// just as Sizzle does
				if ( fn[ expando ] ) {
					return fn( argument );
				}
	
				// But maintain support for old signatures
				if ( fn.length > 1 ) {
					args = [ pseudo, pseudo, "", argument ];
					return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
						markFunction(function( seed, matches ) {
							var idx,
								matched = fn( seed, argument ),
								i = matched.length;
							while ( i-- ) {
								idx = indexOf( seed, matched[i] );
								seed[ idx ] = !( matches[ idx ] = matched[i] );
							}
						}) :
						function( elem ) {
							return fn( elem, 0, args );
						};
				}
	
				return fn;
			}
		},
	
		pseudos: {
			// Potentially complex pseudos
			"not": markFunction(function( selector ) {
				// Trim the selector passed to compile
				// to avoid treating leading and trailing
				// spaces as combinators
				var input = [],
					results = [],
					matcher = compile( selector.replace( rtrim, "$1" ) );
	
				return matcher[ expando ] ?
					markFunction(function( seed, matches, context, xml ) {
						var elem,
							unmatched = matcher( seed, null, xml, [] ),
							i = seed.length;
	
						// Match elements unmatched by `matcher`
						while ( i-- ) {
							if ( (elem = unmatched[i]) ) {
								seed[i] = !(matches[i] = elem);
							}
						}
					}) :
					function( elem, context, xml ) {
						input[0] = elem;
						matcher( input, null, xml, results );
						// Don't keep the element (issue #299)
						input[0] = null;
						return !results.pop();
					};
			}),
	
			"has": markFunction(function( selector ) {
				return function( elem ) {
					return Sizzle( selector, elem ).length > 0;
				};
			}),
	
			"contains": markFunction(function( text ) {
				text = text.replace( runescape, funescape );
				return function( elem ) {
					return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
				};
			}),
	
			// "Whether an element is represented by a :lang() selector
			// is based solely on the element's language value
			// being equal to the identifier C,
			// or beginning with the identifier C immediately followed by "-".
			// The matching of C against the element's language value is performed case-insensitively.
			// The identifier C does not have to be a valid language name."
			// http://www.w3.org/TR/selectors/#lang-pseudo
			"lang": markFunction( function( lang ) {
				// lang value must be a valid identifier
				if ( !ridentifier.test(lang || "") ) {
					Sizzle.error( "unsupported lang: " + lang );
				}
				lang = lang.replace( runescape, funescape ).toLowerCase();
				return function( elem ) {
					var elemLang;
					do {
						if ( (elemLang = documentIsHTML ?
							elem.lang :
							elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {
	
							elemLang = elemLang.toLowerCase();
							return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
						}
					} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
					return false;
				};
			}),
	
			// Miscellaneous
			"target": function( elem ) {
				var hash = window.location && window.location.hash;
				return hash && hash.slice( 1 ) === elem.id;
			},
	
			"root": function( elem ) {
				return elem === docElem;
			},
	
			"focus": function( elem ) {
				return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
			},
	
			// Boolean properties
			"enabled": function( elem ) {
				return elem.disabled === false;
			},
	
			"disabled": function( elem ) {
				return elem.disabled === true;
			},
	
			"checked": function( elem ) {
				// In CSS3, :checked should return both checked and selected elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				var nodeName = elem.nodeName.toLowerCase();
				return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
			},
	
			"selected": function( elem ) {
				// Accessing this property makes selected-by-default
				// options in Safari work properly
				if ( elem.parentNode ) {
					elem.parentNode.selectedIndex;
				}
	
				return elem.selected === true;
			},
	
			// Contents
			"empty": function( elem ) {
				// http://www.w3.org/TR/selectors/#empty-pseudo
				// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
				//   but not by others (comment: 8; processing instruction: 7; etc.)
				// nodeType < 6 works because attributes (2) do not appear as children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					if ( elem.nodeType < 6 ) {
						return false;
					}
				}
				return true;
			},
	
			"parent": function( elem ) {
				return !Expr.pseudos["empty"]( elem );
			},
	
			// Element/input types
			"header": function( elem ) {
				return rheader.test( elem.nodeName );
			},
	
			"input": function( elem ) {
				return rinputs.test( elem.nodeName );
			},
	
			"button": function( elem ) {
				var name = elem.nodeName.toLowerCase();
				return name === "input" && elem.type === "button" || name === "button";
			},
	
			"text": function( elem ) {
				var attr;
				return elem.nodeName.toLowerCase() === "input" &&
					elem.type === "text" &&
	
					// Support: IE<8
					// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
					( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
			},
	
			// Position-in-collection
			"first": createPositionalPseudo(function() {
				return [ 0 ];
			}),
	
			"last": createPositionalPseudo(function( matchIndexes, length ) {
				return [ length - 1 ];
			}),
	
			"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
				return [ argument < 0 ? argument + length : argument ];
			}),
	
			"even": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 0;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),
	
			"odd": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 1;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),
	
			"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; --i >= 0; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),
	
			"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; ++i < length; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			})
		}
	};
	
	Expr.pseudos["nth"] = Expr.pseudos["eq"];
	
	// Add button/input type pseudos
	for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
		Expr.pseudos[ i ] = createInputPseudo( i );
	}
	for ( i in { submit: true, reset: true } ) {
		Expr.pseudos[ i ] = createButtonPseudo( i );
	}
	
	// Easy API for creating new setFilters
	function setFilters() {}
	setFilters.prototype = Expr.filters = Expr.pseudos;
	Expr.setFilters = new setFilters();
	
	tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
		var matched, match, tokens, type,
			soFar, groups, preFilters,
			cached = tokenCache[ selector + " " ];
	
		if ( cached ) {
			return parseOnly ? 0 : cached.slice( 0 );
		}
	
		soFar = selector;
		groups = [];
		preFilters = Expr.preFilter;
	
		while ( soFar ) {
	
			// Comma and first run
			if ( !matched || (match = rcomma.exec( soFar )) ) {
				if ( match ) {
					// Don't consume trailing commas as valid
					soFar = soFar.slice( match[0].length ) || soFar;
				}
				groups.push( (tokens = []) );
			}
	
			matched = false;
	
			// Combinators
			if ( (match = rcombinators.exec( soFar )) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					// Cast descendant combinators to space
					type: match[0].replace( rtrim, " " )
				});
				soFar = soFar.slice( matched.length );
			}
	
			// Filters
			for ( type in Expr.filter ) {
				if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
					(match = preFilters[ type ]( match ))) ) {
					matched = match.shift();
					tokens.push({
						value: matched,
						type: type,
						matches: match
					});
					soFar = soFar.slice( matched.length );
				}
			}
	
			if ( !matched ) {
				break;
			}
		}
	
		// Return the length of the invalid excess
		// if we're just parsing
		// Otherwise, throw an error or return tokens
		return parseOnly ?
			soFar.length :
			soFar ?
				Sizzle.error( selector ) :
				// Cache the tokens
				tokenCache( selector, groups ).slice( 0 );
	};
	
	function toSelector( tokens ) {
		var i = 0,
			len = tokens.length,
			selector = "";
		for ( ; i < len; i++ ) {
			selector += tokens[i].value;
		}
		return selector;
	}
	
	function addCombinator( matcher, combinator, base ) {
		var dir = combinator.dir,
			checkNonElements = base && dir === "parentNode",
			doneName = done++;
	
		return combinator.first ?
			// Check against closest ancestor/preceding element
			function( elem, context, xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						return matcher( elem, context, xml );
					}
				}
			} :
	
			// Check against all ancestor/preceding elements
			function( elem, context, xml ) {
				var oldCache, uniqueCache, outerCache,
					newCache = [ dirruns, doneName ];
	
				// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
				if ( xml ) {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							if ( matcher( elem, context, xml ) ) {
								return true;
							}
						}
					}
				} else {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							outerCache = elem[ expando ] || (elem[ expando ] = {});
	
							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});
	
							if ( (oldCache = uniqueCache[ dir ]) &&
								oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {
	
								// Assign to newCache so results back-propagate to previous elements
								return (newCache[ 2 ] = oldCache[ 2 ]);
							} else {
								// Reuse newcache so results back-propagate to previous elements
								uniqueCache[ dir ] = newCache;
	
								// A match means we're done; a fail means we have to keep checking
								if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
									return true;
								}
							}
						}
					}
				}
			};
	}
	
	function elementMatcher( matchers ) {
		return matchers.length > 1 ?
			function( elem, context, xml ) {
				var i = matchers.length;
				while ( i-- ) {
					if ( !matchers[i]( elem, context, xml ) ) {
						return false;
					}
				}
				return true;
			} :
			matchers[0];
	}
	
	function multipleContexts( selector, contexts, results ) {
		var i = 0,
			len = contexts.length;
		for ( ; i < len; i++ ) {
			Sizzle( selector, contexts[i], results );
		}
		return results;
	}
	
	function condense( unmatched, map, filter, context, xml ) {
		var elem,
			newUnmatched = [],
			i = 0,
			len = unmatched.length,
			mapped = map != null;
	
		for ( ; i < len; i++ ) {
			if ( (elem = unmatched[i]) ) {
				if ( !filter || filter( elem, context, xml ) ) {
					newUnmatched.push( elem );
					if ( mapped ) {
						map.push( i );
					}
				}
			}
		}
	
		return newUnmatched;
	}
	
	function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
		if ( postFilter && !postFilter[ expando ] ) {
			postFilter = setMatcher( postFilter );
		}
		if ( postFinder && !postFinder[ expando ] ) {
			postFinder = setMatcher( postFinder, postSelector );
		}
		return markFunction(function( seed, results, context, xml ) {
			var temp, i, elem,
				preMap = [],
				postMap = [],
				preexisting = results.length,
	
				// Get initial elements from seed or context
				elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),
	
				// Prefilter to get matcher input, preserving a map for seed-results synchronization
				matcherIn = preFilter && ( seed || !selector ) ?
					condense( elems, preMap, preFilter, context, xml ) :
					elems,
	
				matcherOut = matcher ?
					// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
					postFinder || ( seed ? preFilter : preexisting || postFilter ) ?
	
						// ...intermediate processing is necessary
						[] :
	
						// ...otherwise use results directly
						results :
					matcherIn;
	
			// Find primary matches
			if ( matcher ) {
				matcher( matcherIn, matcherOut, context, xml );
			}
	
			// Apply postFilter
			if ( postFilter ) {
				temp = condense( matcherOut, postMap );
				postFilter( temp, [], context, xml );
	
				// Un-match failing elements by moving them back to matcherIn
				i = temp.length;
				while ( i-- ) {
					if ( (elem = temp[i]) ) {
						matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
					}
				}
			}
	
			if ( seed ) {
				if ( postFinder || preFilter ) {
					if ( postFinder ) {
						// Get the final matcherOut by condensing this intermediate into postFinder contexts
						temp = [];
						i = matcherOut.length;
						while ( i-- ) {
							if ( (elem = matcherOut[i]) ) {
								// Restore matcherIn since elem is not yet a final match
								temp.push( (matcherIn[i] = elem) );
							}
						}
						postFinder( null, (matcherOut = []), temp, xml );
					}
	
					// Move matched elements from seed to results to keep them synchronized
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) &&
							(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {
	
							seed[temp] = !(results[temp] = elem);
						}
					}
				}
	
			// Add elements to results, through postFinder if defined
			} else {
				matcherOut = condense(
					matcherOut === results ?
						matcherOut.splice( preexisting, matcherOut.length ) :
						matcherOut
				);
				if ( postFinder ) {
					postFinder( null, results, matcherOut, xml );
				} else {
					push.apply( results, matcherOut );
				}
			}
		});
	}
	
	function matcherFromTokens( tokens ) {
		var checkContext, matcher, j,
			len = tokens.length,
			leadingRelative = Expr.relative[ tokens[0].type ],
			implicitRelative = leadingRelative || Expr.relative[" "],
			i = leadingRelative ? 1 : 0,
	
			// The foundational matcher ensures that elements are reachable from top-level context(s)
			matchContext = addCombinator( function( elem ) {
				return elem === checkContext;
			}, implicitRelative, true ),
			matchAnyContext = addCombinator( function( elem ) {
				return indexOf( checkContext, elem ) > -1;
			}, implicitRelative, true ),
			matchers = [ function( elem, context, xml ) {
				var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
					(checkContext = context).nodeType ?
						matchContext( elem, context, xml ) :
						matchAnyContext( elem, context, xml ) );
				// Avoid hanging onto element (issue #299)
				checkContext = null;
				return ret;
			} ];
	
		for ( ; i < len; i++ ) {
			if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
				matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
			} else {
				matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );
	
				// Return special upon seeing a positional matcher
				if ( matcher[ expando ] ) {
					// Find the next relative operator (if any) for proper handling
					j = ++i;
					for ( ; j < len; j++ ) {
						if ( Expr.relative[ tokens[j].type ] ) {
							break;
						}
					}
					return setMatcher(
						i > 1 && elementMatcher( matchers ),
						i > 1 && toSelector(
							// If the preceding token was a descendant combinator, insert an implicit any-element `*`
							tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
						).replace( rtrim, "$1" ),
						matcher,
						i < j && matcherFromTokens( tokens.slice( i, j ) ),
						j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
						j < len && toSelector( tokens )
					);
				}
				matchers.push( matcher );
			}
		}
	
		return elementMatcher( matchers );
	}
	
	function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
		var bySet = setMatchers.length > 0,
			byElement = elementMatchers.length > 0,
			superMatcher = function( seed, context, xml, results, outermost ) {
				var elem, j, matcher,
					matchedCount = 0,
					i = "0",
					unmatched = seed && [],
					setMatched = [],
					contextBackup = outermostContext,
					// We must always have either seed elements or outermost context
					elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
					// Use integer dirruns iff this is the outermost matcher
					dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
					len = elems.length;
	
				if ( outermost ) {
					outermostContext = context === document || context || outermost;
				}
	
				// Add elements passing elementMatchers directly to results
				// Support: IE<9, Safari
				// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
				for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
					if ( byElement && elem ) {
						j = 0;
						if ( !context && elem.ownerDocument !== document ) {
							setDocument( elem );
							xml = !documentIsHTML;
						}
						while ( (matcher = elementMatchers[j++]) ) {
							if ( matcher( elem, context || document, xml) ) {
								results.push( elem );
								break;
							}
						}
						if ( outermost ) {
							dirruns = dirrunsUnique;
						}
					}
	
					// Track unmatched elements for set filters
					if ( bySet ) {
						// They will have gone through all possible matchers
						if ( (elem = !matcher && elem) ) {
							matchedCount--;
						}
	
						// Lengthen the array for every element, matched or not
						if ( seed ) {
							unmatched.push( elem );
						}
					}
				}
	
				// `i` is now the count of elements visited above, and adding it to `matchedCount`
				// makes the latter nonnegative.
				matchedCount += i;
	
				// Apply set filters to unmatched elements
				// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
				// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
				// no element matchers and no seed.
				// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
				// case, which will result in a "00" `matchedCount` that differs from `i` but is also
				// numerically zero.
				if ( bySet && i !== matchedCount ) {
					j = 0;
					while ( (matcher = setMatchers[j++]) ) {
						matcher( unmatched, setMatched, context, xml );
					}
	
					if ( seed ) {
						// Reintegrate element matches to eliminate the need for sorting
						if ( matchedCount > 0 ) {
							while ( i-- ) {
								if ( !(unmatched[i] || setMatched[i]) ) {
									setMatched[i] = pop.call( results );
								}
							}
						}
	
						// Discard index placeholder values to get only actual matches
						setMatched = condense( setMatched );
					}
	
					// Add matches to results
					push.apply( results, setMatched );
	
					// Seedless set matches succeeding multiple successful matchers stipulate sorting
					if ( outermost && !seed && setMatched.length > 0 &&
						( matchedCount + setMatchers.length ) > 1 ) {
	
						Sizzle.uniqueSort( results );
					}
				}
	
				// Override manipulation of globals by nested matchers
				if ( outermost ) {
					dirruns = dirrunsUnique;
					outermostContext = contextBackup;
				}
	
				return unmatched;
			};
	
		return bySet ?
			markFunction( superMatcher ) :
			superMatcher;
	}
	
	compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
		var i,
			setMatchers = [],
			elementMatchers = [],
			cached = compilerCache[ selector + " " ];
	
		if ( !cached ) {
			// Generate a function of recursive functions that can be used to check each element
			if ( !match ) {
				match = tokenize( selector );
			}
			i = match.length;
			while ( i-- ) {
				cached = matcherFromTokens( match[i] );
				if ( cached[ expando ] ) {
					setMatchers.push( cached );
				} else {
					elementMatchers.push( cached );
				}
			}
	
			// Cache the compiled function
			cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );
	
			// Save selector and tokenization
			cached.selector = selector;
		}
		return cached;
	};
	
	/**
	 * A low-level selection function that works with Sizzle's compiled
	 *  selector functions
	 * @param {String|Function} selector A selector or a pre-compiled
	 *  selector function built with Sizzle.compile
	 * @param {Element} context
	 * @param {Array} [results]
	 * @param {Array} [seed] A set of elements to match against
	 */
	select = Sizzle.select = function( selector, context, results, seed ) {
		var i, tokens, token, type, find,
			compiled = typeof selector === "function" && selector,
			match = !seed && tokenize( (selector = compiled.selector || selector) );
	
		results = results || [];
	
		// Try to minimize operations if there is only one selector in the list and no seed
		// (the latter of which guarantees us context)
		if ( match.length === 1 ) {
	
			// Reduce context if the leading compound selector is an ID
			tokens = match[0] = match[0].slice( 0 );
			if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
					support.getById && context.nodeType === 9 && documentIsHTML &&
					Expr.relative[ tokens[1].type ] ) {
	
				context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
				if ( !context ) {
					return results;
	
				// Precompiled matchers will still verify ancestry, so step up a level
				} else if ( compiled ) {
					context = context.parentNode;
				}
	
				selector = selector.slice( tokens.shift().value.length );
			}
	
			// Fetch a seed set for right-to-left matching
			i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
			while ( i-- ) {
				token = tokens[i];
	
				// Abort if we hit a combinator
				if ( Expr.relative[ (type = token.type) ] ) {
					break;
				}
				if ( (find = Expr.find[ type ]) ) {
					// Search, expanding context for leading sibling combinators
					if ( (seed = find(
						token.matches[0].replace( runescape, funescape ),
						rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
					)) ) {
	
						// If seed is empty or no tokens remain, we can return early
						tokens.splice( i, 1 );
						selector = seed.length && toSelector( tokens );
						if ( !selector ) {
							push.apply( results, seed );
							return results;
						}
	
						break;
					}
				}
			}
		}
	
		// Compile and execute a filtering function if one is not provided
		// Provide `match` to avoid retokenization if we modified the selector above
		( compiled || compile( selector, match ) )(
			seed,
			context,
			!documentIsHTML,
			results,
			!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
		);
		return results;
	};
	
	// One-time assignments
	
	// Sort stability
	support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;
	
	// Support: Chrome 14-35+
	// Always assume duplicates if they aren't passed to the comparison function
	support.detectDuplicates = !!hasDuplicate;
	
	// Initialize against the default document
	setDocument();
	
	// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
	// Detached nodes confoundingly follow *each other*
	support.sortDetached = assert(function( div1 ) {
		// Should return 1, but returns 4 (following)
		return div1.compareDocumentPosition( document.createElement("div") ) & 1;
	});
	
	// Support: IE<8
	// Prevent attribute/property "interpolation"
	// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
	if ( !assert(function( div ) {
		div.innerHTML = "<a href='#'></a>";
		return div.firstChild.getAttribute("href") === "#" ;
	}) ) {
		addHandle( "type|href|height|width", function( elem, name, isXML ) {
			if ( !isXML ) {
				return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
			}
		});
	}
	
	// Support: IE<9
	// Use defaultValue in place of getAttribute("value")
	if ( !support.attributes || !assert(function( div ) {
		div.innerHTML = "<input/>";
		div.firstChild.setAttribute( "value", "" );
		return div.firstChild.getAttribute( "value" ) === "";
	}) ) {
		addHandle( "value", function( elem, name, isXML ) {
			if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
				return elem.defaultValue;
			}
		});
	}
	
	// Support: IE<9
	// Use getAttributeNode to fetch booleans when getAttribute lies
	if ( !assert(function( div ) {
		return div.getAttribute("disabled") == null;
	}) ) {
		addHandle( booleans, function( elem, name, isXML ) {
			var val;
			if ( !isXML ) {
				return elem[ name ] === true ? name.toLowerCase() :
						(val = elem.getAttributeNode( name )) && val.specified ?
						val.value :
					null;
			}
		});
	}
	
	return Sizzle;
	
	})( window );
	
	
	
	jQuery.find = Sizzle;
	jQuery.expr = Sizzle.selectors;
	jQuery.expr[ ":" ] = jQuery.expr.pseudos;
	jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
	jQuery.text = Sizzle.getText;
	jQuery.isXMLDoc = Sizzle.isXML;
	jQuery.contains = Sizzle.contains;
	
	
	
	var dir = function( elem, dir, until ) {
		var matched = [],
			truncate = until !== undefined;
	
		while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
			if ( elem.nodeType === 1 ) {
				if ( truncate && jQuery( elem ).is( until ) ) {
					break;
				}
				matched.push( elem );
			}
		}
		return matched;
	};
	
	
	var siblings = function( n, elem ) {
		var matched = [];
	
		for ( ; n; n = n.nextSibling ) {
			if ( n.nodeType === 1 && n !== elem ) {
				matched.push( n );
			}
		}
	
		return matched;
	};
	
	
	var rneedsContext = jQuery.expr.match.needsContext;
	
	var rsingleTag = ( /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/ );
	
	
	
	var risSimple = /^.[^:#\[\.,]*$/;
	
	// Implement the identical functionality for filter and not
	function winnow( elements, qualifier, not ) {
		if ( jQuery.isFunction( qualifier ) ) {
			return jQuery.grep( elements, function( elem, i ) {
				/* jshint -W018 */
				return !!qualifier.call( elem, i, elem ) !== not;
			} );
	
		}
	
		if ( qualifier.nodeType ) {
			return jQuery.grep( elements, function( elem ) {
				return ( elem === qualifier ) !== not;
			} );
	
		}
	
		if ( typeof qualifier === "string" ) {
			if ( risSimple.test( qualifier ) ) {
				return jQuery.filter( qualifier, elements, not );
			}
	
			qualifier = jQuery.filter( qualifier, elements );
		}
	
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}
	
	jQuery.filter = function( expr, elems, not ) {
		var elem = elems[ 0 ];
	
		if ( not ) {
			expr = ":not(" + expr + ")";
		}
	
		return elems.length === 1 && elem.nodeType === 1 ?
			jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [] :
			jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
				return elem.nodeType === 1;
			} ) );
	};
	
	jQuery.fn.extend( {
		find: function( selector ) {
			var i,
				len = this.length,
				ret = [],
				self = this;
	
			if ( typeof selector !== "string" ) {
				return this.pushStack( jQuery( selector ).filter( function() {
					for ( i = 0; i < len; i++ ) {
						if ( jQuery.contains( self[ i ], this ) ) {
							return true;
						}
					}
				} ) );
			}
	
			for ( i = 0; i < len; i++ ) {
				jQuery.find( selector, self[ i ], ret );
			}
	
			// Needed because $( selector, context ) becomes $( context ).find( selector )
			ret = this.pushStack( len > 1 ? jQuery.unique( ret ) : ret );
			ret.selector = this.selector ? this.selector + " " + selector : selector;
			return ret;
		},
		filter: function( selector ) {
			return this.pushStack( winnow( this, selector || [], false ) );
		},
		not: function( selector ) {
			return this.pushStack( winnow( this, selector || [], true ) );
		},
		is: function( selector ) {
			return !!winnow(
				this,
	
				// If this is a positional/relative selector, check membership in the returned set
				// so $("p:first").is("p:last") won't return true for a doc with two "p".
				typeof selector === "string" && rneedsContext.test( selector ) ?
					jQuery( selector ) :
					selector || [],
				false
			).length;
		}
	} );
	
	
	// Initialize a jQuery object
	
	
	// A central reference to the root jQuery(document)
	var rootjQuery,
	
		// A simple way to check for HTML strings
		// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
		// Strict HTML recognition (#11290: must start with <)
		rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
	
		init = jQuery.fn.init = function( selector, context, root ) {
			var match, elem;
	
			// HANDLE: $(""), $(null), $(undefined), $(false)
			if ( !selector ) {
				return this;
			}
	
			// Method init() accepts an alternate rootjQuery
			// so migrate can support jQuery.sub (gh-2101)
			root = root || rootjQuery;
	
			// Handle HTML strings
			if ( typeof selector === "string" ) {
				if ( selector[ 0 ] === "<" &&
					selector[ selector.length - 1 ] === ">" &&
					selector.length >= 3 ) {
	
					// Assume that strings that start and end with <> are HTML and skip the regex check
					match = [ null, selector, null ];
	
				} else {
					match = rquickExpr.exec( selector );
				}
	
				// Match html or make sure no context is specified for #id
				if ( match && ( match[ 1 ] || !context ) ) {
	
					// HANDLE: $(html) -> $(array)
					if ( match[ 1 ] ) {
						context = context instanceof jQuery ? context[ 0 ] : context;
	
						// Option to run scripts is true for back-compat
						// Intentionally let the error be thrown if parseHTML is not present
						jQuery.merge( this, jQuery.parseHTML(
							match[ 1 ],
							context && context.nodeType ? context.ownerDocument || context : document,
							true
						) );
	
						// HANDLE: $(html, props)
						if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
							for ( match in context ) {
	
								// Properties of context are called as methods if possible
								if ( jQuery.isFunction( this[ match ] ) ) {
									this[ match ]( context[ match ] );
	
								// ...and otherwise set as attributes
								} else {
									this.attr( match, context[ match ] );
								}
							}
						}
	
						return this;
	
					// HANDLE: $(#id)
					} else {
						elem = document.getElementById( match[ 2 ] );
	
						// Support: Blackberry 4.6
						// gEBID returns nodes no longer in the document (#6963)
						if ( elem && elem.parentNode ) {
	
							// Inject the element directly into the jQuery object
							this.length = 1;
							this[ 0 ] = elem;
						}
	
						this.context = document;
						this.selector = selector;
						return this;
					}
	
				// HANDLE: $(expr, $(...))
				} else if ( !context || context.jquery ) {
					return ( context || root ).find( selector );
	
				// HANDLE: $(expr, context)
				// (which is just equivalent to: $(context).find(expr)
				} else {
					return this.constructor( context ).find( selector );
				}
	
			// HANDLE: $(DOMElement)
			} else if ( selector.nodeType ) {
				this.context = this[ 0 ] = selector;
				this.length = 1;
				return this;
	
			// HANDLE: $(function)
			// Shortcut for document ready
			} else if ( jQuery.isFunction( selector ) ) {
				return root.ready !== undefined ?
					root.ready( selector ) :
	
					// Execute immediately if ready is not present
					selector( jQuery );
			}
	
			if ( selector.selector !== undefined ) {
				this.selector = selector.selector;
				this.context = selector.context;
			}
	
			return jQuery.makeArray( selector, this );
		};
	
	// Give the init function the jQuery prototype for later instantiation
	init.prototype = jQuery.fn;
	
	// Initialize central reference
	rootjQuery = jQuery( document );
	
	
	var rparentsprev = /^(?:parents|prev(?:Until|All))/,
	
		// Methods guaranteed to produce a unique set when starting from a unique set
		guaranteedUnique = {
			children: true,
			contents: true,
			next: true,
			prev: true
		};
	
	jQuery.fn.extend( {
		has: function( target ) {
			var targets = jQuery( target, this ),
				l = targets.length;
	
			return this.filter( function() {
				var i = 0;
				for ( ; i < l; i++ ) {
					if ( jQuery.contains( this, targets[ i ] ) ) {
						return true;
					}
				}
			} );
		},
	
		closest: function( selectors, context ) {
			var cur,
				i = 0,
				l = this.length,
				matched = [],
				pos = rneedsContext.test( selectors ) || typeof selectors !== "string" ?
					jQuery( selectors, context || this.context ) :
					0;
	
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {
	
					// Always skip document fragments
					if ( cur.nodeType < 11 && ( pos ?
						pos.index( cur ) > -1 :
	
						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {
	
						matched.push( cur );
						break;
					}
				}
			}
	
			return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
		},
	
		// Determine the position of an element within the set
		index: function( elem ) {
	
			// No argument, return index in parent
			if ( !elem ) {
				return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
			}
	
			// Index in selector
			if ( typeof elem === "string" ) {
				return indexOf.call( jQuery( elem ), this[ 0 ] );
			}
	
			// Locate the position of the desired element
			return indexOf.call( this,
	
				// If it receives a jQuery object, the first element is used
				elem.jquery ? elem[ 0 ] : elem
			);
		},
	
		add: function( selector, context ) {
			return this.pushStack(
				jQuery.uniqueSort(
					jQuery.merge( this.get(), jQuery( selector, context ) )
				)
			);
		},
	
		addBack: function( selector ) {
			return this.add( selector == null ?
				this.prevObject : this.prevObject.filter( selector )
			);
		}
	} );
	
	function sibling( cur, dir ) {
		while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
		return cur;
	}
	
	jQuery.each( {
		parent: function( elem ) {
			var parent = elem.parentNode;
			return parent && parent.nodeType !== 11 ? parent : null;
		},
		parents: function( elem ) {
			return dir( elem, "parentNode" );
		},
		parentsUntil: function( elem, i, until ) {
			return dir( elem, "parentNode", until );
		},
		next: function( elem ) {
			return sibling( elem, "nextSibling" );
		},
		prev: function( elem ) {
			return sibling( elem, "previousSibling" );
		},
		nextAll: function( elem ) {
			return dir( elem, "nextSibling" );
		},
		prevAll: function( elem ) {
			return dir( elem, "previousSibling" );
		},
		nextUntil: function( elem, i, until ) {
			return dir( elem, "nextSibling", until );
		},
		prevUntil: function( elem, i, until ) {
			return dir( elem, "previousSibling", until );
		},
		siblings: function( elem ) {
			return siblings( ( elem.parentNode || {} ).firstChild, elem );
		},
		children: function( elem ) {
			return siblings( elem.firstChild );
		},
		contents: function( elem ) {
			return elem.contentDocument || jQuery.merge( [], elem.childNodes );
		}
	}, function( name, fn ) {
		jQuery.fn[ name ] = function( until, selector ) {
			var matched = jQuery.map( this, fn, until );
	
			if ( name.slice( -5 ) !== "Until" ) {
				selector = until;
			}
	
			if ( selector && typeof selector === "string" ) {
				matched = jQuery.filter( selector, matched );
			}
	
			if ( this.length > 1 ) {
	
				// Remove duplicates
				if ( !guaranteedUnique[ name ] ) {
					jQuery.uniqueSort( matched );
				}
	
				// Reverse order for parents* and prev-derivatives
				if ( rparentsprev.test( name ) ) {
					matched.reverse();
				}
			}
	
			return this.pushStack( matched );
		};
	} );
	var rnotwhite = ( /\S+/g );
	
	
	
	// Convert String-formatted options into Object-formatted ones
	function createOptions( options ) {
		var object = {};
		jQuery.each( options.match( rnotwhite ) || [], function( _, flag ) {
			object[ flag ] = true;
		} );
		return object;
	}
	
	/*
	 * Create a callback list using the following parameters:
	 *
	 *	options: an optional list of space-separated options that will change how
	 *			the callback list behaves or a more traditional option object
	 *
	 * By default a callback list will act like an event callback list and can be
	 * "fired" multiple times.
	 *
	 * Possible options:
	 *
	 *	once:			will ensure the callback list can only be fired once (like a Deferred)
	 *
	 *	memory:			will keep track of previous values and will call any callback added
	 *					after the list has been fired right away with the latest "memorized"
	 *					values (like a Deferred)
	 *
	 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
	 *
	 *	stopOnFalse:	interrupt callings when a callback returns false
	 *
	 */
	jQuery.Callbacks = function( options ) {
	
		// Convert options from String-formatted to Object-formatted if needed
		// (we check in cache first)
		options = typeof options === "string" ?
			createOptions( options ) :
			jQuery.extend( {}, options );
	
		var // Flag to know if list is currently firing
			firing,
	
			// Last fire value for non-forgettable lists
			memory,
	
			// Flag to know if list was already fired
			fired,
	
			// Flag to prevent firing
			locked,
	
			// Actual callback list
			list = [],
	
			// Queue of execution data for repeatable lists
			queue = [],
	
			// Index of currently firing callback (modified by add/remove as needed)
			firingIndex = -1,
	
			// Fire callbacks
			fire = function() {
	
				// Enforce single-firing
				locked = options.once;
	
				// Execute callbacks for all pending executions,
				// respecting firingIndex overrides and runtime changes
				fired = firing = true;
				for ( ; queue.length; firingIndex = -1 ) {
					memory = queue.shift();
					while ( ++firingIndex < list.length ) {
	
						// Run callback and check for early termination
						if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
							options.stopOnFalse ) {
	
							// Jump to end and forget the data so .add doesn't re-fire
							firingIndex = list.length;
							memory = false;
						}
					}
				}
	
				// Forget the data if we're done with it
				if ( !options.memory ) {
					memory = false;
				}
	
				firing = false;
	
				// Clean up if we're done firing for good
				if ( locked ) {
	
					// Keep an empty list if we have data for future add calls
					if ( memory ) {
						list = [];
	
					// Otherwise, this object is spent
					} else {
						list = "";
					}
				}
			},
	
			// Actual Callbacks object
			self = {
	
				// Add a callback or a collection of callbacks to the list
				add: function() {
					if ( list ) {
	
						// If we have memory from a past run, we should fire after adding
						if ( memory && !firing ) {
							firingIndex = list.length - 1;
							queue.push( memory );
						}
	
						( function add( args ) {
							jQuery.each( args, function( _, arg ) {
								if ( jQuery.isFunction( arg ) ) {
									if ( !options.unique || !self.has( arg ) ) {
										list.push( arg );
									}
								} else if ( arg && arg.length && jQuery.type( arg ) !== "string" ) {
	
									// Inspect recursively
									add( arg );
								}
							} );
						} )( arguments );
	
						if ( memory && !firing ) {
							fire();
						}
					}
					return this;
				},
	
				// Remove a callback from the list
				remove: function() {
					jQuery.each( arguments, function( _, arg ) {
						var index;
						while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
							list.splice( index, 1 );
	
							// Handle firing indexes
							if ( index <= firingIndex ) {
								firingIndex--;
							}
						}
					} );
					return this;
				},
	
				// Check if a given callback is in the list.
				// If no argument is given, return whether or not list has callbacks attached.
				has: function( fn ) {
					return fn ?
						jQuery.inArray( fn, list ) > -1 :
						list.length > 0;
				},
	
				// Remove all callbacks from the list
				empty: function() {
					if ( list ) {
						list = [];
					}
					return this;
				},
	
				// Disable .fire and .add
				// Abort any current/pending executions
				// Clear all callbacks and values
				disable: function() {
					locked = queue = [];
					list = memory = "";
					return this;
				},
				disabled: function() {
					return !list;
				},
	
				// Disable .fire
				// Also disable .add unless we have memory (since it would have no effect)
				// Abort any pending executions
				lock: function() {
					locked = queue = [];
					if ( !memory ) {
						list = memory = "";
					}
					return this;
				},
				locked: function() {
					return !!locked;
				},
	
				// Call all callbacks with the given context and arguments
				fireWith: function( context, args ) {
					if ( !locked ) {
						args = args || [];
						args = [ context, args.slice ? args.slice() : args ];
						queue.push( args );
						if ( !firing ) {
							fire();
						}
					}
					return this;
				},
	
				// Call all the callbacks with the given arguments
				fire: function() {
					self.fireWith( this, arguments );
					return this;
				},
	
				// To know if the callbacks have already been called at least once
				fired: function() {
					return !!fired;
				}
			};
	
		return self;
	};
	
	
	jQuery.extend( {
	
		Deferred: function( func ) {
			var tuples = [
	
					// action, add listener, listener list, final state
					[ "resolve", "done", jQuery.Callbacks( "once memory" ), "resolved" ],
					[ "reject", "fail", jQuery.Callbacks( "once memory" ), "rejected" ],
					[ "notify", "progress", jQuery.Callbacks( "memory" ) ]
				],
				state = "pending",
				promise = {
					state: function() {
						return state;
					},
					always: function() {
						deferred.done( arguments ).fail( arguments );
						return this;
					},
					then: function( /* fnDone, fnFail, fnProgress */ ) {
						var fns = arguments;
						return jQuery.Deferred( function( newDefer ) {
							jQuery.each( tuples, function( i, tuple ) {
								var fn = jQuery.isFunction( fns[ i ] ) && fns[ i ];
	
								// deferred[ done | fail | progress ] for forwarding actions to newDefer
								deferred[ tuple[ 1 ] ]( function() {
									var returned = fn && fn.apply( this, arguments );
									if ( returned && jQuery.isFunction( returned.promise ) ) {
										returned.promise()
											.progress( newDefer.notify )
											.done( newDefer.resolve )
											.fail( newDefer.reject );
									} else {
										newDefer[ tuple[ 0 ] + "With" ](
											this === promise ? newDefer.promise() : this,
											fn ? [ returned ] : arguments
										);
									}
								} );
							} );
							fns = null;
						} ).promise();
					},
	
					// Get a promise for this deferred
					// If obj is provided, the promise aspect is added to the object
					promise: function( obj ) {
						return obj != null ? jQuery.extend( obj, promise ) : promise;
					}
				},
				deferred = {};
	
			// Keep pipe for back-compat
			promise.pipe = promise.then;
	
			// Add list-specific methods
			jQuery.each( tuples, function( i, tuple ) {
				var list = tuple[ 2 ],
					stateString = tuple[ 3 ];
	
				// promise[ done | fail | progress ] = list.add
				promise[ tuple[ 1 ] ] = list.add;
	
				// Handle state
				if ( stateString ) {
					list.add( function() {
	
						// state = [ resolved | rejected ]
						state = stateString;
	
					// [ reject_list | resolve_list ].disable; progress_list.lock
					}, tuples[ i ^ 1 ][ 2 ].disable, tuples[ 2 ][ 2 ].lock );
				}
	
				// deferred[ resolve | reject | notify ]
				deferred[ tuple[ 0 ] ] = function() {
					deferred[ tuple[ 0 ] + "With" ]( this === deferred ? promise : this, arguments );
					return this;
				};
				deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
			} );
	
			// Make the deferred a promise
			promise.promise( deferred );
	
			// Call given func if any
			if ( func ) {
				func.call( deferred, deferred );
			}
	
			// All done!
			return deferred;
		},
	
		// Deferred helper
		when: function( subordinate /* , ..., subordinateN */ ) {
			var i = 0,
				resolveValues = slice.call( arguments ),
				length = resolveValues.length,
	
				// the count of uncompleted subordinates
				remaining = length !== 1 ||
					( subordinate && jQuery.isFunction( subordinate.promise ) ) ? length : 0,
	
				// the master Deferred.
				// If resolveValues consist of only a single Deferred, just use that.
				deferred = remaining === 1 ? subordinate : jQuery.Deferred(),
	
				// Update function for both resolve and progress values
				updateFunc = function( i, contexts, values ) {
					return function( value ) {
						contexts[ i ] = this;
						values[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
						if ( values === progressValues ) {
							deferred.notifyWith( contexts, values );
						} else if ( !( --remaining ) ) {
							deferred.resolveWith( contexts, values );
						}
					};
				},
	
				progressValues, progressContexts, resolveContexts;
	
			// Add listeners to Deferred subordinates; treat others as resolved
			if ( length > 1 ) {
				progressValues = new Array( length );
				progressContexts = new Array( length );
				resolveContexts = new Array( length );
				for ( ; i < length; i++ ) {
					if ( resolveValues[ i ] && jQuery.isFunction( resolveValues[ i ].promise ) ) {
						resolveValues[ i ].promise()
							.progress( updateFunc( i, progressContexts, progressValues ) )
							.done( updateFunc( i, resolveContexts, resolveValues ) )
							.fail( deferred.reject );
					} else {
						--remaining;
					}
				}
			}
	
			// If we're not waiting on anything, resolve the master
			if ( !remaining ) {
				deferred.resolveWith( resolveContexts, resolveValues );
			}
	
			return deferred.promise();
		}
	} );
	
	
	// The deferred used on DOM ready
	var readyList;
	
	jQuery.fn.ready = function( fn ) {
	
		// Add the callback
		jQuery.ready.promise().done( fn );
	
		return this;
	};
	
	jQuery.extend( {
	
		// Is the DOM ready to be used? Set to true once it occurs.
		isReady: false,
	
		// A counter to track how many items to wait for before
		// the ready event fires. See #6781
		readyWait: 1,
	
		// Hold (or release) the ready event
		holdReady: function( hold ) {
			if ( hold ) {
				jQuery.readyWait++;
			} else {
				jQuery.ready( true );
			}
		},
	
		// Handle when the DOM is ready
		ready: function( wait ) {
	
			// Abort if there are pending holds or we're already ready
			if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
				return;
			}
	
			// Remember that the DOM is ready
			jQuery.isReady = true;
	
			// If a normal DOM Ready event fired, decrement, and wait if need be
			if ( wait !== true && --jQuery.readyWait > 0 ) {
				return;
			}
	
			// If there are functions bound, to execute
			readyList.resolveWith( document, [ jQuery ] );
	
			// Trigger any bound ready events
			if ( jQuery.fn.triggerHandler ) {
				jQuery( document ).triggerHandler( "ready" );
				jQuery( document ).off( "ready" );
			}
		}
	} );
	
	/**
	 * The ready event handler and self cleanup method
	 */
	function completed() {
		document.removeEventListener( "DOMContentLoaded", completed );
		window.removeEventListener( "load", completed );
		jQuery.ready();
	}
	
	jQuery.ready.promise = function( obj ) {
		if ( !readyList ) {
	
			readyList = jQuery.Deferred();
	
			// Catch cases where $(document).ready() is called
			// after the browser event has already occurred.
			// Support: IE9-10 only
			// Older IE sometimes signals "interactive" too soon
			if ( document.readyState === "complete" ||
				( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {
	
				// Handle it asynchronously to allow scripts the opportunity to delay ready
				window.setTimeout( jQuery.ready );
	
			} else {
	
				// Use the handy event callback
				document.addEventListener( "DOMContentLoaded", completed );
	
				// A fallback to window.onload, that will always work
				window.addEventListener( "load", completed );
			}
		}
		return readyList.promise( obj );
	};
	
	// Kick off the DOM ready check even if the user does not
	jQuery.ready.promise();
	
	
	
	
	// Multifunctional method to get and set values of a collection
	// The value/s can optionally be executed if it's a function
	var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
		var i = 0,
			len = elems.length,
			bulk = key == null;
	
		// Sets many values
		if ( jQuery.type( key ) === "object" ) {
			chainable = true;
			for ( i in key ) {
				access( elems, fn, i, key[ i ], true, emptyGet, raw );
			}
	
		// Sets one value
		} else if ( value !== undefined ) {
			chainable = true;
	
			if ( !jQuery.isFunction( value ) ) {
				raw = true;
			}
	
			if ( bulk ) {
	
				// Bulk operations run against the entire set
				if ( raw ) {
					fn.call( elems, value );
					fn = null;
	
				// ...except when executing function values
				} else {
					bulk = fn;
					fn = function( elem, key, value ) {
						return bulk.call( jQuery( elem ), value );
					};
				}
			}
	
			if ( fn ) {
				for ( ; i < len; i++ ) {
					fn(
						elems[ i ], key, raw ?
						value :
						value.call( elems[ i ], i, fn( elems[ i ], key ) )
					);
				}
			}
		}
	
		return chainable ?
			elems :
	
			// Gets
			bulk ?
				fn.call( elems ) :
				len ? fn( elems[ 0 ], key ) : emptyGet;
	};
	var acceptData = function( owner ) {
	
		// Accepts only:
		//  - Node
		//    - Node.ELEMENT_NODE
		//    - Node.DOCUMENT_NODE
		//  - Object
		//    - Any
		/* jshint -W018 */
		return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
	};
	
	
	
	
	function Data() {
		this.expando = jQuery.expando + Data.uid++;
	}
	
	Data.uid = 1;
	
	Data.prototype = {
	
		register: function( owner, initial ) {
			var value = initial || {};
	
			// If it is a node unlikely to be stringify-ed or looped over
			// use plain assignment
			if ( owner.nodeType ) {
				owner[ this.expando ] = value;
	
			// Otherwise secure it in a non-enumerable, non-writable property
			// configurability must be true to allow the property to be
			// deleted with the delete operator
			} else {
				Object.defineProperty( owner, this.expando, {
					value: value,
					writable: true,
					configurable: true
				} );
			}
			return owner[ this.expando ];
		},
		cache: function( owner ) {
	
			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( !acceptData( owner ) ) {
				return {};
			}
	
			// Check if the owner object already has a cache
			var value = owner[ this.expando ];
	
			// If not, create one
			if ( !value ) {
				value = {};
	
				// We can accept data for non-element nodes in modern browsers,
				// but we should not, see #8335.
				// Always return an empty object.
				if ( acceptData( owner ) ) {
	
					// If it is a node unlikely to be stringify-ed or looped over
					// use plain assignment
					if ( owner.nodeType ) {
						owner[ this.expando ] = value;
	
					// Otherwise secure it in a non-enumerable property
					// configurable must be true to allow the property to be
					// deleted when data is removed
					} else {
						Object.defineProperty( owner, this.expando, {
							value: value,
							configurable: true
						} );
					}
				}
			}
	
			return value;
		},
		set: function( owner, data, value ) {
			var prop,
				cache = this.cache( owner );
	
			// Handle: [ owner, key, value ] args
			if ( typeof data === "string" ) {
				cache[ data ] = value;
	
			// Handle: [ owner, { properties } ] args
			} else {
	
				// Copy the properties one-by-one to the cache object
				for ( prop in data ) {
					cache[ prop ] = data[ prop ];
				}
			}
			return cache;
		},
		get: function( owner, key ) {
			return key === undefined ?
				this.cache( owner ) :
				owner[ this.expando ] && owner[ this.expando ][ key ];
		},
		access: function( owner, key, value ) {
			var stored;
	
			// In cases where either:
			//
			//   1. No key was specified
			//   2. A string key was specified, but no value provided
			//
			// Take the "read" path and allow the get method to determine
			// which value to return, respectively either:
			//
			//   1. The entire cache object
			//   2. The data stored at the key
			//
			if ( key === undefined ||
					( ( key && typeof key === "string" ) && value === undefined ) ) {
	
				stored = this.get( owner, key );
	
				return stored !== undefined ?
					stored : this.get( owner, jQuery.camelCase( key ) );
			}
	
			// When the key is not a string, or both a key and value
			// are specified, set or extend (existing objects) with either:
			//
			//   1. An object of properties
			//   2. A key and value
			//
			this.set( owner, key, value );
	
			// Since the "set" path can have two possible entry points
			// return the expected data based on which path was taken[*]
			return value !== undefined ? value : key;
		},
		remove: function( owner, key ) {
			var i, name, camel,
				cache = owner[ this.expando ];
	
			if ( cache === undefined ) {
				return;
			}
	
			if ( key === undefined ) {
				this.register( owner );
	
			} else {
	
				// Support array or space separated string of keys
				if ( jQuery.isArray( key ) ) {
	
					// If "name" is an array of keys...
					// When data is initially created, via ("key", "val") signature,
					// keys will be converted to camelCase.
					// Since there is no way to tell _how_ a key was added, remove
					// both plain key and camelCase key. #12786
					// This will only penalize the array argument path.
					name = key.concat( key.map( jQuery.camelCase ) );
				} else {
					camel = jQuery.camelCase( key );
	
					// Try the string as a key before any manipulation
					if ( key in cache ) {
						name = [ key, camel ];
					} else {
	
						// If a key with the spaces exists, use it.
						// Otherwise, create an array by matching non-whitespace
						name = camel;
						name = name in cache ?
							[ name ] : ( name.match( rnotwhite ) || [] );
					}
				}
	
				i = name.length;
	
				while ( i-- ) {
					delete cache[ name[ i ] ];
				}
			}
	
			// Remove the expando if there's no more data
			if ( key === undefined || jQuery.isEmptyObject( cache ) ) {
	
				// Support: Chrome <= 35-45+
				// Webkit & Blink performance suffers when deleting properties
				// from DOM nodes, so set to undefined instead
				// https://code.google.com/p/chromium/issues/detail?id=378607
				if ( owner.nodeType ) {
					owner[ this.expando ] = undefined;
				} else {
					delete owner[ this.expando ];
				}
			}
		},
		hasData: function( owner ) {
			var cache = owner[ this.expando ];
			return cache !== undefined && !jQuery.isEmptyObject( cache );
		}
	};
	var dataPriv = new Data();
	
	var dataUser = new Data();
	
	
	
	//	Implementation Summary
	//
	//	1. Enforce API surface and semantic compatibility with 1.9.x branch
	//	2. Improve the module's maintainability by reducing the storage
	//		paths to a single mechanism.
	//	3. Use the same single mechanism to support "private" and "user" data.
	//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
	//	5. Avoid exposing implementation details on user objects (eg. expando properties)
	//	6. Provide a clear path for implementation upgrade to WeakMap in 2014
	
	var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		rmultiDash = /[A-Z]/g;
	
	function dataAttr( elem, key, data ) {
		var name;
	
		// If nothing was found internally, try to fetch any
		// data from the HTML5 data-* attribute
		if ( data === undefined && elem.nodeType === 1 ) {
			name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
			data = elem.getAttribute( name );
	
			if ( typeof data === "string" ) {
				try {
					data = data === "true" ? true :
						data === "false" ? false :
						data === "null" ? null :
	
						// Only convert to a number if it doesn't change the string
						+data + "" === data ? +data :
						rbrace.test( data ) ? jQuery.parseJSON( data ) :
						data;
				} catch ( e ) {}
	
				// Make sure we set the data so it isn't changed later
				dataUser.set( elem, key, data );
			} else {
				data = undefined;
			}
		}
		return data;
	}
	
	jQuery.extend( {
		hasData: function( elem ) {
			return dataUser.hasData( elem ) || dataPriv.hasData( elem );
		},
	
		data: function( elem, name, data ) {
			return dataUser.access( elem, name, data );
		},
	
		removeData: function( elem, name ) {
			dataUser.remove( elem, name );
		},
	
		// TODO: Now that all calls to _data and _removeData have been replaced
		// with direct calls to dataPriv methods, these can be deprecated.
		_data: function( elem, name, data ) {
			return dataPriv.access( elem, name, data );
		},
	
		_removeData: function( elem, name ) {
			dataPriv.remove( elem, name );
		}
	} );
	
	jQuery.fn.extend( {
		data: function( key, value ) {
			var i, name, data,
				elem = this[ 0 ],
				attrs = elem && elem.attributes;
	
			// Gets all values
			if ( key === undefined ) {
				if ( this.length ) {
					data = dataUser.get( elem );
	
					if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
						i = attrs.length;
						while ( i-- ) {
	
							// Support: IE11+
							// The attrs elements can be null (#14894)
							if ( attrs[ i ] ) {
								name = attrs[ i ].name;
								if ( name.indexOf( "data-" ) === 0 ) {
									name = jQuery.camelCase( name.slice( 5 ) );
									dataAttr( elem, name, data[ name ] );
								}
							}
						}
						dataPriv.set( elem, "hasDataAttrs", true );
					}
				}
	
				return data;
			}
	
			// Sets multiple values
			if ( typeof key === "object" ) {
				return this.each( function() {
					dataUser.set( this, key );
				} );
			}
	
			return access( this, function( value ) {
				var data, camelKey;
	
				// The calling jQuery object (element matches) is not empty
				// (and therefore has an element appears at this[ 0 ]) and the
				// `value` parameter was not undefined. An empty jQuery object
				// will result in `undefined` for elem = this[ 0 ] which will
				// throw an exception if an attempt to read a data cache is made.
				if ( elem && value === undefined ) {
	
					// Attempt to get data from the cache
					// with the key as-is
					data = dataUser.get( elem, key ) ||
	
						// Try to find dashed key if it exists (gh-2779)
						// This is for 2.2.x only
						dataUser.get( elem, key.replace( rmultiDash, "-$&" ).toLowerCase() );
	
					if ( data !== undefined ) {
						return data;
					}
	
					camelKey = jQuery.camelCase( key );
	
					// Attempt to get data from the cache
					// with the key camelized
					data = dataUser.get( elem, camelKey );
					if ( data !== undefined ) {
						return data;
					}
	
					// Attempt to "discover" the data in
					// HTML5 custom data-* attrs
					data = dataAttr( elem, camelKey, undefined );
					if ( data !== undefined ) {
						return data;
					}
	
					// We tried really hard, but the data doesn't exist.
					return;
				}
	
				// Set the data...
				camelKey = jQuery.camelCase( key );
				this.each( function() {
	
					// First, attempt to store a copy or reference of any
					// data that might've been store with a camelCased key.
					var data = dataUser.get( this, camelKey );
	
					// For HTML5 data-* attribute interop, we have to
					// store property names with dashes in a camelCase form.
					// This might not apply to all properties...*
					dataUser.set( this, camelKey, value );
	
					// *... In the case of properties that might _actually_
					// have dashes, we need to also store a copy of that
					// unchanged property.
					if ( key.indexOf( "-" ) > -1 && data !== undefined ) {
						dataUser.set( this, key, value );
					}
				} );
			}, null, value, arguments.length > 1, null, true );
		},
	
		removeData: function( key ) {
			return this.each( function() {
				dataUser.remove( this, key );
			} );
		}
	} );
	
	
	jQuery.extend( {
		queue: function( elem, type, data ) {
			var queue;
	
			if ( elem ) {
				type = ( type || "fx" ) + "queue";
				queue = dataPriv.get( elem, type );
	
				// Speed up dequeue by getting out quickly if this is just a lookup
				if ( data ) {
					if ( !queue || jQuery.isArray( data ) ) {
						queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
					} else {
						queue.push( data );
					}
				}
				return queue || [];
			}
		},
	
		dequeue: function( elem, type ) {
			type = type || "fx";
	
			var queue = jQuery.queue( elem, type ),
				startLength = queue.length,
				fn = queue.shift(),
				hooks = jQuery._queueHooks( elem, type ),
				next = function() {
					jQuery.dequeue( elem, type );
				};
	
			// If the fx queue is dequeued, always remove the progress sentinel
			if ( fn === "inprogress" ) {
				fn = queue.shift();
				startLength--;
			}
	
			if ( fn ) {
	
				// Add a progress sentinel to prevent the fx queue from being
				// automatically dequeued
				if ( type === "fx" ) {
					queue.unshift( "inprogress" );
				}
	
				// Clear up the last queue stop function
				delete hooks.stop;
				fn.call( elem, next, hooks );
			}
	
			if ( !startLength && hooks ) {
				hooks.empty.fire();
			}
		},
	
		// Not public - generate a queueHooks object, or return the current one
		_queueHooks: function( elem, type ) {
			var key = type + "queueHooks";
			return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
				empty: jQuery.Callbacks( "once memory" ).add( function() {
					dataPriv.remove( elem, [ type + "queue", key ] );
				} )
			} );
		}
	} );
	
	jQuery.fn.extend( {
		queue: function( type, data ) {
			var setter = 2;
	
			if ( typeof type !== "string" ) {
				data = type;
				type = "fx";
				setter--;
			}
	
			if ( arguments.length < setter ) {
				return jQuery.queue( this[ 0 ], type );
			}
	
			return data === undefined ?
				this :
				this.each( function() {
					var queue = jQuery.queue( this, type, data );
	
					// Ensure a hooks for this queue
					jQuery._queueHooks( this, type );
	
					if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
						jQuery.dequeue( this, type );
					}
				} );
		},
		dequeue: function( type ) {
			return this.each( function() {
				jQuery.dequeue( this, type );
			} );
		},
		clearQueue: function( type ) {
			return this.queue( type || "fx", [] );
		},
	
		// Get a promise resolved when queues of a certain type
		// are emptied (fx is the type by default)
		promise: function( type, obj ) {
			var tmp,
				count = 1,
				defer = jQuery.Deferred(),
				elements = this,
				i = this.length,
				resolve = function() {
					if ( !( --count ) ) {
						defer.resolveWith( elements, [ elements ] );
					}
				};
	
			if ( typeof type !== "string" ) {
				obj = type;
				type = undefined;
			}
			type = type || "fx";
	
			while ( i-- ) {
				tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
				if ( tmp && tmp.empty ) {
					count++;
					tmp.empty.add( resolve );
				}
			}
			resolve();
			return defer.promise( obj );
		}
	} );
	var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;
	
	var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );
	
	
	var cssExpand = [ "Top", "Right", "Bottom", "Left" ];
	
	var isHidden = function( elem, el ) {
	
			// isHidden might be called from jQuery#filter function;
			// in that case, element will be second argument
			elem = el || elem;
			return jQuery.css( elem, "display" ) === "none" ||
				!jQuery.contains( elem.ownerDocument, elem );
		};
	
	
	
	function adjustCSS( elem, prop, valueParts, tween ) {
		var adjusted,
			scale = 1,
			maxIterations = 20,
			currentValue = tween ?
				function() { return tween.cur(); } :
				function() { return jQuery.css( elem, prop, "" ); },
			initial = currentValue(),
			unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),
	
			// Starting value computation is required for potential unit mismatches
			initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
				rcssNum.exec( jQuery.css( elem, prop ) );
	
		if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {
	
			// Trust units reported by jQuery.css
			unit = unit || initialInUnit[ 3 ];
	
			// Make sure we update the tween properties later on
			valueParts = valueParts || [];
	
			// Iteratively approximate from a nonzero starting point
			initialInUnit = +initial || 1;
	
			do {
	
				// If previous iteration zeroed out, double until we get *something*.
				// Use string for doubling so we don't accidentally see scale as unchanged below
				scale = scale || ".5";
	
				// Adjust and apply
				initialInUnit = initialInUnit / scale;
				jQuery.style( elem, prop, initialInUnit + unit );
	
			// Update scale, tolerating zero or NaN from tween.cur()
			// Break the loop if scale is unchanged or perfect, or if we've just had enough.
			} while (
				scale !== ( scale = currentValue() / initial ) && scale !== 1 && --maxIterations
			);
		}
	
		if ( valueParts ) {
			initialInUnit = +initialInUnit || +initial || 0;
	
			// Apply relative offset (+=/-=) if specified
			adjusted = valueParts[ 1 ] ?
				initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
				+valueParts[ 2 ];
			if ( tween ) {
				tween.unit = unit;
				tween.start = initialInUnit;
				tween.end = adjusted;
			}
		}
		return adjusted;
	}
	var rcheckableType = ( /^(?:checkbox|radio)$/i );
	
	var rtagName = ( /<([\w:-]+)/ );
	
	var rscriptType = ( /^$|\/(?:java|ecma)script/i );
	
	
	
	// We have to close these tags to support XHTML (#13200)
	var wrapMap = {
	
		// Support: IE9
		option: [ 1, "<select multiple='multiple'>", "</select>" ],
	
		// XHTML parsers do not magically insert elements in the
		// same way that tag soup parsers do. So we cannot shorten
		// this by omitting <tbody> or other required elements.
		thead: [ 1, "<table>", "</table>" ],
		col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
		tr: [ 2, "<table><tbody>", "</tbody></table>" ],
		td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
	
		_default: [ 0, "", "" ]
	};
	
	// Support: IE9
	wrapMap.optgroup = wrapMap.option;
	
	wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
	wrapMap.th = wrapMap.td;
	
	
	function getAll( context, tag ) {
	
		// Support: IE9-11+
		// Use typeof to avoid zero-argument method invocation on host objects (#15151)
		var ret = typeof context.getElementsByTagName !== "undefined" ?
				context.getElementsByTagName( tag || "*" ) :
				typeof context.querySelectorAll !== "undefined" ?
					context.querySelectorAll( tag || "*" ) :
				[];
	
		return tag === undefined || tag && jQuery.nodeName( context, tag ) ?
			jQuery.merge( [ context ], ret ) :
			ret;
	}
	
	
	// Mark scripts as having already been evaluated
	function setGlobalEval( elems, refElements ) {
		var i = 0,
			l = elems.length;
	
		for ( ; i < l; i++ ) {
			dataPriv.set(
				elems[ i ],
				"globalEval",
				!refElements || dataPriv.get( refElements[ i ], "globalEval" )
			);
		}
	}
	
	
	var rhtml = /<|&#?\w+;/;
	
	function buildFragment( elems, context, scripts, selection, ignored ) {
		var elem, tmp, tag, wrap, contains, j,
			fragment = context.createDocumentFragment(),
			nodes = [],
			i = 0,
			l = elems.length;
	
		for ( ; i < l; i++ ) {
			elem = elems[ i ];
	
			if ( elem || elem === 0 ) {
	
				// Add nodes directly
				if ( jQuery.type( elem ) === "object" ) {
	
					// Support: Android<4.1, PhantomJS<2
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );
	
				// Convert non-html into a text node
				} else if ( !rhtml.test( elem ) ) {
					nodes.push( context.createTextNode( elem ) );
	
				// Convert html into DOM nodes
				} else {
					tmp = tmp || fragment.appendChild( context.createElement( "div" ) );
	
					// Deserialize a standard representation
					tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
					wrap = wrapMap[ tag ] || wrapMap._default;
					tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];
	
					// Descend through wrappers to the right content
					j = wrap[ 0 ];
					while ( j-- ) {
						tmp = tmp.lastChild;
					}
	
					// Support: Android<4.1, PhantomJS<2
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge( nodes, tmp.childNodes );
	
					// Remember the top-level container
					tmp = fragment.firstChild;
	
					// Ensure the created nodes are orphaned (#12392)
					tmp.textContent = "";
				}
			}
		}
	
		// Remove wrapper from fragment
		fragment.textContent = "";
	
		i = 0;
		while ( ( elem = nodes[ i++ ] ) ) {
	
			// Skip elements already in the context collection (trac-4087)
			if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
				if ( ignored ) {
					ignored.push( elem );
				}
				continue;
			}
	
			contains = jQuery.contains( elem.ownerDocument, elem );
	
			// Append to fragment
			tmp = getAll( fragment.appendChild( elem ), "script" );
	
			// Preserve script evaluation history
			if ( contains ) {
				setGlobalEval( tmp );
			}
	
			// Capture executables
			if ( scripts ) {
				j = 0;
				while ( ( elem = tmp[ j++ ] ) ) {
					if ( rscriptType.test( elem.type || "" ) ) {
						scripts.push( elem );
					}
				}
			}
		}
	
		return fragment;
	}
	
	
	( function() {
		var fragment = document.createDocumentFragment(),
			div = fragment.appendChild( document.createElement( "div" ) ),
			input = document.createElement( "input" );
	
		// Support: Android 4.0-4.3, Safari<=5.1
		// Check state lost if the name is set (#11217)
		// Support: Windows Web Apps (WWA)
		// `name` and `type` must use .setAttribute for WWA (#14901)
		input.setAttribute( "type", "radio" );
		input.setAttribute( "checked", "checked" );
		input.setAttribute( "name", "t" );
	
		div.appendChild( input );
	
		// Support: Safari<=5.1, Android<4.2
		// Older WebKit doesn't clone checked state correctly in fragments
		support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;
	
		// Support: IE<=11+
		// Make sure textarea (and checkbox) defaultValue is properly cloned
		div.innerHTML = "<textarea>x</textarea>";
		support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
	} )();
	
	
	var
		rkeyEvent = /^key/,
		rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
		rtypenamespace = /^([^.]*)(?:\.(.+)|)/;
	
	function returnTrue() {
		return true;
	}
	
	function returnFalse() {
		return false;
	}
	
	// Support: IE9
	// See #13393 for more info
	function safeActiveElement() {
		try {
			return document.activeElement;
		} catch ( err ) { }
	}
	
	function on( elem, types, selector, data, fn, one ) {
		var origFn, type;
	
		// Types can be a map of types/handlers
		if ( typeof types === "object" ) {
	
			// ( types-Object, selector, data )
			if ( typeof selector !== "string" ) {
	
				// ( types-Object, data )
				data = data || selector;
				selector = undefined;
			}
			for ( type in types ) {
				on( elem, type, selector, data, types[ type ], one );
			}
			return elem;
		}
	
		if ( data == null && fn == null ) {
	
			// ( types, fn )
			fn = selector;
			data = selector = undefined;
		} else if ( fn == null ) {
			if ( typeof selector === "string" ) {
	
				// ( types, selector, fn )
				fn = data;
				data = undefined;
			} else {
	
				// ( types, data, fn )
				fn = data;
				data = selector;
				selector = undefined;
			}
		}
		if ( fn === false ) {
			fn = returnFalse;
		} else if ( !fn ) {
			return elem;
		}
	
		if ( one === 1 ) {
			origFn = fn;
			fn = function( event ) {
	
				// Can use an empty set, since event contains the info
				jQuery().off( event );
				return origFn.apply( this, arguments );
			};
	
			// Use same guid so caller can remove using origFn
			fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
		}
		return elem.each( function() {
			jQuery.event.add( this, types, fn, data, selector );
		} );
	}
	
	/*
	 * Helper functions for managing events -- not part of the public interface.
	 * Props to Dean Edwards' addEvent library for many of the ideas.
	 */
	jQuery.event = {
	
		global: {},
	
		add: function( elem, types, handler, data, selector ) {
	
			var handleObjIn, eventHandle, tmp,
				events, t, handleObj,
				special, handlers, type, namespaces, origType,
				elemData = dataPriv.get( elem );
	
			// Don't attach events to noData or text/comment nodes (but allow plain objects)
			if ( !elemData ) {
				return;
			}
	
			// Caller can pass in an object of custom data in lieu of the handler
			if ( handler.handler ) {
				handleObjIn = handler;
				handler = handleObjIn.handler;
				selector = handleObjIn.selector;
			}
	
			// Make sure that the handler has a unique ID, used to find/remove it later
			if ( !handler.guid ) {
				handler.guid = jQuery.guid++;
			}
	
			// Init the element's event structure and main handler, if this is the first
			if ( !( events = elemData.events ) ) {
				events = elemData.events = {};
			}
			if ( !( eventHandle = elemData.handle ) ) {
				eventHandle = elemData.handle = function( e ) {
	
					// Discard the second event of a jQuery.event.trigger() and
					// when an event is called after a page has unloaded
					return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
						jQuery.event.dispatch.apply( elem, arguments ) : undefined;
				};
			}
	
			// Handle multiple events separated by a space
			types = ( types || "" ).match( rnotwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[ t ] ) || [];
				type = origType = tmp[ 1 ];
				namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();
	
				// There *must* be a type, no attaching namespace-only handlers
				if ( !type ) {
					continue;
				}
	
				// If event changes its type, use the special event handlers for the changed type
				special = jQuery.event.special[ type ] || {};
	
				// If selector defined, determine special event api type, otherwise given type
				type = ( selector ? special.delegateType : special.bindType ) || type;
	
				// Update special based on newly reset type
				special = jQuery.event.special[ type ] || {};
	
				// handleObj is passed to all event handlers
				handleObj = jQuery.extend( {
					type: type,
					origType: origType,
					data: data,
					handler: handler,
					guid: handler.guid,
					selector: selector,
					needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
					namespace: namespaces.join( "." )
				}, handleObjIn );
	
				// Init the event handler queue if we're the first
				if ( !( handlers = events[ type ] ) ) {
					handlers = events[ type ] = [];
					handlers.delegateCount = 0;
	
					// Only use addEventListener if the special events handler returns false
					if ( !special.setup ||
						special.setup.call( elem, data, namespaces, eventHandle ) === false ) {
	
						if ( elem.addEventListener ) {
							elem.addEventListener( type, eventHandle );
						}
					}
				}
	
				if ( special.add ) {
					special.add.call( elem, handleObj );
	
					if ( !handleObj.handler.guid ) {
						handleObj.handler.guid = handler.guid;
					}
				}
	
				// Add to the element's handler list, delegates in front
				if ( selector ) {
					handlers.splice( handlers.delegateCount++, 0, handleObj );
				} else {
					handlers.push( handleObj );
				}
	
				// Keep track of which events have ever been used, for event optimization
				jQuery.event.global[ type ] = true;
			}
	
		},
	
		// Detach an event or set of events from an element
		remove: function( elem, types, handler, selector, mappedTypes ) {
	
			var j, origCount, tmp,
				events, t, handleObj,
				special, handlers, type, namespaces, origType,
				elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );
	
			if ( !elemData || !( events = elemData.events ) ) {
				return;
			}
	
			// Once for each type.namespace in types; type may be omitted
			types = ( types || "" ).match( rnotwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[ t ] ) || [];
				type = origType = tmp[ 1 ];
				namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();
	
				// Unbind all events (on this namespace, if provided) for the element
				if ( !type ) {
					for ( type in events ) {
						jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
					}
					continue;
				}
	
				special = jQuery.event.special[ type ] || {};
				type = ( selector ? special.delegateType : special.bindType ) || type;
				handlers = events[ type ] || [];
				tmp = tmp[ 2 ] &&
					new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );
	
				// Remove matching events
				origCount = j = handlers.length;
				while ( j-- ) {
					handleObj = handlers[ j ];
	
					if ( ( mappedTypes || origType === handleObj.origType ) &&
						( !handler || handler.guid === handleObj.guid ) &&
						( !tmp || tmp.test( handleObj.namespace ) ) &&
						( !selector || selector === handleObj.selector ||
							selector === "**" && handleObj.selector ) ) {
						handlers.splice( j, 1 );
	
						if ( handleObj.selector ) {
							handlers.delegateCount--;
						}
						if ( special.remove ) {
							special.remove.call( elem, handleObj );
						}
					}
				}
	
				// Remove generic event handler if we removed something and no more handlers exist
				// (avoids potential for endless recursion during removal of special event handlers)
				if ( origCount && !handlers.length ) {
					if ( !special.teardown ||
						special.teardown.call( elem, namespaces, elemData.handle ) === false ) {
	
						jQuery.removeEvent( elem, type, elemData.handle );
					}
	
					delete events[ type ];
				}
			}
	
			// Remove data and the expando if it's no longer used
			if ( jQuery.isEmptyObject( events ) ) {
				dataPriv.remove( elem, "handle events" );
			}
		},
	
		dispatch: function( event ) {
	
			// Make a writable jQuery.Event from the native event object
			event = jQuery.event.fix( event );
	
			var i, j, ret, matched, handleObj,
				handlerQueue = [],
				args = slice.call( arguments ),
				handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
				special = jQuery.event.special[ event.type ] || {};
	
			// Use the fix-ed jQuery.Event rather than the (read-only) native event
			args[ 0 ] = event;
			event.delegateTarget = this;
	
			// Call the preDispatch hook for the mapped type, and let it bail if desired
			if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
				return;
			}
	
			// Determine handlers
			handlerQueue = jQuery.event.handlers.call( this, event, handlers );
	
			// Run delegates first; they may want to stop propagation beneath us
			i = 0;
			while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
				event.currentTarget = matched.elem;
	
				j = 0;
				while ( ( handleObj = matched.handlers[ j++ ] ) &&
					!event.isImmediatePropagationStopped() ) {
	
					// Triggered event must either 1) have no namespace, or 2) have namespace(s)
					// a subset or equal to those in the bound event (both can have no namespace).
					if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {
	
						event.handleObj = handleObj;
						event.data = handleObj.data;
	
						ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
							handleObj.handler ).apply( matched.elem, args );
	
						if ( ret !== undefined ) {
							if ( ( event.result = ret ) === false ) {
								event.preventDefault();
								event.stopPropagation();
							}
						}
					}
				}
			}
	
			// Call the postDispatch hook for the mapped type
			if ( special.postDispatch ) {
				special.postDispatch.call( this, event );
			}
	
			return event.result;
		},
	
		handlers: function( event, handlers ) {
			var i, matches, sel, handleObj,
				handlerQueue = [],
				delegateCount = handlers.delegateCount,
				cur = event.target;
	
			// Support (at least): Chrome, IE9
			// Find delegate handlers
			// Black-hole SVG <use> instance trees (#13180)
			//
			// Support: Firefox<=42+
			// Avoid non-left-click in FF but don't block IE radio events (#3861, gh-2343)
			if ( delegateCount && cur.nodeType &&
				( event.type !== "click" || isNaN( event.button ) || event.button < 1 ) ) {
	
				for ( ; cur !== this; cur = cur.parentNode || this ) {
	
					// Don't check non-elements (#13208)
					// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
					if ( cur.nodeType === 1 && ( cur.disabled !== true || event.type !== "click" ) ) {
						matches = [];
						for ( i = 0; i < delegateCount; i++ ) {
							handleObj = handlers[ i ];
	
							// Don't conflict with Object.prototype properties (#13203)
							sel = handleObj.selector + " ";
	
							if ( matches[ sel ] === undefined ) {
								matches[ sel ] = handleObj.needsContext ?
									jQuery( sel, this ).index( cur ) > -1 :
									jQuery.find( sel, this, null, [ cur ] ).length;
							}
							if ( matches[ sel ] ) {
								matches.push( handleObj );
							}
						}
						if ( matches.length ) {
							handlerQueue.push( { elem: cur, handlers: matches } );
						}
					}
				}
			}
	
			// Add the remaining (directly-bound) handlers
			if ( delegateCount < handlers.length ) {
				handlerQueue.push( { elem: this, handlers: handlers.slice( delegateCount ) } );
			}
	
			return handlerQueue;
		},
	
		// Includes some event props shared by KeyEvent and MouseEvent
		props: ( "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase " +
			"metaKey relatedTarget shiftKey target timeStamp view which" ).split( " " ),
	
		fixHooks: {},
	
		keyHooks: {
			props: "char charCode key keyCode".split( " " ),
			filter: function( event, original ) {
	
				// Add which for key events
				if ( event.which == null ) {
					event.which = original.charCode != null ? original.charCode : original.keyCode;
				}
	
				return event;
			}
		},
	
		mouseHooks: {
			props: ( "button buttons clientX clientY offsetX offsetY pageX pageY " +
				"screenX screenY toElement" ).split( " " ),
			filter: function( event, original ) {
				var eventDoc, doc, body,
					button = original.button;
	
				// Calculate pageX/Y if missing and clientX/Y available
				if ( event.pageX == null && original.clientX != null ) {
					eventDoc = event.target.ownerDocument || document;
					doc = eventDoc.documentElement;
					body = eventDoc.body;
	
					event.pageX = original.clientX +
						( doc && doc.scrollLeft || body && body.scrollLeft || 0 ) -
						( doc && doc.clientLeft || body && body.clientLeft || 0 );
					event.pageY = original.clientY +
						( doc && doc.scrollTop  || body && body.scrollTop  || 0 ) -
						( doc && doc.clientTop  || body && body.clientTop  || 0 );
				}
	
				// Add which for click: 1 === left; 2 === middle; 3 === right
				// Note: button is not normalized, so don't use it
				if ( !event.which && button !== undefined ) {
					event.which = ( button & 1 ? 1 : ( button & 2 ? 3 : ( button & 4 ? 2 : 0 ) ) );
				}
	
				return event;
			}
		},
	
		fix: function( event ) {
			if ( event[ jQuery.expando ] ) {
				return event;
			}
	
			// Create a writable copy of the event object and normalize some properties
			var i, prop, copy,
				type = event.type,
				originalEvent = event,
				fixHook = this.fixHooks[ type ];
	
			if ( !fixHook ) {
				this.fixHooks[ type ] = fixHook =
					rmouseEvent.test( type ) ? this.mouseHooks :
					rkeyEvent.test( type ) ? this.keyHooks :
					{};
			}
			copy = fixHook.props ? this.props.concat( fixHook.props ) : this.props;
	
			event = new jQuery.Event( originalEvent );
	
			i = copy.length;
			while ( i-- ) {
				prop = copy[ i ];
				event[ prop ] = originalEvent[ prop ];
			}
	
			// Support: Cordova 2.5 (WebKit) (#13255)
			// All events should have a target; Cordova deviceready doesn't
			if ( !event.target ) {
				event.target = document;
			}
	
			// Support: Safari 6.0+, Chrome<28
			// Target should not be a text node (#504, #13143)
			if ( event.target.nodeType === 3 ) {
				event.target = event.target.parentNode;
			}
	
			return fixHook.filter ? fixHook.filter( event, originalEvent ) : event;
		},
	
		special: {
			load: {
	
				// Prevent triggered image.load events from bubbling to window.load
				noBubble: true
			},
			focus: {
	
				// Fire native event if possible so blur/focus sequence is correct
				trigger: function() {
					if ( this !== safeActiveElement() && this.focus ) {
						this.focus();
						return false;
					}
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function() {
					if ( this === safeActiveElement() && this.blur ) {
						this.blur();
						return false;
					}
				},
				delegateType: "focusout"
			},
			click: {
	
				// For checkbox, fire native event so checked state will be right
				trigger: function() {
					if ( this.type === "checkbox" && this.click && jQuery.nodeName( this, "input" ) ) {
						this.click();
						return false;
					}
				},
	
				// For cross-browser consistency, don't fire native .click() on links
				_default: function( event ) {
					return jQuery.nodeName( event.target, "a" );
				}
			},
	
			beforeunload: {
				postDispatch: function( event ) {
	
					// Support: Firefox 20+
					// Firefox doesn't alert if the returnValue field is not set.
					if ( event.result !== undefined && event.originalEvent ) {
						event.originalEvent.returnValue = event.result;
					}
				}
			}
		}
	};
	
	jQuery.removeEvent = function( elem, type, handle ) {
	
		// This "if" is needed for plain objects
		if ( elem.removeEventListener ) {
			elem.removeEventListener( type, handle );
		}
	};
	
	jQuery.Event = function( src, props ) {
	
		// Allow instantiation without the 'new' keyword
		if ( !( this instanceof jQuery.Event ) ) {
			return new jQuery.Event( src, props );
		}
	
		// Event object
		if ( src && src.type ) {
			this.originalEvent = src;
			this.type = src.type;
	
			// Events bubbling up the document may have been marked as prevented
			// by a handler lower down the tree; reflect the correct value.
			this.isDefaultPrevented = src.defaultPrevented ||
					src.defaultPrevented === undefined &&
	
					// Support: Android<4.0
					src.returnValue === false ?
				returnTrue :
				returnFalse;
	
		// Event type
		} else {
			this.type = src;
		}
	
		// Put explicitly provided properties onto the event object
		if ( props ) {
			jQuery.extend( this, props );
		}
	
		// Create a timestamp if incoming event doesn't have one
		this.timeStamp = src && src.timeStamp || jQuery.now();
	
		// Mark it as fixed
		this[ jQuery.expando ] = true;
	};
	
	// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
	// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
	jQuery.Event.prototype = {
		constructor: jQuery.Event,
		isDefaultPrevented: returnFalse,
		isPropagationStopped: returnFalse,
		isImmediatePropagationStopped: returnFalse,
		isSimulated: false,
	
		preventDefault: function() {
			var e = this.originalEvent;
	
			this.isDefaultPrevented = returnTrue;
	
			if ( e && !this.isSimulated ) {
				e.preventDefault();
			}
		},
		stopPropagation: function() {
			var e = this.originalEvent;
	
			this.isPropagationStopped = returnTrue;
	
			if ( e && !this.isSimulated ) {
				e.stopPropagation();
			}
		},
		stopImmediatePropagation: function() {
			var e = this.originalEvent;
	
			this.isImmediatePropagationStopped = returnTrue;
	
			if ( e && !this.isSimulated ) {
				e.stopImmediatePropagation();
			}
	
			this.stopPropagation();
		}
	};
	
	// Create mouseenter/leave events using mouseover/out and event-time checks
	// so that event delegation works in jQuery.
	// Do the same for pointerenter/pointerleave and pointerover/pointerout
	//
	// Support: Safari 7 only
	// Safari sends mouseenter too often; see:
	// https://code.google.com/p/chromium/issues/detail?id=470258
	// for the description of the bug (it existed in older Chrome versions as well).
	jQuery.each( {
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function( orig, fix ) {
		jQuery.event.special[ orig ] = {
			delegateType: fix,
			bindType: fix,
	
			handle: function( event ) {
				var ret,
					target = this,
					related = event.relatedTarget,
					handleObj = event.handleObj;
	
				// For mouseenter/leave call the handler if related is outside the target.
				// NB: No relatedTarget if the mouse left/entered the browser window
				if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
					event.type = handleObj.origType;
					ret = handleObj.handler.apply( this, arguments );
					event.type = fix;
				}
				return ret;
			}
		};
	} );
	
	jQuery.fn.extend( {
		on: function( types, selector, data, fn ) {
			return on( this, types, selector, data, fn );
		},
		one: function( types, selector, data, fn ) {
			return on( this, types, selector, data, fn, 1 );
		},
		off: function( types, selector, fn ) {
			var handleObj, type;
			if ( types && types.preventDefault && types.handleObj ) {
	
				// ( event )  dispatched jQuery.Event
				handleObj = types.handleObj;
				jQuery( types.delegateTarget ).off(
					handleObj.namespace ?
						handleObj.origType + "." + handleObj.namespace :
						handleObj.origType,
					handleObj.selector,
					handleObj.handler
				);
				return this;
			}
			if ( typeof types === "object" ) {
	
				// ( types-object [, selector] )
				for ( type in types ) {
					this.off( type, selector, types[ type ] );
				}
				return this;
			}
			if ( selector === false || typeof selector === "function" ) {
	
				// ( types [, fn] )
				fn = selector;
				selector = undefined;
			}
			if ( fn === false ) {
				fn = returnFalse;
			}
			return this.each( function() {
				jQuery.event.remove( this, types, fn, selector );
			} );
		}
	} );
	
	
	var
		rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
	
		// Support: IE 10-11, Edge 10240+
		// In IE/Edge using regex groups here causes severe slowdowns.
		// See https://connect.microsoft.com/IE/feedback/details/1736512/
		rnoInnerhtml = /<script|<style|<link/i,
	
		// checked="checked" or checked
		rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
		rscriptTypeMasked = /^true\/(.*)/,
		rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
	
	// Manipulating tables requires a tbody
	function manipulationTarget( elem, content ) {
		return jQuery.nodeName( elem, "table" ) &&
			jQuery.nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ?
	
			elem.getElementsByTagName( "tbody" )[ 0 ] ||
				elem.appendChild( elem.ownerDocument.createElement( "tbody" ) ) :
			elem;
	}
	
	// Replace/restore the type attribute of script elements for safe DOM manipulation
	function disableScript( elem ) {
		elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
		return elem;
	}
	function restoreScript( elem ) {
		var match = rscriptTypeMasked.exec( elem.type );
	
		if ( match ) {
			elem.type = match[ 1 ];
		} else {
			elem.removeAttribute( "type" );
		}
	
		return elem;
	}
	
	function cloneCopyEvent( src, dest ) {
		var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;
	
		if ( dest.nodeType !== 1 ) {
			return;
		}
	
		// 1. Copy private data: events, handlers, etc.
		if ( dataPriv.hasData( src ) ) {
			pdataOld = dataPriv.access( src );
			pdataCur = dataPriv.set( dest, pdataOld );
			events = pdataOld.events;
	
			if ( events ) {
				delete pdataCur.handle;
				pdataCur.events = {};
	
				for ( type in events ) {
					for ( i = 0, l = events[ type ].length; i < l; i++ ) {
						jQuery.event.add( dest, type, events[ type ][ i ] );
					}
				}
			}
		}
	
		// 2. Copy user data
		if ( dataUser.hasData( src ) ) {
			udataOld = dataUser.access( src );
			udataCur = jQuery.extend( {}, udataOld );
	
			dataUser.set( dest, udataCur );
		}
	}
	
	// Fix IE bugs, see support tests
	function fixInput( src, dest ) {
		var nodeName = dest.nodeName.toLowerCase();
	
		// Fails to persist the checked state of a cloned checkbox or radio button.
		if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
			dest.checked = src.checked;
	
		// Fails to return the selected option to the default selected state when cloning options
		} else if ( nodeName === "input" || nodeName === "textarea" ) {
			dest.defaultValue = src.defaultValue;
		}
	}
	
	function domManip( collection, args, callback, ignored ) {
	
		// Flatten any nested arrays
		args = concat.apply( [], args );
	
		var fragment, first, scripts, hasScripts, node, doc,
			i = 0,
			l = collection.length,
			iNoClone = l - 1,
			value = args[ 0 ],
			isFunction = jQuery.isFunction( value );
	
		// We can't cloneNode fragments that contain checked, in WebKit
		if ( isFunction ||
				( l > 1 && typeof value === "string" &&
					!support.checkClone && rchecked.test( value ) ) ) {
			return collection.each( function( index ) {
				var self = collection.eq( index );
				if ( isFunction ) {
					args[ 0 ] = value.call( this, index, self.html() );
				}
				domManip( self, args, callback, ignored );
			} );
		}
	
		if ( l ) {
			fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
			first = fragment.firstChild;
	
			if ( fragment.childNodes.length === 1 ) {
				fragment = first;
			}
	
			// Require either new content or an interest in ignored elements to invoke the callback
			if ( first || ignored ) {
				scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
				hasScripts = scripts.length;
	
				// Use the original fragment for the last item
				// instead of the first because it can end up
				// being emptied incorrectly in certain situations (#8070).
				for ( ; i < l; i++ ) {
					node = fragment;
	
					if ( i !== iNoClone ) {
						node = jQuery.clone( node, true, true );
	
						// Keep references to cloned scripts for later restoration
						if ( hasScripts ) {
	
							// Support: Android<4.1, PhantomJS<2
							// push.apply(_, arraylike) throws on ancient WebKit
							jQuery.merge( scripts, getAll( node, "script" ) );
						}
					}
	
					callback.call( collection[ i ], node, i );
				}
	
				if ( hasScripts ) {
					doc = scripts[ scripts.length - 1 ].ownerDocument;
	
					// Reenable scripts
					jQuery.map( scripts, restoreScript );
	
					// Evaluate executable scripts on first document insertion
					for ( i = 0; i < hasScripts; i++ ) {
						node = scripts[ i ];
						if ( rscriptType.test( node.type || "" ) &&
							!dataPriv.access( node, "globalEval" ) &&
							jQuery.contains( doc, node ) ) {
	
							if ( node.src ) {
	
								// Optional AJAX dependency, but won't run scripts if not present
								if ( jQuery._evalUrl ) {
									jQuery._evalUrl( node.src );
								}
							} else {
								jQuery.globalEval( node.textContent.replace( rcleanScript, "" ) );
							}
						}
					}
				}
			}
		}
	
		return collection;
	}
	
	function remove( elem, selector, keepData ) {
		var node,
			nodes = selector ? jQuery.filter( selector, elem ) : elem,
			i = 0;
	
		for ( ; ( node = nodes[ i ] ) != null; i++ ) {
			if ( !keepData && node.nodeType === 1 ) {
				jQuery.cleanData( getAll( node ) );
			}
	
			if ( node.parentNode ) {
				if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
					setGlobalEval( getAll( node, "script" ) );
				}
				node.parentNode.removeChild( node );
			}
		}
	
		return elem;
	}
	
	jQuery.extend( {
		htmlPrefilter: function( html ) {
			return html.replace( rxhtmlTag, "<$1></$2>" );
		},
	
		clone: function( elem, dataAndEvents, deepDataAndEvents ) {
			var i, l, srcElements, destElements,
				clone = elem.cloneNode( true ),
				inPage = jQuery.contains( elem.ownerDocument, elem );
	
			// Fix IE cloning issues
			if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
					!jQuery.isXMLDoc( elem ) ) {
	
				// We eschew Sizzle here for performance reasons: http://jsperf.com/getall-vs-sizzle/2
				destElements = getAll( clone );
				srcElements = getAll( elem );
	
				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					fixInput( srcElements[ i ], destElements[ i ] );
				}
			}
	
			// Copy the events from the original to the clone
			if ( dataAndEvents ) {
				if ( deepDataAndEvents ) {
					srcElements = srcElements || getAll( elem );
					destElements = destElements || getAll( clone );
	
					for ( i = 0, l = srcElements.length; i < l; i++ ) {
						cloneCopyEvent( srcElements[ i ], destElements[ i ] );
					}
				} else {
					cloneCopyEvent( elem, clone );
				}
			}
	
			// Preserve script evaluation history
			destElements = getAll( clone, "script" );
			if ( destElements.length > 0 ) {
				setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
			}
	
			// Return the cloned set
			return clone;
		},
	
		cleanData: function( elems ) {
			var data, elem, type,
				special = jQuery.event.special,
				i = 0;
	
			for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
				if ( acceptData( elem ) ) {
					if ( ( data = elem[ dataPriv.expando ] ) ) {
						if ( data.events ) {
							for ( type in data.events ) {
								if ( special[ type ] ) {
									jQuery.event.remove( elem, type );
	
								// This is a shortcut to avoid jQuery.event.remove's overhead
								} else {
									jQuery.removeEvent( elem, type, data.handle );
								}
							}
						}
	
						// Support: Chrome <= 35-45+
						// Assign undefined instead of using delete, see Data#remove
						elem[ dataPriv.expando ] = undefined;
					}
					if ( elem[ dataUser.expando ] ) {
	
						// Support: Chrome <= 35-45+
						// Assign undefined instead of using delete, see Data#remove
						elem[ dataUser.expando ] = undefined;
					}
				}
			}
		}
	} );
	
	jQuery.fn.extend( {
	
		// Keep domManip exposed until 3.0 (gh-2225)
		domManip: domManip,
	
		detach: function( selector ) {
			return remove( this, selector, true );
		},
	
		remove: function( selector ) {
			return remove( this, selector );
		},
	
		text: function( value ) {
			return access( this, function( value ) {
				return value === undefined ?
					jQuery.text( this ) :
					this.empty().each( function() {
						if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
							this.textContent = value;
						}
					} );
			}, null, value, arguments.length );
		},
	
		append: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.appendChild( elem );
				}
			} );
		},
	
		prepend: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.insertBefore( elem, target.firstChild );
				}
			} );
		},
	
		before: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this );
				}
			} );
		},
	
		after: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this.nextSibling );
				}
			} );
		},
	
		empty: function() {
			var elem,
				i = 0;
	
			for ( ; ( elem = this[ i ] ) != null; i++ ) {
				if ( elem.nodeType === 1 ) {
	
					// Prevent memory leaks
					jQuery.cleanData( getAll( elem, false ) );
	
					// Remove any remaining nodes
					elem.textContent = "";
				}
			}
	
			return this;
		},
	
		clone: function( dataAndEvents, deepDataAndEvents ) {
			dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
			deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;
	
			return this.map( function() {
				return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
			} );
		},
	
		html: function( value ) {
			return access( this, function( value ) {
				var elem = this[ 0 ] || {},
					i = 0,
					l = this.length;
	
				if ( value === undefined && elem.nodeType === 1 ) {
					return elem.innerHTML;
				}
	
				// See if we can take a shortcut and just use innerHTML
				if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
					!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {
	
					value = jQuery.htmlPrefilter( value );
	
					try {
						for ( ; i < l; i++ ) {
							elem = this[ i ] || {};
	
							// Remove element nodes and prevent memory leaks
							if ( elem.nodeType === 1 ) {
								jQuery.cleanData( getAll( elem, false ) );
								elem.innerHTML = value;
							}
						}
	
						elem = 0;
	
					// If using innerHTML throws an exception, use the fallback method
					} catch ( e ) {}
				}
	
				if ( elem ) {
					this.empty().append( value );
				}
			}, null, value, arguments.length );
		},
	
		replaceWith: function() {
			var ignored = [];
	
			// Make the changes, replacing each non-ignored context element with the new content
			return domManip( this, arguments, function( elem ) {
				var parent = this.parentNode;
	
				if ( jQuery.inArray( this, ignored ) < 0 ) {
					jQuery.cleanData( getAll( this ) );
					if ( parent ) {
						parent.replaceChild( elem, this );
					}
				}
	
			// Force callback invocation
			}, ignored );
		}
	} );
	
	jQuery.each( {
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function( name, original ) {
		jQuery.fn[ name ] = function( selector ) {
			var elems,
				ret = [],
				insert = jQuery( selector ),
				last = insert.length - 1,
				i = 0;
	
			for ( ; i <= last; i++ ) {
				elems = i === last ? this : this.clone( true );
				jQuery( insert[ i ] )[ original ]( elems );
	
				// Support: QtWebKit
				// .get() because push.apply(_, arraylike) throws
				push.apply( ret, elems.get() );
			}
	
			return this.pushStack( ret );
		};
	} );
	
	
	var iframe,
		elemdisplay = {
	
			// Support: Firefox
			// We have to pre-define these values for FF (#10227)
			HTML: "block",
			BODY: "block"
		};
	
	/**
	 * Retrieve the actual display of a element
	 * @param {String} name nodeName of the element
	 * @param {Object} doc Document object
	 */
	
	// Called only from within defaultDisplay
	function actualDisplay( name, doc ) {
		var elem = jQuery( doc.createElement( name ) ).appendTo( doc.body ),
	
			display = jQuery.css( elem[ 0 ], "display" );
	
		// We don't have any data stored on the element,
		// so use "detach" method as fast way to get rid of the element
		elem.detach();
	
		return display;
	}
	
	/**
	 * Try to determine the default display value of an element
	 * @param {String} nodeName
	 */
	function defaultDisplay( nodeName ) {
		var doc = document,
			display = elemdisplay[ nodeName ];
	
		if ( !display ) {
			display = actualDisplay( nodeName, doc );
	
			// If the simple way fails, read from inside an iframe
			if ( display === "none" || !display ) {
	
				// Use the already-created iframe if possible
				iframe = ( iframe || jQuery( "<iframe frameborder='0' width='0' height='0'/>" ) )
					.appendTo( doc.documentElement );
	
				// Always write a new HTML skeleton so Webkit and Firefox don't choke on reuse
				doc = iframe[ 0 ].contentDocument;
	
				// Support: IE
				doc.write();
				doc.close();
	
				display = actualDisplay( nodeName, doc );
				iframe.detach();
			}
	
			// Store the correct default display
			elemdisplay[ nodeName ] = display;
		}
	
		return display;
	}
	var rmargin = ( /^margin/ );
	
	var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );
	
	var getStyles = function( elem ) {
	
			// Support: IE<=11+, Firefox<=30+ (#15098, #14150)
			// IE throws on elements created in popups
			// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
			var view = elem.ownerDocument.defaultView;
	
			if ( !view || !view.opener ) {
				view = window;
			}
	
			return view.getComputedStyle( elem );
		};
	
	var swap = function( elem, options, callback, args ) {
		var ret, name,
			old = {};
	
		// Remember the old values, and insert the new ones
		for ( name in options ) {
			old[ name ] = elem.style[ name ];
			elem.style[ name ] = options[ name ];
		}
	
		ret = callback.apply( elem, args || [] );
	
		// Revert the old values
		for ( name in options ) {
			elem.style[ name ] = old[ name ];
		}
	
		return ret;
	};
	
	
	var documentElement = document.documentElement;
	
	
	
	( function() {
		var pixelPositionVal, boxSizingReliableVal, pixelMarginRightVal, reliableMarginLeftVal,
			container = document.createElement( "div" ),
			div = document.createElement( "div" );
	
		// Finish early in limited (non-browser) environments
		if ( !div.style ) {
			return;
		}
	
		// Support: IE9-11+
		// Style of cloned element affects source element cloned (#8908)
		div.style.backgroundClip = "content-box";
		div.cloneNode( true ).style.backgroundClip = "";
		support.clearCloneStyle = div.style.backgroundClip === "content-box";
	
		container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" +
			"padding:0;margin-top:1px;position:absolute";
		container.appendChild( div );
	
		// Executing both pixelPosition & boxSizingReliable tests require only one layout
		// so they're executed at the same time to save the second computation.
		function computeStyleTests() {
			div.style.cssText =
	
				// Support: Firefox<29, Android 2.3
				// Vendor-prefix box-sizing
				"-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;" +
				"position:relative;display:block;" +
				"margin:auto;border:1px;padding:1px;" +
				"top:1%;width:50%";
			div.innerHTML = "";
			documentElement.appendChild( container );
	
			var divStyle = window.getComputedStyle( div );
			pixelPositionVal = divStyle.top !== "1%";
			reliableMarginLeftVal = divStyle.marginLeft === "2px";
			boxSizingReliableVal = divStyle.width === "4px";
	
			// Support: Android 4.0 - 4.3 only
			// Some styles come back with percentage values, even though they shouldn't
			div.style.marginRight = "50%";
			pixelMarginRightVal = divStyle.marginRight === "4px";
	
			documentElement.removeChild( container );
		}
	
		jQuery.extend( support, {
			pixelPosition: function() {
	
				// This test is executed only once but we still do memoizing
				// since we can use the boxSizingReliable pre-computing.
				// No need to check if the test was already performed, though.
				computeStyleTests();
				return pixelPositionVal;
			},
			boxSizingReliable: function() {
				if ( boxSizingReliableVal == null ) {
					computeStyleTests();
				}
				return boxSizingReliableVal;
			},
			pixelMarginRight: function() {
	
				// Support: Android 4.0-4.3
				// We're checking for boxSizingReliableVal here instead of pixelMarginRightVal
				// since that compresses better and they're computed together anyway.
				if ( boxSizingReliableVal == null ) {
					computeStyleTests();
				}
				return pixelMarginRightVal;
			},
			reliableMarginLeft: function() {
	
				// Support: IE <=8 only, Android 4.0 - 4.3 only, Firefox <=3 - 37
				if ( boxSizingReliableVal == null ) {
					computeStyleTests();
				}
				return reliableMarginLeftVal;
			},
			reliableMarginRight: function() {
	
				// Support: Android 2.3
				// Check if div with explicit width and no margin-right incorrectly
				// gets computed margin-right based on width of container. (#3333)
				// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
				// This support function is only executed once so no memoizing is needed.
				var ret,
					marginDiv = div.appendChild( document.createElement( "div" ) );
	
				// Reset CSS: box-sizing; display; margin; border; padding
				marginDiv.style.cssText = div.style.cssText =
	
					// Support: Android 2.3
					// Vendor-prefix box-sizing
					"-webkit-box-sizing:content-box;box-sizing:content-box;" +
					"display:block;margin:0;border:0;padding:0";
				marginDiv.style.marginRight = marginDiv.style.width = "0";
				div.style.width = "1px";
				documentElement.appendChild( container );
	
				ret = !parseFloat( window.getComputedStyle( marginDiv ).marginRight );
	
				documentElement.removeChild( container );
				div.removeChild( marginDiv );
	
				return ret;
			}
		} );
	} )();
	
	
	function curCSS( elem, name, computed ) {
		var width, minWidth, maxWidth, ret,
			style = elem.style;
	
		computed = computed || getStyles( elem );
		ret = computed ? computed.getPropertyValue( name ) || computed[ name ] : undefined;
	
		// Support: Opera 12.1x only
		// Fall back to style even without computed
		// computed is undefined for elems on document fragments
		if ( ( ret === "" || ret === undefined ) && !jQuery.contains( elem.ownerDocument, elem ) ) {
			ret = jQuery.style( elem, name );
		}
	
		// Support: IE9
		// getPropertyValue is only needed for .css('filter') (#12537)
		if ( computed ) {
	
			// A tribute to the "awesome hack by Dean Edwards"
			// Android Browser returns percentage for some values,
			// but width seems to be reliably pixels.
			// This is against the CSSOM draft spec:
			// http://dev.w3.org/csswg/cssom/#resolved-values
			if ( !support.pixelMarginRight() && rnumnonpx.test( ret ) && rmargin.test( name ) ) {
	
				// Remember the original values
				width = style.width;
				minWidth = style.minWidth;
				maxWidth = style.maxWidth;
	
				// Put in the new values to get a computed value out
				style.minWidth = style.maxWidth = style.width = ret;
				ret = computed.width;
	
				// Revert the changed values
				style.width = width;
				style.minWidth = minWidth;
				style.maxWidth = maxWidth;
			}
		}
	
		return ret !== undefined ?
	
			// Support: IE9-11+
			// IE returns zIndex value as an integer.
			ret + "" :
			ret;
	}
	
	
	function addGetHookIf( conditionFn, hookFn ) {
	
		// Define the hook, we'll check on the first run if it's really needed.
		return {
			get: function() {
				if ( conditionFn() ) {
	
					// Hook not needed (or it's not possible to use it due
					// to missing dependency), remove it.
					delete this.get;
					return;
				}
	
				// Hook needed; redefine it so that the support test is not executed again.
				return ( this.get = hookFn ).apply( this, arguments );
			}
		};
	}
	
	
	var
	
		// Swappable if display is none or starts with table
		// except "table", "table-cell", or "table-caption"
		// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
		rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	
		cssShow = { position: "absolute", visibility: "hidden", display: "block" },
		cssNormalTransform = {
			letterSpacing: "0",
			fontWeight: "400"
		},
	
		cssPrefixes = [ "Webkit", "O", "Moz", "ms" ],
		emptyStyle = document.createElement( "div" ).style;
	
	// Return a css property mapped to a potentially vendor prefixed property
	function vendorPropName( name ) {
	
		// Shortcut for names that are not vendor prefixed
		if ( name in emptyStyle ) {
			return name;
		}
	
		// Check for vendor prefixed names
		var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
			i = cssPrefixes.length;
	
		while ( i-- ) {
			name = cssPrefixes[ i ] + capName;
			if ( name in emptyStyle ) {
				return name;
			}
		}
	}
	
	function setPositiveNumber( elem, value, subtract ) {
	
		// Any relative (+/-) values have already been
		// normalized at this point
		var matches = rcssNum.exec( value );
		return matches ?
	
			// Guard against undefined "subtract", e.g., when used as in cssHooks
			Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
			value;
	}
	
	function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
		var i = extra === ( isBorderBox ? "border" : "content" ) ?
	
			// If we already have the right measurement, avoid augmentation
			4 :
	
			// Otherwise initialize for horizontal or vertical properties
			name === "width" ? 1 : 0,
	
			val = 0;
	
		for ( ; i < 4; i += 2 ) {
	
			// Both box models exclude margin, so add it if we want it
			if ( extra === "margin" ) {
				val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
			}
	
			if ( isBorderBox ) {
	
				// border-box includes padding, so remove it if we want content
				if ( extra === "content" ) {
					val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
				}
	
				// At this point, extra isn't border nor margin, so remove border
				if ( extra !== "margin" ) {
					val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			} else {
	
				// At this point, extra isn't content, so add padding
				val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
	
				// At this point, extra isn't content nor padding, so add border
				if ( extra !== "padding" ) {
					val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			}
		}
	
		return val;
	}
	
	function getWidthOrHeight( elem, name, extra ) {
	
		// Start with offset property, which is equivalent to the border-box value
		var valueIsBorderBox = true,
			val = name === "width" ? elem.offsetWidth : elem.offsetHeight,
			styles = getStyles( elem ),
			isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";
	
		// Some non-html elements return undefined for offsetWidth, so check for null/undefined
		// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
		// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
		if ( val <= 0 || val == null ) {
	
			// Fall back to computed then uncomputed css if necessary
			val = curCSS( elem, name, styles );
			if ( val < 0 || val == null ) {
				val = elem.style[ name ];
			}
	
			// Computed unit is not pixels. Stop here and return.
			if ( rnumnonpx.test( val ) ) {
				return val;
			}
	
			// Check for style in case a browser which returns unreliable values
			// for getComputedStyle silently falls back to the reliable elem.style
			valueIsBorderBox = isBorderBox &&
				( support.boxSizingReliable() || val === elem.style[ name ] );
	
			// Normalize "", auto, and prepare for extra
			val = parseFloat( val ) || 0;
		}
	
		// Use the active box-sizing model to add/subtract irrelevant styles
		return ( val +
			augmentWidthOrHeight(
				elem,
				name,
				extra || ( isBorderBox ? "border" : "content" ),
				valueIsBorderBox,
				styles
			)
		) + "px";
	}
	
	function showHide( elements, show ) {
		var display, elem, hidden,
			values = [],
			index = 0,
			length = elements.length;
	
		for ( ; index < length; index++ ) {
			elem = elements[ index ];
			if ( !elem.style ) {
				continue;
			}
	
			values[ index ] = dataPriv.get( elem, "olddisplay" );
			display = elem.style.display;
			if ( show ) {
	
				// Reset the inline display of this element to learn if it is
				// being hidden by cascaded rules or not
				if ( !values[ index ] && display === "none" ) {
					elem.style.display = "";
				}
	
				// Set elements which have been overridden with display: none
				// in a stylesheet to whatever the default browser style is
				// for such an element
				if ( elem.style.display === "" && isHidden( elem ) ) {
					values[ index ] = dataPriv.access(
						elem,
						"olddisplay",
						defaultDisplay( elem.nodeName )
					);
				}
			} else {
				hidden = isHidden( elem );
	
				if ( display !== "none" || !hidden ) {
					dataPriv.set(
						elem,
						"olddisplay",
						hidden ? display : jQuery.css( elem, "display" )
					);
				}
			}
		}
	
		// Set the display of most of the elements in a second loop
		// to avoid the constant reflow
		for ( index = 0; index < length; index++ ) {
			elem = elements[ index ];
			if ( !elem.style ) {
				continue;
			}
			if ( !show || elem.style.display === "none" || elem.style.display === "" ) {
				elem.style.display = show ? values[ index ] || "" : "none";
			}
		}
	
		return elements;
	}
	
	jQuery.extend( {
	
		// Add in style property hooks for overriding the default
		// behavior of getting and setting a style property
		cssHooks: {
			opacity: {
				get: function( elem, computed ) {
					if ( computed ) {
	
						// We should always get a number back from opacity
						var ret = curCSS( elem, "opacity" );
						return ret === "" ? "1" : ret;
					}
				}
			}
		},
	
		// Don't automatically add "px" to these possibly-unitless properties
		cssNumber: {
			"animationIterationCount": true,
			"columnCount": true,
			"fillOpacity": true,
			"flexGrow": true,
			"flexShrink": true,
			"fontWeight": true,
			"lineHeight": true,
			"opacity": true,
			"order": true,
			"orphans": true,
			"widows": true,
			"zIndex": true,
			"zoom": true
		},
	
		// Add in properties whose names you wish to fix before
		// setting or getting the value
		cssProps: {
			"float": "cssFloat"
		},
	
		// Get and set the style property on a DOM Node
		style: function( elem, name, value, extra ) {
	
			// Don't set styles on text and comment nodes
			if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
				return;
			}
	
			// Make sure that we're working with the right name
			var ret, type, hooks,
				origName = jQuery.camelCase( name ),
				style = elem.style;
	
			name = jQuery.cssProps[ origName ] ||
				( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );
	
			// Gets hook for the prefixed version, then unprefixed version
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];
	
			// Check if we're setting a value
			if ( value !== undefined ) {
				type = typeof value;
	
				// Convert "+=" or "-=" to relative numbers (#7345)
				if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
					value = adjustCSS( elem, name, ret );
	
					// Fixes bug #9237
					type = "number";
				}
	
				// Make sure that null and NaN values aren't set (#7116)
				if ( value == null || value !== value ) {
					return;
				}
	
				// If a number was passed in, add the unit (except for certain CSS properties)
				if ( type === "number" ) {
					value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
				}
	
				// Support: IE9-11+
				// background-* props affect original clone's values
				if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
					style[ name ] = "inherit";
				}
	
				// If a hook was provided, use that value, otherwise just set the specified value
				if ( !hooks || !( "set" in hooks ) ||
					( value = hooks.set( elem, value, extra ) ) !== undefined ) {
	
					style[ name ] = value;
				}
	
			} else {
	
				// If a hook was provided get the non-computed value from there
				if ( hooks && "get" in hooks &&
					( ret = hooks.get( elem, false, extra ) ) !== undefined ) {
	
					return ret;
				}
	
				// Otherwise just get the value from the style object
				return style[ name ];
			}
		},
	
		css: function( elem, name, extra, styles ) {
			var val, num, hooks,
				origName = jQuery.camelCase( name );
	
			// Make sure that we're working with the right name
			name = jQuery.cssProps[ origName ] ||
				( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );
	
			// Try prefixed name followed by the unprefixed name
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];
	
			// If a hook was provided get the computed value from there
			if ( hooks && "get" in hooks ) {
				val = hooks.get( elem, true, extra );
			}
	
			// Otherwise, if a way to get the computed value exists, use that
			if ( val === undefined ) {
				val = curCSS( elem, name, styles );
			}
	
			// Convert "normal" to computed value
			if ( val === "normal" && name in cssNormalTransform ) {
				val = cssNormalTransform[ name ];
			}
	
			// Make numeric if forced or a qualifier was provided and val looks numeric
			if ( extra === "" || extra ) {
				num = parseFloat( val );
				return extra === true || isFinite( num ) ? num || 0 : val;
			}
			return val;
		}
	} );
	
	jQuery.each( [ "height", "width" ], function( i, name ) {
		jQuery.cssHooks[ name ] = {
			get: function( elem, computed, extra ) {
				if ( computed ) {
	
					// Certain elements can have dimension info if we invisibly show them
					// but it must have a current display style that would benefit
					return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&
						elem.offsetWidth === 0 ?
							swap( elem, cssShow, function() {
								return getWidthOrHeight( elem, name, extra );
							} ) :
							getWidthOrHeight( elem, name, extra );
				}
			},
	
			set: function( elem, value, extra ) {
				var matches,
					styles = extra && getStyles( elem ),
					subtract = extra && augmentWidthOrHeight(
						elem,
						name,
						extra,
						jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
						styles
					);
	
				// Convert to pixels if value adjustment is needed
				if ( subtract && ( matches = rcssNum.exec( value ) ) &&
					( matches[ 3 ] || "px" ) !== "px" ) {
	
					elem.style[ name ] = value;
					value = jQuery.css( elem, name );
				}
	
				return setPositiveNumber( elem, value, subtract );
			}
		};
	} );
	
	jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
		function( elem, computed ) {
			if ( computed ) {
				return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
					elem.getBoundingClientRect().left -
						swap( elem, { marginLeft: 0 }, function() {
							return elem.getBoundingClientRect().left;
						} )
					) + "px";
			}
		}
	);
	
	// Support: Android 2.3
	jQuery.cssHooks.marginRight = addGetHookIf( support.reliableMarginRight,
		function( elem, computed ) {
			if ( computed ) {
				return swap( elem, { "display": "inline-block" },
					curCSS, [ elem, "marginRight" ] );
			}
		}
	);
	
	// These hooks are used by animate to expand properties
	jQuery.each( {
		margin: "",
		padding: "",
		border: "Width"
	}, function( prefix, suffix ) {
		jQuery.cssHooks[ prefix + suffix ] = {
			expand: function( value ) {
				var i = 0,
					expanded = {},
	
					// Assumes a single number if not a string
					parts = typeof value === "string" ? value.split( " " ) : [ value ];
	
				for ( ; i < 4; i++ ) {
					expanded[ prefix + cssExpand[ i ] + suffix ] =
						parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
				}
	
				return expanded;
			}
		};
	
		if ( !rmargin.test( prefix ) ) {
			jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
		}
	} );
	
	jQuery.fn.extend( {
		css: function( name, value ) {
			return access( this, function( elem, name, value ) {
				var styles, len,
					map = {},
					i = 0;
	
				if ( jQuery.isArray( name ) ) {
					styles = getStyles( elem );
					len = name.length;
	
					for ( ; i < len; i++ ) {
						map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
					}
	
					return map;
				}
	
				return value !== undefined ?
					jQuery.style( elem, name, value ) :
					jQuery.css( elem, name );
			}, name, value, arguments.length > 1 );
		},
		show: function() {
			return showHide( this, true );
		},
		hide: function() {
			return showHide( this );
		},
		toggle: function( state ) {
			if ( typeof state === "boolean" ) {
				return state ? this.show() : this.hide();
			}
	
			return this.each( function() {
				if ( isHidden( this ) ) {
					jQuery( this ).show();
				} else {
					jQuery( this ).hide();
				}
			} );
		}
	} );
	
	
	function Tween( elem, options, prop, end, easing ) {
		return new Tween.prototype.init( elem, options, prop, end, easing );
	}
	jQuery.Tween = Tween;
	
	Tween.prototype = {
		constructor: Tween,
		init: function( elem, options, prop, end, easing, unit ) {
			this.elem = elem;
			this.prop = prop;
			this.easing = easing || jQuery.easing._default;
			this.options = options;
			this.start = this.now = this.cur();
			this.end = end;
			this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
		},
		cur: function() {
			var hooks = Tween.propHooks[ this.prop ];
	
			return hooks && hooks.get ?
				hooks.get( this ) :
				Tween.propHooks._default.get( this );
		},
		run: function( percent ) {
			var eased,
				hooks = Tween.propHooks[ this.prop ];
	
			if ( this.options.duration ) {
				this.pos = eased = jQuery.easing[ this.easing ](
					percent, this.options.duration * percent, 0, 1, this.options.duration
				);
			} else {
				this.pos = eased = percent;
			}
			this.now = ( this.end - this.start ) * eased + this.start;
	
			if ( this.options.step ) {
				this.options.step.call( this.elem, this.now, this );
			}
	
			if ( hooks && hooks.set ) {
				hooks.set( this );
			} else {
				Tween.propHooks._default.set( this );
			}
			return this;
		}
	};
	
	Tween.prototype.init.prototype = Tween.prototype;
	
	Tween.propHooks = {
		_default: {
			get: function( tween ) {
				var result;
	
				// Use a property on the element directly when it is not a DOM element,
				// or when there is no matching style property that exists.
				if ( tween.elem.nodeType !== 1 ||
					tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
					return tween.elem[ tween.prop ];
				}
	
				// Passing an empty string as a 3rd parameter to .css will automatically
				// attempt a parseFloat and fallback to a string if the parse fails.
				// Simple values such as "10px" are parsed to Float;
				// complex values such as "rotate(1rad)" are returned as-is.
				result = jQuery.css( tween.elem, tween.prop, "" );
	
				// Empty strings, null, undefined and "auto" are converted to 0.
				return !result || result === "auto" ? 0 : result;
			},
			set: function( tween ) {
	
				// Use step hook for back compat.
				// Use cssHook if its there.
				// Use .style if available and use plain properties where available.
				if ( jQuery.fx.step[ tween.prop ] ) {
					jQuery.fx.step[ tween.prop ]( tween );
				} else if ( tween.elem.nodeType === 1 &&
					( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
						jQuery.cssHooks[ tween.prop ] ) ) {
					jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
				} else {
					tween.elem[ tween.prop ] = tween.now;
				}
			}
		}
	};
	
	// Support: IE9
	// Panic based approach to setting things on disconnected nodes
	Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
		set: function( tween ) {
			if ( tween.elem.nodeType && tween.elem.parentNode ) {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	};
	
	jQuery.easing = {
		linear: function( p ) {
			return p;
		},
		swing: function( p ) {
			return 0.5 - Math.cos( p * Math.PI ) / 2;
		},
		_default: "swing"
	};
	
	jQuery.fx = Tween.prototype.init;
	
	// Back Compat <1.8 extension point
	jQuery.fx.step = {};
	
	
	
	
	var
		fxNow, timerId,
		rfxtypes = /^(?:toggle|show|hide)$/,
		rrun = /queueHooks$/;
	
	// Animations created synchronously will run synchronously
	function createFxNow() {
		window.setTimeout( function() {
			fxNow = undefined;
		} );
		return ( fxNow = jQuery.now() );
	}
	
	// Generate parameters to create a standard animation
	function genFx( type, includeWidth ) {
		var which,
			i = 0,
			attrs = { height: type };
	
		// If we include width, step value is 1 to do all cssExpand values,
		// otherwise step value is 2 to skip over Left and Right
		includeWidth = includeWidth ? 1 : 0;
		for ( ; i < 4 ; i += 2 - includeWidth ) {
			which = cssExpand[ i ];
			attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
		}
	
		if ( includeWidth ) {
			attrs.opacity = attrs.width = type;
		}
	
		return attrs;
	}
	
	function createTween( value, prop, animation ) {
		var tween,
			collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
			index = 0,
			length = collection.length;
		for ( ; index < length; index++ ) {
			if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {
	
				// We're done with this property
				return tween;
			}
		}
	}
	
	function defaultPrefilter( elem, props, opts ) {
		/* jshint validthis: true */
		var prop, value, toggle, tween, hooks, oldfire, display, checkDisplay,
			anim = this,
			orig = {},
			style = elem.style,
			hidden = elem.nodeType && isHidden( elem ),
			dataShow = dataPriv.get( elem, "fxshow" );
	
		// Handle queue: false promises
		if ( !opts.queue ) {
			hooks = jQuery._queueHooks( elem, "fx" );
			if ( hooks.unqueued == null ) {
				hooks.unqueued = 0;
				oldfire = hooks.empty.fire;
				hooks.empty.fire = function() {
					if ( !hooks.unqueued ) {
						oldfire();
					}
				};
			}
			hooks.unqueued++;
	
			anim.always( function() {
	
				// Ensure the complete handler is called before this completes
				anim.always( function() {
					hooks.unqueued--;
					if ( !jQuery.queue( elem, "fx" ).length ) {
						hooks.empty.fire();
					}
				} );
			} );
		}
	
		// Height/width overflow pass
		if ( elem.nodeType === 1 && ( "height" in props || "width" in props ) ) {
	
			// Make sure that nothing sneaks out
			// Record all 3 overflow attributes because IE9-10 do not
			// change the overflow attribute when overflowX and
			// overflowY are set to the same value
			opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];
	
			// Set display property to inline-block for height/width
			// animations on inline elements that are having width/height animated
			display = jQuery.css( elem, "display" );
	
			// Test default display if display is currently "none"
			checkDisplay = display === "none" ?
				dataPriv.get( elem, "olddisplay" ) || defaultDisplay( elem.nodeName ) : display;
	
			if ( checkDisplay === "inline" && jQuery.css( elem, "float" ) === "none" ) {
				style.display = "inline-block";
			}
		}
	
		if ( opts.overflow ) {
			style.overflow = "hidden";
			anim.always( function() {
				style.overflow = opts.overflow[ 0 ];
				style.overflowX = opts.overflow[ 1 ];
				style.overflowY = opts.overflow[ 2 ];
			} );
		}
	
		// show/hide pass
		for ( prop in props ) {
			value = props[ prop ];
			if ( rfxtypes.exec( value ) ) {
				delete props[ prop ];
				toggle = toggle || value === "toggle";
				if ( value === ( hidden ? "hide" : "show" ) ) {
	
					// If there is dataShow left over from a stopped hide or show
					// and we are going to proceed with show, we should pretend to be hidden
					if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
						hidden = true;
					} else {
						continue;
					}
				}
				orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
	
			// Any non-fx value stops us from restoring the original display value
			} else {
				display = undefined;
			}
		}
	
		if ( !jQuery.isEmptyObject( orig ) ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", {} );
			}
	
			// Store state if its toggle - enables .stop().toggle() to "reverse"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}
			if ( hidden ) {
				jQuery( elem ).show();
			} else {
				anim.done( function() {
					jQuery( elem ).hide();
				} );
			}
			anim.done( function() {
				var prop;
	
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
			for ( prop in orig ) {
				tween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
	
				if ( !( prop in dataShow ) ) {
					dataShow[ prop ] = tween.start;
					if ( hidden ) {
						tween.end = tween.start;
						tween.start = prop === "width" || prop === "height" ? 1 : 0;
					}
				}
			}
	
		// If this is a noop like .hide().hide(), restore an overwritten display value
		} else if ( ( display === "none" ? defaultDisplay( elem.nodeName ) : display ) === "inline" ) {
			style.display = display;
		}
	}
	
	function propFilter( props, specialEasing ) {
		var index, name, easing, value, hooks;
	
		// camelCase, specialEasing and expand cssHook pass
		for ( index in props ) {
			name = jQuery.camelCase( index );
			easing = specialEasing[ name ];
			value = props[ index ];
			if ( jQuery.isArray( value ) ) {
				easing = value[ 1 ];
				value = props[ index ] = value[ 0 ];
			}
	
			if ( index !== name ) {
				props[ name ] = value;
				delete props[ index ];
			}
	
			hooks = jQuery.cssHooks[ name ];
			if ( hooks && "expand" in hooks ) {
				value = hooks.expand( value );
				delete props[ name ];
	
				// Not quite $.extend, this won't overwrite existing keys.
				// Reusing 'index' because we have the correct "name"
				for ( index in value ) {
					if ( !( index in props ) ) {
						props[ index ] = value[ index ];
						specialEasing[ index ] = easing;
					}
				}
			} else {
				specialEasing[ name ] = easing;
			}
		}
	}
	
	function Animation( elem, properties, options ) {
		var result,
			stopped,
			index = 0,
			length = Animation.prefilters.length,
			deferred = jQuery.Deferred().always( function() {
	
				// Don't match elem in the :animated selector
				delete tick.elem;
			} ),
			tick = function() {
				if ( stopped ) {
					return false;
				}
				var currentTime = fxNow || createFxNow(),
					remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),
	
					// Support: Android 2.3
					// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
					temp = remaining / animation.duration || 0,
					percent = 1 - temp,
					index = 0,
					length = animation.tweens.length;
	
				for ( ; index < length ; index++ ) {
					animation.tweens[ index ].run( percent );
				}
	
				deferred.notifyWith( elem, [ animation, percent, remaining ] );
	
				if ( percent < 1 && length ) {
					return remaining;
				} else {
					deferred.resolveWith( elem, [ animation ] );
					return false;
				}
			},
			animation = deferred.promise( {
				elem: elem,
				props: jQuery.extend( {}, properties ),
				opts: jQuery.extend( true, {
					specialEasing: {},
					easing: jQuery.easing._default
				}, options ),
				originalProperties: properties,
				originalOptions: options,
				startTime: fxNow || createFxNow(),
				duration: options.duration,
				tweens: [],
				createTween: function( prop, end ) {
					var tween = jQuery.Tween( elem, animation.opts, prop, end,
							animation.opts.specialEasing[ prop ] || animation.opts.easing );
					animation.tweens.push( tween );
					return tween;
				},
				stop: function( gotoEnd ) {
					var index = 0,
	
						// If we are going to the end, we want to run all the tweens
						// otherwise we skip this part
						length = gotoEnd ? animation.tweens.length : 0;
					if ( stopped ) {
						return this;
					}
					stopped = true;
					for ( ; index < length ; index++ ) {
						animation.tweens[ index ].run( 1 );
					}
	
					// Resolve when we played the last frame; otherwise, reject
					if ( gotoEnd ) {
						deferred.notifyWith( elem, [ animation, 1, 0 ] );
						deferred.resolveWith( elem, [ animation, gotoEnd ] );
					} else {
						deferred.rejectWith( elem, [ animation, gotoEnd ] );
					}
					return this;
				}
			} ),
			props = animation.props;
	
		propFilter( props, animation.opts.specialEasing );
	
		for ( ; index < length ; index++ ) {
			result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
			if ( result ) {
				if ( jQuery.isFunction( result.stop ) ) {
					jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
						jQuery.proxy( result.stop, result );
				}
				return result;
			}
		}
	
		jQuery.map( props, createTween, animation );
	
		if ( jQuery.isFunction( animation.opts.start ) ) {
			animation.opts.start.call( elem, animation );
		}
	
		jQuery.fx.timer(
			jQuery.extend( tick, {
				elem: elem,
				anim: animation,
				queue: animation.opts.queue
			} )
		);
	
		// attach callbacks from options
		return animation.progress( animation.opts.progress )
			.done( animation.opts.done, animation.opts.complete )
			.fail( animation.opts.fail )
			.always( animation.opts.always );
	}
	
	jQuery.Animation = jQuery.extend( Animation, {
		tweeners: {
			"*": [ function( prop, value ) {
				var tween = this.createTween( prop, value );
				adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
				return tween;
			} ]
		},
	
		tweener: function( props, callback ) {
			if ( jQuery.isFunction( props ) ) {
				callback = props;
				props = [ "*" ];
			} else {
				props = props.match( rnotwhite );
			}
	
			var prop,
				index = 0,
				length = props.length;
	
			for ( ; index < length ; index++ ) {
				prop = props[ index ];
				Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
				Animation.tweeners[ prop ].unshift( callback );
			}
		},
	
		prefilters: [ defaultPrefilter ],
	
		prefilter: function( callback, prepend ) {
			if ( prepend ) {
				Animation.prefilters.unshift( callback );
			} else {
				Animation.prefilters.push( callback );
			}
		}
	} );
	
	jQuery.speed = function( speed, easing, fn ) {
		var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
			complete: fn || !fn && easing ||
				jQuery.isFunction( speed ) && speed,
			duration: speed,
			easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
		};
	
		opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ?
			opt.duration : opt.duration in jQuery.fx.speeds ?
				jQuery.fx.speeds[ opt.duration ] : jQuery.fx.speeds._default;
	
		// Normalize opt.queue - true/undefined/null -> "fx"
		if ( opt.queue == null || opt.queue === true ) {
			opt.queue = "fx";
		}
	
		// Queueing
		opt.old = opt.complete;
	
		opt.complete = function() {
			if ( jQuery.isFunction( opt.old ) ) {
				opt.old.call( this );
			}
	
			if ( opt.queue ) {
				jQuery.dequeue( this, opt.queue );
			}
		};
	
		return opt;
	};
	
	jQuery.fn.extend( {
		fadeTo: function( speed, to, easing, callback ) {
	
			// Show any hidden elements after setting opacity to 0
			return this.filter( isHidden ).css( "opacity", 0 ).show()
	
				// Animate to the value specified
				.end().animate( { opacity: to }, speed, easing, callback );
		},
		animate: function( prop, speed, easing, callback ) {
			var empty = jQuery.isEmptyObject( prop ),
				optall = jQuery.speed( speed, easing, callback ),
				doAnimation = function() {
	
					// Operate on a copy of prop so per-property easing won't be lost
					var anim = Animation( this, jQuery.extend( {}, prop ), optall );
	
					// Empty animations, or finishing resolves immediately
					if ( empty || dataPriv.get( this, "finish" ) ) {
						anim.stop( true );
					}
				};
				doAnimation.finish = doAnimation;
	
			return empty || optall.queue === false ?
				this.each( doAnimation ) :
				this.queue( optall.queue, doAnimation );
		},
		stop: function( type, clearQueue, gotoEnd ) {
			var stopQueue = function( hooks ) {
				var stop = hooks.stop;
				delete hooks.stop;
				stop( gotoEnd );
			};
	
			if ( typeof type !== "string" ) {
				gotoEnd = clearQueue;
				clearQueue = type;
				type = undefined;
			}
			if ( clearQueue && type !== false ) {
				this.queue( type || "fx", [] );
			}
	
			return this.each( function() {
				var dequeue = true,
					index = type != null && type + "queueHooks",
					timers = jQuery.timers,
					data = dataPriv.get( this );
	
				if ( index ) {
					if ( data[ index ] && data[ index ].stop ) {
						stopQueue( data[ index ] );
					}
				} else {
					for ( index in data ) {
						if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
							stopQueue( data[ index ] );
						}
					}
				}
	
				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this &&
						( type == null || timers[ index ].queue === type ) ) {
	
						timers[ index ].anim.stop( gotoEnd );
						dequeue = false;
						timers.splice( index, 1 );
					}
				}
	
				// Start the next in the queue if the last step wasn't forced.
				// Timers currently will call their complete callbacks, which
				// will dequeue but only if they were gotoEnd.
				if ( dequeue || !gotoEnd ) {
					jQuery.dequeue( this, type );
				}
			} );
		},
		finish: function( type ) {
			if ( type !== false ) {
				type = type || "fx";
			}
			return this.each( function() {
				var index,
					data = dataPriv.get( this ),
					queue = data[ type + "queue" ],
					hooks = data[ type + "queueHooks" ],
					timers = jQuery.timers,
					length = queue ? queue.length : 0;
	
				// Enable finishing flag on private data
				data.finish = true;
	
				// Empty the queue first
				jQuery.queue( this, type, [] );
	
				if ( hooks && hooks.stop ) {
					hooks.stop.call( this, true );
				}
	
				// Look for any active animations, and finish them
				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
						timers[ index ].anim.stop( true );
						timers.splice( index, 1 );
					}
				}
	
				// Look for any animations in the old queue and finish them
				for ( index = 0; index < length; index++ ) {
					if ( queue[ index ] && queue[ index ].finish ) {
						queue[ index ].finish.call( this );
					}
				}
	
				// Turn off finishing flag
				delete data.finish;
			} );
		}
	} );
	
	jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
		var cssFn = jQuery.fn[ name ];
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return speed == null || typeof speed === "boolean" ?
				cssFn.apply( this, arguments ) :
				this.animate( genFx( name, true ), speed, easing, callback );
		};
	} );
	
	// Generate shortcuts for custom animations
	jQuery.each( {
		slideDown: genFx( "show" ),
		slideUp: genFx( "hide" ),
		slideToggle: genFx( "toggle" ),
		fadeIn: { opacity: "show" },
		fadeOut: { opacity: "hide" },
		fadeToggle: { opacity: "toggle" }
	}, function( name, props ) {
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return this.animate( props, speed, easing, callback );
		};
	} );
	
	jQuery.timers = [];
	jQuery.fx.tick = function() {
		var timer,
			i = 0,
			timers = jQuery.timers;
	
		fxNow = jQuery.now();
	
		for ( ; i < timers.length; i++ ) {
			timer = timers[ i ];
	
			// Checks the timer has not already been removed
			if ( !timer() && timers[ i ] === timer ) {
				timers.splice( i--, 1 );
			}
		}
	
		if ( !timers.length ) {
			jQuery.fx.stop();
		}
		fxNow = undefined;
	};
	
	jQuery.fx.timer = function( timer ) {
		jQuery.timers.push( timer );
		if ( timer() ) {
			jQuery.fx.start();
		} else {
			jQuery.timers.pop();
		}
	};
	
	jQuery.fx.interval = 13;
	jQuery.fx.start = function() {
		if ( !timerId ) {
			timerId = window.setInterval( jQuery.fx.tick, jQuery.fx.interval );
		}
	};
	
	jQuery.fx.stop = function() {
		window.clearInterval( timerId );
	
		timerId = null;
	};
	
	jQuery.fx.speeds = {
		slow: 600,
		fast: 200,
	
		// Default speed
		_default: 400
	};
	
	
	// Based off of the plugin by Clint Helfers, with permission.
	// http://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
	jQuery.fn.delay = function( time, type ) {
		time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
		type = type || "fx";
	
		return this.queue( type, function( next, hooks ) {
			var timeout = window.setTimeout( next, time );
			hooks.stop = function() {
				window.clearTimeout( timeout );
			};
		} );
	};
	
	
	( function() {
		var input = document.createElement( "input" ),
			select = document.createElement( "select" ),
			opt = select.appendChild( document.createElement( "option" ) );
	
		input.type = "checkbox";
	
		// Support: iOS<=5.1, Android<=4.2+
		// Default value for a checkbox should be "on"
		support.checkOn = input.value !== "";
	
		// Support: IE<=11+
		// Must access selectedIndex to make default options select
		support.optSelected = opt.selected;
	
		// Support: Android<=2.3
		// Options inside disabled selects are incorrectly marked as disabled
		select.disabled = true;
		support.optDisabled = !opt.disabled;
	
		// Support: IE<=11+
		// An input loses its value after becoming a radio
		input = document.createElement( "input" );
		input.value = "t";
		input.type = "radio";
		support.radioValue = input.value === "t";
	} )();
	
	
	var boolHook,
		attrHandle = jQuery.expr.attrHandle;
	
	jQuery.fn.extend( {
		attr: function( name, value ) {
			return access( this, jQuery.attr, name, value, arguments.length > 1 );
		},
	
		removeAttr: function( name ) {
			return this.each( function() {
				jQuery.removeAttr( this, name );
			} );
		}
	} );
	
	jQuery.extend( {
		attr: function( elem, name, value ) {
			var ret, hooks,
				nType = elem.nodeType;
	
			// Don't get/set attributes on text, comment and attribute nodes
			if ( nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}
	
			// Fallback to prop when attributes are not supported
			if ( typeof elem.getAttribute === "undefined" ) {
				return jQuery.prop( elem, name, value );
			}
	
			// All attributes are lowercase
			// Grab necessary hook if one is defined
			if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
				name = name.toLowerCase();
				hooks = jQuery.attrHooks[ name ] ||
					( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
			}
	
			if ( value !== undefined ) {
				if ( value === null ) {
					jQuery.removeAttr( elem, name );
					return;
				}
	
				if ( hooks && "set" in hooks &&
					( ret = hooks.set( elem, value, name ) ) !== undefined ) {
					return ret;
				}
	
				elem.setAttribute( name, value + "" );
				return value;
			}
	
			if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
				return ret;
			}
	
			ret = jQuery.find.attr( elem, name );
	
			// Non-existent attributes return null, we normalize to undefined
			return ret == null ? undefined : ret;
		},
	
		attrHooks: {
			type: {
				set: function( elem, value ) {
					if ( !support.radioValue && value === "radio" &&
						jQuery.nodeName( elem, "input" ) ) {
						var val = elem.value;
						elem.setAttribute( "type", value );
						if ( val ) {
							elem.value = val;
						}
						return value;
					}
				}
			}
		},
	
		removeAttr: function( elem, value ) {
			var name, propName,
				i = 0,
				attrNames = value && value.match( rnotwhite );
	
			if ( attrNames && elem.nodeType === 1 ) {
				while ( ( name = attrNames[ i++ ] ) ) {
					propName = jQuery.propFix[ name ] || name;
	
					// Boolean attributes get special treatment (#10870)
					if ( jQuery.expr.match.bool.test( name ) ) {
	
						// Set corresponding property to false
						elem[ propName ] = false;
					}
	
					elem.removeAttribute( name );
				}
			}
		}
	} );
	
	// Hooks for boolean attributes
	boolHook = {
		set: function( elem, value, name ) {
			if ( value === false ) {
	
				// Remove boolean attributes when set to false
				jQuery.removeAttr( elem, name );
			} else {
				elem.setAttribute( name, name );
			}
			return name;
		}
	};
	jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
		var getter = attrHandle[ name ] || jQuery.find.attr;
	
		attrHandle[ name ] = function( elem, name, isXML ) {
			var ret, handle;
			if ( !isXML ) {
	
				// Avoid an infinite loop by temporarily removing this function from the getter
				handle = attrHandle[ name ];
				attrHandle[ name ] = ret;
				ret = getter( elem, name, isXML ) != null ?
					name.toLowerCase() :
					null;
				attrHandle[ name ] = handle;
			}
			return ret;
		};
	} );
	
	
	
	
	var rfocusable = /^(?:input|select|textarea|button)$/i,
		rclickable = /^(?:a|area)$/i;
	
	jQuery.fn.extend( {
		prop: function( name, value ) {
			return access( this, jQuery.prop, name, value, arguments.length > 1 );
		},
	
		removeProp: function( name ) {
			return this.each( function() {
				delete this[ jQuery.propFix[ name ] || name ];
			} );
		}
	} );
	
	jQuery.extend( {
		prop: function( elem, name, value ) {
			var ret, hooks,
				nType = elem.nodeType;
	
			// Don't get/set properties on text, comment and attribute nodes
			if ( nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}
	
			if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
	
				// Fix name and attach hooks
				name = jQuery.propFix[ name ] || name;
				hooks = jQuery.propHooks[ name ];
			}
	
			if ( value !== undefined ) {
				if ( hooks && "set" in hooks &&
					( ret = hooks.set( elem, value, name ) ) !== undefined ) {
					return ret;
				}
	
				return ( elem[ name ] = value );
			}
	
			if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
				return ret;
			}
	
			return elem[ name ];
		},
	
		propHooks: {
			tabIndex: {
				get: function( elem ) {
	
					// elem.tabIndex doesn't always return the
					// correct value when it hasn't been explicitly set
					// http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
					// Use proper attribute retrieval(#12072)
					var tabindex = jQuery.find.attr( elem, "tabindex" );
	
					return tabindex ?
						parseInt( tabindex, 10 ) :
						rfocusable.test( elem.nodeName ) ||
							rclickable.test( elem.nodeName ) && elem.href ?
								0 :
								-1;
				}
			}
		},
	
		propFix: {
			"for": "htmlFor",
			"class": "className"
		}
	} );
	
	// Support: IE <=11 only
	// Accessing the selectedIndex property
	// forces the browser to respect setting selected
	// on the option
	// The getter ensures a default option is selected
	// when in an optgroup
	if ( !support.optSelected ) {
		jQuery.propHooks.selected = {
			get: function( elem ) {
				var parent = elem.parentNode;
				if ( parent && parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
				return null;
			},
			set: function( elem ) {
				var parent = elem.parentNode;
				if ( parent ) {
					parent.selectedIndex;
	
					if ( parent.parentNode ) {
						parent.parentNode.selectedIndex;
					}
				}
			}
		};
	}
	
	jQuery.each( [
		"tabIndex",
		"readOnly",
		"maxLength",
		"cellSpacing",
		"cellPadding",
		"rowSpan",
		"colSpan",
		"useMap",
		"frameBorder",
		"contentEditable"
	], function() {
		jQuery.propFix[ this.toLowerCase() ] = this;
	} );
	
	
	
	
	var rclass = /[\t\r\n\f]/g;
	
	function getClass( elem ) {
		return elem.getAttribute && elem.getAttribute( "class" ) || "";
	}
	
	jQuery.fn.extend( {
		addClass: function( value ) {
			var classes, elem, cur, curValue, clazz, j, finalValue,
				i = 0;
	
			if ( jQuery.isFunction( value ) ) {
				return this.each( function( j ) {
					jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
				} );
			}
	
			if ( typeof value === "string" && value ) {
				classes = value.match( rnotwhite ) || [];
	
				while ( ( elem = this[ i++ ] ) ) {
					curValue = getClass( elem );
					cur = elem.nodeType === 1 &&
						( " " + curValue + " " ).replace( rclass, " " );
	
					if ( cur ) {
						j = 0;
						while ( ( clazz = classes[ j++ ] ) ) {
							if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
								cur += clazz + " ";
							}
						}
	
						// Only assign if different to avoid unneeded rendering.
						finalValue = jQuery.trim( cur );
						if ( curValue !== finalValue ) {
							elem.setAttribute( "class", finalValue );
						}
					}
				}
			}
	
			return this;
		},
	
		removeClass: function( value ) {
			var classes, elem, cur, curValue, clazz, j, finalValue,
				i = 0;
	
			if ( jQuery.isFunction( value ) ) {
				return this.each( function( j ) {
					jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
				} );
			}
	
			if ( !arguments.length ) {
				return this.attr( "class", "" );
			}
	
			if ( typeof value === "string" && value ) {
				classes = value.match( rnotwhite ) || [];
	
				while ( ( elem = this[ i++ ] ) ) {
					curValue = getClass( elem );
	
					// This expression is here for better compressibility (see addClass)
					cur = elem.nodeType === 1 &&
						( " " + curValue + " " ).replace( rclass, " " );
	
					if ( cur ) {
						j = 0;
						while ( ( clazz = classes[ j++ ] ) ) {
	
							// Remove *all* instances
							while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
								cur = cur.replace( " " + clazz + " ", " " );
							}
						}
	
						// Only assign if different to avoid unneeded rendering.
						finalValue = jQuery.trim( cur );
						if ( curValue !== finalValue ) {
							elem.setAttribute( "class", finalValue );
						}
					}
				}
			}
	
			return this;
		},
	
		toggleClass: function( value, stateVal ) {
			var type = typeof value;
	
			if ( typeof stateVal === "boolean" && type === "string" ) {
				return stateVal ? this.addClass( value ) : this.removeClass( value );
			}
	
			if ( jQuery.isFunction( value ) ) {
				return this.each( function( i ) {
					jQuery( this ).toggleClass(
						value.call( this, i, getClass( this ), stateVal ),
						stateVal
					);
				} );
			}
	
			return this.each( function() {
				var className, i, self, classNames;
	
				if ( type === "string" ) {
	
					// Toggle individual class names
					i = 0;
					self = jQuery( this );
					classNames = value.match( rnotwhite ) || [];
	
					while ( ( className = classNames[ i++ ] ) ) {
	
						// Check each className given, space separated list
						if ( self.hasClass( className ) ) {
							self.removeClass( className );
						} else {
							self.addClass( className );
						}
					}
	
				// Toggle whole class name
				} else if ( value === undefined || type === "boolean" ) {
					className = getClass( this );
					if ( className ) {
	
						// Store className if set
						dataPriv.set( this, "__className__", className );
					}
	
					// If the element has a class name or if we're passed `false`,
					// then remove the whole classname (if there was one, the above saved it).
					// Otherwise bring back whatever was previously saved (if anything),
					// falling back to the empty string if nothing was stored.
					if ( this.setAttribute ) {
						this.setAttribute( "class",
							className || value === false ?
							"" :
							dataPriv.get( this, "__className__" ) || ""
						);
					}
				}
			} );
		},
	
		hasClass: function( selector ) {
			var className, elem,
				i = 0;
	
			className = " " + selector + " ";
			while ( ( elem = this[ i++ ] ) ) {
				if ( elem.nodeType === 1 &&
					( " " + getClass( elem ) + " " ).replace( rclass, " " )
						.indexOf( className ) > -1
				) {
					return true;
				}
			}
	
			return false;
		}
	} );
	
	
	
	
	var rreturn = /\r/g,
		rspaces = /[\x20\t\r\n\f]+/g;
	
	jQuery.fn.extend( {
		val: function( value ) {
			var hooks, ret, isFunction,
				elem = this[ 0 ];
	
			if ( !arguments.length ) {
				if ( elem ) {
					hooks = jQuery.valHooks[ elem.type ] ||
						jQuery.valHooks[ elem.nodeName.toLowerCase() ];
	
					if ( hooks &&
						"get" in hooks &&
						( ret = hooks.get( elem, "value" ) ) !== undefined
					) {
						return ret;
					}
	
					ret = elem.value;
	
					return typeof ret === "string" ?
	
						// Handle most common string cases
						ret.replace( rreturn, "" ) :
	
						// Handle cases where value is null/undef or number
						ret == null ? "" : ret;
				}
	
				return;
			}
	
			isFunction = jQuery.isFunction( value );
	
			return this.each( function( i ) {
				var val;
	
				if ( this.nodeType !== 1 ) {
					return;
				}
	
				if ( isFunction ) {
					val = value.call( this, i, jQuery( this ).val() );
				} else {
					val = value;
				}
	
				// Treat null/undefined as ""; convert numbers to string
				if ( val == null ) {
					val = "";
	
				} else if ( typeof val === "number" ) {
					val += "";
	
				} else if ( jQuery.isArray( val ) ) {
					val = jQuery.map( val, function( value ) {
						return value == null ? "" : value + "";
					} );
				}
	
				hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];
	
				// If set returns undefined, fall back to normal setting
				if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
					this.value = val;
				}
			} );
		}
	} );
	
	jQuery.extend( {
		valHooks: {
			option: {
				get: function( elem ) {
	
					var val = jQuery.find.attr( elem, "value" );
					return val != null ?
						val :
	
						// Support: IE10-11+
						// option.text throws exceptions (#14686, #14858)
						// Strip and collapse whitespace
						// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
						jQuery.trim( jQuery.text( elem ) ).replace( rspaces, " " );
				}
			},
			select: {
				get: function( elem ) {
					var value, option,
						options = elem.options,
						index = elem.selectedIndex,
						one = elem.type === "select-one" || index < 0,
						values = one ? null : [],
						max = one ? index + 1 : options.length,
						i = index < 0 ?
							max :
							one ? index : 0;
	
					// Loop through all the selected options
					for ( ; i < max; i++ ) {
						option = options[ i ];
	
						// IE8-9 doesn't update selected after form reset (#2551)
						if ( ( option.selected || i === index ) &&
	
								// Don't return options that are disabled or in a disabled optgroup
								( support.optDisabled ?
									!option.disabled : option.getAttribute( "disabled" ) === null ) &&
								( !option.parentNode.disabled ||
									!jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {
	
							// Get the specific value for the option
							value = jQuery( option ).val();
	
							// We don't need an array for one selects
							if ( one ) {
								return value;
							}
	
							// Multi-Selects return an array
							values.push( value );
						}
					}
	
					return values;
				},
	
				set: function( elem, value ) {
					var optionSet, option,
						options = elem.options,
						values = jQuery.makeArray( value ),
						i = options.length;
	
					while ( i-- ) {
						option = options[ i ];
						if ( option.selected =
							jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
						) {
							optionSet = true;
						}
					}
	
					// Force browsers to behave consistently when non-matching value is set
					if ( !optionSet ) {
						elem.selectedIndex = -1;
					}
					return values;
				}
			}
		}
	} );
	
	// Radios and checkboxes getter/setter
	jQuery.each( [ "radio", "checkbox" ], function() {
		jQuery.valHooks[ this ] = {
			set: function( elem, value ) {
				if ( jQuery.isArray( value ) ) {
					return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
				}
			}
		};
		if ( !support.checkOn ) {
			jQuery.valHooks[ this ].get = function( elem ) {
				return elem.getAttribute( "value" ) === null ? "on" : elem.value;
			};
		}
	} );
	
	
	
	
	// Return jQuery for attributes-only inclusion
	
	
	var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;
	
	jQuery.extend( jQuery.event, {
	
		trigger: function( event, data, elem, onlyHandlers ) {
	
			var i, cur, tmp, bubbleType, ontype, handle, special,
				eventPath = [ elem || document ],
				type = hasOwn.call( event, "type" ) ? event.type : event,
				namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];
	
			cur = tmp = elem = elem || document;
	
			// Don't do events on text and comment nodes
			if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
				return;
			}
	
			// focus/blur morphs to focusin/out; ensure we're not firing them right now
			if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
				return;
			}
	
			if ( type.indexOf( "." ) > -1 ) {
	
				// Namespaced trigger; create a regexp to match event type in handle()
				namespaces = type.split( "." );
				type = namespaces.shift();
				namespaces.sort();
			}
			ontype = type.indexOf( ":" ) < 0 && "on" + type;
	
			// Caller can pass in a jQuery.Event object, Object, or just an event type string
			event = event[ jQuery.expando ] ?
				event :
				new jQuery.Event( type, typeof event === "object" && event );
	
			// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
			event.isTrigger = onlyHandlers ? 2 : 3;
			event.namespace = namespaces.join( "." );
			event.rnamespace = event.namespace ?
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
				null;
	
			// Clean up the event in case it is being reused
			event.result = undefined;
			if ( !event.target ) {
				event.target = elem;
			}
	
			// Clone any incoming data and prepend the event, creating the handler arg list
			data = data == null ?
				[ event ] :
				jQuery.makeArray( data, [ event ] );
	
			// Allow special events to draw outside the lines
			special = jQuery.event.special[ type ] || {};
			if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
				return;
			}
	
			// Determine event propagation path in advance, per W3C events spec (#9951)
			// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
			if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {
	
				bubbleType = special.delegateType || type;
				if ( !rfocusMorph.test( bubbleType + type ) ) {
					cur = cur.parentNode;
				}
				for ( ; cur; cur = cur.parentNode ) {
					eventPath.push( cur );
					tmp = cur;
				}
	
				// Only add window if we got to document (e.g., not plain obj or detached DOM)
				if ( tmp === ( elem.ownerDocument || document ) ) {
					eventPath.push( tmp.defaultView || tmp.parentWindow || window );
				}
			}
	
			// Fire handlers on the event path
			i = 0;
			while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
	
				event.type = i > 1 ?
					bubbleType :
					special.bindType || type;
	
				// jQuery handler
				handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
					dataPriv.get( cur, "handle" );
				if ( handle ) {
					handle.apply( cur, data );
				}
	
				// Native handler
				handle = ontype && cur[ ontype ];
				if ( handle && handle.apply && acceptData( cur ) ) {
					event.result = handle.apply( cur, data );
					if ( event.result === false ) {
						event.preventDefault();
					}
				}
			}
			event.type = type;
	
			// If nobody prevented the default action, do it now
			if ( !onlyHandlers && !event.isDefaultPrevented() ) {
	
				if ( ( !special._default ||
					special._default.apply( eventPath.pop(), data ) === false ) &&
					acceptData( elem ) ) {
	
					// Call a native DOM method on the target with the same name name as the event.
					// Don't do default actions on window, that's where global variables be (#6170)
					if ( ontype && jQuery.isFunction( elem[ type ] ) && !jQuery.isWindow( elem ) ) {
	
						// Don't re-trigger an onFOO event when we call its FOO() method
						tmp = elem[ ontype ];
	
						if ( tmp ) {
							elem[ ontype ] = null;
						}
	
						// Prevent re-triggering of the same event, since we already bubbled it above
						jQuery.event.triggered = type;
						elem[ type ]();
						jQuery.event.triggered = undefined;
	
						if ( tmp ) {
							elem[ ontype ] = tmp;
						}
					}
				}
			}
	
			return event.result;
		},
	
		// Piggyback on a donor event to simulate a different one
		// Used only for `focus(in | out)` events
		simulate: function( type, elem, event ) {
			var e = jQuery.extend(
				new jQuery.Event(),
				event,
				{
					type: type,
					isSimulated: true
				}
			);
	
			jQuery.event.trigger( e, null, elem );
		}
	
	} );
	
	jQuery.fn.extend( {
	
		trigger: function( type, data ) {
			return this.each( function() {
				jQuery.event.trigger( type, data, this );
			} );
		},
		triggerHandler: function( type, data ) {
			var elem = this[ 0 ];
			if ( elem ) {
				return jQuery.event.trigger( type, data, elem, true );
			}
		}
	} );
	
	
	jQuery.each( ( "blur focus focusin focusout load resize scroll unload click dblclick " +
		"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
		"change select submit keydown keypress keyup error contextmenu" ).split( " " ),
		function( i, name ) {
	
		// Handle event binding
		jQuery.fn[ name ] = function( data, fn ) {
			return arguments.length > 0 ?
				this.on( name, null, data, fn ) :
				this.trigger( name );
		};
	} );
	
	jQuery.fn.extend( {
		hover: function( fnOver, fnOut ) {
			return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
		}
	} );
	
	
	
	
	support.focusin = "onfocusin" in window;
	
	
	// Support: Firefox
	// Firefox doesn't have focus(in | out) events
	// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
	//
	// Support: Chrome, Safari
	// focus(in | out) events fire after focus & blur events,
	// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
	// Related ticket - https://code.google.com/p/chromium/issues/detail?id=449857
	if ( !support.focusin ) {
		jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {
	
			// Attach a single capturing handler on the document while someone wants focusin/focusout
			var handler = function( event ) {
				jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
			};
	
			jQuery.event.special[ fix ] = {
				setup: function() {
					var doc = this.ownerDocument || this,
						attaches = dataPriv.access( doc, fix );
	
					if ( !attaches ) {
						doc.addEventListener( orig, handler, true );
					}
					dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
				},
				teardown: function() {
					var doc = this.ownerDocument || this,
						attaches = dataPriv.access( doc, fix ) - 1;
	
					if ( !attaches ) {
						doc.removeEventListener( orig, handler, true );
						dataPriv.remove( doc, fix );
	
					} else {
						dataPriv.access( doc, fix, attaches );
					}
				}
			};
		} );
	}
	var location = window.location;
	
	var nonce = jQuery.now();
	
	var rquery = ( /\?/ );
	
	
	
	// Support: Android 2.3
	// Workaround failure to string-cast null input
	jQuery.parseJSON = function( data ) {
		return JSON.parse( data + "" );
	};
	
	
	// Cross-browser xml parsing
	jQuery.parseXML = function( data ) {
		var xml;
		if ( !data || typeof data !== "string" ) {
			return null;
		}
	
		// Support: IE9
		try {
			xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
		} catch ( e ) {
			xml = undefined;
		}
	
		if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
			jQuery.error( "Invalid XML: " + data );
		}
		return xml;
	};
	
	
	var
		rhash = /#.*$/,
		rts = /([?&])_=[^&]*/,
		rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,
	
		// #7653, #8125, #8152: local protocol detection
		rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		rnoContent = /^(?:GET|HEAD)$/,
		rprotocol = /^\/\//,
	
		/* Prefilters
		 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
		 * 2) These are called:
		 *    - BEFORE asking for a transport
		 *    - AFTER param serialization (s.data is a string if s.processData is true)
		 * 3) key is the dataType
		 * 4) the catchall symbol "*" can be used
		 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
		 */
		prefilters = {},
	
		/* Transports bindings
		 * 1) key is the dataType
		 * 2) the catchall symbol "*" can be used
		 * 3) selection will start with transport dataType and THEN go to "*" if needed
		 */
		transports = {},
	
		// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
		allTypes = "*/".concat( "*" ),
	
		// Anchor tag for parsing the document origin
		originAnchor = document.createElement( "a" );
		originAnchor.href = location.href;
	
	// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
	function addToPrefiltersOrTransports( structure ) {
	
		// dataTypeExpression is optional and defaults to "*"
		return function( dataTypeExpression, func ) {
	
			if ( typeof dataTypeExpression !== "string" ) {
				func = dataTypeExpression;
				dataTypeExpression = "*";
			}
	
			var dataType,
				i = 0,
				dataTypes = dataTypeExpression.toLowerCase().match( rnotwhite ) || [];
	
			if ( jQuery.isFunction( func ) ) {
	
				// For each dataType in the dataTypeExpression
				while ( ( dataType = dataTypes[ i++ ] ) ) {
	
					// Prepend if requested
					if ( dataType[ 0 ] === "+" ) {
						dataType = dataType.slice( 1 ) || "*";
						( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );
	
					// Otherwise append
					} else {
						( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
					}
				}
			}
		};
	}
	
	// Base inspection function for prefilters and transports
	function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {
	
		var inspected = {},
			seekingTransport = ( structure === transports );
	
		function inspect( dataType ) {
			var selected;
			inspected[ dataType ] = true;
			jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
				var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
				if ( typeof dataTypeOrTransport === "string" &&
					!seekingTransport && !inspected[ dataTypeOrTransport ] ) {
	
					options.dataTypes.unshift( dataTypeOrTransport );
					inspect( dataTypeOrTransport );
					return false;
				} else if ( seekingTransport ) {
					return !( selected = dataTypeOrTransport );
				}
			} );
			return selected;
		}
	
		return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
	}
	
	// A special extend for ajax options
	// that takes "flat" options (not to be deep extended)
	// Fixes #9887
	function ajaxExtend( target, src ) {
		var key, deep,
			flatOptions = jQuery.ajaxSettings.flatOptions || {};
	
		for ( key in src ) {
			if ( src[ key ] !== undefined ) {
				( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
			}
		}
		if ( deep ) {
			jQuery.extend( true, target, deep );
		}
	
		return target;
	}
	
	/* Handles responses to an ajax request:
	 * - finds the right dataType (mediates between content-type and expected dataType)
	 * - returns the corresponding response
	 */
	function ajaxHandleResponses( s, jqXHR, responses ) {
	
		var ct, type, finalDataType, firstDataType,
			contents = s.contents,
			dataTypes = s.dataTypes;
	
		// Remove auto dataType and get content-type in the process
		while ( dataTypes[ 0 ] === "*" ) {
			dataTypes.shift();
			if ( ct === undefined ) {
				ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
			}
		}
	
		// Check if we're dealing with a known content-type
		if ( ct ) {
			for ( type in contents ) {
				if ( contents[ type ] && contents[ type ].test( ct ) ) {
					dataTypes.unshift( type );
					break;
				}
			}
		}
	
		// Check to see if we have a response for the expected dataType
		if ( dataTypes[ 0 ] in responses ) {
			finalDataType = dataTypes[ 0 ];
		} else {
	
			// Try convertible dataTypes
			for ( type in responses ) {
				if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
					finalDataType = type;
					break;
				}
				if ( !firstDataType ) {
					firstDataType = type;
				}
			}
	
			// Or just use first one
			finalDataType = finalDataType || firstDataType;
		}
	
		// If we found a dataType
		// We add the dataType to the list if needed
		// and return the corresponding response
		if ( finalDataType ) {
			if ( finalDataType !== dataTypes[ 0 ] ) {
				dataTypes.unshift( finalDataType );
			}
			return responses[ finalDataType ];
		}
	}
	
	/* Chain conversions given the request and the original response
	 * Also sets the responseXXX fields on the jqXHR instance
	 */
	function ajaxConvert( s, response, jqXHR, isSuccess ) {
		var conv2, current, conv, tmp, prev,
			converters = {},
	
			// Work with a copy of dataTypes in case we need to modify it for conversion
			dataTypes = s.dataTypes.slice();
	
		// Create converters map with lowercased keys
		if ( dataTypes[ 1 ] ) {
			for ( conv in s.converters ) {
				converters[ conv.toLowerCase() ] = s.converters[ conv ];
			}
		}
	
		current = dataTypes.shift();
	
		// Convert to each sequential dataType
		while ( current ) {
	
			if ( s.responseFields[ current ] ) {
				jqXHR[ s.responseFields[ current ] ] = response;
			}
	
			// Apply the dataFilter if provided
			if ( !prev && isSuccess && s.dataFilter ) {
				response = s.dataFilter( response, s.dataType );
			}
	
			prev = current;
			current = dataTypes.shift();
	
			if ( current ) {
	
			// There's only work to do if current dataType is non-auto
				if ( current === "*" ) {
	
					current = prev;
	
				// Convert response if prev dataType is non-auto and differs from current
				} else if ( prev !== "*" && prev !== current ) {
	
					// Seek a direct converter
					conv = converters[ prev + " " + current ] || converters[ "* " + current ];
	
					// If none found, seek a pair
					if ( !conv ) {
						for ( conv2 in converters ) {
	
							// If conv2 outputs current
							tmp = conv2.split( " " );
							if ( tmp[ 1 ] === current ) {
	
								// If prev can be converted to accepted input
								conv = converters[ prev + " " + tmp[ 0 ] ] ||
									converters[ "* " + tmp[ 0 ] ];
								if ( conv ) {
	
									// Condense equivalence converters
									if ( conv === true ) {
										conv = converters[ conv2 ];
	
									// Otherwise, insert the intermediate dataType
									} else if ( converters[ conv2 ] !== true ) {
										current = tmp[ 0 ];
										dataTypes.unshift( tmp[ 1 ] );
									}
									break;
								}
							}
						}
					}
	
					// Apply converter (if not an equivalence)
					if ( conv !== true ) {
	
						// Unless errors are allowed to bubble, catch and return them
						if ( conv && s.throws ) {
							response = conv( response );
						} else {
							try {
								response = conv( response );
							} catch ( e ) {
								return {
									state: "parsererror",
									error: conv ? e : "No conversion from " + prev + " to " + current
								};
							}
						}
					}
				}
			}
		}
	
		return { state: "success", data: response };
	}
	
	jQuery.extend( {
	
		// Counter for holding the number of active queries
		active: 0,
	
		// Last-Modified header cache for next request
		lastModified: {},
		etag: {},
	
		ajaxSettings: {
			url: location.href,
			type: "GET",
			isLocal: rlocalProtocol.test( location.protocol ),
			global: true,
			processData: true,
			async: true,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			/*
			timeout: 0,
			data: null,
			dataType: null,
			username: null,
			password: null,
			cache: null,
			throws: false,
			traditional: false,
			headers: {},
			*/
	
			accepts: {
				"*": allTypes,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},
	
			contents: {
				xml: /\bxml\b/,
				html: /\bhtml/,
				json: /\bjson\b/
			},
	
			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},
	
			// Data converters
			// Keys separate source (or catchall "*") and destination types with a single space
			converters: {
	
				// Convert anything to text
				"* text": String,
	
				// Text to html (true = no transformation)
				"text html": true,
	
				// Evaluate text as a json expression
				"text json": jQuery.parseJSON,
	
				// Parse text as xml
				"text xml": jQuery.parseXML
			},
	
			// For options that shouldn't be deep extended:
			// you can add your own custom options here if
			// and when you create one that shouldn't be
			// deep extended (see ajaxExtend)
			flatOptions: {
				url: true,
				context: true
			}
		},
	
		// Creates a full fledged settings object into target
		// with both ajaxSettings and settings fields.
		// If target is omitted, writes into ajaxSettings.
		ajaxSetup: function( target, settings ) {
			return settings ?
	
				// Building a settings object
				ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :
	
				// Extending ajaxSettings
				ajaxExtend( jQuery.ajaxSettings, target );
		},
	
		ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
		ajaxTransport: addToPrefiltersOrTransports( transports ),
	
		// Main method
		ajax: function( url, options ) {
	
			// If url is an object, simulate pre-1.5 signature
			if ( typeof url === "object" ) {
				options = url;
				url = undefined;
			}
	
			// Force options to be an object
			options = options || {};
	
			var transport,
	
				// URL without anti-cache param
				cacheURL,
	
				// Response headers
				responseHeadersString,
				responseHeaders,
	
				// timeout handle
				timeoutTimer,
	
				// Url cleanup var
				urlAnchor,
	
				// To know if global events are to be dispatched
				fireGlobals,
	
				// Loop variable
				i,
	
				// Create the final options object
				s = jQuery.ajaxSetup( {}, options ),
	
				// Callbacks context
				callbackContext = s.context || s,
	
				// Context for global events is callbackContext if it is a DOM node or jQuery collection
				globalEventContext = s.context &&
					( callbackContext.nodeType || callbackContext.jquery ) ?
						jQuery( callbackContext ) :
						jQuery.event,
	
				// Deferreds
				deferred = jQuery.Deferred(),
				completeDeferred = jQuery.Callbacks( "once memory" ),
	
				// Status-dependent callbacks
				statusCode = s.statusCode || {},
	
				// Headers (they are sent all at once)
				requestHeaders = {},
				requestHeadersNames = {},
	
				// The jqXHR state
				state = 0,
	
				// Default abort message
				strAbort = "canceled",
	
				// Fake xhr
				jqXHR = {
					readyState: 0,
	
					// Builds headers hashtable if needed
					getResponseHeader: function( key ) {
						var match;
						if ( state === 2 ) {
							if ( !responseHeaders ) {
								responseHeaders = {};
								while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
									responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
								}
							}
							match = responseHeaders[ key.toLowerCase() ];
						}
						return match == null ? null : match;
					},
	
					// Raw string
					getAllResponseHeaders: function() {
						return state === 2 ? responseHeadersString : null;
					},
	
					// Caches the header
					setRequestHeader: function( name, value ) {
						var lname = name.toLowerCase();
						if ( !state ) {
							name = requestHeadersNames[ lname ] = requestHeadersNames[ lname ] || name;
							requestHeaders[ name ] = value;
						}
						return this;
					},
	
					// Overrides response content-type header
					overrideMimeType: function( type ) {
						if ( !state ) {
							s.mimeType = type;
						}
						return this;
					},
	
					// Status-dependent callbacks
					statusCode: function( map ) {
						var code;
						if ( map ) {
							if ( state < 2 ) {
								for ( code in map ) {
	
									// Lazy-add the new callback in a way that preserves old ones
									statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
								}
							} else {
	
								// Execute the appropriate callbacks
								jqXHR.always( map[ jqXHR.status ] );
							}
						}
						return this;
					},
	
					// Cancel the request
					abort: function( statusText ) {
						var finalText = statusText || strAbort;
						if ( transport ) {
							transport.abort( finalText );
						}
						done( 0, finalText );
						return this;
					}
				};
	
			// Attach deferreds
			deferred.promise( jqXHR ).complete = completeDeferred.add;
			jqXHR.success = jqXHR.done;
			jqXHR.error = jqXHR.fail;
	
			// Remove hash character (#7531: and string promotion)
			// Add protocol if not provided (prefilters might expect it)
			// Handle falsy url in the settings object (#10093: consistency with old signature)
			// We also use the url parameter if available
			s.url = ( ( url || s.url || location.href ) + "" ).replace( rhash, "" )
				.replace( rprotocol, location.protocol + "//" );
	
			// Alias method option to type as per ticket #12004
			s.type = options.method || options.type || s.method || s.type;
	
			// Extract dataTypes list
			s.dataTypes = jQuery.trim( s.dataType || "*" ).toLowerCase().match( rnotwhite ) || [ "" ];
	
			// A cross-domain request is in order when the origin doesn't match the current origin.
			if ( s.crossDomain == null ) {
				urlAnchor = document.createElement( "a" );
	
				// Support: IE8-11+
				// IE throws exception if url is malformed, e.g. http://example.com:80x/
				try {
					urlAnchor.href = s.url;
	
					// Support: IE8-11+
					// Anchor's host property isn't correctly set when s.url is relative
					urlAnchor.href = urlAnchor.href;
					s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
						urlAnchor.protocol + "//" + urlAnchor.host;
				} catch ( e ) {
	
					// If there is an error parsing the URL, assume it is crossDomain,
					// it can be rejected by the transport if it is invalid
					s.crossDomain = true;
				}
			}
	
			// Convert data if not already a string
			if ( s.data && s.processData && typeof s.data !== "string" ) {
				s.data = jQuery.param( s.data, s.traditional );
			}
	
			// Apply prefilters
			inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );
	
			// If request was aborted inside a prefilter, stop there
			if ( state === 2 ) {
				return jqXHR;
			}
	
			// We can fire global events as of now if asked to
			// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
			fireGlobals = jQuery.event && s.global;
	
			// Watch for a new set of requests
			if ( fireGlobals && jQuery.active++ === 0 ) {
				jQuery.event.trigger( "ajaxStart" );
			}
	
			// Uppercase the type
			s.type = s.type.toUpperCase();
	
			// Determine if request has content
			s.hasContent = !rnoContent.test( s.type );
	
			// Save the URL in case we're toying with the If-Modified-Since
			// and/or If-None-Match header later on
			cacheURL = s.url;
	
			// More options handling for requests with no content
			if ( !s.hasContent ) {
	
				// If data is available, append data to url
				if ( s.data ) {
					cacheURL = ( s.url += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data );
	
					// #9682: remove data so that it's not used in an eventual retry
					delete s.data;
				}
	
				// Add anti-cache in url if needed
				if ( s.cache === false ) {
					s.url = rts.test( cacheURL ) ?
	
						// If there is already a '_' parameter, set its value
						cacheURL.replace( rts, "$1_=" + nonce++ ) :
	
						// Otherwise add one to the end
						cacheURL + ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + nonce++;
				}
			}
	
			// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
			if ( s.ifModified ) {
				if ( jQuery.lastModified[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
				}
				if ( jQuery.etag[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
				}
			}
	
			// Set the correct header, if data is being sent
			if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
				jqXHR.setRequestHeader( "Content-Type", s.contentType );
			}
	
			// Set the Accepts header for the server, depending on the dataType
			jqXHR.setRequestHeader(
				"Accept",
				s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
					s.accepts[ s.dataTypes[ 0 ] ] +
						( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
					s.accepts[ "*" ]
			);
	
			// Check for headers option
			for ( i in s.headers ) {
				jqXHR.setRequestHeader( i, s.headers[ i ] );
			}
	
			// Allow custom headers/mimetypes and early abort
			if ( s.beforeSend &&
				( s.beforeSend.call( callbackContext, jqXHR, s ) === false || state === 2 ) ) {
	
				// Abort if not done already and return
				return jqXHR.abort();
			}
	
			// Aborting is no longer a cancellation
			strAbort = "abort";
	
			// Install callbacks on deferreds
			for ( i in { success: 1, error: 1, complete: 1 } ) {
				jqXHR[ i ]( s[ i ] );
			}
	
			// Get transport
			transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );
	
			// If no transport, we auto-abort
			if ( !transport ) {
				done( -1, "No Transport" );
			} else {
				jqXHR.readyState = 1;
	
				// Send global event
				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
				}
	
				// If request was aborted inside ajaxSend, stop there
				if ( state === 2 ) {
					return jqXHR;
				}
	
				// Timeout
				if ( s.async && s.timeout > 0 ) {
					timeoutTimer = window.setTimeout( function() {
						jqXHR.abort( "timeout" );
					}, s.timeout );
				}
	
				try {
					state = 1;
					transport.send( requestHeaders, done );
				} catch ( e ) {
	
					// Propagate exception as error if not done
					if ( state < 2 ) {
						done( -1, e );
	
					// Simply rethrow otherwise
					} else {
						throw e;
					}
				}
			}
	
			// Callback for when everything is done
			function done( status, nativeStatusText, responses, headers ) {
				var isSuccess, success, error, response, modified,
					statusText = nativeStatusText;
	
				// Called once
				if ( state === 2 ) {
					return;
				}
	
				// State is "done" now
				state = 2;
	
				// Clear timeout if it exists
				if ( timeoutTimer ) {
					window.clearTimeout( timeoutTimer );
				}
	
				// Dereference transport for early garbage collection
				// (no matter how long the jqXHR object will be used)
				transport = undefined;
	
				// Cache response headers
				responseHeadersString = headers || "";
	
				// Set readyState
				jqXHR.readyState = status > 0 ? 4 : 0;
	
				// Determine if successful
				isSuccess = status >= 200 && status < 300 || status === 304;
	
				// Get response data
				if ( responses ) {
					response = ajaxHandleResponses( s, jqXHR, responses );
				}
	
				// Convert no matter what (that way responseXXX fields are always set)
				response = ajaxConvert( s, response, jqXHR, isSuccess );
	
				// If successful, handle type chaining
				if ( isSuccess ) {
	
					// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
					if ( s.ifModified ) {
						modified = jqXHR.getResponseHeader( "Last-Modified" );
						if ( modified ) {
							jQuery.lastModified[ cacheURL ] = modified;
						}
						modified = jqXHR.getResponseHeader( "etag" );
						if ( modified ) {
							jQuery.etag[ cacheURL ] = modified;
						}
					}
	
					// if no content
					if ( status === 204 || s.type === "HEAD" ) {
						statusText = "nocontent";
	
					// if not modified
					} else if ( status === 304 ) {
						statusText = "notmodified";
	
					// If we have data, let's convert it
					} else {
						statusText = response.state;
						success = response.data;
						error = response.error;
						isSuccess = !error;
					}
				} else {
	
					// Extract error from statusText and normalize for non-aborts
					error = statusText;
					if ( status || !statusText ) {
						statusText = "error";
						if ( status < 0 ) {
							status = 0;
						}
					}
				}
	
				// Set data for the fake xhr object
				jqXHR.status = status;
				jqXHR.statusText = ( nativeStatusText || statusText ) + "";
	
				// Success/Error
				if ( isSuccess ) {
					deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
				} else {
					deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
				}
	
				// Status-dependent callbacks
				jqXHR.statusCode( statusCode );
				statusCode = undefined;
	
				if ( fireGlobals ) {
					globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
						[ jqXHR, s, isSuccess ? success : error ] );
				}
	
				// Complete
				completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );
	
				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );
	
					// Handle the global AJAX counter
					if ( !( --jQuery.active ) ) {
						jQuery.event.trigger( "ajaxStop" );
					}
				}
			}
	
			return jqXHR;
		},
	
		getJSON: function( url, data, callback ) {
			return jQuery.get( url, data, callback, "json" );
		},
	
		getScript: function( url, callback ) {
			return jQuery.get( url, undefined, callback, "script" );
		}
	} );
	
	jQuery.each( [ "get", "post" ], function( i, method ) {
		jQuery[ method ] = function( url, data, callback, type ) {
	
			// Shift arguments if data argument was omitted
			if ( jQuery.isFunction( data ) ) {
				type = type || callback;
				callback = data;
				data = undefined;
			}
	
			// The url can be an options object (which then must have .url)
			return jQuery.ajax( jQuery.extend( {
				url: url,
				type: method,
				dataType: type,
				data: data,
				success: callback
			}, jQuery.isPlainObject( url ) && url ) );
		};
	} );
	
	
	jQuery._evalUrl = function( url ) {
		return jQuery.ajax( {
			url: url,
	
			// Make this explicit, since user can override this through ajaxSetup (#11264)
			type: "GET",
			dataType: "script",
			async: false,
			global: false,
			"throws": true
		} );
	};
	
	
	jQuery.fn.extend( {
		wrapAll: function( html ) {
			var wrap;
	
			if ( jQuery.isFunction( html ) ) {
				return this.each( function( i ) {
					jQuery( this ).wrapAll( html.call( this, i ) );
				} );
			}
	
			if ( this[ 0 ] ) {
	
				// The elements to wrap the target around
				wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );
	
				if ( this[ 0 ].parentNode ) {
					wrap.insertBefore( this[ 0 ] );
				}
	
				wrap.map( function() {
					var elem = this;
	
					while ( elem.firstElementChild ) {
						elem = elem.firstElementChild;
					}
	
					return elem;
				} ).append( this );
			}
	
			return this;
		},
	
		wrapInner: function( html ) {
			if ( jQuery.isFunction( html ) ) {
				return this.each( function( i ) {
					jQuery( this ).wrapInner( html.call( this, i ) );
				} );
			}
	
			return this.each( function() {
				var self = jQuery( this ),
					contents = self.contents();
	
				if ( contents.length ) {
					contents.wrapAll( html );
	
				} else {
					self.append( html );
				}
			} );
		},
	
		wrap: function( html ) {
			var isFunction = jQuery.isFunction( html );
	
			return this.each( function( i ) {
				jQuery( this ).wrapAll( isFunction ? html.call( this, i ) : html );
			} );
		},
	
		unwrap: function() {
			return this.parent().each( function() {
				if ( !jQuery.nodeName( this, "body" ) ) {
					jQuery( this ).replaceWith( this.childNodes );
				}
			} ).end();
		}
	} );
	
	
	jQuery.expr.filters.hidden = function( elem ) {
		return !jQuery.expr.filters.visible( elem );
	};
	jQuery.expr.filters.visible = function( elem ) {
	
		// Support: Opera <= 12.12
		// Opera reports offsetWidths and offsetHeights less than zero on some elements
		// Use OR instead of AND as the element is not visible if either is true
		// See tickets #10406 and #13132
		return elem.offsetWidth > 0 || elem.offsetHeight > 0 || elem.getClientRects().length > 0;
	};
	
	
	
	
	var r20 = /%20/g,
		rbracket = /\[\]$/,
		rCRLF = /\r?\n/g,
		rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
		rsubmittable = /^(?:input|select|textarea|keygen)/i;
	
	function buildParams( prefix, obj, traditional, add ) {
		var name;
	
		if ( jQuery.isArray( obj ) ) {
	
			// Serialize array item.
			jQuery.each( obj, function( i, v ) {
				if ( traditional || rbracket.test( prefix ) ) {
	
					// Treat each array item as a scalar.
					add( prefix, v );
	
				} else {
	
					// Item is non-scalar (array or object), encode its numeric index.
					buildParams(
						prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
						v,
						traditional,
						add
					);
				}
			} );
	
		} else if ( !traditional && jQuery.type( obj ) === "object" ) {
	
			// Serialize object item.
			for ( name in obj ) {
				buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
			}
	
		} else {
	
			// Serialize scalar item.
			add( prefix, obj );
		}
	}
	
	// Serialize an array of form elements or a set of
	// key/values into a query string
	jQuery.param = function( a, traditional ) {
		var prefix,
			s = [],
			add = function( key, value ) {
	
				// If value is a function, invoke it and return its value
				value = jQuery.isFunction( value ) ? value() : ( value == null ? "" : value );
				s[ s.length ] = encodeURIComponent( key ) + "=" + encodeURIComponent( value );
			};
	
		// Set traditional to true for jQuery <= 1.3.2 behavior.
		if ( traditional === undefined ) {
			traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
		}
	
		// If an array was passed in, assume that it is an array of form elements.
		if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {
	
			// Serialize the form elements
			jQuery.each( a, function() {
				add( this.name, this.value );
			} );
	
		} else {
	
			// If traditional, encode the "old" way (the way 1.3.2 or older
			// did it), otherwise encode params recursively.
			for ( prefix in a ) {
				buildParams( prefix, a[ prefix ], traditional, add );
			}
		}
	
		// Return the resulting serialization
		return s.join( "&" ).replace( r20, "+" );
	};
	
	jQuery.fn.extend( {
		serialize: function() {
			return jQuery.param( this.serializeArray() );
		},
		serializeArray: function() {
			return this.map( function() {
	
				// Can add propHook for "elements" to filter or add form elements
				var elements = jQuery.prop( this, "elements" );
				return elements ? jQuery.makeArray( elements ) : this;
			} )
			.filter( function() {
				var type = this.type;
	
				// Use .is( ":disabled" ) so that fieldset[disabled] works
				return this.name && !jQuery( this ).is( ":disabled" ) &&
					rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
					( this.checked || !rcheckableType.test( type ) );
			} )
			.map( function( i, elem ) {
				var val = jQuery( this ).val();
	
				return val == null ?
					null :
					jQuery.isArray( val ) ?
						jQuery.map( val, function( val ) {
							return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
						} ) :
						{ name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
			} ).get();
		}
	} );
	
	
	jQuery.ajaxSettings.xhr = function() {
		try {
			return new window.XMLHttpRequest();
		} catch ( e ) {}
	};
	
	var xhrSuccessStatus = {
	
			// File protocol always yields status code 0, assume 200
			0: 200,
	
			// Support: IE9
			// #1450: sometimes IE returns 1223 when it should be 204
			1223: 204
		},
		xhrSupported = jQuery.ajaxSettings.xhr();
	
	support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
	support.ajax = xhrSupported = !!xhrSupported;
	
	jQuery.ajaxTransport( function( options ) {
		var callback, errorCallback;
	
		// Cross domain only allowed if supported through XMLHttpRequest
		if ( support.cors || xhrSupported && !options.crossDomain ) {
			return {
				send: function( headers, complete ) {
					var i,
						xhr = options.xhr();
	
					xhr.open(
						options.type,
						options.url,
						options.async,
						options.username,
						options.password
					);
	
					// Apply custom fields if provided
					if ( options.xhrFields ) {
						for ( i in options.xhrFields ) {
							xhr[ i ] = options.xhrFields[ i ];
						}
					}
	
					// Override mime type if needed
					if ( options.mimeType && xhr.overrideMimeType ) {
						xhr.overrideMimeType( options.mimeType );
					}
	
					// X-Requested-With header
					// For cross-domain requests, seeing as conditions for a preflight are
					// akin to a jigsaw puzzle, we simply never set it to be sure.
					// (it can always be set on a per-request basis or even using ajaxSetup)
					// For same-domain requests, won't change header if already provided.
					if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
						headers[ "X-Requested-With" ] = "XMLHttpRequest";
					}
	
					// Set headers
					for ( i in headers ) {
						xhr.setRequestHeader( i, headers[ i ] );
					}
	
					// Callback
					callback = function( type ) {
						return function() {
							if ( callback ) {
								callback = errorCallback = xhr.onload =
									xhr.onerror = xhr.onabort = xhr.onreadystatechange = null;
	
								if ( type === "abort" ) {
									xhr.abort();
								} else if ( type === "error" ) {
	
									// Support: IE9
									// On a manual native abort, IE9 throws
									// errors on any property access that is not readyState
									if ( typeof xhr.status !== "number" ) {
										complete( 0, "error" );
									} else {
										complete(
	
											// File: protocol always yields status 0; see #8605, #14207
											xhr.status,
											xhr.statusText
										);
									}
								} else {
									complete(
										xhrSuccessStatus[ xhr.status ] || xhr.status,
										xhr.statusText,
	
										// Support: IE9 only
										// IE9 has no XHR2 but throws on binary (trac-11426)
										// For XHR2 non-text, let the caller handle it (gh-2498)
										( xhr.responseType || "text" ) !== "text"  ||
										typeof xhr.responseText !== "string" ?
											{ binary: xhr.response } :
											{ text: xhr.responseText },
										xhr.getAllResponseHeaders()
									);
								}
							}
						};
					};
	
					// Listen to events
					xhr.onload = callback();
					errorCallback = xhr.onerror = callback( "error" );
	
					// Support: IE9
					// Use onreadystatechange to replace onabort
					// to handle uncaught aborts
					if ( xhr.onabort !== undefined ) {
						xhr.onabort = errorCallback;
					} else {
						xhr.onreadystatechange = function() {
	
							// Check readyState before timeout as it changes
							if ( xhr.readyState === 4 ) {
	
								// Allow onerror to be called first,
								// but that will not handle a native abort
								// Also, save errorCallback to a variable
								// as xhr.onerror cannot be accessed
								window.setTimeout( function() {
									if ( callback ) {
										errorCallback();
									}
								} );
							}
						};
					}
	
					// Create the abort callback
					callback = callback( "abort" );
	
					try {
	
						// Do send the request (this may raise an exception)
						xhr.send( options.hasContent && options.data || null );
					} catch ( e ) {
	
						// #14683: Only rethrow if this hasn't been notified as an error yet
						if ( callback ) {
							throw e;
						}
					}
				},
	
				abort: function() {
					if ( callback ) {
						callback();
					}
				}
			};
		}
	} );
	
	
	
	
	// Install script dataType
	jQuery.ajaxSetup( {
		accepts: {
			script: "text/javascript, application/javascript, " +
				"application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /\b(?:java|ecma)script\b/
		},
		converters: {
			"text script": function( text ) {
				jQuery.globalEval( text );
				return text;
			}
		}
	} );
	
	// Handle cache's special case and crossDomain
	jQuery.ajaxPrefilter( "script", function( s ) {
		if ( s.cache === undefined ) {
			s.cache = false;
		}
		if ( s.crossDomain ) {
			s.type = "GET";
		}
	} );
	
	// Bind script tag hack transport
	jQuery.ajaxTransport( "script", function( s ) {
	
		// This transport only deals with cross domain requests
		if ( s.crossDomain ) {
			var script, callback;
			return {
				send: function( _, complete ) {
					script = jQuery( "<script>" ).prop( {
						charset: s.scriptCharset,
						src: s.url
					} ).on(
						"load error",
						callback = function( evt ) {
							script.remove();
							callback = null;
							if ( evt ) {
								complete( evt.type === "error" ? 404 : 200, evt.type );
							}
						}
					);
	
					// Use native DOM manipulation to avoid our domManip AJAX trickery
					document.head.appendChild( script[ 0 ] );
				},
				abort: function() {
					if ( callback ) {
						callback();
					}
				}
			};
		}
	} );
	
	
	
	
	var oldCallbacks = [],
		rjsonp = /(=)\?(?=&|$)|\?\?/;
	
	// Default jsonp settings
	jQuery.ajaxSetup( {
		jsonp: "callback",
		jsonpCallback: function() {
			var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
			this[ callback ] = true;
			return callback;
		}
	} );
	
	// Detect, normalize options and install callbacks for jsonp requests
	jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {
	
		var callbackName, overwritten, responseContainer,
			jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
				"url" :
				typeof s.data === "string" &&
					( s.contentType || "" )
						.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
					rjsonp.test( s.data ) && "data"
			);
	
		// Handle iff the expected data type is "jsonp" or we have a parameter to set
		if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {
	
			// Get callback name, remembering preexisting value associated with it
			callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
				s.jsonpCallback() :
				s.jsonpCallback;
	
			// Insert callback into url or form data
			if ( jsonProp ) {
				s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
			} else if ( s.jsonp !== false ) {
				s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
			}
	
			// Use data converter to retrieve json after script execution
			s.converters[ "script json" ] = function() {
				if ( !responseContainer ) {
					jQuery.error( callbackName + " was not called" );
				}
				return responseContainer[ 0 ];
			};
	
			// Force json dataType
			s.dataTypes[ 0 ] = "json";
	
			// Install callback
			overwritten = window[ callbackName ];
			window[ callbackName ] = function() {
				responseContainer = arguments;
			};
	
			// Clean-up function (fires after converters)
			jqXHR.always( function() {
	
				// If previous value didn't exist - remove it
				if ( overwritten === undefined ) {
					jQuery( window ).removeProp( callbackName );
	
				// Otherwise restore preexisting value
				} else {
					window[ callbackName ] = overwritten;
				}
	
				// Save back as free
				if ( s[ callbackName ] ) {
	
					// Make sure that re-using the options doesn't screw things around
					s.jsonpCallback = originalSettings.jsonpCallback;
	
					// Save the callback name for future use
					oldCallbacks.push( callbackName );
				}
	
				// Call if it was a function and we have a response
				if ( responseContainer && jQuery.isFunction( overwritten ) ) {
					overwritten( responseContainer[ 0 ] );
				}
	
				responseContainer = overwritten = undefined;
			} );
	
			// Delegate to script
			return "script";
		}
	} );
	
	
	
	
	// Argument "data" should be string of html
	// context (optional): If specified, the fragment will be created in this context,
	// defaults to document
	// keepScripts (optional): If true, will include scripts passed in the html string
	jQuery.parseHTML = function( data, context, keepScripts ) {
		if ( !data || typeof data !== "string" ) {
			return null;
		}
		if ( typeof context === "boolean" ) {
			keepScripts = context;
			context = false;
		}
		context = context || document;
	
		var parsed = rsingleTag.exec( data ),
			scripts = !keepScripts && [];
	
		// Single tag
		if ( parsed ) {
			return [ context.createElement( parsed[ 1 ] ) ];
		}
	
		parsed = buildFragment( [ data ], context, scripts );
	
		if ( scripts && scripts.length ) {
			jQuery( scripts ).remove();
		}
	
		return jQuery.merge( [], parsed.childNodes );
	};
	
	
	// Keep a copy of the old load method
	var _load = jQuery.fn.load;
	
	/**
	 * Load a url into a page
	 */
	jQuery.fn.load = function( url, params, callback ) {
		if ( typeof url !== "string" && _load ) {
			return _load.apply( this, arguments );
		}
	
		var selector, type, response,
			self = this,
			off = url.indexOf( " " );
	
		if ( off > -1 ) {
			selector = jQuery.trim( url.slice( off ) );
			url = url.slice( 0, off );
		}
	
		// If it's a function
		if ( jQuery.isFunction( params ) ) {
	
			// We assume that it's the callback
			callback = params;
			params = undefined;
	
		// Otherwise, build a param string
		} else if ( params && typeof params === "object" ) {
			type = "POST";
		}
	
		// If we have elements to modify, make the request
		if ( self.length > 0 ) {
			jQuery.ajax( {
				url: url,
	
				// If "type" variable is undefined, then "GET" method will be used.
				// Make value of this field explicit since
				// user can override it through ajaxSetup method
				type: type || "GET",
				dataType: "html",
				data: params
			} ).done( function( responseText ) {
	
				// Save response for use in complete callback
				response = arguments;
	
				self.html( selector ?
	
					// If a selector was specified, locate the right elements in a dummy div
					// Exclude scripts to avoid IE 'Permission Denied' errors
					jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :
	
					// Otherwise use the full result
					responseText );
	
			// If the request succeeds, this function gets "data", "status", "jqXHR"
			// but they are ignored because response was set above.
			// If it fails, this function gets "jqXHR", "status", "error"
			} ).always( callback && function( jqXHR, status ) {
				self.each( function() {
					callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
				} );
			} );
		}
	
		return this;
	};
	
	
	
	
	// Attach a bunch of functions for handling common AJAX events
	jQuery.each( [
		"ajaxStart",
		"ajaxStop",
		"ajaxComplete",
		"ajaxError",
		"ajaxSuccess",
		"ajaxSend"
	], function( i, type ) {
		jQuery.fn[ type ] = function( fn ) {
			return this.on( type, fn );
		};
	} );
	
	
	
	
	jQuery.expr.filters.animated = function( elem ) {
		return jQuery.grep( jQuery.timers, function( fn ) {
			return elem === fn.elem;
		} ).length;
	};
	
	
	
	
	/**
	 * Gets a window from an element
	 */
	function getWindow( elem ) {
		return jQuery.isWindow( elem ) ? elem : elem.nodeType === 9 && elem.defaultView;
	}
	
	jQuery.offset = {
		setOffset: function( elem, options, i ) {
			var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
				position = jQuery.css( elem, "position" ),
				curElem = jQuery( elem ),
				props = {};
	
			// Set position first, in-case top/left are set even on static elem
			if ( position === "static" ) {
				elem.style.position = "relative";
			}
	
			curOffset = curElem.offset();
			curCSSTop = jQuery.css( elem, "top" );
			curCSSLeft = jQuery.css( elem, "left" );
			calculatePosition = ( position === "absolute" || position === "fixed" ) &&
				( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;
	
			// Need to be able to calculate position if either
			// top or left is auto and position is either absolute or fixed
			if ( calculatePosition ) {
				curPosition = curElem.position();
				curTop = curPosition.top;
				curLeft = curPosition.left;
	
			} else {
				curTop = parseFloat( curCSSTop ) || 0;
				curLeft = parseFloat( curCSSLeft ) || 0;
			}
	
			if ( jQuery.isFunction( options ) ) {
	
				// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
				options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
			}
	
			if ( options.top != null ) {
				props.top = ( options.top - curOffset.top ) + curTop;
			}
			if ( options.left != null ) {
				props.left = ( options.left - curOffset.left ) + curLeft;
			}
	
			if ( "using" in options ) {
				options.using.call( elem, props );
	
			} else {
				curElem.css( props );
			}
		}
	};
	
	jQuery.fn.extend( {
		offset: function( options ) {
			if ( arguments.length ) {
				return options === undefined ?
					this :
					this.each( function( i ) {
						jQuery.offset.setOffset( this, options, i );
					} );
			}
	
			var docElem, win,
				elem = this[ 0 ],
				box = { top: 0, left: 0 },
				doc = elem && elem.ownerDocument;
	
			if ( !doc ) {
				return;
			}
	
			docElem = doc.documentElement;
	
			// Make sure it's not a disconnected DOM node
			if ( !jQuery.contains( docElem, elem ) ) {
				return box;
			}
	
			box = elem.getBoundingClientRect();
			win = getWindow( doc );
			return {
				top: box.top + win.pageYOffset - docElem.clientTop,
				left: box.left + win.pageXOffset - docElem.clientLeft
			};
		},
	
		position: function() {
			if ( !this[ 0 ] ) {
				return;
			}
	
			var offsetParent, offset,
				elem = this[ 0 ],
				parentOffset = { top: 0, left: 0 };
	
			// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
			// because it is its only offset parent
			if ( jQuery.css( elem, "position" ) === "fixed" ) {
	
				// Assume getBoundingClientRect is there when computed position is fixed
				offset = elem.getBoundingClientRect();
	
			} else {
	
				// Get *real* offsetParent
				offsetParent = this.offsetParent();
	
				// Get correct offsets
				offset = this.offset();
				if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) ) {
					parentOffset = offsetParent.offset();
				}
	
				// Add offsetParent borders
				parentOffset.top += jQuery.css( offsetParent[ 0 ], "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true );
			}
	
			// Subtract parent offsets and element margins
			return {
				top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
				left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
			};
		},
	
		// This method will return documentElement in the following cases:
		// 1) For the element inside the iframe without offsetParent, this method will return
		//    documentElement of the parent window
		// 2) For the hidden or detached element
		// 3) For body or html element, i.e. in case of the html node - it will return itself
		//
		// but those exceptions were never presented as a real life use-cases
		// and might be considered as more preferable results.
		//
		// This logic, however, is not guaranteed and can change at any point in the future
		offsetParent: function() {
			return this.map( function() {
				var offsetParent = this.offsetParent;
	
				while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
					offsetParent = offsetParent.offsetParent;
				}
	
				return offsetParent || documentElement;
			} );
		}
	} );
	
	// Create scrollLeft and scrollTop methods
	jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
		var top = "pageYOffset" === prop;
	
		jQuery.fn[ method ] = function( val ) {
			return access( this, function( elem, method, val ) {
				var win = getWindow( elem );
	
				if ( val === undefined ) {
					return win ? win[ prop ] : elem[ method ];
				}
	
				if ( win ) {
					win.scrollTo(
						!top ? val : win.pageXOffset,
						top ? val : win.pageYOffset
					);
	
				} else {
					elem[ method ] = val;
				}
			}, method, val, arguments.length );
		};
	} );
	
	// Support: Safari<7-8+, Chrome<37-44+
	// Add the top/left cssHooks using jQuery.fn.position
	// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
	// Blink bug: https://code.google.com/p/chromium/issues/detail?id=229280
	// getComputedStyle returns percent when specified for top/left/bottom/right;
	// rather than make the css module depend on the offset module, just check for it here
	jQuery.each( [ "top", "left" ], function( i, prop ) {
		jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
			function( elem, computed ) {
				if ( computed ) {
					computed = curCSS( elem, prop );
	
					// If curCSS returns percentage, fallback to offset
					return rnumnonpx.test( computed ) ?
						jQuery( elem ).position()[ prop ] + "px" :
						computed;
				}
			}
		);
	} );
	
	
	// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
	jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
		jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
			function( defaultExtra, funcName ) {
	
			// Margin is only for outerHeight, outerWidth
			jQuery.fn[ funcName ] = function( margin, value ) {
				var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
					extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );
	
				return access( this, function( elem, type, value ) {
					var doc;
	
					if ( jQuery.isWindow( elem ) ) {
	
						// As of 5/8/2012 this will yield incorrect results for Mobile Safari, but there
						// isn't a whole lot we can do. See pull request at this URL for discussion:
						// https://github.com/jquery/jquery/pull/764
						return elem.document.documentElement[ "client" + name ];
					}
	
					// Get document width or height
					if ( elem.nodeType === 9 ) {
						doc = elem.documentElement;
	
						// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
						// whichever is greatest
						return Math.max(
							elem.body[ "scroll" + name ], doc[ "scroll" + name ],
							elem.body[ "offset" + name ], doc[ "offset" + name ],
							doc[ "client" + name ]
						);
					}
	
					return value === undefined ?
	
						// Get width or height on the element, requesting but not forcing parseFloat
						jQuery.css( elem, type, extra ) :
	
						// Set width or height on the element
						jQuery.style( elem, type, value, extra );
				}, type, chainable ? margin : undefined, chainable, null );
			};
		} );
	} );
	
	
	jQuery.fn.extend( {
	
		bind: function( types, data, fn ) {
			return this.on( types, null, data, fn );
		},
		unbind: function( types, fn ) {
			return this.off( types, null, fn );
		},
	
		delegate: function( selector, types, data, fn ) {
			return this.on( types, selector, data, fn );
		},
		undelegate: function( selector, types, fn ) {
	
			// ( namespace ) or ( selector, types [, fn] )
			return arguments.length === 1 ?
				this.off( selector, "**" ) :
				this.off( types, selector || "**", fn );
		},
		size: function() {
			return this.length;
		}
	} );
	
	jQuery.fn.andSelf = jQuery.fn.addBack;
	
	
	
	
	// Register as a named AMD module, since jQuery can be concatenated with other
	// files that may use define, but not via a proper concatenation script that
	// understands anonymous AMD modules. A named AMD is safest and most robust
	// way to register. Lowercase jquery is used because AMD module names are
	// derived from file names, and jQuery is normally delivered in a lowercase
	// file name. Do this after creating the global so that if an AMD module wants
	// to call noConflict to hide this version of jQuery, it will work.
	
	// Note that for maximum portability, libraries that are not jQuery should
	// declare themselves as anonymous modules, and avoid setting a global if an
	// AMD loader is present. jQuery is a special case. For more information, see
	// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon
	
	if ( true ) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
			return jQuery;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}
	
	
	
	var
	
		// Map over jQuery in case of overwrite
		_jQuery = window.jQuery,
	
		// Map over the $ in case of overwrite
		_$ = window.$;
	
	jQuery.noConflict = function( deep ) {
		if ( window.$ === jQuery ) {
			window.$ = _$;
		}
	
		if ( deep && window.jQuery === jQuery ) {
			window.jQuery = _jQuery;
		}
	
		return jQuery;
	};
	
	// Expose jQuery and $ identifiers, even in AMD
	// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
	// and CommonJS for browser emulators (#13566)
	if ( !noGlobal ) {
		window.jQuery = window.$ = jQuery;
	}
	
	return jQuery;
	}));


/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;//     Underscore.js 1.8.3
	//     http://underscorejs.org
	//     (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	//     Underscore may be freely distributed under the MIT license.
	
	(function() {
	
	  // Baseline setup
	  // --------------
	
	  // Establish the root object, `window` in the browser, or `exports` on the server.
	  var root = this;
	
	  // Save the previous value of the `_` variable.
	  var previousUnderscore = root._;
	
	  // Save bytes in the minified (but not gzipped) version:
	  var ArrayProto = Array.prototype, ObjProto = Object.prototype, FuncProto = Function.prototype;
	
	  // Create quick reference variables for speed access to core prototypes.
	  var
	    push             = ArrayProto.push,
	    slice            = ArrayProto.slice,
	    toString         = ObjProto.toString,
	    hasOwnProperty   = ObjProto.hasOwnProperty;
	
	  // All **ECMAScript 5** native function implementations that we hope to use
	  // are declared here.
	  var
	    nativeIsArray      = Array.isArray,
	    nativeKeys         = Object.keys,
	    nativeBind         = FuncProto.bind,
	    nativeCreate       = Object.create;
	
	  // Naked function reference for surrogate-prototype-swapping.
	  var Ctor = function(){};
	
	  // Create a safe reference to the Underscore object for use below.
	  var _ = function(obj) {
	    if (obj instanceof _) return obj;
	    if (!(this instanceof _)) return new _(obj);
	    this._wrapped = obj;
	  };
	
	  // Export the Underscore object for **Node.js**, with
	  // backwards-compatibility for the old `require()` API. If we're in
	  // the browser, add `_` as a global object.
	  if (true) {
	    if (typeof module !== 'undefined' && module.exports) {
	      exports = module.exports = _;
	    }
	    exports._ = _;
	  } else {
	    root._ = _;
	  }
	
	  // Current version.
	  _.VERSION = '1.8.3';
	
	  // Internal function that returns an efficient (for current engines) version
	  // of the passed-in callback, to be repeatedly applied in other Underscore
	  // functions.
	  var optimizeCb = function(func, context, argCount) {
	    if (context === void 0) return func;
	    switch (argCount == null ? 3 : argCount) {
	      case 1: return function(value) {
	        return func.call(context, value);
	      };
	      case 2: return function(value, other) {
	        return func.call(context, value, other);
	      };
	      case 3: return function(value, index, collection) {
	        return func.call(context, value, index, collection);
	      };
	      case 4: return function(accumulator, value, index, collection) {
	        return func.call(context, accumulator, value, index, collection);
	      };
	    }
	    return function() {
	      return func.apply(context, arguments);
	    };
	  };
	
	  // A mostly-internal function to generate callbacks that can be applied
	  // to each element in a collection, returning the desired result — either
	  // identity, an arbitrary callback, a property matcher, or a property accessor.
	  var cb = function(value, context, argCount) {
	    if (value == null) return _.identity;
	    if (_.isFunction(value)) return optimizeCb(value, context, argCount);
	    if (_.isObject(value)) return _.matcher(value);
	    return _.property(value);
	  };
	  _.iteratee = function(value, context) {
	    return cb(value, context, Infinity);
	  };
	
	  // An internal function for creating assigner functions.
	  var createAssigner = function(keysFunc, undefinedOnly) {
	    return function(obj) {
	      var length = arguments.length;
	      if (length < 2 || obj == null) return obj;
	      for (var index = 1; index < length; index++) {
	        var source = arguments[index],
	            keys = keysFunc(source),
	            l = keys.length;
	        for (var i = 0; i < l; i++) {
	          var key = keys[i];
	          if (!undefinedOnly || obj[key] === void 0) obj[key] = source[key];
	        }
	      }
	      return obj;
	    };
	  };
	
	  // An internal function for creating a new object that inherits from another.
	  var baseCreate = function(prototype) {
	    if (!_.isObject(prototype)) return {};
	    if (nativeCreate) return nativeCreate(prototype);
	    Ctor.prototype = prototype;
	    var result = new Ctor;
	    Ctor.prototype = null;
	    return result;
	  };
	
	  var property = function(key) {
	    return function(obj) {
	      return obj == null ? void 0 : obj[key];
	    };
	  };
	
	  // Helper for collection methods to determine whether a collection
	  // should be iterated as an array or as an object
	  // Related: http://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength
	  // Avoids a very nasty iOS 8 JIT bug on ARM-64. #2094
	  var MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;
	  var getLength = property('length');
	  var isArrayLike = function(collection) {
	    var length = getLength(collection);
	    return typeof length == 'number' && length >= 0 && length <= MAX_ARRAY_INDEX;
	  };
	
	  // Collection Functions
	  // --------------------
	
	  // The cornerstone, an `each` implementation, aka `forEach`.
	  // Handles raw objects in addition to array-likes. Treats all
	  // sparse array-likes as if they were dense.
	  _.each = _.forEach = function(obj, iteratee, context) {
	    iteratee = optimizeCb(iteratee, context);
	    var i, length;
	    if (isArrayLike(obj)) {
	      for (i = 0, length = obj.length; i < length; i++) {
	        iteratee(obj[i], i, obj);
	      }
	    } else {
	      var keys = _.keys(obj);
	      for (i = 0, length = keys.length; i < length; i++) {
	        iteratee(obj[keys[i]], keys[i], obj);
	      }
	    }
	    return obj;
	  };
	
	  // Return the results of applying the iteratee to each element.
	  _.map = _.collect = function(obj, iteratee, context) {
	    iteratee = cb(iteratee, context);
	    var keys = !isArrayLike(obj) && _.keys(obj),
	        length = (keys || obj).length,
	        results = Array(length);
	    for (var index = 0; index < length; index++) {
	      var currentKey = keys ? keys[index] : index;
	      results[index] = iteratee(obj[currentKey], currentKey, obj);
	    }
	    return results;
	  };
	
	  // Create a reducing function iterating left or right.
	  function createReduce(dir) {
	    // Optimized iterator function as using arguments.length
	    // in the main function will deoptimize the, see #1991.
	    function iterator(obj, iteratee, memo, keys, index, length) {
	      for (; index >= 0 && index < length; index += dir) {
	        var currentKey = keys ? keys[index] : index;
	        memo = iteratee(memo, obj[currentKey], currentKey, obj);
	      }
	      return memo;
	    }
	
	    return function(obj, iteratee, memo, context) {
	      iteratee = optimizeCb(iteratee, context, 4);
	      var keys = !isArrayLike(obj) && _.keys(obj),
	          length = (keys || obj).length,
	          index = dir > 0 ? 0 : length - 1;
	      // Determine the initial value if none is provided.
	      if (arguments.length < 3) {
	        memo = obj[keys ? keys[index] : index];
	        index += dir;
	      }
	      return iterator(obj, iteratee, memo, keys, index, length);
	    };
	  }
	
	  // **Reduce** builds up a single result from a list of values, aka `inject`,
	  // or `foldl`.
	  _.reduce = _.foldl = _.inject = createReduce(1);
	
	  // The right-associative version of reduce, also known as `foldr`.
	  _.reduceRight = _.foldr = createReduce(-1);
	
	  // Return the first value which passes a truth test. Aliased as `detect`.
	  _.find = _.detect = function(obj, predicate, context) {
	    var key;
	    if (isArrayLike(obj)) {
	      key = _.findIndex(obj, predicate, context);
	    } else {
	      key = _.findKey(obj, predicate, context);
	    }
	    if (key !== void 0 && key !== -1) return obj[key];
	  };
	
	  // Return all the elements that pass a truth test.
	  // Aliased as `select`.
	  _.filter = _.select = function(obj, predicate, context) {
	    var results = [];
	    predicate = cb(predicate, context);
	    _.each(obj, function(value, index, list) {
	      if (predicate(value, index, list)) results.push(value);
	    });
	    return results;
	  };
	
	  // Return all the elements for which a truth test fails.
	  _.reject = function(obj, predicate, context) {
	    return _.filter(obj, _.negate(cb(predicate)), context);
	  };
	
	  // Determine whether all of the elements match a truth test.
	  // Aliased as `all`.
	  _.every = _.all = function(obj, predicate, context) {
	    predicate = cb(predicate, context);
	    var keys = !isArrayLike(obj) && _.keys(obj),
	        length = (keys || obj).length;
	    for (var index = 0; index < length; index++) {
	      var currentKey = keys ? keys[index] : index;
	      if (!predicate(obj[currentKey], currentKey, obj)) return false;
	    }
	    return true;
	  };
	
	  // Determine if at least one element in the object matches a truth test.
	  // Aliased as `any`.
	  _.some = _.any = function(obj, predicate, context) {
	    predicate = cb(predicate, context);
	    var keys = !isArrayLike(obj) && _.keys(obj),
	        length = (keys || obj).length;
	    for (var index = 0; index < length; index++) {
	      var currentKey = keys ? keys[index] : index;
	      if (predicate(obj[currentKey], currentKey, obj)) return true;
	    }
	    return false;
	  };
	
	  // Determine if the array or object contains a given item (using `===`).
	  // Aliased as `includes` and `include`.
	  _.contains = _.includes = _.include = function(obj, item, fromIndex, guard) {
	    if (!isArrayLike(obj)) obj = _.values(obj);
	    if (typeof fromIndex != 'number' || guard) fromIndex = 0;
	    return _.indexOf(obj, item, fromIndex) >= 0;
	  };
	
	  // Invoke a method (with arguments) on every item in a collection.
	  _.invoke = function(obj, method) {
	    var args = slice.call(arguments, 2);
	    var isFunc = _.isFunction(method);
	    return _.map(obj, function(value) {
	      var func = isFunc ? method : value[method];
	      return func == null ? func : func.apply(value, args);
	    });
	  };
	
	  // Convenience version of a common use case of `map`: fetching a property.
	  _.pluck = function(obj, key) {
	    return _.map(obj, _.property(key));
	  };
	
	  // Convenience version of a common use case of `filter`: selecting only objects
	  // containing specific `key:value` pairs.
	  _.where = function(obj, attrs) {
	    return _.filter(obj, _.matcher(attrs));
	  };
	
	  // Convenience version of a common use case of `find`: getting the first object
	  // containing specific `key:value` pairs.
	  _.findWhere = function(obj, attrs) {
	    return _.find(obj, _.matcher(attrs));
	  };
	
	  // Return the maximum element (or element-based computation).
	  _.max = function(obj, iteratee, context) {
	    var result = -Infinity, lastComputed = -Infinity,
	        value, computed;
	    if (iteratee == null && obj != null) {
	      obj = isArrayLike(obj) ? obj : _.values(obj);
	      for (var i = 0, length = obj.length; i < length; i++) {
	        value = obj[i];
	        if (value > result) {
	          result = value;
	        }
	      }
	    } else {
	      iteratee = cb(iteratee, context);
	      _.each(obj, function(value, index, list) {
	        computed = iteratee(value, index, list);
	        if (computed > lastComputed || computed === -Infinity && result === -Infinity) {
	          result = value;
	          lastComputed = computed;
	        }
	      });
	    }
	    return result;
	  };
	
	  // Return the minimum element (or element-based computation).
	  _.min = function(obj, iteratee, context) {
	    var result = Infinity, lastComputed = Infinity,
	        value, computed;
	    if (iteratee == null && obj != null) {
	      obj = isArrayLike(obj) ? obj : _.values(obj);
	      for (var i = 0, length = obj.length; i < length; i++) {
	        value = obj[i];
	        if (value < result) {
	          result = value;
	        }
	      }
	    } else {
	      iteratee = cb(iteratee, context);
	      _.each(obj, function(value, index, list) {
	        computed = iteratee(value, index, list);
	        if (computed < lastComputed || computed === Infinity && result === Infinity) {
	          result = value;
	          lastComputed = computed;
	        }
	      });
	    }
	    return result;
	  };
	
	  // Shuffle a collection, using the modern version of the
	  // [Fisher-Yates shuffle](http://en.wikipedia.org/wiki/Fisher–Yates_shuffle).
	  _.shuffle = function(obj) {
	    var set = isArrayLike(obj) ? obj : _.values(obj);
	    var length = set.length;
	    var shuffled = Array(length);
	    for (var index = 0, rand; index < length; index++) {
	      rand = _.random(0, index);
	      if (rand !== index) shuffled[index] = shuffled[rand];
	      shuffled[rand] = set[index];
	    }
	    return shuffled;
	  };
	
	  // Sample **n** random values from a collection.
	  // If **n** is not specified, returns a single random element.
	  // The internal `guard` argument allows it to work with `map`.
	  _.sample = function(obj, n, guard) {
	    if (n == null || guard) {
	      if (!isArrayLike(obj)) obj = _.values(obj);
	      return obj[_.random(obj.length - 1)];
	    }
	    return _.shuffle(obj).slice(0, Math.max(0, n));
	  };
	
	  // Sort the object's values by a criterion produced by an iteratee.
	  _.sortBy = function(obj, iteratee, context) {
	    iteratee = cb(iteratee, context);
	    return _.pluck(_.map(obj, function(value, index, list) {
	      return {
	        value: value,
	        index: index,
	        criteria: iteratee(value, index, list)
	      };
	    }).sort(function(left, right) {
	      var a = left.criteria;
	      var b = right.criteria;
	      if (a !== b) {
	        if (a > b || a === void 0) return 1;
	        if (a < b || b === void 0) return -1;
	      }
	      return left.index - right.index;
	    }), 'value');
	  };
	
	  // An internal function used for aggregate "group by" operations.
	  var group = function(behavior) {
	    return function(obj, iteratee, context) {
	      var result = {};
	      iteratee = cb(iteratee, context);
	      _.each(obj, function(value, index) {
	        var key = iteratee(value, index, obj);
	        behavior(result, value, key);
	      });
	      return result;
	    };
	  };
	
	  // Groups the object's values by a criterion. Pass either a string attribute
	  // to group by, or a function that returns the criterion.
	  _.groupBy = group(function(result, value, key) {
	    if (_.has(result, key)) result[key].push(value); else result[key] = [value];
	  });
	
	  // Indexes the object's values by a criterion, similar to `groupBy`, but for
	  // when you know that your index values will be unique.
	  _.indexBy = group(function(result, value, key) {
	    result[key] = value;
	  });
	
	  // Counts instances of an object that group by a certain criterion. Pass
	  // either a string attribute to count by, or a function that returns the
	  // criterion.
	  _.countBy = group(function(result, value, key) {
	    if (_.has(result, key)) result[key]++; else result[key] = 1;
	  });
	
	  // Safely create a real, live array from anything iterable.
	  _.toArray = function(obj) {
	    if (!obj) return [];
	    if (_.isArray(obj)) return slice.call(obj);
	    if (isArrayLike(obj)) return _.map(obj, _.identity);
	    return _.values(obj);
	  };
	
	  // Return the number of elements in an object.
	  _.size = function(obj) {
	    if (obj == null) return 0;
	    return isArrayLike(obj) ? obj.length : _.keys(obj).length;
	  };
	
	  // Split a collection into two arrays: one whose elements all satisfy the given
	  // predicate, and one whose elements all do not satisfy the predicate.
	  _.partition = function(obj, predicate, context) {
	    predicate = cb(predicate, context);
	    var pass = [], fail = [];
	    _.each(obj, function(value, key, obj) {
	      (predicate(value, key, obj) ? pass : fail).push(value);
	    });
	    return [pass, fail];
	  };
	
	  // Array Functions
	  // ---------------
	
	  // Get the first element of an array. Passing **n** will return the first N
	  // values in the array. Aliased as `head` and `take`. The **guard** check
	  // allows it to work with `_.map`.
	  _.first = _.head = _.take = function(array, n, guard) {
	    if (array == null) return void 0;
	    if (n == null || guard) return array[0];
	    return _.initial(array, array.length - n);
	  };
	
	  // Returns everything but the last entry of the array. Especially useful on
	  // the arguments object. Passing **n** will return all the values in
	  // the array, excluding the last N.
	  _.initial = function(array, n, guard) {
	    return slice.call(array, 0, Math.max(0, array.length - (n == null || guard ? 1 : n)));
	  };
	
	  // Get the last element of an array. Passing **n** will return the last N
	  // values in the array.
	  _.last = function(array, n, guard) {
	    if (array == null) return void 0;
	    if (n == null || guard) return array[array.length - 1];
	    return _.rest(array, Math.max(0, array.length - n));
	  };
	
	  // Returns everything but the first entry of the array. Aliased as `tail` and `drop`.
	  // Especially useful on the arguments object. Passing an **n** will return
	  // the rest N values in the array.
	  _.rest = _.tail = _.drop = function(array, n, guard) {
	    return slice.call(array, n == null || guard ? 1 : n);
	  };
	
	  // Trim out all falsy values from an array.
	  _.compact = function(array) {
	    return _.filter(array, _.identity);
	  };
	
	  // Internal implementation of a recursive `flatten` function.
	  var flatten = function(input, shallow, strict, startIndex) {
	    var output = [], idx = 0;
	    for (var i = startIndex || 0, length = getLength(input); i < length; i++) {
	      var value = input[i];
	      if (isArrayLike(value) && (_.isArray(value) || _.isArguments(value))) {
	        //flatten current level of array or arguments object
	        if (!shallow) value = flatten(value, shallow, strict);
	        var j = 0, len = value.length;
	        output.length += len;
	        while (j < len) {
	          output[idx++] = value[j++];
	        }
	      } else if (!strict) {
	        output[idx++] = value;
	      }
	    }
	    return output;
	  };
	
	  // Flatten out an array, either recursively (by default), or just one level.
	  _.flatten = function(array, shallow) {
	    return flatten(array, shallow, false);
	  };
	
	  // Return a version of the array that does not contain the specified value(s).
	  _.without = function(array) {
	    return _.difference(array, slice.call(arguments, 1));
	  };
	
	  // Produce a duplicate-free version of the array. If the array has already
	  // been sorted, you have the option of using a faster algorithm.
	  // Aliased as `unique`.
	  _.uniq = _.unique = function(array, isSorted, iteratee, context) {
	    if (!_.isBoolean(isSorted)) {
	      context = iteratee;
	      iteratee = isSorted;
	      isSorted = false;
	    }
	    if (iteratee != null) iteratee = cb(iteratee, context);
	    var result = [];
	    var seen = [];
	    for (var i = 0, length = getLength(array); i < length; i++) {
	      var value = array[i],
	          computed = iteratee ? iteratee(value, i, array) : value;
	      if (isSorted) {
	        if (!i || seen !== computed) result.push(value);
	        seen = computed;
	      } else if (iteratee) {
	        if (!_.contains(seen, computed)) {
	          seen.push(computed);
	          result.push(value);
	        }
	      } else if (!_.contains(result, value)) {
	        result.push(value);
	      }
	    }
	    return result;
	  };
	
	  // Produce an array that contains the union: each distinct element from all of
	  // the passed-in arrays.
	  _.union = function() {
	    return _.uniq(flatten(arguments, true, true));
	  };
	
	  // Produce an array that contains every item shared between all the
	  // passed-in arrays.
	  _.intersection = function(array) {
	    var result = [];
	    var argsLength = arguments.length;
	    for (var i = 0, length = getLength(array); i < length; i++) {
	      var item = array[i];
	      if (_.contains(result, item)) continue;
	      for (var j = 1; j < argsLength; j++) {
	        if (!_.contains(arguments[j], item)) break;
	      }
	      if (j === argsLength) result.push(item);
	    }
	    return result;
	  };
	
	  // Take the difference between one array and a number of other arrays.
	  // Only the elements present in just the first array will remain.
	  _.difference = function(array) {
	    var rest = flatten(arguments, true, true, 1);
	    return _.filter(array, function(value){
	      return !_.contains(rest, value);
	    });
	  };
	
	  // Zip together multiple lists into a single array -- elements that share
	  // an index go together.
	  _.zip = function() {
	    return _.unzip(arguments);
	  };
	
	  // Complement of _.zip. Unzip accepts an array of arrays and groups
	  // each array's elements on shared indices
	  _.unzip = function(array) {
	    var length = array && _.max(array, getLength).length || 0;
	    var result = Array(length);
	
	    for (var index = 0; index < length; index++) {
	      result[index] = _.pluck(array, index);
	    }
	    return result;
	  };
	
	  // Converts lists into objects. Pass either a single array of `[key, value]`
	  // pairs, or two parallel arrays of the same length -- one of keys, and one of
	  // the corresponding values.
	  _.object = function(list, values) {
	    var result = {};
	    for (var i = 0, length = getLength(list); i < length; i++) {
	      if (values) {
	        result[list[i]] = values[i];
	      } else {
	        result[list[i][0]] = list[i][1];
	      }
	    }
	    return result;
	  };
	
	  // Generator function to create the findIndex and findLastIndex functions
	  function createPredicateIndexFinder(dir) {
	    return function(array, predicate, context) {
	      predicate = cb(predicate, context);
	      var length = getLength(array);
	      var index = dir > 0 ? 0 : length - 1;
	      for (; index >= 0 && index < length; index += dir) {
	        if (predicate(array[index], index, array)) return index;
	      }
	      return -1;
	    };
	  }
	
	  // Returns the first index on an array-like that passes a predicate test
	  _.findIndex = createPredicateIndexFinder(1);
	  _.findLastIndex = createPredicateIndexFinder(-1);
	
	  // Use a comparator function to figure out the smallest index at which
	  // an object should be inserted so as to maintain order. Uses binary search.
	  _.sortedIndex = function(array, obj, iteratee, context) {
	    iteratee = cb(iteratee, context, 1);
	    var value = iteratee(obj);
	    var low = 0, high = getLength(array);
	    while (low < high) {
	      var mid = Math.floor((low + high) / 2);
	      if (iteratee(array[mid]) < value) low = mid + 1; else high = mid;
	    }
	    return low;
	  };
	
	  // Generator function to create the indexOf and lastIndexOf functions
	  function createIndexFinder(dir, predicateFind, sortedIndex) {
	    return function(array, item, idx) {
	      var i = 0, length = getLength(array);
	      if (typeof idx == 'number') {
	        if (dir > 0) {
	            i = idx >= 0 ? idx : Math.max(idx + length, i);
	        } else {
	            length = idx >= 0 ? Math.min(idx + 1, length) : idx + length + 1;
	        }
	      } else if (sortedIndex && idx && length) {
	        idx = sortedIndex(array, item);
	        return array[idx] === item ? idx : -1;
	      }
	      if (item !== item) {
	        idx = predicateFind(slice.call(array, i, length), _.isNaN);
	        return idx >= 0 ? idx + i : -1;
	      }
	      for (idx = dir > 0 ? i : length - 1; idx >= 0 && idx < length; idx += dir) {
	        if (array[idx] === item) return idx;
	      }
	      return -1;
	    };
	  }
	
	  // Return the position of the first occurrence of an item in an array,
	  // or -1 if the item is not included in the array.
	  // If the array is large and already in sort order, pass `true`
	  // for **isSorted** to use binary search.
	  _.indexOf = createIndexFinder(1, _.findIndex, _.sortedIndex);
	  _.lastIndexOf = createIndexFinder(-1, _.findLastIndex);
	
	  // Generate an integer Array containing an arithmetic progression. A port of
	  // the native Python `range()` function. See
	  // [the Python documentation](http://docs.python.org/library/functions.html#range).
	  _.range = function(start, stop, step) {
	    if (stop == null) {
	      stop = start || 0;
	      start = 0;
	    }
	    step = step || 1;
	
	    var length = Math.max(Math.ceil((stop - start) / step), 0);
	    var range = Array(length);
	
	    for (var idx = 0; idx < length; idx++, start += step) {
	      range[idx] = start;
	    }
	
	    return range;
	  };
	
	  // Function (ahem) Functions
	  // ------------------
	
	  // Determines whether to execute a function as a constructor
	  // or a normal function with the provided arguments
	  var executeBound = function(sourceFunc, boundFunc, context, callingContext, args) {
	    if (!(callingContext instanceof boundFunc)) return sourceFunc.apply(context, args);
	    var self = baseCreate(sourceFunc.prototype);
	    var result = sourceFunc.apply(self, args);
	    if (_.isObject(result)) return result;
	    return self;
	  };
	
	  // Create a function bound to a given object (assigning `this`, and arguments,
	  // optionally). Delegates to **ECMAScript 5**'s native `Function.bind` if
	  // available.
	  _.bind = function(func, context) {
	    if (nativeBind && func.bind === nativeBind) return nativeBind.apply(func, slice.call(arguments, 1));
	    if (!_.isFunction(func)) throw new TypeError('Bind must be called on a function');
	    var args = slice.call(arguments, 2);
	    var bound = function() {
	      return executeBound(func, bound, context, this, args.concat(slice.call(arguments)));
	    };
	    return bound;
	  };
	
	  // Partially apply a function by creating a version that has had some of its
	  // arguments pre-filled, without changing its dynamic `this` context. _ acts
	  // as a placeholder, allowing any combination of arguments to be pre-filled.
	  _.partial = function(func) {
	    var boundArgs = slice.call(arguments, 1);
	    var bound = function() {
	      var position = 0, length = boundArgs.length;
	      var args = Array(length);
	      for (var i = 0; i < length; i++) {
	        args[i] = boundArgs[i] === _ ? arguments[position++] : boundArgs[i];
	      }
	      while (position < arguments.length) args.push(arguments[position++]);
	      return executeBound(func, bound, this, this, args);
	    };
	    return bound;
	  };
	
	  // Bind a number of an object's methods to that object. Remaining arguments
	  // are the method names to be bound. Useful for ensuring that all callbacks
	  // defined on an object belong to it.
	  _.bindAll = function(obj) {
	    var i, length = arguments.length, key;
	    if (length <= 1) throw new Error('bindAll must be passed function names');
	    for (i = 1; i < length; i++) {
	      key = arguments[i];
	      obj[key] = _.bind(obj[key], obj);
	    }
	    return obj;
	  };
	
	  // Memoize an expensive function by storing its results.
	  _.memoize = function(func, hasher) {
	    var memoize = function(key) {
	      var cache = memoize.cache;
	      var address = '' + (hasher ? hasher.apply(this, arguments) : key);
	      if (!_.has(cache, address)) cache[address] = func.apply(this, arguments);
	      return cache[address];
	    };
	    memoize.cache = {};
	    return memoize;
	  };
	
	  // Delays a function for the given number of milliseconds, and then calls
	  // it with the arguments supplied.
	  _.delay = function(func, wait) {
	    var args = slice.call(arguments, 2);
	    return setTimeout(function(){
	      return func.apply(null, args);
	    }, wait);
	  };
	
	  // Defers a function, scheduling it to run after the current call stack has
	  // cleared.
	  _.defer = _.partial(_.delay, _, 1);
	
	  // Returns a function, that, when invoked, will only be triggered at most once
	  // during a given window of time. Normally, the throttled function will run
	  // as much as it can, without ever going more than once per `wait` duration;
	  // but if you'd like to disable the execution on the leading edge, pass
	  // `{leading: false}`. To disable execution on the trailing edge, ditto.
	  _.throttle = function(func, wait, options) {
	    var context, args, result;
	    var timeout = null;
	    var previous = 0;
	    if (!options) options = {};
	    var later = function() {
	      previous = options.leading === false ? 0 : _.now();
	      timeout = null;
	      result = func.apply(context, args);
	      if (!timeout) context = args = null;
	    };
	    return function() {
	      var now = _.now();
	      if (!previous && options.leading === false) previous = now;
	      var remaining = wait - (now - previous);
	      context = this;
	      args = arguments;
	      if (remaining <= 0 || remaining > wait) {
	        if (timeout) {
	          clearTimeout(timeout);
	          timeout = null;
	        }
	        previous = now;
	        result = func.apply(context, args);
	        if (!timeout) context = args = null;
	      } else if (!timeout && options.trailing !== false) {
	        timeout = setTimeout(later, remaining);
	      }
	      return result;
	    };
	  };
	
	  // Returns a function, that, as long as it continues to be invoked, will not
	  // be triggered. The function will be called after it stops being called for
	  // N milliseconds. If `immediate` is passed, trigger the function on the
	  // leading edge, instead of the trailing.
	  _.debounce = function(func, wait, immediate) {
	    var timeout, args, context, timestamp, result;
	
	    var later = function() {
	      var last = _.now() - timestamp;
	
	      if (last < wait && last >= 0) {
	        timeout = setTimeout(later, wait - last);
	      } else {
	        timeout = null;
	        if (!immediate) {
	          result = func.apply(context, args);
	          if (!timeout) context = args = null;
	        }
	      }
	    };
	
	    return function() {
	      context = this;
	      args = arguments;
	      timestamp = _.now();
	      var callNow = immediate && !timeout;
	      if (!timeout) timeout = setTimeout(later, wait);
	      if (callNow) {
	        result = func.apply(context, args);
	        context = args = null;
	      }
	
	      return result;
	    };
	  };
	
	  // Returns the first function passed as an argument to the second,
	  // allowing you to adjust arguments, run code before and after, and
	  // conditionally execute the original function.
	  _.wrap = function(func, wrapper) {
	    return _.partial(wrapper, func);
	  };
	
	  // Returns a negated version of the passed-in predicate.
	  _.negate = function(predicate) {
	    return function() {
	      return !predicate.apply(this, arguments);
	    };
	  };
	
	  // Returns a function that is the composition of a list of functions, each
	  // consuming the return value of the function that follows.
	  _.compose = function() {
	    var args = arguments;
	    var start = args.length - 1;
	    return function() {
	      var i = start;
	      var result = args[start].apply(this, arguments);
	      while (i--) result = args[i].call(this, result);
	      return result;
	    };
	  };
	
	  // Returns a function that will only be executed on and after the Nth call.
	  _.after = function(times, func) {
	    return function() {
	      if (--times < 1) {
	        return func.apply(this, arguments);
	      }
	    };
	  };
	
	  // Returns a function that will only be executed up to (but not including) the Nth call.
	  _.before = function(times, func) {
	    var memo;
	    return function() {
	      if (--times > 0) {
	        memo = func.apply(this, arguments);
	      }
	      if (times <= 1) func = null;
	      return memo;
	    };
	  };
	
	  // Returns a function that will be executed at most one time, no matter how
	  // often you call it. Useful for lazy initialization.
	  _.once = _.partial(_.before, 2);
	
	  // Object Functions
	  // ----------------
	
	  // Keys in IE < 9 that won't be iterated by `for key in ...` and thus missed.
	  var hasEnumBug = !{toString: null}.propertyIsEnumerable('toString');
	  var nonEnumerableProps = ['valueOf', 'isPrototypeOf', 'toString',
	                      'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString'];
	
	  function collectNonEnumProps(obj, keys) {
	    var nonEnumIdx = nonEnumerableProps.length;
	    var constructor = obj.constructor;
	    var proto = (_.isFunction(constructor) && constructor.prototype) || ObjProto;
	
	    // Constructor is a special case.
	    var prop = 'constructor';
	    if (_.has(obj, prop) && !_.contains(keys, prop)) keys.push(prop);
	
	    while (nonEnumIdx--) {
	      prop = nonEnumerableProps[nonEnumIdx];
	      if (prop in obj && obj[prop] !== proto[prop] && !_.contains(keys, prop)) {
	        keys.push(prop);
	      }
	    }
	  }
	
	  // Retrieve the names of an object's own properties.
	  // Delegates to **ECMAScript 5**'s native `Object.keys`
	  _.keys = function(obj) {
	    if (!_.isObject(obj)) return [];
	    if (nativeKeys) return nativeKeys(obj);
	    var keys = [];
	    for (var key in obj) if (_.has(obj, key)) keys.push(key);
	    // Ahem, IE < 9.
	    if (hasEnumBug) collectNonEnumProps(obj, keys);
	    return keys;
	  };
	
	  // Retrieve all the property names of an object.
	  _.allKeys = function(obj) {
	    if (!_.isObject(obj)) return [];
	    var keys = [];
	    for (var key in obj) keys.push(key);
	    // Ahem, IE < 9.
	    if (hasEnumBug) collectNonEnumProps(obj, keys);
	    return keys;
	  };
	
	  // Retrieve the values of an object's properties.
	  _.values = function(obj) {
	    var keys = _.keys(obj);
	    var length = keys.length;
	    var values = Array(length);
	    for (var i = 0; i < length; i++) {
	      values[i] = obj[keys[i]];
	    }
	    return values;
	  };
	
	  // Returns the results of applying the iteratee to each element of the object
	  // In contrast to _.map it returns an object
	  _.mapObject = function(obj, iteratee, context) {
	    iteratee = cb(iteratee, context);
	    var keys =  _.keys(obj),
	          length = keys.length,
	          results = {},
	          currentKey;
	      for (var index = 0; index < length; index++) {
	        currentKey = keys[index];
	        results[currentKey] = iteratee(obj[currentKey], currentKey, obj);
	      }
	      return results;
	  };
	
	  // Convert an object into a list of `[key, value]` pairs.
	  _.pairs = function(obj) {
	    var keys = _.keys(obj);
	    var length = keys.length;
	    var pairs = Array(length);
	    for (var i = 0; i < length; i++) {
	      pairs[i] = [keys[i], obj[keys[i]]];
	    }
	    return pairs;
	  };
	
	  // Invert the keys and values of an object. The values must be serializable.
	  _.invert = function(obj) {
	    var result = {};
	    var keys = _.keys(obj);
	    for (var i = 0, length = keys.length; i < length; i++) {
	      result[obj[keys[i]]] = keys[i];
	    }
	    return result;
	  };
	
	  // Return a sorted list of the function names available on the object.
	  // Aliased as `methods`
	  _.functions = _.methods = function(obj) {
	    var names = [];
	    for (var key in obj) {
	      if (_.isFunction(obj[key])) names.push(key);
	    }
	    return names.sort();
	  };
	
	  // Extend a given object with all the properties in passed-in object(s).
	  _.extend = createAssigner(_.allKeys);
	
	  // Assigns a given object with all the own properties in the passed-in object(s)
	  // (https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
	  _.extendOwn = _.assign = createAssigner(_.keys);
	
	  // Returns the first key on an object that passes a predicate test
	  _.findKey = function(obj, predicate, context) {
	    predicate = cb(predicate, context);
	    var keys = _.keys(obj), key;
	    for (var i = 0, length = keys.length; i < length; i++) {
	      key = keys[i];
	      if (predicate(obj[key], key, obj)) return key;
	    }
	  };
	
	  // Return a copy of the object only containing the whitelisted properties.
	  _.pick = function(object, oiteratee, context) {
	    var result = {}, obj = object, iteratee, keys;
	    if (obj == null) return result;
	    if (_.isFunction(oiteratee)) {
	      keys = _.allKeys(obj);
	      iteratee = optimizeCb(oiteratee, context);
	    } else {
	      keys = flatten(arguments, false, false, 1);
	      iteratee = function(value, key, obj) { return key in obj; };
	      obj = Object(obj);
	    }
	    for (var i = 0, length = keys.length; i < length; i++) {
	      var key = keys[i];
	      var value = obj[key];
	      if (iteratee(value, key, obj)) result[key] = value;
	    }
	    return result;
	  };
	
	   // Return a copy of the object without the blacklisted properties.
	  _.omit = function(obj, iteratee, context) {
	    if (_.isFunction(iteratee)) {
	      iteratee = _.negate(iteratee);
	    } else {
	      var keys = _.map(flatten(arguments, false, false, 1), String);
	      iteratee = function(value, key) {
	        return !_.contains(keys, key);
	      };
	    }
	    return _.pick(obj, iteratee, context);
	  };
	
	  // Fill in a given object with default properties.
	  _.defaults = createAssigner(_.allKeys, true);
	
	  // Creates an object that inherits from the given prototype object.
	  // If additional properties are provided then they will be added to the
	  // created object.
	  _.create = function(prototype, props) {
	    var result = baseCreate(prototype);
	    if (props) _.extendOwn(result, props);
	    return result;
	  };
	
	  // Create a (shallow-cloned) duplicate of an object.
	  _.clone = function(obj) {
	    if (!_.isObject(obj)) return obj;
	    return _.isArray(obj) ? obj.slice() : _.extend({}, obj);
	  };
	
	  // Invokes interceptor with the obj, and then returns obj.
	  // The primary purpose of this method is to "tap into" a method chain, in
	  // order to perform operations on intermediate results within the chain.
	  _.tap = function(obj, interceptor) {
	    interceptor(obj);
	    return obj;
	  };
	
	  // Returns whether an object has a given set of `key:value` pairs.
	  _.isMatch = function(object, attrs) {
	    var keys = _.keys(attrs), length = keys.length;
	    if (object == null) return !length;
	    var obj = Object(object);
	    for (var i = 0; i < length; i++) {
	      var key = keys[i];
	      if (attrs[key] !== obj[key] || !(key in obj)) return false;
	    }
	    return true;
	  };
	
	
	  // Internal recursive comparison function for `isEqual`.
	  var eq = function(a, b, aStack, bStack) {
	    // Identical objects are equal. `0 === -0`, but they aren't identical.
	    // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
	    if (a === b) return a !== 0 || 1 / a === 1 / b;
	    // A strict comparison is necessary because `null == undefined`.
	    if (a == null || b == null) return a === b;
	    // Unwrap any wrapped objects.
	    if (a instanceof _) a = a._wrapped;
	    if (b instanceof _) b = b._wrapped;
	    // Compare `[[Class]]` names.
	    var className = toString.call(a);
	    if (className !== toString.call(b)) return false;
	    switch (className) {
	      // Strings, numbers, regular expressions, dates, and booleans are compared by value.
	      case '[object RegExp]':
	      // RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')
	      case '[object String]':
	        // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
	        // equivalent to `new String("5")`.
	        return '' + a === '' + b;
	      case '[object Number]':
	        // `NaN`s are equivalent, but non-reflexive.
	        // Object(NaN) is equivalent to NaN
	        if (+a !== +a) return +b !== +b;
	        // An `egal` comparison is performed for other numeric values.
	        return +a === 0 ? 1 / +a === 1 / b : +a === +b;
	      case '[object Date]':
	      case '[object Boolean]':
	        // Coerce dates and booleans to numeric primitive values. Dates are compared by their
	        // millisecond representations. Note that invalid dates with millisecond representations
	        // of `NaN` are not equivalent.
	        return +a === +b;
	    }
	
	    var areArrays = className === '[object Array]';
	    if (!areArrays) {
	      if (typeof a != 'object' || typeof b != 'object') return false;
	
	      // Objects with different constructors are not equivalent, but `Object`s or `Array`s
	      // from different frames are.
	      var aCtor = a.constructor, bCtor = b.constructor;
	      if (aCtor !== bCtor && !(_.isFunction(aCtor) && aCtor instanceof aCtor &&
	                               _.isFunction(bCtor) && bCtor instanceof bCtor)
	                          && ('constructor' in a && 'constructor' in b)) {
	        return false;
	      }
	    }
	    // Assume equality for cyclic structures. The algorithm for detecting cyclic
	    // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.
	
	    // Initializing stack of traversed objects.
	    // It's done here since we only need them for objects and arrays comparison.
	    aStack = aStack || [];
	    bStack = bStack || [];
	    var length = aStack.length;
	    while (length--) {
	      // Linear search. Performance is inversely proportional to the number of
	      // unique nested structures.
	      if (aStack[length] === a) return bStack[length] === b;
	    }
	
	    // Add the first object to the stack of traversed objects.
	    aStack.push(a);
	    bStack.push(b);
	
	    // Recursively compare objects and arrays.
	    if (areArrays) {
	      // Compare array lengths to determine if a deep comparison is necessary.
	      length = a.length;
	      if (length !== b.length) return false;
	      // Deep compare the contents, ignoring non-numeric properties.
	      while (length--) {
	        if (!eq(a[length], b[length], aStack, bStack)) return false;
	      }
	    } else {
	      // Deep compare objects.
	      var keys = _.keys(a), key;
	      length = keys.length;
	      // Ensure that both objects contain the same number of properties before comparing deep equality.
	      if (_.keys(b).length !== length) return false;
	      while (length--) {
	        // Deep compare each member
	        key = keys[length];
	        if (!(_.has(b, key) && eq(a[key], b[key], aStack, bStack))) return false;
	      }
	    }
	    // Remove the first object from the stack of traversed objects.
	    aStack.pop();
	    bStack.pop();
	    return true;
	  };
	
	  // Perform a deep comparison to check if two objects are equal.
	  _.isEqual = function(a, b) {
	    return eq(a, b);
	  };
	
	  // Is a given array, string, or object empty?
	  // An "empty" object has no enumerable own-properties.
	  _.isEmpty = function(obj) {
	    if (obj == null) return true;
	    if (isArrayLike(obj) && (_.isArray(obj) || _.isString(obj) || _.isArguments(obj))) return obj.length === 0;
	    return _.keys(obj).length === 0;
	  };
	
	  // Is a given value a DOM element?
	  _.isElement = function(obj) {
	    return !!(obj && obj.nodeType === 1);
	  };
	
	  // Is a given value an array?
	  // Delegates to ECMA5's native Array.isArray
	  _.isArray = nativeIsArray || function(obj) {
	    return toString.call(obj) === '[object Array]';
	  };
	
	  // Is a given variable an object?
	  _.isObject = function(obj) {
	    var type = typeof obj;
	    return type === 'function' || type === 'object' && !!obj;
	  };
	
	  // Add some isType methods: isArguments, isFunction, isString, isNumber, isDate, isRegExp, isError.
	  _.each(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp', 'Error'], function(name) {
	    _['is' + name] = function(obj) {
	      return toString.call(obj) === '[object ' + name + ']';
	    };
	  });
	
	  // Define a fallback version of the method in browsers (ahem, IE < 9), where
	  // there isn't any inspectable "Arguments" type.
	  if (!_.isArguments(arguments)) {
	    _.isArguments = function(obj) {
	      return _.has(obj, 'callee');
	    };
	  }
	
	  // Optimize `isFunction` if appropriate. Work around some typeof bugs in old v8,
	  // IE 11 (#1621), and in Safari 8 (#1929).
	  if (typeof /./ != 'function' && typeof Int8Array != 'object') {
	    _.isFunction = function(obj) {
	      return typeof obj == 'function' || false;
	    };
	  }
	
	  // Is a given object a finite number?
	  _.isFinite = function(obj) {
	    return isFinite(obj) && !isNaN(parseFloat(obj));
	  };
	
	  // Is the given value `NaN`? (NaN is the only number which does not equal itself).
	  _.isNaN = function(obj) {
	    return _.isNumber(obj) && obj !== +obj;
	  };
	
	  // Is a given value a boolean?
	  _.isBoolean = function(obj) {
	    return obj === true || obj === false || toString.call(obj) === '[object Boolean]';
	  };
	
	  // Is a given value equal to null?
	  _.isNull = function(obj) {
	    return obj === null;
	  };
	
	  // Is a given variable undefined?
	  _.isUndefined = function(obj) {
	    return obj === void 0;
	  };
	
	  // Shortcut function for checking if an object has a given property directly
	  // on itself (in other words, not on a prototype).
	  _.has = function(obj, key) {
	    return obj != null && hasOwnProperty.call(obj, key);
	  };
	
	  // Utility Functions
	  // -----------------
	
	  // Run Underscore.js in *noConflict* mode, returning the `_` variable to its
	  // previous owner. Returns a reference to the Underscore object.
	  _.noConflict = function() {
	    root._ = previousUnderscore;
	    return this;
	  };
	
	  // Keep the identity function around for default iteratees.
	  _.identity = function(value) {
	    return value;
	  };
	
	  // Predicate-generating functions. Often useful outside of Underscore.
	  _.constant = function(value) {
	    return function() {
	      return value;
	    };
	  };
	
	  _.noop = function(){};
	
	  _.property = property;
	
	  // Generates a function for a given object that returns a given property.
	  _.propertyOf = function(obj) {
	    return obj == null ? function(){} : function(key) {
	      return obj[key];
	    };
	  };
	
	  // Returns a predicate for checking whether an object has a given set of
	  // `key:value` pairs.
	  _.matcher = _.matches = function(attrs) {
	    attrs = _.extendOwn({}, attrs);
	    return function(obj) {
	      return _.isMatch(obj, attrs);
	    };
	  };
	
	  // Run a function **n** times.
	  _.times = function(n, iteratee, context) {
	    var accum = Array(Math.max(0, n));
	    iteratee = optimizeCb(iteratee, context, 1);
	    for (var i = 0; i < n; i++) accum[i] = iteratee(i);
	    return accum;
	  };
	
	  // Return a random integer between min and max (inclusive).
	  _.random = function(min, max) {
	    if (max == null) {
	      max = min;
	      min = 0;
	    }
	    return min + Math.floor(Math.random() * (max - min + 1));
	  };
	
	  // A (possibly faster) way to get the current timestamp as an integer.
	  _.now = Date.now || function() {
	    return new Date().getTime();
	  };
	
	   // List of HTML entities for escaping.
	  var escapeMap = {
	    '&': '&amp;',
	    '<': '&lt;',
	    '>': '&gt;',
	    '"': '&quot;',
	    "'": '&#x27;',
	    '`': '&#x60;'
	  };
	  var unescapeMap = _.invert(escapeMap);
	
	  // Functions for escaping and unescaping strings to/from HTML interpolation.
	  var createEscaper = function(map) {
	    var escaper = function(match) {
	      return map[match];
	    };
	    // Regexes for identifying a key that needs to be escaped
	    var source = '(?:' + _.keys(map).join('|') + ')';
	    var testRegexp = RegExp(source);
	    var replaceRegexp = RegExp(source, 'g');
	    return function(string) {
	      string = string == null ? '' : '' + string;
	      return testRegexp.test(string) ? string.replace(replaceRegexp, escaper) : string;
	    };
	  };
	  _.escape = createEscaper(escapeMap);
	  _.unescape = createEscaper(unescapeMap);
	
	  // If the value of the named `property` is a function then invoke it with the
	  // `object` as context; otherwise, return it.
	  _.result = function(object, property, fallback) {
	    var value = object == null ? void 0 : object[property];
	    if (value === void 0) {
	      value = fallback;
	    }
	    return _.isFunction(value) ? value.call(object) : value;
	  };
	
	  // Generate a unique integer id (unique within the entire client session).
	  // Useful for temporary DOM ids.
	  var idCounter = 0;
	  _.uniqueId = function(prefix) {
	    var id = ++idCounter + '';
	    return prefix ? prefix + id : id;
	  };
	
	  // By default, Underscore uses ERB-style template delimiters, change the
	  // following template settings to use alternative delimiters.
	  _.templateSettings = {
	    evaluate    : /<%([\s\S]+?)%>/g,
	    interpolate : /<%=([\s\S]+?)%>/g,
	    escape      : /<%-([\s\S]+?)%>/g
	  };
	
	  // When customizing `templateSettings`, if you don't want to define an
	  // interpolation, evaluation or escaping regex, we need one that is
	  // guaranteed not to match.
	  var noMatch = /(.)^/;
	
	  // Certain characters need to be escaped so that they can be put into a
	  // string literal.
	  var escapes = {
	    "'":      "'",
	    '\\':     '\\',
	    '\r':     'r',
	    '\n':     'n',
	    '\u2028': 'u2028',
	    '\u2029': 'u2029'
	  };
	
	  var escaper = /\\|'|\r|\n|\u2028|\u2029/g;
	
	  var escapeChar = function(match) {
	    return '\\' + escapes[match];
	  };
	
	  // JavaScript micro-templating, similar to John Resig's implementation.
	  // Underscore templating handles arbitrary delimiters, preserves whitespace,
	  // and correctly escapes quotes within interpolated code.
	  // NB: `oldSettings` only exists for backwards compatibility.
	  _.template = function(text, settings, oldSettings) {
	    if (!settings && oldSettings) settings = oldSettings;
	    settings = _.defaults({}, settings, _.templateSettings);
	
	    // Combine delimiters into one regular expression via alternation.
	    var matcher = RegExp([
	      (settings.escape || noMatch).source,
	      (settings.interpolate || noMatch).source,
	      (settings.evaluate || noMatch).source
	    ].join('|') + '|$', 'g');
	
	    // Compile the template source, escaping string literals appropriately.
	    var index = 0;
	    var source = "__p+='";
	    text.replace(matcher, function(match, escape, interpolate, evaluate, offset) {
	      source += text.slice(index, offset).replace(escaper, escapeChar);
	      index = offset + match.length;
	
	      if (escape) {
	        source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
	      } else if (interpolate) {
	        source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
	      } else if (evaluate) {
	        source += "';\n" + evaluate + "\n__p+='";
	      }
	
	      // Adobe VMs need the match returned to produce the correct offest.
	      return match;
	    });
	    source += "';\n";
	
	    // If a variable is not specified, place data values in local scope.
	    if (!settings.variable) source = 'with(obj||{}){\n' + source + '}\n';
	
	    source = "var __t,__p='',__j=Array.prototype.join," +
	      "print=function(){__p+=__j.call(arguments,'');};\n" +
	      source + 'return __p;\n';
	
	    try {
	      var render = new Function(settings.variable || 'obj', '_', source);
	    } catch (e) {
	      e.source = source;
	      throw e;
	    }
	
	    var template = function(data) {
	      return render.call(this, data, _);
	    };
	
	    // Provide the compiled source as a convenience for precompilation.
	    var argument = settings.variable || 'obj';
	    template.source = 'function(' + argument + '){\n' + source + '}';
	
	    return template;
	  };
	
	  // Add a "chain" function. Start chaining a wrapped Underscore object.
	  _.chain = function(obj) {
	    var instance = _(obj);
	    instance._chain = true;
	    return instance;
	  };
	
	  // OOP
	  // ---------------
	  // If Underscore is called as a function, it returns a wrapped object that
	  // can be used OO-style. This wrapper holds altered versions of all the
	  // underscore functions. Wrapped objects may be chained.
	
	  // Helper function to continue chaining intermediate results.
	  var result = function(instance, obj) {
	    return instance._chain ? _(obj).chain() : obj;
	  };
	
	  // Add your own custom functions to the Underscore object.
	  _.mixin = function(obj) {
	    _.each(_.functions(obj), function(name) {
	      var func = _[name] = obj[name];
	      _.prototype[name] = function() {
	        var args = [this._wrapped];
	        push.apply(args, arguments);
	        return result(this, func.apply(_, args));
	      };
	    });
	  };
	
	  // Add all of the Underscore functions to the wrapper object.
	  _.mixin(_);
	
	  // Add all mutator Array functions to the wrapper.
	  _.each(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function(name) {
	    var method = ArrayProto[name];
	    _.prototype[name] = function() {
	      var obj = this._wrapped;
	      method.apply(obj, arguments);
	      if ((name === 'shift' || name === 'splice') && obj.length === 0) delete obj[0];
	      return result(this, obj);
	    };
	  });
	
	  // Add all accessor Array functions to the wrapper.
	  _.each(['concat', 'join', 'slice'], function(name) {
	    var method = ArrayProto[name];
	    _.prototype[name] = function() {
	      return result(this, method.apply(this._wrapped, arguments));
	    };
	  });
	
	  // Extracts the result from a wrapped and chained object.
	  _.prototype.value = function() {
	    return this._wrapped;
	  };
	
	  // Provide unwrapping proxy for some methods used in engine operations
	  // such as arithmetic and JSON stringification.
	  _.prototype.valueOf = _.prototype.toJSON = _.prototype.value;
	
	  _.prototype.toString = function() {
	    return '' + this._wrapped;
	  };
	
	  // AMD registration happens at the end for compatibility with AMD loaders
	  // that may not enforce next-turn semantics on modules. Even though general
	  // practice for AMD registration is to be anonymous, underscore registers
	  // as a named module because, like jQuery, it is a base library that is
	  // popular enough to be bundled in a third party lib, but not be part of
	  // an AMD load request. Those cases could generate an error when an
	  // anonymous define() is called outside of a loader request.
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
	      return _;
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  }
	}.call(this));


/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var Inject = __webpack_require__(83);
	
	var ConfigService = (function () {
		function ConfigService() {
			_classCallCheck(this, _ConfigService);
	
			//this._apiUrl = 'https://haukurmar-braintree-node-api.herokuapp.com/api';
			this._apiUrl = 'http://127.0.0.1:5000/api';
		}
	
		_createClass(ConfigService, [{
			key: 'setApiUrl',
			value: function setApiUrl(url) {
				this._apiUrl = url;
			}
		}, {
			key: 'apiUrl',
			get: function get() {
				return this._apiUrl;
			}
		}]);
	
		var _ConfigService = ConfigService;
		ConfigService = Inject()(ConfigService) || ConfigService;
		return ConfigService;
	})();
	
	exports['default'] = ConfigService;
	module.exports = exports['default'];

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var Inject = __webpack_require__(83);
	
	var CoreService = (function () {
		function CoreService($location) {
			_classCallCheck(this, _CoreService);
	
			this.$location = $location;
		}
	
		_createClass(CoreService, [{
			key: 'routeTo',
			value: function routeTo(path) {
				this.$location.url(path);
			}
		}, {
			key: 'getCurrencySymbol',
			value: function getCurrencySymbol(currencyIsoCode) {
				switch (currencyIsoCode) {
					case 'USD':
						return '$';
						break;
					case 'EUR':
						return '€';
						break;
					case 'GBP':
						return '£';
						break;
					case 'ISK':
						return 'kr';
						break;
					default:
						return '$';
				}
			}
		}, {
			key: 'formatCurrencyAmount',
			value: function formatCurrencyAmount(amount, currencyIsoCode) {
				// TODO: Call external multi-use method to return this
				var currencySymbol = this.getCurrencySymbol(currencyIsoCode);
	
				if (currencyIsoCode.toLowerCase() === 'isk') {
					return amount + currencySymbol;
				}
	
				return currencySymbol + amount;
			}
		}]);
	
		var _CoreService = CoreService;
		CoreService = Inject('$location')(CoreService) || CoreService;
		return CoreService;
	})();
	
	exports['default'] = CoreService;
	module.exports = exports['default'];

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _customerHtml = __webpack_require__(102);
	
	var _customerHtml2 = _interopRequireDefault(_customerHtml);
	
	var _braintreeConstants = __webpack_require__(103);
	
	// Inject dependencies
	
	var Inject = __webpack_require__(83);
	
	var BraintreeSubscriptionComponent = (function () {
		function BraintreeSubscriptionComponent(braintreeDataService, braintreeAppService) {
			_classCallCheck(this, _BraintreeSubscriptionComponent);
	
			this.braintreeDataService = braintreeDataService;
			this.braintreeAppService = braintreeAppService;
	
			this.state = {
				backButtonText: 'Back',
				backButtonRoute: _braintreeConstants.ROUTES.SUBSCRIPTION,
				backButtonVisible: false,
				loading: {
					isLoading: false,
					text: ''
				},
				message: {
					text: '',
					link: '',
					linkText: '',
					descriptionHtml: '',
					type: ''
				},
				showForm: true,
				submitButtonText: 'Create customer',
				mode: {
					subscription: false
				}
			};
	
			this.routes = {
				nextRoute: '',
				subscription: _braintreeConstants.ROUTES.SUBSCRIPTION
			};
	
			this.customer = null;
			this.customerModel = {};
			this.newCustomer = true;
			this.selectedSubscription = this.braintreeDataService.selectedSubscription;
		}
	
		// Component decorations
	
		// Private methods
		// --------------------------------------------------
	
		_createClass(BraintreeSubscriptionComponent, [{
			key: '$onInit',
			value: function $onInit() {
				// Get Customer from service
				this.customer = this.braintreeDataService.customer;
				this.customerModel = this.customer;
				this.state.mode = this.braintreeDataService.mode;
	
				// Subscription mode
				if (this.state.mode.subscription) {
					this.state.submitButtonText = 'Continue';
					this.state.backButtonVisible = true;
	
					// If the user has not chosen a subscription plan (or refreshed the page)
					if (!this.selectedSubscription.id) {
						this.state.message.text = 'You need to choose a subscription plan before you proceed';
						this.state.message.type = 'warning';
						this.state.message.linkText = 'Go to subscription page';
						this.state.message.link = _braintreeConstants.ROUTES.SUBSCRIPTION;
						this.state.showForm = false;
					}
				}
	
				// If we get a customerId, we fetch it from API
				if (this.customer.id) {
					this.getCustomerDetails(this.customer.id);
				}
			}
	
			// Public viewModel methods
			// --------------------------------------------------
			/**
	   * Get Customer details, including current subscription plans, payment methods etc.
	   * @param customerId
	   */
		}, {
			key: 'getCustomerDetails',
			value: function getCustomerDetails(customerId) {
				var _this = this;
	
				this.state.loading.isLoading = true;
				this.state.loading.text = 'Fetching customer information...';
				//Get Customer if logged in
				this.braintreeDataService.getCustomer(customerId).then(function (response) {
					//console.log('success', response);
					_this.newCustomer = false;
					_this.braintreeDataService.updateCustomerData(response.data.customer);
					_this.customerModel = response.data.customer;
					_this.state.loading.isLoading = false;
	
					// TODO: What to do here?
				}, function (error) {
					//console.log(error.data.message);
					_this.newCustomer = true;
					_this.state.loading.isLoading = false;
				});
			}
		}, {
			key: 'routeTo',
			value: function routeTo(path) {
				this.braintreeAppService.routeTo(path);
			}
	
			/**
	   * Create a new customer or update an existing one
	   * @param customerModel
	   */
		}, {
			key: 'saveCustomer',
			value: function saveCustomer(customerModel) {
				var _this2 = this;
	
				this.state.showform = false;
				this.routes.nextRoute = _braintreeConstants.ROUTES.PAYMENT_METHODS;
	
				if (this.newCustomer) {
					this.state.loading.text = 'Creating customer...';
					this.state.loading.isLoading = true;
	
					this.braintreeDataService.createCustomer(customerModel).then(function (response) {
						_this2.state.loading.isLoading = false;
	
						// Save customer data to service
						_this2.braintreeDataService.updateCustomerData(response.data.customer);
	
						// TODO: Display message if not in subscribe mode
						// Redirect to next step
						_this2.routeTo([_this2.routes.nextRoute]);
					}, function (error) {
						// TODO: Handle errors better (use error.data.errors collection)
						_this2.state.message.text = error.data.message;
						_this2.state.loading.isLoading = false;
						_this2.state.showform = true;
	
						//console.log('Error message', error.data.message);
						//console.log('Errors:', error.data.errors);
					});
				} else {
						this.braintreeDataService.updateCustomerData(customerModel);
						// TODO: Update customer in Braintree
						this.routeTo([this.routes.nextRoute]);
					}
			}
		}]);
	
		var _BraintreeSubscriptionComponent = BraintreeSubscriptionComponent;
		BraintreeSubscriptionComponent = Inject('braintreeDataService', 'braintreeAppService')(BraintreeSubscriptionComponent) || BraintreeSubscriptionComponent;
		return BraintreeSubscriptionComponent;
	})();
	
	var component = {
		bindings: {},
		template: _customerHtml2['default'],
		controller: BraintreeSubscriptionComponent
	};
	
	exports['default'] = component;
	module.exports = exports['default'];

/***/ },
/* 102 */
/***/ function(module, exports) {

	module.exports = "<ui-braintree-subscription-progress\n\tsubscription-plan=\"$ctrl.selectedSubscription\"\n\tsubscription-route=\"$ctrl.routes.subscription\"\n\troute-to=\"$ctrl.routeTo(route)\">\n</ui-braintree-subscription-progress>\n<ui-braintree-subscription-navigation\n\troute-to=\"$ctrl.routeTo(route)\"\n\tselected-route=\"'/customer'\"\n\tng-if=\"$ctrl.state.mode.subscription\">\n</ui-braintree-subscription-navigation>\n\n<ui-braintree-message-box message=\"$ctrl.state.message\" on-route=\"$ctrl.routeTo(route)\"></ui-braintree-message-box>\n<ui-loading-icon size=\"'4x'\" icon-modifier=\"'circle-o-notch'\" visible=\"$ctrl.state.loading.isLoading\" text=\"$ctrl.state.loading.text\"></ui-loading-icon>\n\n<section class=\"Panel\" ng-hide=\"$ctrl.state.loading.isLoading || !$ctrl.state.showForm\">\n\t<div class=\"Panel-body\">\n\t\t<h2 class=\"Heading--two Heading--light u-textCenter\">Fill out your contact information</h2>\n\t\t<hr class=\"Divider--dotted\">\n\n\t\t<ui-braintree-customer-form\n\t\t\tcustomer-model=\"$ctrl.customerModel\"\n\t\t\ton-submit=\"$ctrl.saveCustomer(customerModel)\"\n\t\t\tsubmit-button-text=\"$ctrl.state.submitButtonText\"\n\t\t\tback-button-text=\"$ctrl.state.backButtonText\"\n\t\t\tback-button-route=\"$ctrl.state.backButtonRoute\"\n\t\t\tback-button-visible=\"$ctrl.state.backButtonVisible\"\n\t\t\troute-to=\"$ctrl.routeTo(route)\"\n\t\t\tng-hide=\"$ctrl.state.loading.isLoading || !$ctrl.state.showForm\"></ui-braintree-customer-form>\n\t</div>\n</section>\n"

/***/ },
/* 103 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	var ROUTES = {
		CARDS: '/cards',
		CUSTOMER: '/customer',
		CUSTOMER_DETAILS: '/billing-overview',
		DROPIN: '/drop-in',
		PAYMENT_METHODS: '/payment-methods',
		PAYPAL: '/paypal',
		SUBSCRIPTION: '/subscribe',
		SUBSCRIPTION_OVERVIEW: '/subscription-overview'
	};
	
	// https://developers.braintreepayments.com/reference/general/processor-responses/authorization-responses
	var GATEWAY_ERRORS = [{
		code: '2000',
		text: 'Do Not Honor',
		description: 'Your bank is unwilling to accept the transaction. Contact your bank for more details regarding this generic decline.'
	}, {
		code: '2001',
		text: 'Insufficient Funds',
		description: 'Your account did not have sufficient funds to cover the transaction amount at the time of the transaction – subsequent attempts at a later date may be successful.'
	}, {
		code: '2002',
		text: 'Limit Exceeded',
		description: 'The attempted transaction exceeds the withdrawal limit of the account. Please contact your bank to change the account limits or use a different payment method.'
	}, {
		code: '2003',
		text: 'Cardholder\'s Activity Limit Exceeded',
		description: 'The attempted transaction exceeds the activity limit of the account. Please contact your bank to change the account limits or use a different payment method.'
	}, {
		code: '2004',
		text: 'Expired Card',
		description: 'Card is expired. Please choose a different payment method.'
	}, {
		code: '2005',
		text: 'Invalid Credit Card Number',
		description: 'You have entered and invalid payment method or made a typo in their credit card information. Please correct the payment information and attempt the transaction again – if the decline persists, you will need to contact your bank.'
	}, {
		code: '2006',
		text: 'Invalid Expiration Date',
		description: 'You have entered an invalid payment method or made a typo in their card expiration date. Please correct the payment information and attempt the transaction again – if the decline persists, you will need to contact your bank.'
	}, {
		code: '2007',
		text: 'No Account',
		description: 'The submitted card number is not on file with the card-issuing bank. Please contact your bank.'
	}, {
		code: '2008',
		text: 'Card Account Length Error',
		description: 'The submitted card number does not include the proper number of digits. Please correct the payment information and attempt the transaction again – if the decline persists, you will need to contact your bank.'
	}, {
		code: '2010',
		text: 'Card Issuer Declined CVV',
		description: 'You have entered in an invalid security code or made a typo in their card information. Please correct the payment information and attempt the transaction again – if the decline persists, you will need to contact your bank.'
	}, {
		code: '2011',
		text: 'Voice Authorization Required',
		description: 'Your bank is requesting that the we call to obtain a special authorization code in order to complete this transaction. This can result in a lengthy process – we recommend changing to a new payment method instead.'
	}, {
		code: '2012',
		text: 'Processor Declined Possible Lost Card',
		description: 'The card used has likely been reported as lost. You will need to contact your bank for more information.'
	}, {
		code: '2013',
		text: 'Processor Declined - Possible Stolen Card',
		description: 'The card used has likely been reported as stolen. You will need to contact your bank for more information.'
	}, {
		code: '2014',
		text: 'Processor Declined - Fraud Suspected',
		description: 'Your bank suspects fraud – please contact your bank for more information.'
	}, {
		code: '2015',
		text: 'Transaction Not Allowed',
		description: 'Your bank is declining the transaction for unspecified reasons, possibly due to an issue with the card itself. Please contact your bank or use an alternative payment method.'
	}, {
		code: '2016',
		text: 'Duplicate Transaction',
		description: 'The submitted transaction appears to be a duplicate of a previously submitted transaction and was declined to prevent charging the same card twice for the same service.'
	}, {
		code: '2057',
		text: 'Issuer or Cardholder has put a restriction on the card',
		description: 'Please contact your issuing bank for more information.'
	}, {
		code: '2067',
		text: 'Authorization Expired',
		description: 'The PayPal authorization is no longer valid. Please start over.'
	}, {
		code: '2074',
		text: 'Funding Instrument In The PayPal Account Was Declined By The Processor Or Bank, Or It Can\'t Be Used For This Payment',
		description: 'Your payment method associated with your PayPal account was declined.'
	}, {
		code: '2075',
		text: 'Payer Account Is Locked Or Closed',
		description: 'Your PayPal account cannot be used for transactions at this time. You will need to contact PayPal for more information or use an alternative payment method.'
	}, {
		code: '2076',
		text: 'Payer Cannot Pay For This Transaction With PayPal',
		description: 'You should contact PayPal for more information or use an alternative payment method.'
	}, {
		code: '2091',
		text: 'Currency of this transaction must match currency of your PayPal account',
		description: 'Your PayPal account can only process transactions in the currency of your home country. Contact PayPal\'s Support team for more information.'
	}, {
		code: '2092',
		text: 'Processor Declined',
		description: 'Your bank is unwilling to accept the transaction. You will need to contact your bank for more details regarding this generic decline.'
	}, {
		code: '2093',
		text: 'Processor Declined',
		description: 'Your bank is unwilling to accept the transaction. You will need to contact your bank for more details regarding this generic decline.'
	}, {
		code: '2094',
		text: 'Processor Declined',
		description: 'Your bank is unwilling to accept the transaction. You will need to contact your bank for more details regarding this generic decline.'
	}, {
		code: '2095',
		text: 'Processor Declined',
		description: 'Your bank is unwilling to accept the transaction. You will need to contact your bank for more details regarding this generic decline.'
	}, {
		code: '2096',
		text: 'Processor Declined',
		description: 'Your bank is unwilling to accept the transaction. You will need to contact your bank for more details regarding this generic decline.'
	}, {
		code: '2097',
		text: 'Processor Declined',
		description: 'Your bank is unwilling to accept the transaction. You will need to contact your bank for more details regarding this generic decline.'
	}, {
		code: '2098',
		text: 'Processor Declined',
		description: 'Your bank is unwilling to accept the transaction. You will need to contact your bank for more details regarding this generic decline.'
	}, {
		code: '2099',
		text: 'Processor Declined',
		description: 'Your bank is unwilling to accept the transaction. You will need to contact your bank for more details regarding this generic decline.'
	}, {
		code: '3000',
		text: 'Processor Network Unavailable - Try Again',
		description: 'There seems to be a problem with the back-end processing network, not necessarily a problem with your payment method. Please try again – if the decline persists, contact our Support team for more information.'
	}];
	
	exports.ROUTES = ROUTES;
	exports.GATEWAY_ERRORS = GATEWAY_ERRORS;

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _creditcardHtml = __webpack_require__(105);
	
	var _creditcardHtml2 = _interopRequireDefault(_creditcardHtml);
	
	var _braintreeConstants = __webpack_require__(103);
	
	// Inject dependencies
	
	var Inject = __webpack_require__(83);
	
	var CreditCardComponent = (function () {
		function CreditCardComponent($http, braintreeDataService, braintreeAppService) {
			_classCallCheck(this, _CreditCardComponent);
	
			this.$http = $http;
			this.braintreeDataService = braintreeDataService;
			this.braintreeAppService = braintreeAppService;
	
			this.state = {
				backButtonText: 'Back',
				backButtonRoute: _braintreeConstants.ROUTES.PAYMENT_METHODS,
				backButtonVisible: false,
				error: false,
				hideAmount: false,
				mode: {
					subscription: false
				},
				loading: {
					isLoading: false,
					text: ''
				},
				message: {
					text: '',
					link: '',
					linkText: '',
					descriptionHtml: '',
					type: ''
				},
				paid: false,
				showForm: true,
				submitButtonText: 'Pay now'
			};
	
			// Used in template
			this.routes = {
				subscription: _braintreeConstants.ROUTES.SUBSCRIPTION
			};
	
			this.customer = null;
			this.selectedSubscription = this.braintreeDataService.selectedSubscription;
	
			this.selectedMerchantAccount = this.braintreeDataService.selectedMerchantAccount;
			this.merchantAccountsArray = this.braintreeDataService.merchantAccountsArray;
		}
	
		// Component decorations
	
		// Private methods
		// --------------------------------------------------
	
		_createClass(CreditCardComponent, [{
			key: '$onInit',
			value: function $onInit() {
				var _this = this;
	
				this.customer = this.braintreeDataService.customer;
				this.state.mode = this.braintreeDataService.mode;
	
				// Subscription mode
				var mode = this.braintreeDataService.mode;
				if (mode.subscription) {
					this.state.backButtonVisible = true;
					this.state.hideAmount = true;
					this.state.submitButtonText = 'Continue';
	
					// If the user has not chosen a subscription plan (or refreshed the page)
					if (!this.selectedSubscription.id) {
						this._displayMessage('You need to choose a subscription plan before you proceed', 'warning');
						this.state.message.linkText = 'Go to subscription page';
						this.state.message.link = _braintreeConstants.ROUTES.SUBSCRIPTION;
						this.state.showForm = false;
						return;
					}
	
					// If the user has no customer ID
					if (!this.customer.id) {
						this._displayMessage('You need to fill out customer information before you proceed', 'warning');
						this.state.message.linkText = 'Go to customer page';
						this.state.message.link = _braintreeConstants.ROUTES.CUSTOMER;
						this.state.showForm = false;
						return;
					}
				}
	
				if (!this.customer.clientToken) {
					this.braintreeDataService.getClientToken().then(function (response) {
						_this.braintreeDataService.$braintree.setup(response.data.client_token, "custom");
						var customer = {
							clientToken: response.data.client_token
						};
	
						_this.braintreeDataService.updateCustomerData(customer);
					});
				}
			}
		}, {
			key: '_clearMessage',
			value: function _clearMessage() {
				this.state.message.text = '';
			}
		}, {
			key: '_displayMessage',
			value: function _displayMessage(text, type, descriptionHtml) {
				this.state.message.type = type;
				this.state.message.text = text;
				this.state.message.descriptionHtml = descriptionHtml;
			}
		}, {
			key: '_startLoading',
			value: function _startLoading(text) {
				this.state.loading.isLoading = true;
				this.state.loading.text = text;
			}
		}, {
			key: '_stopLoading',
			value: function _stopLoading() {
				this.state.loading.isLoading = false;
				this.state.loading.text = '';
			}
	
			// Public viewModel methods
			// --------------------------------------------------
		}, {
			key: 'routeTo',
			value: function routeTo(path) {
				this.braintreeAppService.routeTo(path);
			}
	
			/**
	   * Determine whether to store payment method to vault or to process payment right away
	   * @param paymentModel
	   */
		}, {
			key: 'submitPayment',
			value: function submitPayment(paymentModel) {
				var mode = this.braintreeDataService.mode;
				if (mode.subscription) {
					this.createVaultedPayment(paymentModel);
				} else {
					this.processPayment(paymentModel);
				}
			}
	
			/**
	   * Creates a saved paymentMethod to the vault and then redirects to SubscriptionOverview
	   * @param paymentModel
	   */
		}, {
			key: 'createVaultedPayment',
			value: function createVaultedPayment(paymentModel) {
				var _this2 = this;
	
				this._startLoading('Saving payment information...');
				this.state.showForm = false;
				var customerId = this.braintreeDataService.customer.id;
	
				paymentModel.verificationMerchantAccountId = this.selectedMerchantAccount.id;
	
				// Send request to get token, then use the token to tokenize credit card info and verify the card
				this.braintreeDataService.createVaultedPayment(customerId, paymentModel).then(function (response) {
					//console.log('from vaultedPayment', response);
					_this2._stopLoading();
					_this2.state.nextRoute = _braintreeConstants.ROUTES.SUBSCRIPTION_OVERVIEW;
					_this2.routeTo([_this2.state.nextRoute]);
				}, function (error) {
					// TODO: Handle errors better
					_this2._displayMessage(error, 'warning');
					_this2._stopLoading();
					_this2.state.showForm = true;
				});
			}
	
			/**
	   * Processes the payment
	   * @param paymentModel
	   */
		}, {
			key: 'processPayment',
			value: function processPayment(paymentModel) {
				var _this3 = this;
	
				this._startLoading('Processing payment...');
				this.state.showForm = false;
				var clientToken = this.braintreeDataService.customer.clientToken;
	
				// Get selected merchant account if it has been initialized
				var selectedMerchantAccount = this.selectedMerchantAccount || {};
	
				// Use the token to tokenize credit card info and process a transaction
				// Create new client and tokenize card
				var client = new this.braintreeDataService.$braintree.api.Client({ clientToken: clientToken });
	
				// If radio buttons in view are used
				if (paymentModel.merchantAccountId) {
					selectedMerchantAccount.id = paymentModel.merchantAccountId;
				}
	
				client.tokenizeCard({
					number: paymentModel.creditCardNumber,
					expirationDate: paymentModel.expirationDate,
					cvv: paymentModel.cvv
				}, function (err, nonce) {
					var paymentData = {
						amount: paymentModel.amount,
						payment_method_nonce: nonce,
						merchantAccountId: selectedMerchantAccount.id
					};
	
					_this3.braintreeDataService.processPayment(paymentData).then(function (response) {
						//console.log(response.data.success);
						if (response.data.success) {
							_this3.state.paid = true;
							_this3.state.error = false;
	
							_this3._displayMessage('Payment authorized, thanks.', 'success');
							_this3._stopLoading();
						} else {
							// TODO: Handle different payment failures
							_this3.state.error = true;
	
							_this3._displayMessage('Payment failed: ' + response.data.message + ' Please refresh the page and try again.', 'warning');
							_this3._stopLoading();
							_this3.state.showForm = true;
						}
					}, function (error) {
						_this3.state.error = true;
						_this3._displayMessage('Error: cannot connect to server. Please make sure your server is running. Erromessage: ' + error.data, 'warning');
						_this3._stopLoading();
						_this3.state.showForm = true;
					});
				});
			}
		}]);
	
		var _CreditCardComponent = CreditCardComponent;
		CreditCardComponent = Inject('$http', 'braintreeDataService', 'braintreeAppService')(CreditCardComponent) || CreditCardComponent;
		return CreditCardComponent;
	})();
	
	var component = {
		bindings: {},
		template: _creditcardHtml2['default'],
		controller: CreditCardComponent
	};
	
	exports['default'] = component;
	module.exports = exports['default'];

/***/ },
/* 105 */
/***/ function(module, exports) {

	module.exports = "<ui-braintree-subscription-progress\n\tsubscription-plan=\"$ctrl.selectedSubscription\"\n\tsubscription-route=\"$ctrl.routes.subscription\"\n\troute-to=\"$ctrl.routeTo(route)\">\n</ui-braintree-subscription-progress>\n<ui-braintree-subscription-navigation\n\troute-to=\"$ctrl.routeTo(route)\"\n\tselected-route=\"'/payment-methods'\"\n\tng-if=\"$ctrl.state.mode.subscription\">\n</ui-braintree-subscription-navigation>\n\n<ui-braintree-message-box message=\"$ctrl.state.message\" on-route=\"$ctrl.routeTo(route)\"></ui-braintree-message-box>\n\n<ui-loading-icon size=\"'4x'\" icon-modifier=\"'circle-o-notch'\" visible=\"$ctrl.state.loading.isLoading\" text=\"$ctrl.state.loading.text\"></ui-loading-icon>\n\n<section class=\"Panel\" ng-hide=\"$ctrl.state.loading.isLoading || !$ctrl.state.showForm\">\n\t<div class=\"Panel-body\">\n\t\t<h2 class=\"Heading--two Heading--light u-textCenter\">Fill out your card details</h2>\n\t\t<hr class=\"Divider--dotted\">\n\n\t\t<ui-braintree-creditcard-form\n\t\t\ton-submit=\"$ctrl.submitPayment(paymentModel)\"\n\t\t\tback-button-text=\"$ctrl.state.backButtonText\"\n\t\t\tback-button-route=\"$ctrl.state.backButtonRoute\"\n\t\t\tback-button-visible=\"$ctrl.state.backButtonVisible\"\n\t\t\tsubmit-button-text=\"$ctrl.state.submitButtonText\"\n\t\t\thide-amount=\"$ctrl.state.hideAmount\"\n\t\t\troute-to=\"$ctrl.routeTo(route)\"\n\t\t\tmerchant-accounts=\"$ctrl.merchantAccountsArray\"\n\t\t\tselected-merchant-account=\"$ctrl.selectedMerchantAccount\"\n\t\t\tng-hide=\"$ctrl.state.loading.isLoading || !$ctrl.state.showForm\">\n\t\t</ui-braintree-creditcard-form>\n\t</div>\n</section>\n"

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _dropinHtml = __webpack_require__(107);
	
	var _dropinHtml2 = _interopRequireDefault(_dropinHtml);
	
	// Inject dependencies
	
	var Inject = __webpack_require__(83);
	
	var DropinComponent = (function () {
		function DropinComponent($http, braintreeDataService) {
			_classCallCheck(this, _DropinComponent);
	
			this.$http = $http;
			this.braintreeDataService = braintreeDataService;
	
			this.message = '';
			this.showDropinContainer = true;
			this.isError = false;
			this.isPaid = false;
		}
	
		// Component decorations
	
		// Private methods
		// --------------------------------------------------
	
		_createClass(DropinComponent, [{
			key: '$onInit',
			value: function $onInit() {
				//console.log('Braintree Dropin Component...');
				this._getToken();
			}
		}, {
			key: '_getToken',
			value: function _getToken() {
				var _this = this;
	
				this.braintreeDataService.getClientToken().then(function (response) {
					//console.log('res', response.data);
	
					_this.braintreeDataService.$braintree.setup(response.data.client_token, 'dropin', {
						// id of html tag for braintree dropin container
						container: 'js-braintree-checkout-container',
						// Form is not submitted by default when paymentMethodNonceReceived is implemented
						paymentMethodNonceReceived: function paymentMethodNonceReceived(event, nonce) {
							_this.message = 'Processing your payment...';
							_this.showDropinContainer = false;
	
							var paymentData = {
								amount: _this.amount,
								payment_method_nonce: nonce
							};
	
							// Process payment
							_this.braintreeDataService.processPayment(paymentData).then(function (response) {
								//console.log('Success:', response.data);
	
								if (response.data.success) {
									_this.message = 'Payment was authorized!';
									_this.showDropinContainer = false;
									_this.isError = false;
									_this.isPaid = true;
								} else {
									// TODO: Handle different payment failures
									_this.message = 'Payment failed: ' + response.data.message + ' Please refresh the page and try again.';
									_this.isError = true;
								}
							}, function (error) {
								_this.message = 'Error: cannot connect to server. Please make sure your server is running. Erromessage: ' + error.data;
								_this.showDropinContainer = false;
								_this.isError = true;
							});
						}
					});
				}, function (error) {
					_this.message = 'Error: cannot connect to server. Please make sure your server is running. Erromessage: ' + error.data;
					_this.showDropinContainer = false;
					_this.isError = true;
				});
			}
	
			// Public viewModel methods
			// --------------------------------------------------
		}]);
	
		var _DropinComponent = DropinComponent;
		DropinComponent = Inject('$http', 'braintreeDataService')(DropinComponent) || DropinComponent;
		return DropinComponent;
	})();
	
	var component = {
		bindings: {},
		template: _dropinHtml2['default'],
		controller: DropinComponent
	};
	
	exports['default'] = component;
	module.exports = exports['default'];

/***/ },
/* 107 */
/***/ function(module, exports) {

	module.exports = "<section ng-class=\"{'error': $ctrl.isError, 'success': $ctrl.isPaid}\">\n\t<h2 class=\"Heading--two\">Please use the form below to pay</h2>\n\t<p ng-if=\"$ctrl.message\" ng-bind=\"$ctrl.message\"></p>\n\n\t<div ng-show=\"$ctrl.showDropinContainer\">\n\n\t\t<form name=\"payment\">\n\t\t\t<div class=\"Form-item\">\n\t\t\t\t<label class=\"Form-itemLabel\" for=\"txtAmount\">Amount (XX.XX)</label>\n\t\t\t\t<input type=\"text\" class=\"Textbox\" id=\"txtAmount\" ng-model=\"$ctrl.amount\" />\n\t\t\t</div>\n\n\t\t\t<!-- Add Dropin here -->\n\t\t\t<div id=\"js-braintree-checkout-container\"></div>\n\n\t\t\t<button class=\"Button Button--success Button--lg\" type=\"submit\">Pay Now</button>\n\t\t</form>\n\t</div>\n\n</section>\n"

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _paypalHtml = __webpack_require__(109);
	
	var _paypalHtml2 = _interopRequireDefault(_paypalHtml);
	
	var _braintreeConstants = __webpack_require__(103);
	
	// Inject dependencies
	
	var Inject = __webpack_require__(83);
	
	var PaypalComponent = (function () {
		function PaypalComponent(braintreeDataService, braintreeAppService) {
			_classCallCheck(this, _PaypalComponent);
	
			this.braintreeDataService = braintreeDataService;
			this.braintreeAppService = braintreeAppService;
	
			this._checkout = null;
			this.state = {
				backButtonText: 'Back',
				backButtonRoute: _braintreeConstants.ROUTES.PAYMENT_METHODS,
				backButtonVisible: true,
				message: {
					text: ''
				},
				mode: {
					subscription: false
				}
			};
	
			// Used in template
			this.routes = {
				nextRoute: '',
				subscription: _braintreeConstants.ROUTES.SUBSCRIPTION
			};
	
			this.customer = null;
			this.selectedMerchantAccount = this.braintreeDataService.selectedMerchantAccount;
			this.selectedSubscription = this.braintreeDataService.selectedSubscription;
		}
	
		// Component decorations
	
		// Private methods
		// --------------------------------------------------
	
		_createClass(PaypalComponent, [{
			key: '$onInit',
			value: function $onInit() {
				var _this = this;
	
				this.customer = this.braintreeDataService.customer;
				this.state.mode = this.braintreeDataService.mode;
	
				if (!this.braintreeDataService.customer.clientToken) {
					this.braintreeDataService.getClientToken().then(function (response) {
						var customer = {
							clientToken: response.data.client_token
						};
						_this.braintreeDataService.updateCustomerData(customer);
						_this._setupPaypal(customer.clientToken);
					});
				} else {
					this._setupPaypal(this.braintreeDataService.customer.clientToken);
				}
			}
		}, {
			key: '_setupPaypal',
			value: function _setupPaypal(clientToken) {
				var _this2 = this;
	
				var currencyCode = this.selectedMerchantAccount.currencyIsoCode;
				this.braintreeDataService.$braintree.setup(clientToken, "custom", {
					paypal: {
						currency: currencyCode,
						enableShippingAddress: false,
						headless: true
					},
					onReady: function onReady(integration) {
						//console.log('Paypal is ready');
						_this2._checkout = integration;
					},
					onAuthorizationDismissed: function onAuthorizationDismissed(obj) {
						//console.log('onAuthorizationDismissed', obj);
					},
					onPaymentMethodReceived: function onPaymentMethodReceived(obj) {
						_this2._createPaymentOption(obj);
					}
				});
			}
		}, {
			key: '_createPaymentOption',
			value: function _createPaymentOption(paymentMethod) {
				var _this3 = this;
	
				//console.log('onPaymentMethodReceived', paymentMethod);
				var paymentMethodModel = {
					customerId: this.braintreeDataService.customer.id,
					paymentMethodNonce: paymentMethod.nonce
				};
	
				//console.log('Paypal paymentModel:', paymentMethodModel);
	
				this.braintreeDataService.createPaymentMethod(paymentMethodModel).then(function (response) {
					_this3.braintreeDataService.updateCustomerData(response.data.customer);
	
					_this3.routes.nextRoute = _braintreeConstants.ROUTES.SUBSCRIPTION_OVERVIEW;
					_this3.routeTo([_this3.routes.nextRoute]);
					//console.log('Paypal Payment method created!', response);
				}, function (error) {
					_this3.state.message.text = 'Failed to create payment method:' + error.data.message;
					//console.log('Failed to create payment method:', error);
				});
			}
		}, {
			key: 'routeTo',
			value: function routeTo(path) {
				return this.braintreeAppService.routeTo(path);
			}
		}, {
			key: 'pay',
			value: function pay(event) {
				this._checkout.paypal.initAuthFlow();
			}
	
			// Public viewModel methods
			// --------------------------------------------------
		}]);
	
		var _PaypalComponent = PaypalComponent;
		PaypalComponent = Inject('braintreeDataService', 'braintreeAppService')(PaypalComponent) || PaypalComponent;
		return PaypalComponent;
	})();
	
	var component = {
		bindings: {},
		template: _paypalHtml2['default'],
		controller: PaypalComponent
	};
	
	exports['default'] = component;
	module.exports = exports['default'];

/***/ },
/* 109 */
/***/ function(module, exports) {

	module.exports = "<ui-braintree-subscription-progress\n\tsubscription-plan=\"$ctrl.selectedSubscription\"\n\tsubscription-route=\"$ctrl.routes.subscription\"\n\troute-to=\"$ctrl.routeTo(route)\">\n</ui-braintree-subscription-progress>\n<ui-braintree-subscription-navigation\n\troute-to=\"$ctrl.routeTo(route)\"\n\tselected-route=\"'/payment-methods'\"\n\tng-if=\"$ctrl.state.mode.subscription\">\n</ui-braintree-subscription-navigation>\n\n<p ng-if=\"$ctrl.state.message.text\" ng-bind=\"$ctrl.state.message.text\"></p>\n<input type=\"hidden\" name=\"payment_method_nonce\" />\n\n<section class=\"Panel\">\n\t<div class=\"Panel-body\">\n\t\t<h2 class=\"Heading--two Heading--light u-textCenter\">Connect with Paypal</h2>\n\t\t<hr class=\"Divider--dotted\">\n\n\t\t<button class=\"Button Button--primary\" ng-click=\"$ctrl.pay($event)\">Connect with Paypal...</button>\n\t\t<span ng-if=\"$ctrl.state.backButtonVisible\">\n\t\t\t| <a href=\"\" ng-click=\"$ctrl.routeTo($ctrl.state.backButtonRoute)\">{{ $ctrl.state.backButtonText }}</a>\n\t\t</span>\n\t</div>\n</section>\n"

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _paypalButtonHtml = __webpack_require__(111);
	
	var _paypalButtonHtml2 = _interopRequireDefault(_paypalButtonHtml);
	
	var _braintreeConstants = __webpack_require__(103);
	
	// Inject dependencies
	
	var Inject = __webpack_require__(83);
	
	var PaypalButtonComponent = (function () {
		function PaypalButtonComponent(braintreeDataService) {
			_classCallCheck(this, _PaypalButtonComponent);
	
			this.braintreeDataService = braintreeDataService;
	
			this._checkout = null;
			this.state = {
				message: {
					text: ''
				}
			};
	
			this.customer = null;
		}
	
		// Component decorations
	
		// Private methods
		// --------------------------------------------------
	
		_createClass(PaypalButtonComponent, [{
			key: '$onInit',
			value: function $onInit() {
				var _this = this;
	
				this.customer = this.braintreeDataService.customer;
	
				if (!this.braintreeDataService.customer.clientToken) {
					this.braintreeDataService.getClientToken().then(function (response) {
						var customer = {
							clientToken: response.data.client_token
						};
						_this.braintreeDataService.updateCustomerData(customer);
						_this._setupPaypal(customer.clientToken);
					});
				} else {
					this._setupPaypal(this.braintreeDataService.customer.clientToken);
				}
			}
		}, {
			key: '_setupPaypal',
			value: function _setupPaypal(clientToken) {
				var _this2 = this;
	
				var currencyIsoCode = this.currencyIsoCode || 'USD';
				this.braintreeDataService.$braintree.setup(clientToken, "custom", {
					paypal: {
						currency: currencyIsoCode,
						enableShippingAddress: false,
						headless: true
					},
					onCancelled: function onCancelled(obj) {
						//console.log('cancelled', obj);
					},
					onReady: function onReady(integration) {
						//console.log('Paypal button is ready');
						_this2._checkout = integration;
					},
					onAuthorizationDismissed: function onAuthorizationDismissed(obj) {
						//console.log('onAuthorizationDismissed', obj);
					},
					onPaymentMethodReceived: function onPaymentMethodReceived(obj) {
						_this2._createPaymentOption(obj);
					}
				});
			}
		}, {
			key: '_createPaymentOption',
			value: function _createPaymentOption(paymentMethod) {
				var _this3 = this;
	
				//console.log('onPaymentMethodReceived', paymentMethod);
				var paymentMethodModel = {
					customerId: this.braintreeDataService.customer.id,
					paymentMethodNonce: paymentMethod.nonce
				};
	
				this.braintreeDataService.createPaymentMethod(paymentMethodModel).then(function (response) {
					_this3.braintreeDataService.updateCustomerData(response.data.customer);
					_this3.onFinish({ paymentModel: response.data.customer.paymentMethod });
	
					//console.log('Paypal Payment method created!', response);
				}, function (error) {
					_this3.state.message.text = 'Failed to create payment method:' + error.data.message;
					//console.log('Failed to create payment method:', error);
				});
			}
		}, {
			key: 'initAuthFlow',
			value: function initAuthFlow(event) {
				this._checkout.paypal.initAuthFlow();
			}
	
			// Public viewModel methods
			// --------------------------------------------------
		}]);
	
		var _PaypalButtonComponent = PaypalButtonComponent;
		PaypalButtonComponent = Inject('braintreeDataService')(PaypalButtonComponent) || PaypalButtonComponent;
		return PaypalButtonComponent;
	})();
	
	var component = {
		bindings: {
			buttonText: '<',
			currencyIsoCode: '<',
			onFinish: '&'
		},
		template: _paypalButtonHtml2['default'],
		controller: PaypalButtonComponent
	};
	
	exports['default'] = component;
	module.exports = exports['default'];

/***/ },
/* 111 */
/***/ function(module, exports) {

	module.exports = "<p ng-if=\"$ctrl.state.message.text\" ng-bind=\"$ctrl.state.message.text\"></p>\n<input type=\"hidden\" name=\"payment_method_nonce\" />\n<button class=\"Button Button--primary\" ng-click=\"$ctrl.initAuthFlow($event)\">{{ $ctrl.buttonText }}</button>\n"

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _subscriptionPlansHtml = __webpack_require__(113);
	
	var _subscriptionPlansHtml2 = _interopRequireDefault(_subscriptionPlansHtml);
	
	var _braintreeConstants = __webpack_require__(103);
	
	// Inject dependencies
	
	var Inject = __webpack_require__(83);
	
	var SubscriptionPlansComponent = (function () {
		function SubscriptionPlansComponent(braintreeDataService, braintreeAppService) {
			_classCallCheck(this, _SubscriptionPlansComponent);
	
			this.braintreeDataService = braintreeDataService;
			this.braintreeAppService = braintreeAppService;
	
			this.message = '';
			this.loadingText = '';
			this.plans = [];
			this.state = {
				error: false,
				loading: false,
				nextRoute: ''
			};
	
			this.customer = null;
			this.selectedSubscription = this.braintreeDataService.selectedSubscription;
		}
	
		// Component decorations
	
		// Private methods
		// --------------------------------------------------
	
		_createClass(SubscriptionPlansComponent, [{
			key: '$onInit',
			value: function $onInit() {
				this.customer = this.braintreeDataService.customer;
				if (!this.customer.clientToken) {
					this.braintreeDataService.setup();
				}
	
				this._getAllSubscriptionPlans();
			}
		}, {
			key: '_getAllSubscriptionPlans',
			value: function _getAllSubscriptionPlans() {
				var _this = this;
	
				this.state.loading = true;
				this.loadingText = 'Fetching subscription plans...';
	
				this.braintreeDataService.getAllSubscriptionPlans().then(function (response) {
					_this.plans = response.data.plans;
					_this.state.loading = false;
				}, function (error) {
					// TODO: Notify development team or do it via api
					_this.message = 'Unable to get subscription plans, the development team has been notified, please try again later.';
					_this.state.loading = false;
					_this.state.error = true;
				});
			}
	
			// Public viewModel methods
			// --------------------------------------------------
		}, {
			key: 'chooseSubscriptionPlan',
			value: function chooseSubscriptionPlan(subscriptionPlanModel) {
				//console.log('plan chosen', subscriptionPlanModel);
				this.braintreeDataService.updateSelectedSubscription(subscriptionPlanModel);
	
				this.state.nextRoute = _braintreeConstants.ROUTES.CUSTOMER;
	
				this.routeTo(_braintreeConstants.ROUTES.CUSTOMER);
			}
		}, {
			key: 'formatCurrencyAmount',
			value: function formatCurrencyAmount(amount, currencyIsoCode) {
				return this.braintreeAppService.formatCurrencyAmount(amount, currencyIsoCode);
			}
		}, {
			key: 'routeTo',
			value: function routeTo(path) {
				this.braintreeAppService.routeTo(path);
			}
		}]);
	
		var _SubscriptionPlansComponent = SubscriptionPlansComponent;
		SubscriptionPlansComponent = Inject('braintreeDataService', 'braintreeAppService')(SubscriptionPlansComponent) || SubscriptionPlansComponent;
		return SubscriptionPlansComponent;
	})();
	
	var component = {
		bindings: {},
		template: _subscriptionPlansHtml2['default'],
		controller: SubscriptionPlansComponent
	};
	
	exports['default'] = component;
	module.exports = exports['default'];

/***/ },
/* 113 */
/***/ function(module, exports) {

	module.exports = "<ui-braintree-subscription-progress subscription-plan=\"$ctrl.selectedSubscription\"></ui-braintree-subscription-progress>\n\n<!--<h2 class=\"Heading&#45;&#45;two\">Subscribe</h2>-->\n<hr class=\"Divider--dotted\">\n<ui-braintree-subscription-navigation route-to=\"$ctrl.routeTo(route)\" selected-route=\"'/subscribe'\"></ui-braintree-subscription-navigation>\n\n<p ng-if=\"$ctrl.message\" ng-bind=\"$ctrl.message\"></p>\n\n<ui-loading-icon size=\"'4x'\" icon-modifier=\"'circle-o-notch'\" visible=\"$ctrl.state.loading\" text=\"$ctrl.loadingText\"></ui-loading-icon>\n\n<section class=\"Panel\">\n\t<div class=\"Panel-body\">\n\t\t<div class=\"Grid-row\">\n\t\t\t<div class=\"Grid-col--4\" ng-repeat=\"plan in $ctrl.plans\" ng-if=\"$ctrl.plans.length\">\n\t\t\t\t<ui-braintree-subscription-plan\n\t\t\t\t\tbutton-css-modifier=\"'Button--cta Button--lg'\"\n\t\t\t\t\tbutton-text=\"'Select plan'\"\n\t\t\t\t\tsubscription-plan=\"plan\"\n\t\t\t\t\tformat-currency-amount=\"$ctrl.formatCurrencyAmount(amount, currencyIsoCode)\"\n\t\t\t\t\ton-choose=\"$ctrl.chooseSubscriptionPlan(subscriptionPlanModel)\" ng-hide=\"$ctrl.state.loading\"></ui-braintree-subscription-plan>\n\t\t\t\t<hr class=\"Divider--dotted\">\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</section>\n"

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _subscriptionPlansCustomHtml = __webpack_require__(115);
	
	var _subscriptionPlansCustomHtml2 = _interopRequireDefault(_subscriptionPlansCustomHtml);
	
	var _braintreeConstants = __webpack_require__(103);
	
	var _underscore = __webpack_require__(98);
	
	var _underscore2 = _interopRequireDefault(_underscore);
	
	/**
	 * This is a specific implementation to display only a set of predefined subscription plans
	 * No Reusability here
	 * To be removed later.
	 */
	
	// Inject dependencies
	
	var Inject = __webpack_require__(83);
	
	var SubscriptionPlansCustomComponent = (function () {
		function SubscriptionPlansCustomComponent(braintreeDataService, braintreeAppService) {
			_classCallCheck(this, _SubscriptionPlansCustomComponent);
	
			this.braintreeDataService = braintreeDataService;
			this.braintreeAppService = braintreeAppService;
	
			this.message = '';
			this.loadingText = '';
			this.plans = [];
			this.state = {
				error: false,
				loading: false,
				nextRoute: '',
				selectedCurrency: {
					currencyIsoCode: '',
					currencySymbol: '',
					currencyName: '',
					currencyLongName: ''
				},
				selectedCurrencyModel: null
			};
	
			this.customPlans = {
				USD: {
					premiumOne: {},
					premiumThree: {},
					premiumSix: {},
					premiumTwelve: {},
					premiumLifetime: {}
				},
				EUR: {
					premiumOne: {},
					premiumThree: {},
					premiumSix: {},
					premiumTwelve: {},
					premiumLifetime: {}
				},
				GBP: {
					premiumOne: {},
					premiumThree: {},
					premiumSix: {},
					premiumTwelve: {},
					premiumLifetime: {}
				},
				ISK: {
					premiumOne: {},
					premiumThree: {},
					premiumSix: {},
					premiumTwelve: {},
					premiumLifetime: {}
				}
			};
	
			// If overrides are set (for example firstBillingDate and such)
			this._customPlansDefaults = this.braintreeDataService._customPlansDefaults;
	
			this.plansDisplayed = {
				premiumOne: {},
				premiumThree: {},
				premiumSix: {},
				premiumTwelve: {},
				premiumLifetime: {}
			};
	
			this.customer = null;
	
			window.customPlans = this.customPlans;
			this.merchantAccounts = this.braintreeDataService.merchantAccounts;
			this.merchantAccountsArray = this.braintreeDataService.merchantAccountsArray;
			this.selectedMerchantAccount = this.braintreeDataService.selectedMerchantAccount;
			this.selectedSubscription = this.braintreeDataService.selectedSubscription;
		}
	
		// Component decorations
	
		// Private methods
		// --------------------------------------------------
	
		_createClass(SubscriptionPlansCustomComponent, [{
			key: '$onInit',
			value: function $onInit() {
				this.customer = this.braintreeDataService.customer;
				if (!this.customer.clientToken) {
					this.braintreeDataService.setup();
				}
	
				this._getAllSubscriptionPlans();
	
				// Clear the selected subscription data TODO: Look into if we might need to do this
				//this.braintreeDataService.initSelectedSubscriptionData();
			}
		}, {
			key: '_getAllSubscriptionPlans',
			value: function _getAllSubscriptionPlans() {
				var _this = this;
	
				this.state.loading = true;
				this.loadingText = 'Fetching subscription plans...';
	
				this.braintreeDataService.getAllSubscriptionPlans().then(function (response) {
					_this.plans = response.data.plans;
	
					_underscore2['default'].each(response.data.plans, function (plan) {
						switch (plan.id) {
							// USD
							case 'premiumOneUSD':
								_this.customPlans.USD.premiumOne = plan;
								break;
							case 'premiumThreeUSD':
								_this.customPlans.USD.premiumThree = plan;
								break;
							case 'premiumSixUSD':
								_this.customPlans.USD.premiumSix = plan;
								break;
							case 'premiumTwelveUSD':
								_this.customPlans.USD.premiumTwelve = plan;
								break;
							case 'premiumLifetimeUSD':
								_this.customPlans.USD.premiumLifetime = plan;
								break;
	
							// EUR
							case 'premiumOneEUR':
								_this.customPlans.EUR.premiumOne = plan;
								break;
							case 'premiumThreeEUR':
								_this.customPlans.EUR.premiumThree = plan;
								break;
							case 'premiumSixEUR':
								_this.customPlans.EUR.premiumSix = plan;
								break;
							case 'premiumTwelveEUR':
								_this.customPlans.EUR.premiumTwelve = plan;
								break;
							case 'premiumLifetimeEUR':
								_this.customPlans.EUR.premiumLifetime = plan;
								break;
	
							// GBP
							case 'premiumOneGBP':
								_this.customPlans.GBP.premiumOne = plan;
								break;
							case 'premiumThreeGBP':
								_this.customPlans.GBP.premiumThree = plan;
								break;
							case 'premiumSixGBP':
								_this.customPlans.GBP.premiumSix = plan;
								break;
							case 'premiumTwelveGBP':
								_this.customPlans.GBP.premiumTwelve = plan;
								break;
							case 'premiumLifetimeGBP':
								_this.customPlans.GBP.premiumLifetime = plan;
								break;
	
							// ISK
							case 'premiumOneISK':
								_this.customPlans.ISK.premiumOne = plan;
								break;
							case 'premiumThreeISK':
								_this.customPlans.ISK.premiumThree = plan;
								break;
							case 'premiumSixISK':
								_this.customPlans.ISK.premiumSix = plan;
								break;
							case 'premiumTwelveISK':
								_this.customPlans.ISK.premiumTwelve = plan;
								break;
							case 'premiumLifetimeISK':
								_this.customPlans.ISK.premiumLifetime = plan;
								break;
						}
					});
	
					// If some overrides has been set externally
					_this._setCustomPlansDefaultValues();
	
					_this.showSelectedCurrencyPlans(_this.selectedMerchantAccount.id);
					_this.state.loading = false;
				}, function (error) {
					// TODO: Notify development team or do it via api
					_this.message = 'Unable to get subscription plans, the development team has been notified, please try again later.';
					_this.state.loading = false;
					_this.state.error = true;
				});
			}
		}, {
			key: '_setCustomPlansDefaultValues',
			value: function _setCustomPlansDefaultValues() {
				if (this._customPlansDefaults) {
					this.customPlans = this.braintreeDataService.mergeObjectsRecursive(this._customPlansDefaults, this.customPlans);
				}
			}
		}, {
			key: 'formatCurrencyAmount',
			value: function formatCurrencyAmount(amount, currencyIsoCode) {
				return this.braintreeAppService.formatCurrencyAmount(amount, currencyIsoCode);
			}
		}, {
			key: 'showSelectedCurrencyPlans',
			value: function showSelectedCurrencyPlans(merchantAccountId) {
				//console.log('this.state.selectedCurrencyModel', this.state.selectedCurrencyModel);
	
				switch (merchantAccountId) {
					case this.braintreeDataService.merchantAccounts.USD.id:
						this.plansDisplayed = this.customPlans.USD;
						this.braintreeDataService.setSelectedMerchantAccount(this.braintreeDataService.merchantAccounts.USD);
						this.state.selectedCurrency = this.braintreeDataService.merchantAccounts.USD;
	
						break;
	
					case this.braintreeDataService.merchantAccounts.EUR.id:
						this.plansDisplayed = this.customPlans.EUR;
						this.braintreeDataService.setSelectedMerchantAccount(this.braintreeDataService.merchantAccounts.EUR);
						this.state.selectedCurrency = this.braintreeDataService.merchantAccounts.EUR;
	
						break;
	
					case this.braintreeDataService.merchantAccounts.GBP.id:
						this.plansDisplayed = this.customPlans.GBP;
						this.braintreeDataService.setSelectedMerchantAccount(this.braintreeDataService.merchantAccounts.GBP);
						this.state.selectedCurrency = this.braintreeDataService.merchantAccounts.GBP;
						break;
	
					case this.braintreeDataService.merchantAccounts.ISK.id:
						this.plansDisplayed = this.customPlans.ISK;
						this.braintreeDataService.setSelectedMerchantAccount(this.braintreeDataService.merchantAccounts.ISK);
						this.state.selectedCurrency = this.braintreeDataService.merchantAccounts.ISK;
						break;
				}
			}
	
			// Public viewModel methods
			// --------------------------------------------------
		}, {
			key: 'chooseSubscriptionPlan',
			value: function chooseSubscriptionPlan(subscriptionPlanModel) {
				//console.log('plan chosen', subscriptionPlanModel);
				this.braintreeDataService.updateSelectedSubscription(subscriptionPlanModel);
	
				this.state.nextRoute = _braintreeConstants.ROUTES.CUSTOMER;
	
				this.routeTo(_braintreeConstants.ROUTES.CUSTOMER);
			}
		}, {
			key: 'routeTo',
			value: function routeTo(path) {
				this.braintreeAppService.routeTo(path);
			}
		}]);
	
		var _SubscriptionPlansCustomComponent = SubscriptionPlansCustomComponent;
		SubscriptionPlansCustomComponent = Inject('braintreeDataService', 'braintreeAppService')(SubscriptionPlansCustomComponent) || SubscriptionPlansCustomComponent;
		return SubscriptionPlansCustomComponent;
	})();
	
	var component = {
		bindings: {},
		template: _subscriptionPlansCustomHtml2['default'],
		controller: SubscriptionPlansCustomComponent
	};
	
	exports['default'] = component;
	module.exports = exports['default'];

/***/ },
/* 115 */
/***/ function(module, exports) {

	module.exports = "<ui-braintree-subscription-progress subscription-plan=\"$ctrl.selectedSubscription\"></ui-braintree-subscription-progress>\n<ui-braintree-subscription-navigation route-to=\"$ctrl.routeTo(route)\" selected-route=\"'/subscribe'\"></ui-braintree-subscription-navigation>\n\n\n<p ng-if=\"$ctrl.message\" ng-bind=\"$ctrl.message\"></p>\n<ui-loading-icon size=\"'4x'\" icon-modifier=\"'circle-o-notch'\" visible=\"$ctrl.state.loading\" text=\"$ctrl.loadingText\"></ui-loading-icon>\n\n\n<section class=\"Panel fn-customSubscriptionPlans\" ng-if=\"$ctrl.plans.length\">\n\t<div class=\"Panel-body\">\n\t\t<h2 class=\"Heading--two Heading--light u-textCenter\">Select a subscription plan</h2>\n\t\t<hr class=\"Divider--dotted\">\n\n\t\t<div class=\"Grid-row Grid-row--alignRight\">\n\t\t\t<div class=\"Grid-col--12\">\n\t\t\t\t<div class=\"Form-item\" ng-if=\"$ctrl.merchantAccountsArray.length\">\n\t\t\t\t\t<label class=\"Form-itemLabel\">Currency\n\n\t\t\t\t\t                              <!--<select name=\"selectedCurrency\" id=\"selectedCurrency\"-->\n\t\t\t\t\t                              <!--class=\"Selectbox\"-->\n\t\t\t\t\t                              <!--ng-change=\"$ctrl.showSelectedCurrencyPlans()\"-->\n\t\t\t\t\t                              <!--ng-model=\"$ctrl.state.selectedCurrency\"-->\n\t\t\t\t\t                              <!--ng-options=\"merchantAccount.name as merchantAccount.currencyName for merchantAccount in $ctrl.merchantAccountsArray track by merchantAccount.id\">-->\n\t\t\t\t\t                              <!--</select>-->\n\n\t\t\t\t\t\t<select name=\"selectedCurrency\" id=\"selectedCurrency\"\n\t\t\t\t\t\t        class=\"Selectbox\"\n\t\t\t\t\t\t        ng-change=\"$ctrl.showSelectedCurrencyPlans($ctrl.state.selectedCurrencyModel)\"\n\t\t\t\t\t\t        ng-model=\"$ctrl.state.selectedCurrencyModel\">\n\t\t\t\t\t\t\t<option value=\"jivaroUSD\" ng-selected=\"$ctrl.selectedMerchantAccount.id === 'jivaroUSD'\">US Dollar (USD)</option>\n\t\t\t\t\t\t\t<option value=\"jivaroEUR\" ng-selected=\"$ctrl.selectedMerchantAccount.id === 'jivaroEUR'\">EUR (EUR)</option>\n\t\t\t\t\t\t\t<option value=\"jivaroGBP\" ng-selected=\"$ctrl.selectedMerchantAccount.id === 'jivaroGBP'\">British Pound (GBP)</option>\n\t\t\t\t\t\t\t<option value=\"jivaroISK\" ng-selected=\"$ctrl.selectedMerchantAccount.id === 'jivaroISK'\">Icelandic Krona (ISK)</option>\n\t\t\t\t\t\t</select>\n\n\t\t\t\t\t</label>\n\t\t\t\t</div>\n\t\t\t\t<hr class=\"Divider--dotted\">\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"Grid-row\">\n\t\t\t<div class=\"Grid-col--4 CustomPlan-col--premiumThree\">\n\t\t\t\t<div class=\"Panel\">\n\t\t\t\t\t<header class=\"CustomPlan-panelHeader\">\n\t\t\t\t\t\t<h2 class=\"CustomPlan-panelHeading\">\n\t\t\t\t\t\t\t<span ng-if=\"$ctrl.plansDisplayed.premiumThree.customPlanTitle\" ng-bind=\"$ctrl.plansDisplayed.premiumTwelve.customPlanTitle\"></span>\n\t\t\t\t\t\t\t<span ng-if=\"!$ctrl.plansDisplayed.premiumThree.customPlanTitle\">&nbsp;</span>\n\t\t\t\t\t\t</h2>\n\t\t\t\t\t</header>\n\t\t\t\t\t<div class=\"CustomPlan-panelBody\">\n\t\t\t\t\t\t<ui-braintree-subscription-plan\n\t\t\t\t\t\t\tbutton-css-modifier=\"'Button--primary Button--lg'\"\n\t\t\t\t\t\t\tbutton-text=\"'Select plan'\"\n\t\t\t\t\t\t\tcurrency=\"$ctrl.state.selectedCurrency\"\n\t\t\t\t\t\t\tsubscription-plan=\"$ctrl.plansDisplayed.premiumThree\"\n\t\t\t\t\t\t\titem-css-class=\"'u-textCenter'\"\n\t\t\t\t\t\t\tformat-currency-amount=\"$ctrl.formatCurrencyAmount(amount, currencyIsoCode)\"\n\t\t\t\t\t\t\ton-choose=\"$ctrl.chooseSubscriptionPlan(subscriptionPlanModel)\" ng-hide=\"$ctrl.state.loading\"></ui-braintree-subscription-plan>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"Grid-col--4 CustomPlan-col--premiumSix\">\n\t\t\t\t<div class=\"Panel\">\n\t\t\t\t\t<header class=\"CustomPlan-panelHeader\">\n\t\t\t\t\t\t<h2 class=\"CustomPlan-panelHeading\">\n\t\t\t\t\t\t\t<span ng-if=\"$ctrl.plansDisplayed.premiumSix.customPlanTitle\" ng-bind=\"$ctrl.plansDisplayed.premiumTwelve.customPlanTitle\"></span>\n\t\t\t\t\t\t\t<span ng-if=\"!$ctrl.plansDisplayed.premiumSix.customPlanTitle\">Most popular</span>\n\t\t\t\t\t\t</h2>\n\t\t\t\t\t</header>\n\t\t\t\t\t<div class=\"CustomPlan-panelBody\">\n\t\t\t\t\t\t<ui-braintree-subscription-plan\n\t\t\t\t\t\t\tbutton-css-modifier=\"'Button--success Button--lg'\"\n\t\t\t\t\t\t\tbutton-text=\"'Select plan'\"\n\t\t\t\t\t\t\tcurrency=\"$ctrl.state.selectedCurrency\"\n\t\t\t\t\t\t\tsubscription-plan=\"$ctrl.plansDisplayed.premiumSix\"\n\t\t\t\t\t\t\titem-css-class=\"'u-textCenter'\"\n\t\t\t\t\t\t\tformat-currency-amount=\"$ctrl.formatCurrencyAmount(amount, currencyIsoCode)\"\n\t\t\t\t\t\t\ton-choose=\"$ctrl.chooseSubscriptionPlan(subscriptionPlanModel)\" ng-hide=\"$ctrl.state.loading\">\n\t\t\t\t\t\t</ui-braintree-subscription-plan>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"Grid-col--4 CustomPlan-col--premiumTwelve\">\n\t\t\t\t<div class=\"Panel\">\n\t\t\t\t\t<header class=\"CustomPlan-panelHeader\">\n\t\t\t\t\t\t<h2 class=\"CustomPlan-panelHeading\">\n\t\t\t\t\t\t\t<span ng-if=\"$ctrl.plansDisplayed.premiumTwelve.customPlanTitle\" ng-bind=\"$ctrl.plansDisplayed.premiumTwelve.customPlanTitle\"></span>\n\t\t\t\t\t\t\t<span ng-if=\"!$ctrl.plansDisplayed.premiumTwelve.customPlanTitle\">&nbsp;</span>\n\t\t\t\t\t\t</h2>\n\t\t\t\t\t</header>\n\t\t\t\t\t<div class=\"CustomPlan-panelBody\">\n\t\t\t\t\t\t<ui-braintree-subscription-plan\n\t\t\t\t\t\t\tbutton-css-modifier=\"'Button--primary Button--lg'\"\n\t\t\t\t\t\t\tbutton-text=\"'Select plan'\"\n\t\t\t\t\t\t\tcurrency=\"$ctrl.state.selectedCurrency\"\n\t\t\t\t\t\t\tsubscription-plan=\"$ctrl.plansDisplayed.premiumTwelve\"\n\t\t\t\t\t\t\titem-css-class=\"'u-textCenter'\"\n\t\t\t\t\t\t\tformat-currency-amount=\"$ctrl.formatCurrencyAmount(amount, currencyIsoCode)\"\n\t\t\t\t\t\t\ton-choose=\"$ctrl.chooseSubscriptionPlan(subscriptionPlanModel)\" ng-hide=\"$ctrl.state.loading\"></ui-braintree-subscription-plan>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<!--<hr class=\"Divider&#45;&#45;dotted\">-->\n\t\t<!--<div class=\"Grid-row Grid-row&#45;&#45;alignCenter\">-->\n\t\t<!--<div class=\"Grid-col&#45;&#45;12 \">-->\n\t\t<!--<h3 class=\"Heading&#45;&#45;three Heading&#45;&#45;light\">Premium for life?</h3>-->\n\t\t<!--<h4 class=\"Heading&#45;&#45;five\">Lifetime licence</h4>-->\n\t\t<!--<h5 class=\"Heading&#45;&#45;three u-textWarning mb&#45;&#45;0\">{{ $ctrl.state.selectedCurrency.currencySymbol }}{{ $ctrl.plansDisplayed.premiumLifetime.price }}</h5>-->\n\t\t<!--<p class=\"mt&#45;&#45;0\">One time payment</p>-->\n\t\t<!--<button class=\"Button Button&#45;&#45;cta Button&#45;&#45;lg\" ng-click=\"$ctrl.chooseSubscriptionPlan($ctrl.plansDisplayed.premiumLifetime)\">-->\n\t\t<!--Go All In!-->\n\t\t<!--</button>-->\n\t\t<!--</div>-->\n\t\t<!--</div>-->\n\n\t\t<hr class=\"Divider--dotted\">\n\n\t\t<div class=\"Grid-row Grid-row--alignCenter CustomPlan-row--premiumOne\">\n\t\t\t<div class=\"Grid-col--12\">\n\t\t\t\t<p>or<br> pay monthly<br>\n\t\t\t\t\t<button class=\"Button Button--secondary\" ng-click=\"$ctrl.chooseSubscriptionPlan($ctrl.plansDisplayed.premiumOne)\">\n\t\t\t\t\t\t{{ $ctrl.formatCurrencyAmount($ctrl.plansDisplayed.premiumOne.price, $ctrl.plansDisplayed.premiumOne.currencyIsoCode) }}\n\t\t\t\t\t\t/ month\n\t\t\t\t\t</button>\n\t\t\t\t</p>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</section>\n"

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _subscriptionOverviewHtml = __webpack_require__(117);
	
	var _subscriptionOverviewHtml2 = _interopRequireDefault(_subscriptionOverviewHtml);
	
	var _braintreeConstants = __webpack_require__(103);
	
	var _underscore = __webpack_require__(98);
	
	var _underscore2 = _interopRequireDefault(_underscore);
	
	// Inject dependencies
	
	var Inject = __webpack_require__(83);
	
	var SubscriptionOverviewComponent = (function () {
		function SubscriptionOverviewComponent(braintreeDataService, braintreeAppService) {
			_classCallCheck(this, _SubscriptionOverviewComponent);
	
			this.braintreeDataService = braintreeDataService;
			this.braintreeAppService = braintreeAppService;
	
			this.state = {
				loading: {
					isLoading: false,
					text: ''
				},
				message: {
					text: '',
					link: '',
					linkText: '',
					descriptionHtml: '',
					type: ''
				},
				error: false,
				success: false
			};
	
			this.subscriptionPlan = null;
			this.selectedSubscription = this.braintreeDataService.selectedSubscription;
			this.selectedMerchantAccount = this.braintreeDataService.selectedMerchantAccount;
		}
	
		// Component decorations
	
		// Private methods
		// --------------------------------------------------
	
		_createClass(SubscriptionOverviewComponent, [{
			key: '$onInit',
			value: function $onInit() {
				var customer = this.braintreeDataService.customer;
				if (customer.clientToken) {
					this._confirmSubscription();
				}
			}
		}, {
			key: '_clearMessage',
			value: function _clearMessage() {
				this.state.message.text = '';
			}
		}, {
			key: '_displayMessage',
			value: function _displayMessage(text, type, descriptionHtml, linkText, linkRoute) {
				this.state.message.type = type;
				this.state.message.text = text;
				this.state.message.descriptionHtml = descriptionHtml;
	
				this.state.message.linkText = linkText;
				this.state.message.link = linkRoute;
			}
		}, {
			key: '_startLoading',
			value: function _startLoading(text) {
				this.state.loading.isLoading = true;
				this.state.loading.text = text;
			}
		}, {
			key: '_stopLoading',
			value: function _stopLoading() {
				this.state.loading.isLoading = false;
				this.state.loading.text = '';
			}
	
			// Public viewModel methods
			// --------------------------------------------------
		}, {
			key: '_confirmSubscription',
			value: function _confirmSubscription() {
				var _this = this;
	
				this._startLoading('Creating subscription...');
	
				var subscriptionData = {
					subscription: {
						paymentMethodToken: this.braintreeDataService.customer.paymentMethod.token,
						planId: this.selectedSubscription.id,
						merchantAccountId: this.selectedMerchantAccount.id
					}
				};
	
				// If billing date is set in the future (for promotions and such)
				if (this.selectedSubscription.firstBillingDate) {
					subscriptionData.subscription.firstBillingDate = this.selectedSubscription.firstBillingDate;
				}
	
				// Find if there are any currency discounts
				// Note: expects an object like this: which will change to an actual inheritFromId: SomeDiscountCodePrefixUSD for ex.
				// [
				// 	{currencyIsoCode: 'EUR', discountCodePrefix: 'SomeDiscountCodePrefix'},
				// 	{currencyIsoCode: 'USD', discountCodePrefix: 'SomeDiscountCodePrefix'},
				// 	{currencyIsoCode: 'GBP', discountCodePrefix: 'SomeDiscountCodePrefix'},
				// 	{currencyIsoCode: 'ISK', discountCodePrefix: 'SomeDiscountCodePrefix'}
				// ];
				if (this.selectedSubscription.currencyDiscounts && this.selectedSubscription.currencyDiscounts.length) {
					// Get the currencyIsoCode for the selected merchant account
					var selectedCurrency = this.braintreeDataService.getCurrencyForMerchantAccountId(this.selectedMerchantAccount.id);
	
					// Find the discount for this currency
					var currencyDiscount = _underscore2['default'].find(this.selectedSubscription.currencyDiscounts, { currencyIsoCode: selectedCurrency });
	
					if (currencyDiscount) {
						var discount = {
							inheritedFromId: currencyDiscount.discountCodePrefix + selectedCurrency
						};
	
						// Add Discount to subscriptionData
						this.braintreeDataService.addDiscountToSelectedSubscription(discount);
					}
				}
	
				// Adding discount to subscription data
				if (this.selectedSubscription.discounts && this.selectedSubscription.discounts.add && this.selectedSubscription.discounts.add.length) {
					subscriptionData.subscription.discounts = this.selectedSubscription.discounts;
				}
	
				this.braintreeDataService.createSubscription(subscriptionData).then(function (response) {
					if (response.data.success) {
						_this._clearMessage();
						_this._stopLoading();
						_this.state.success = true;
						_this.subscriptionPlan = _this.selectedSubscription; // TODO: should this not take response object instead?
	
						// Clear the selected subscription which has now been created
						_this.braintreeDataService.initSelectedSubscriptionData();
					} else {
						// TODO: Handle different failures maybe?
						_this._displayMessage('An error occurred creating a subscription: ' + response.data.message, 'warning', null, 'Start over', _braintreeConstants.ROUTES.SUBSCRIPTION);
						_this._stopLoading();
					}
				}, function (error) {
					var errorMessage = error.data.message;
					var errorDescription = undefined;
	
					if (error.data.transaction) {
						// Find detailed error message
						var gatewayError = _underscore2['default'].find(_braintreeConstants.GATEWAY_ERRORS, function (errorItem) {
							return errorItem.code === error.data.transaction.processorResponseCode;
						});
	
						if (gatewayError) {
							errorMessage = gatewayError.text;
							errorDescription = gatewayError.description;
						}
					}
	
					_this._displayMessage(errorMessage, 'warning', errorDescription, 'Start over', _braintreeConstants.ROUTES.SUBSCRIPTION);
					_this._stopLoading();
				});
			}
		}, {
			key: 'routeTo',
			value: function routeTo(path) {
				return this.braintreeAppService.routeTo(path);
			}
		}]);
	
		var _SubscriptionOverviewComponent = SubscriptionOverviewComponent;
		SubscriptionOverviewComponent = Inject('braintreeDataService', 'braintreeAppService')(SubscriptionOverviewComponent) || SubscriptionOverviewComponent;
		return SubscriptionOverviewComponent;
	})();
	
	var component = {
		bindings: {},
		template: _subscriptionOverviewHtml2['default'],
		controller: SubscriptionOverviewComponent
	};
	
	exports['default'] = component;
	module.exports = exports['default'];

/***/ },
/* 117 */
/***/ function(module, exports) {

	module.exports = "<section>\n\t<div ng-if=\"$ctrl.state.success\">\n\t\t<h2 class=\"Heading--two\" ng-if=\"$ctrl.state.success\">Your subscription has been created!</h2>\n\t\tGo to <a href=\"\" ng-click=\"$ctrl.routeTo('/billing-overview')\">billing overview</a> for more details.\n\t</div>\n\n\t<ui-braintree-message-box message=\"$ctrl.state.message\" on-route=\"$ctrl.routeTo(route)\"></ui-braintree-message-box>\n\t<ui-loading-icon size=\"'4x'\" icon-modifier=\"'circle-o-notch'\" visible=\"$ctrl.state.loading.isLoading\" text=\"$ctrl.state.loading.text\"></ui-loading-icon>\n</section>\n"

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _paymentMethodsHtml = __webpack_require__(119);
	
	var _paymentMethodsHtml2 = _interopRequireDefault(_paymentMethodsHtml);
	
	var _braintreeConstants = __webpack_require__(103);
	
	// Inject dependencies
	
	var Inject = __webpack_require__(83);
	
	var PaymentMethodsComponent = (function () {
		function PaymentMethodsComponent(braintreeDataService, braintreeAppService) {
			_classCallCheck(this, _PaymentMethodsComponent);
	
			this.braintreeDataService = braintreeDataService;
			this.braintreeAppService = braintreeAppService;
	
			// Used in template
			this.state = {
				message: {
					text: '',
					link: '',
					linkText: '',
					descriptionHtml: '',
					type: ''
				},
				routes: {
					nextRoute: '',
					subscription: _braintreeConstants.ROUTES.SUBSCRIPTION
				},
				showForm: true,
				mode: {
					subscription: false
				}
			};
	
			// Used in template
			this.routes = {
				nextRoute: '',
				subscription: _braintreeConstants.ROUTES.SUBSCRIPTION
			};
	
			this.customer = null;
			this.selectedSubscription = this.braintreeDataService.selectedSubscription;
		}
	
		// Component decorations
	
		// Private methods
		// --------------------------------------------------
	
		_createClass(PaymentMethodsComponent, [{
			key: '$onInit',
			value: function $onInit() {
				this.customer = this.braintreeDataService.customer;
				this.state.mode = this.braintreeDataService.mode;
	
				// Subscription mode
				if (this.state.mode.subscription) {
					// If the user has not chosen a subscription plan (or refreshed the page)
					if (!this.selectedSubscription.id) {
						this._displayMessage('You need to choose a subscription plan before you proceed', 'warning');
						this.state.message.linkText = 'Go to subscription page';
						this.state.message.link = _braintreeConstants.ROUTES.SUBSCRIPTION;
						this.state.showForm = false;
						return;
					}
	
					// If the user has no customer ID
					if (!this.customer.id) {
						this._displayMessage('You need to fill out customer information before you proceed', 'warning');
						this.state.message.linkText = 'Go to customer page';
						this.state.message.link = _braintreeConstants.ROUTES.CUSTOMER;
						this.state.showForm = false;
						return;
					}
				}
			}
	
			// Public viewModel methods
			// --------------------------------------------------
		}, {
			key: 'choosePaymentMethod',
			value: function choosePaymentMethod(method) {
				if (method === 'cards') {
					this.routeTo([_braintreeConstants.ROUTES.CARDS]);
				} else if (method === 'paypal') {
					this.routeTo([_braintreeConstants.ROUTES.PAYPAL]);
				}
			}
		}, {
			key: 'chooseStoredPaymentMethod',
			value: function chooseStoredPaymentMethod(paymentMethod) {
				var customerData = {
					paymentMethod: paymentMethod
				};
	
				this.braintreeDataService.updateCustomerData(customerData);
	
				this.state.nextRoute = _braintreeConstants.ROUTES.SUBSCRIPTION_OVERVIEW;
				this.routeTo([this.state.nextRoute]);
			}
		}, {
			key: '_clearMessage',
			value: function _clearMessage() {
				this.state.message.text = '';
			}
		}, {
			key: '_displayMessage',
			value: function _displayMessage(text, type, descriptionHtml) {
				this.state.message.type = type;
				this.state.message.text = text;
				this.state.message.descriptionHtml = descriptionHtml;
			}
		}, {
			key: 'routeTo',
			value: function routeTo(path) {
				this.braintreeAppService.routeTo(path);
			}
		}]);
	
		var _PaymentMethodsComponent = PaymentMethodsComponent;
		PaymentMethodsComponent = Inject('braintreeDataService', 'braintreeAppService')(PaymentMethodsComponent) || PaymentMethodsComponent;
		return PaymentMethodsComponent;
	})();
	
	var component = {
		bindings: {},
		template: _paymentMethodsHtml2['default'],
		controller: PaymentMethodsComponent
	};
	
	exports['default'] = component;
	module.exports = exports['default'];

/***/ },
/* 119 */
/***/ function(module, exports) {

	module.exports = "<ui-braintree-subscription-progress\n\tsubscription-plan=\"$ctrl.selectedSubscription\"\n\tsubscription-route=\"$ctrl.routes.subscription\"\n\troute-to=\"$ctrl.routeTo(route)\">\n</ui-braintree-subscription-progress>\n<ui-braintree-subscription-navigation\n\troute-to=\"$ctrl.routeTo(route)\"\n\tselected-route=\"'/payment-methods'\"\n\tng-if=\"$ctrl.state.mode.subscription\">\n</ui-braintree-subscription-navigation>\n\n<ui-braintree-message-box message=\"$ctrl.state.message\" on-route=\"$ctrl.routeTo(route)\"></ui-braintree-message-box>\n\n<section class=\"Panel\" ng-hide=\"$ctrl.state.loading.isLoading || !$ctrl.state.showForm\">\n\t<div class=\"Panel-body\">\n\t\t<h2 class=\"Heading--two Heading--light u-textCenter\">Choose your payment method</h2>\n\t\t<hr class=\"Divider--dotted\">\n\n\t\t<div ng-if=\"$ctrl.customer.paymentMethods['0']\">\n\t\t\t<h2 class=\"Heading--five\">Stored payment methods</h2>\n\t\t\t<div class=\"Grid-row\">\n\t\t\t\t<div class=\"Grid-col--4\" ng-repeat=\"paymentMethod in $ctrl.customer.paymentMethods\">\n\t\t\t\t\t<ui-braintree-payment-method\n\t\t\t\t\t\tpayment-method=\"paymentMethod\"\n\t\t\t\t\t\tcard-button-text=\"'Choose card'\"\n\t\t\t\t\t\tcard-button-visible=\"true\"\n\t\t\t\t\t\tpaypal-button-text=\"'Choose paypal'\"\n\t\t\t\t\t\tpaypal-button-visible=\"true\"\n\t\t\t\t\t\ton-card-button-click=\"$ctrl.chooseStoredPaymentMethod(paymentMethod)\"\n\t\t\t\t\t\ton-paypal-button-click=\"$ctrl.chooseStoredPaymentMethod(paymentMethod)\"></ui-braintree-payment-method>\n\t\t\t\t\t<hr class=\"Divider--dotted\">\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<h2 class=\"Heading--five\" ng-if=\"$ctrl.customer.paymentMethods['0']\">New payment method</h2>\n\t\t<button class=\"Button Button--cta Button--lg\" ng-click=\"$ctrl.choosePaymentMethod('cards')\">Credit or Debit card</button>\n\t\t<button class=\"Button Button--cta Button--lg\" ng-click=\"$ctrl.choosePaymentMethod('paypal')\">Paypal</button>\n\n\t</div>\n</section>\n"

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _billingOverviewHtml = __webpack_require__(121);
	
	var _billingOverviewHtml2 = _interopRequireDefault(_billingOverviewHtml);
	
	var _braintreeConstants = __webpack_require__(103);
	
	// Inject dependencies
	
	var Inject = __webpack_require__(83);
	
	var CustomerDetailsComponent = (function () {
		function CustomerDetailsComponent(braintreeDataService, braintreeAppService, moment, $animate) {
			_classCallCheck(this, _CustomerDetailsComponent);
	
			this.braintreeDataService = braintreeDataService;
			this.braintreeAppService = braintreeAppService;
			this.moment = moment;
			this.$animate = $animate;
	
			this.state = {
				header: {
					visible: true,
					text: 'Billing overview'
				},
				loading: {
					isLoading: false,
					text: ''
				},
				message: {
					descriptionHtml: '',
					text: '',
					link: '',
					linkText: '',
					type: 'warning'
				},
				showDetailsPanel: true,
				plans: {
					loading: {
						isLoading: false,
						text: ''
					}
				}
			};
	
			this.customer = null;
			this.plans = [];
			this.selectedMerchantAccount = this.braintreeDataService.selectedMerchantAccount;
		}
	
		// Component decorations
	
		// Private methods
		// --------------------------------------------------
	
		_createClass(CustomerDetailsComponent, [{
			key: '$onInit',
			value: function $onInit() {
				var customer = {};
				//console.log('this.customerData', this.customerData);
				if (this.customerData) {
					if (this.customerData.id) {
						customer.id = this.customerData.id;
	
						// Update existing customer in service
						this.braintreeDataService.updateCustomerData(customer);
					}
				}
	
				// Get Customer from service
				this.customer = this.braintreeDataService.customer;
				//console.log('customer', this.customer);
	
				// If we get a customerId, we fetch it from API
				if (this.customer.id) {
					this.getCustomerDetails(this.customer.id);
				}
	
				if (this.headerVisible === false) {
					this.state.header.visible = false;
				}
				if (this.headerText) {
					this.state.header.text = this.headerText;
				}
	
				// Disable animation (tmp because of implementation problems)
				this.$animate.enabled(false);
			}
		}, {
			key: '_clearMessage',
			value: function _clearMessage() {
				this.state.message.text = '';
			}
		}, {
			key: '_displayMessage',
			value: function _displayMessage(text, type, descriptionHtml) {
				this.state.message.type = type;
				this.state.message.text = text;
				this.state.message.descriptionHtml = descriptionHtml;
			}
		}, {
			key: 'getCurrencySymbol',
			value: function getCurrencySymbol(currencyIsoCode) {
				return this.braintreeAppService.getCurrencySymbol(currencyIsoCode);
			}
		}, {
			key: 'formatCurrencyAmount',
			value: function formatCurrencyAmount(amount, currencyIsoCode) {
				return this.braintreeAppService.formatCurrencyAmount(amount, currencyIsoCode);
			}
		}, {
			key: '_startLoading',
			value: function _startLoading(text) {
				this.state.loading.isLoading = true;
				this.state.loading.text = text;
			}
		}, {
			key: '_stopLoading',
			value: function _stopLoading() {
				this.state.loading.isLoading = false;
				this.state.loading.text = '';
	
				this.state.plans.loading.isLoading = false;
				this.state.plans.loading.text = '';
			}
	
			// Public viewModel methods
			// --------------------------------------------------
	
			/**
	   * Save a creditcard to the vault and adding as a default payment method for subscription.
	   * @param paymentMethod
	   * @param subscription
	   */
		}, {
			key: 'addCreditCard',
			value: function addCreditCard(paymentMethod, subscription) {
				var _this = this;
	
				this._clearMessage();
				this._startLoading('Saving payment information...');
				var customerId = this.braintreeDataService.customer.id;
	
				paymentMethod.verificationMerchantAccountId = this.selectedMerchantAccount.id;
	
				// Send request to get token, then use the token to tokenize credit card info and verify the card
				this.braintreeDataService.createVaultedPayment(customerId, paymentMethod).then(function (response) {
					_this._stopLoading();
	
					_this.addPaymentMethod(response.data.customer.paymentMethod, subscription);
				}, function (error) {
					// TODO: Handle errors better
					_this._displayMessage(error, 'warning');
					_this._stopLoading();
					_this.state.showForm = true;
				});
			}
	
			/**
	   * Adding a default PaymentMethod to subscription
	   * @param paymentMethod
	   * @param subscription
	   */
		}, {
			key: 'addPaymentMethod',
			value: function addPaymentMethod(paymentMethod, subscription) {
				var loadingText = 'Updating payment method...';
				var messageSuccessText = 'Payment method has been updated.';
				var subscriptionChanges = {
					planId: subscription.planId,
					paymentMethodToken: paymentMethod.token
				};
	
				this.updateSubscription(subscription, subscriptionChanges, loadingText, messageSuccessText);
			}
	
			/**
	   * Cancel a specific subscription.
	   * @param subscription
	   */
		}, {
			key: 'cancelSubscription',
			value: function cancelSubscription(subscription) {
				var _this2 = this;
	
				this._clearMessage();
				this._startLoading('Canceling subscription...');
	
				this.braintreeDataService.cancelSubscription(subscription.id).then(function (response) {
					if (_this2.customer.id) {
						_this2.getCustomerDetails(_this2.customer.id).then(function () {
							_this2._displayMessage('Subscription has been canceled.', 'success');
						});
					}
				}, function (error) {
					_this2._stopLoading();
					_this2._displayMessage(error.data.message, 'warning');
				});
			}
	
			/**
	   * Change payment method for a specific subscription.
	   * @param newPaymentMethod
	   * @param subscription
	   */
		}, {
			key: 'changePaymentMethodForSubscription',
			value: function changePaymentMethodForSubscription(newPaymentMethod, subscription) {
				var loadingText = 'Updating payment method...';
				var messageSuccessText = 'Payment method has been updated.';
				var subscriptionChanges = {
					planId: subscription.planId,
					paymentMethodToken: newPaymentMethod.token
				};
	
				this.updateSubscription(subscription, subscriptionChanges, loadingText, messageSuccessText);
			}
	
			/**
	   * Change to a new subscription plan.
	   * 1. Cancels the current subscription
	   * 2. Calculates discount if appropriate
	   * 3. Creates a new subscription.
	   * @param newSubscriptionPlan
	   * @param currentSubscription
	   */
		}, {
			key: 'changeSubscriptionPlan',
			value: function changeSubscriptionPlan(newSubscriptionPlan, currentSubscription) {
				var _this3 = this;
	
				//console.log('plan chosen', newSubscriptionPlan, currentSubscription);
	
				this._clearMessage();
				this._startLoading('Updating subscription plan...');
	
				// Cancel the current subscription
				this.braintreeDataService.cancelSubscription(currentSubscription.id).then(function (response) {
					if (_this3.customer.id) {
						(function () {
							var subLessFrequent = newSubscriptionPlan.billingFrequency > currentSubscription.plan.billingFrequency;
							var discount = 0;
	
							// New subscription data
							var newSubscriptionData = {
								subscription: {
									paymentMethodToken: currentSubscription.defaultPaymentMethod.token,
									planId: newSubscriptionPlan.id
								}
							};
	
							// Calculate discount if we are going to a less frequent billing cycle.
							if (subLessFrequent) {
								// Get remaining days of current subscription
								var nextBillingDate = _this3.moment(currentSubscription.nextBillingDate).startOf('days');
								var today = _this3.moment(_this3.moment().startOf('days'));
								var duration = _this3.moment.duration(nextBillingDate.diff(today));
								var remainingDays = duration.asDays();
								var billingCycleDays = currentSubscription.plan.billingFrequency * 31;
	
								// Calculate discount
								// Discount = (RemaningDays / TotalBillingCycleDays) * CurrentPlanPrice
								discount = (remainingDays / billingCycleDays * currentSubscription.plan.price).toFixed(2);
	
								// Add discount to new subscription data
								newSubscriptionData.subscription.discounts = {
									add: [{
										amount: discount,
										numberOfBillingCycles: 1,
										inheritedFromId: 'upgradeDiscount'
									}]
								};
							} else {
								// Set the StartDate on the new subscription to be the end of the current one.
								newSubscriptionData.subscription.firstBillingDate = currentSubscription.paidThroughDate;
							}
	
							// Create a new subscription
							_this3.braintreeDataService.createSubscription(newSubscriptionData).then(function (response) {
								//console.log('response', response);
								if (response.data.success) {
									_this3.getCustomerDetails(_this3.customer.id).then(function () {
										var descriptionHtml = '';
	
										if (response.data.subscription.transactions.length) {
											var transactionAmount = response.data.subscription.transactions[0].amount;
											var currencySymbol = _this3.getCurrencySymbol(response.data.subscription.transactions[0].currencyIsoCode);
	
											if (discount > 0) {
												descriptionHtml = '<p>A payment of ' + currencySymbol + transactionAmount + ' has been submitted, Your previous subscription credit of ' + currencySymbol + discount + ' was deducted from the full amount.</p>';
											}
										}
	
										_this3._displayMessage('Your subscription has been changed to the new plan.', 'success', descriptionHtml);
									});
								} else {
									//console.log('Error creating a sub', response.data.message);
									// TODO: Handle different failures maybe?
									_this3._displayMessage('An error occurred creating a subscription: ' + response.data.message, 'warning');
									_this3._stopLoading();
								}
							}, function (error) {
								//console.log('Error creating a subcription', error);
								_this3._displayMessage(error.data.message, 'warning');
								_this3._stopLoading();
							});
						})();
					}
				}, function (error) {
					_this3._stopLoading();
					_this3._displayMessage(error.data.message, 'warning');
				});
			}
	
			/**
	   * Delete a payment method for a specific subscription.
	   * Subscription will also be canceled
	   * @param paymentMethod
	   */
		}, {
			key: 'deletePaymentMethod',
			value: function deletePaymentMethod(paymentMethod) {
				var _this4 = this;
	
				this._clearMessage();
				this._startLoading('Deleting payment method...');
	
				this.braintreeDataService.deletePaymentMethod(paymentMethod).then(function (response) {
					if (_this4.customer.id) {
						_this4.getCustomerDetails(_this4.customer.id).then(function () {
							_this4._displayMessage('Payment method has been deleted, and all connected subscriptions have been cancelled.', 'success');
						});
					}
				}, function (error) {
					_this4._stopLoading();
					_this4._displayMessage(error.data.message, 'warning');
				});
			}
	
			/**
	   * Disables auto renew for a specific subscription.
	   * @param subscription
	   */
		}, {
			key: 'disableAutoRenew',
			value: function disableAutoRenew(subscription) {
				var loadingText = 'Disabling auto renew';
				var messageSuccessText = 'Auto renew has been disabled';
				var subscriptionChanges = {
					planId: subscription.planId,
					price: 0.00,
					numberOfBillingCycles: subscription.currentBillingCycle
				};
	
				this.updateSubscription(subscription, subscriptionChanges, loadingText, messageSuccessText);
			}
		}, {
			key: 'getAllPlans',
			value: function getAllPlans() {
				var _this5 = this;
	
				this._startLoading('Loading subscription plans...');
	
				this.braintreeDataService.getAllSubscriptionPlans().then(function (response) {
					_this5.plans = response.data.plans;
					_this5._stopLoading();
				}, function (error) {
					// TODO: Notify development team or do it via api
					_this5._displayMessage('Unable to get subscription plans, the development team has been notified, please try again later.', 'error');
					_this5._stopLoading();
				});
			}
		}, {
			key: 'getPlansByCurrency',
			value: function getPlansByCurrency(currencyIsoCode) {
				var _this6 = this;
	
				this._startLoading('Loading subscription plans...');
				this.braintreeDataService.getSubscriptionPlansForCurrency(currencyIsoCode).then(function (response) {
					_this6.plans = response.data.plans;
					_this6._stopLoading();
				}, function (error) {
					// TODO: Notify development team or do it via api
					_this6._displayMessage('Unable to get subscription plans, the development team has been notified, please try again later.', 'error');
					_this6._stopLoading();
				});
			}
	
			/**
	   * Enables auto renew for a specific subscription.
	   * @param subscription
	   */
		}, {
			key: 'enableAutoRenew',
			value: function enableAutoRenew(subscription) {
				var loadingText = 'Enabling auto renew';
				var messageSuccessText = 'Auto renew has been enabled.';
	
				var subscriptionChanges = {
					planId: subscription.planId,
					price: subscription.plan.price,
					numberOfBillingCycles: null
				};
	
				this.updateSubscription(subscription, subscriptionChanges, loadingText, messageSuccessText);
			}
	
			/**
	   * Get Customer details, including current subscription plans, payment methods etc.
	   * @param customerId
	   */
		}, {
			key: 'getCustomerDetails',
			value: function getCustomerDetails(customerId) {
				var _this7 = this;
	
				this._startLoading('Loading profile details...');
	
				//Get Customer if logged in
				return this.braintreeDataService.getCustomer(customerId, true).then(function (response) {
					_this7.braintreeDataService.updateCustomerData(response.data.customer);
					_this7.customer = response.data.customer;
					_this7._stopLoading();
				}, function (error) {
					_this7._stopLoading();
					_this7._displayMessage(error.data.message, 'warning');
				});
			}
	
			// TODO: Change this so we use an endpoint in the api for this, so we are not sending the price over the wire
		}, {
			key: 'updateSubscription',
			value: function updateSubscription(subscription, subscriptionChanges, loadingText, messageSuccessText) {
				var _this8 = this;
	
				this._clearMessage();
				this._startLoading(loadingText);
	
				this.braintreeDataService.updateSubscription(subscription.id, subscriptionChanges).then(function (response) {
					_this8.getCustomerDetails(_this8.customer.id).then(function () {
						_this8._displayMessage(messageSuccessText, 'success');
					});
				}, function (error) {
					//console.log(error.data.message);
					_this8._stopLoading();
					_this8._displayMessage(error.data.message, 'warning');
				});
			}
		}, {
			key: 'routeTo',
			value: function routeTo(path) {
				return this.braintreeAppService.routeTo(path);
			}
		}]);
	
		var _CustomerDetailsComponent = CustomerDetailsComponent;
		CustomerDetailsComponent = Inject('braintreeDataService', 'braintreeAppService', 'moment', '$animate')(CustomerDetailsComponent) || CustomerDetailsComponent;
		return CustomerDetailsComponent;
	})();
	
	var component = {
		bindings: {
			customerData: '<',
			headerText: '<',
			headerVisible: '<'
		},
		template: _billingOverviewHtml2['default'],
		controller: CustomerDetailsComponent
	};
	
	exports['default'] = component;
	module.exports = exports['default'];

/***/ },
/* 121 */
/***/ function(module, exports) {

	module.exports = "<header ng-if=\"$ctrl.state.header.visible\">\n\t<h2 class=\"Heading--two\" ng-bind=\"$ctrl.state.header.text\"></h2>\n\t<hr class=\"Divider--dotted\">\n</header>\n<ui-braintree-message-box message=\"$ctrl.state.message\"></ui-braintree-message-box>\n<ui-loading-icon size=\"'4x'\" icon-modifier=\"'circle-o-notch'\" visible=\"$ctrl.state.loading.isLoading\" text=\"$ctrl.state.loading.text\"></ui-loading-icon>\n\n<section ng-if=\"$ctrl.customer\" ng-hide=\"$ctrl.state.loading.isLoading || !$ctrl.state.showDetailsPanel\">\n\t<!-- Profile -->\n\t<!--<div class=\"Grid-row\">-->\n\t<!--<div class=\"Grid-col&#45;&#45;12\">-->\n\n\t<!--<section class=\"Panel\">-->\n\t<!--<h3 class=\"Panel-heading Heading&#45;&#45;three\">Profile</h3>-->\n\t<!--<div class=\"Panel-body\">-->\n\t<!--<div class=\"Form-item\">-->\n\t<!--<label class=\"Form-itemLabel\">Full name</label>-->\n\t<!--<span ng-bind=\"$ctrl.customer.firstName\"></span> <span ng-bind=\"$ctrl.customer.lastName\"></span>-->\n\t<!--</div>-->\n\t<!--<div class=\"Form-item\">-->\n\t<!--<label class=\"Form-itemLabel\">Email</label>-->\n\t<!--<span ng-bind=\"$ctrl.customer.email\"></span>-->\n\t<!--</div>-->\n\t<!--</div>-->\n\t<!--</section>-->\n\n\t<!--</div>-->\n\t<!--</div>-->\n\n\t<!-- Subscriptions & Payment methods -->\n\t<div class=\"Grid-row\">\n\t\t<div class=\"Grid-col--12\">\n\t\t\t<section class=\"Panel\" ng-if=\"!$ctrl.customer.subscriptions\">\n\t\t\t\t<header class=\"Panel-header\">\n\t\t\t\t\t<h3 class=\"Panel-heading Heading--three\">You have no subscriptions.</h3>\n\t\t\t\t</header>\n\t\t\t\t<div class=\"Panel-body\">\n\t\t\t\t\t<button class=\"Button Button--success Button--lg\" ng-click=\"$ctrl.routeTo('/subscribe');\">Subscribe now...</button>\n\t\t\t\t</div>\n\t\t\t</section>\n\t\t\t<section class=\"Panel\" ng-if=\"$ctrl.customer.subscriptions\">\n\t\t\t\t<header class=\"Panel-header\">\n\t\t\t\t\t<h3 class=\"Panel-heading Heading--three\">{{ ($ctrl.customer.subscriptions[1] !== undefined) ? 'Subscriptions' : 'Subscription' }}</h3>\n\t\t\t\t</header>\n\t\t\t\t<div class=\"Panel-body\">\n\t\t\t\t\t<div ng-repeat=\"subscription in $ctrl.customer.subscriptions | toArray: true | orderBy: ['-updatedAt']\">\n\t\t\t\t\t\t<div class=\"Grid-row\">\n\t\t\t\t\t\t\t<div class=\"Grid-col--6\">\n\t\t\t\t\t\t\t\t<ui-braintree-subscription-details subscription=\"subscription\" format-currency-amount=\"$ctrl.formatCurrencyAmount(amount, currencyIsoCode)\"></ui-braintree-subscription-details>\n\n\t\t\t\t\t\t\t\t<button type=\"button\" class=\"Button Button--primary\" ng-click=\"$ctrl.getPlansByCurrency(subscription.plan.currencyIsoCode); showEditPlanModal = !showEditPlanModal\" ng-show=\"subscription.status.toLowerCase() === 'active'\">Edit Plan</button>\n\t\t\t\t\t\t\t\t<span ng-if=\"subscription.status.toLowerCase() === 'active'\">|</span>\n\t\t\t\t\t\t\t\t<a href=\"\" ng-if=\"subscription.status.toLowerCase() === 'active' && subscription.price > 0\" ng-click=\"$ctrl.disableAutoRenew(subscription)\">Disable Auto Renew</a>\n\t\t\t\t\t\t\t\t<a href=\"\" ng-if=\"subscription.status.toLowerCase() === 'active' && subscription.price <= 0\" ng-click=\"$ctrl.enableAutoRenew(subscription)\">Enable Auto Renew</a>\n\t\t\t\t\t\t\t\t<a href=\"\" ng-if=\"subscription.status.toLowerCase() === 'pending'\" ng-click=\"$ctrl.cancelSubscription(subscription)\">Cancel subscription</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"Grid-col--6\">\n\t\t\t\t\t\t\t\t<h4 class=\"Heading--four\">Payment method</h4>\n\t\t\t\t\t\t\t\t<ui-braintree-payment-method payment-method=\"subscription.defaultPaymentMethod\"></ui-braintree-payment-method>\n\t\t\t\t\t\t\t\t<button class=\"Button Button--primary\"\n\t\t\t\t\t\t\t\t        ng-click=\"showEditPaymentMethodsModal = !showEditPaymentMethodsModal\"\n\t\t\t\t\t\t\t\t        ng-hide=\"subscription.status.toLowerCase() === 'canceled'\">Change Payment Method\n\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<!-- Edit plan -->\n\t\t\t\t\t\t<ui-modal modal-id=\"'editPlanModal'\" modal-visible=\"showEditPlanModal\" modal-max-width=\"'800px'\">\n\t\t\t\t\t\t\t<modal-body>\n\t\t\t\t\t\t\t\t<section class=\"Panel\">\n\t\t\t\t\t\t\t\t\t<ui-braintree-message-box message=\"$ctrl.state.message\"></ui-braintree-message-box>\n\t\t\t\t\t\t\t\t\t<h4 class=\"Heading--four\">Edit subscription plan</h4>\n\t\t\t\t\t\t\t\t\t<hr class=\"Divider--dotted\">\n\t\t\t\t\t\t\t\t\t<ui-loading-icon size=\"'4x'\" icon-modifier=\"'circle-o-notch'\" visible=\"$ctrl.state.plans.loading.isLoading\" text=\"$ctrl.state.plans.loading.text\"></ui-loading-icon>\n\t\t\t\t\t\t\t\t\t<div class=\"Panel-body Panel-body--highlight\">\n\n\t\t\t\t\t\t\t\t\t\t<div class=\"Grid-row\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"Grid-col--4\" ng-repeat=\"plan in $ctrl.plans\" ng-if=\"$ctrl.plans.length\">\n\t\t\t\t\t\t\t\t\t\t\t\t<ui-braintree-subscription-plan\n\t\t\t\t\t\t\t\t\t\t\t\t\tbutton-disabled=\"plan.id === subscription.planId\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tbutton-css-modifier=\"plan.id === subscription.planId ? 'Button--success' : 'Button--cta'\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tbutton-text=\"plan.id === subscription.planId ? 'Current plan' : 'Select plan'\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tsubscription-plan=\"plan\"\n\t\t\t\t\t\t\t\t\t\t\t\t\ton-choose=\"$ctrl.changeSubscriptionPlan(subscriptionPlanModel, subscription)\"></ui-braintree-subscription-plan>\n\t\t\t\t\t\t\t\t\t\t\t\t<hr class=\"Divider--dotted\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</section>\n\t\t\t\t\t\t\t</modal-body>\n\t\t\t\t\t\t</ui-modal>\n\n\t\t\t\t\t\t<!-- Edit payment method -->\n\t\t\t\t\t\t<ui-modal modal-id=\"'changePaymentMethodModal'\" modal-visible=\"showEditPaymentMethodsModal\" modal-max-width=\"'800px'\">\n\t\t\t\t\t\t\t<modal-body>\n\t\t\t\t\t\t\t\t<section class=\"Panel\">\n\t\t\t\t\t\t\t\t\t<ui-braintree-message-box message=\"$ctrl.state.message\"></ui-braintree-message-box>\n\t\t\t\t\t\t\t\t\t<h4 class=\"Heading--four\">Edit payment method</h4>\n\t\t\t\t\t\t\t\t\t<hr class=\"Divider--dotted\">\n\t\t\t\t\t\t\t\t\t<div class=\"Panel-body Panel-body--highlight\">\n\n\t\t\t\t\t\t\t\t\t\t<div ng-if=\"$ctrl.customer.paymentMethods['0']\">\n\t\t\t\t\t\t\t\t\t\t\t<h5 class=\"Heading--five\">Your stored payment methods</h5>\n\t\t\t\t\t\t\t\t\t\t\t<hr class=\"Divider--dotted\">\n\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"Grid-row\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"CustomerDetails-paymentMethodColumn Grid-col--4\" ng-repeat=\"paymentMethod in $ctrl.customer.paymentMethods\" ng-class=\"{'is-default' : paymentMethod.token === subscription.defaultPaymentMethod.token}\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ui-braintree-payment-method\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tpayment-method=\"paymentMethod\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tbutton-disabled=\"paymentMethod.token === subscription.defaultPaymentMethod.token\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tbutton-disabled-text=\"'Default payment method'\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tcard-button-text=\"'Choose card'\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tcard-button-visible=\"true\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tdelete-link-text=\"'Delete'\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tdelete-link-visible=\"paymentMethod.token !== subscription.defaultPaymentMethod.token\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tpaypal-button-text=\"'Choose paypal'\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tpaypal-button-visible=\"true\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\ton-card-button-click=\"$ctrl.changePaymentMethodForSubscription(paymentMethod, subscription)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\ton-delete-click=\"$ctrl.deletePaymentMethod(paymentMethod)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\ton-paypal-button-click=\"$ctrl.changePaymentMethodForSubscription(paymentMethod, subscription)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ui-braintree-payment-method>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t<hr class=\"Divider--dotted\">\n\t\t\t\t\t\t\t\t\t\t<h5 class=\"Heading--five\">Add a new payment method</h5>\n\n\t\t\t\t\t\t\t\t\t\t<div class=\"Grid-row\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"Grid-col--6\">\n\t\t\t\t\t\t\t\t\t\t\t\t<h2 class=\"Heading--six\">Credit or Debit Card</h2>\n\t\t\t\t\t\t\t\t\t\t\t\t<ui-braintree-creditcard-form\n\t\t\t\t\t\t\t\t\t\t\t\t\ton-submit=\"$ctrl.addCreditCard(paymentModel, subscription)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tback-button-visible=\"false\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tsubmit-button-text=\"'Save and choose card'\"\n\t\t\t\t\t\t\t\t\t\t\t\t\thide-amount=\"true\"></ui-braintree-creditcard-form>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"Grid-col--6\">\n\t\t\t\t\t\t\t\t\t\t\t\t<h2 class=\"Heading--six\">Paypal</h2>\n\t\t\t\t\t\t\t\t\t\t\t\t<braintree-paypal-button\n\t\t\t\t\t\t\t\t\t\t\t\t\tbutton-text=\"'Connect with Paypal...'\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tcurrency-iso-code=\"subscription.plan.currencyIsoCode\"\n\t\t\t\t\t\t\t\t\t\t\t\t\ton-finish=\"$ctrl.addPaymentMethod(paymentModel, subscription)\"></braintree-paypal-button>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</section>\n\n\t\t\t\t\t\t\t</modal-body>\n\t\t\t\t\t\t</ui-modal>\n\n\n\t\t\t\t\t\t<!-- Transaction history -->\n\t\t\t\t\t\t<hr class=\"Divider--dotted\">\n\t\t\t\t\t\t<h4 class=\"Panel-bodyHeading Heading--four\"\n\t\t\t\t\t\t    ui-toggle\n\t\t\t\t\t\t    toggle-el-css-class=\"js-transactionHistory\"\n\t\t\t\t\t\t    toggle-icon-css-class=\"js-toggleIcon\"\n\t\t\t\t\t\t    toggle-icon-css-class-hide=\"fa-chevron-down\"\n\t\t\t\t\t\t    toggle-icon-css-class-show=\"fa-chevron-right\">\n\t\t\t\t\t\t\t<i class=\"fa fa-chevron-right js-toggleIcon\"></i> Transaction history</h4>\n\n\t\t\t\t\t\t<div class=\"js-transactionHistory\" hidden>\n\t\t\t\t\t\t\t<div class=\"Panel\">\n\t\t\t\t\t\t\t\t<div class=\"Panel-body Panel-body--highlight\" ng-repeat=\"transaction in subscription.transactions\">\n\t\t\t\t\t\t\t\t\t<header class=\"HeadingGroup\">\n\t\t\t\t\t\t\t\t\t\t<h5 class=\"Heading--seven HeadingGroup-heading--top\">\n\t\t\t\t\t\t\t\t\t\t\t<time>{{ transaction.createdAt | date: longDate }}</time>\n\t\t\t\t\t\t\t\t\t\t</h5>\n\t\t\t\t\t\t\t\t\t\t<h5 class=\"Heading--five HeadingGroup-heading--main\" ng-class=\"{'u-textSuccess': !transaction.refundId, 'u-textDanger': transaction.refundId }\">\n\t\t\t\t\t\t\t\t\t\t\t<span ng-if=\"transaction.refundId\">Refund: <span>-</span></span>{{ $ctrl.formatCurrencyAmount(transaction.amount, transaction.currencyIsoCode) }}\n\t\t\t\t\t\t\t\t\t\t\t<small class=\"u-textBase\" ng-if=\"transaction.discounts.length\">(Upgrade credit:\n\t\t\t\t\t\t\t\t\t\t\t\t<span ng-repeat=\"discount in transaction.discounts\" class=\"u-textSuccess\">{{ $ctrl.formatCurrencyAmount(discount.amount, transaction.currencyIsoCode) }}</span>)\n\t\t\t\t\t\t\t\t\t\t\t</small>\n\t\t\t\t\t\t\t\t\t\t</h5>\n\t\t\t\t\t\t\t\t\t</header>\n\t\t\t\t\t\t\t\t\t<hr class=\"Divider--dotted\">\n\t\t\t\t\t\t\t\t\t<h5 class=\"Heading--five\">Status history</h5>\n\t\t\t\t\t\t\t\t\t<div ng-repeat=\"statusHistoryItem in transaction.statusHistory\">\n\t\t\t\t\t\t\t\t\t\t{{ statusHistoryItem.timestamp | date: longDate }}\n\t\t\t\t\t\t\t\t\t\t/ {{ statusHistoryItem.status }}\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<hr class=\"Divider\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"Panel-body Panel-body--highlight\" ng-if=\"!subscription.transactions.length\">\n\t\t\t\t\t\t\t\t\t<h4 class=\"Heading--five\">No transactions were found.</h4>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<hr class=\"Divider\">\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</section>\n\n\t\t</div>\n\t</div>\n\n</section>\n"

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _creditcardFormHtml = __webpack_require__(123);
	
	var _creditcardFormHtml2 = _interopRequireDefault(_creditcardFormHtml);
	
	// Component decorations
	var component = {
		bindings: {
			backButtonText: '<',
			backButtonRoute: '<',
			backButtonVisible: '<',
			hideAmount: '<',
			hideCurrency: '<',
			selectedMerchantAccount: '<',
			merchantAccounts: '<',
			submitButtonText: '<',
			onSubmit: '&',
			routeTo: '&'
		},
		template: _creditcardFormHtml2['default']
	};
	
	exports['default'] = component;
	module.exports = exports['default'];

/***/ },
/* 123 */
/***/ function(module, exports) {

	module.exports = "<section>\n\t<form name=\"payment\" ng-submit=\"$ctrl.onSubmit({paymentModel: $ctrl.paymentModel})\">\n\t\t<div class=\"Form-item\" ng-if=\"$ctrl.merchantAccounts.length && !$ctrl.selectedMerchantAccount\">\n\t\t\t<label class=\"Form-itemLabel\">Currency</label>\n\t\t\t<label ng-repeat=\"merchantAccount in $ctrl.merchantAccounts\">\n\t\t\t\t<input type=\"radio\" name=\"merchantAccountId\" ng-value=\"merchantAccount.id\" ng-model=\"$ctrl.paymentModel.merchantAccountId\" required>\n\t\t\t\t{{ merchantAccount.currencyIsoCode }}\n\t\t\t</label>\n\t\t</div>\n\t\t<div class=\"Form-item\" ng-if=\"$ctrl.selectedMerchantAccount && !$ctrl.hideCurrency\">\n\t\t\t<label class=\"Form-itemLabel\">Currency</label>\n\t\t\t{{ $ctrl.selectedMerchantAccount.currencyIsoCode }}\n\t\t</div>\n\n\t\t<div class=\"Form-item\" ng-if=\"!$ctrl.hideAmount\">\n\t\t\t<label class=\"Form-itemLabel\">Amount<br>\n\t\t\t\t<input type=\"text\" class=\"Textbox fn-amount\" ng-model=\"$ctrl.paymentModel.amount\" size=\"8\" ng-required=\"true\" />\n\t\t\t</label>\n\t\t</div>\n\n\t\t<div class=\"Form-item\">\n\t\t\t<label class=\"Form-itemLabel\">Card Number<br>\n\t\t\t<input type=\"text\"\n\t\t\t       class=\"Textbox fn-creditCardNumber\"\n\t\t\t       ng-model=\"$ctrl.paymentModel.creditCardNumber\"\n\t\t\t       size=\"25\"\n\t\t\t       payments-validate=\"card\"\n\t\t\t       payments-type-model=\"$ctrl.type\"\n\t\t\t       payments-format=\"card\"\n\t\t\t       payments-length=\"card\"\n\t\t\t       ng-class=\"$ctrl.type\"\n\t\t\t       ng-required=\"true\"\n\t\t\t        />\n\t\t\t</label>\n\t\t</div>\n\n\t\t<div class=\"Form-item\">\n\t\t\t<label class=\"Form-itemLabel\">Expiration Date<br>\n\t\t\t<input type=\"text\" class=\"Textbox fn-expiryDate\"\n\t\t\t       ng-model=\"$ctrl.paymentModel.expirationDate\"\n\t\t\t       payments-validate=\"expiry\"\n\t\t\t       payments-format=\"expiry\"\n\t\t\t       size=\"8\"\n\t\t\t       ng-required=\"true\"\n\t\t\t        />\n\t\t\t</label>\n\t\t</div>\n\n\t\t<div class=\"Form-item\">\n\t\t\t<label class=\"Form-itemLabel\">CVV<br>\n\t\t\t<input type=\"text\"\n\t\t\t       class=\"Textbox fn-cvv\"\n\t\t\t       ng-model=\"$ctrl.paymentModel.cvv\"\n\t\t\t       payments-validate=\"cvc\"\n\t\t\t       payments-type-model=\"$ctrl.type\"\n\t\t\t       payments-format=\"cvc\"\n\t\t\t       size=\"4\"\n\t\t\t       ng-required=\"true\"\n\t\t\t        />\n\t\t\t</label>\n\t\t</div>\n\n\n\t\t<button class=\"Button Button--primary\" type=\"submit\">{{ $ctrl.submitButtonText }}</button>\n\t\t<span ng-if=\"$ctrl.backButtonVisible\">\n\t\t\t| <a href=\"\" ng-click=\"$ctrl.routeTo({route: $ctrl.backButtonRoute})\">{{ $ctrl.backButtonText }}</a>\n\t\t</span>\n\t</form>\n</section>\n"

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _customerFormHtml = __webpack_require__(125);
	
	var _customerFormHtml2 = _interopRequireDefault(_customerFormHtml);
	
	var component = {
		bindings: {
			backButtonText: '<',
			backButtonRoute: '<',
			backButtonVisible: '<',
			customerModel: '<',
			onSubmit: '&',
			submitButtonText: '<',
			routeTo: '&'
		},
		template: _customerFormHtml2['default']
	};
	
	exports['default'] = component;
	module.exports = exports['default'];

/***/ },
/* 125 */
/***/ function(module, exports) {

	module.exports = "<form name=\"customer\" ng-submit=\"$ctrl.onSubmit({customerModel: $ctrl.customerModel})\">\n\t<div class=\"Form-item\">\n\t\t<label class=\"Form-itemLabel\" for=\"txtFirstName\">First name</label>\n\t\t<input type=\"text\" class=\"Textbox fn-firstName\" id=\"txtFirstName\" ng-model=\"$ctrl.customerModel.firstName\" required placeholder=\"First name\" />\n\t</div>\n\t<div class=\"Form-item\">\n\t\t<label class=\"Form-itemLabel\" for=\"txtLastName\">Last name</label>\n\t\t<input type=\"text\" class=\"Textbox fn-lastName\" id=\"txtLastName\" ng-model=\"$ctrl.customerModel.lastName\" required placeholder=\"Last name\" />\n\t</div>\n\n\t<div class=\"Form-item\">\n\t\t<label class=\"Form-itemLabel\" for=\"txtEmail\">Email</label>\n\t\t<input type=\"email\" class=\"Textbox fn-email\" id=\"txtEmail\" ng-model=\"$ctrl.customerModel.email\" required placeholder=\"Email address\" />\n\t</div>\n\n\t<button class=\"Button Button--primary fn-customerSubmit\" type=\"submit\">{{ $ctrl.submitButtonText }}</button>\n\t<span ng-if=\"$ctrl.backButtonVisible\">\n\t\t\t| <a href=\"\" ng-click=\"$ctrl.routeTo({route: $ctrl.backButtonRoute})\">{{ $ctrl.backButtonText }}</a>\n\t\t</span>\n\t<input type=\"hidden\" id=\"txtCustomerId\" ng-model=\"$ctrl.customerModel.id\" />\n</form>\n"

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _messageBoxHtml = __webpack_require__(127);
	
	var _messageBoxHtml2 = _interopRequireDefault(_messageBoxHtml);
	
	// Inject dependencies
	
	var Inject = __webpack_require__(83);
	
	var MessageBoxComponent = (function () {
		function MessageBoxComponent() {
			_classCallCheck(this, _MessageBoxComponent);
		}
	
		// Component decorations
	
		// Private methods
		// --------------------------------------------------
	
		_createClass(MessageBoxComponent, [{
			key: '$onInit',
			value: function $onInit() {}
	
			// Public viewModel methods
			// --------------------------------------------------
		}]);
	
		var _MessageBoxComponent = MessageBoxComponent;
		MessageBoxComponent = Inject()(MessageBoxComponent) || MessageBoxComponent;
		return MessageBoxComponent;
	})();
	
	var component = {
		bindings: {
			message: '<',
			onRoute: '&'
		},
		template: _messageBoxHtml2['default'],
		controller: MessageBoxComponent
	};
	
	exports['default'] = component;
	module.exports = exports['default'];

/***/ },
/* 127 */
/***/ function(module, exports) {

	module.exports = "<section class=\"Alert Alert--{{ $ctrl.message.type }}\" ng-if=\"$ctrl.message.text\">\n\t<header class=\"Alert-header\">\n\t\t<h1 class=\"Alert-heading Heading--five\">\n\t\t\t<i class=\"Alert-icon fa fa-warning fa-lg\"></i>\n\t\t\t<span ng-bind=\"$ctrl.message.text\"></span>\n\t\t</h1>\n\t</header>\n\t<div class=\"Alert-body\" ng-if=\"$ctrl.message.descriptionHtml\">\n\t\t<p ng-bind-html=\"$ctrl.message.descriptionHtml\"></p>\n\t</div>\n\t<div class=\"Alert-footer\" ng-if=\"$ctrl.message.linkText\">\n\t\t<p>\n\t\t\t<a href=\"\" ng-click=\"$ctrl.onRoute({route: $ctrl.message.link})\">{{ $ctrl.message.linkText }}</a>\n\t\t</p>\n\t</div>\n</section>\n"

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _subscriptionPlanHtml = __webpack_require__(129);
	
	var _subscriptionPlanHtml2 = _interopRequireDefault(_subscriptionPlanHtml);
	
	// Inject dependencies
	
	var Inject = __webpack_require__(83);
	
	var SubscriptionPlanComponent = (function () {
		function SubscriptionPlanComponent() {
			_classCallCheck(this, _SubscriptionPlanComponent);
		}
	
		// Component decorations
	
		// Private methods
		// --------------------------------------------------
	
		_createClass(SubscriptionPlanComponent, [{
			key: '$onInit',
			value: function $onInit() {}
	
			// Public viewModel methods
			// --------------------------------------------------
		}]);
	
		var _SubscriptionPlanComponent = SubscriptionPlanComponent;
		SubscriptionPlanComponent = Inject()(SubscriptionPlanComponent) || SubscriptionPlanComponent;
		return SubscriptionPlanComponent;
	})();
	
	var component = {
		bindings: {
			buttonCssModifier: '<',
			buttonDisabled: '<',
			buttonText: '<',
			itemCssClass: '<',
			subscriptionPlan: '<',
			currency: '<',
			formatCurrencyAmount: '&',
			onChoose: '&'
		},
		template: _subscriptionPlanHtml2['default'],
		controller: SubscriptionPlanComponent
	};
	
	exports['default'] = component;
	module.exports = exports['default'];

/***/ },
/* 129 */
/***/ function(module, exports) {

	module.exports = "<div class=\"{{ $ctrl.itemCssClass }}\">\n\t<header class=\"HeadingGroup\">\n\t\t<h3 class=\"Heading--four mb--1\">\n\t\t\t<span ng-bind=\"$ctrl.subscriptionPlan.name\"></span>\n\t\t</h3>\n\t\t<h4 class=\"Heading--seven Heading--light mt--0\">\n\t\t\t<span ng-if=\"$ctrl.subscriptionPlan.offerPrice\">{{ $ctrl.formatCurrencyAmount({amount: $ctrl.subscriptionPlan.offerPrice, currencyIsoCode: $ctrl.subscriptionPlan.currencyIsoCode}) }}</span>\n\t\t\t<span ng-if=\"$ctrl.subscriptionPlan.offerPrice\">(</span>\n\t\t\t<span ng-class=\"{'u-textStrikeThrough u-textDanger': $ctrl.subscriptionPlan.offerPrice}\">\n\t\t\t\t{{ $ctrl.formatCurrencyAmount({amount: $ctrl.subscriptionPlan.price, currencyIsoCode: $ctrl.subscriptionPlan.currencyIsoCode}) }}\n\t\t\t</span>\n\t\t\t<span ng-if=\"$ctrl.subscriptionPlan.offerPrice\">)</span>\n\t\t</h4>\n\t</header>\n\t<hr class=\"Divider--dotted\">\n\t<h4 class=\"Heading--four u-textSuccess mb--0\">\n\t\t<span ng-class=\"{'u-textStrikeThrough u-textDanger': $ctrl.subscriptionPlan.offerPrice}\" ng-bind=\"$ctrl.subscriptionPlan.description\"></span>\n\t</h4>\n\t<p class=\"mt--0\">/month</p>\n\t<button class=\"Button {{ $ctrl.buttonCssModifier }}\"\n\t        ng-click=\"$ctrl.onChoose({subscriptionPlanModel: $ctrl.subscriptionPlan})\"\n\t        ng-disabled=\"$ctrl.buttonDisabled\">{{ $ctrl.buttonText }}\n\t</button>\n</div>\n"

/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _subscriptionDetailsHtml = __webpack_require__(131);
	
	var _subscriptionDetailsHtml2 = _interopRequireDefault(_subscriptionDetailsHtml);
	
	// Component decorations
	var component = {
		bindings: {
			subscription: '<',
			formatCurrencyAmount: '&'
		},
		template: _subscriptionDetailsHtml2['default']
	};
	
	exports['default'] = component;
	module.exports = exports['default'];

/***/ },
/* 131 */
/***/ function(module, exports) {

	module.exports = "<h4 class=\"Heading--four\">{{ $ctrl.subscription.plan.name}} / {{ $ctrl.subscription.plan.description}}</h4>\n<div class=\"Form-item\">\n\t<label class=\"Form-itemLabel\">Status</label>\n\t<strong ng-class=\"{\n\t'u-textSuccess' : $ctrl.subscription.status.toLowerCase() === 'active',\n\t'u-textDanger' : $ctrl.subscription.status.toLowerCase() === 'canceled',\n\t'u-textWarning' : $ctrl.subscription.status.toLowerCase() === 'pastdue',\n\t'u-textWarning' : $ctrl.subscription.status.toLowerCase() === 'pending'\n\t}\">\n\t\t<span ng-if=\"$ctrl.subscription.status.toLowerCase() !== 'active'\" ng-bind=\"$ctrl.subscription.status\"></span>\n\t\t<span ng-if=\"$ctrl.subscription.price > 0 && $ctrl.subscription.status.toLowerCase() === 'active'\" ng-bind=\"$ctrl.subscription.status\"></span>\n\t\t<span ng-if=\"$ctrl.subscription.price <= 0 && $ctrl.subscription.status.toLowerCase() === 'active'\" class=\"u-textWarning\">{{ $ctrl.subscription.status }} <span class=\"u-textBase u-textNormal\">( Auto renew disabled )</span></span>\n\t</strong>\n</div>\n<div class=\"Form-item\">\n\t<label class=\"Form-itemLabel\">Billing amount</label>\n\t{{ $ctrl.formatCurrencyAmount({amount: $ctrl.subscription.price, currencyIsoCode: $ctrl.subscription.plan.currencyIsoCode}) }}\n</div>\n<div class=\"Form-item\">\n\t<label class=\"Form-itemLabel\">Next billing amount</label>\n\t{{ $ctrl.formatCurrencyAmount({amount: $ctrl.subscription.nextBillAmount, currencyIsoCode: $ctrl.subscription.plan.currencyIsoCode}) }}\n</div>\n<div class=\"Form-item\">\n\t<label class=\"Form-itemLabel\">Next billing period amount</label>\n\t{{ $ctrl.formatCurrencyAmount({amount: $ctrl.subscription.nextBillingPeriodAmount, currencyIsoCode: $ctrl.subscription.plan.currencyIsoCode}) }}\n</div>\n<div class=\"Form-item\">\n\t<label class=\"Form-itemLabel\">Started</label>\n\t{{ $ctrl.subscription.createdAt | date: longDate }}\n</div>\n<div class=\"Form-item\">\n\t<label class=\"Form-itemLabel\">Next billing date</label>\n\t{{ $ctrl.subscription.nextBillingDate | date: longDate }}\n</div>\n"

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _subscriptionOverviewHtml = __webpack_require__(133);
	
	var _subscriptionOverviewHtml2 = _interopRequireDefault(_subscriptionOverviewHtml);
	
	// Component decorations
	var component = {
		bindings: {
			subscriptionPlan: '<'
		},
		template: _subscriptionOverviewHtml2['default']
	};
	
	exports['default'] = component;
	module.exports = exports['default'];

/***/ },
/* 133 */
/***/ function(module, exports) {

	module.exports = "<section>\n\t<h3 class=\"Heading--three\" ng-bind=\"$ctrl.subscriptionPlan.name\"></h3>\n\t<p ng-bind=\"$ctrl.subscriptionPlan.description\"></p>\n</section>\n"

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _subscriptionProgressHtml = __webpack_require__(135);
	
	var _subscriptionProgressHtml2 = _interopRequireDefault(_subscriptionProgressHtml);
	
	// Component decorations
	var component = {
		bindings: {
			subscriptionPlan: '<',
			subscriptionRoute: '<',
			routeTo: '&'
		},
		template: _subscriptionProgressHtml2['default']
	};
	
	exports['default'] = component;
	module.exports = exports['default'];

/***/ },
/* 135 */
/***/ function(module, exports) {

	module.exports = "<section ng-if=\"$ctrl.subscriptionPlan.id\" class=\"Alert--info fn-subscriptionProgress\">\n\t<div class=\"Alert-body\">\n\t\t<p>Selected plan:\n\t\t\t<span ng-bind=\"$ctrl.subscriptionPlan.name\"></span> /\n\t\t\t<span ng-bind=\"$ctrl.subscriptionPlan.description\"></span>\n\t\t\t<span ng-if=\"$ctrl.subscriptionRoute\">\n\t\t\t<a href=\"\" ng-click=\"$ctrl.routeTo({route: $ctrl.subscriptionRoute})\">change plan</a>\n\t\t</span>\n\t\t</p>\n\t</div>\n</section>\n"

/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _subscribeNavigationHtml = __webpack_require__(137);
	
	var _subscribeNavigationHtml2 = _interopRequireDefault(_subscribeNavigationHtml);
	
	// Component decorations
	var component = {
		bindings: {
			selectedRoute: '<',
			routeTo: '&'
		},
		template: _subscribeNavigationHtml2['default']
	};
	
	exports['default'] = component;
	module.exports = exports['default'];

/***/ },
/* 137 */
/***/ function(module, exports) {

	module.exports = "<ul class=\"Nav Nav--tabs\">\n\t<li class=\"Nav-item\" ng-class=\"{'is-active': $ctrl.selectedRoute === '/subscribe'}\">\n\t\t<a class=\"Nav-link\" href=\"\" ng-click=\"$ctrl.routeTo({route: '/subscribe'})\">1. Subscription plan</a>\n\t</li>\n\t<li class=\"Nav-item\" ng-class=\"{'is-active': $ctrl.selectedRoute === '/customer'}\">\n\t\t<a class=\"Nav-link\" href=\"\" ng-click=\"$ctrl.routeTo({route: '/customer'})\">2. Customer information</a>\n\t</li>\n\t<li class=\"Nav-item\" ng-class=\"{'is-active': $ctrl.selectedRoute === '/payment-methods'}\">\n\t\t<a class=\"Nav-link\" href=\"\" ng-click=\"$ctrl.routeTo({route: '/payment-methods'})\">3. Payment method</a>\n\t</li>\n</ul>\n"

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _paymentMethodHtml = __webpack_require__(139);
	
	var _paymentMethodHtml2 = _interopRequireDefault(_paymentMethodHtml);
	
	// Component decorations
	var component = {
		bindings: {
			paymentMethod: '<',
			buttonDisabled: '<',
			buttonDisabledText: '<',
			cardButtonText: '<',
			cardButtonVisible: '<',
			deleteLinkText: '<',
			deleteLinkVisible: '<',
			paypalButtonText: '<',
			paypalButtonVisible: '<',
			onCardButtonClick: '&',
			onDeleteClick: '&',
			onPaypalButtonClick: '&'
	
		},
		template: _paymentMethodHtml2['default']
	};
	
	exports['default'] = component;
	module.exports = exports['default'];

/***/ },
/* 139 */
/***/ function(module, exports) {

	module.exports = "<div ng-if=\"$ctrl.paymentMethod.cardType\">\n\t<!-- Card -->\n\t<div class=\"Form-item\">\n\t\t<label class=\"Form-itemLabel\">Type</label>\n\t\t<i class=\"fa fa-credit-card\"></i> <span ng-bind=\"$ctrl.paymentMethod.cardType\"></span>\n\t\t<span ng-if=\"$ctrl.paymentMethod.debit === 'Yes'\">Debit Card</span>\n\t\t<span ng-if=\"$ctrl.paymentMethod.prepaid === 'Yes'\">(Prepaid)</span>\n\t</div>\n\t<div class=\"Form-item\">\n\t\t<label class=\"Form-itemLabel\">Card number</label>\n\t\t<span ng-bind=\"$ctrl.paymentMethod.maskedNumber\"></span>\n\t</div>\n\n\t<div class=\"Form-item\">\n\t\t<label class=\"Form-itemLabel\">Expiration date</label>\n\t\t<span ng-bind=\"$ctrl.paymentMethod.expirationDate | date:'MM / y'\"></span>\n\t</div>\n\n\t<div class=\"Form-item\">\n\t\t<label class=\"Form-itemLabel\">Expired</label>\n\t\t<span ng-bind=\"$ctrl.paymentMethod.expired\"></span>\n\t</div>\n\n\t<button class=\"Button Button--primary\"\n\t        ng-if=\"$ctrl.cardButtonVisible\"\n\t        ng-disabled=\"$ctrl.buttonDisabled\"\n\t        ng-click=\"$ctrl.onCardButtonClick({paymentMethod: $ctrl.paymentMethod})\">\n\t\t{{ ($ctrl.buttonDisabled) ? $ctrl.buttonDisabledText : $ctrl.cardButtonText }}\n\t</button>\n\t<a href=\"\"\n\t   ng-if=\"$ctrl.deleteLinkVisible\"\n\t   confirm-message=\"'Are you sure you want to delete this payment method?'\"\n\t   ui-confirm-click=\"$ctrl.onDeleteClick({paymentMethod: $ctrl.paymentMethod})\">{{ $ctrl.deleteLinkText }}</a>\n</div>\n\n<div ng-if=\"$ctrl.paymentMethod.billingAgreementId\">\n\t<!-- Paypal -->\n\t<div class=\"Form-item\">\n\t\t<label class=\"Form-itemLabel\">Type</label>\n\t\t<i class=\"fa fa-cc-paypal\"></i> Paypal\n\t</div>\n\t<div class=\"Form-item\">\n\t\t<label class=\"Form-itemLabel\">Email</label>\n\t\t<span ng-bind=\"$ctrl.paymentMethod.email\"></span>\n\t</div>\n\n\t<button class=\"Button Button--primary\"\n\t        ng-if=\"$ctrl.paypalButtonVisible\"\n\t        ng-disabled=\"$ctrl.buttonDisabled\"\n\t        ng-click=\"$ctrl.onPaypalButtonClick({paymentMethod: $ctrl.paymentMethod})\">\n\t\t{{ ($ctrl.buttonDisabled) ? $ctrl.buttonDisabledText : $ctrl.paypalButtonText }}\n\t</button>\n\t<a href=\"\"\n\t   ng-if=\"$ctrl.deleteLinkVisible\"\n\t   confirm-message=\"'Are you sure you want to delete this payment method?'\"\n\t   ui-confirm-click=\"$ctrl.onDeleteClick({paymentMethod: $ctrl.paymentMethod})\">{{ $ctrl.deleteLinkText }}</a>\n</div>\n"

/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _braintreeHomeHtml = __webpack_require__(141);
	
	var _braintreeHomeHtml2 = _interopRequireDefault(_braintreeHomeHtml);
	
	var _braintreeConstants = __webpack_require__(103);
	
	// Inject dependencies
	
	var Inject = __webpack_require__(83);
	
	var BraintreeHomeComponent = (function () {
		function BraintreeHomeComponent(braintreeDataService, braintreeAppService) {
			_classCallCheck(this, _BraintreeHomeComponent);
	
			this.braintreeDataService = braintreeDataService;
			this.braintreeAppService = braintreeAppService;
	
			this.state = {
				enableWizardMode: false
			};
		}
	
		// Component decorations
	
		// Private methods
		// --------------------------------------------------
	
		_createClass(BraintreeHomeComponent, [{
			key: '$onInit',
			value: function $onInit() {
				this.initFlowMode();
	
				// Init registered customer (debug)
				var customer = {
					//id: '27547087'
					//id: '37312055',
					//id: 'zickread123'
					//id: 'haukur-basic'
					//id: 'haukur-empty'
				};
				this.braintreeDataService.updateCustomerData(customer);
			}
	
			// Public viewModel methods
			// --------------------------------------------------
		}, {
			key: 'initFlowMode',
			value: function initFlowMode() {
				if (this.state.enableWizardMode) {
					this.braintreeDataService.initMode('subscription');
				} else {
					this.braintreeDataService.initMode('standAlone');
				}
			}
		}, {
			key: 'routeTo',
			value: function routeTo(path) {
				this.braintreeAppService.routeTo(path);
			}
		}]);
	
		var _BraintreeHomeComponent = BraintreeHomeComponent;
		BraintreeHomeComponent = Inject('braintreeDataService', 'braintreeAppService')(BraintreeHomeComponent) || BraintreeHomeComponent;
		return BraintreeHomeComponent;
	})();
	
	var component = {
		bindings: {},
		template: _braintreeHomeHtml2['default'],
		controller: BraintreeHomeComponent
	};
	
	// $routeConfig: [
	// 	{path: '/',         name: ROUTES.CUSTOMER_DETAILS,   component: 'braintreeCustomerDetails', useAsDefault: true},
	// 	{path: '/subscribe', name: ROUTES.SUBSCRIPTION,   component: 'braintreeSubscription'},
	// 	{path: '/subscription-overview', name: ROUTES.SUBSCRIPTION_OVERVIEW,   component: 'braintreeSubscriptionOverview'},
	// 	{path: '/customer', name: ROUTES.CUSTOMER,   component: 'braintreeCustomer'},
	// 	{path: '/billing-overview', name: ROUTES.CUSTOMER_DETAILS,   component: 'braintreeCustomerDetails'},
	// 	{path: '/payment-methods', name: ROUTES.PAYMENT_METHODS,   component: 'braintreePaymentMethods'},
	// 	{path: '/cards', name: ROUTES.CARDS,   component: 'braintreeCreditCard'},
	// 	{path: '/paypal', name: ROUTES.PAYPAL,   component: 'braintreePaypal'},
	// 	{path: '/dropin', name: ROUTES.DROPIN,   component: 'braintreeDropin'}
	// ]
	exports['default'] = component;
	module.exports = exports['default'];

/***/ },
/* 141 */
/***/ function(module, exports) {

	module.exports = "<h1 class=\"Heading--one\">Braintree module</h1>\n<hr class=\"Divider--dotted\">\n\n<label>\n\t<input type=\"checkbox\" ng-click=\"$ctrl.initFlowMode()\" ng-model=\"$ctrl.state.enableWizardMode\"> Subscription wizard mode enabled\n</label>\n<p>\n\t<small>Note: Enable this to prevent going to other parts without choosing a the previous step.</small>\n</p>\n\n<div class=\"Page\">\n\t<nav class=\"Page-aside--left\">\n\t\t<ul class=\"Nav Nav--vertical\">\n\t\t\t<li class=\"Nav-item\">\n\t\t\t\t<a class=\"Nav-link\" ng-click=\"$ctrl.routeTo('/billing-overview')\">Billing overview</a>\n\t\t\t</li>\n\t\t\t<li class=\"Nav-item\">\n\t\t\t\t<a class=\"Nav-link\" ng-click=\"$ctrl.routeTo('/subscribe')\">Subscribe</a>\n\t\t\t</li>\n\t\t\t<li class=\"Nav-item\">\n\t\t\t\t<a class=\"Nav-link\" ng-click=\"$ctrl.routeTo('/customer')\">Create Customer</a>\n\t\t\t</li>\n\t\t\t<li class=\"Nav-item\">\n\t\t\t\t<a class=\"Nav-link\" ng-click=\"$ctrl.routeTo('/cards')\">Pay with Credit or Debit Card</a>\n\t\t\t</li>\n\t\t\t<li class=\"Nav-item\">\n\t\t\t\t<a class=\"Nav-link\" ng-click=\"$ctrl.routeTo('/paypal')\">Pay with Paypal</a>\n\t\t\t</li>\n\t\t\t<li class=\"Nav-item\">\n\t\t\t\t<a class=\"Nav-link\" ng-click=\"$ctrl.routeTo('/drop-in')\">Drop-in</a>\n\t\t\t</li>\n\t\t</ul>\n\t</nav>\n\t<main class=\"Page-main\">\n\t\t<div ng-view=\"\"></div>\n\t</main>\n</div>\n\n\n\n"

/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _subscribeViewHtml = __webpack_require__(143);
	
	var _subscribeViewHtml2 = _interopRequireDefault(_subscribeViewHtml);
	
	// Inject dependencies
	
	var Inject = __webpack_require__(83);
	
	var SubscribeViewComponent = (function () {
		function SubscribeViewComponent(braintreeDataService) {
			_classCallCheck(this, _SubscribeViewComponent);
	
			this.braintreeDataService = braintreeDataService;
		}
	
		// Component decorations
	
		// Private methods
		// --------------------------------------------------
	
		_createClass(SubscribeViewComponent, [{
			key: '$onInit',
			value: function $onInit() {
				this.braintreeDataService.initMode('subscription');
				var customer = {};
				if (this.customerData) {
					if (this.customerData.id) {
						customer.id = this.customerData.id;
					}
					if (this.customerData.email) {
						customer.email = this.customerData.email;
					}
					if (this.customerData.firstName) {
						customer.firstName = this.customerData.firstName;
					}
					if (this.customerData.lastName) {
						customer.lastName = this.customerData.lastName;
					}
				}
	
				this.braintreeDataService.updateCustomerData(customer);
	
				// If some overrides or default values set to plans
				// For example when we want
				if (this.customPlansDefaults) {
					this.braintreeDataService.setCustomPlansDefaults(this.customPlansDefaults);
				}
			}
	
			// Public viewModel methods
			// --------------------------------------------------
		}]);
	
		var _SubscribeViewComponent = SubscribeViewComponent;
		SubscribeViewComponent = Inject('braintreeDataService')(SubscribeViewComponent) || SubscribeViewComponent;
		return SubscribeViewComponent;
	})();
	
	var component = {
		bindings: {
			customerData: '<',
			customPlansDefaults: '<'
		},
		template: _subscribeViewHtml2['default'],
		controller: SubscribeViewComponent
	};
	
	exports['default'] = component;
	module.exports = exports['default'];

/***/ },
/* 143 */
/***/ function(module, exports) {

	module.exports = "<div ng-view=\"\"></div>\n"

/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _appModule = __webpack_require__(70);
	
	var _appModule2 = _interopRequireDefault(_appModule);
	
	/**
	 * Manually bootstrap the application when AngularJS and
	 * the application classes have been loaded.
	 */
	angular.element(document).ready(function () {
		var appName = 'braintree-angular-spa.modules.boot';
		var body = document.getElementsByTagName("body")[0];
	
		var app = angular.module(appName, [_appModule2['default'].name]);
		angular.bootstrap(body, [app.name], { strictDi: false });
	});

/***/ }
/******/ ]);
//# sourceMappingURL=braintree-angular-spa-boot.map