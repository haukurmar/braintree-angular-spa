import template from './subscribe.html';

// Inject dependencies
@Inject('braintreeService')
class SubscribeComponent {
	constructor() {
		this.message = '';
		this.plans = [];
		this.state = {
			showCustomerForm: false,
			showCreditCardForm: false,
			showPlans: true,
			showPaypalButton: false,
			showMessage: false,
			showConfirmPanel: true
		};

		// TODO: Move to service
		this.subscription = {
			plan: null,
			customer: null,
			paymentMethod: null
		}
	}

	// Private methods
	// --------------------------------------------------
	$onInit() {
		this.braintreeService.setup();

		this._getAllSubscriptionPlans();
	}

	_getAllSubscriptionPlans() {
		console.log('Getting all subscription plans...');
		this.braintreeService.getAllSubscriptionPlans().then(
			(response) => {
				this.plans = response.data.plans;
			},
			(error) => {
				this.message = 'Unable to get subscription plans, the development team has been notified, please try again later.';

			}
		);
	}

	confirmSubscription() {
		let customer = this.braintreeService.customer;
		this.message = JSON.stringify(customer);

		this.braintreeService.createSubscription().then(
			(response) => {
				if (response.data.success) {
					this.message = 'Subscription was created!';
				} else {
					// TODO: Handle different failures maybe?
					this.message = 'An error occurred creating a subscription: ' + response.data.message;
				}
			},
			(error) => {
				this.message = error.data.message;
			}
		);
	}

	// Public viewModel methods
	// --------------------------------------------------
	chooseSubscriptionPlan(subscriptionPlanModel) {
		console.log('plan chosen', subscriptionPlanModel);

		this.state.showPlans = false;
		this.state.showCustomerForm = true;

		let customer = {
			subscriptionPlan: subscriptionPlanModel
		};

		this.braintreeService.updateCustomer(customer);
	}

	createCustomer(customerModel) {
		this.message = 'Creating customer...';
		this.state.showMessage = true;
		this.state.showCustomerForm = false;

		this.braintreeService.createCustomer(customerModel).then(
			(response) => {
				console.log('Customer created: ', response.data);
				this.message = '';
				this.state.showCreditCardForm = true;

				this.braintreeService.updateCustomer(response.data.customer);
			},
			(error) => {
				this.message = error.data.message;
				this.state.showMessage = true;
				this.state.showCustomerForm = true;

				console.log('Error message', error.data.message);
				console.log('Errors:', error.data.errors);
			}
		);
	}

	tokenizeCreditcard(paymentModel) {
		this.message = 'Validating creditcard...';
		this.state.showCreditCardForm = false;

		// Send request to get token, then use the token to tokenize credit card info and process a transaction
		this.braintreeService.getClientToken().then(
			(response) => {
				// Create new client and tokenize card
				let client = new this.braintreeService.$braintree.api.Client({clientToken: response.data.client_token});

				client.tokenizeCard({
					number: paymentModel.creditCardNumber,
					expirationDate: paymentModel.expirationDate
				}, (err, nonce) => {
					// TODO: Handle errors better
					if (err) {
						return;
					}

					let customer = {
						paymentMethodNonce: nonce
					};

					// Save paymentMethodNonce to customerModel in service
					this.braintreeService.updateCustomer(customer);
				});

				// TODO: I want to be sure that tokenizeCard worked
				this.message = '';
				this.state.showConfirmPanel = true;

			},
			(error) => {
				this.message = 'Error: cannot connect to server. Please try again. Erromessage: ' + error.data;
				this.isError = true;
				this.state.showCreditCardForm = true;
			}
		);
	}

	createVaultedPayment(paymentModel) {
		let customerId = this.braintreeService.customer.id;

		this.message = 'Validating creditcard...';
		this.state.showCreditCardForm = false;

		this.braintreeService.createVaultedPayment(customerId, paymentModel).then(
			(success) => {
				console.log('VAULT success!', success);

				// Save the paymentMethodNonce to customer
				this.braintreeService.updateCustomer(success.data.customer);

				// TODO: We cannot update viewmodel here
				this.message = '';
				this.state.showConfirmPanel = true;
			},
			(error) => {
				console.log('ERRROR', error);
				// TODO: We cannot update viewmodel here
				this.message = JSON.stringify(error);
			}
		);

		// Send request to get token, then use the token to tokenize credit card info and process a transaction

	}

	// processPayment(cardModel) {
	// 	this.message = 'Processing payment...';
	// 	this.state.showCreditCardForm = false;
	//
	// 	// Send request to get token, then use the token to tokenize credit card info and process a transaction
	// 	this.braintreeService.getClientToken().then(
	// 		(response) => {
	// 			// TODO: Use Existing customer that was created in last step
	//
	// 			// Create new client and tokenize card
	// 			let client = new this.braintreeService.$braintree.api.Client({clientToken: response.data.client_token});
	//
	// 			client.tokenizeCard({
	// 				number: cardModel.creditCardNumber,
	// 				expirationDate: cardModel.expirationDate
	// 			}, (err, nonce) => {
	// 				// TODO: Handle errors better
	// 				if (err) {
	// 					this.message = 'An error occurred tokenizing card: ' + JSON.stringify(err);
	// 					this.state.showCreditCardForm = true;
	// 					return;
	// 				}
	//
	// 				let paymentData = {
	// 					amount: cardModel.amount,
	// 					payment_method_nonce: nonce
	// 				};
	//
	// 				// Process payment
	// 				this.braintreeService.processPayment(paymentData).then(
	// 					(response) => {
	// 						if (response.data.success) {
	// 							this.message = 'Payment was authorized!';
	// 							this.isError = false;
	// 							this.isPaid = true;
	//
	// 						} else {
	// 							// TODO: Handle different payment failures
	// 							this.message = 'Payment failed: ' + response.data.message + ' Please refresh the page and try again.';
	// 							this.isError = true;
	// 							this.state.showCreditCardForm = true;
	// 						}
	//
	// 					},
	// 					(error) => {
	// 						this.message = 'Error: cannot connect to server. Please try again. Erromessage: ' + error.data;
	// 						this.isError = true;
	// 						this.state.showCreditCardForm = true;
	// 					}
	// 				);
	// 			})
	// 		},
	// 		(error) => {
	// 			this.message = 'Error: cannot connect to server. Please try again. Erromessage: ' + error.data;
	// 			this.isError = true;
	// 			this.state.showCreditCardForm = true;
	// 		}
	// 	);
	// }
}

// Component decorations
let component = {
	bindings: {},
	template: template,
	controller: SubscribeComponent
};

export default component;
