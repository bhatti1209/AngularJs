// Method 1
// function SimpleController ($scope){
// 	$scope.customers = 	[
// 					{name: 'Superman', city: 'Metropolis'},
// 					{name: 'Batman', city: 'Gotham City'},
// 					{name: 'Cartman', city: 'South Park'}
// 				];
// }
// var demoApp = angular.module('demoApp', []);
// demoApp.controller('SimpleController', SimpleController);

// Method 2
// var demoApp = angular.module('demoApp', []);
// demoApp.controller('SimpleController', function ($scope){
// 	$scope.customers = 	[
// 		{name: 'Superman', city: 'Metropolis'},
// 		{name: 'Batman', city: 'Gotham City'},
// 		{name: 'Cartman', city: 'South Park'}
// 	];
// });

// Method 3
var demoApp = angular.module('demoApp', []);
var controllers = {};
controllers.SimpleController = function ($scope){
	$scope.customers = 	[
		{name: 'Superman', city: 'Metropolis'},
		{name: 'Batman', city: 'Gotham City'},
		{name: 'Cartman', city: 'South Park'}
	];
};

demoApp.controller(controllers);