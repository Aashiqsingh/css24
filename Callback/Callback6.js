// const pngHandler = (option)=>{

//     // console.log("uploading ...",option);
//     return option.fname + " png File handler.." + option.size

// }

// const wordHandler = (option)=>{

//     // console.log("upload.....",option);
//     return option.fname + ".word " + option.size
// }

const upload = (file,cb)=>{

    return cb({fname:file , size:"25kb"})
    
}

var firstName = ".word"
var flag;

if(firstName.endsWith(".png")){

    flag = upload(firstName,pngHandler)


}
else if(firstName.endsWith(".word")){

    flag = upload(firstName,wordHandler);

}

console.log("Main uploading.....",flag);
