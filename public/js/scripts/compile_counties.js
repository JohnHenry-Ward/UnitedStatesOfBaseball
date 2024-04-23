const fs = require("fs");

let files = fs.readdirSync("app/api/counties/states");
 
let combinedData = []; 
 
files.forEach((fileName) => {
    const fileContent = JSON.parse(fs.readFileSync(`app/api/counties/states/${fileName}`, 'utf-8'));
    combinedData = combinedData.concat(fileContent);
}); 
 
// Convert the combined data back to JSON 
const combinedJson = JSON.stringify(combinedData, null, 2); 
 
// Write the combined JSON to a new file (optional) 
fs.writeFileSync('app/api/counties/data.json', combinedJson, 'utf-8'); 
 
console.log('JSON files combined successfully.'); 