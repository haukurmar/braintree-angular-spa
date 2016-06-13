import LoadingIconComponent from './presentation/loading-icon/loading-icon.component';
import ToggleDirective from './directives/toggle.directive';

let ngModule = angular.module('common', []);

ngModule
	.directive('uiToggle', ToggleDirective)
	.component('uiLoadingIcon', LoadingIconComponent);

export default ngModule;
