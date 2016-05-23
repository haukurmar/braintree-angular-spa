// Modules
import CommonModule from '../common/common.module';

// Services
import BraintreeService from './braintree.service';

// Presentation Components
import UICreditCardComponent from './components/presentation/braintree-creditcard/creditcard.component';
import UICustomerComponent from './components/presentation/braintree-customer/customer.component';
import UISubscriptionPlan from './components/presentation/braintree-subscription-plan/subscription-plan.component';

// Container Components
import CustomerContainerComponent from './components/container/braintree-customer/customer.component';
import CreditCardContainerComponent from './components/container/braintree-creditcard/creditcard.component';
import DropinContainerComponent from './components/container/braintree-dropin/dropin.component';
import SubscribeContainerComponent from './components/container/braintree-subscribe/subscribe.component';

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
	.component('uiBraintreeCustomer', UICustomerComponent)
	.component('uiBraintreeCreditcard', UICreditCardComponent)
	.component('uiBraintreeSubscriptionPlan', UISubscriptionPlan);

export default ngModule;
