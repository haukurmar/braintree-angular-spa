
@Inject()
export default class ConfigService {
	constructor() {
		//this._apiUrl = 'https://haukurmar-braintree-node-api.herokuapp.com/api';
		this._apiUrl = 'http://127.0.0.1:5000/api';
		this._language = 'en';
	}

	get apiUrl() {
		return this._apiUrl;
	}

	setApiUrl(url) {
		this._apiUrl = url;
	}

	get getLanguage() {
		return this._language;
	}

	setLanguage(lang) {
		this._language = lang;
	}
}
