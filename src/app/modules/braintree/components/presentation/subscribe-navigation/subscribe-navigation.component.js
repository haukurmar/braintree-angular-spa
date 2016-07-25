import template from './subscribe-navigation.html';

// Component decorations
let component = {
	bindings: {
		selectedRoute: '<',
		routeTo: '&'
	},
	template : template
};

export default component;
