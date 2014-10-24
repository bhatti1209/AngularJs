var demoApp = angular.module('demoApp', ['ngRoute'])
		.config(function($routeProvider) {
			$routeProvider
			.when('/',
			{
				controller: 'SimpleController',
				templateUrl: '../View/Partials/View1.html'
			})
			.when('/View2',
			{
				controller: 'SimpleController',
				templateUrl: '../View/Partials/View2.html'
			})
			.otherwise({redirectTo: '/'});
		});

demoApp.factory('simpleFactory', function(){
	var customers = [
		{name: 'Superman', city: 'Metropolis'},
		{name: 'Batman', city: 'Gotham City'},
		{name: 'Cartman', city: 'South Park'}
	];

	var factory = {};

	factory.getCustomers = function (){
		return customers;
	};
	factory.addCustomer = function (customer) {
		customers.push(customer);
	};

	return factory;
});

var controllers = {};
controllers.SimpleController = function ($scope, simpleFactory){
	$scope.customers = [];

	init();
	function init(){
		$scope.customers = simpleFactory.getCustomers();
	}

	$scope.addCustomer = function(){
		simpleFactory.addCustomer({
			name: $scope.newCustomer.name,
			city: $scope.newCustomer.city
		});
	};
};
demoApp.controller(controllers);