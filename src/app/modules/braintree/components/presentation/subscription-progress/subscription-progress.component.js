import template from './subscription-progress.html';

// Component decorations
let component = {
	bindings: {
		subscriptionPlan: '<',
		subscriptionRoute: '<'
	},
	template: template
};

export default component;
