// Basic Typescript types.
import {
    validateString,
    validateNumber,
    validateBoolean,
    validateNumberArray,
    validateStringNumberTuple,
    validateDirection,
    validatePerson,
    validateGreetFunction,
    validateAnimalInstance,
    validateIdentityFunction
  } from "../validations";

//   const readline = require('readline');
//   const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
//   });

/*** Mini Lesson: Basic Types ***/
function basicTypes():void {
// In TypeScript, basic types include string, number, and boolean. 
// They ensure variables contain values of the expected type.

// --- String Examples ---
console.log("\n--- Basic Types: Strings ---");

// Valid string examples:
const username = "David";
const usersurname = "Pendragon";

// Fix these (should be strings):
let usernameTest: any = 123;
let usersurnameTest: any = false;

// Validation
validateString(usernameTest);
validateString(usersurnameTest);

/*** Mini Lesson: Numbers and Booleans ***/
// Numbers represent numeric values, and booleans represent true/false.

console.log("\n--- Basic Types: Numbers & Booleans ---");

// Valid number and boolean:
const age = 42;
const isActive = true;

// Fix these:
let ageTest: any = "forty-two";
let isActiveTest: any = "yes";

// Validation
validateNumber(ageTest);
validateBoolean(isActiveTest);

/*** Mini Lesson: Arrays and Tuples ***/
// Arrays hold multiple values of the same type.
// Tuples hold a fixed sequence of values with specified types.

console.log("\n--- Arrays and Tuples ---");

// Valid number array and tuple:
const validNumbers = [1, 2, 3];
const validTuple: [string, number] = ["Age", 30];

// Fix these:
let brokenNumbers: any = [1, "two", 3];
let brokenTuple: any = [30, "Age"];

// Validation
validateNumberArray(brokenNumbers);
validateStringNumberTuple(brokenTuple);

/*** Mini Lesson: Enums ***/
// Enums allow defining a set of named constants. 
// TypeScript ensures variables set to enum values only use allowed values.

console.log("\n--- Enums ---");

// Define the enum close to usage:
enum Direction {
  Up,
  Down,
  Left,
  Right
}

// Valid enum usage:
const moveDirection = Direction.Up;

// Fix this with an incorrect value:
let invalidDirection: any = "Invalid"; 

// Validation
validateDirection(moveDirection);
validateDirection(invalidDirection);

/*** Mini Lesson: Objects and Interfaces ***/
// Interfaces define the shape of an object, specifying property types.

console.log("\n--- Objects and Interfaces ---");

// Valid Person object
const validPerson = { name: "Alice", age: 30 };

// Fix this object:
let invalidPerson: any = { name: 123, age: "Fifteen" };

// Validation
validatePerson(validPerson);
validatePerson(invalidPerson);

/*** Mini Lesson: Functions ***/
// Functions have specific parameter and return types. 
// TypeScript checks that functions are used with correct argument types.

console.log("\n--- Functions ---");

// Correct greet function
function greet(name: string): string {
  return `Hello, ${name}!`;
}

// Incorrect function to fix:
function brokenGreet(age: number): string {
  return `Age: ${age}`;
}

// Validation
validateGreetFunction(greet);
validateGreetFunction(brokenGreet);

/*** Mini Lesson: Classes ***/
// Classes define blueprints for creating objects. 
// They can have properties and methods with defined types.

console.log("\n--- Classes ---");

class Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  speak(): string {
    return `${this.name} makes a noise.`;
  }
}

// Correct Animal instance
const dog = new Animal("Dog");

// Broken Animal-like object:
let notAnAnimal: any = { name: "Ghost", speak: () => 42 };

// Validation
validateAnimalInstance({ name: dog.name, speak: dog.speak.bind(dog) });
validateAnimalInstance(notAnAnimal);

/*** Mini Lesson: Generics ***/
// Generics allow functions and classes to work with various types while maintaining type safety.

console.log("\n--- Generics ---");

// Correct identity function
function identity<T>(arg: T): T {
  return arg;
}

// Broken identity function:
function brokenIdentity<T>(arg: T): T {
  return undefined as any; // purposely incorrect
}

// Validation
validateIdentityFunction(identity, "Test", "Test");
validateIdentityFunction(brokenIdentity, 123, 123);

/*** Human-Readable Challenges ***/
// At the end of each section, you may encounter challenges that ask you to implement new types, interfaces, and validation logic manually.
// Follow these steps:
// 1. Read the challenge description.
// 2. Create the new interface/type in your code.
// 3. Implement any required functions or classes.
// 4. Use provided examples and call validation functions to check your work.

console.log("\n--- Challenges ---");

// Challenge instructions appear as comments and console logs:

console.log(`
Challenge 1:
- Define an interface 'Book' with properties:
  • title: string
  • pages: number
- Implement a Zod schema and 'validateBook' function in validations.ts for 'Book'.
- In a similar style to previous sections, create valid and invalid Book objects,
  then use 'validateBook' to check them.
`);

console.log(`
Challenge 2:
- Define an interface 'User' with:
  • username: string
  • isActive: boolean
- Implement corresponding schema and 'validateUser' in validations.ts.
- Test 'validateUser' with valid and invalid User objects in this file.
`);

}

basicTypes();
// export const firstTest = () => {
//     basicTypes();
//     console.log("HElloooo");
//     // rl.write('TEST');
//     return 1;
// }
