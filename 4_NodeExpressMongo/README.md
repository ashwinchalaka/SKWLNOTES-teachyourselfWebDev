# [ Node Express Mongo Mongoose ] -- SKWLNOTES-webdev

### Breakdown
1. NodeJS + ExpressJS == Back-end Server
2. MongoDB + Mongoose = Database

### NodeJS Installation

### ExpressJS Installation

### MongoDB Installation

### Server Final Version
1. **"server.js" or "app.js" file**

	```
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
	        fs.readFile('index.html', 'utf8', function (errors, contents){
	            response.writeHead(200, {'Content-Type': 'text/html'});  // send data about response
	            response.write(contents);  //  send response body
	            response.end(); // finished!
	        });
	    }
	    // The second if request.url is for an additional route "http://localhost:6789/home"
	    else if (request.url === '/home') {
	        fs.readFile('index2.html', 'utf8', function (errors, contents){
	            response.writeHead(200, {'Content-Type': 'text/html'});  // send data about response
	            response.write(contents);  //  send response body
	            response.end(); // finished!
	        });
	    }
	    else if (request.url === '/indexDesign.css') {
	        fs.readFile('indexDesign.css', 'utf8', function(errors, contents) {
	            response.writeHead(200, {'Content-type': 'text/css'});
	            response.write(contents);
	            response.end();
	        })
	    }
	    else if (request.url === '/index2Design.css') {
	        fs.readFile('index2Design.css', 'utf8', function(errors, contents) {
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

	
	```
2. 	**accompanying "index.html" file**

	```
	<!DOCTYPE html>
	<html lang="en">
	<head>
	    <meta charset="UTF-8">
	    <meta name="viewport" content="width=device-width, initial-scale=1.0">
	    <title>Document</title>
	
	    <link rel="stylesheet" type="text/css" href="/indexDesign.css">
	</head>
	<body>
	    <h1>Hello World!</h1>
	</body>
	</html>
	
	```

3. 	**accompanying "index2.html" file**
	
	```
	<!DOCTYPE html>
	<html lang="en">
	<head>
	    <meta charset="UTF-8">
	    <meta name="viewport" content="width=device-width, initial-scale=1.0">
	    <title>Document</title>
	
	    <link rel="stylesheet" type="text/css" href="/index2Design.css">
	</head>
	<body>
	    <h1>Hello Friends!</h1>
	</body>
	</html>
	
	```
4. **"indexDesign.css"

	```
	h1 {
		color: blueviolet;
	}
	
	```

5. **"index2Design.css"

	```
	h1 {
	    color: green;
	}
	
	```

6. **File Structure**
	* > Project Folder
		* app.js
		* index.html
		* index2.html
7. **Testing our server**
	1. Make sure the files have no compiler errors
	2. In terminal, navigate to the project folder where app.js or server.js is located
	3. Run `nodemon app.js` or `nodemon server.js` and keep this terminal window open
	4. Whatever port you chose in the server file, keep that number, go to your browser and navigate to "localhost:(insert port number)"
	5. You can check on each page that you included in the server by adding "/" to the url followed by any other paths as specified in the server file
8. 