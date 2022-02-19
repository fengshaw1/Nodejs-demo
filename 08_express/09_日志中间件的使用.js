const express = require("express");
const morgan = require("morgan");
const fs = require("fs");

const app = express();

var writeStream = fs.createWriteStream("./access.log", {flags: "a+"});

app.use(morgan("combined", { stream: writeStream }));

app.get("/home", (req, res, next) => {
  res.end("hello");
});

app.listen(8000, () => {
  console.log("form-data解析服务器启动成功");
});
