'use strict';

angular.module('ReverseArea',[]).
component('reverseArea', {
	templateUrl: 'component-template.html',
	controller: ['reverseFilter', function(reverseFilter){
		this.directWord = '12345';
		this.reversedWord = reverseFilter(this.directWord);
	}],
	controllerAs: 'ctrl',
});