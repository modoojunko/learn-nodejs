var net = require('net')
var date = new Date()
var port = process.argv[2]
var content = ""

function zeroFill(number) {
  if(number<10)
  	number = "0" + number.toString()
  return number
}

var server = net.createServer(function (socket) {
  // socket 处理逻辑
  content = date.getFullYear() + "-" + zeroFill(date.getMonth() + 1) + "-" + zeroFill(date.getDate()) + " " + zeroFill(date.getHours()) + ":" + zeroFill(date.getMinutes()) + "\n"
  socket.end(content)
})
server.listen(port)