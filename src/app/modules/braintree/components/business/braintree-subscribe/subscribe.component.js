import template from './subscribe.html';

// Inject dependencies
@Inject('braintreeService')
class SubscribeComponent {
	constructor() {
		this.state = {
			showCustomerForm: true,
			showCreditCardForm: false,
			showPaypalButton: false,
			showMessage: false
		}
	}

	// Private methods
	// --------------------------------------------------
	$onInit() {

	}

	// Public viewModel methods
	// --------------------------------------------------
	createCustomer(customerModel) {
		console.log('Creating customer from subscribe', customerModel);
		this.message = 'Creating customer...';
		this.state.showMessage = true;
		this.state.showCustomerForm = false;

		this.braintreeService.createCustomer(customerModel).then(
			(success) => {
				console.log('Customer created: ' + JSON.stringify(success.data));
				this.message = '';
				this.state.showCreditCardForm = true;
			},
			(error) => {
				this.message = error.data.message;
				this.state.showMessage = true;
				this.state.showCustomerForm = true;

				console.log('Error message', error.data.message);
				console.log('Errors:', error.data.errors);
			}
		);
	}

	processPayment(cardModel) {
		this.message = 'Processing payment...';
		this.state.showCreditCardForm = false;

		// Send request to get token, then use the token to tokenize credit card info and process a transaction
		this.braintreeService.getClientToken().then(
			(response) => {
				// TODO: Use Existing customer that was created in last step

				// Create new client and tokenize card
				let client = new this.braintreeService.$braintree.api.Client({clientToken: response.data.client_token});

				client.tokenizeCard({
					number: cardModel.creditCardNumber,
					expirationDate: cardModel.expirationDate
				}, (err, nonce) => {
					// TODO: Handle errors better
					if (err) {
						this.message = 'An error occurred tokenizing card: ' + JSON.stringify(err);
						this.state.showCreditCardForm = true;
						return;
					}

					let paymentData = {
						amount: cardModel.amount,
						payment_method_nonce: nonce
					};

					// Process payment
					this.braintreeService.processPayment(paymentData).then(
						(response) => {
							if (response.data.success) {
								this.message = 'Payment was authorized!';
								this.isError = false;
								this.isPaid = true;

							} else {
								// TODO: Handle different payment failures
								this.message = 'Payment failed: ' + response.data.message + ' Please refresh the page and try again.';
								this.isError = true;
								this.state.showCreditCardForm = true;
							}

						},
						(error) => {
							this.message = 'Error: cannot connect to server. Please try again. Erromessage: ' + error.data;
							this.isError = true;
							this.state.showCreditCardForm = true;
						}
					);
				})
			},
			(error) => {
				this.message = 'Error: cannot connect to server. Please try again. Erromessage: ' + error.data;
				this.isError = true;
				this.state.showCreditCardForm = true;
			}
		);
	}
}

// Component decorations
let component = {
	bindings: {},
	template: template,
	controller: SubscribeComponent
};

export default component;
