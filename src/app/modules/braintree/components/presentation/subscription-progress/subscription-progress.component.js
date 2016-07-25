import template from './subscription-progress.html';

// Component decorations
let component = {
	bindings: {
		subscriptionPlan: '<',
		subscriptionRoute: '<',
		routeTo: '&'
	},
	template: template
};

export default component;
