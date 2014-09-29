angular
	.module('patient.controllers', ['ngResource', 'ui.bootstrap', 'patient.services'])
	.controller('PatientController', ['$scope', '$modal', patientController]);
    
function patientController($scope, $modal, patient) {
	$scope.patients = patient.query();

	/** Mostrar modal con un formulario para agregar paciente. */
    $scope.create = function () {
    	$modal.open({
    		templateUrl: 'app/ui/pages/patient/create.html'
    	});
    };

	/**
     * Mostrar un modal para confirmar la eliminación del paciente.
     */
    $scope.delete = function () {
    	$modal.open({
    		templateUrl: 'app/ui/pages/patient/delete.html'
    	});
    };

}