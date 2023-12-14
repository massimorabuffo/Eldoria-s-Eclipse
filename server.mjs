import { createServer } from "node:http"

const server = createServer((request, response) => {
    console.log("Request received.");

    response.statusCode= 200;

    response.setHeader("Content-Type", "text/html");

    response.end("<html><body><h1>This page was served with node.js!</h1></body></html>");
})

server.listen(3000, () => {
    console.log("Server is running at http://localhost:3000");
});