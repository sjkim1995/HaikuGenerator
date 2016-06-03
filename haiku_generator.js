var haiku = require('./haiku');
var cmudictFile = haiku.readCmudictFile('./cmudict.txt');
var formatted = haiku.formatData(cmudictFile);
console.log("\nAnd another: \n\n" + haiku.createHaiku([[2,3], [1,3,3], [3,2]], formatted) + "\n")