(function () {
	'use strict';

	angular
	.module('navBarTop', [])
	.directive('navbarTop', navbarTop);

	/** Mostrar la barra de navegación en la cabecera. */
	function navbarTop() {
		return {
			templateUrl: "app/ui/components/navbar-top.html"
		}
	}

})();