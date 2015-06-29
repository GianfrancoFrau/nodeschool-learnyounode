var net = require('net')
	, port = process.argv[2];

var server = net.createServer(function(socket){

	function pad(n) {
		return n > 9 ? n : '0' + n; 
	}

	var date = new Date();
	var str = date.getFullYear() + '-' + pad(date.getMonth()+1) + '-' + pad(date.getDate()) + ' ' + pad(date.getHours()) + ':' + pad(date.getMinutes() + '\n'); 
	socket.end(str);

});

server.listen(port);