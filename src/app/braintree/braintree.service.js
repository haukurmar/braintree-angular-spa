export default class BraintreeService {
	constructor() {
		this._apiUrl = 'http://127.0.0.1:3000/api';
	}
	
	get apiUrl() {
		return this._apiUrl
	}
}
