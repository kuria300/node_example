const stepOne= (value)=>{
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log(value)
            resolve()
        },3000)
    })   
}
const stepTwo= (value)=>{
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log(value)
            resolve()
        },2000)
    })   
}
const stepThree= (value)=>{
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log(value)
            resolve()
        },1000)
    })   
}
/*stepOne(2)
.then(()=>stepTwo(4))
.then(()=>stepThree(5))
.then(()=>{
    console.log("complete")
})*/

Promise.all([stepOne(7),
            stepTwo(4), 
           stepThree(5)
        ]).then (()=>{
    console.log('complete')
})

