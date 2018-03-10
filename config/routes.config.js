angular.module('blackBass').config([
	'$routeProvider',
	'$locationProvider',
	'$sceDelegateProvider',
	function ($routeProvider, $locationProvider, $sceDelegateProvider) {

	$sceDelegateProvider.resourceUrlWhitelist([
			'self',
			'*://www.youtube.com/**',
			'*://player.vimeo.com/**'
		]);

		$routeProvider
		.when('/', {
			template: '<homepage></homepage><artists></artists><lastedition></lastedition><tickets></tickets><contacts></contacts><partners></partners>'
		})
		// .when('/artists', {
		// 	template: '<artists></artists>'
		// })
		// .when('/lastedition', {
		// 	template: '<lastedition></lastedition>'
		// })
		// .when('/tickets', {
		// 	template: '<tickets></tickets>'
		// })
		// .when('/contacts', {
		// 	template: '<contacts></contacts>'
		// })
		// .when('/partners', {
		// 	template: '<partners></partners>'
		// })
		.otherwise({
			redirectTo: '/'
		});

		$locationProvider.html5Mode(true);

	}
	]);

