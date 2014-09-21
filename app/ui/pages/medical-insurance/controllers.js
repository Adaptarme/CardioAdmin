(function () {
	'use strict';
	
	angular
	.module('medicalInsurance.controllers', ['ngResource', 'medicalInsurance.services', 'ui.bootstrap'])
	.controller('MedicalInsuranceList', ['$scope', '$modal', 'medicalInsuranceService', medicalInsuranceList]);

	function medicalInsuranceList($scope, $modal, medicalInsurance) {

		/** Listar todos los pacientes. */
		$scope.medicalInsurances = medicalInsurance.query();

		/**
		 * Mostrar la información de una obra social.
		 * @param {number} medicalInsuranceId - Id de la obra social.
		 */
		 $scope.show = function (id) {
		 	$modal.open({
		 		templateUrl: 'app/medical-insurance/show.html'
		 	});
		 };

	}


})();