const pngHandler = (option)=>{

    console.log("uploading ...",option);
    return option.fname + " png File handler.." + option.size

}

const wordHandler = (option)=>{

    console.log("upload.....",option);
    return option.fname + ".word"
}

const upload = (file,cb)=>{

    var x = cb({fname:file , size:20})
    console.log("Callback ....",x);
}

var firstName = ".png"

if(firstName.endsWith(".png")){

    upload(firstName,pngHandler)
}
else if(firstName.endsWith(".word")){

    upload(firstName,wordHandler);

}
