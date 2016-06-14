import template from './payment-methods.html';
import {ROUTES} from '../../../braintree.constants';

// Inject dependencies
@Inject('braintreeService')
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
		this.customer = this.braintreeService.customer;
	}

	// Public viewModel methods
	// --------------------------------------------------
	choosePaymentMethod(method) {
		if(method === 'cards') {
			this.$router.navigate([ROUTES.CARDS]);
		} else if(method === 'paypal') {
			this.$router.navigate([ROUTES.PAYPAL]);
		}
	}

	chooseStoredPaymentMethod(paymentMethod) {
		let customerData = {
			paymentMethod: paymentMethod
		};

		this.braintreeService.updateCustomerData(customerData);

		this.state.nextRoute = ROUTES.SUBSCRIPTION_OVERVIEW;
		this.$router.navigate([this.state.nextRoute]);
	}
}

// Component decorations
let component = {
	bindings: {
		$router: '<'
	},
	template : template,
	controller: PaymentMethodsComponent
};

export default component;
