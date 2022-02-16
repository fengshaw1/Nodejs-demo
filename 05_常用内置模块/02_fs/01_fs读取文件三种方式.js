const fs = require('fs')

const filepath = "./abc.txt"

// 1、同步操作
// const info = fs.statSync(filepath)
// console.log('后续需要执行的代码');
// console.log(info);

// 2、异步操作
// fs.stat(filepath, (err, info) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log(info);
// })
// console.log('后续需要执行的代码');


// 3、promise异步方式
// fs.promises.stat(filepath).then(info => {
//   console.log(info);
// }).catch(err => {
//   console.log(err);
// })

// console.log('后续需要执行的代码');