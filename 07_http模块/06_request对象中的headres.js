const http = require("http");

// 创建一个web服务器
const server = http.createServer((req, res) => {
  console.log(req.headers);
  res.end("Hello Server");
});

// 启动服务器并指定端口和主机
server.listen(8000, "localhost", () => {
  console.log("服务器启动成功!");
});
