        // path module

        const path = require('path')

        console.log(path.sep)
        console.log(path.join)
        
        const filePath = path.join('test', 'innerTest','test.txt')
        console.log(filePath)
        console.log(path.basename(filePath))
        
        const absolute = path.resolve(__dirname,'test','innerTest', 'text.txt')
        console.log(absolute)