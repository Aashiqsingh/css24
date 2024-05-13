// // var color= ["red","green","yellow","blue","pink","brown","teal"]


// const changeColor = ()=>{

//     var mycolor = document.getElementById("mycolor")
//     var random = Math.trunc(Math.random()* color.length)
//     // console.log(random);

//     mycolor.style.backgroundColor = color[random]
// }


var image = ["img1.jpg","img2.jpg","img3.jpeg","img4.avif","img5.jpg"]

const changeColor = ()=>{

    var random = Math.floor(Math.random()* image.length)
    console.log(random);
    var myimg = document.getElementById("myimg")

    var path = "../Images/"+image[random]

    myimg.src = path

}