// console.log("hello world");
const fs = require("fs");
const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end("<h1>Hello Node!!!!</h1>\n");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
fs.writeFile("welcome.txt", "Hello Node", "utf-8", (err) => {
  if (err) console.log(err);
});
fs.readFile("./welcome.txt", "utf-8", (err, data) => {
  if (err) console.log(err);
  console.log(data);
});
