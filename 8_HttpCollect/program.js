var http = require('http')
var bl = require('bl')



function getContent (response) {

    response.pipe(bl(function (err, data) {
        if (err) {
            console.error(err.message)
        }

        console.log(data.length)
        console.log(data.toString())
    }))

}

http.get(process.argv[2], getContent)

/*
http.get(process.argv[2], function (response) {

    response.pipe(bl(function (err, data) {
        if (err) {
            console.error(err.message)
        }

        console.log(data.length)
        console.log(data.toString())
    }))

})
*/

