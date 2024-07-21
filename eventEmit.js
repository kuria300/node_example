const {EventEmitter} = require('events')
const {writeFileSync} =require('fs')

for(i=0; i< 10000; i++){
    writeFileSync('./content/big.txt', `hello world ${i}\n`, {flag: 'a'})
}

const customEvent= new EventEmitter()

customEvent.on('response', ()=>{
    console.log(`i hear a scream`)
})

customEvent.emit('response', )