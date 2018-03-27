const fs = require("fs");


let contents = fs.readFileSync("displayme.txt", "utf8");

console.log(contents);
