import braintree from 'braintree-web';
// Inject dependencies
@Inject('$http', 'braintreeService')
export default class DropinComponent {
	constructor() {
		this.apiUrl = this.braintreeService.apiUrl;

		this.message = 'Please use the form below to pay:';
		this.showDropinContainer = true;
		this.isError = false;
		this.isPaid = false;

		this._activate();
	}

	// Private methods
	// --------------------------------------------------
	_activate() {
		console.log('Braintree Dropin Component...');
		this._getToken();
	}

	_getToken() {
		let tokenApiPath = '/v1/token';
		let processApiPath = '/v1/process';

		this.$http.post(this.apiUrl + tokenApiPath).then(
			(response) => {
				console.log('res', response.data);

				braintree.setup(response.data.client_token, 'dropin', {
					// id of html tag for braintree dropin container
					container: 'js-braintree-checkout-container',
					// Form is not submitted by default when paymentMethodNonceReceived is implemented
					paymentMethodNonceReceived: (event, nonce) => {
						this.message = 'Processing your payment...';
						this.showDropinContainer = false;

						this.$http({
							method: 'POST',
							url: this.apiUrl + processApiPath,
							data: {
								amount: this.amount,
								payment_method_nonce: nonce
							}
						}).success((data) => {

							console.log('Success:', data);

							if (data.success) {
								this.message = 'Payment was authorized!';
								this.showDropinContainer = false;
								this.isError = false;
								this.isPaid = true;

							} else {
								// implement your solution to handle payment failures
								this.message = 'Payment failed: ' + data.message + ' Please refresh the page and try again.';
								this.isError = true;
							}

						}).error((error) => {
							this.message = 'Error: cannot connect to server. Please make sure your server is running.';
							this.showDropinContainer = false;
							this.isError = true;
						});

					}
				});
			},
			(error) => {
				this.message = 'Error: cannot connect to server. Please make sure your server is running.';
				this.showDropinContainer = false;
				this.isError = true;
			});

	}

	// Public viewModel methods
	// --------------------------------------------------
}
