const div = document.getElementById("ans")
const btn = document.getElementById("btn")
btn.addEventListener("click",()=>{

    const h1 = document.createElement('h1')
    h1.innerHTML = "Hello world"


    div.appendChild(h1);
})

btn.addEventListener("click",()=>{
    const img = document.createElement('img')
    img.src = "https://www.w3schools.com/howto/img_avatar.png"
    img.setAttribute('height','100px')

    div.appendChild(img);
})