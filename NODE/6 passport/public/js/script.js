var myapp=angular.module("myapp",['ngRoute']);
myapp.config(function($routeProvider)
{
$routeProvider
.when('/admin',
{
templateUrl:'loginform.ejs',
controller:'abc'
})
});

myapp.controller("myctrl",function($scope,$http,$location)
{
$scope.login_btn=function()
{
$http
({
method:'GET',
url:'http://localhost:1234/loginform'
})
.then(function(response)
{
$location.path('/admin');
});
}});

myapp.controller("abc",function($scope)
{
});
