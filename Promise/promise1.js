function getData(){


    var promise = new Promise((resolve,reject)=>{

        // resolve("Data fetched successfully...")
        setTimeout(() => {
            // resolve("data fetched successfully..");
            reject("error data not found!!!")
        }, 3000);
    })

    console.log(promise);

    promise.then((data)=>{
        console.log(data);
    })
    
    promise.catch((error)=>{
        console.log(error);
    })

    console.log("Endingggggg");

}


getData();