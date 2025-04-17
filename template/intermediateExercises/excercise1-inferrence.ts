// Exercise 1: Type Inference - The Magical Sorting Hat
import {
    validateString,
    validateNumber,
    validateBoolean,
    // validateObject
} from "../validations"; // Assuming validation functions exist

// --- Introduction ---
// TypeScript's Type Inference is like a magical Sorting Hat.
// Just as the hat analyzes a student's traits to assign them to a house,
// TypeScript analyzes how you use values (variables, function returns, etc.)
// to automatically assign them a type. This saves you from writing types everywhere!

console.log("--- 🎩 Welcome to the <%= participantName %> Type Inference Sorting Ceremony! ---");

// --- Basic Inference with Variables ---
console.log("\n--- Section 1: Basic Variable Inference ---");

// TypeScript infers the type based on the assigned value.
let <%= participantName %>_studentName = "Harry"; // Hover over '<%= participantName %>_studentName'. What type is inferred? Answer: string
let <%= participantName %>_studentAge = 11;     // Hover over '<%= participantName %>_studentAge'. What type? Answer: number
let <%= participantName %>_isWizard = true;   // Hover over '<%= participantName %>_isWizard'. What type? Answer: boolean

console.log(`${<%= participantName %>_studentName} (Inferred Type: ${typeof <%= participantName %>_studentName}) is ${<%= participantName %>_studentAge} (Inferred Type: ${typeof <%= participantName %>_studentAge}) years old.`);
console.log(`Is ${<%= participantName %>_studentName} a wizard? ${<%= participantName %>_isWizard} (Inferred Type: ${typeof <%= participantName %>_isWizard})`);
validateString(<%= participantName %>_studentName);
validateNumber(<%= participantName %>_studentAge);
validateBoolean(<%= participantName %>_isWizard);


// Student Task 1: Declare a variable '<%= participantName %>_house' and assign it a string value (e.g., "Gryffindor").
// Hover over it to see the inferred type. Validate it using `validateString`.
// let <%= participantName %>_house = ...;
// console.log(`${<%= participantName %>_studentName} belongs to house: ${<%= participantName %>_house}`);
// validateString(...);


// --- Function Return Type Inference ---
console.log("\n--- Section 2: Function Return Type Inference ---");

// TypeScript can infer the return type of a function based on its 'return' statements.
function <%= participantName %>_assignHouse(points: number) {
    if (points > 100) {
        return "Gryffindor"; // Infers string
    } else if (points > 50) {
        return "Hufflepuff"; // Infers string
    }
    // What happens if we return a number here? Uncomment the line below.
    // return 0; // Hover over the function name '<%= participantName %>_assignHouse'. What's the inferred return type now? (Answer: string | number)
    return "Slytherin"; // Infers string
} // a more accurate return type would be string union of the houses, note that inferrence does not provide that level of specificity

// Hover over '<%= participantName %>_assignedHouse'. What type is inferred? Answer: string
const <%= participantName %>_assignedHouse = <%= participantName %>_assignHouse(120);
console.log(`${<%= participantName %>_studentName} is assigned to: ${<%= participantName %>_assignedHouse}`);
validateString(<%= participantName %>_assignedHouse);


// Student Task 2: Create a function `<%= participantName %>_getWizardDetails` that takes `name` (string) and `age` (number)
// and returns an object like { name: string, age: number }.
// Let TypeScript infer the return type. Call the function and log the result. Validate the result object.
/*
interface <%= participantName %>_WizardDetails {
    name: string
    age: number
}

function <%= participantName %>_getWizardDetails(name: string, age: number) {
    return {
        name,
        age,
    };
}
const <%= participantName %>_details = <%= participantName %>_getWizardDetails(<%= participantName %>_studentName, <%= participantName %>_studentAge);
console.log("Wizard details:", <%= participantName %>_details);
// The thing to note here: Even though the <%= participantName %>_WizardDetails interface exists, and matches the return of getWizardDetails,
// inferrence does not make the connection - meaning that if one changes, it will decouple from the other.
*/

// --- Array Method Inference ---
console.log("\n--- Section 3: Array Method Inference ---");

