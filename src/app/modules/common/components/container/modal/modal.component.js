import template from './modal.html';

// Inject dependencies
@Inject()
class ModalComponent {
	constructor() {
	}

	// Private methods
	// --------------------------------------------------
	$onInit() {
		if(!this.modalId) {
			this.modalId = 'modal-body';
		}
	}

	// Public viewModel methods
	// --------------------------------------------------
	close() {
		console.log('Close');
		this.modalVisible = false;
	}
}

// Component decorations
let component = {
	bindings: {
		modalVisible: '<',
		modalId: '<'
	},
	template : template,
	transclude: {
		//title: 'modalTitle',
		body: 'modalBody'
	},
	controller: ModalComponent
};

export default component;
