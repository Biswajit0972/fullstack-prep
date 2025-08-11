const fs = require('fs');


console.log("Hello world");
 fs.readFile("./NOTE.txt", "utf-8", (err, data) => {
     if (err) throw err;
     console.log(data);
 });

console.log("Hello world 2")

