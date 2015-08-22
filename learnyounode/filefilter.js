var path = process.argv[2];
var filter = '.' + process.argv[3];
var fs = require('fs');
var ph = require('path')

function filted(file){
	if (ph.extname(file) === filter){
			console.log(file);
		}
}

function callback_filelist(err,list){
	list.forEach(filted)
}
fs.readdir(path, callback_filelist);