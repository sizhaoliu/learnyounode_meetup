
var http = require('http')
var fs = require('fs')
var fileName = process.argv[3]

var server = http.createServer(function callback(req, res){


    res.writeHead(200, { 'content-type': 'text/plain' })
    var src = fs.createReadStream(fileName)

    src.pipe(res)


})

server.listen( process.argv[2])
