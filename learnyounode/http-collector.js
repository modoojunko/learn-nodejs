var http = require('http');
var bl = require('bl');
var url = process.argv[2];

http.get(url, function(res) {
  	res.pipe(bl(function(err,data){
  		if (err)
  			return console.error()
  		console.log(data.toString().length);
  		console.log(data.toString());
  	}))
})