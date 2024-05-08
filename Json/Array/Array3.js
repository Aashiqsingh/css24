var company = [
    {
        name:"google",
        employee:[
            {
                name:"john",
                age:25,
                position:"Software Engineer",
                salary:60000,
                IsMarried: true,
                gender:"male",
                child:2
            },
            {
                name:"kavya",
                age:31,
                position:"Manager",
                salary:80000,
                IsMarried: false,
                gender:"female",
                child:0
            },
            {
                name:"chetan",
                age:43,
                position:"CTO",
                salary:90000,
                IsMarried:true,
                gender:"male",
                child:1,
            }
        ]
    },
    {
        name:"facebook",
        employee:[
            {
                name:"mark",
                age:37,
                position:"CEO",
                salary:34000,
                IsMarried:false,
                gender:"male",
                child:0
            },
            {
                name:"priya",
                age:31,
                position:"CFO",
                salary:25000,
                IsMarried:true,
                gender:"female",
                child:1
            },
            {
                name:"sapna",
                age:26,
                position:"Software Engineer",
                salary:18000,
                IsMarried:false,
                gender:"female",
                child:0
            }
        ]
    }
]

// find google employees


// var x = company.find((comp)=>comp.name=="google").employee.map((emp)=>emp.name)
// console.log(x);


// var totalSalary = company.find((comp)=>comp.name=="facebook").employee.reduce((sum,emp)=>sum+emp.salary,0)
// console.log(totalSalary);


// var femaleemp = company.find((comp)=>comp.name=="facebook").employee.filter((emp)=>emp.gender=="female")
// console.log(femaleemp);

// var fndChild = company.find((comp)=>comp.name=="google").employee.filter((emp)=>emp.child>0)
// console.log(fndChild);


var fndMarried = company.map((comp)=>{
    return comp.employee.filter((emp)=>emp.IsMarried==true)
})
console.log(fndMarried);