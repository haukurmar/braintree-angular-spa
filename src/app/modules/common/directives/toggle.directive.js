/**
 * Toggle directive
 * Requires jQuery since we use .closest() which is not supported by jQLite
 */

@Inject()
class ToggleDirective {
	constructor() {
		this.scope = {
			toggleElId: '@', // Id of the element to be toggled
			toggleElCssClass: '@', // Class name of the element to be toggled, finds the first element from the source element
			toggleCssClassHide: '@', // If hide or show classes are set, we use the classes instead of .hide() and .show()
			toggleCssClassShow: '@',
			toggleIconCssClass: '@',
			toggleIconCssClassHide: '@',
			toggleIconCssClassShow: '@',
			toggleDisabled: '@',
			toggleOnHover: '@'
		}
	}

	link(scope, elem, attrs) {
		var elToToggle;
		var toggleIconCssClass = '.js-toggleIcon';
		if(attrs.toggleIconCssClass) {
			toggleIconCssClass = '.' + attrs.toggleIconCssClass;
		}
		var iconEl = elem.find(toggleIconCssClass);
		var eventToBindTo = 'click';

		if (attrs.toggleElId) {
			elToToggle = angular.element(document).find('#' + attrs.toggleElId);
		} else if (attrs.toggleElCssClass) {
			elToToggle = elem.parent().find('.' + attrs.toggleElCssClass);
		}

		if (attrs.toggleOnHover === 'true') {
			eventToBindTo = 'mouseenter mouseleave';
		}

		if (attrs.toggleDisabled !== undefined && attrs.toggleDisabled === 'true') {
			return;
		}

		elem.bind(eventToBindTo, function () {
			if (!attrs.toggleElId && !attrs.toggleElCssClass) {
				return;
			}

			if(!elToToggle) {
				//console.log('Element to toggle was not found');
				return;
			}

			if(attrs.toggleCssClassHide && attrs.toggleCssClassShow) {
				// Toggle using css classes
				if (elToToggle.is(':visible')) {
					// Hide
					elToToggle.removeClass(attrs.toggleCssClassShow).addClass(attrs.toggleCssClassHide);
					iconEl.removeClass(attrs.toggleIconCssClassHide).addClass(attrs.toggleIconCssClassShow);
				} else {
					// Show
					elToToggle.removeClass(attrs.toggleCssClassHide).addClass(attrs.toggleCssClassShow);
					iconEl.removeClass(attrs.toggleIconCssClassShow).addClass(attrs.toggleIconCssClassHide);
				}

			} else {
				// Toggle using .hide() and .show()
				if (elToToggle.is(':visible')) {
					// Hide
					elToToggle.hide();
					iconEl.removeClass(attrs.toggleIconCssClassHide).addClass(attrs.toggleIconCssClassShow);
				} else {
					// Show
					elToToggle.show();
					iconEl.removeClass(attrs.toggleIconCssClassShow).addClass(attrs.toggleIconCssClassHide);
				}

			}
		});
	}

	static toggleDirectiveFactory() {
		ToggleDirective.instance = new ToggleDirective();
		return ToggleDirective.instance;
	}
}

export default ToggleDirective.toggleDirectiveFactory;
