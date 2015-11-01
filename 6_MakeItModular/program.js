var mymodule = require('./mymodule.js')

mymodule(process.argv[2], process.argv[3], function (err, files) {
    if (err) {
        console.error(err)
    }


    files.forEach(function (file) {
        console.log(file)
    })

})