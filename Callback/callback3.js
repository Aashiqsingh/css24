const lasvegas = ()=>{
    console.log("lasvegas trip");
}

const singapore = ()=>{
    console.log("Singapore trip");
}

const goa = ()=>{
    console.log("goa trip");
}

const thailand = ()=>{
    console.log("thailand trip");
}

const travel = (cb)=>{

    cb()
}


// travel(singapore)
var budget = 100;

if(budget > 1000)
{
    travel(lasvegas);
}
else if(budget > 800)
{
    travel(singapore)
}
else if(budget > 500){
    travel(thailand)
}
else if(budget > 200){
    travel(goa);
}
else{
    console.log("increase your budget");
}