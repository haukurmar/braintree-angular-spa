// Modules
import CommonModule from '../common/common.module';

// Services
import BraintreeService from './braintree.service';

// Presentation Components
import UICreditCardFormComponent from './components/presentation/creditcard-form/creditcard-form.component';
import UICustomerFormComponent from './components/presentation/customer-form/customer-form.component';
import UISubscriptionPlanComponent from './components/presentation/subscription-plan/subscription-plan.component';
import UISubscriptionOverviewComponent from './components/presentation/subscription-overview/subscription-overview.component';

// Container Components
import CustomerContainerComponent from './components/container/customer/customer.component';
import CreditCardContainerComponent from './components/container/creditcard/creditcard.component';
import DropinContainerComponent from './components/container/dropin/dropin.component';
import SubscribeContainerComponent from './components/container/subscribe/subscribe.component';

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
	.component('braintreeSubscribe', SubscribeContainerComponent)
	.component('braintreeHome', HomeViewComponent)
	.component('uiBraintreeCustomerForm', UICustomerFormComponent)
	.component('uiBraintreeCreditcardForm', UICreditCardFormComponent)
	.component('uiBraintreeSubscriptionPlan', UISubscriptionPlanComponent)
	.component('uiBraintreeSubscriptionOverview', UISubscriptionOverviewComponent);

export default ngModule;
