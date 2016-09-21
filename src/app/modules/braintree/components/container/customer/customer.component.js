import template from './customer.html';
import {ROUTES} from '../../../braintree.constants';

// Inject dependencies
@Inject('braintreeDataService', 'braintreeAppService')
class BraintreeSubscriptionComponent {
	constructor() {
		this.state = {
			backButtonText: 'Back',
			backButtonRoute: ROUTES.SUBSCRIPTION,
			backButtonVisible: false,
			loading: {
				isLoading: false,
				text: ''
			},
			message: {
				text: '',
				link: '',
				linkText: '',
				descriptionHtml:'',
				type: ''
			},
			showForm: true,
			submitButtonText: 'Create customer',
			mode: {
				subscription: false
			}
		};

		this.routes = {
			nextRoute: '',
			subscription: ROUTES.SUBSCRIPTION
		};

		this.customer = null;
		this.customerModel = {};
		this.newCustomer = true;
		this.selectedSubscription = this.braintreeDataService.selectedSubscription;
	}

	// Private methods
	// --------------------------------------------------
	$onInit() {
		// Get Customer from service
		this.customer = this.braintreeDataService.customer;
		this.customerModel = this.customer;
		this.state.mode = this.braintreeDataService.mode;

		// Subscription mode
		if (this.state.mode.subscription) {
			this.state.submitButtonText = 'Continue';
			this.state.backButtonVisible = true;

			// If the user has not chosen a subscription plan (or refreshed the page)
			if (!this.selectedSubscription.id) {
				this.state.message.text = 'You need to choose a subscription plan before you proceed';
				this.state.message.type = 'warning';
				this.state.message.linkText = 'Go to subscription page';
				this.state.message.link = ROUTES.SUBSCRIPTION;
				this.state.showForm = false;
			}
		}

		// If we get a customerId, we fetch it from API
		if (this.customer.id) {
			this.getCustomerDetails(this.customer.id);
		}
	}

	// Public viewModel methods
	// --------------------------------------------------
	/**
	 * Get Customer details, including current subscription plans, payment methods etc.
	 * @param customerId
	 */
	getCustomerDetails(customerId) {
		this.state.loading.isLoading = true;
		this.state.loading.text = 'Fetching customer information...';
		//Get Customer if logged in
		this.braintreeDataService.getCustomer(customerId).then(
			(response) => {
				//console.log('success', response);
				this.newCustomer = false;
				this.braintreeDataService.updateCustomerData(response.data.customer);
				this.customerModel = response.data.customer;
				this.state.loading.isLoading = false;

				// TODO: What to do here?
			},
			(error) => {
				//console.log(error.data.message);
				this.newCustomer = true;
				this.state.loading.isLoading = false;
			}
		);
	}

	formatCurrencyAmount(amount, currencyIsoCode) {
		return this.braintreeAppService.formatCurrencyAmount(amount, currencyIsoCode);
	}

	routeTo(path) {
		this.braintreeAppService.routeTo(path);
	}

	/**
	 * Create a new customer or update an existing one
	 * @param customerModel
	 */
	saveCustomer(customerModel) {
		this.state.showform = false;
		this.routes.nextRoute = ROUTES.PAYMENT_METHODS;

		if (this.newCustomer) {
			this.state.loading.text = 'Creating customer...';
			this.state.loading.isLoading = true;

			this.braintreeDataService.createCustomer(customerModel).then(
				(response) => {
					this.state.loading.isLoading = false;

					// Save customer data to service
					this.braintreeDataService.updateCustomerData(response.data.customer);

					// TODO: Display message if not in subscribe mode
					// Redirect to next step
					this.routeTo([this.routes.nextRoute]);
				},
				(error) => {
					// TODO: Handle errors better (use error.data.errors collection)
					this.state.message.text = error.data.message;
					this.state.loading.isLoading = false;
					this.state.showform = true;

					//console.log('Error message', error.data.message);
					//console.log('Errors:', error.data.errors);
				}
			);
		} else {
			this.braintreeDataService.updateCustomerData(customerModel);
			// TODO: Update customer in Braintree
			this.routeTo([this.routes.nextRoute]);
		}
	}
}

// Component decorations
let component = {
	bindings: {},
	template: template,
	controller: BraintreeSubscriptionComponent
};

export default component;
