const http = require("http");
const server = http.createServer((req, res) => {
  // console.log(req);
  res.setHeader("Content", "text/html");
  res.write("<html>");
  res.write("<head><title>My Node</title></head>");
  res.write("<body><h1>Hello from my Node server!</h1></body>");
  res.write("</html>");
  res.end();
});
server.listen(3000);
