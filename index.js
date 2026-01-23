const buttons = document.querySelectorAll(".buttons");
const equals = document.querySelector("#equals");
const ac = document.querySelector("#ac");
const screen = document.querySelector("#monitor")
const operatorBtns = document.querySelectorAll(".operators");
const numberBtns = document.querySelectorAll(".numbers")

let calculatorStart = false;
 let display = "";
  let result = 0;
//create calculator object
class Calculation {

    constructor(){
        this.operator = {
        "-": (a, b) =>  a - b,
        "+": (a, b) =>  a + b,
        "/": (a, b) =>  a / b,
        "*": (a, b) =>  a * b,
        "**": (a, b) =>  a ** b,
        "+/-": a => a === a ?  -a :  a,
        "%": a => a/100
     }
     
       this.calculate = function(str){
       
          let split = str.split(" ");
            
          let  a = +split[0], 
            op = split[1],
            b = +split[2];

         if (!this.operator[op] || isNaN(a) || isNaN(b)){
            return NaN;
         }  
         
         return this.operator[op](a,b);

       };

       this.addNewOperator = function(name, func){
         this.operator[name] = func;
       };
    };
   }

   
   function performNewCalculation(results){
   let newCalc;
   let values = '';
    //add eventlistener to buttons and display their results in screen
    buttons.forEach((btn) => {

      btn.addEventListener("click", (e) => {  
      
       if (results !== 0){
            values += results + e.target.value; 
            results = newCalc.calculate(values);
          }
          else {
            
            values += e.target.value;
            results = newCalc.calculate(values);
          }
        
       
      });
      });
     
     return results;  
   };




   function populateScreen(){
 
    ac.addEventListener("click", () => {

     console.log("The calclator is starting...")
    
   
    // initiate values
   if (ac.textContent === "AC"){ 

        ac.textContent = "C";
        calculatorStart = true;
        screen.textContent = "";
        screen.style.color= "white";


         // display result of calculation when you click equals sign.
     equals.addEventListener("click", () => {
      performNewCalculation(result)
      
      screen.textContent = performNewCalculation();
       
       
    })
    }else{

    calculatorStart = false;
    ac.textContent = "AC";
    reset();
  }
    
    })
   }populateScreen()



   function reset(){ 
    result = 0;
    display = "";
    screen.textContent = "";
    
    
   }

