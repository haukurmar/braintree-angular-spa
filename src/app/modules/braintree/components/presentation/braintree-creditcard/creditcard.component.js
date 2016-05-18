import template from './creditcard.html';

// Inject dependencies
@Inject('$http', 'braintreeService')
class CreditCardComponent {
	constructor() {
		this.message = 'Please use the form below to pay:';
		this.isError = false;
		this.isPaid = false;
		this.showForm = true;
	}

	// Private methods
	// --------------------------------------------------
	$onInit() {
		console.log('Braintree CreditCard Component...');
	}

	// Public viewModel methods
	// --------------------------------------------------
	processPayment() {
		this.message = 'Processing payment...';
		this.showForm = false;

		// Send request to get token, then use the token to tokenize credit card info and process a transaction
		this.braintreeService.getClientToken().then(
			(response) => {
				// Create new client and tokenize card

				let client = new this.braintreeService.$braintree.api.Client({clientToken: response.data.client_token});

				client.tokenizeCard({
					number: this.creditCardNumber,
					expirationDate: this.expirationDate
				}, (err, nonce) => {

					let paymentData = {
						amount: this.amount,
						payment_method_nonce: nonce
					};

					this.braintreeService.processPayment(paymentData).then(
						(response) => {
							console.log(response.data.success);
							this.showForm = false;

							if (response.data.success) {
								this.message = 'Payment authorized, thanks.';
								this.isError = false;
								this.isPaid = true;

							} else {
								// TODO: Handle different payment failures
								this.message = 'Payment failed: ' + response.data.message + ' Please refresh the page and try again.';
								this.isError = true;
							}

						},
						(error) => {
							this.message = 'Error: cannot connect to server. Please make sure your server is running. Erromessage: ' + error.data;
							this.isError = true;
							this.showForm = false;
						}
					);
				})
			},
			(error) => {
				this.message = 'Error: cannot connect to server. Please make sure your server is running. Erromessage: ' + error.data;
				this.isError = true;
				this.showForm = false;
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
