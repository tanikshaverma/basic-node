const fs = require("fs");

//****file created */
fs.writeFileSync("index.html","html file");
fs.writeFileSync("index.css", "html file");
fs.writeFileSync("index1.html", "html file");



//*****extra data add krna */
// fs.appendFileSync("index.html", "file created");


//*****file read krna */
// const d = fs.readFileSync("index.html", "utf-8");
//  console.log(d);



///*****file delete krnagi */
// fs.unlinkSync("index.html");