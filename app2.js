const { readFile, writeFile } = require('fs');

readFile('./content/first.txt','utf8', (err, result )=>{
 if(err) throw err
   // return; return null
 
console.log(result)
const first= result;


readFile('./content/third.txt','utf8',(err,result)=>{
if(err) throw err

console.log(result)
const second= result


writeFile('./content/subfolder/fourth.txt',
`here is the result ${first},${second}`,
(err, result)=>{
    if(err) throw err

    console.log(result)
   })
  })
 })