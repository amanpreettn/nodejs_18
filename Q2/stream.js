const fs = require("fs");
var data = "";
//create a readablestream
var readerStream = fs.createReadStream("input.txt");

// set encoding tobe urf-8
readerStream.setEncoding("utf-8");
readerStream.on("data", function (chunk) {
  console.log(chunk);
  data += chunk;
});

readerStream.on("end", function () {
  console.log(data);
});

readerStream.on("error", function (err) {
  console.log(err.stack);
});

console.log("Program ended");

var data='Hello world';
var writeStream=fs.createWriteStream('output.txt');

writeStream.write(data,'utf-8');

writeStream.end();

writeStream.on('finish',()=>{
    console.log("Write completed");
})

writeStream.on('error',()=>{
    console.log(err.stack);
})

