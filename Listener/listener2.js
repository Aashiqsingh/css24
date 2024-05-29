const studentForm = document.getElementById("studentForm")
// console.log(studentForm);

studentForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    console.log("Form is submitted");
})


const studentName = document.getElementsByName("name")[0]
studentName.addEventListener("input",(e)=>{

    // console.log(e);
    console.log(e.target.value);
})

var emails = [
    "aashiq@gmail.com",
    "jinendra@gmail.com",
    "kush@gmail.com"
]


studentName.addEventListener("blur",(e)=>{
    
    // if(e.target.value.length < 5){
    //     console.log("Name is too short");
    // }
    // else{
    //     console.log("Name is valid");
    // }

    if(emails.includes(e.target.value)){
        console.log("its already exist");
    }
    else{
        console.log("its not exist");
        }

})