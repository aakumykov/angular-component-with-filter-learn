'use strict';

angular.module('ReverseArea',[]).
component('reverseArea', {
	template: `
		<fieldset>
			<legend>Reversing area</legend>
			<p>original word: {{ctrl.directWord}}</p>
			<p>filtered word: <i>{{ ctrl.reversedWord }}</i></p>
		</fieldset>
	`,
	controller: ['reverseFilter', function(reverseFilter){
		this.directWord = '12345';
		this.reversedWord = reverseFilter(this.directWord);
	}],
	controllerAs: 'ctrl',
});