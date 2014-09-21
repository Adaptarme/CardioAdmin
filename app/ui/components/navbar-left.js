(function () {
	'use strict';

	angular
	.module('navBarLeft', ['ngRoute'])
	.directive('navbarLeft', navbarLeft)
	.directive('isActive', ['$location', isActive]);

	/** Mostrar la barra de navegación izquierda. */
	function navbarLeft() {
		return {
			templateUrl: "app/ui/components/navbar-left.html"
		};
	}

	function isActive($location) {
		var link = function (scope, element, attrs) {
			scope.location = $location;
			scope.$watch('location.path()', function(currentPath) {
				if ('#' + currentPath === element.attr('href')) {
					element.parent().addClass('active');
				} else {
					element.parent().removeClass('active');
				}
			});
		};
		return {
			restrict: 'A',
			link: link
		};
	}

})();