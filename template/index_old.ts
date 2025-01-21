
const readline = require('readline');
const firstTest = require("./exercises/excercise1");

console.log('<%= intro %>');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.emit('line', firstTest());


rl.question('Where do you live? ', (country) => {
  console.log(`You are a citizen of ${country}`);
  rl.close();
});

rl.on('close', () => {
  process.exit(0);
});
