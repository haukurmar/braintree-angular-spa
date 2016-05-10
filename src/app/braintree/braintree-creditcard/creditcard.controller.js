// Inject dependencies
@Inject('$http', 'braintreeService')
export default class CreditCardComponent {
	constructor() {
		this.message = 'Please use the form below to pay:';
		this.isError = false;
		this.isPaid = false;
		this.showForm = true;
		this.checkout = null;

		this._activate();
	}

	// Private methods
	// --------------------------------------------------
	_activate() {
		console.log('Braintree CreditCard Component...');
		this._setupGateway();
	}

	_setupGateway() {
		this.braintreeService.getClientToken().then(
			(response) => {
				let ctrl = this;
				this.braintreeService.$braintree.setup(response.data.client_token, "custom", {
					id: 'js-customPayment', // the id of the form
					//enableCORS: true,
					onReady: function (integration) {
						console.log('Integration ready: ', integration, ctrl);
						ctrl.checkout = integration;
					},
					onPaymentMethodReceived: function (payload) {
						// retrieve nonce from payload.nonce
						console.log('retrieve nonce from payload.nonce', payload);
					},
					paypal: {
						singleUse: true,
						amount: ctrl.amount,
						currency: 'USD',
						locale: 'en_us',
						enableShippingAddress: true,
						headless: true
					}
				});
			},
			(error) => {
				// TODO: Handle errors better and/or better error display
				this.message = 'Error: cannot connect to server. Please make sure your server is running. Erromessage: ' + error.data;
				this.isError = true;
				this.showForm = false;
			}
		);
	}

	// Public viewModel methods
	// --------------------------------------------------
	usePaypal(event) {
		event.preventDefault();
		console.log('this.checkout', this.checkout);
		this.checkout.paypal.initAuthFlow();
	}

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
