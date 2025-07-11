const fs = require('fs');
const filepath = '/home/april/100xcode/Cohort-3-WebDev/Week-02-More about JS/2.2/Easy/a.txt';

// Start reading the file (ASYNC)
fs.readFile(filepath, 'utf-8', (err, data) => {
    if (err) {
        console.log('Error in file:', err);
        return;
    }
    console.log('File content:', data); // This runs LATER, when the file is read
});

// Do some big calculation (SYNC)
function expensiveOperation() {
    let sum = 0;
    for (let index = 0; index < 1e8; index++) {
        sum = sum + index;
    }
    console.log("Expensive operation completed and its result:", sum);
}
expensiveOperation();
