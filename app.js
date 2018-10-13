var app = angular.module("app", ['ngRoute']);


app.config(['$routeProvider', function($routeProvider) {

  $routeProvider.
  when('/', {
    templateUrl: 'main.html',
    controller: 'MainController',
    controllerAs: 'homeCtrl'
  }).
  when('/about', {
    templateUrl: 'add_event.html',
    controller: 'AgendaController',
    controllerAs: ''
  }).
  when('/detail', {
      templateUrl: 'show_event.html',
      controller: 'ScheduleController',
      controllerAs: ''
    })
    .otherwise({
      redirectTo: '/'
    });

}])

app.controller('MainController',function($scope){
  
  
});
app.controller('AgendaController',function($scope){
  
  
});
app.controller('ScheduleController',function($scope){
  
  
});