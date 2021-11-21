//different method to create buffer
let buffer1 = Buffer.alloc(100);
let buffer2 = new Buffer("GFG");
let buffer3 = Buffer.from([1, 2, 3, 4]);

buffer1.write("Hello World");
let a = buffer1.toString("utf-8");
console.log(a);

//check buffer length
console.log(buffer1.length);

//copy buffer
let bufferSrc = new Buffer("ABC");
let bufferDest = Buffer.alloc(10);
bufferSrc.copy(bufferDest);
let data = bufferDest.toString("utf-8");
console.log(data);

//concatenate two buffer
let bufferOne=new Buffer("Hi");
let bufferTwo=new Buffer("Hello");
let bufferThree=Buffer.concat([bufferOne,bufferTwo]);
console.log(bufferThree.toString())
