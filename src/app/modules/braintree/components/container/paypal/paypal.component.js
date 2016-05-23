import template from './paypal.html';

// Inject dependencies
@Inject('braintreeService')
class PaypalComponent {
	constructor() {
		this._checkout = null;

	}

	// Private methods
	// --------------------------------------------------
	$onInit() {
		let customer = this.braintreeService.customer;
		console.log('customer', customer);

		this.braintreeService.getClientToken().then(
			(response) => {

				this.braintreeService.$braintree.setup(response.data.client_token, "custom", {
					paypal: {
						// singleUse: false,
						// amount: 10.00,
						// currency: 'USD',
						// locale: 'en_us',
						enableShippingAddress: true,
						headless: true
					},
					onReady: (integration) => {
						console.log('Paypal is ready');
						this._checkout = integration;
					},
					onAuthorizationDismissed: (obj) => {
						console.log('onAuthorizationDismissed', obj);
					},
					onPaymentMethodReceived: (obj) => {
						let paymentMethodModel = {
							customerId: this.braintreeService.customer.id,
							paymentMethodNonce: obj.nonce
						};

						console.log('paymentMethodModel:', paymentMethodModel);

						this.braintreeService.createPaymentMethod(paymentMethodModel).then(
							(response) => {
								this.braintreeService.updateCustomer(response.data.customer);
								console.log('Paypal Payment method created!', response);
							},
							(error) => {
								console.log('Failed to create payment method:', error);
							}
						);
						console.log('onPaymentMethodReceived', obj);

						//doSomethingWithTheNonce(obj.nonce);
					}
				});

				let customer = {
					clientToken: response.data.client_token
				};

				this.braintreeService.updateCustomer(customer);
			}
		);
	}

	pay(event) {
		this._checkout.paypal.initAuthFlow();
	}

	// Public viewModel methods
	// --------------------------------------------------
}

// Component decorations
let component = {
	bindings: {},
	template : template,
	controller: PaypalComponent
};

export default component;
