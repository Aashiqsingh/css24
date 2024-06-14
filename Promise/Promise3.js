console.log("Program start");

const fetchData = ()=>{


    // var promise = new Promise(resolve,reject)
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            // resolve("Data fetched successfully");
            reject("Data fetched failed");
        },3000)
    })



}


fetchData().then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log("Error",err);
})

