'use strict';

function ReverseAreaController(reverseFilter){
	this.directWord = '12345';
	this.reversedWord = reverseFilter(this.directWord);
}

angular.module('ReverseArea',[]).
component('reverseArea', {
	templateUrl: 'component-template.html',
	controller: ReverseAreaController,
	controllerAs: 'ctrl',
});