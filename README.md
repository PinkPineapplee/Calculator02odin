# Calculator02odin
A simple Calculator.


I incorporated a nice calculation class to perform calculations.

```class Calculation {

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
 ```