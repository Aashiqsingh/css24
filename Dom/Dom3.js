function callfun(){

    var inp = document.getElementById("inp")
    console.log(inp.value);

    var valErr = document.getElementById("valErr");

    if(inp.value.length <= 3){
        // alert("Value must be greeter than 3")
        // console.log("value must be gretter than 3");
        valErr.innerHTML = "*value must be gretter than 3"
        valErr.style.color = "red"

        inp.style.outline = "2px solid red"
        inp.style.backgroundColor = "red"
        
    }
    else{
        valErr.innerHTML = "";
        inp.style.outline = "2px solid green"
        inp.style.backgroundColor = "green"


    }
}

function changeColor(){

    var inp = document.getElementById("inp")
    inp.style.backgroundColor = "black"
}