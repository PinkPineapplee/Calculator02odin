const buttons = document.querySelectorAll(".buttons");
const equals = document.querySelector("#equals");
const ac = document.querySelector("#ac");
const screen = document.querySelector("#monitor")
const operatorBtns = document.querySelectorAll(".operators");
const numberBtns = document.querySelectorAll(".numbers")

let calculatorStart = false;
 
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
 
     numberBtns.forEach((btn) => {

      btn.addEventListener("click", (e) => {  
        screen.textContent= "";
        display += e.target.value;
        screen.textContent = display;

      });
    })

     operatorBtns.forEach((btn) => {

      btn.addEventListener("click", (e) => {  
        display += e.target.value;
        screen.textContent = display;

      });
    })
    }
    


// Returns to Default settings
   function reset(){ 
    result = 0;
    display = "";
    screen.textContent = "";
    calculatorStart = false;
    ac.textContent = "AC";
   }


   function performNewCalculation(){
    let display = "";
    let result = 0;

    ac.addEventListener("click", () => {

      console.log("The calculator is starting...")
      setTimeout(screen.textContent = "The calculator is starting...", 3000)

    // initiate values
   if (ac.textContent === "AC"){ 

        ac.textContent = "C";
        calculatorStart = true;
        screen.style.color= "white";
         populateScreen()

   let newCalc = new Calculation();
   let values = '';
   
    //add eventlistener to buttons and display their results in screen
    buttons.forEach((btn) => {

      btn.addEventListener("click", (e) => {  
      
       if (result !== 0){
            values = result;
            values += e.target.value; 
            console.log(values);
            result = newCalc.calculate(values)

                
      // display result of calculation when you click equals sign.
        equals.addEventListener("click", () => {
          screen.textContent="";
          display = result;
          screen.textContent = display;
       
    });
          }
          else if(result === 0 ) {
            values += e.target.value;
            console.log(values);
            result = newCalc.calculate(values);
             populateScreen(result,values)


        // display result of calculation when you click equals sign.
        equals.addEventListener("click", () => {
          screen.textContent="";
          display = result;
          screen.textContent = display;
       
    });
          }
            
      });
      });
     
   
   }
   else{
    reset();
  }
  }) 
  }
 performNewCalculation()
