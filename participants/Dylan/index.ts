const readline = require('readline');

console.log('Hi Dylan, welcome to ts-workshop!');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Where do you live? ', (country) => {
  console.log(`You are a citizen of ${country}`);
  rl.close();
});

rl.on('close', () => {
  process.exit(0);
});