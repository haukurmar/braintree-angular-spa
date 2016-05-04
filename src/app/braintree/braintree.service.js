export default class BraintreeService {
	constructor() {
		this._apiUrl = 'http://127.0.0.1:3000/api';
		this._tokenPath = '/v1/token';
		this._processPath = '/v1/process';
	}

	get apiUrl() {
		return this._apiUrl
	}

	get tokenPath() {
		return this._tokenPath;
	}

	get processPath() {
		return this._processPath;
	}
}
