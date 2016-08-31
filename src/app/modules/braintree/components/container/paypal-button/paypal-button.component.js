import template from './paypal-button.html';
import {ROUTES} from '../../../braintree.constants';

// Inject dependencies
@Inject('braintreeDataService')
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
		this.customer = this.braintreeDataService.customer;

		if(!this.braintreeDataService.customer.clientToken) {
			this.braintreeDataService.getClientToken().then(
				(response) => {
					let customer = {
						clientToken: response.data.client_token
					};
					this.braintreeDataService.updateCustomerData(customer);
					this._setupPaypal(customer.clientToken);
				}
			);
		} else {
			this._setupPaypal(this.braintreeDataService.customer.clientToken);
		}
	}

	_setupPaypal(clientToken) {
		let currencyIsoCode = this.currencyIsoCode || 'USD';
		this.braintreeDataService.$braintree.setup(clientToken, "custom", {
			paypal: {
				currency: currencyIsoCode,
				enableShippingAddress: false,
				headless: true
			},
			onCancelled: (obj) => {
				//console.log('cancelled', obj);
			},
			onReady: (integration) => {
				//console.log('Paypal button is ready');
				this._checkout = integration;
			},
			onAuthorizationDismissed: (obj) => {
				//console.log('onAuthorizationDismissed', obj);
			},
			onPaymentMethodReceived: (obj) => {
				this._createPaymentOption(obj);
			}
		});
	}

	_createPaymentOption(paymentMethod) {
		//console.log('onPaymentMethodReceived', paymentMethod);
		let paymentMethodModel = {
			customerId: this.braintreeDataService.customer.id,
			paymentMethodNonce: paymentMethod.nonce
		};

		this.braintreeDataService.createPaymentMethod(paymentMethodModel).then(
			(response) => {
				this.braintreeDataService.updateCustomerData(response.data.customer);
				this.onFinish({paymentModel: response.data.customer.paymentMethod});

				//console.log('Paypal Payment method created!', response);
			},
			(error) => {
				this.state.message.text = 'Failed to create payment method:' + error.data.message;
				//console.log('Failed to create payment method:', error);
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
		currencyIsoCode: '<',
		onFinish: '&'
	},
	template : template,
	controller: PaypalButtonComponent
};

export default component;
