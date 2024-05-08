// console.log("Hello world");
// console.info("Hello");
// console.warn("It is Warn function");
// console.error("It is error fuunction")

// a = "Shree ram";
// console.log("valu of a = ",a);
// console.log("type of a = ",typeof(a));

// avg = 12.78;
// console.log("value of avg = ",avg);
// console.log("Type of avg = ",typeof avg);

// name = "J";
// console.log("Value of name = ",name);
// console.log("Type of Name =", typeof name);

// isActive = true;
// console.log("value of isActive = ",isActive);
// console.log("Type of isActive = ",typeof isActive);

// let x;
// console.log("The value of x is",x);
// console.log("The type of x is ",typeof x);



// // There are three keywords here 
// 1. Let 
// 2. Var
// 3. const


var x = 5;
console.log("outer x = ",x);

let y = "shree  ram";
console.log("outer y = ",y);
const  pi = 3.14;
console.log("outer pi = ",pi);



{
    console.log("Inner x =",x);
    console.log("inner y",y);
    var z = 6;
    console.log("inner z = ",z);
    let xyz = true;
    console.log("inner xyz = ",xyz);

    console.log("inner pi = ",pi);
}
console.log("Outer z = ",z)
// console.log("inner xyz = ",xyz);



// Data type :- number , string , Boolean , Null , Undefined