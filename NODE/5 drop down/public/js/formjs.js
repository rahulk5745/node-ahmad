var app=angular.module('formexample',[]);
app.controller("getvalue",function($http,$scope)
{
$scope.url="http://localhost:4300/dropdown";

$scope.displaydata=function()
{
$http.post('http://localhost:4300/getdropdown',{"userId":''})
.success(function(data,status)
{
$scope.usermain=data;
})
}

$scope.onuserchange=function()
{
$scope.dropdata=$scope.selectedId;
}
});
