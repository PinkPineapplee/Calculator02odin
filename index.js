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

    constructor(){
       
        this.operator = {
        "-": (a, b) => a - b,
        "+": (a, b) => a + b,
        "/": (a, b) => a / b,
        "*": (a, b) => a * b,
        "**": (a, b) => a ** b,
        "+/-": a => a === a ? -a : a,
        "%": a => a/100
     }
     
       this.calculate = function(str){

         let split = str.split(" "),
            a = +split[0],
            op = split[1],
            b = +split[2];

         if (!this.operator[op] || isNaN(a) || isNaN(b)) {
            return NaN;
         }  
         
         return this.operator[op](a,b);

       };

       this.addNewOperator = function(name, func){
         this.operator[name] = func;
       };
    };
   }

   

   function populateScreen(){
    let display = "";
    screen.textContent = " ";
     
    //add eventlistener to buttons and display their results in screen
    buttons.forEach((btn)=> {

    btn.addEventListener("click", (e)=> { 

      if(btn !== "%" || btn !== "+/-"){
     display += e.target.value;
     screen.textContent = display;
     }
    });
    });
    // display result of calculation when you click equals sign.
     equals.addEventListener("click", ()=>{
     screen.textconent = getCalculation();
    })
    console.log(display);
   return display;
   }



   function getCalculation(){
    ac.addEventListener("click", ()=>{
      calculatorStart = true
    
    //make populateScreen function call inside calculation class
   let result = new Calculation.calculate(populateScreen());
    
    })
    return result;
   }

   