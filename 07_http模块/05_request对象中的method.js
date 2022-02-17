const http = require("http");
const qs = require("querystring");
const url = require("url");

// 创建一个web服务器
const server = http.createServer((req, res) => {
  if (req.url === "/login") {
    if (req.method === "POST") {
      // 拿到body中的数据
      req.setEncoding("utf-8");
      req.on("data", (data) => {
        const { name, age } = JSON.parse(data);
        console.log(name, age);
      });
    }
    res.end("halo");
  }
});

server.listen(8000, "localhost", () => {
  console.log("服务器启动成功!");
});
