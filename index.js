var http = require('http');
var fs = require('fs');

var port = 4000;

function onRequest(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.readFile('./index.html', null, function(error, data){
        if(error){
            res.writeHead(500);
            res.write('500, Internal Error.')
        }else{
            res.write(data);
        }
        res.end();
    })
}
http.createServer(onRequest).listen(port)
console.log('Server is running.');
console.log('Production: https://RainboomStudio.com');
console.log('dev: http://localhost:4000')