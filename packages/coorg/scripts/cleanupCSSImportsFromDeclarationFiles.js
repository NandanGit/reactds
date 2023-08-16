const fs = require('fs');
const path = require('path');
fs.writeFileSync(path.join(__dirname, '../dist/esm/styles.d.ts'), '');
console.log('Cleared imports from dist/esm/styles.d.ts');
// fs.writeFileSync()
