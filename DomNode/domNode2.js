const box = document.getElementById("box")
const btn = document.getElementById("btn")

btn.addEventListener("click",()=>{
    const form = document.createElement('form')
    const Nameinput = document.createElement('input')
    form.appendChild(Nameinput)
    Nameinput.setAttribute('type','text')




    const emailinput = document.createElement('input')
    form.appendChild(emailinput)
    emailinput.setAttribute('type','email')
    // emailinput.setAttribute('placeholder','Enter your email')
    emailinput.placeholder = "Enter your email"

    

    const submit = document.createElement('input')
    submit.setAttribute('type','submit')
    submit.setAttribute('value','submit')

    form.appendChild(submit)






    box.appendChild(form)
})