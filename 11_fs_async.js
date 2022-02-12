const { readFile, writeFile, write } = require('fs')

console.log('Starting the file')

readFile('./test/first.txt', 'utf8',(err, result) => {
    if (err) {
        console.log(err)
        return
    }
    const first = result
    readFile('./test/second.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err)
            return
        }
        const second = result
        writeFile('./test/result_async.txt', `Here is the combined result: ${first}, ${second}`,{flag: 'a'} ,(err, result) => {
            if (err) {
                console.log (err)
                return
            }
            console.log('Writing the document')
        })
    })
})

console.log('Done with the task')

console.log('Starting the next task')
