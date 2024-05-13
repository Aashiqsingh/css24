var color= ["red","green","yellow","blue","pink","brown","teal"]


const changeColor = ()=>{

    var mycolor = document.getElementById("mycolor")
    var random = Math.trunc(Math.random()* color.length)
    // console.log(random);

    mycolor.style.backgroundColor = color[random]
}