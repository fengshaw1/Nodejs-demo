const express = require("express");

const app = express();

// 默认监听路径
app.get("/", (req, res, next) => {
  res.end("Hello express");
});

app.get("/login", (req, res, next) => {
  res.end("Hello user");
});

app.post("/user", (req, res, next) => {
  res.end("user page");
});

// 开始监听
app.listen(8000, () => {
  console.log("服务器启动成功");
});
