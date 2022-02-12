// GLOBALS - No Window in Node !!!!
//  __dirname  -> path to current directory
// __filename   -> file name
// require    -> function to use modules (Commomon JS)
// module   -> info about current module (file)
// process  -> info about env where the program is being executed

console.log(__dirname)
setInterval(() => {
    console.log('Hello World')
}, 1000)