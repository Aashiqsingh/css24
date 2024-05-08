const arts = (per)=>{
    console.log("your addmision is confirm in arts stream" , per);
}

const science = (per)=>{

    // console.log("your admission confirm in science stream",per);
    if(per > 80)
    {
        console.log("Your addmision confirm in science stream");
    }
    else{
        console.log("Sry per is low choose any other stream");
    }
}

const commerce = (per)=>{
    console.log("Your admission is confirmed in commerce stream.",per);
}



const addmision = (cb , per)=>{

    cb(per)
}


addmision(science , 90)