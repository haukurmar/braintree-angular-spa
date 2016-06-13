// Modules
import CommonModule from '../common/common.module';

// Services
import BraintreeService from './braintree.service';

// Container Components
import CustomerComponent from './components/container/customer/customer.component';
import CreditCardComponent from './components/container/creditcard/creditcard.component';
import DropinComponent from './components/container/dropin/dropin.component';
import PaypalComponent from './components/container/paypal/paypal.component';
import SubscriptionComponent from './components/container/subscription/subscription.component';
import SubscriptionOverviewComponent from './components/container/subscription-overview/subscription-overview.component';
import PaymentMethodsComponent from './components/container/payment-methods/payment-methods.component';
import CustomerDetailsComponent from './components/container/customer-details/customer-details.component';

// Presentation Components
import UICreditCardFormComponent from './components/presentation/creditcard-form/creditcard-form.component';
import UICustomerFormComponent from './components/presentation/customer-form/customer-form.component';
import UISubscriptionPlanComponent from './components/presentation/subscription-plan/subscription-plan.component';
import UISubscriptionDetailsComponent from './components/presentation/subscription-details/subscription-details.component';
import UISubscriptionOverviewComponent from './components/presentation/subscription-overview/subscription-overview.component';
import UISubscriptionProgressComponent from './components/presentation/subscription-progress/subscription-progress.component';
import UISubscriptionNavigationComponent from './components/presentation/subscribe-navigation/subscribe-navigation.component';
import UICustomerDetailsComponent from './components/presentation/customer-details/customer-details.component';
import UIPaymentMethodComponent from './components/presentation/payment-method/payment-method.component';

// View Components (Route Components)
import HomeViewComponent from './components/view/braintree-home/braintree-home.component';

let ngModule = angular.module('braintree', [
	CommonModule.name
]);

/**
 * App Module
 */
ngModule
// Services
	.service('braintreeService', BraintreeService)

	// Container components
	.component('braintreeCustomer', CustomerComponent)
	.component('braintreeCustomerDetails', CustomerDetailsComponent)
	.component('braintreeCreditCard', CreditCardComponent)
	.component('braintreeDropin', DropinComponent)
	.component('braintreeSubscription', SubscriptionComponent)
	.component('braintreeSubscriptionOverview', SubscriptionOverviewComponent)
	.component('braintreePaymentMethods', PaymentMethodsComponent)
	.component('braintreePaypal', PaypalComponent)

	// Presentational components
	.component('uiBraintreeCustomerDetails', UICustomerDetailsComponent)
	.component('uiBraintreeCustomerForm', UICustomerFormComponent)
	.component('uiBraintreeCreditcardForm', UICreditCardFormComponent)
	.component('uiBraintreeSubscriptionDetails', UISubscriptionDetailsComponent)
	.component('uiBraintreeSubscriptionNavigation', UISubscriptionNavigationComponent)
	.component('uiBraintreeSubscriptionPlan', UISubscriptionPlanComponent)
	.component('uiBraintreeSubscriptionProgress', UISubscriptionProgressComponent)
	.component('uiBraintreeSubscriptionOverview', UISubscriptionOverviewComponent)
	.component('uiBraintreePaymentMethod', UIPaymentMethodComponent)

	// View components
	.component('braintreeHome', HomeViewComponent);

export default ngModule;
