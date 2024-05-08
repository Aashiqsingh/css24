const goa = (amt)=>{

    console.log("Goa",amt);
}

const lasVegas = (amt)=>{

    console.log("Lasvegas = ",amt);
}

const  newYork = (amt)=>{
    console.log("Newyork = ",amt);
}

var budget = parseInt(prompt("Enter the budget :"))

switch(budget){

    case 1000:
        goa(1000);
        break;

    case 2000:
        lasVegas(2000);
        break;

    case 3000:
        newYork(3000);
        break;

    default :
        console.log("You need more money bro");
}


