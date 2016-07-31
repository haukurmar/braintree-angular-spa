import template from './subscription-plans-custom.html';
import {ROUTES} from '../../../braintree.constants';
import _ from 'underscore';

/**
 * This is a specific implementation to display only a set of predefined subscription plans
 * No Reusability here
 * To be removed later.
 */

// Inject dependencies
@Inject('braintreeDataService', 'braintreeAppService')
class SubscriptionPlansCustomComponent {
	constructor() {
		this.message = '';
		this.loadingText = '';
		this.plans = [];
		this.state = {
			error: false,
			loading: false,
			nextRoute: ''
		};

		this.customPlans = {
			premiumOne: {},
			premiumThree: {},
			premiumSix: {},
			premiumTwelve: {},
			premiumLifetime: {},
		};

		this.customer = null;

		window.customPlans = this.customPlans;
	}

	// Private methods
	// --------------------------------------------------
	$onInit() {
		this.customer = this.braintreeDataService.customer;
		if(!this.customer.clientToken) {
			this.braintreeDataService.setup();
		}

		this._getAllSubscriptionPlans();
	}

	_getAllSubscriptionPlans() {
		this.state.loading = true;
		this.loadingText = 'Fetching subscription plans...';

		this.braintreeDataService.getAllSubscriptionPlans().then(
			(response) => {
				this.plans = response.data.plans;

				_.each(response.data.plans, (plan) => {
					switch(plan.id) {
					case 'premiumOne':
						this.customPlans.premiumOne = plan;
						break;
					case 'premiumThree':
						this.customPlans.premiumThree = plan;
						break;
					case 'premiumSix':
						this.customPlans.premiumSix = plan;
						break;
					case 'premiumTwelve':
						this.customPlans.premiumTwelve = plan;
						break;
					case 'premiumLifetime':
						this.customPlans.premiumLifetime = plan;
						break;
					}
				});

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
		this.braintreeDataService.updateCustomerData(customer);

		this.state.nextRoute = ROUTES.CUSTOMER;

		this.routeTo(ROUTES.CUSTOMER);
	}

	routeTo(path){
		this.braintreeAppService.routeTo(path);
	}
}

// Component decorations
let component = {
	bindings: {

	},
	template: template,
	controller: SubscriptionPlansCustomComponent
};

export default component;
