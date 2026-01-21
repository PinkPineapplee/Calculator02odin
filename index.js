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

   

   function populateScreen(){
 
   ac.addEventListener("click", () => {

   console.log("The calclator is starting...")
   

    // initiate values
   if (ac.textContent === "AC"){ 

        ac.textContent = "C";
        calculatorStart = true;
        screen.textContent = "";
        screen.style.color= "white"
  
    
    //add eventlistener to buttons and display their results in screen
    buttons.forEach((btn) => {

      btn.addEventListener("click", (e) => {  
      
      display += e.target.value;
      screen.textContent = display;
      
      //make display values as arguments inside calculation class
       let calc = new Calculation();
        result = calc.calculate(display);
        
        // display result of calculation when you click equals sign.
     equals.addEventListener("click", () => {
       screen.textContent = "";
       console.log("equals was clicked!");
       screen.textContent = result;
       console.log(result)
       performNewCalculation(result);
    })
      });
      });
     
      
    }else{

    calculatorStart = false;
    ac.textContent = "AC";
    reset();
  }
    
      console.log(display);
      return result;
    })
   }populateScreen()



   function reset(){ 
    result = 0;
    display = "";
    screen.textContent = "";
    
    return result , display;
   }


   function performNewCalculation(results){
    let newCalc = new Calculation();
     
       // this event watches for user decisions through event listeners,
       //  if user want to use result to calculate new or if user want to do a new calculation.
      
       operatorBtns.addEventListener("click",(e)=>{
       if (results !== 0){
        display += `${results} ` + e.target.value;
        screen.textContent= display;
         results = newCalc.calculate(display);
       }
       else if (results === 0){
        
        display += e.target.value;
        screen.textContent= display;
        results = newCalc.calculate(display)
       }
       })

       numberBtns.addEventListener("click"), (e)=>{
        if (results !== 0){
        reset();
        display = e.target.value;
        screen.textContent= display;
        results = newCalc.calculate(display);
        }
       }
   }