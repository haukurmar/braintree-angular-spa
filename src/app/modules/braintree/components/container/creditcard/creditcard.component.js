import template from './creditcard.html';
import {ROUTES} from '../../../braintree.constants';

// Inject dependencies
@Inject('$http', 'braintreeService')
class CreditCardComponent {
	constructor() {
		this.message = '';
		this.loadingText = '';
		this.state = {
			buttonText: 'Pay now',
			error: false,
			hideAmount: false,
			loading: false,
			nextRoute: '',
			showForm: true,
			paid: false
		};
	}

	// Private methods
	// --------------------------------------------------
	$onInit() {
		let mode = this.braintreeService.mode;
		if(mode.subscription) {
			this.state.buttonText = 'Continue';
			this.state.hideAmount = true;
		}

		console.log('Braintree CreditCard Component...');
		if(!customer.clientToken) {
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
		if(mode.subscription) {
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
		this.loadingText = 'Saving payment information...';
		this.state.loading = true;
		this.state.showForm = false;
		let customerId = this.braintreeService.customer.id;

		// Send request to get token, then use the token to tokenize credit card info and verify the card
		this.braintreeService.createVaultedPayment(customerId, paymentModel).then(
			(response) => {
				console.log('from vaultedPayment', response);
				this.state.loading = false;
				this.state.nextRoute = ROUTES.SUBSCRIPTION_OVERVIEW;
				this.$router.navigate([this.state.nextRoute]);
			},
			(error) => {
				this.message = 'An error occurred saving payment information: ' + JSON.stringify(error);
				this.state.loading = false;
			}
		);
	}

	/**
	 * Processes the payment
	 * @param paymentModel
	 */
	processPayment(paymentModel) {
		this.loadingText = 'Processing payment...';
		this.state.loading = true;
		this.state.showForm = false;
		let clientToken = this.braintreeService.customer.clientToken;

		// Use the token to tokenize credit card info and process a transaction
		// Create new client and tokenize card
		let client = new this.braintreeService.$braintree.api.Client({clientToken: clientToken});

		client.tokenizeCard({
			number: paymentModel.creditCardNumber,
			expirationDate: paymentModel.expirationDate,
			cvv: paymentModel.cvv,
		}, (err, nonce) => {
			let paymentData = {
				amount: paymentModel.amount,
				payment_method_nonce: nonce
			};

			this.braintreeService.processPayment(paymentData).then(
				(response) => {
					console.log(response.data.success);
					if (response.data.success) {
						this.message = 'Payment authorized, thanks.';
						this.state.paid = true;
						this.state.error = false;
						this.state.loading = false;
						this.state.showForm = false;
					} else {
						// TODO: Handle different payment failures
						this.message = 'Payment failed: ' + response.data.message + ' Please refresh the page and try again.';
						this.state.error = true;
						this.state.loading = false;
						this.state.showForm = true;
					}
				},
				(error) => {
					this.message = 'Error: cannot connect to server. Please make sure your server is running. Erromessage: ' + error.data;
					this.state.error = true;
					this.state.loading = false;
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
