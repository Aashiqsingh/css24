// var x = document.getElementById("txt").innerHTML
// console.log(x);

// document.getElementById("txt").innerHTML = "Hello world!!"
function changeText(){
    const x = document.getElementById("txt").innerHTML
    console.log(x);

    document.getElementById("txt").innerHTML = "Hello world"
    
}
function changeColor(){

    // var myDiv = document.getElementById("myDiv")
    // myDiv.style.backgroundColor = "red",
    // myDiv.style.color = "white",
    // myDiv.style.height = "100px",
    // myDiv.style.width = "300px",
    // myDiv.style.border = "2px solid green"

    
}
function changeHref(){

    const myLink = document.getElementById("myLink")
    myLink.href = "https://www.netflix.com",
    myLink.innerHTML = "Netflix"
}