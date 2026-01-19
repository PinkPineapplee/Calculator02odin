const buttons = document.querySelectorAll(".buttons");
const equals = document.querySelector("#equals");
const ac = document.querySelector("#ac");
const screen = document.querySelector("#monitor")


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
          symbols = ["+","-","/","*","**"];
         let split = str.split(str.includes(symbols));
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
   console.log("The calclator is starting...")
    let display = "";
    let result = 0;
    // initiate values
    ac.textContent= "C";
    calculatorStart = true;
    screen.textContent = "";
    screen.style.color= "white"
    



    //add eventlistener to buttons and display their results in screen
    buttons.forEach((btn)=> {

      btn.addEventListener("click", (e)=> {   
      display += e.target.value;
      screen.textContent = display;
      
      //make display values as arguments inside calculation class
      let calc = new Calculation();
        result = calc.calculate(display);
      });
      });

      
    
    // display result of calculation when you click equals sign.
     equals.addEventListener("click", ()=>{
      screen.textContent = "";
      console.log("equals was clicked!")
      screen.textconent = result;
      console.log(result)
    })
      console.log(display);


   
    })
    
   
   }populateScreen()



   function clearScreen(){
      if(screen.textContent!== ""){
         screen.textContent="";
      }
   }

   