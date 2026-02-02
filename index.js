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


//    function performNewCalculation(num){
  
//    let newCalc = new Calculation();

//     ac.addEventListener("click", () => {

//       console.log("The calculator is starting...")
//      // setTimeout(screen.textContent = "The calculator is starting...", 3000)

//     // initiate values
//    if (ac.textContent === "AC"){ 

//         ac.textContent = "C";
//         calculatorStart = true;
//         screen.style.color= "white";
        
  
//     //add eventlistener to buttons and display their results in screen
//     buttons.forEach((btn) => {

//       btn.addEventListener("click", (e) => {  
//             screen.textContent = "";
//             display += e.target.value; 
//             screen.textContent = display;
//             console.log(display);
//             result = newCalc.calculate(display);
           
                
//       // display result of calculation when you click equals sign.
//         equals.addEventListener("click", () => {
//           screen.textContent="";
//           screen.textContent = result;
         
        
//     });
     
       
//       });
//       });
     
   
//    }
//    else{
//     reset();
//   }
//   }) 
//   }
//  performNewCalculation()


// //  function continueCalculation(a){
// //   let calc02 = new Calculation();
// //     if(screen.textcontent === a){
// //       display = string(a);
     
// //     }
// //  }



function populateScreen(){
   let result = 0;
    let display = "";
    let calc = new Calculation();

    //i///////////////////////////////////////////////e
buttons.forEach((btns)=>{

      btns.addEventListener("click",(e)=>{
        display += e.target.value;
        screen.textContent = display;
        console.log(display)
        result = calc.calculate(display);
        console.log(result);
        display = result;
        


         equals.addEventListener("click", ()=>{ 
         screen.textContent = ""
         screen.textContent = display;
      })
         
        })

       
      })
  // if 

  if (display === result && result !== 0){
operator.forEach((op)=> {
   op.addEventListener("click", ()=>{
     
    
 
   })
})
  }
   }
  

  
