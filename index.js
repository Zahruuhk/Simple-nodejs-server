const http = require("http");

const server = http.createServer((req, res) => {
    res.write("Zaruq Abdul-Muqsit");
    res.end();
});

server.listen(8000, null, null, () => {
    console.log("Server is running on port 8000");
  });






















