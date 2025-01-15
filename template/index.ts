const readline = require('readline');
import {firstTest} from "./exercises/excercise1";

type testType = {
  name: string;
  age: number;
  boolean: boolean;
  union: 'yes' | 'no';
}

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
