var fs = require('fs')
var path = require('path')
var folder = process.argv[2]
var filter = process.argv[3]

fs.readdir(folder, function callback (err, list){
    for (var i = 0; i<list.length;i++){

        if(path.extname(list[i]) == '.' +filter){

            console.log(list[i])
        }
    }
})

// Official answer
/*
var fs = require('fs')
var path = require('path')

fs.readdir(process.argv[2], function (err, list) {
    list.forEach(function (file) {
        if (path.extname(file) === '.' + process.argv[3])
            console.log(file)
    })
})
*/
