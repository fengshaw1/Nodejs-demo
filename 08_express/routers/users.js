const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.end("获取用户列表");
});

router.post("/", (req, res, next) => {
  res.end("创建用户");
});

router.delete("/", (req, res, next) => {
  res.end("删除用户");
});

module.exports = router;
