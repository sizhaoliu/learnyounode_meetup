
var net = require('net')
var strftcime = require('strftime')

var format = 'YYYY-MM-DD hh:mm'
var unixFormat = '%Y-%m-%d %H:%M'

var server = net.createServer( function callback(socket){

    var date  = new Date();

    socket.end(strftime(unixFormat, date));
})

server.listen(process.argv[2])

/*
────────────────────────────────────────────────────────────────────────────────
var net = require('net')

function zeroFill(i) {
    return (i < 10 ? '0' : '') + i
}

function now () {
    var d = new Date()
    return d.getFullYear() + '-'
        + zeroFill(d.getMonth() + 1) + '-'
        + zeroFill(d.getDate()) + ' '
        + zeroFill(d.getHours()) + ':'
        + zeroFill(d.getMinutes())
}

var server = net.createServer(function (socket) {
    socket.end(now() + '\n')
})

server.listen(Number(process.argv[2]))

────────────────────────────────────────────────────────────────────────────────
*/