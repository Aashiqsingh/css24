var a = parseInt(prompt("Enter first value"));
var b = parseInt(prompt("Enter second value"));


function add(a,b){

    return a + b;

}

function sub(x,y){

    console.log("Subtract = ", x-y);
}

function mul(){

    return a * b;
}

function  div(){

    var x = a / b;
    console.log("Divide = ",x);
}


var choice = parseInt(prompt("Enter your choice :"));

switch(choice){

    case 1:
        let x = add(a,b);
        console.log("Addition = ",x);
        break;

    case 2:
        sub(a,b);
        break;
        
    case 3:
        console.log("Multiply =",mul());
        break;
    
    case 4:
        div();
        break;
}


