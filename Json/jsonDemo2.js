var products = {
    id:1001,
    name:"Iph",
    price:9999,
    color:["Red","Purple","white","black" , 76],
    IsAvailable: false,

}

// console.log(products);
// console.log(products.name);
// console.log(products.color);

// for(let i=0;i<=3;i++){
//     console.log(products.color[i]);
// }

for(let i=0;i<=products.color.length-1;i++){
    console.log(products.color[i]);
}

// if(products.name.length <= 3){
//     console.log("It is not valid");
// }
// else{
//     console.log("Its valid");
// }


// if(products.IsAvailable){
//     console.log("Purchasing");
// }
// else{
//     console.log("Not purchasing");
// }