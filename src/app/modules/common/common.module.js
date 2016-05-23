import LoadingIconComponent from './presentation/loading-icon/loading-icon.component';

let ngModule = angular.module('common', []);

ngModule
	.component('uiLoadingIcon', LoadingIconComponent);

export default ngModule;
