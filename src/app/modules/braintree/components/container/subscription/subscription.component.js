import template from './subscription.html';
import {ROUTES} from '../../../braintree.constants';

// Inject dependencies
@Inject('braintreeService')
class SubscribeComponent {
	constructor() {
		this.message = '';
		this.loadingText = '';
		this.plans = [];
		this.state = {
			error: false,
			loading: false,
			nextRoute: ''
		};

		this.customer = null;
	}

	// Private methods
	// --------------------------------------------------
	$onInit() {
		this.customer = this.braintreeService.customer;
		if(!this.customer.clientToken) {
			this.braintreeService.setup();
		}

		this._getAllSubscriptionPlans();
	}

	_getAllSubscriptionPlans() {
		this.state.loading = true;
		this.loadingText = 'Fetching subscription plans...';

		this.braintreeService.getAllSubscriptionPlans().then(
			(response) => {
				this.plans = response.data.plans;
				this.state.loading = false;
			},
			(error) => {
				// TODO: Notify development team or do it via api
				this.message = 'Unable to get subscription plans, the development team has been notified, please try again later.';
				this.state.loading = false;
				this.state.error = true;
			}
		);
	}

	// Public viewModel methods
	// --------------------------------------------------
	chooseSubscriptionPlan(subscriptionPlanModel) {
		console.log('plan chosen', subscriptionPlanModel);

		// TODO: Fix If a customer is already signed in and has a subscription plan
		let customer = {
			//newSubscriptionPlan: subscriptionPlanModel
			subscriptionPlan: subscriptionPlanModel
		};
		this.braintreeService.updateCustomerData(customer);

		this.state.nextRoute = ROUTES.CUSTOMER;
		this.$router.navigate([this.state.nextRoute]);
	}
}

// Component decorations
let component = {
	bindings: {
		$router: '<'
	},
	template: template,
	controller: SubscribeComponent
};

export default component;
