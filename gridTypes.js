var grid = angular.module('grid', []);
 
grid.directive('gridDirective', gridDirective);
grid.factory('dataService', dataService);
grid.factory('headerService', headerService);
grid.factory('itemsService', itemsService);

/*
This gridDirective receives through the mechanism of dependence-injection 
three services. 
The directive returns a set object when it is defined as 
- restrict specifies that the directive is supported only by using a 
  complete tag of html rather than using the attribute. 
- The template property specifies that the directive returns a GUI when the 
  GUI is a table with the headers taken from serviec called headerService 
  and the content from a service called dataService. 
- The link attribute specifies that the directive keeps the services it 
  received in its scope variables.
*/
var gridDirective = function (dataService, headerService, itemsService) 
{
    return {
        restrict: 'E',
        template: '<table class=”table table-striped table-bordered table-condensed”>' +
        '<thead>' +
        '<tr><th data-ng-repeat=”a in headerService”><span>{{a}}</span></th></tr>' +
        '</thead>' +
        '<tr data-ng-repeat=”item in items”>' +
        '<td ng-repeat=”param in dataService(item)”> <span>  {{param}} </span></td>' +
        '</tr></table>',

        link: function (scope) {
            scope.dataService = dataService;
            scope.headerService = headerService;
            scope.items = itemsService;
        }
    }
}

/*
A Service that returnes the appropriate data for every row
*/
var dataService = function () 
{
    return function (obj) 
    {
        return {
            a: 'Content A',
            b: 'Content B',
            c: 'Content C'
        };
    }
}

/*
A Service that Provides the headers for the grid columns
*/
var headerService = function () 
{
    return [
        'Column A',
        'Column B',
        'Column C',
    ];
}

/*
A Service that Returns the list of objects for the grid
*/
var itemsService = function () 
{
    return [
        { name: 'Tomer', age: 29 }, 
        { name: 'Tal chaim', age: 11 }
    ];
}

// http://blogs.microsoft.co.il/tomer4642/2014/12/19/basic-grid/