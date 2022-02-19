const express = require("express");

const app = express();

app.get('/products/:id/:name', (req, res, next) => {
  console.log(req.params);
  res.end("商品详情数据查询~")
})

app.get('/login', (req, res, next) => {
  console.log(req.query);
  res.end("用户登录成功~")
})

app.listen(8000, () => {
  console.log("form-data解析服务器启动成功");
});
