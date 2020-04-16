// Pre-created libraries that we are implementing features from
const http = require('http'); // handles requests and responses, 'accepts' requests, 'serves' responses
const fs = require('fs'); // allows us to read files and write files

// The actual server
// the http module has a built-in createServer() method
const server = http.createServer(function (request, response)
{
    console.log('client request URL: ', request.url);
    
    // this is how we do routing:
    // The first if request.url is for the root route "http://localhost:6789/"
    if(request.url === '/') {
        fs.readFile('views/index.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});  // send data about response
            response.write(contents);  //  send response body
            response.end(); // finished!
        });
    }
    // The second if request.url is for an additional route "http://localhost:6789/home"
    else if (request.url === '/home') {
        fs.readFile('views/index2.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});  // send data about response
            response.write(contents);  //  send response body
            response.end(); // finished!
        });
    }
    else if (request.url === '/indexDesign.css') {
        fs.readFile('static/indexDesign.css', 'utf8', function(errors, contents) {
            response.writeHead(200, {'Content-type': 'text/css'});
            response.write(contents);
            response.end();
        })
    }
    else if (request.url === '/index2Design.css') {
        fs.readFile('static/index2Design.css', 'utf8', function(errors, contents) {
            response.writeHead(200, {'Content-type': 'text/css'});
            response.write(contents);
            response.end();
        })
    }
    // request didn't match anything:
    else {
        response.writeHead(404);
        response.end('File not found!!!');
    }
});
// tell your server which port to run on
server.listen(6789);
// print to terminal window
console.log("Running in localhost at port 6789");
