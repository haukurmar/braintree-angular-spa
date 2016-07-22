import template from './creditcard.html';
import {ROUTES} from '../../../braintree.constants';

// Inject dependencies
@Inject('$http', 'braintreeDataService', '$location')
class CreditCardComponent {
	constructor() {
		this.state = {
			backButtonText: 'Back',
			backButtonRoute: ROUTES.PAYMENT_METHODS,
			backButtonVisible: false,
			error: false,
			hideAmount: false,
			loading: {
				isLoading: false,
				text: ''
			},
			message: {
				text: '',
				link: '',
				linkText: ''
			},
			paid: false,
			showForm: true,
			submitButtonText: 'Pay now'
		};

		// Used in template
		this.routes = {
			subscription: ROUTES.SUBSCRIPTION
		};

		this.customer = null;

	}

	// Private methods
	// --------------------------------------------------
	$onInit() {
		this.customer = this.braintreeDataService.customer;

		// Subscription mode
		let mode = this.braintreeDataService.mode;
		if (mode.subscription) {
			this.state.backButtonVisible = true;
			this.state.hideAmount = true;
			this.state.submitButtonText = 'Continue';

			// If the user has not chosen a subscription plan (or refreshed the page)
			if (!this.customer.subscriptionPlan) {
				this.state.message.text = 'You need to choose a subscription plan before you proceed';
				this.state.message.linkText = 'Go to subscription page';
				this.state.message.link = ROUTES.SUBSCRIPTION;
				this.state.showForm = false;
				return;
			}

			// If the user has no customer ID
			if (!this.customer.id) {
				this.state.message.text = 'You need to fill out customer information before you proceed';
				this.state.message.linkText = 'Go to customer page';
				this.state.message.link = ROUTES.CUSTOMER;
				this.state.showForm = false;
				return;
			}
		}

		if (!customer.clientToken) {
			this.braintreeDataService.getClientToken().then(
				(response) => {
					this.braintreeDataService.$braintree.setup(response.data.client_token, "custom");
					let customer = {
						clientToken: response.data.client_token
					};

					this.braintreeDataService.updateCustomerData(customer);
				}
			);
		}
	}

	// Public viewModel methods
	// --------------------------------------------------
	/**
	 * Determine whether to store payment method to vault or to process payment right away
	 * @param paymentModel
	 */
	submitPayment(paymentModel) {
		let mode = this.braintreeDataService.mode;
		if (mode.subscription) {
			this.createVaultedPayment(paymentModel);
		} else {
			this.processPayment(paymentModel);
		}
	}

	/**
	 * Creates a saved paymentMethod to the vault and then redirects to SubscriptionOverview
	 * @param paymentModel
	 */
	createVaultedPayment(paymentModel) {
		this.state.loading.text = 'Saving payment information...';
		this.state.loading.isLoading = true;
		this.state.showForm = false;
		let customerId = this.braintreeDataService.customer.id;

		// Send request to get token, then use the token to tokenize credit card info and verify the card
		this.braintreeDataService.createVaultedPayment(customerId, paymentModel).then(
			(response) => {
				console.log('from vaultedPayment', response);
				this.state.loading.isLoading = false;
				this.state.nextRoute = ROUTES.SUBSCRIPTION_OVERVIEW;
				this.$location.path([this.state.nextRoute]);
			},
			(error) => {
				// TODO: Handle errors better
				this.state.message.text = error;
				this.state.loading.isLoading = false;
				this.state.showForm = true;
			}
		);
	}

	/**
	 * Processes the payment
	 * @param paymentModel
	 */
	processPayment(paymentModel) {
		this.state.loading.text = 'Processing payment...';
		this.state.loading.isLoading = true;
		this.state.showForm = false;
		let clientToken = this.braintreeDataService.customer.clientToken;

		// Use the token to tokenize credit card info and process a transaction
		// Create new client and tokenize card
		let client = new this.braintreeDataService.$braintree.api.Client({clientToken: clientToken});

		client.tokenizeCard({
			number: paymentModel.creditCardNumber,
			expirationDate: paymentModel.expirationDate,
			cvv: paymentModel.cvv
		}, (err, nonce) => {
			let paymentData = {
				amount: paymentModel.amount,
				payment_method_nonce: nonce
			};

			this.braintreeDataService.processPayment(paymentData).then(
				(response) => {
					console.log(response.data.success);
					if (response.data.success) {
						this.state.message.text = 'Payment authorized, thanks.';
						this.state.paid = true;
						this.state.error = false;
						this.state.loading.isLoading = false;
						this.state.showForm = false;
					} else {
						// TODO: Handle different payment failures
						this.state.message.text = 'Payment failed: ' + response.data.message + ' Please refresh the page and try again.';
						this.state.error = true;
						this.state.loading.isLoading = false;
						this.state.showForm = true;
					}
				},
				(error) => {
					this.state.message.text = 'Error: cannot connect to server. Please make sure your server is running. Erromessage: ' + error.data;
					this.state.error = true;
					this.state.loading.isLoading = false;
					this.state.showForm = true;
				}
			);
		})
	}
}

// Component decorations
let component = {
	bindings: {

	},
	template: template,
	controller: CreditCardComponent
};

export default component;
