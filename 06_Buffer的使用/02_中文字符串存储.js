const message = "肖峰";

// 中文存储时、转化成unicode
// 占据三个字节
const buffer = Buffer.from(message, "utf16le");

// 编码
console.log(buffer);
// 解码(默认方式utf-8)
console.log(buffer.toString());
