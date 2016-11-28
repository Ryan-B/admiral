var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
	.when('/', {
		controller: 'HomeController',
		controllerAs: 'homeCtrl',
		templateUrl: '/partials/frontpage.partial.html'
	})
	.when('/menu', {
		controller: 'HomeController',
		controllerAs: 'homeCtrl',
		templateUrl: '/partials/menu.partial.html'
	})


});