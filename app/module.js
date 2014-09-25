'use strict';

angular
	.module('app', [
		'ngRoute',
		'ngSanitize',
		'ui.bootstrap',
		'components',
		// Patients
		'patient.controllers',
		'patient.services',
		// Medical Insurances
		'medicalInsurance.controllers',
		'medicalInsurance.services'
	])
	.config(['$routeProvider', configRoutes]);

/** Definimos las rutas de nuestra aplicación. */
function configRoutes($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'app/ui/pages/dashboard/dashboard.html'
	})
	.when('/dashboard', {
		templateUrl: 'app/ui/pages/dashboard/dashboard.html'
	})
	.when('/patients', {
		templateUrl: 'app/ui/pages/patient/index.html'
	})
	.when('/medical-insurances', {
		templateUrl: 'app/ui/pages/medical-insurance/index.html'
	})
	.otherwise('/', {
		redirectTo: '/'
	});
}