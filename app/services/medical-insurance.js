angular
	.module('medicalInsurance.services', ['ngResource'])
	.factory('medicalInsuranceService', ['$resource', medicalInsuranceService]);

function medicalInsuranceService($resource) {
	return $resource('app/services/:id.json', {}, {
		'get': { method: 'GET' },
		'save': { method: 'POST' },
		'query': { method: 'GET', params: { id: 'medical-insurances' }, isArray: true, cache: true },
		'update': { method: 'PUT' }
	});
}