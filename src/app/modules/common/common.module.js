import LoadingIconComponent from './presentation/loading-icon/loading-icon.component';
import ToggleDirective from './directives/toggle.directive';
import ConfirmClickDirective from './directives/confirm-click.directive';

let ngModule = angular.module('common', []);

ngModule
	.directive('uiToggle', ToggleDirective)
	.directive('uiConfirmClick', ConfirmClickDirective)
	.component('uiLoadingIcon', LoadingIconComponent)
	.filter('toArray', function () {
		return function (obj, addKey) {
			if (!angular.isObject(obj)) return obj;
			if ( addKey === false ) {
				return Object.keys(obj).map(function(key) {
					return obj[key];
				});
			} else {
				return Object.keys(obj).map(function (key) {
					var value = obj[key];
					return angular.isObject(value) ?
						Object.defineProperty(value, '$key', { enumerable: false, value: key}) :
					{ $key: key, $value: value };
				});
			}
		};
	});

export default ngModule;
