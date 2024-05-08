var products = [
    {
        id:101,
        name:"Iphone 6",
        category:"Smartphones",
        price:1500,
        inStock:true,
        color:["red","blue","white"]
    },
    {
        id:102,
        name:"Samsung S7 Edge",
        category:"Smartphones",
        price:1300,
        inStock:false,
        color:["blue","white","gold"]
    },
    {
        id:103,
        name:"Laptop Dell Vostro",
        category:"Laptops",
        price:800,
        inStock:true,
        color:["black","white"]
    }
]


// var x = products.filter((prod)=>{

//     return prod.price >= 1300 && prod.price <=1500
// })

// console.log(x);

// var sum = 0;
// products.forEach((prod)=>{

//     sum=sum+prod.price;
// })

// console.log(sum);


// var x = products.reduce((a,b)=>{

//     return a+b.price;
// },0)

// console.log(x);

// reduce always return single value 

// var x = products.reduce((sum,prod)=>{

//     return sum+prod.price;
// },100)

// console.log(x);


// var x = products.filter((prod)=>{


//     return prod.color.includes("gold");
// })

// console.log(x);

var x = products.reduce((sum,prod)=>sum+prod.price,0)
console.log(x);