var http = require('http')
	, _data = []
	, args = process.argv;

function _process(i) {

	if(i == args.length) return;

	http.get(args[i], function(response){
		
		response.on('data', function(data){
			if(typeof _data[i] == 'undefined') {
				_data[i] = data.toString();
			} else {
				_data[i] += data.toString();
			}
		});

		response.on('end', function(){
			console.log(_data[i]);
			i++;
			_process(i);
		});

	});
}

_process(2);