var language = ["english","tamil","hindi","marathi","telgu","gujarati"];




// return same length 
var a = language.map((lang)=>{
    // console.log(lang.toUpperCase());
    // return lang.push("Chetan");
    // console.log(lang.push("chetan"));

    return lang.length > 5
})

console.log(a);