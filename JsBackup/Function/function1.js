// without return type without arguments 

function demo(){


    console.log("hii i am demo function");

}

// demo()

// without return type with arguments

function add(x,y){

    console.log("Addition = ",x+y);
}

// add(3,4)

// with return type without arguments

function demo2(){

    return "hii i am demo2 function";

}

// var x = demo2()
// console.log(x);

// console.log("This is = ",demo2());

// with return type with arguments

var x = parseInt(prompt("Enter first number"))
var y = parseInt(prompt("Enter second number"))

function mul(a,b){

    return a*b;
}

var x = mul(x,y)
console.log("multiply = ",x);