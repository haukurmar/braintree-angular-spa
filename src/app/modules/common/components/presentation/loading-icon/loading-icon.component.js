import template from './loading-icon.html';

// Component decorations
let component = {
	bindings: {
		iconModifier: '<',
		size: '<',
		text: '<',
		visible: '<'
	},
	template : template
};

export default component;
