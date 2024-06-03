var images = ["img1.jpg","img2.jpg","img3.jpeg","img4.avif","img5.jpg"]

var currentIndex = 0

// var prevbutton = document.getElementById("prev")
// var nextbutton = document.getElementById("next")
var image = document.getElementById("image")

document.getElementById("prev").addEventListener("click",()=>{

    //0 = 0-1+5 % 5
    // 2 = 2-1+5 % 5
    currentIndex = (currentIndex-1+images.length)%images.length
    image.src = "../Images/"+images[currentIndex]
})

document.getElementById("next").addEventListener("click",()=>{
    // 
    // 3 = 3+1 % 5
    currentIndex = (currentIndex+1)%images.length
    image.src = "../Images/"+images[currentIndex]
})
