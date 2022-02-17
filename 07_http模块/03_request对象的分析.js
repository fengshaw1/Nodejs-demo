const http = require("http");

// 创建一个web服务器
const server = http.createServer((req, res) => {
  // request对象中封装了客户端给服务器传来的所有信息
  console.log(req.url);
  console.log(req.method);
  console.log(req.headers);
});

// 启动服务器并指定端口和主机
server.listen(8000, "localhost", () => {
  console.log("服务器启动成功!");
});
