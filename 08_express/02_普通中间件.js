const express = require("express");

const app = express();

// 注册中间件
// 使用use注册一个中间件
app.use((req, res, next) => {
  console.log("调用中间件1~");
  // 调用下一个中间件
  next();
});

app.use((req, res, next) => {
  console.log("调用中间件2~");
  next();
});

app.use((req, res, next) => {
  console.log("调用中间件3~");
  res.end("周期结束");
});

app.listen(8000, () => {
  console.log("普通中间件启动成功~");
});
