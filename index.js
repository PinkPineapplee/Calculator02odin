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
   ac.addEventListener("click", ()=>{
    let display = "";

    // initiate values
    ac.textContent= "C";
    calculatorStart = true
    screen.textContent = "";
    screen.style.color= "white"
    screen.style.fontSize = "40px";



    //add eventlistener to buttons and display their results in screen
    buttons.forEach((btn)=> {

      btn.addEventListener("click", (e)=> {   
      display += e.target.value;
      screen.textContent = display;
      return display;
      });
      });

       //make display values as arguments inside calculation class
    let result = new Calculation.calculate(display);
    
    // display result of calculation when you click equals sign.
     equals.addEventListener("click", ()=>{
     screen.textconent = result;
    })
      console.log(display);


   
    })
    
   return result
   }



   

   