 

const fs = require('fs');
const path = require('path');
// reading a file text
try {
    // use __dirname to get the directory of the current module (i.e., the directory where your read.js script is located)
    const filePath = path.join(__dirname, 'texts', 'text.txt');
    const data = fs.readFileSync(filePath, 'utf8');
    console.log(data);
} catch (err) {
    console.error('Error reading the file:', err.message);
}

