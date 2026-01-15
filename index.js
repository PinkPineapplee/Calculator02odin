const buttons = document.querySelectorAll(".buttons");
const minus = document.querySelector("#subtract");
const add = document.querySelector("#plus");
const multiply = document.querySelector("#multiply");
const divide = document.querySelector("#divide");
const equals = document.querySelector("#equals");
const ac = document.querySelector("#ac");
const percent = document.querySelector("#percent");
const screen = document.querySelector("#monitor")
const sign = document.querySelector("#sign")


//create calculator object

class Calculotor ={
    constructor(){
      addition(a,b){
     return a + b;
    },
    subtraction(a,b){
        return a - b ;
    },
    division(a,b){
        return a / b ;
    },
    multiplication(a,b){
        return a * b ;
    },
    percentage(num){
        return num/100;
    },
    sign(num){
     let changeSign = num
     num == num ? changeSign= -num : changeSign= num;
        return changeSign
    }
     

    }
    
    }

    //funtion that performs calculation
function Calculator() {

  this.methods = {
    "-": (a, b) => a - b,
    "+": (a, b) => a + b
  };

  this.calculate = function(str) {

    let split = str.split(' '),
      a = +split[0],
      op = split[1],
      b = +split[2];

    if (!this.methods[op] || isNaN(a) || isNaN(b)) {
      return NaN;
    }

    return this.methods[op](a, b);
  };

  this.addMethod = function(name, func) {
    this.methods[name] = func;
  };
}

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
alert( result ); // 8
   function populateScreen(){
    
   } 