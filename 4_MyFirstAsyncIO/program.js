var fileName = process.argv[2]

var fs = require('fs')


fs.readFile(fileName, 'utf8', function (err, data) {
    if (err) throw err;
    console.log(data.split('\n').length -1 );
});
