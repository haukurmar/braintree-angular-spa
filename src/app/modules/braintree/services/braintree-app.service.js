
@Inject('$location')
export default class CoreService {
	constructor() {

	}

	routeTo(path){
		this.$location.url(path);
	}

	getCurrencySymbol(currencyIsoCode) {
		switch (currencyIsoCode) {
		case 'USD':
			return '$';
			break;
		case 'EUR':
			return '€';
			break;
		case 'GBP':
			return '£';
			break;
		case 'ISK':
			return 'kr';
			break;
		default:
			return '$';
		}
	}

	formatCurrencyAmount(amount, currencyIsoCode) {
		// TODO: Call external multi-use method to return this
		let currencySymbol = this.getCurrencySymbol(currencyIsoCode);

		if(currencyIsoCode.toLowerCase() === 'isk') {
			return amount + currencySymbol;
		}

		return currencySymbol + amount;
	}
}
