// Import built-in 'http' module.
const http = require("http");

// Create a server with the 'http' object.
const server = http.createServer(handleRequest);

// Listen for the response on a certain port. '3000'
server.listen(3000);

// Handle requests from the client's browser
function handleRequest(request, response) {
    // Check the current path
    if (request.url === "/current-time") {
        // Send a status code to the browser as success (200)
        response.statusCode = 200;

        // Send the response to the client
        response.end("<h1>" + new Date().toISOString() + "</h1>");
    } else if (request.url === "/") {
        // Send a status code to the browser as success (200)
        response.statusCode = 200;

        // Send the response to the client
        response.end("<h1>Hello World</h1>");
    }
}
