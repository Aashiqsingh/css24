var student = [
    {
        id:101,
        name:"parth",
        email:"parth@gmail.com",
        city:"ahmedabad",
        age:23
    },
    {
        id:102,
        name:"vishal",
        email:"vishal@gmail.com",
        city:"mumbai",
        age:25
    },
    {
        id:103,
        name:"Rohan",
        email:"rohan@gmail.com",
        city:"Delhi",
        age:35
    }

]

// console.log(student);

// student.forEach((stu)=>{
//     console.log(stu.name);
// })

// student = student.map((stu)=>{

//     return stu.name.toUpperCase()
// })

// console.log(student);

var stuObj = student.map((stu)=>{

    return({
        rollno:stu.id,
        name:stu.name.toUpperCase(),
        email:stu.email,
        city:stu.city,
        age:stu.age,
        isActive:true
    })
})

console.log(stuObj);