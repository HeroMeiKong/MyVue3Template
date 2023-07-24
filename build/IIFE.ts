const fs = require('fs');

const args = process.argv.slice(2);

const context = fs.readFileSync(args[0]);

fs.writeFile(args[0], `!function(){${context}}()`, (err: any) => {
  if (err) {
    console.log('error: ', err);
  } else {
    console.log('Add IIFE success!');
  }
});
