	var scotchApp = angular.module('scotchApp', ['ngRoute']);

	scotchApp.config(function($routeProvider) {	   
		$routeProvider

			.when('/', {
			
				templateUrl : 'pages/home.html',
				controller  : 'mainController'
			})

			.when('/register', {
			
				templateUrl : 'pages/register.html',
				controller  : 'registerController'
			})

			.when('/login', {
			
				templateUrl : 'pages/login.html',
				controller  : 'loginController'
			})

			
			.when('/contact', {
			
				templateUrl : 'pages/contact.html',
				controller  : 'contactController'
			});
	});

	scotchApp.controller('mainController', function($scope) {
		$scope.message = 'Home Page!';
	});

	scotchApp.controller('registerController', function($scope,$http)
	{
		$scope.message = 'Register Page!';
       $scope.url='http://localhost:4300/register';
    
		$scope.show=function()
		{
     $http.post($scope.url,{"username":$scope.t1,"password":$scope.t2})
	 .then (function(data)
{
console.log(data.data);
alert(data.data);	
	})
		}	
	})

	
	scotchApp.controller('loginController', function($scope,$http) 
	{
		$scope.message = 'LOGIN PAGE!';
	
	   $scope.url='http://localhost:4300/login';
    
		$scope.show1=function()
		{ alert("aaaa");
		$http.post($scope.url,{"username":$scope.t1,"password":$scope.t2})
		
.then(function(data)
{
console.log(data);

$scope.data=data;
console.log("result found");
})
	}
	});	

	
	scotchApp.controller('contactController', function($scope) {
		$scope.message = 'Contactus Page!';
	});