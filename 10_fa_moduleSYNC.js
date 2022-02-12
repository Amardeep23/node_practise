        // fs module

        const { readFileSync, writeFileSync } = require('fs')
console.log('Starting the task')
        const first = readFileSync('./test/first.txt', 'utf8')
        const second = readFileSync('./test/second.txt', 'utf8')
        
                // writeFileSync takes three arguments -- 1 location, (if no file is present then it creates one)
                                                    //    2  data      this data will over write the previous data if present in the file.(if not appended or so) 
                                                    //    3  option's OBJECT with propertiy names as keys

        console.log('Now we will write the file')
        writeFileSync('./test/third.txt', `Here is the concated result: ${first}, ${second}`, {flag:'a'})
                                                                                        //  flag : a    is for appending in the the old file
                                                                                        // instead of rewriting it
console.log('Done with the task')