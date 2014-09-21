(function () {
	'use strict';
	
	angular
	.module('app', [
		'ngSanitize',
		'ui.bootstrap',
		// App
		'app.routes',
		'app.config',
		// Components
		'navBarLeft',
		'navBarTop',
		// Patient
		'patient.services',
		'patient.controllers',
		// Medical Insurances
		'medicalInsurance.services',
		'medicalInsurance.controllers'
	]);
	
})();