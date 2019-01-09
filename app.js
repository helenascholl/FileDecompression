const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
    input: fs.createReadStream('compressed.txt'),
    crlfDelay: Infinity
});

let compressedLines = [];

rl.on('line', (line) => {
    compressedLines.push(line);
});

rl.on('close', () => {
    for (let line of compressedLines) {
        console.log(decompress(line));
    }
});

function decompress(line) {
    let decompressed = '';

    for (let i = 0; i < parseInt(line.substring(1)); i++) {
        decompressed += line.charAt(0);
    }

    return decompressed;
}