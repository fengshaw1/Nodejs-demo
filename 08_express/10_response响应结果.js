const express = require("express");

const app = express();

app.get("/login", (req, res, next) => {
  console.log(req.query);
  res.json(["abc", "cba"])
});

app.listen(8000, () => {
  console.log("普通中间件服务器服务器启动成功");
});
