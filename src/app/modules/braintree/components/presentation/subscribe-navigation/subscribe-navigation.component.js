import template from './subscribe-navigation.html';

// Component decorations
let component = {
	bindings: {
		$router: '<',
		selectedRoute: '<'
	},
	template : template
};

export default component;
