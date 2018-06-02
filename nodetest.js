var http = require('http');
var server=http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'}); 
  if(req.url=='/'){ 
  res.write('Ankaraya Hosgeldiniz.'); res.end(); 
  }else 
  if(req.url=='/hasan'){ res.write('Hasan Ankaraya Hosgeldin.'); res.end(); }else 
  if(req.url=='/asker'){ res.write('Canakkale Gecilmez Silahini Birakmayan Asker'); res.end(); }else 
  { res.write('Page not found'); res.end(); 
  }
});
server.on('listening',function(){
    console.log('ok, server is running');	
});
server.listen(1915, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1915/');