const <%= participantName %>_scores = [85, 105, 60, 95]; // Hover over '<%= participantName %>_scores'. Inferred type: number[]

// TypeScript infers the types for 's' and the return value of the arrow function.
const <%= participantName %>_adjustedScores = <%= participantName %>_scores.map(s => s + 10); // Hover over '<%= participantName %>_adjustedScores'. Inferred type: number[]
console.log("Original Scores:", <%= participantName %>_scores);
console.log("Adjusted Scores:", <%= participantName %>_adjustedScores);

// TypeScript also infers types in methods like 'filter'.
const <%= participantName %>_passingScores = <%= participantName %>_scores.filter(s => s >= 70); // Hover over '<%= participantName %>_passingScores'. Inferred type: number[]
console.log("Passing Scores:", <%= participantName %>_passingScores);

// Student Task 3: Use the `find` method on `<%= participantName %>_scores` to find the first score greater than 100.
// Hover over the result variable to see its inferred type (it might surprise you! Answer: number | undefined).
// Log and validate the result (handle the potential 'undefined').
// const <%= participantName %>_highScore = <%= participantName %>_scores.find(...);
// console.log("First high score found:", <%= participantName %>_highScore);
// if (<%= participantName %>_highScore !== undefined) { validateNumber(<%= participantName %>_highScore); }


// --- Pitfalls of Inference (When to be Explicit) ---
console.log("\n--- Section 4: Potential Pitfalls - The Overly Broad Hat ---");

// Sometimes, inference can be too broad.
let <%= participantName %>_config = { // Hover over '<%= participantName %>_config'. What's the inferred type for 'theme'? Answer: string
    theme: 'light',
    notifications: true
};

// Because 'theme' is inferred as 'string', TypeScript allows *any* string.
<%= participantName %>_config.theme = 'blue'; // This is allowed by the inferred type...
console.log("Config theme updated (inferred):", <%= participantName %>_config.theme);
validateString(<%= participantName %>_config.theme); // Still validates as a string

// ...but what if we only wanted 'light' or 'dark'?
// This is where explicit types are helpful.

type <%= participantName %>_Theme = 'light' | 'dark'; // Define the allowed themes

interface <%= participantName %>_UserConfig {
    theme: <%= participantName %>_Theme; // Use the specific Theme type
    notifications: boolean;
}

let <%= participantName %>_specificConfig: <%= participantName %>_UserConfig = { // Now 'theme' must be 'light' or 'dark'
    theme: 'dark',
    notifications: false
};

// Try uncommenting the line below. TypeScript will now give an error!
// <%= participantName %>_specificConfig.theme = 'blue'; // Error: Type '"blue"' is not assignable to type '<%= participantName %>_Theme'.

console.log("Specific config theme:", <%= participantName %>_specificConfig.theme);
// We might need a specific validator for the Theme type or validate against the allowed values manually.
if (<%= participantName %>_specificConfig.theme === 'light' || <%= participantName %>_specificConfig.theme === 'dark') {
    console.log("Specific theme is valid.");
} else {
    console.error("Specific theme is invalid!");
}
validateBoolean(<%= participantName %>_specificConfig.notifications);


// Student Task 4: Define an interface `<%= participantName %>_Potion` with a property `effect` that can only be
// 'healing', 'strength', or 'invisibility'. Create a variable `<%= participantName %>_myPotion` of type `<%= participantName %>_Potion`.
// Try assigning an invalid effect and see the TypeScript error. Check the valid effect.
/*
type <%= participantName %>_Effect = 'healing' | 'strength' | 'invisibility';
interface <%= participantName %>_Potion {
    effect: <%= participantName %>_Effect;
    // Add another property, e.g., volume: number
}
let <%= participantName %>_myPotion: <%= participantName %>_Potion = { effect: 'healing', volume: 50 };
console.log("My potion effect:", <%= participantName %>_myPotion.effect);
// Validate effect manually or create a specific validator
// <%= participantName %>_myPotion.effect = 'flying'; // Should cause an error
*/

console.log("\n--- ✨ <%= participantName %> Workshop Complete! Experiment with the code! ---");

// Export something to make it a module, if necessary for your setup
export const <%= participantName %>_inferenceExerciseComplete = true;
