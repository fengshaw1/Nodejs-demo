const express = require("express");

const app = express();

// 路径匹配中间件
// 永远匹配第一个中间件
app.use((req, res, next) => {
  console.log("调用中间件01~");
  // 调用next后，再往下面执行
  next();
});

app.use("/home", (req, res, next) => {
  console.log("调用中间件02~");
  next();
});

app.use((req, res, next) => {
  console.log("调用中间件03~");
  next();
});

app.use("/home", (req, res, next) => {
  console.log("调用中间件04~");
  next();
});

app.listen(8000, () => {
  console.log("路径中间件启动成功~");
});
