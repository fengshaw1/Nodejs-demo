const fs = require('fs')

fs.open("./abc.txt", (err, fd) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(fd);

  // 通过文件描述符获取文件信息
  fs.fstat(fd, (err, info) => {
    console.log(info);
  })
})