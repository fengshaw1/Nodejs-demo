const express = require("express");

const app = express();

// 连续注册中间件
app.use((req, res, next) => {
  console.log("common middleware 00");
  next();
});

app.get(
  "/login",
  (req, res, next) => {
    console.log("middleware 01");
    next();
  },
  (req, res, next) => {
    console.log("middleware 02");
    next();
  },
  (req, res, next) => {
    console.log("middleware 03");
    next();
  },
  (req, res, next) => {
    console.log("middleware 04");
    next();
  }
);

app.listen(8000, () => {
  console.log("路径中间件启动成功~");
});
