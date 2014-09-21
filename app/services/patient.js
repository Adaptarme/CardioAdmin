(function () {
	'use strict';

	angular
	.module('patient.services', ['ngResource'])
	.factory('patientService', ['$resource', patientService]);

	function patientService($resource) {
		return $resource('app/patient/:id.json', {}, {
			'get': { method: 'GET' },
			'save': { method: 'POST' },
			'query': { method: 'GET', params: { id: 'patients' }, isArray: true, cache: true },
			'update': { method: 'PUT' }
		});
	}

})();