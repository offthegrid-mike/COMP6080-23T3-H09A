// install moment library
// Ref: https://momentjs.com/
// `npm install moment`
// run file with command `node date.js`

var moment = require('moment');

console.log("Current DateTime: " + moment().format());
console.log("Five days before: " + moment().subtract(1005, "day").format());