const app = angular.module('myApp',[]);

// todoCtrl

app.controller('todoCtrl', function( $scope )
{
    $scope.todoList = [{todoText: 'Clean house', done: false}];

    $scope.todoAdd = function(){
        $scope.todoList.push({todoText:$scope.todoInput, done: false});
        $scope.todoInput = "";

        angular.element('#firstInput').focus();
    };

    $scope.remove = function(){
        let oldList = $scope.todoList;
        $scope.todoList = [];
        angular.forEach(oldList, function(x){
            if(!x.done) $scope.todoList.push(x);
        });
    };

});