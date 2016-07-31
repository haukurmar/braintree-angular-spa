import template from './payment-methods.html';
import {ROUTES} from '../../../braintree.constants';

// Inject dependencies
@Inject('braintreeDataService', 'braintreeAppService')
class PaymentMethodsComponent {
	constructor() {
		// Used in template
		this.state = {
			routes: {
				nextRoute: '',
				subscription: ROUTES.SUBSCRIPTION
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

	}

	// Private methods
	// --------------------------------------------------
	$onInit() {
		this.customer = this.braintreeDataService.customer;
		this.state.mode = this.braintreeDataService.mode;
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
