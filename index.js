const buttons = document.querySelectorAll(".buttons");
const equals = document.querySelector("#equals");
const ac = document.querySelector("#ac");
const screen = document.querySelector("#monitor");
const operator = document.querySelector(".op")

let calculatorStart = false;
 

 // start calculator
   ac.addEventListener("click", ()=>{
   
    calculatorStart= true;
    ac.textContent = "C";
    screen.textContent = populateScreen()
   })
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
       
          let split = str.split(" "),
             a = +split[0], 
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

// Returns to Default settings
   function clear(){ 
    if (ac.textContent==="C"){
    result = 0;
    display = "";
    screen.textContent = "";
    calculatorStart = false;
    ac.textContent = "AC";
    }
   }


   function performNewCalculation(num){
  
   let newCalc = new Calculation();

    ac.addEventListener("click", () => {

      console.log("The calculator is starting...")
     // setTimeout(screen.textContent = "The calculator is starting...", 3000)

    // initiate values
   if (ac.textContent === "AC"){ 

        ac.textContent = "C";
        calculatorStart = true;
        screen.style.color= "white";
        populateScreen(); 
   
   }
   else{
    reset();
  }
  }) 
  }
 performNewCalculation()






function populateScreen(){
   let result = 0;
    let display = "";
    let newCalc = new Calculation();

    //i///////////////////////////////////////////////e
buttons.forEach((btns)=>{

      btns.addEventListener("click", (e) => {  
            
   
       if (display === result && result !== 0){
 
        display += e.target.value;
        screen.textContent = display;
        console.log(display)
        result = newCalc.calculate(display);
        
       
     
         equals.addEventListener("click", ()=>{ 
         screen.textContent = ""
         screen.textContent = result;
         display= result;
      })
  } else{
   
            screen.textContent = "";
            display += e.target.value; 
            screen.textContent = display;
            console.log(display);
            result = newCalc.calculate(display);
           
                
      // display result of calculation when you click equals sign.
        equals.addEventListener("click", () => {
          screen.textContent="";
          screen.textContent = result;
          display= result;
       
         
    });  // write a conditional to clear screen when you want to populate the screen anew
        if (isNumber(e.target.value) ){// continue from here tomorrow!
         }
  }
        })

       
      })
  

 
   }
  

 
