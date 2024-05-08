const fs = require("fs");

let input_file_path = "public/distanceCalculations/output"
let output_file_path = "app/api/counties/data.json"

let files = fs.readdirSync(input_file_path);
 
let combinedData = []; 
 
files.forEach((fileName) => {
    const fileContent = JSON.parse(fs.readFileSync(`${input_file_path}/${fileName}`, 'utf-8'));
    combinedData = combinedData.concat(fileContent);
}); 
 
// Convert the combined data back to JSON 
const combinedJson = JSON.stringify(combinedData, null, 2); 
 
// Write the combined JSON to a new file (optional) 
fs.writeFileSync(output_file_path, combinedJson, 'utf-8'); 
 
console.log('JSON files combined successfully.'); 

// There are three counties that play home to two team each: 
// San Bernadino, California (Rancho Cucamonga & Inland Empire); 
// Pinellas, Florida (Dunedin & Clearwater);
// Palm Beach, Florida (Palm Beach & Jupiter).