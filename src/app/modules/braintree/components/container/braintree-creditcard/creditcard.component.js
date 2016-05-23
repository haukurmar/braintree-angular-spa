import template from './creditcard.html';

// Inject dependencies
@Inject('$http', 'braintreeService')
class CreditCardComponent {
	constructor() {
		this.message = '';
		this.loadingText = '';
		this.state = {
			loading: false,
			showForm: true,
			error: false,
			paid: false
		};
	}

	// Private methods
	// --------------------------------------------------
	$onInit() {
		console.log('Braintree CreditCard Component...');
	}

	// Public viewModel methods
	// --------------------------------------------------
	processPayment(paymentModel) {
		this.loadingText = 'Processing payment...';
		this.state.loading = true;
		this.state.showForm = false;

		// Send request to get token, then use the token to tokenize credit card info and process a transaction
		this.braintreeService.getClientToken().then(
			(response) => {
				// Create new client and tokenize card
				let client = new this.braintreeService.$braintree.api.Client({clientToken: response.data.client_token});

				client.tokenizeCard({
					number: paymentModel.creditCardNumber,
					expirationDate: paymentModel.expirationDate
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
			},
			(error) => {
				this.message = 'Error: cannot connect to server. Please make sure your server is running. Erromessage: ' + error.data;
				this.state.error = true;
				this.state.loading = false;
				this.state.showForm = false;
			}
		);
	}
}

// Component decorations
let component = {
	bindings: {},
	template: template,
	controller: CreditCardComponent
};

export default component;
