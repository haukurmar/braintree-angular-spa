const ROUTES = {
	CARDS: '/cards',
	CUSTOMER: '/customer',
	CUSTOMER_DETAILS: '/billing-overview',
	DROPIN: '/drop-in',
	PAYMENT_METHODS: '/payment-methods',
	PAYPAL: '/paypal',
	SUBSCRIPTION: '/subscribe',
	SUBSCRIPTION_OVERVIEW: '/subscription-overview'
};

// https://developers.braintreepayments.com/reference/general/processor-responses/authorization-responses
const GATEWAY_ERRORS = [
	{
		code: '2000',
		text: 'Do Not Honor',
		description: 'Your bank is unwilling to accept the transaction. Contact your bank for more details regarding this generic decline.'
	},
	{
		code: '2001',
		text: 'Insufficient Funds',
		description: 'Your account did not have sufficient funds to cover the transaction amount at the time of the transaction – subsequent attempts at a later date may be successful.'
	},
	{
		code: '2002',
		text: 'Limit Exceeded',
		description: 'The attempted transaction exceeds the withdrawal limit of the account. Please contact your bank to change the account limits or use a different payment method.'
	},
	{
		code: '2003',
		text: 'Cardholder\'s Activity Limit Exceeded',
		description: 'The attempted transaction exceeds the activity limit of the account. Please contact your bank to change the account limits or use a different payment method.'
	},
	{
		code: '2004',
		text: 'Expired Card',
		description: 'Card is expired. Please choose a different payment method.'
	},
	{
		code: '2005',
		text: 'Invalid Credit Card Number',
		description: 'You have entered and invalid payment method or made a typo in their credit card information. Please correct the payment information and attempt the transaction again – if the decline persists, you will need to contact your bank.'
	},
	{
		code: '2006',
		text: 'Invalid Expiration Date',
		description: 'You have entered an invalid payment method or made a typo in their card expiration date. Please correct the payment information and attempt the transaction again – if the decline persists, you will need to contact your bank.'
	},
	{
		code: '2007',
		text: 'No Account',
		description: 'The submitted card number is not on file with the card-issuing bank. Please contact your bank.'
	},
	{
		code: '2008',
		text: 'Card Account Length Error',
		description: 'The submitted card number does not include the proper number of digits. Please correct the payment information and attempt the transaction again – if the decline persists, you will need to contact your bank.'
	},
	{
		code: '2010',
		text: 'Card Issuer Declined CVV',
		description: 'You have entered in an invalid security code or made a typo in their card information. Please correct the payment information and attempt the transaction again – if the decline persists, you will need to contact your bank.'
	},
	{
		code: '2011',
		text: 'Voice Authorization Required',
		description: 'Your bank is requesting that the we call to obtain a special authorization code in order to complete this transaction. This can result in a lengthy process – we recommend changing to a new payment method instead.'
	},
	{
		code: '2012',
		text: 'Processor Declined Possible Lost Card',
		description: 'The card used has likely been reported as lost. You will need to contact your bank for more information.'
	},
	{
		code: '2013',
		text: 'Processor Declined - Possible Stolen Card',
		description: 'The card used has likely been reported as stolen. You will need to contact your bank for more information.'
	},
	{
		code: '2014',
		text: 'Processor Declined - Fraud Suspected',
		description: 'Your bank suspects fraud – please contact your bank for more information.'
	},
	{
		code: '2015',
		text: 'Transaction Not Allowed',
		description: 'Your bank is declining the transaction for unspecified reasons, possibly due to an issue with the card itself. Please contact your bank or use an alternative payment method.'
	},
	{
		code: '2016',
		text: 'Duplicate Transaction',
		description: 'The submitted transaction appears to be a duplicate of a previously submitted transaction and was declined to prevent charging the same card twice for the same service.'
	},
	{
		code: '2057',
		text: 'Issuer or Cardholder has put a restriction on the card',
		description: 'Please contact your issuing bank for more information.'
	},
	{
		code: '2067',
		text: 'Authorization Expired',
		description: 'The PayPal authorization is no longer valid. Please start over.'
	},
	{
		code: '2074',
		text: 'Funding Instrument In The PayPal Account Was Declined By The Processor Or Bank, Or It Can\'t Be Used For This Payment',
		description: 'Your payment method associated with your PayPal account was declined.'
	},
	{
		code: '2075',
		text: 'Payer Account Is Locked Or Closed',
		description: 'Your PayPal account cannot be used for transactions at this time. You will need to contact PayPal for more information or use an alternative payment method.'
	},
	{
		code: '2076',
		text: 'Payer Cannot Pay For This Transaction With PayPal',
		description: 'You should contact PayPal for more information or use an alternative payment method.'
	},
	{
		code: '2091',
		text: 'Currency of this transaction must match currency of your PayPal account',
		description: 'Your PayPal account can only process transactions in the currency of your home country. Contact PayPal\'s Support team for more information.'
	},
	{
		code: '2092',
		text: 'Processor Declined',
		description: 'Your bank is unwilling to accept the transaction. You will need to contact your bank for more details regarding this generic decline.'
	},
	{
		code: '2093',
		text: 'Processor Declined',
		description: 'Your bank is unwilling to accept the transaction. You will need to contact your bank for more details regarding this generic decline.'
	},
	{
		code: '2094',
		text: 'Processor Declined',
		description: 'Your bank is unwilling to accept the transaction. You will need to contact your bank for more details regarding this generic decline.'
	},
	{
		code: '2095',
		text: 'Processor Declined',
		description: 'Your bank is unwilling to accept the transaction. You will need to contact your bank for more details regarding this generic decline.'
	},
	{
		code: '2096',
		text: 'Processor Declined',
		description: 'Your bank is unwilling to accept the transaction. You will need to contact your bank for more details regarding this generic decline.'
	},
	{
		code: '2097',
		text: 'Processor Declined',
		description: 'Your bank is unwilling to accept the transaction. You will need to contact your bank for more details regarding this generic decline.'
	},
	{
		code: '2098',
		text: 'Processor Declined',
		description: 'Your bank is unwilling to accept the transaction. You will need to contact your bank for more details regarding this generic decline.'
	},
	{
		code: '2099',
		text: 'Processor Declined',
		description: 'Your bank is unwilling to accept the transaction. You will need to contact your bank for more details regarding this generic decline.'
	},
	{
		code: '3000',
		text: 'Processor Network Unavailable - Try Again',
		description: 'There seems to be a problem with the back-end processing network, not necessarily a problem with your payment method. Please try again – if the decline persists, contact our Support team for more information.'
	},
];

export {ROUTES, GATEWAY_ERRORS};
