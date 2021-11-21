//different method to create buffer
var buffer1 = Buffer.alloc(100);
var buffer2 = new Buffer("GFG");
var buffer3 = Buffer.from([1, 2, 3, 4]);

buffer1.write("Hello World");
var a = buffer1.toString("utf-8");
console.log(a);

//check buffer length
console.log(buffer1.length);

//copy buffer
var bufferSrc = new Buffer("ABC");
var bufferDest = Buffer.alloc(10);
bufferSrc.copy(bufferDest);
var data = bufferDest.toString("utf-8");
console.log(data);

//concatenate two buffer
var bufferOne=new Buffer("Hi");
var bufferTwo=new Buffer("Hello");
var bufferThree=Buffer.concat([bufferOne,bufferTwo]);
console.log(bufferThree.toString())
