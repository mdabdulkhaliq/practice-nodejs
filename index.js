		//Creating an app in Node without using express
		const http = require('http');

		/*const httpServer = http.createServer(function(request, response){
			response.end("Response sent back via http server");
		});*/

		//To work with request URL, and retrieve the query parameter https://URL:port?greeting=someValue
		const url = require('url');
		
		const httpServer = http.createServer(function(request, response){
			let queryObject = url.parse(request.url, true).query;
			let greeting = queryObject.greeting || "Default Greeting";
			response.end("Response sent back via http server" + greeting);
		});

		httpServer.listen(8080, function(){
			console.log("Listening on port 8080");
		});