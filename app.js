		//Creating an app in Node using Express

		// import the express module
		const express = require('express');
		//Start using the express module my calling its default function
		const app = express();
		//Import custom module
		const messages = require('./messages.js');

		//Log messages to the console
		console.log(messages.firstName);
		console.log(messages.lastName);
		console.log(messages.skills);

		//To use jade template engine set the view directory which has the templates and the engine name and use the response.render method
		//the render method takes template name and the object of values that needs to be injected into the template dynamically.
		//app.set('views', './views');
		//app.set('view engine','jade');

		//Handle GET Requests using Jade Template
		/*app.get("/anyurl",function(request,response){
			response.render("demo", {
			title: 'Dynamic Title from jade',
			message: 'Dynamic message from jade'
			});
		});*/

		//To use ejs as the template engine which is similar to JSP
		app.set('views', './views');
		app.set('view engine','ejs');

		//Handle get requests using EJS Template
		app.get("/anyurlagain",function(request,response){
			response.render("ejs/ejsDemo", {
			tagline: 'Dynamic tagline from ejs'
			});
		});		

		//Handle GET Requests using Express JS
		app.get("/",function(request,response){
			response.send("<h1>Welcome to my app</h1><h3>"+ messages.firstName + "<br/>" + messages.lastName + "<br/>" + messages.skills + "</h3>")
		});

		//Retrieve path parameters
		app.get("/users/:username",function(request,response){
			//response.send(request ["params"]["username"]);
			response.send(request.params.username);
		});

		//To serve static content
		app.use(express.static(__dirname + '/static'));

		//To handle request paths that do no exists. This should be placed at the last or else this will get called 
		//irrespective of the below app.get functions even if there is a matching path.
		app.use(function(request, response){
			response.status(404).send('The page you are trying to look for is not found');
		});

		//Start the app by calling the listen function on a specific port
		app.listen(3000,function(error){
			if(error == true){
				console.log("some error occured");
			}else{
				console.log("Listening on port 3000");
			}
			
		});
