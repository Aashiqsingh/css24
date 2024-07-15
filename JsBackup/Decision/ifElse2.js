var isAlive = true;
var age = 19;


// if(isAlive === true)
// {
//     if(age > 18)
//     {
//         console.log("you are young");
//     }
//     else{
//         console.log("you are kids");
//     }
// }
// else{

//     console.log("DEAD");
// }


// year 1800
var year = 2200;

if(year % 4 == 0 && year % 100 != 0 || year % 400 == 0){
    console.log("LEAP year");
}
else{
    console.log("Not a leap year");
}