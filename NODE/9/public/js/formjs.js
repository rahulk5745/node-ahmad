var app=angular.module('formexample',[]);
app.controller("mainController",function($scope,$http)
{
$scope.url="http://localhost:4300/register";

{
$http.post($scope.url,{"username":$scope.username,"password":$scope.password})
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