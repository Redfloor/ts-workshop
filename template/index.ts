const exec = require('child_process').exec;
const readline = require('readline');
const path = require('path');

const exercises = [
  './exercises/excercise1.ts',
  './exercises/excercise2.ts',
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
      // console.log({error, stdout, stderr});
      console.error(`Error in ${file}: ${stderr}\n`);
    } else {
      console.log(`Success: ${file} ran without errors.\n`);
    }
    callback();
  });
};

const runExercises = (index) => {
  if (index < exercises.length) {
    runExercise(exercises[index], () => {
      setTimeout(() => runExercises(index + 1), 200);
    });
  } else {
    rl.write('All exercises completed.\n');
    rl.close();
  }
};

runExercises(0);
