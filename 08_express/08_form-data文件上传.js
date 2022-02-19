const express = require('express')
const multer = require('multer')

const app = express()

const upload = multer({
  dest: './uploads'
})

app.use(upload.any())

app.post('/login', (req, res, next) => {
  console.log(req.body);
  res.end('success!')
})

app.post("/upload",upload.single('file'), (req, res, next) => {
  res.end('file upload success！')
});

app.listen(8000, () => {
  console.log('form-data解析服务器启动成功');
})