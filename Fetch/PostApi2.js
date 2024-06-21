const PostData = async () => {

    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const age = document.getElementById('age');
    const status = document.getElementById('status');

    const dataobj = {
        name: name.value,
        email: email.value,
        age: age.value,
        isActive: status.value,
    }

    console.log(dataobj);


    const res = await fetch("https://node5.onrender.com/user/user", {
        method: "POST",
        body: JSON.stringify(dataobj),
        headers: {
            "Content-Type": "application/json"
        },

    })

    var data = await res.json()
    console.log(data);
}