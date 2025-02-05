const exec = require('child_process').exec;
const readline = require('readline');
const path = require('path');

const exercises = [
  './exercises/excercise1.ts',
  './exercises/excercise2.ts',
  './exercises/excercise3.ts',
  './exercises/excercise4.ts',
  './exercises/excercise5.ts',
  // Add more exercise file paths here
];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const runExercise = (file, callback) => {
  const absolutePath = path.resolve(file);
  exec(`ts-node ${absolutePath}`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error in ${file}: ${stderr}\n`);
      callback(error, null);
    } else {
      console.log(`Success: ${file} ran without errors.\n`);
      callback(null, stdout);
    }
  });
};

const runExercises = (index) => {
  if (index < exercises.length) {
    runExercise(exercises[index], (error, result) => {
      if (error) {
        rl.write('Execution stopped due to an error.\n');
        rl.close();
      } else {
        console.log(`Output: ${result}`);
        setTimeout(() => runExercises(index + 1), 2000);
      }
    });
  } else {
    rl.write('All exercises completed.\n');
    rl.close();
  }
};

runExercises(0);