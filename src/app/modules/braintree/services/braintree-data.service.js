import braintree from 'braintree-web';
import _ from 'lodash';

@Inject('$http', 'braintreeConfigService', '$q')
export default class BraintreeService {
	constructor() {
		this._apiUrl = this.braintreeConfigService.apiUrl;
		this._tokenPath = '/v1/token';
		this._processPath = '/v1/process';
		this._customerPath = '/v1/customers';
		this._subscriptionsPath = '/v1/subscriptions';
		this._subscriptionPlansPath = '/v1/plans';
		this._paymentMethodsPath = '/v1/paymentmethods';
		this._customerData = {
			customer: {}
		};

		this._merchantAccounts = {
			USD: {
				id: 'jivaroUSD',
				currencyIsoCode: 'USD',
				currencySymbol: '$',
				currencyName: 'US Dollar',
				currencyLongName: 'US Dollar (USD)'
			},
			EUR: {
				id: 'jivaroEUR',
				currencyIsoCode: 'EUR',
				currencySymbol: '€',
				currencyName: 'Euro',
				currencyLongName: 'Euro (EUR)'
			},
			GBP: {
				id: 'jivaroGBP',
				currencyIsoCode: 'GBP',
				currencySymbol: '£',
				currencyName: 'British Pound',
				currencyLongName: 'British Pound (GBP)'
			},
			ISK: {
				id: 'jivaroISK',
				currencyIsoCode: 'ISK',
				currencySymbol: 'kr',
				currencyName: 'Icelandic Krona',
				currencyLongName: 'Icelandic Krona (ISK)'
			}
		};

		this._merchantAccountsArray = [
			this._merchantAccounts.USD,
			this._merchantAccounts.EUR,
			this._merchantAccounts.GBP,
			this._merchantAccounts.ISK
		];

		this._selectedSubscription = {};

		this._selectedMerchantAccount = this._merchantAccounts.USD;
		this._mode = {
			subscription: false
		};

		// Object to be used to override or add to customPlans
		// Example:
		// {
		// 	USD: {premiumTwelve: {customPlanTitle: 'FREE One Year', firstBillingDate: '2016-09-29', offerPrice: '0'}},
		// 	EUR: {premiumTwelve: {customPlanTitle: 'FREE One Year', firstBillingDate: '2016-09-29', offerPrice: '0'}},
		// }
		this._customPlansDefaults = null;

		// window.customer = this._customerData;
		// window.selectedSubscription = this._selectedSubscription;
		//window.customPlansDefaults = this._customPlansDefaults;
	}

	// Private methods
	// --------------------------------------------------

	// Public methods
	// --------------------------------------------------
	get apiUrl() {
		return this.braintreeConfigService.apiUrl
	}

	get $braintree() {
		return braintree;
	}

	get customer() {
		return this._customerData.customer;
	}

	get customPlansDefaults() {
		return this._customPlansDefaults;
	}

	get merchantAccounts() {
		return this._merchantAccounts;
	}

	get merchantAccountsArray() {
		return this._merchantAccountsArray;
	}

	get selectedSubscription() {
		return this._selectedSubscription;
	}

	get selectedMerchantAccount() {
		return this._selectedMerchantAccount;
	}

	/**
	 * Used to determine payment mode in paymentMethods,
	 * If to process payment right away or save to vault
	 * @returns {{subscription: boolean}|*}
	 */
	get mode() {
		return this._mode;
	}

	// TODO: Depricate this, doing this inside of components instead
	setup() {
		this.getClientToken().then(
			(response) => {
				this.$braintree.setup(response.data.client_token, "custom");
				let customer = {
					clientToken: response.data.client_token
				};

				this.updateCustomerData(customer);
			}
		);
	}

	addCurrencyDiscountsToSelectedSubscription(discountArray) {
		if (!this._selectedSubscription.currencyDiscounts) {
			this._selectedSubscription.currencyDiscounts = [];
		}

		_.each(discountArray, (discount) => {
			this._selectedSubscription.currencyDiscounts.push(discount);
		});
	}

	addDiscountToSelectedSubscription(discountModel) {
		if (!this._selectedSubscription.discounts) {
			this._selectedSubscription.discounts = {};
		}

		if (!this._selectedSubscription.discounts.add) {
			this._selectedSubscription.discounts.add = [];
		}

		this._selectedSubscription.discounts.add.push(discountModel);
	}

	/**
	 * Creating a new customer
	 * @param customerData
	 * @returns {*}
	 */
	createCustomer(customerData) {
		return this.$http.post(this.apiUrl + this._customerPath, customerData);
	}

	cancelSubscription(subscriptionId) {
		return this.$http.delete(this.apiUrl + this._subscriptionsPath + '/' + subscriptionId);
	}

	/**
	 * Creates a new subscription for customer
	 * Expects subscriptionData: {paymentMethodToken: x, planId: x }
	 * @param subscriptionData
	 * @returns {*}
	 */
	createSubscription(subscriptionData) {
		// TODO: Find out what to do with a current subscriptionplan if user has any

		return this.$http.post(this.apiUrl + this._subscriptionsPath, subscriptionData);
	}

