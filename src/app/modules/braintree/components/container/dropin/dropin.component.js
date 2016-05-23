import template from './dropin.html';

// Inject dependencies
@Inject('$http', 'braintreeService')
class DropinComponent {
	constructor() {
		this.message = '';
		this.showDropinContainer = true;
		this.isError = false;
		this.isPaid = false;
	}

	// Private methods
	// --------------------------------------------------
	$onInit() {
		console.log('Braintree Dropin Component...');
		this._getToken();
	}

	_getToken() {
		this.braintreeService.getClientToken().then(
			(response) => {
				console.log('res', response.data);

				this.braintreeService.$braintree.setup(response.data.client_token, 'dropin', {
					// id of html tag for braintree dropin container
					container: 'js-braintree-checkout-container',
					// Form is not submitted by default when paymentMethodNonceReceived is implemented
					paymentMethodNonceReceived: (event, nonce) => {
						this.message = 'Processing your payment...';
						this.showDropinContainer = false;

						let paymentData = {
							amount: this.amount,
							payment_method_nonce: nonce
						};

						// Process payment
						this.braintreeService.processPayment(paymentData).then(
							(response) => {
								console.log('Success:', response.data);

								if (response.data.success) {
									this.message = 'Payment was authorized!';
									this.showDropinContainer = false;
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
								this.showDropinContainer = false;
								this.isError = true;

							});

					}
				});
			},
			(error) => {
				this.message = 'Error: cannot connect to server. Please make sure your server is running. Erromessage: ' + error.data;
				this.showDropinContainer = false;
				this.isError = true;
			});

	}

	// Public viewModel methods
	// --------------------------------------------------
}

// Component decorations
let component = {
	bindings: {},
	template: template,
	controller: DropinComponent
};

export default component;
