const fs = require("fs");

const content = "\n";

// 文件写入
// flag 是选择的模式
// encoding 编码
// fs.writeFile("./abc.txt", content, { flag: "a+" }, (err) => {
//   console.log(err);
// });

// 文件读取
fs.readFile("./abc.txt",{encoding: 'utf-8'},  (err, data) => {
  console.log(data);
})