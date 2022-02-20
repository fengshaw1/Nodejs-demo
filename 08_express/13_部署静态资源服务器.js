const express = require("express");

const app = express();

// 使用该中间件即可
app.use(express.static("./build"));

// 开始监听
app.listen(8000, () => {
  console.log("服务器启动成功");
});
