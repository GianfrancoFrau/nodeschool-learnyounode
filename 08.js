var http = require('http')
	, url = process.argv[2];

http.get(url, function(response){

	var stream = '';
	
	response.on('data', function(data){
		stream += data.toString();
	});

	response.on('end', function(data){
		stream += data ? data.toString() : '';
		console.log(stream.length + '\n' + stream);
	});

});