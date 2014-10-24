var demoApp = angular.module('demoApp', ['ngRoute']);

var controllers = {};
controllers.SimpleController = function ($scope){
	$scope.customers = 	[
		{name: 'Superman', city: 'Metropolis'},
		{name: 'Batman', city: 'Gotham City'},
		{name: 'Cartman', city: 'South Park'}
	];

	$scope.addCustomer = function(){
		$scope.customers.push(
				{
					name: $scope.newCustomer.name,
					city: $scope.newCustomer.city
				});
	};
};

demoApp.controller(controllers);

demoApp.config(function($routeProvider) {
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