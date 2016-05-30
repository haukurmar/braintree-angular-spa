import template from './payment-methods.html';
import {ROUTES} from '../../../braintree.constants';

// Inject dependencies
@Inject()
class PaymentMethodsComponent {
	constructor() {
	}

	// Private methods
	// --------------------------------------------------
	$onInit() {

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
