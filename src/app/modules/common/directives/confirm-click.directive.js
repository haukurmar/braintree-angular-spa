/**
 * Directive for basic Confirm dialog
 */

@Inject()
class ConfirmClick {
	constructor() {

	}

	link(scope, element, attr) {
		let msg = attr.confirmMessage || "Are you sure?";
		let clickAction = attr.uiConfirmClick;
		element.bind('click', function (event) {
			if (window.confirm(msg)) {
				scope.$eval(clickAction)
			}
		});
	}

	static confirmClickDirectiveFactory() {
		ConfirmClick.instance = new ConfirmClick();
		return ConfirmClick.instance;
	}
}

export default ConfirmClick.confirmClickDirectiveFactory;
