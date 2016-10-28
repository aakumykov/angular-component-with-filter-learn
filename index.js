'use strict';

var app = angular.module('MyApp',[]);

app.filter('reverse', function(){
	return function(str){
		var newStr = '';
		for (var i=(str.length-1); i>=0; i--) {
			newStr += str[i];
		}
		return newStr;
	}
});

app.controller('MyCtrl', ['reverseFilter', function(reverseFilter){
	this.name = 'Фильтры';
	this.string1 = '';
}]);