const fs=require("fs")

let readerStream=fs.createReadStream('input.txt');
let writeStream=fs.createWriteStream('output.txt');

readerStream.pipe(writeStream);