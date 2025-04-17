// Exercise 2: Conditional Types - Making Types Adapt

// --- Introduction: The Vehicle Metaphor ---
// Conditional Types in TypeScript are like figuring out what kind of vehicle you have based on its features.
// If it has wings, it's probably a Plane. If not, maybe it's a Car.
// Conditional types allow a type to change based on a condition (often using the `extends` keyword).
// Syntax: SomeType extends OtherType ? TrueType : FalseType;

console.log("--- 🚗✈️ Welcome to the <%= participantName %> Conditional Types Workshop! ---");

// --- Example 1: Basic Conditional Check (IsString) ---
console.log("\n--- Section 1: Basic Condition Check --- ");

// Let's define a conditional type that checks if a type `T` is a string.
type <%= participantName %>_IsString<T> = T extends string ? true : false;

// Test cases:
type <%= participantName %>_Test1 = <%= participantName %>_IsString<"hello">; // Hover over Test1. What is its type? Answer: true
type <%= participantName %>_Test2 = <%= participantName %>_IsString<123>;      // Hover over Test2. What is its type? Answer: false

console.log(`Is "hello" a string? ${true as <%= participantName %>_Test1}`); // Using type assertion for demonstration
console.log(`Is 123 a string? ${false as <%= participantName %>_Test2}`);

// Student Task 1: Create a conditional type `<%= participantName %>_IsNumber<T>` that checks if T extends number.
// Test it with a number and a boolean.
// type <%= participantName %>_IsNumber<T> = ...;
// type <%= participantName %>_NumTest = <%= participantName %>_IsNumber<42>; // Should be true
// type <%= participantName %>_BoolTest = <%= participantName %>_IsNumber<false>; // Should be false
// console.log("Is 42 a number?", ...);
// console.log("Is false a number?", ...);


// --- Example 2: The Vehicle Metaphor in Action ---
console.log("\n--- Section 2: Vehicle Identification --- ");

interface <%= participantName %>_Car {
    type: 'Car';
    drive: () => void;
}

interface <%= participantName %>_Plane {
    type: 'Plane';
    wings: number; // The key feature!
    fly: () => void;
}

// Conditional type to identify the vehicle
type <%= participantName %>_IdentifyVehicle<T> = T extends { wings: any } ? <%= participantName %>_Plane : <%= participantName %>_Car;

// Let's identify some vehicles
type <%= participantName %>_MyVehicle1 = <%= participantName %>_IdentifyVehicle<{ wings: 2, fly: () => {} }>; // Hover: <%= participantName %>_Plane
type <%= participantName %>_MyVehicle2 = <%= participantName %>_IdentifyVehicle<{ drive: () => {} }>;        // Hover: <%= participantName %>_Car

// We need instances to log, conditional types work on the type level.
const <%= participantName %>_vehicle1: <%= participantName %>_MyVehicle1 = { type: 'Plane', wings: 2, fly: () => console.log("Flying!") };
const <%= participantName %>_vehicle2: <%= participantName %>_MyVehicle2 = { type: 'Car', drive: () => console.log("Driving!") };

console.log(`Vehicle 1 identified as: ${<%= participantName %>_vehicle1.type}`);
console.log(`Vehicle 2 identified as: ${<%= participantName %>_vehicle2.type}`);

// Student Task 2: Define interfaces for `<%= participantName %>_Bicycle` (has `pedals: boolean`) and `<%= participantName %>_Motorcycle` (has `engine: boolean`).
// Create a conditional type `<%= participantName %>_IdentifyTwoWheeler<T>` that checks for an `engine` property.
// Test it with objects that fit the Bicycle and Motorcycle shapes.
/*
interface <%= participantName %>_Bicycle { ... }
interface <%= participantName %>_Motorcycle { ... }
type <%= participantName %>_IdentifyTwoWheeler<T> = ... ;
type <%= participantName %>_Wheeler1 = <%= participantName %>_IdentifyTwoWheeler<{ pedals: true }>; // Should be Bicycle
type <%= participantName %>_Wheeler2 = <%= participantName %>_IdentifyTwoWheeler<{ engine: true }>; // Should be Motorcycle
*/

// --- Example 3: API Response Handling ---
console.log("\n--- Section 3: Adapting API Responses --- ");

// Often APIs return data differently based on success or input.
// This conditional type provides a structure with 'data' only if T is not void.
type <%= participantName %>_APIResponse<T> =
    T extends void // Check if T is void (meaning no data expected)
    ? { success: true } // If void, response has only success
    : { success: true; data: T }; // Otherwise, include the data property

// Test cases:
type <%= participantName %>_VoidResponse = <%= participantName %>_APIResponse<void>;       // Hover: { success: true }
type <%= participantName %>_UserResponse = <%= participantName %>_APIResponse<{ id: number; name: string }>; // Hover: { success: true; data: { id: number, name: string } }

const <%= participantName %>_response1: <%= participantName %>_VoidResponse = { success: true };
const <%= participantName %>_response2: <%= participantName %>_UserResponse = { success: true, data: { id: 1, name: "Alice" } };

console.log("Void Response:", JSON.stringify(<%= participantName %>_response1));
console.log("User Response:", JSON.stringify(<%= participantName %>_response2));
// Note: Accessing <%= participantName %>_response1.data would cause a TypeScript error.


// --- Example 4: Handling Potential Errors ---
console.log("\n--- Section 4: Error Handling Types --- ");

// This type provides different structures based on whether T is an Error.
type <%= participantName %>_MaybeError<T> =
    T extends Error
    ? { error: string; data: never } // If T is an Error, include error, data is 'never' possible
    : { error: null; data: T };      // Otherwise, error is null, include data T

// Test cases:
type <%= participantName %>_SuccessResult = <%= participantName %>_MaybeError<{ value: number }>; // Hover: { error: null; data: { value: number } }
type <%= participantName %>_ErrorResult = <%= participantName %>_MaybeError<Error>;           // Hover: { error: string; data: never }

const <%= participantName %>_result1: <%= participantName %>_SuccessResult = { error: null, data: { value: 100 } };
const <%= participantName %>_result2: <%= participantName %>_ErrorResult = { error: "Something went wrong!", data: undefined as never }; // 'never' means no value can be assigned

console.log("Success Result:", JSON.stringify(<%= participantName %>_result1));
console.log("Error Result:", JSON.stringify(<%= participantName %>_result2));

// Student Task 3: Imagine a function that can return a string or null.
// Create a conditional type `<%= participantName %>_EnsureString<T>` that returns `T` if `T` extends `string`, otherwise returns `string`.
// Test it with `string`, `null`, and `number`.
/*
type <%= participantName %>_EnsureString<T> = ...;
type <%= participantName %>_TestStr = <%= participantName %>_EnsureString<"hello">; // string
type <%= participantName %>_TestNull = <%= participantName %>_EnsureString<null>;    // string
type <%= participantName %>_TestNum = <%= participantName %>_EnsureString<123>;     // string
*/

console.log("\n--- ✨ <%= participantName %> Conditional Types exploration complete! ---");

// Export something to make it a module
export const <%= participantName %>_conditionalExerciseComplete = true;
