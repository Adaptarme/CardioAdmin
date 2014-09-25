angular.module('components', [])
	.directive('navbarTop', navbarTop);

/** Directiva para mostrar la barra de navegación en la cabecera. */
function navbarTop() {
	return {
		restrict: 'A',
		templateUrl: 'app/ui/components/navbar-top.html'
		//replace: true		
	};
}