import template from './subscribe-view.html';

// Inject dependencies
@Inject('braintreeDataService', '$translate')
class SubscribeViewComponent {
	constructor() {
	}

	// Private methods
	// --------------------------------------------------
	$onInit() {
		// When set by an outside app
		if(this.language) {
			this.$translate.use(this.language);
		}

		this.braintreeDataService.initMode('subscription');
		let customer = {};
		if (this.customerData) {
			if (this.customerData.id) {
				customer.id = this.customerData.id;
			}
			if (this.customerData.email) {
				customer.email = this.customerData.email;
			}
			if (this.customerData.firstName) {
				customer.firstName = this.customerData.firstName;
			}
			if (this.customerData.lastName) {
				customer.lastName = this.customerData.lastName;
			}
		}

		this.braintreeDataService.updateCustomerData(customer);

		// If some overrides or default values set to plans
		// For example when we want
		if (this.customPlansDefaults) {
			this.braintreeDataService.setCustomPlansDefaults(this.customPlansDefaults);
		}

		if(this.defaultCurrency) {
			this.braintreeDataService.setSelectedMerchantAccountByCurrency(this.defaultCurrency);
		}
	}

	// Public viewModel methods
	// --------------------------------------------------
}

// Component decorations
let component = {
	bindings: {
		customerData: '<',
		customPlansDefaults: '<',
		defaultCurrency: '<',
		language: '<'
	},
	template: template,
	controller: SubscribeViewComponent
};

export default component;
