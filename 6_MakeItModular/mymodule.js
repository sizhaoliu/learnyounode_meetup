var fs = require('fs')
var path = require('path')


module.exports = function listFile(filePath, filter, callback) {

    fs.readdir(filePath, function (err, list) {
        if (err)
            return callback(err)

        var files = new Array();

        list.forEach(function (file) {
            if (path.extname(file) === '.' + filter){
                files.push(file)
            }
        })


        callback(null, files)

    })
}

/*
────────────────────────────────────────────────────────────────────────────────
solution_filter.js:

var fs = require('fs')
var path = require('path')

module.exports = function (dir, filterStr, callback) {

    fs.readdir(dir, function (err, list) {
        if (err)
            return callback(err)

        list = list.filter(function (file) {
            return path.extname(file) === '.' + filterStr
        })

        callback(null, list)
    })
}

────────────────────────────────────────────────────────────────────────────────
*/
