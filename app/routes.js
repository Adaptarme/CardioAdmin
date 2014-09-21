(function () {
	'use strict';

	angular
	.module('app.routes', ['ngRoute', 'satellizer'])
	.config(configRoutes);

	/** Definimos las rutas de nuestra aplicación. */
	function configRoutes($routeProvider, $authProvider) {
		$routeProvider
		.when('/', {
			templateUrl: 'app/ui/dashboard/dashboard.html'
		})
		.when('/login', {
			templateUrl: 'app/ui/layout/index.html'
		})
		.when('/logout', {
			template: null,
			controller: 'LogoutController'
		})
		.when('/dashboard', {
			templateUrl: 'app/ui/dashboard/index.html'
		})
		.when('/patients', {
			templateUrl: 'app/ui/patient/index.html'
		})
		.when('/medical-insurances', {
			templateUrl: 'app/ui/medical-insurance/index.html'
		})
		.otherwise('/', {
			redirectTo: '/'
		});

		$authProvider.twitter({
			url: '/auth/twitter'
		});
	}

})();