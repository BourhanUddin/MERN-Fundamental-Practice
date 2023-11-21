const fs = require('fs');
const path = require('path');

// Construct the file path using __dirname and path.join
const filePath = path.join(__dirname, 'texts', 'text.txt');

// Reading a file text asynchronously
fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
        throw new Error('Error reading text: ' + err.message);
    }

    console.log(data);

    // Write text asynchronously
    fs.writeFile('./texts/text2.txt', data, 'utf-8', (err) => {
        if (err) {
            throw new Error('Error writing data: ' + err.message);
        }
    });
});
