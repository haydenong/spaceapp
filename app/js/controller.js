(function() {
    'use strict';

    angular.module('spaceApp')
    		.controller('MacroCtrl', MacroCtrl);

    function MacroCtrl($http, $scope) {
    	var vm = this;
    	vm.radiation = [];
    	vm.sunrise = [];
    	vm.sunset = [];


    	$http.get('data/radiation.json')
    		.then(function (res) {
    			vm.radiation = res.data;
    			console.info("radiation".res.data);
    		});

    	$http.get('data/sunrise.json')
    		.then( function (res) {
    			vm.sunrise = res.data;
    			console.info("sunrise".res.data);
    		})

    	$http.get('data/sunset.json')
    		.then( function (res) {
    			vm.sunrise = res.data;
    			console.info("sunset".res.data);
    		})
    }

    MacroCtrl.$inject = ["$http", "$scope"];

})();