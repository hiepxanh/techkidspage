"use strict";

var TechKidsApp = function ($, undefined) {
	var configs = {
		menuBreakPoint: 768
	};

	var menuOnHover = false;

	var init = function init() {
		if (TechKidsApp.scrollSpy) {
			TechKidsApp.scrollSpy.init();
		}

		$(window).resize(detectMenuModeChange);

		detectMenuModeChange();
	};

	var detectMenuModeChange = function detectMenuModeChange() {
		if ($(window).width() < configs.menuBreakPoint) {
			if (menuOnHover) {
				$("#main_nav .dropdown-toggle").each(function () {
					$(this).removeClass("disabled");
				});

				menuOnHover = false;
			}
		} else {
			if (!menuOnHover) {
				$("#main_nav .dropdown-toggle").each(function () {
					$(this).addClass("disabled");
				});

				menuOnHover = true;
			}
		}
	};

	return {
		init: init
	};
}(jQuery);

$(document).ready(function () {
	TechKidsApp.init();
});
//# sourceMappingURL=core.js.map
