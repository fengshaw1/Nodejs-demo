const fs = require("fs");

// 1、创建文件夹
fs.mkdir("./abc", (err) => {
  console.log(err);
});
// 2、读取文件夹中的所有文件

// 3、文件夹的重命名
