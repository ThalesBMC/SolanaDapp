const fs = require("fs");
const idl = require("./target/idl/mysolanaapp.json");
console.log(idl);
fs.writeFileSync("./app/src/idl.json", JSON.stringify(idl));
