var fs = require('fs');
function callback(err,data){
	var content = data.toString();
	var lines = content.split('\n').length -1;
	console.log(lines);
}
fs.readFile(process.argv[2],callback);


