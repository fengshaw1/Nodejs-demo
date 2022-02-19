const express = require("express");

const app = express();

// 使用中间件，默认开启对应文件解析
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/login", (req, res, next) => {
  console.log(req.body);
  next();
});

app.post("/login", (req, res, next) => {
  console.log(req.body);
  res.end("周期结束");
});

app.listen(8000, () => {
  console.log("路径中间件启动成功~");
});
