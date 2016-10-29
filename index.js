'use strict';

var app = angular.module('MyApp',[]);

app.filter('reverse', function(){
	return function(str){
		if (!str) return '';
		var newStr = '';
		for (var i=(str.length-1); i>=0; i--) {
			newStr += str[i];
		}
		return newStr;
	}
});

app.controller('MyCtrl', function(){
	this.name = 'Фильтры';
});

app.component('reverseArea', {
	template: `
		<fieldset>
			<legend>Reversing area</legend>
			<lebel>Enter some text:<br>
			<input type='text' ng-model="ctrl2.directWord">
			<p><b>{{ ctrl2.directWord | reverse }}</b></p>
		</fieldset>
	`,
	controller: function(){
		//this.directWord;
		this.directWord = '123';
		//this.reversedWord = reverseFilter(this.directWord);
	},
	controllerAs: 'ctrl2',
});
