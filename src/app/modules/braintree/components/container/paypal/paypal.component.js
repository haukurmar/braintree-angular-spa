import template from './paypal.html';
import {ROUTES} from '../../../braintree.constants';

// Inject dependencies
@Inject('braintreeDataService', 'braintreeAppService')
class PaypalComponent {
	constructor() {
		this._checkout = null;
		this.state = {
			backButtonText: 'Back',
			backButtonRoute: ROUTES.PAYMENT_METHODS,
			backButtonVisible: true,
			message: {
				text: ''
			},
			mode: {
				subscription: false
			}
		};

		// Used in template
		this.routes = {
			nextRoute: '',
			subscription: ROUTES.SUBSCRIPTION
		};

		this.customer = null;
		this.selectedMerchantAccount = this.braintreeDataService.selectedMerchantAccount;
		this.selectedSubscription = this.braintreeDataService.selectedSubscription;
	}

	// Private methods
	// --------------------------------------------------
	$onInit() {
		this.customer = this.braintreeDataService.customer;
		this.state.mode = this.braintreeDataService.mode;

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
		let currencyCode = this.selectedMerchantAccount.currencyIsoCode;
		this.braintreeDataService.$braintree.setup(clientToken, "custom", {
			paypal: {
				currency: currencyCode,
				enableShippingAddress: false,
				headless: true
			},
			onReady: (integration) => {
				//console.log('Paypal is ready');
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

		//console.log('Paypal paymentModel:', paymentMethodModel);

		this.braintreeDataService.createPaymentMethod(paymentMethodModel).then(
			(response) => {
				this.braintreeDataService.updateCustomerData(response.data.customer);

				this.routes.nextRoute = ROUTES.SUBSCRIPTION_OVERVIEW;
				this.routeTo([this.routes.nextRoute]);
				//console.log('Paypal Payment method created!', response);
			},
			(error) => {
				this.state.message.text = 'Failed to create payment method:' + error.data.message;
				//console.log('Failed to create payment method:', error);
			}
		);
	}

	formatCurrencyAmount(amount, currencyIsoCode) {
		return this.braintreeAppService.formatCurrencyAmount(amount, currencyIsoCode);
	}

	routeTo(path){
		return this.braintreeAppService.routeTo(path);
	}

	pay(event) {
		this._checkout.paypal.initAuthFlow();
	}

	// Public viewModel methods
	// --------------------------------------------------
}

// Component decorations
let component = {
	bindings: {

	},
	template : template,
	controller: PaypalComponent
};

export default component;
