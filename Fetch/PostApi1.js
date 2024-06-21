const PostApi = async () => {


    var objData = {
        name: "chetan",
        email: "chetan@gmail.com",
        age: 19,
        isActive: true
    }

    const res = await fetch("https://node5.onrender.com/user/user", {
        method: "POST",
        body: JSON.stringify(objData),
        headers: {
            "Content-Type": "application/json"
        }
    })

    const data = await res.json();
    console.log(data);



}