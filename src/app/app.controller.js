// Inject dependencies
@Inject()
export default class AppComponent {
	constructor() {
		this._activate();
	}

	// Class methods
	// --------------------------------------------------
	_activate() {
		console.log('App Component...');
	}
}
