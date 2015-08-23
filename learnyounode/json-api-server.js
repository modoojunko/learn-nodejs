var http = require('http');
var url = require('url');
//var querystring = require('querystring');

function parsetime (time) {//定义个对象，从请求传入的date获取时、分、秒
	var json_time = {
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds()
      }
      return json_time
    }
 function unixtime (time) {
      return { unixtime : time.getTime() }
    }


var server = http.createServer(function(req,res){
	//var obj = url.parse(req.url);//将http://host/api/path分解成{host:xxx,pathname:xxxx}
	/* obj 内容{ protocol: null,
  slashes: null,
  auth: null,
  host: null,
  port: null,
  hostname: null,
  hash: null,
  search: '?iso=2015-08-23T11:46:46.037Z',
  query: 'iso=2015-08-23T11:46:46.037Z',
  pathname: '/api/parsetime',
  path: '/api/parsetime?iso=2015-08-23T11:46:46.037Z',
  href: '/api/parsetime?iso=2015-08-23T11:46:46.037Z' }*/
	//var param = querystring.parse(obj.query);//搜索条件变成｛iso=2015-08-23T11:46:46.037Z｝
	var obj = url.parse(req.url, true) // 增加了true ,query: 'iso=2015-08-23T12:09:34.957Z' 变成query: { iso: '2015-08-23T12:10:09.585Z' },
	var param = obj.query
	/* param内容{ iso: '2015-08-23T11:46:46.037Z' } */
	res.writeHead(200, { "Content-Type": "application/json" });//良好习惯，http服务器的回复头格式声明为jason
	if("/api/parsetime" === obj.pathname){
		var date = new Date(param.iso);//将param对象的iso值输入date生成时间
		var result = parsetime(date)
		res.end(JSON.stringify(result));//将retObj倒成json后提供给http服务器，用来返回客户端。
	}
	if('/api/unixtime' === obj.pathname){
		var date = new Date(param.iso);
		var retObj = unixtime(date)
		res.end(JSON.stringify(retObj));
	}
})
server.listen(process.argv[2]);