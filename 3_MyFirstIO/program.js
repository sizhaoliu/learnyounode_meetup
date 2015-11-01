var fileName = process.argv[2]

var fs = require('fs')

var buf = fs.readFileSync(fileName)

var string = buf.toString()

console.log(string.split('\n').length );
