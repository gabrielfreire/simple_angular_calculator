(function() {
    'use strict';

    angular
        .module('CalculatorApp')
        .controller('CalculatorController', CalculatorController);

    CalculatorController.$inject = ['$scope'];

    function CalculatorController($scope){
    	var vm = this;
    	vm.numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];
    	vm.operators = ["x", "+", "-", "/"];
    	$scope.title = "Calculator";
    	vm.output = "0";
    	vm.num1 = 0;
    	vm.value1 = 0;
    	vm.operator = "";
    	vm.inOperation = false;



    	vm.inputNumber = function inputNumber(n){
    		if(vm.output == "0"){
    			vm.output = n;		
    		}else{
    			vm.output += String(n);
    		}
    		vm.value1 = vm.output*1;   			
    	}
    	vm.clear = function clear(){
    		vm.output = "0";
    		vm.operator = "";
    		vm.num1 = 0;
    	}

    	vm.operate = function operate(operator){
    		// TODO make operation functionalities
    		if(operator == "x"){
    			operator = "*";
    			vm.num1 = vm.output;
    			vm.output += " " + operator + " ";
    		}else{
    			vm.num1 = vm.output;
    			vm.output += " " + operator + " ";
    		}
    		
    		
    	}
    	vm.equals = function equals(){
    		if(vm.output.length){
    			console.log("output length: " + vm.output.length + ", num1 length: " + (vm.num1.length + 1) + ", num1 : " + vm.num1);
    			vm.output = eval(vm.output);
    			vm.num1 = vm.output;
    		}else{
    			vm.output = vm.num1;
    		}
    	}
    }
})();