const express = require("express");
const multer = require("multer");

const app = express();

// express官方库
// 用来解析form-data
const upload = multer();

app.use(upload.any());

app.post("/login", (req, res, next) => {
  console.log(req.body);
  res.end("success!");
});

app.listen(8000, () => {
  console.log("form-data解析服务器启动成功");
});
