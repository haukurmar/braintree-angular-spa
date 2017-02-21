import template from './subscription-plans.html';
import {ROUTES} from '../../../braintree.constants';

// Inject dependencies
@Inject('braintreeDataService', 'braintreeAppService', '$translate')
class SubscriptionPlansComponent {
	constructor() {
		this.plans = [];
		this.state = {
			loading: {
				isLoading: false,
				text: ''
			},
			message: {
				text: '',
				link: '',
				linkText: '',
				descriptionHtml:'',
				type: ''
			},
			nextRoute: ''
		};

		this.customer = null;
		this.selectedSubscription = {};
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

	_displayMessage(type, resourceString, extraText, descriptionHtml) {
		this.state.message.type = type;
		if(resourceString) {
			this.$translate(resourceString).then((value) => {this.state.message.text = value + extraText});
		} else {
			this.state.message.text = extraText;
		}

		this.state.message.descriptionHtml = descriptionHtml;
	}

	_getAllSubscriptionPlans() {
		this._startLoading('subscription.loading.FETCING_SUBSCRIPTION_PLANS');

		this.braintreeDataService.getAllSubscriptionPlans().then(
			(response) => {
				this.plans = response.data.plans;
				this.state.loading = false;
			},
			(error) => {
				// TODO: Notify development team or do it via api
				this._stopLoading();
				this._displayMessage('warning', 'subscription.message.ERROR_FETCHING_SUBSCRIPTION_PLANS');
			}
		);
	}

	// Public viewModel methods
	// --------------------------------------------------
	chooseSubscriptionPlan(subscriptionPlanModel) {
		//console.log('plan chosen', subscriptionPlanModel);
		this.braintreeDataService.initSelectedSubscriptionData();
		this.braintreeDataService.updateSelectedSubscription(subscriptionPlanModel);

		this.state.nextRoute = ROUTES.CUSTOMER;

		this.routeTo(ROUTES.CUSTOMER);
	}

	formatCurrencyAmount(amount, currencyIsoCode) {
		return this.braintreeAppService.formatCurrencyAmount(amount, currencyIsoCode);
	}

	routeTo(path){
		this.braintreeAppService.routeTo(path);
	}

	_startLoading(resourceString) {
		this.state.loading.isLoading = true;
		this.$translate(resourceString).then((value) => {this.state.loading.text = value});
	}

	_stopLoading() {
		this.state.loading.isLoading = false;
		this.state.loading.text = '';
	}

}

// Component decorations
let component = {
	bindings: {

	},
	template: template,
	controller: SubscriptionPlansComponent
};

export default component;
