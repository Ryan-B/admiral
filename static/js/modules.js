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
	.when('/admiral', {
		controller: 'HomeController',
		controllerAs: 'homeCtrl',
		templateUrl: '/partials/admiral.partial.html'
	})
	.when('/services', {
		controller: 'HomeController',
		controllerAs: 'homeCtrl',
		templateUrl: '/partials/services.partial.html'
	})
	.when('/contact', {
		controller: 'HomeController',
		controllerAs: 'homeCtrl',
		templateUrl: '/partials/contact.partial.html'
	})


});