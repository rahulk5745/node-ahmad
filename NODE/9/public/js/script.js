	var demo = angular.module('demo', ['ngRoute']);

	demo.config(function($routeProvider) {	   
		$routeProvider

			.when('/home', {
			
				templateUrl : 'pages/home.html',
				controller  : 'HomeController'
			})

			.when('/register', {
			
				templateUrl : 'pages/register.html',
				controller  : 'RegisterController'
			})

			.when('/login', {
			
				templateUrl : 'pages/login.html',
				controller  : 'LoginController'
			})

			
			.when('/contact', {
			
				templateUrl : 'pages/contact.html',
				controller  : 'ContactController'
			});
	});

	demo.controller('HomeController', function($scope) {
		$scope.message = 'Home Page!';
	});

	demo.controller('RegisterController', function($scope,$http)
	{
		$scope.message = 'Register Page!';
		$scope.url='http://localhost:4300/register';
		
		$scope.show=function()
		{
		$http.post($scope.url,{"username":$scope.t1,"password":$scope.t2})
.then(function(data)
{console.log(data.data);
})		
		}
		
       	});

	
	demo.controller('LoginController', function($scope,$http) 
	{
		$scope.message = 'Login Page!';
        $scope.url='http://localhost:4300/login';
		
		$scope.show1=function()
		{
     alert("welcome");		
		$http.post($scope.url,{"username":$scope.t1,"password":$scope.t2})
			
			.then(function(data)
			{
				console.log(data);
				$scope.data=data;
				console.log("result found");
		})
		}
		});
	
	demo.controller('ContactController', function($scope) {
		$scope.message = 'Contactus Page!';
	});