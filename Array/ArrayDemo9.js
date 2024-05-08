var language = ["english","hindi","marathi","gujarati","punjabi","telgu","tamil"]


// const deleteLang = (langname)=>{

//     lang = language.filter((lang)=>{
//         return lang!=langname
//     })

//     return lang

    
// }

// const deleteLang = (langname)=> language.filter((lang)=> lang!=langname)


const deleteLang = (langname)=>{

    return language.filter((lang)=> lang!=langname)
}

var x = deleteLang("hindi")
console.log(x);