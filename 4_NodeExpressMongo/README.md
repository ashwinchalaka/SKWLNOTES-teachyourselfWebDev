# [ Node Express Mongo Mongoose ] -- SKWLNOTES-webdev

### Breakdown
1. NodeJS + ExpressJS == Back-end Server
2. MongoDB + Mongoose = Database

### NodeJS Installation

### ExpressJS Installation

### MongoDB Installation

### Server Version 1
1. **"server.js" or "app.js" file**

	```
	<!--server.js file-->
	const http = require('http');
	const fs = require('fs');
	const server = http.createServer(function (request, response)
	{
	    console.log('client request URL: ', request.url);
	    
	    // this is how we do routing:
	    if(request.url === '/') {
	        fs.readFile('index.html', 'utf8', function (errors, contents){
	            response.writeHead(200, {'Content-Type': 'text/html'});  // send data about response
	            response.write(contents);  //  send response body
	            response.end(); // finished!
	        });
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
	</head>
	<body>
	    <h1>Hello Friends!</h1>
	</body>
	</html>
	
	```
	
4. **File Structure**
	* > Project Folder
		* app.js
		* index.html
		* index2.html
5. **Testing our server**
	* Make sure the files have no compiler errors
	* 
6. 