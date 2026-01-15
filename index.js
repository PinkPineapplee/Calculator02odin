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

class Calculation ={
    constructor(firstNum, operator, secondNum){
        this.firstNum = firstNum;
        this.secondNum = firstNum;
        this.operator = {
        "-": (a, b) => a - b,
        "+": (a, b) => a + b,
        "/": (a, b) => a / b,
        "*": (a, b) => a * b,
        "**": (a, b) => a ** b,
        "+/-": a => a === a? -a : a,
        "%": a => a/100
  };
    
    }

    //funtion that performs calculation
function Calculator() {

  this.methods = {
    "-": (a, b) => a - b,
    "+": (a, b) => a + b
  };

  let calc = new Calculation(firstNum, operator, secondNum)

   function populateScreen(){
    
   } 