var fs = require('fs');
if(!process.argv[2]) console.error('missing file path');
var file = fs.readFileSync(process.argv[2]);
console.log(file.toString().split('\n').length-1);