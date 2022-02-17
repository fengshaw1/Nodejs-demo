const http = require("http");

// 两种方式本质一样

// 1、
const server1 = http.createServer((req, res) => {
  res.end("Hello Server111");
});

server1.listen(8001, "localhost", () => {
  console.log("服务器1启动成功!");
});

// 2、
const server2 = new http.Server((req, res) => {
  res.end("Hello Server222");
});

server2.listen(8002, "localhost", () => {
  console.log("服务器2启动成功!");
});
