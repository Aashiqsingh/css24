function checkfun(event) {
    event.preventDefault();

    var name = document.getElementById("name")

    var gender = document.getElementsByName("gender")

    var age = document.getElementById("age")

    var gen = ""
    if (gender[0].checked == true) {
        gen = "male"
    }
    else if (gender[1].checked == true) {
        gen = "female"
    }
    else if (gender[2].checked == true) {
        gen = "other"
    }

    // console.log(gen);

    if (gen === "male") {
        if (age.value > 18) {
            console.log("you are eligible for vote");
        }
        else {
            console.log("You are not eligble for vote");
        }
    }
    else if (gen === "female") {
        // if(age > 20)
        age.value > 20 ? console.log("you are eligible for vote") : console.log("you are not eligible for vote");

    }
    else if (gen === "other") {
        if (age.value > 24) {
            console.log("you are eligible for vote");
        }
        else {
            console.log("You are not eligble for vote");
        }
    }

    console.log("Name = ", name.value);
    console.log("Gender = ", gen);
    console.log("Age = ", age.value);

}