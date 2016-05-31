// Modules
import CommonModule from '../common/common.module';

// Services
import BraintreeService from './braintree.service';

// Presentation Components
import UICreditCardFormComponent from './components/presentation/creditcard-form/creditcard-form.component';
import UICustomerFormComponent from './components/presentation/customer-form/customer-form.component';
import UISubscriptionPlanComponent from './components/presentation/subscription-plan/subscription-plan.component';
import UISubscriptionOverviewComponent from './components/presentation/subscription-overview/subscription-overview.component';
import SubscriptionProgressPresentationComponent from './components/presentation/subscription-progress/subscription-progress.component';

// Container Components
import CustomerContainerComponent from './components/container/customer/customer.component';
import CreditCardContainerComponent from './components/container/creditcard/creditcard.component';
import DropinContainerComponent from './components/container/dropin/dropin.component';
import PaypalContainerComponent from './components/container/paypal/paypal.component';
import SubscriptionContainerComponent from './components/container/subscription/subscription.component';
import SubscriptionOverviewContainerComponent from './components/container/subscription-overview/subscription-overview.component';
import PaymentMethodsContainerComponent from './components/container/payment-methods/payment-methods.component';

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
	.component('braintreeCustomer', CustomerContainerComponent)
	.component('braintreeCreditCard', CreditCardContainerComponent)
	.component('braintreeDropin', DropinContainerComponent)
	.component('braintreeSubscription', SubscriptionContainerComponent)
	.component('braintreeSubscriptionOverview', SubscriptionOverviewContainerComponent)
	.component('braintreePaymentMethods', PaymentMethodsContainerComponent)
	.component('braintreePaypal', PaypalContainerComponent)
	.component('braintreeHome', HomeViewComponent)
	.component('uiBraintreeCustomerForm', UICustomerFormComponent)
	.component('uiBraintreeCreditcardForm', UICreditCardFormComponent)
	.component('uiBraintreeSubscriptionPlan', UISubscriptionPlanComponent)
	.component('uiBraintreeSubscriptionProgress', SubscriptionProgressPresentationComponent)
	.component('uiBraintreeSubscriptionOverview', UISubscriptionOverviewComponent);

export default ngModule;
