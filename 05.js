var fs = require('fs')
	, dir = process.argv[2]
	, ext = process.argv[3];

fs.readdir(dir, function(err, data) {
	if(err) throw err;
	for(var i = 0; i < data.length; i++) {
		var f = data[i].split('.');
		if(f[1] == ext) console.log(data[i]);
	}
});