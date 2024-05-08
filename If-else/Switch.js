var n1 = parseInt(prompt("Enter first number:-"));
var n2 = parseInt(prompt("Enter second number:"));

var choice = prompt("+ for Addition \n - for Subtraction \n * for Multiplication \n / for Division \n\n\n\n Enter your choice :-");


switch(choice){

    case "+":
        // let add = n1 + n2;
        // console.log("Addition = ",add);
        alert("Sum is " + (n1+n2));
        break;

    case '-':
        let sub = n1 - n2;
        // console.log("Subtract = ",sub);
        alert("Subtraction = " + sub) ;
        break;
}       

