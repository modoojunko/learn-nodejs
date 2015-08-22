var http = require('http');
var bl = require('bl');
var data_list = [];
var count = 0;


function show_list(array){
  for (var i = 0; i < 3; i++)
      console.log(array[i])
}

function get_http_result(index){
  http.get(process.argv[2 + index], function(res) {
    if (res.statusCode === 200)
      res.pipe(bl(function(err,data){
        if (err)
          return console.error(err)

        data_list[index] = data.toString()
        count++
        if (count ===3)
          show_list(data_list)
        }))
  })
}


for(var i=0;i<3;i++){
  get_http_result(i)
}


