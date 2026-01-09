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

let Calculotor ={

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

    //funtion that performs calculation

   function populateScreen(){
    
   } 