	createVaultedPayment(customerId, paymentModel) {
		return this.$q((resolve, reject) => {
			// Get PaymentMethodNonce to send when saving a payment method to the braintree vault.
			this.getPaymentMethodNonce(paymentModel).then(
				(nonce) => {
					let paymentMethodModel = {
						customerId: customerId,
						paymentMethodNonce: nonce,
						verificationMerchantAccountId: paymentModel.verificationMerchantAccountId
					};
					//console.log('Vault payment data', paymentMethodModel);

					// Save to Vault
					this.createPaymentMethod(paymentMethodModel).then(
						(response) => {
							this.updateCustomerData(response.data.customer);
							//console.log('Payment method created!', response);
							resolve(response);
						},
						(error) => {
							reject('Failed to create payment method:' + error.data.message);
						}
					);
				},
				(error) => {
					reject('Failed to get PaymentMethodNonce' + error);
				}
			);
		});
	}

	/**
	 * Add a payment method to customer
	 * Expects a paymentMethodModel: {customerId: x, paymentMethodNonce: x }
	 * @param paymentMethodModel
	 */
	createPaymentMethod(paymentMethodModel) {
		return this.$http.post(this.apiUrl + this._paymentMethodsPath, paymentMethodModel);
	}

	deletePaymentMethod(paymentMethod) {
		return this.$http.delete(this.apiUrl + this._paymentMethodsPath + '/' + paymentMethod.token);
	}

	getAllSubscriptionPlans() {
		return this.$http.get(this.apiUrl + this._subscriptionPlansPath);
	}

	getCurrencyForMerchantAccountId(merchantAccountId) {
		let currency;
		let merchantAccount = _.find(this._merchantAccountsArray, {id: merchantAccountId});

		if (merchantAccount) {
			currency = merchantAccount.currencyIsoCode;
		}

		return currency;
	}

	getSubscriptionPlansForCurrency(currencyIsoCode) {
		let responseObject = {
			data: {
				plans: [],
				message: '',
				success: false
			}
		};

		// Since Braintree offers no filtering we need to fetch all plans and filter them
		return this.$q((resolve, reject) => {
			this.getAllSubscriptionPlans().then(
				(response) => {
					if (!response.data || !response.data.plans) {
						responseObject.data.message = 'No subscription plans found.';
						reject(responseObject);
					} else {
						let currencyPlans = _.where(response.data.plans, {currencyIsoCode: currencyIsoCode});

						if (!currencyPlans.length) {
							responseObject.data.message = 'No plans found for currency: ' + currencyIsoCode;
							reject(responseObject);
						} else {
							responseObject.data.success = true;
							responseObject.data.plans = currencyPlans;
							resolve(responseObject);
						}
					}
				},
				(error) => {
					responseObject.data.message = error;
					reject(responseObject);
				}
			);
		});
	}

	/**
	 * Get the client token which is generated on the server
	 * @returns {promise}
	 */
	getClientToken() {
		return this.$http.get(this.apiUrl + this._tokenPath);
	}

	/**
	 * Get a specific customer
	 * @param customerId
	 * @returns {*}
	 */
	getCustomer(customerId, includeSubscriptions = false) {
		let path = this.apiUrl + this._customerPath + '/' + customerId;

		if (includeSubscriptions) {
			path += '/subscriptions';
		}

		return this.$http.get(path);
	}

	/**
	 * Tokenize creditcard and get paymentMethodNonce
	 * @param paymentModel
	 */
	getPaymentMethodNonce(paymentModel) {
		return this.$q((resolve, reject) => {
			this.getClientToken().then(
				(response) => {
					// Create new client and tokenize card
					let client = new this.$braintree.api.Client({clientToken: response.data.client_token});

					client.tokenizeCard({
						number: paymentModel.creditCardNumber,
						expirationDate: paymentModel.expirationDate
					}, (err, nonce) => {
						// TODO: Handle errors better
						if (err) {
							reject(err);
						}

						resolve(nonce);
					});
				},
				(error) => {
					//console.log('Error: cannot connect to server. Please try again. Erromessage: ' + error.data);
					reject(error);
				}
			);
		})
	}

	/**
	 * Init the mode flow
	 * @param type
	 */
	initMode(type) {
		if (type.toLowerCase() === 'subscription') {
			this._mode.subscription = true;
		} else {
			this._mode.subscription = false;
		}
	}

	initCustomerData() {
		this._customerData = {
			customer: {}
		};
	}

	initSelectedSubscriptionData() {
		this._selectedSubscription = {};
	}

	/**
	 * Process the payment
	 * @param paymentData
	 * @returns {promise}
	 */
	processPayment(paymentData) {
		return this.$http.post(this.apiUrl + this._processPath, paymentData);
	}

	updateCustomerData(newValues) {
		// Merge this._customerData into newValues
		let newObject = _.merge(newValues, this._customerData.customer);

		// Set new values
		this._customerData.customer = newObject;
	}

	updateSelectedSubscription(newValues) {
		// Merge this._selectedSubscription into newValues
		let newObject = _.merge(newValues, this._selectedSubscription);

		// Set new values
		this._selectedSubscription = newObject;
	}

	updateSubscription(currentSubscriptionId, subscription) {
		let requestBody = {
			currentSubscriptionId: currentSubscriptionId,
			subscriptionChanges: subscription
		};

		return this.$http.put(this.apiUrl + this._subscriptionsPath, requestBody);
	}

	setSelectedMerchantAccount(account) {
		this._selectedMerchantAccount = account;
	}

	setCustomPlansDefaults(newValues) {
		if (!this._customPlansDefaults) {
			this._customPlansDefaults = {};
		}

		// Merge this._selectedSubscription into newValues
		let newObject = _.merge(newValues, this._customPlansDefaults);

		// Set new values
		this._customPlansDefaults = newObject;
	}
}
