import braintree from 'braintree-web';
// Inject dependencies
@Inject('$http', 'braintreeService')
export default class CreditCardComponent {
	constructor() {
		this.apiUrl = this.braintreeService.apiUrl;

		this.message = 'Please use the form below to pay:';
		this.isError = false;
		this.isPaid = false;
		this.showForm = true;

		this._activate();
	}

	// Private methods
	// --------------------------------------------------
	_activate() {
		console.log('Braintree CreditCard Component...');
	}

	// Public viewModel methods
	// --------------------------------------------------
	processPayment() {
		let tokenApiPath = '/v1/token';
		let processApiPath = '/v1/process';
		this.message = 'Processing payment...';
		this.showForm = false;

		// Send request to get token, then use the token to tokenize credit card info and process a transaction
		this.$http.post(this.apiUrl + tokenApiPath).then(
			(response) => {
				// Create new client and tokenize card
				let client = new braintree.api.Client({clientToken: response.data.client_token});

				client.tokenizeCard({
					number: this.creditCardNumber,
					expirationDate: this.expirationDate
				}, (err, nonce) => {
					let data = {
						amount: this.amount,
						payment_method_nonce: nonce
					};

					this.$http.post(this.apiUrl + processApiPath, data).then(
						(response) => {
							console.log(response.data.success);
							this.showForm = false;

							if (response.data.success) {
								this.message = 'Payment authorized, thanks.';
								this.isError = false;
								this.isPaid = true;

							} else {
								// implement your solution to handle payment failures
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
