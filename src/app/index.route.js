function routerConfig ($routeProvider) {
  'ngInject';
  $routeProvider
    .when('/', {
      templateUrl: 'app/bookmarks/bookmarks.html',
      controller: 'BookmarksController',
      controllerAs: 'vm'
    })
    .otherwise({
      redirectTo: '/'
    });
}

export default routerConfig;
