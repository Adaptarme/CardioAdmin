angular
	.module('components', ['ngRoute'])
	.directive('isActive', ['$location', isActive])
	.directive('navbarLeft', navbarLeft);

/** Colocar la cles 'active' a los item del nav. */
function isActive($location) {
	var link = function (scope, element, attrs) {
		scope.location = $location;
		scope.$watch('location.path()', function (currentPath) {
			if ('#' + currentPath === attrs.href) {
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

/** Mostrar la barra de navegación izquierda. */
function navbarLeft() {
	return {
		require: '?isActive',
		restrict: 'A',
		templateUrl: 'app/ui/components/navbar-left.html',
		replace: true
	};
}