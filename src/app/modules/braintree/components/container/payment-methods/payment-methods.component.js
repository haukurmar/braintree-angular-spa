import template from './payment-methods.html';
import {ROUTES} from '../../../braintree.constants';

// Inject dependencies
@Inject('braintreeDataService', '$location')
class PaymentMethodsComponent {
	constructor() {
		// Used in template
		this.state = {
			routes: {
				nextRoute: '',
				subscription: ROUTES.SUBSCRIPTION
			}
		};

		this.customer = null;

	}

	// Private methods
	// --------------------------------------------------
	$onInit() {
		this.customer = this.braintreeDataService.customer;
	}

	// Public viewModel methods
	// --------------------------------------------------
	choosePaymentMethod(method) {
		if(method === 'cards') {
			this.$location.path([ROUTES.CARDS]);
		} else if(method === 'paypal') {
			this.$location.path([ROUTES.PAYPAL]);
		}
	}

	chooseStoredPaymentMethod(paymentMethod) {
		let customerData = {
			paymentMethod: paymentMethod
		};

		this.braintreeDataService.updateCustomerData(customerData);

		this.state.nextRoute = ROUTES.SUBSCRIPTION_OVERVIEW;
		this.$location.path([this.state.nextRoute]);
	}
}

// Component decorations
let component = {
	bindings: {

	},
	template : template,
	controller: PaymentMethodsComponent
};

export default component;
