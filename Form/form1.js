function submitHandler(e){
    // event.preventDefault();  // action finish onsubmit
    e.preventDefault()


    const name = document.getElementById("name")
    const email = document.getElementById("email")

    const ans = document.getElementById("ans")
    const error = document.getElementById("error")

    // alert("Submit sucessFully!!");
    // console.log("Submit sucessFully!!");

    // console.log("name..",name.value);
    // console.log("email..",email.value);

    if(name.value.length <= 0 || email.value.length <=0){
        // alert("Pls Field out the block");
        error.innerHTML = "pls field out the block"
    }else{
    var user ={
        name:name.value,
        email:email.value
    }
    // console.log(user);
    error.innerHTML = ""
    // ans.innerHTML = user 

    ans.innerHTML = JSON.stringify(user);
}
    // var x = JSON.stringify(user)
    // console.log(x[0]);


}

function printText(){
    var name = document.getElementById("name")
    var name1 = document.getElementById("name1")

    name1.innerHTML = name.value
}
