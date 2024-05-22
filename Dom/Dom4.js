function changeColor(){
    document.body.bgColor = "red"
    console.log("red...");


    setTimeout(yellow, 2000)
}

function yellow(){
    document.body.bgColor = "yellow"
    console.log("yellow...");

    setTimeout(green,3000)
}

function green(){
    document.body.bgColor = "green"
    console.log("green...");

    setTimeout(pink,4000)
}

function pink(){

    document.body.bgColor = "pink"
    console.log("pink...");

    setTimeout(changeColor,2000)
}