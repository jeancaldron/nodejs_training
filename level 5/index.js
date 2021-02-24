// 1. Create a node server that listens for a POST request containing a name 
// in the body, it should add this name to a list (can keep the array in memory), 
// also create a request handler that listens for a GET request and returns all names on the list as json.

// Refactor the GET request method to accept a query parameter named name, and search a name using regex.
const http = require("http");

let names_list = [];

const app = http.createServer((request, response) => {
    if (request.url === "/names" && request.method === "GET") {
        response.end(
            JSON.stringify({
                names: names_list,
            })
        );
    }

    // Refactor
    if (request.url.startsWith("/names") &&
        request.method === "GET" &&
        request.url.includes("name=")) {
        const queryString = request.url.split("?")[1];
        const name = queryString.split("=")[1];

        response.end(
            JSON.stringify({
                name: name,
            })
        );

    }

    if (request.url.startsWith("/names") && request.method === "POST") {
        let body = [];
        request
            .on("data", (chunk) => {
                body.push(chunk);
            })
            .on("end", () => {
                body = Buffer.concat(body).toString();
                const json = JSON.parse(body);
                names_list.push(json);
                response.end(
                    JSON.stringify({
                        message: `${json.name} successfully saved`,
                    })
                );
            });
    }

});

app.listen(2021, () => {
    console.log("Server running at port 2021");
});