var users = ["Rama","Shyam","Parth","kunal","omse","lakshman","seeta","hanuman"]

console.log(users);

// console.log(users[0]);
// console.log(users[1]);


// var flag = false;
// for(let i=0;i<users.length;i++)
// {
//     if(users[i].length<4){
//         flag = true;
//     }
// }
// console.log(flag);


// users[i]
// var user = users.some((user)=>{

//     return user.length <4;  // ||
// })
// console.log(user);


// var user = users.some((u)=> u.startsWith("k"))
// console.log(user);

// Rama
// shyam

var user = users.some((u)=> u.length < 4)
console.log(user);