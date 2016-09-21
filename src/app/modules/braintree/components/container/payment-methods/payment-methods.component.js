import template from './payment-methods.html';
import {ROUTES} from '../../../braintree.constants';

// Inject dependencies
@Inject('braintreeDataService', 'braintreeAppService')
class PaymentMethodsComponent {
	constructor() {
		// Used in template
		this.state = {
			message: {
				text: '',
				link: '',
				linkText: '',
				descriptionHtml:'',
				type: ''
			},
			routes: {
				nextRoute: '',
				subscription: ROUTES.SUBSCRIPTION
			},
			showForm: true,
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
		this.selectedSubscription = this.braintreeDataService.selectedSubscription;
	}

	// Private methods
	// --------------------------------------------------
	$onInit() {
		this.customer = this.braintreeDataService.customer;
		this.state.mode = this.braintreeDataService.mode;

		// Subscription mode
		if (this.state.mode.subscription) {
			// If the user has not chosen a subscription plan (or refreshed the page)
			if (!this.selectedSubscription.id) {
				this._displayMessage('You need to choose a subscription plan before you proceed', 'warning');
				this.state.message.linkText = 'Go to subscription page';
				this.state.message.link = ROUTES.SUBSCRIPTION;
				this.state.showForm = false;
				return;
			}

			// If the user has no customer ID
			if (!this.customer.id) {
				this._displayMessage('You need to fill out customer information before you proceed', 'warning');
				this.state.message.linkText = 'Go to customer page';
				this.state.message.link = ROUTES.CUSTOMER;
				this.state.showForm = false;
				return;
			}
		}
	}

	// Public viewModel methods
	// --------------------------------------------------
	choosePaymentMethod(method) {
		if (method === 'cards') {
			this.routeTo([ROUTES.CARDS]);
		} else if (method === 'paypal') {
			this.routeTo([ROUTES.PAYPAL]);
		}
	}

	chooseStoredPaymentMethod(paymentMethod) {
		let customerData = {
			paymentMethod: paymentMethod
		};

		this.braintreeDataService.updateCustomerData(customerData);

		this.state.nextRoute = ROUTES.SUBSCRIPTION_OVERVIEW;
		this.routeTo([this.state.nextRoute]);
	}

	_clearMessage() {
		this.state.message.text = '';
	}

	_displayMessage(text, type, descriptionHtml) {
		this.state.message.type = type;
		this.state.message.text = text;
		this.state.message.descriptionHtml = descriptionHtml;
	}

	formatCurrencyAmount(amount, currencyIsoCode) {
		return this.braintreeAppService.formatCurrencyAmount(amount, currencyIsoCode);
	}

	routeTo(path) {
		this.braintreeAppService.routeTo(path);
	}
}

// Component decorations
let component = {
	bindings: {},
	template: template,
	controller: PaymentMethodsComponent
};

export default component;
