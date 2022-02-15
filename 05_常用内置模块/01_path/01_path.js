const path = require('path')
const basePath = '/user/feng'
const filename = 'abc.txt'

const filepath = path.resolve(basePath, filename)

console.log(filepath);