import template from './subscription-overview.html';

// Inject dependencies
@Inject('braintreeService')
class SubscriptionOverviewComponent {
	constructor() {
		this.message = '';
		this.loadingText = '';
		this.state = {
			error: false,
			loading: false
		};
	}

	// Private methods
	// --------------------------------------------------
	$onInit() {
		let customer = this.braintreeService.customer;
		if(customer.clientToken) {
			this._confirmSubscription();
		}
	}

	// Public viewModel methods
	// --------------------------------------------------
	_confirmSubscription() {
		this.loadingText = 'Creating subscription...';
		this.state.loading = true;

		this.braintreeService.createSubscription().then(
			(response) => {
				if (response.data.success) {
					this.message = 'Subscription was created!';
					this.state.loading = false;
				} else {
					console.log('Error creating a sub', response.data.message);
					// TODO: Handle different failures maybe?
					this.message = 'An error occurred creating a subscription: ' + response.data.message;
					this.state.loading = false;
				}
			},
			(error) => {
				console.log('Error creating a subcription', error);
				this.message = error.data.message;
				this.state.loading = false;
			}
		);
	}

}

// Component decorations
let component = {
	bindings: {},
	template : template,
	controller: SubscriptionOverviewComponent
};

export default component;
