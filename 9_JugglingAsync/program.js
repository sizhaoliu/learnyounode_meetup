var http = require('http')
var bl = require('bl')


var contents = [];

function httpGet(idx){

    http.get(process.argv[idx], function (response) {
        getContent(response, idx)
    })

}

function getContent(response, idx) {

    response.pipe(bl(function (err, data) {
        if (err) {
            console.error(err.message)
        }
        contents[idx -2] = data.toString()

        if (contents[0] != undefined && contents[2] != undefined && contents[2] != undefined) {
            console.log(contents[0])

            console.log(contents[1])
            console.log(contents[2])
        }
    }))

}


for (var i = 2; i < 5; i++ ) {
    httpGet(i);
}
/*
────────────────────────────────────────────────────────────────────────────────
var http = require('http')
var bl = require('bl')
var results = []
var count = 0

function printResults () {
    for (var i = 0; i < 3; i++)
        console.log(results[i])
}

function httpGet (index) {
    http.get(process.argv[2 + index], function (response) {
        response.pipe(bl(function (err, data) {
            if (err)
                return console.error(err)

            results[index] = data.toString()
            count++

            if (count == 3)
                printResults()
        }))
    })
}

for (var i = 0; i < 3; i++)
    httpGet(i)

────────────────────────────────────────────────────────────────────────────────
*/
