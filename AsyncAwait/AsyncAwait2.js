const examgenrator = ()=>{

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve({
                examId: 1100,
                message:"Exam is generated.",
                Date:"17/06/24"
            })
        },3000)
    })
}

const questiongenrator = (data)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve({
                questionId: 1034,
                message:"Question is generated.",
                Date:data.Date
            })
        },4000)
    })
}

console.log("Exam is going to be start");
examgenrator().then((data)=>{
    console.log("Exam is gen...",data);
    questiongenrator(data).then((quedata)=>{
        console.log("question is gen...",quedata);
    }).catch((error)=>{
        console.log("question is not gen...",error);
    })
}).catch((err)=>{
    console.log("Exam is not genratedd...",err);
})





// const answergenrator = async()=>{

//     console.log("Exam is going to generate");
//     var exam = await examgenrator()
//     console.log("Exam is gen....",exam);
//     var question = await questiongenrator(exam)
//     console.log("question is gen...",question);

//     setTimeout(()=>{
//     console.log("Ending exam...");
        
//     },1000);
// }

// answergenrator()