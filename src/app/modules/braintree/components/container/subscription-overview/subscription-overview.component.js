import template from './subscription-overview.html';

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
		if(customer.clientToken) {
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
		if(this.selectedSubscription.firstBillingDate) {
			subscriptionData.subscription.firstBillingDate = this.selectedSubscription.firstBillingDate;
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

	routeTo(path){
		return this.braintreeAppService.routeTo(path);
	}
}

// Component decorations
let component = {
	bindings: {},
	template : template,
	controller: SubscriptionOverviewComponent
};

export default component;
