const express = require("express");

const app = express();

// 路径方法中间件的使用

app.use((req, res, next) => {
  console.log("普通中间件01");
  next()
});

app.get("/home", (req, res, next) => {
  console.log("路径方法中间件01");
});

app.post("/login", (req, res, next) => {
  console.log("路径方法中间件02");
});

app.listen(8000, () => {
  console.log("路径方法中间件启动成功~");
});
