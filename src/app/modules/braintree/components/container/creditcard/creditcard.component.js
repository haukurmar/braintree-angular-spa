import template from './creditcard.html';
import {ROUTES} from '../../../braintree.constants';

// Inject dependencies
@Inject('$http', 'braintreeService')
class CreditCardComponent {
	constructor() {
		this.state = {
			buttonText: 'Pay now',
			error: false,
			hideAmount: false,
			message: {
				text: '',
				link: '',
				linkText: ''
			},
			loading: {
				isLoading: false,
				text: ''
			},
			paid: false,
			showForm: true
		};

		// Used in template
		this.routes = {
			subscription: ROUTES.SUBSCRIPTION
		};

		this.customer = null;

	}

	// Private methods
	// --------------------------------------------------
	$onInit() {
		this.customer = this.braintreeService.customer;

		let mode = this.braintreeService.mode;
		if (mode.subscription) {
			this.state.buttonText = 'Continue';
			this.state.hideAmount = true;

			// If the user has not chosen a subscription plan (or refreshed the page)
			if (!this.customer.subscriptionPlan) {
				this.$router.navigate([ROUTES.SUBSCRIPTION]);
			}

			// If the user has no customer ID
			if (!this.customer.id) {
				this.$router.navigate([ROUTES.CUSTOMER]);
			}
		}

		console.log('Braintree CreditCard Component...');
		if (!customer.clientToken) {
			this.braintreeService.getClientToken().then(
				(response) => {
					this.braintreeService.$braintree.setup(response.data.client_token, "custom");
					let customer = {
						clientToken: response.data.client_token
					};

					this.braintreeService.updateCustomerData(customer);
				}
			);
		}
	}

	// Public viewModel methods
	// --------------------------------------------------
	/**
	 * Determine whether to store payment method to vault or to process payment right away
	 * @param paymentModel
	 */
	submitPayment(paymentModel) {
		let mode = this.braintreeService.mode;
		if (mode.subscription) {
			this.createVaultedPayment(paymentModel);
		} else {
			this.processPayment(paymentModel);
		}
	}

	/**
	 * Creates a saved paymentMethod to the vault and then redirects to SubscriptionOverview
	 * @param paymentModel
	 */
	createVaultedPayment(paymentModel) {
		this.state.loading.text = 'Saving payment information...';
		this.state.loading.isLoading = true;
		this.state.showForm = false;
		let customerId = this.braintreeService.customer.id;

		// Send request to get token, then use the token to tokenize credit card info and verify the card
		this.braintreeService.createVaultedPayment(customerId, paymentModel).then(
			(response) => {
				console.log('from vaultedPayment', response);
				this.state.loading.isLoading = false;
				this.state.nextRoute = ROUTES.SUBSCRIPTION_OVERVIEW;
				this.$router.navigate([this.state.nextRoute]);
			},
			(error) => {
				this.state.message.text = 'An error occurred saving payment information: ' + JSON.stringify(error);
				this.state.loading.isLoading = false;
			}
		);
	}

	/**
	 * Processes the payment
	 * @param paymentModel
	 */
	processPayment(paymentModel) {
		this.state.loading.text = 'Processing payment...';
		this.state.loading.isLoading = true;
		this.state.showForm = false;
		let clientToken = this.braintreeService.customer.clientToken;

		// Use the token to tokenize credit card info and process a transaction
		// Create new client and tokenize card
		let client = new this.braintreeService.$braintree.api.Client({clientToken: clientToken});

		client.tokenizeCard({
			number: paymentModel.creditCardNumber,
			expirationDate: paymentModel.expirationDate,
			cvv: paymentModel.cvv
		}, (err, nonce) => {
			let paymentData = {
				amount: paymentModel.amount,
				payment_method_nonce: nonce
			};

			this.braintreeService.processPayment(paymentData).then(
				(response) => {
					console.log(response.data.success);
					if (response.data.success) {
						this.state.message.text = 'Payment authorized, thanks.';
						this.state.paid = true;
						this.state.error = false;
						this.state.loading.isLoading = false;
						this.state.showForm = false;
					} else {
						// TODO: Handle different payment failures
						this.state.message.text = 'Payment failed: ' + response.data.message + ' Please refresh the page and try again.';
						this.state.error = true;
						this.state.loading.isLoading = false;
						this.state.showForm = true;
					}
				},
				(error) => {
					this.state.message.text = 'Error: cannot connect to server. Please make sure your server is running. Erromessage: ' + error.data;
					this.state.error = true;
					this.state.loading.isLoading = false;
					this.state.showForm = true;
				}
			);
		})
	}
}

// Component decorations
let component = {
	bindings: {
		$router: '<'
	},
	template: template,
	controller: CreditCardComponent
};

export default component;
