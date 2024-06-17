const fetchData = ()=>{


    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve({
                name:"rahul",
                age:20,
                gender:"male"
            })
        },3000)
    })
    
}

// fetchData().then((data)=>{
//     console.log(data);

// }).catch((err)=>{
//     console.log("Failed to fetch");
// })

// console.log("end the data");

async function fetch(){

    console.log("Start fetching data");

    var x = await fetchData()
    console.log(x);

    console.log("ending fetch data");
}

fetch();