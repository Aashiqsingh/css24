function add(a,b){

    console.log("Addition = ",a+b);
}

function subtract(a,b){

    console.log("Subtraction = ",a-b);
}

function multiply(a,b){

    console.log("Multiplication = ",a*b);
}

function divide(a,b){
    console.log("Division = ",a/b);

}


var x = parseInt(prompt("Enter first number "))
var y = parseInt(prompt("Enter second number "))

var choice = parseInt(prompt("1 for add \n 2 for subtract \n 3 for multiply \n 4 for divide \n\n\n Enter your choice :"))


switch(choice){

    case 1:
        add(x,y);
        break;
    case 2:
        subtract(x,y);
        break;
    case 3:
        multiply(x,y);
        break;
    case 4:
        divide(x,y);
        break;
    default:
        console.log("Invalid choice");
}