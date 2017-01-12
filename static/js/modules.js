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
	.when('/request', {
		controller: 'HomeController',
		controllerAs: 'homeCtrl',
		templateUrl: '/partials/request.partial.html'
	})
	.when('/photos', {
		controller: 'HomeController',
		controllerAs: 'homeCtrl',
		templateUrl: '/partials/photos.partial.html'
	})
	.when('/process', {
		controller: 'HomeController',
		controllerAs: 'homeCtrl',
		templateUrl: '/partials/process.partial.html'
	})
	.when('/reviews', {
		controller: 'HomeController',
		controllerAs: 'homeCtrl',
		templateUrl: '/partials/reviews.partial.html'
	})


});