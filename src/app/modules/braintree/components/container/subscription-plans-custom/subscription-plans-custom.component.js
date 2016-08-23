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
			nextRoute: '',
			selectedCurrency: {
				currencyIsoCode: '',
				currencySymbol: '',
				currencyName: '',
				currencyLongName: ''
			},
			selectedCurrencyModel: null
		};

		this.customPlans = {
			USD: {
				premiumOne: {},
				premiumThree: {},
				premiumSix: {},
				premiumTwelve: {},
				premiumLifetime: {},
			},
			EUR: {
				premiumOne: {},
				premiumThree: {},
				premiumSix: {},
				premiumTwelve: {},
				premiumLifetime: {},
			},
			GBP: {
				premiumOne: {},
				premiumThree: {},
				premiumSix: {},
				premiumTwelve: {},
				premiumLifetime: {},
			},
			ISK: {
				premiumOne: {},
				premiumThree: {},
				premiumSix: {},
				premiumTwelve: {},
				premiumLifetime: {},
			},
		};

		this.plansDisplayed = {
			premiumOne: {},
			premiumThree: {},
			premiumSix: {},
			premiumTwelve: {},
			premiumLifetime: {}
		};

		this.customer = null;

		window.customPlans = this.customPlans;
		this.merchantAccounts = this.braintreeDataService.merchantAccounts;
		this.merchantAccountsArray = this.braintreeDataService.merchantAccountsArray;
		this.selectedMerchantAccount = this.braintreeDataService.selectedMerchantAccount;
	}

	// Private methods
	// --------------------------------------------------
	$onInit() {
		this.customer = this.braintreeDataService.customer;
		if (!this.customer.clientToken) {
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
					switch (plan.id) {
					// USD
					case 'premiumOneUSD':
						this.customPlans.USD.premiumOne = plan;
						break;
					case 'premiumThreeUSD':
						this.customPlans.USD.premiumThree = plan;
						break;
					case 'premiumSixUSD':
						this.customPlans.USD.premiumSix = plan;
						break;
					case 'premiumTwelveUSD':
						this.customPlans.USD.premiumTwelve = plan;
						break;
					case 'premiumLifetimeUSD':
						this.customPlans.USD.premiumLifetime = plan;
						break;

					// EUR
					case 'premiumOneEUR':
						this.customPlans.EUR.premiumOne = plan;
						break;
					case 'premiumThreeEUR':
						this.customPlans.EUR.premiumThree = plan;
						break;
					case 'premiumSixEUR':
						this.customPlans.EUR.premiumSix = plan;
						break;
					case 'premiumTwelveEUR':
						this.customPlans.EUR.premiumTwelve = plan;
						break;
					case 'premiumLifetimeEUR':
						this.customPlans.EUR.premiumLifetime = plan;
						break;

					// GBP
					case 'premiumOneGBP':
						this.customPlans.GBP.premiumOne = plan;
						break;
					case 'premiumThreeGBP':
						this.customPlans.GBP.premiumThree = plan;
						break;
					case 'premiumSixGBP':
						this.customPlans.GBP.premiumSix = plan;
						break;
					case 'premiumTwelveGBP':
						this.customPlans.GBP.premiumTwelve = plan;
						break;
					case 'premiumLifetimeGBP':
						this.customPlans.GBP.premiumLifetime = plan;
						break;

					// ISK
					case 'premiumOneISK':
						this.customPlans.ISK.premiumOne = plan;
						break;
					case 'premiumThreeISK':
						this.customPlans.ISK.premiumThree = plan;
						break;
					case 'premiumSixISK':
						this.customPlans.ISK.premiumSix = plan;
						break;
					case 'premiumTwelveISK':
						this.customPlans.ISK.premiumTwelve = plan;
						break;
					case 'premiumLifetimeISK':
						this.customPlans.ISK.premiumLifetime = plan;
						break;
					}
				});

				this.showSelectedCurrencyPlans(this.selectedMerchantAccount.id);
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

	formatCurrencyAmount(amount, currencyIsoCode) {
		return this.braintreeAppService.formatCurrencyAmount(amount, currencyIsoCode);
	}

	showSelectedCurrencyPlans(merchantAccountId) {
		console.log('this.state.selectedCurrencyModel', this.state.selectedCurrencyModel);

		switch (merchantAccountId) {
		case this.braintreeDataService.merchantAccounts.USD.id:
			this.plansDisplayed = this.customPlans.USD;
			this.braintreeDataService.setSelectedMerchantAccount(this.braintreeDataService.merchantAccounts.USD);
			this.state.selectedCurrency = this.braintreeDataService.merchantAccounts.USD;

			break;

		case this.braintreeDataService.merchantAccounts.EUR.id:
			this.plansDisplayed = this.customPlans.EUR;
			this.braintreeDataService.setSelectedMerchantAccount(this.braintreeDataService.merchantAccounts.EUR);
			this.state.selectedCurrency = this.braintreeDataService.merchantAccounts.EUR;

			break;

		case this.braintreeDataService.merchantAccounts.GBP.id:
			this.plansDisplayed = this.customPlans.GBP;
			this.braintreeDataService.setSelectedMerchantAccount(this.braintreeDataService.merchantAccounts.GBP);
			this.state.selectedCurrency = this.braintreeDataService.merchantAccounts.GBP;
			break;

		case this.braintreeDataService.merchantAccounts.ISK.id:
			this.plansDisplayed = this.customPlans.ISK;
			this.braintreeDataService.setSelectedMerchantAccount(this.braintreeDataService.merchantAccounts.ISK);
			this.state.selectedCurrency = this.braintreeDataService.merchantAccounts.ISK;
			break;
		}
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

	routeTo(path) {
		this.braintreeAppService.routeTo(path);
	}
}

// Component decorations
let component = {
	bindings: {},
	template: template,
	controller: SubscriptionPlansCustomComponent
};

export default component;
