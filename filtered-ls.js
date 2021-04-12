var fs = require('fs');
var path = require('path');

fs.readdir(process.argv[2], function (err, list) {
    list.forEach(function (s) {
        if (path.extname(s)=== '.' + process.argv[3]) {
            console.log(s);
        }
    });
});