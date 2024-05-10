// function ZoomOut()
// {

//     let myImg = document.getElementById("myImg")
//     myImg.style.height = "200px",
//     myImg.style.width="150px",
//     myImg.src = "https://m.media-amazon.com/images/I/61uZWdaGnbL.jpg",
// }


function zoomIn(){

    let myImg = document.getElementById("myImg")
    myImg.style.height = "400px",
    myImg.style.width= "400px"
}


var count = 0;
function move(){

    let para = document.getElementById("para")
    para.style.height = "200px",
    para.style.width = "200px",
    para.style.border = "3px solid red",
    para.style.color = "blue"



    console.log(count++);
}