import braintree from 'braintree-web';
@Inject('$http', 'CONFIG')
export default class BraintreeService {
	constructor() {
		this._apiUrl = this.CONFIG.braintreeApiUrl;
		this._tokenPath = '/v1/token';
		this._processPath = '/v1/process';
		this._customerPath = '/v1/customers';
		this._subscriptionsPath = '/v1/subscriptions';
		this._subscriptionPlansPath = '/v1/plans';
		this._paymentMethodsPath = '/v1/paymentmethods';
		this._customerData = {
			customer: {}
		};

		window.customer = this._customerData;
	}

	// Private methods
	// --------------------------------------------------


	// Public methods
	// --------------------------------------------------
	get apiUrl() {
		return this._apiUrl
	}

	get customer() {
		return this._customerData.customer;
	}

	setup() {
		this.getClientToken().then(
			(response) => {
				this.$braintree.setup(response.data.client_token, "custom");
				console.log('Braintree setup with the clientToken', response.data.client_token);
				let customer = {
					clientToken: response.data.client_token
				};

				this.updateCustomer(customer);
			});


	}

	/**
	 * Tokenize creditcard and get paymentMethodNonce
	 * @param paymentModel
	 */
	getPaymentMethodNonce(paymentModel) {
		return new Promise((resolve, reject) => {
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
					console.log('Error: cannot connect to server. Please try again. Erromessage: ' + error.data);
					reject(error);
				}
			);
		})
	}

	/**
	 * Creating a new customer
	 * @param customerData
	 * @returns {*}
	 */
	createCustomer(customerData) {
		return this.$http.post(this._apiUrl + this._customerPath, customerData);
	}

	// TODO: Probably change to take in the model
	createSubscription() {
		let subscriptionData = {
			paymentMethodToken: this.customer.paymentMethod.token,
			planId: this.customer.subscriptionPlan.id
		};

		console.log('this.customer.subscriptionPlan', this.customer.subscriptionPlan, subscriptionData);

		// TODO: I need the paymentMethodToken here and not the nonce

		console.log('NONCE', this.customer.paymentMethod.token, subscriptionData);

		return this.$http.post(this._apiUrl + this._subscriptionsPath, subscriptionData);
	}

	createVaultedPayment(customerId, paymentModel) {
		// Tokenize creditcard and get paymentMethodNonce
		return new Promise((resolve, reject) => {
			this.getPaymentMethodNonce(paymentModel).then(
				(nonce) => {
					let data = {
						customerId: customerId,
						paymentMethodNonce: nonce,
						token: this.customer.paymentMethodToken
					};

					console.log('Vault payment data', data);

					let customer = {
						paymentMethodNonce: nonce
					};

					// Save the paymentMethodNonce to customer
					this.updateCustomer(customer);

					// Save to Vault
					console.log('paymentMethodNonce and customer: ', data);
					resolve(this.$http.post(this._apiUrl + this._paymentMethodsPath, data));
				},
				(error) => {
					console.log('Failed to get PaymentMethodNonce', error);
					reject('Failed to get PaymentMethodNonce', error);
				}
			);
		});
	}

	getAllSubscriptionPlans() {
		return this.$http.get(this._apiUrl + this._subscriptionPlansPath);
	}

	/**
	 * Get the client token which is generated on the server
	 * @returns {promise}
	 */
	getClientToken() {
		return this.$http.get(this._apiUrl + this._tokenPath);
	}

	/**
	 * Process the payment
	 * @param paymentData
	 * @returns {promise}
	 */
	processPayment(paymentData) {
		return this.$http.post(this._apiUrl + this._processPath, paymentData);
	}

	updateCustomer(customerModel) {
		this.setObjectValues(this._customerData.customer, customerModel);
		console.log('customer model updated in service', customerModel);
	}

	get $braintree() {
		return braintree;
	}


	// TODO: Move somewhere else
	// Walk throught the object tree and set values
	setObjectValues(src, dest) {
		for (var key in dest) {
			if (!src.hasOwnProperty(key)) {
				if (typeof dest[key] === 'object') {
					src[key] = {};
					this.setObjectValues(src[key], dest[key]);
				} else {
					src[key] = dest[key];
				}
			} else {
				if (typeof dest[key] === 'object') {
					this.setObjectValues(src[key], dest[key]);
				} else {
					src[key] = dest[key];
				}
			}
		}
	}
}
