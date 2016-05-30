import template from './subscribe.html';

// Inject dependencies
@Inject('braintreeService')
class SubscribeComponent {
	constructor() {
		this.message = '';
		this.loadingText = '';
		this.plans = [];
		this.state = {
			error: false,
			showCustomerForm: false,
			showCreditCardForm: false,
			showPlans: true,
			showPaymentMethods: false,
			showPaypal: false,
			showPaypalButton: false,
			showConfirmPanel: false,
			loading: false
		};

		this.selectedSubscriptionPlan = {};

		this.customerId = '';
	}

	// Private methods
	// --------------------------------------------------
	$onInit() {
		this.braintreeService.setup();

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
				this.message = 'Unable to get subscription plans, the development team has been notified, please try again later.';
				this.state.loading = false;
				this.state.error = true;
			}
		);
	}

	confirmSubscription() {
		this.loadingText = 'Creating subscription...';
		this.state.loading = true;

		let customer = this.braintreeService.customer;

		this.braintreeService.createSubscription().then(
			(response) => {
				if (response.data.success) {
					this.message = 'Subscription was created!';
					this.state.loading = false;
					this.state.showConfirmPanel = false;
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

	// Public viewModel methods
	// --------------------------------------------------
	chooseSubscriptionPlan(subscriptionPlanModel) {
		console.log('plan chosen', subscriptionPlanModel);

		let customer = {
			subscriptionPlan: subscriptionPlanModel
		};
		this.braintreeService.updateCustomer(customer);

		if (this.customerId) {
			//Get Customer if logged in
			this.braintreeService.getCustomer(this.customerId).then(
				(response) => {
					console.log('success', response);
					this.braintreeService.updateCustomer(response.data.customer);
				},
				(error) => {
					console.log(error.data.message);
				}
			);
		}

		this.state.showPlans = false;
		this.state.showCustomerForm = true;
		this.selectedSubscriptionPlan = subscriptionPlanModel;

		//this.$router.navigate(['Customer']);
	}

	choosePaymentMethod(type) {
		if (type === 'creditcard') {
			this.state.showCreditCardForm = true;
			this.state.showPaypal = false;
		} else if (type === 'paypal') {
			this.state.showCreditCardForm = false;
			this.state.showPaypal = true;
		}

		//this.state.showPaymentMethods = false;
	}

	createCustomer(customerModel) {
		this.loadingText = 'Creating customer...';
		this.state.loading = true;

		this.braintreeService.createCustomer(customerModel).then(
			(response) => {
				this.state.loading = false;
				this.state.showCustomerForm = false;
				this.state.showPaymentMethods = true;
				this.braintreeService.updateCustomer(response.data.customer);
			},
			(error) => {
				this.message = error.data.message;
				this.state.loading = false;
				this.state.showCustomerForm = true;

				console.log('Error message', error.data.message);
				console.log('Errors:', error.data.errors);
			}
		);
	}

	createVaultedPayment(paymentModel) {
		let customerId = this.braintreeService.customer.id;
		this.loadingText = 'Saving payment information...';
		this.state.loading = true;

		// Send request to get token, then use the token to tokenize credit card info and verify the card
		this.braintreeService.createVaultedPayment(customerId, paymentModel).then(
			(response) => {
				console.log('from vaultedPayment', response);
				this.state.loading = false;
				this.state.showCreditCardForm = false;
				this.state.showConfirmPanel = true;
			},
			(error) => {
				this.message = 'An error occurred saving payment information: ' + JSON.stringify(error);
				this.state.loading = false;
			}
		);
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
