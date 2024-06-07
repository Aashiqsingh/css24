var users = [
    {
        id:1,
        name:"vatsal",
        age:22,
        email:"vatsal@gmail.com"
    },
    {
        id:2,
        name:"vishal",
        age:25,
        email:"vishal@gmail.com"
    },
    {
        id:3,
        name:"raju",
        age:30,
        email:"raju@gmail.com"
    }
]




// const tbody = document.getElementById("tbody")
// const btn = document.getElementById('btn')
// btn.addEventListener("click",()=>{
//     for(let i=0;i<users.length;i++){

//         const tr = document.createElement('tr')
//         const Nametd = document.createElement('td')
//         Nametd.innerHTML = users[i].name
    
//         const Agetd = document.createElement('td')
//         Agetd.innerHTML = users[i].age
    
//         const Emailtd = document.createElement('td')
//         Emailtd.innerHTML = users[i].email

//         const submittd = document.createElement('td')
//         const btn = document.createElement('button')

//         btn.addEventListener("click",()=>{
//             alert("name = "+users[i].name)
//         })
//         btn.innerHTML = "Details"
    
    
        
//         tr.appendChild(Nametd)
//         tr.appendChild(Agetd)
//         tr.appendChild(Emailtd)
//         tr.appendChild(submittd)
//         submittd.appendChild(btn)
//         tbody.appendChild(tr)
//     }
// })


const tbody = document.getElementById("tbody")
const btn = document.getElementById('btn')
var i = 0;
var n = 0;
btn.addEventListener("click",()=>{
   


        const tr = document.createElement('tr')
        const Nametd = document.createElement('td')
        Nametd.innerHTML = users[i].name
    
        const Agetd = document.createElement('td')
        Agetd.innerHTML = users[i].age
    
        const Emailtd = document.createElement('td')
        Emailtd.innerHTML = users[i].email

        const submittd = document.createElement('td')
        const btn = document.createElement('button')
        

        btn.addEventListener("click",()=>{
            
            
        })
        btn.innerHTML = "Details"
    
    
        
        tr.appendChild(Nametd)
        tr.appendChild(Agetd)
        tr.appendChild(Emailtd)
        tr.appendChild(submittd)
        submittd.appendChild(btn)
        tbody.appendChild(tr)
    
        i++;
})