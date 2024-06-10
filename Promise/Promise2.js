function getOrder(){

    console.log("Order is about to place..");

    var promise = new Promise((success,failure)=>{

        setTimeout(() => {
            // success({
            //     orderId:1001,
            //     message:"order placed successfully...",
            //     amount: 234
            // })

            failure({
                orderId: 1002,
                message : "Order is cancelled..."
            })
        }, 3000);
    })

    console.log(promise);

    promise.then((data)=>{
        console.log("data....",data);
    })

    promise.catch((error)=>{
        console.log("order cancel...",error);
    })


}


getOrder()