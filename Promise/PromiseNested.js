const Order = ()=>{

    return new Promise((success,failure)=>{

        setTimeout(()=>{
            // success({
            //     orderId: 1023,
            //     messege:"Order is placed",
            //     amount: 549
            // });
            failure({
                message:"your order is cancelled...",
            })
        },3000);
    })

}


const Payment = (Data)=>{

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve({
                paymentId: 10002,
                messege:"Payment is done",
                amount: Data.amount,
                orderId: Data.orderId
            })
        },4000)
    })
}


Order().then((data)=>{
    console.log("Order is placed",data);
    Payment(data).then((PaymentData)=>{
        console.log("Payment is done",PaymentData);
    }).catch((error)=>{
        console.log("Payment is not done",error);
    })
}).catch((err)=>{
    console.log("Order is not placed",err);
})