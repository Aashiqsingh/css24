var users = ["ram","seeta","hanuman","lakshman","spiderman","monkey"]




// var newuser = []
// for(let i=0;i<users.length;i++)
// {
//     // console.log(users[i].toUpperCase());
//     // newuser[i] = users[i].toUpperCase()
//     newuser.push(users[i].toUpperCase())

// }
// console.log(newuser);

// Map : it will return new array with same length
// var newarry = []
users = users.map((user)=>{

    return user.toUpperCase();
    

})

console.log(users);