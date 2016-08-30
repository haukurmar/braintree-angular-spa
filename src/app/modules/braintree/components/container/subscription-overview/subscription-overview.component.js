import template from './subscription-overview.html';
import _ from 'underscore';

// Inject dependencies
@Inject('braintreeDataService', 'braintreeAppService')
class SubscriptionOverviewComponent {
	constructor() {
		this.message = '';
		this.loadingText = '';
		this.state = {
			error: false,
			loading: false,
			success: false
		};

		this.subscriptionPlan = null;
		this.selectedSubscription = this.braintreeDataService.selectedSubscription;
		this.selectedMerchantAccount = this.braintreeDataService.selectedMerchantAccount;
	}

	// Private methods
	// --------------------------------------------------
	$onInit() {
		let customer = this.braintreeDataService.customer;
		if (customer.clientToken) {
			this._confirmSubscription();
		}
	}

	// Public viewModel methods
	// --------------------------------------------------
	_confirmSubscription() {
		this.loadingText = 'Creating subscription...';
		this.state.loading = true;

		let subscriptionData = {
			subscription: {
				paymentMethodToken: this.braintreeDataService.customer.paymentMethod.token,
				planId: this.selectedSubscription.id,
				merchantAccountId: this.selectedMerchantAccount.id
			}
		};

		// If billing date is set in the future (for promotions and such)
		if (this.selectedSubscription.firstBillingDate) {
			subscriptionData.subscription.firstBillingDate = this.selectedSubscription.firstBillingDate;
		}

		// Find if there are any currency discounts
		// Note: expects an object like this: which will change to an actual inheritFromId: SomeDiscountCodePrefixUSD for ex.
		// [
		// 	{currencyIsoCode: 'EUR', discountCodePrefix: 'SomeDiscountCodePrefix'},
		// 	{currencyIsoCode: 'USD', discountCodePrefix: 'SomeDiscountCodePrefix'},
		// 	{currencyIsoCode: 'GBP', discountCodePrefix: 'SomeDiscountCodePrefix'},
		// 	{currencyIsoCode: 'ISK', discountCodePrefix: 'SomeDiscountCodePrefix'}
		// ];
		if (this.selectedSubscription.currencyDiscounts && this.selectedSubscription.currencyDiscounts.length) {
			// Get the currencyIsoCode for the selected merchant account
			let selectedCurrency = this.braintreeDataService.getCurrencyForMerchantAccountId(this.selectedMerchantAccount.id);

			// Find the discount for this currency
			let currencyDiscount = _.find(this.selectedSubscription.currencyDiscounts, {currencyIsoCode: selectedCurrency});

			if (currencyDiscount) {
				let discount = {
					inheritedFromId: currencyDiscount.discountCodePrefix + selectedCurrency
				};

				// Add Discount to subscriptionData
				this.braintreeDataService.addDiscountToSelectedSubscription(discount);
			}

		}

		// Adding discount to subscription data
		if (this.selectedSubscription.discounts && this.selectedSubscription.discounts.add && this.selectedSubscription.discounts.add.length) {
			subscriptionData.subscription.discounts = this.selectedSubscription.discounts
		}

		this.braintreeDataService.createSubscription(subscriptionData).then(
			(response) => {
				if (response.data.success) {
					this.state.message = '';
					this.state.success = true;
					this.state.loading = false;
					this.subscriptionPlan = this.selectedSubscription; // TODO: should this not take response object instead?

					// Clear the selected subscription which has now been created
					this.braintreeDataService.initSelectedSubscriptionData();

					// Clear the customer data
					//this.braintreeDataService.initCustomerData();
				} else {
					console.log('Error creating a sub', response.data.message);
					// TODO: Handle different failures maybe?
					this.message = 'An error occurred creating a subscription: ' + response.data.message;
					this.state.loading = false;
				}
			},
			(error) => {
				console.log('Error creating a subcription', error);
				this.message = error.data.message;
				this.state.loading = false;
			}
		);
	}

	routeTo(path) {
		return this.braintreeAppService.routeTo(path);
	}
}

// Component decorations
let component = {
	bindings: {},
	template: template,
	controller: SubscriptionOverviewComponent
};

export default component;
