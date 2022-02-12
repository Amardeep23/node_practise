// Modules
    // Common JS , every file is a module( by default )
    // Modules -> Encapsulated Code (only share minimum)


    const names = require('./4_names')
    const sayHi = require('./5_utils')
    const data = require('./6_alternative_flavor')
    require('./7_mind_grenade')
console.log(names)

sayHi(names.john)
sayHi(names.peter)
console.log(data)

// sayHI('susan')
// sayHI(john)
// sayHI(peter)