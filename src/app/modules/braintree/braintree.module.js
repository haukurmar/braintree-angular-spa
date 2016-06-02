// Modules
import CommonModule from '../common/common.module';

// Services
import BraintreeService from './braintree.service';

// Presentation Components
import UICreditCardFormComponent from './components/presentation/creditcard-form/creditcard-form.component';
import UICustomerFormComponent from './components/presentation/customer-form/customer-form.component';
import UISubscriptionPlanComponent from './components/presentation/subscription-plan/subscription-plan.component';
import UISubscriptionOverviewComponent from './components/presentation/subscription-overview/subscription-overview.component';
import UISubscriptionProgressComponent from './components/presentation/subscription-progress/subscription-progress.component';

// Container Components
import CustomerComponent from './components/container/customer/customer.component';
import CreditCardComponent from './components/container/creditcard/creditcard.component';
import DropinComponent from './components/container/dropin/dropin.component';
import PaypalComponent from './components/container/paypal/paypal.component';
import SubscriptionComponent from './components/container/subscription/subscription.component';
import SubscriptionOverviewComponent from './components/container/subscription-overview/subscription-overview.component';
import PaymentMethodsComponent from './components/container/payment-methods/payment-methods.component';

// View Components (Route Components)
import HomeViewComponent from './components/view/braintree-home/braintree-home.component';

let ngModule = angular.module('braintree', [
	CommonModule.name
]);

/**
 * App Module
 */
ngModule
	.service('braintreeService', BraintreeService)
	.component('braintreeCustomer', CustomerComponent)
	.component('braintreeCreditCard', CreditCardComponent)
	.component('braintreeDropin', DropinComponent)
	.component('braintreeSubscription', SubscriptionComponent)
	.component('braintreeSubscriptionOverview', SubscriptionOverviewComponent)
	.component('braintreePaymentMethods', PaymentMethodsComponent)
	.component('braintreePaypal', PaypalComponent)
	.component('braintreeHome', HomeViewComponent)
	.component('uiBraintreeCustomerForm', UICustomerFormComponent)
	.component('uiBraintreeCreditcardForm', UICreditCardFormComponent)
	.component('uiBraintreeSubscriptionPlan', UISubscriptionPlanComponent)
	.component('uiBraintreeSubscriptionProgress', UISubscriptionProgressComponent)
	.component('uiBraintreeSubscriptionOverview', UISubscriptionOverviewComponent);

export default ngModule;
