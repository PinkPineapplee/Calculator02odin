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

let calculatorStart = false;
//create calculator object

class Calculation {

    constructor(firstNum,  secondNum ,operator,){
        this.firstNum = firstNum;
        this.secondNum = secondNum;
        this.operator = {
        "-": (a, b) => a - b,
        "+": (a, b) => a + b,
        "/": (a, b) => a / b,
        "*": (a, b) => a * b,
        "**": (a, b) => a ** b,
        "+/-": a => a === a ? -a : a,
        "%": a => a/100
     }
    
    };}

   

  

   function populateScreen(){
    let display = "";
    screen.textContent = display;
    buttons.addEventListener("click", (e)=> { 
     display += e.target.value
     return display
    })
    console.log(display);
   return display;
   }



   function getCalculation(){
    ac.addEventListener("click", ()=>{
       calculatorStart = true
    
    
   let calc = new Calculation(firstNum, operator, secondNum)
    })
   }

   function getNumberInString(){
    let value = populateScreen();
    let valueArray = value.map()
   }