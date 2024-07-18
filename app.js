const { readFileSync, writeFileSync } = require('fs');

const first =readFileSync('./content/first.txt','utf8')

writeFileSync('./content/third.txt',
`Here is the result: ${first}`,{flag:'a'}
)

console.log(first);