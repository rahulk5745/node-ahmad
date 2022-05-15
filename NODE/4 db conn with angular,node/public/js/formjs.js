var app=angular.module('formexample',[]);
app.controller("formctrl",function($scope,$http)
{
$scope.url="http://localhost:4300/custsearch";
$scope.formsubmit=function(isvalid)
{
if(isvalid)
{
$http.post($scope.url,
{
	"name":$scope.name,
	"email":$scope.email,
	"message":$scope.message
	})
.success(function(data,status)
{
console.log(data);
console.log("ok" +status);
$scope.status=status;
$scope.data=data;
$scope.companies=data;
})
}
else
{
alert('form is not valid');
}
}
});