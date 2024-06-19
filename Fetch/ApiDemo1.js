// Api -- Application Programming Interface

const ApiDemo1 = async () => {

    const response = await fetch("https://reqres.in/api/users?page=2", {
        method: "GET"
    })
    console.log(response);

    const data = await response.json()
    console.log(data);
    console.log(data.data);



    const tbody = document.getElementById("tbody");

    for (let i = 0; i < data.data.length; i++) {

        const tr = document.createElement("tr");
        const IdTd = document.createElement("td");
        const FNameTd = document.createElement("td");
        const LNameTd = document.createElement("td");
        const EmailTd = document.createElement("td");
        const ImgTd = document.createElement("td");
        const img = document.createElement("img");

        IdTd.innerHTML = data.data[i].id;
        FNameTd.innerHTML = data.data[i].first_name;
        LNameTd.innerHTML = data.data[i].last_name;
        EmailTd.innerHTML = data.data[i].email;
        img.src = data.data[i].avatar;



        tr.appendChild(IdTd);
        tr.appendChild(FNameTd);
        tr.appendChild(LNameTd);
        tr.appendChild(EmailTd);
        tr.appendChild(ImgTd);
        ImgTd.appendChild(img);
        tbody.appendChild(tr);
    }





}

// ApiDemo1()