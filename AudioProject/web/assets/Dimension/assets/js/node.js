var http = require('http');
var fs = require('fs');
var url = require ('url');

//create server:
http.createServer( function (request, response) {
   //parse the request containing filemame:
   var pathname = url.parse(request.url).pathname;

   //Print the name of the file for which request is made.
   console.log("Request for " + pathname + " recieved.");

   //Read the requested file content from file system.
   fs.readfile("pathname.substr(1)", function (err, data) { if (err) {
   console.log(err);

   //http status:
   //404 : NOT FOUND

   //Content type:
   text/plain

   response.writeHead(404, {'content-type':'text/html'});
   }else{
         //page found
         //http status:
   //200 : OK

   //content type
   text/plain
   response.writeHead(200, {'content-type': 'text/html'});

   //write the content of the file to response body
   response.write(data.tostring);
   
   }
   // send the response body
   response.end;

});
}).listen(8081);

//Console will print the message
console.log('server running at 127.0.0.1:8081/');