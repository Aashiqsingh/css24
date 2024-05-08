const science = (name , age) => {
    console.log("You are in science",name,age);
}

const commerce = (name , age) =>{
    console.log("you are in commerce",name,age);
}

const arts = (name ,age)=>{
    console.log("you are in arts",name,age);

}


const admission = (cb)=>{

    cb("Ram",22)
}


admission(commerce)