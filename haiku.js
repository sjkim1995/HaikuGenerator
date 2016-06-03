var fs = require("fs");
var cmudictFile = readCmudictFile('./cmudict.txt');

function readCmudictFile(file){
  return fs.readFileSync(file).toString();
}

function formatData(data){    
   var lines = data.toString().split("\n"),
       lineSplit,
       syllablesArr = [[]];
   	
   	lines.forEach(function(line){    
	    lineSplit = line.split("  ");    
	    if (lineSplit[1]) {
	    	var syllable = (lineSplit[1].match(/[0-9]/g)|| []).length;
	    	var word = lineSplit[0];
	    	if (syllablesArr[syllable] === undefined){
				syllablesArr[syllable] = [];
			} 

			syllablesArr[syllable].push(lineSplit[0]);	
  		}
  });   
   	    return syllablesArr;
}

function createHaiku(structure, syllablesArr){
  var arrOfWords;
  return structure.map(function(lines){
    return lines.map(function(syls){
      arrOfWords = syllablesArr[syls];
      return arrOfWords[Math.floor(Math.random() * arrOfWords.length)];
    }).join(' ');
  }).join('\n');
}

module.exports = {
  createHaiku: createHaiku,
  readCmudictFile: readCmudictFile,
  formatData: formatData,
};

console.log("\nA simple 5,7,5:\n\n" + createHaiku([[5],[7],[5]], formatData(cmudictFile)));
console.log("\nA more complex structure: \n\n" + createHaiku([[2,3], [1,3,3], [3,2]], formatData(cmudictFile)) + "\n")
