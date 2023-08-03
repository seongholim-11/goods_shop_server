var http = require("http");
var hostname = "127.0.0.1";
var port = "8080";

const server = http.createServer(function (req, res) {
    const path = req.url;
    const method = req.method;

    if (path === "/products") {
        if (method === "GET") {
            res.writeHead(200, { "Content-Type": "application/json" });
            const products = JSON.stringify([
                {
                    name: "독버섯조명",
                    price: 89000,
                    seller: "유니스",
                },
            ]);
            res.end(products);
        } else if (method === "POST") {
            res.end("생성되었습니다.");
        }
    }
    res.end("Good bye");
});

server.listen(port, hostname);

console.log("server on");
