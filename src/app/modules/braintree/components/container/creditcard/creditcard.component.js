import template from './creditcard.html';
import {ROUTES} from '../../../braintree.constants';

// Inject dependencies
@Inject('$http', 'braintreeDataService', 'braintreeAppService')
class CreditCardComponent {
	constructor() {
		this.state = {
			backButtonText: 'Back',
			backButtonRoute: ROUTES.PAYMENT_METHODS,
			backButtonVisible: false,
			error: false,
			hideAmount: false,
			mode: {
				subscription: false
			},
			loading: {
				isLoading: false,
				text: ''
			},
			message: {
				text: '',
				link: '',
				linkText: '',
				descriptionHtml:''
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
		this.selectedSubscription = this.braintreeDataService.selectedSubscription;

		this.selectedMerchantAccount = this.braintreeDataService.selectedMerchantAccount;
		this.merchantAccountsArray = this.braintreeDataService.merchantAccountsArray;
	}

	// Private methods
	// --------------------------------------------------
	$onInit() {
		this.customer = this.braintreeDataService.customer;
		this.state.mode = this.braintreeDataService.mode;

		// Subscription mode
		let mode = this.braintreeDataService.mode;
		if (mode.subscription) {
			this.state.backButtonVisible = true;
			this.state.hideAmount = true;
			this.state.submitButtonText = 'Continue';

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
				this._displayMessage('You need to fill out customer information before you proceed');
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

	_clearMessage() {
		this.state.message.text = '';
	}

	_displayMessage(text, type, descriptionHtml) {
		this.state.message.type = type;
		this.state.message.text = text;
		this.state.message.descriptionHtml = descriptionHtml;
	}

	_startLoading(text) {
		this.state.loading.isLoading = true;
		this.state.loading.text = text;
	}

	_stopLoading() {
		this.state.loading.isLoading = false;
		this.state.loading.text = '';
	}

	// Public viewModel methods
	// --------------------------------------------------
	routeTo(path) {
		this.braintreeAppService.routeTo(path);
	}

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
		this._startLoading('Saving payment information...');
		this.state.showForm = false;
		let customerId = this.braintreeDataService.customer.id;

		paymentModel.verificationMerchantAccountId = this.selectedMerchantAccount.id;

		// Send request to get token, then use the token to tokenize credit card info and verify the card
		this.braintreeDataService.createVaultedPayment(customerId, paymentModel).then(
			(response) => {
				console.log('from vaultedPayment', response);
				this._stopLoading();
				this.state.nextRoute = ROUTES.SUBSCRIPTION_OVERVIEW;
				this.routeTo([this.state.nextRoute]);
			},
			(error) => {
				// TODO: Handle errors better
				this._displayMessage(error, 'warning');
				this._stopLoading();
				this.state.showForm = true;
			}
		);
	}

	/**
	 * Processes the payment
	 * @param paymentModel
	 */
	processPayment(paymentModel) {
		this._startLoading('Processing payment...');
		this.state.showForm = false;
		let clientToken = this.braintreeDataService.customer.clientToken;

		// Get selected merchant account if it has been initialized
		let selectedMerchantAccount = this.selectedMerchantAccount || {};

		// Use the token to tokenize credit card info and process a transaction
		// Create new client and tokenize card
		let client = new this.braintreeDataService.$braintree.api.Client({clientToken: clientToken});

		// If radio buttons in view are used
		if (paymentModel.merchantAccountId) {
			selectedMerchantAccount.id = paymentModel.merchantAccountId;
		}

		client.tokenizeCard({
			number: paymentModel.creditCardNumber,
			expirationDate: paymentModel.expirationDate,
			cvv: paymentModel.cvv
		}, (err, nonce) => {
			let paymentData = {
				amount: paymentModel.amount,
				payment_method_nonce: nonce,
				merchantAccountId: selectedMerchantAccount.id
			};

			this.braintreeDataService.processPayment(paymentData).then(
				(response) => {
					console.log(response.data.success);
					if (response.data.success) {
						this.state.paid = true;
						this.state.error = false;

						this._displayMessage('Payment authorized, thanks.', 'success');
						this._stopLoading();
					} else {
						// TODO: Handle different payment failures
						this.state.error = true;

						this._displayMessage('Payment failed: ' + response.data.message + ' Please refresh the page and try again.', 'warning');
						this._stopLoading();
						this.state.showForm = true;

					}
				},
				(error) => {
					this.state.error = true;
					this._displayMessage('Error: cannot connect to server. Please make sure your server is running. Erromessage: ' + error.data, 'warning');
					this._stopLoading();
					this.state.showForm = true;
				}
			);
		})
	}
}

// Component decorations
let component = {
	bindings: {},
	template: template,
	controller: CreditCardComponent
};

export default component;
