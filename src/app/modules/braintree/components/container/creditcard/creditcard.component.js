import template from './creditcard.html';
import {ROUTES} from '../../../braintree.constants';

// Inject dependencies
@Inject('$http', 'braintreeDataService', 'braintreeAppService', '$translate', '$rootScope')
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
				descriptionHtml:'',
				type: ''
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

			this._setLanguageKeys();

			// Listen for change of language
			this.$rootScope.$on('$translateChangeSuccess', () => {
				this._setLanguageKeys();
			});

			// If the user has not chosen a subscription plan (or refreshed the page)
			if (!this.selectedSubscription.id) {
				this.state.message.link = ROUTES.SUBSCRIPTION;
				this.state.showForm = false;
				return;
			}

			// If the user has no customer ID
			if (!this.customer.id) {
				this._displayMessage('warning', 'general.message.MUST_FILL_CUSTOMER_INFO');
				this.state.message.linkText = 'Go to customer page';
				this.state.message.link = ROUTES.CUSTOMER;
				this.state.showForm = false;
				return;
			}
		}

		if (!this.customer.clientToken) {
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

	_displayMessage(type, resourceString, extraText, descriptionHtml) {
		this.state.message.type = type;
		if(resourceString) {
			this.$translate(resourceString).then((value) => {this.state.message.text = value + (extraText ? extraText : '')});
		} else if (extraText) {
			this.state.message.text = extraText;
		}

		if (descriptionHtml) {
			this.state.message.descriptionHtml = descriptionHtml;
		}
	}

	formatCurrencyAmount(amount, currencyIsoCode) {
		return this.braintreeAppService.formatCurrencyAmount(amount, currencyIsoCode);
	}

	_setLanguageKeys() {
		this.$translate('general.button.BACK').then((value) => {this.state.backButtonText = value});

		if (this.state.mode.subscription) {
			this.$translate('general.button.CONTINUE').then((value) => {
				this.state.submitButtonText = value;
			});

			// If no subscription has been selected
			if (!this.selectedSubscription.id) {
				this._displayMessage('warning', 'general.message.MUST_CHOOSE_SUBSCRIPTION');
				this.$translate('general.button.GO_TO_SUBSCRIPTION_PAGE').then((value) => {this.state.message.linkText = value});
			}

			// If customer has been created
			if (!this.customer.id) {
				this._displayMessage('warning', 'general.message.MUST_FILL_CUSTOMER_INFO');
				this.$translate('general.button.GO_TO_CUSTOMER_PAGE').then((value) => {this.state.message.linkText = value});
			}

		} else {
			this.$translate('payment.button.PAY_NOW').then((value) => {
				this.state.submitButtonText = value;
			});
		}
	}

	_startLoading(resourceString) {
		this.state.loading.isLoading = true;
		this.$translate(resourceString).then((value) => {this.state.loading.text = value});
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
		this._startLoading('payment.loading.SAVING_PAYMENT_INFORMATION');
		this.state.showForm = false;
		let customerId = this.braintreeDataService.customer.id;

		paymentModel.verificationMerchantAccountId = this.selectedMerchantAccount.id;

		// Send request to get token, then use the token to tokenize credit card info and verify the card
		this.braintreeDataService.createVaultedPayment(customerId, paymentModel).then(
			(response) => {
				//console.log('from vaultedPayment', response);
				this._stopLoading();
				this.state.nextRoute = ROUTES.SUBSCRIPTION_OVERVIEW;
				this.routeTo([this.state.nextRoute]);
			},
			(error) => {
				// TODO: Handle errors better
				this._displayMessage('warning', null, error);
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
		this._startLoading('payment.loading.PROCESSING_PAYMENT');
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
					if (response.data.success) {
						this.state.paid = true;
						this.state.error = false;

						this._displayMessage('success', 'payment.message.PAYMENT_AUTHORIZED');
						this._stopLoading();
					} else {
						// TODO: Handle different payment failures
						this.state.error = true;

						this._displayMessage('warning', 'payment.message.FAILED', response.data.message);
						this._stopLoading();
						this.state.showForm = true;

					}
				},
				(error) => {
					this.state.error = true;
					this._displayMessage('warning', 'general.message.ERROR_CONNECTING_TO_SERVER', error.data);
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
