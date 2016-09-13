(function() {
    'use strict';

    angular
        .module('CalculatorApp')
        .controller('CalculatorController', CalculatorController);

    CalculatorController.$inject = ['$scope'];

    function CalculatorController($scope){
    	var vm = this;



    	/* Array that will be used to populate the calculator buttons */
    	vm.numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];
    	vm.operators = ["x", "+", "-", "/"];
    	
    	vm.output = "0";
    	vm.num1 = 0;
    	vm.operator = "";
    	vm.inOperation = false;


    	//inputNumber will  update the display as the user clicks the button
    	vm.inputNumber = function inputNumber(n){
    		if(vm.output == "0"){
    			vm.output = n;		
    		}else{
    			vm.output += String(n);
    		}
    		  			
    	}
    	//Function to clear the display
    	vm.clear = function clear(){
    		vm.output = "0";
    		vm.operator = "";
    		vm.num1 = 0;
    	}
    	//Function to get the chosen operator and concatenate with the numbers
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
    	//concatenate the numbers as String object and then use eval() function to display the result
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