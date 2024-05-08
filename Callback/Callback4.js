const pngHandler =(option)=>{

        console.log("uploading ...",option + " png handler");
}

const  jpegHandler=(option)=>{

    console.log("uploading...",option);

}

const upload = (name , cb)=>{

    cb(name)

}


var handler = ".jpeg"

if(handler.endsWith(".png")){

    upload(handler,pngHandler)
}
else if(handler.endsWith(".jpeg")){
    upload(handler,jpegHandler)
}