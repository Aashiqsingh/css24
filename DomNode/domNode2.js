const box = document.getElementById("box")
const btn = document.getElementById("btn")

btn.addEventListener("click",()=>{
    const form = document.createElement('form')
    const Nameinput = document.createElement('input')
    const namelabel = document.createElement('label')
    namelabel.innerHTML = "Name"
    form.appendChild(namelabel)
    form.appendChild(Nameinput)
    Nameinput.setAttribute('type','text')



    const emaillabel = document.createElement('label')
    emaillabel.innerHTML = "Email"
    form.appendChild(emaillabel)
    const emailinput = document.createElement('input')
    form.appendChild(emailinput)
    emailinput.setAttribute('type','email')
    // emailinput.setAttribute('placeholder','Enter your email')
    emailinput.placeholder = "Enter your email"



    const submit = document.createElement('input')
    submit.setAttribute("type","submit")
    submit.addEventListener("click",(event)=>{
        event.preventDefault()
        // submitHandler(event)
        console.log("form submited..");
    })

    





    form.appendChild(submit)
    box.appendChild(form)
})

// const submitHandler = (e)=>{

//     e.preventDefault();
//     console.log("Form submitted...");
// }