var users = ["ram","seeta","hanuman","lakshman","spiderman","monkey"]


// for(let i=0;i<users.length;i++)
// {
//     if(users[i].length>5)
//     {
//         console.log(users[i]);
//     }
// }

// Fileter will return new array with filtered data
// var x = users.filter((user)=>{
//     return user.length>5
// })
// console.log(x);


var sname = "lakshman"

var x = users.filter((u)=>{

    //ram - true
    //seeta - true
    //lakshamn - false - remove
    return u!=sname;
})

console.log(x);


