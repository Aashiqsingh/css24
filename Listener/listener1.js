// document.getElementById("btn").addEventListener("click",()=>{

//     alert("Button called..")
// })

// var btn = document.getElementById("btn")
// btn.addEventListener("click",()=>{
//     alert("Button called..")
// })

// btn.addEventListener("mouseover",()=>{
//     btn.style.backgroundColor = "green"
// })
// btn.addEventListener("mouseleave",()=>{
//     btn.style.backgroundColor = "white"
// })


var div = document.getElementsByClassName("box1")
console.log(div);

// div[0].addEventListener("click",()=>{
//     div[0].style.backgroundColor = "green"
// })

// div[0].addEventListener("dblclick",()=>{
//     div[0].style.backgroundColor = "white"
// })

// div[1].addEventListener("mouseover",()=>{
//     div[1].style.backgroundColor = "yellow"
// })

// div[1].addEventListener("mouseout",()=>{
//     div[1].style.backgroundColor = "white"
// })

// div[2].addEventListener("mouseenter",()=>{
//     div[2].style.backgroundColor = "red"
// })

// div[2].addEventListener("mouseleave",()=>{
//     div[2].style.backgroundColor = "white"
// })




for(let i=0;i<div.length;i++){

    div[i].addEventListener("mouseenter",()=>{
        div[i].style.backgroundColor = "yellow"
    })
}

for(let i=0;i<div.length;i++){

    div[i].addEventListener("mouseleave",()=>{
        div[i].style.backgroundColor = "white"
    })
}

// div.addEventListener("click",()=>{
//     // div.style.backgroundColor = "green"
//     // alert("Div is called!!")
// })
