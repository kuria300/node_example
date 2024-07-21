const {readFile, writeFile} = require('fs')
//const {readFile, writeFile} = require('fs').promises
const {promisify} = require('util');/*// Importing Utilities module  
util.promisify(func) */

const readFilepromise = promisify(readFile)
const writeFilepromise = promisify(writeFile)

const getText = async ()=>{
    try {
        const read= await readFilepromise('./content/first.txt', 'utf8')
        const write= await readFilepromise('./content/second.txt', 'utf8')

        const change= await writeFilepromise('./content/fifth.txt', 'this is the fifthfile')

        console.log(read, write)
    } catch (error) {
        console.log(error)
    }
}

getText()