angular
	.module('patient.controllers', ['ngResource', 'patient.services'])
	.controller('PatientListController', ['$scope', 'patientService', patientListController]);

function patientListController($scope, patient) {
	$scope.patients = patient.query();
}