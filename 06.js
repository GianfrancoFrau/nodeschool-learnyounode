var _module = require('./06_module')
	, dir = process.argv[2]
	, ext = process.argv[3];

_module(dir, ext, function(err, data){
	if(err) {
		console.error(err);
		return;
	}
	data.forEach(function(el){
		console.log(el);
	});
});