const http = require("http");
const qs = require("querystring");
const url = require("url");

// 创建一个web服务器
const server = http.createServer((req, res) => {
  // console.log(req.url);
  // if (req.url === "/login") {
  //   res.end("登录用户");
  // } else {
  //   res.end("用户列表");
  // }

  console.log(req.url);
  const { pathname, query } = url.parse(req.url);
  if (pathname === "/login") {
    console.log(query);
    console.log(qs.parse(query));
    const { name, age } = qs.parse(query);
    console.log(name, age);
    res.end("请求结果");
  }
});

server.listen(8000, "localhost", () => {
  console.log("服务器启动成功!");
});
