'use strict';

var app = angular.module('MyApp',[]);

app.filter('reverse', function(){
	return function(str){
		var newStr = '';
		for (var i=(str.length-1); i>=0; i--) { newStr += str[i]; }
		return newStr;
	}
});

app.component('reverseArea', {
	template: `
		<fieldset>
			<legend>Reversing area</legend>
			<p>direct word: {{ctrl.directWord}}</p>
			<p>reversed word: <i>{{ ctrl.reversedWord }}</i></p>
		</fieldset>
	`,
	controller: ['reverseFilter', function(reverseFilter){
		this.directWord = '12345';
		this.reversedWord = reverseFilter(this.directWord);
	}],
	controllerAs: 'ctrl',
});
