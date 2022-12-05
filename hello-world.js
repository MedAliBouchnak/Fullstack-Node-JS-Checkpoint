var http=require('http');

// task 1
console.log('HELLO WORLD')
//task 2
http.createServer(function (request, response) {

    response.writeHead(200, {'Content-Type': 'text/html'});
    
    response.end('<h1>Hello Node!!!!</h1>\n');
 }).listen(3000);