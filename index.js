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

app.component('reverseArea', {
	template: `
		<div>Переворот</div>
		<ul>
			<li>name: {{ ctrl2.name }}</li>
			<li>reversedName: {{ ctrl2.reversedName }}</li>
		</ul>
	`,
	controller: ['reverseFilter', function(reverseFilter){
		this.name = 'внутренний контроллер reverseArea';
		this.reversedName = reverseFilter(this.name);
	}],
	controllerAs: 'ctrl2',
});
