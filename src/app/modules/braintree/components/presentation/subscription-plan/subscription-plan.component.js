import template from './subscription-plan.html';

// Inject dependencies
@Inject()
class SubscriptionPlanComponent {
	constructor() {
	}

	// Private methods
	// --------------------------------------------------
	$onInit() {
	}

	// Public viewModel methods
	// --------------------------------------------------
}

// Component decorations
let component = {
	bindings: {
		buttonCssModifier: '<',
		buttonText: '<',
		subscriptionPlan: '<',
		onChoose: '&'
	},
	template : template,
	controller: SubscriptionPlanComponent
};

export default component;
