import template from './paypal-button.html';
import {ROUTES} from '../../../braintree.constants';

// Inject dependencies
@Inject('braintreeService')
class PaypalButtonComponent {
	constructor() {
		this._checkout = null;
		this.state = {
			message: {
				text: ''
			}
		};

		this.customer = null;
	}

	// Private methods
	// --------------------------------------------------
	$onInit() {
		this.customer = this.braintreeService.customer;

		if(!this.braintreeService.customer.clientToken) {
			this.braintreeService.getClientToken().then(
				(response) => {
					let customer = {
						clientToken: response.data.client_token
					};
					this.braintreeService.updateCustomerData(customer);
					this._setupPaypal(customer.clientToken);
				}
			);
		} else {
			this._setupPaypal(this.braintreeService.customer.clientToken);
		}
	}

	_setupPaypal(clientToken) {
		this.braintreeService.$braintree.setup(clientToken, "custom", {
			paypal: {
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
				this._createPaymentOption(obj);
			}
		});
	}

	_createPaymentOption(paymentMethod) {
		console.log('onPaymentMethodReceived', paymentMethod);
		let paymentMethodModel = {
			customerId: this.braintreeService.customer.id,
			paymentMethodNonce: paymentMethod.nonce
		};

		this.braintreeService.createPaymentMethod(paymentMethodModel).then(
			(response) => {
				this.braintreeService.updateCustomerData(response.data.customer);
				this.onFinish({paymentModel: response.data.customer.paymentMethod});

				console.log('Paypal Payment method created!', response);
			},
			(error) => {
				this.state.message.text = 'Failed to create payment method:' + error.data.message;
				console.log('Failed to create payment method:', error);
			}
		);
	}

	initAuthFlow(event) {
		this._checkout.paypal.initAuthFlow();
	}

	// Public viewModel methods
	// --------------------------------------------------
}

// Component decorations
let component = {
	bindings: {
		buttonText: '<',
		onFinish: '&'
	},
	template : template,
	controller: PaypalButtonComponent
};

export default component;
