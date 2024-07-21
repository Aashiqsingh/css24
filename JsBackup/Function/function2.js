function lasvegas(package){


    return "picnic at lasvegas with package "+ package
}
function singapore(package){
    console.log("picnic at Singapore with package "+ package)
}

function tokyo(package){
    console.log("picnic at Tokyo with package "+ package)
}

var budget = parseInt(prompt("enter your budget :"))

if(budget > 12000)
{
    var x = lasvegas(budget)
    console.log(x);
}
else if(budget > 9000){
    singapore(budget)
}
else if(budget > 6000)
{
    tokyo(budget)
}
else{
    console.log("Sleep in th room ");
}