import template from './modal.html';

// Inject dependencies
@Inject()
class ModalComponent {
	constructor() {
		this.styles = {};
	}

	// Private methods
	// --------------------------------------------------
	$onInit() {
		if(!this.modalId) {
			this.modalId = 'modal-body';
		}

		this._setModalStyles();
	}

	_setModalStyles() {
		if (this.modalMaxHeight) {
			this.styles.maxHeight = this.modalMaxHeight;
		}

		if (this.modalMaxWidth) {
			this.styles.maxWidth = this.modalMaxWidth;
		}

		if (this.modalMinHeight) {
			this.styles.minHeight = this.modalMinHeight;
		}

		if (this.modalMinWidth) {
			this.styles.minWidth = this.modalMinWidth;
		}

		if (this.modalWidth) {
			this.styles.width = this.modalWidth;
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
		modalId: '<',
		modalMaxWidth: '<',
		modalMinWidth: '<',
		modalMaxHeight: '<',
		modalMinHeight: '<',
		modalWidth: '<',
	},
	template : template,
	transclude: {
		//title: 'modalTitle',
		body: 'modalBody'
	},
	controller: ModalComponent
};

export default component;
