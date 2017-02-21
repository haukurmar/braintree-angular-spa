import template from './subscription-overview.html';
import {ROUTES, GATEWAY_ERRORS} from '../../../braintree.constants';
import _ from 'underscore';

// Inject dependencies
@Inject('braintreeDataService', 'braintreeAppService', '$translate')
class SubscriptionOverviewComponent {
	constructor() {
		this.state = {
			loading: {
				isLoading: false,
				text: ''
			},
			message: {
				text: '',
				link: '',
				linkText: '',
				descriptionHtml: '',
				type: ''
			},
			error: false,
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

	_clearMessage() {
		this.state.message.text = '';
	}

	_displayMessage(type, resourceString, extraText, descriptionHtml, linkResourceString, linkRoute) {
		this.state.message.type = type;

		if(resourceString) {
			this.$translate(resourceString).then((value) => {this.state.message.text = value + extraText});
		} else {
			this.state.message.text = extraText;
		}

		if(linkResourceString) {
			this.$translate(resourceString).then((value) => {this.state.message.linkText = value});
			this.state.message.link = linkRoute;
		}

		this.state.message.descriptionHtml = descriptionHtml;
	}

	_startLoading(resourceString) {
		this.state.loading.isLoading = true;
		this.$translate(resourceString).then((value) => {this.state.loading.text = value});
	}

	_stopLoading() {
		this.state.loading.isLoading = false;
		this.state.loading.text = '';
	}

	// Public viewModel methods
	// --------------------------------------------------
	_confirmSubscription() {
		this._startLoading('subscription.loading.CREATING_SUBSCRIPTION');

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
					this._clearMessage();
					this._stopLoading();
					this.state.success = true;
					this.subscriptionPlan = this.selectedSubscription; // TODO: should this not take response object instead?

					// Clear the selected subscription which has now been created
					this.braintreeDataService.initSelectedSubscriptionData();
				} else {
					// TODO: Handle different failures maybe?
					this._displayMessage('warning', 'subscription.message.ERROR_CREATING_SUBSCRIPTION', response.data.message, null, 'subscription.button.START_OVER', ROUTES.SUBSCRIPTION);
					this._stopLoading();
				}
			},
			(error) => {
				let errorMessage = error.data.message;
				let errorDescription;

				if (error.data.transaction) {
					// Find detailed error message
					let gatewayError = _.find(GATEWAY_ERRORS, (errorItem) => {
						return errorItem.code === error.data.transaction.processorResponseCode;
					});

					if (gatewayError) {
						errorMessage = gatewayError.text;
						errorDescription = gatewayError.description;
					}
				}

				this._displayMessage('warning', 'subscription.message.ERROR_CREATING_SUBSCRIPTION', errorMessage + ' ' + errorDescription, 'subscription.button.START_OVER', ROUTES.SUBSCRIPTION);
				this._stopLoading();
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
