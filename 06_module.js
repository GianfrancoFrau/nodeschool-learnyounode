var fs = require('fs');
module.exports = function(dir, ext, cb) {
	fs.readdir(dir, function(err, list) {
		if(err) return cb(err);
		var filtered = [];
		list.forEach(function(_file) {
			var f = _file.split('.');
			if(f[1] == ext) filtered.push(_file);
		});
		cb(null, filtered);
	});
}