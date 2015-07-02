function routerConfig ($routeProvider) {
  'ngInject';
  $routeProvider
    .when('/', {
      templateUrl: 'app/main/main.html',
      controller: 'MainController',
      controllerAs: 'main'
    })
    .when('/bookmarks', {
      templateUrl: 'app/bookmarks/bookmarks.html',
      controller: 'BookmarksController',
      controllerAs: 'vm'
    })
    .otherwise({
      redirectTo: '/'
    });
}

export default routerConfig;
