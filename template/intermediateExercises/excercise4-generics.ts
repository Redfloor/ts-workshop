// Exercise 5: Generics - Making Code Flexible and Type-Safe
import {
    validateString,
    validateNumber,
    validateBoolean
} from "../validations";

// --- Introduction ---
// Generics in TypeScript are like templates that can work with any type while maintaining type safety.
// They help you write flexible, reusable code that works with different data types.
// Think of them as "type parameters" that you fill in when you use the component.

console.log("--- 🎨 Welcome to the <%= participantName %> Generics Workshop! ---");

// ================ PART 1: Basic Generics ================
console.log("\n--- Section 1: Basic Generics ---");

// 1. Generic Function
// This function can work with any type T, and returns the same type
// The type parameter T is like a placeholder that gets filled in when you use the function
function <%= participantName %>_identity<T>(arg: T): T {
    return arg;
}

// Try it out with different types:
const <%= participantName %>_num = <%= participantName %>_identity<number>(42);    // T is number
const <%= participantName %>_str = <%= participantName %>_identity("hello");      // T is inferred as string
const <%= participantName %>_bool = <%= participantName %>_identity(true);        // T is boolean

// Without Generics
function <%= participantName %>_identity2(arg) {
    return arg;
}
// With the same types
const <%= participantName %>_num2 = <%= participantName %>_identity2(42);    // T is number
const <%= participantName %>_str2 = <%= participantName %>_identity2("hello");      // T is inferred as string
const <%= participantName %>_bool2 = <%= participantName %>_identity2(true);        // T is boolean

// 2. Generic Array Function
// This function can work with arrays of any type
// It's more flexible than writing separate functions for string[], number[], etc.
function <%= participantName %>_printArray<T>(arr: T[]): void {
    arr.forEach(item => console.log(item));
}

// Try it out with different array types:
<%= participantName %>_printArray<string>(["apple", "banana", "cherry"]);
<%= participantName %>_printArray<number>([1, 2, 3, 4, 5]);
<%= participantName %>_printArray<boolean>(false);

// 3. Generic Interface
// This interface can hold a value of any type
// The type parameter T makes it reusable for different value types
interface <%= participantName %>_Box<T> {
    value: T;
}

// Try it out with different value types:
const <%= participantName %>_stringBox: <%= participantName %>_Box<string> = { value: "hello" };
const <%= participantName %>_numberBox: <%= participantName %>_Box<number> = { value: 42 };

// ================ PART 2: Generic Constraints ================
console.log("\n--- Section 2: Generic Constraints ---");

// 1. Basic Constraint
// This function only works with types that have a length property
// The constraint 'extends { length: number }' ensures type safety
function <%= participantName %>_logLength<T extends { length: number }>(arg: T): T {
    console.log(`Length: ${arg.length}`);
    return arg;
}

// Try it out:
<%= participantName %>_logLength("hello");     // OK - string has length
<%= participantName %>_logLength([1, 2, 3]);   // OK - array has length
// <%= participantName %>_logLength(42);      // Error - number has no length

// ================ PART 3: Practical Example - Generic Dropdown ================
console.log("\n--- Section 3: Generic Dropdown ---");

// Instead of creating multiple types for different dropdown values:
// type StringDropdown = { label: string; value: string; }
// type NumberDropdown = { label: string; value: number; }
// type BooleanDropdown = { label: string; value: boolean; }

// We can use a single generic type:
// This makes our code more maintainable and reduces duplication
type <%= participantName %>_Dropdown<T> = {
    label: string;
    value: T;
};

// Now we can create dropdowns with any type of value:
const <%= participantName %>_stringDropdown: <%= participantName %>_Dropdown<string> = {
    label: "Select a color",
    value: "red"
};

const <%= participantName %>_numberDropdown: <%= participantName %>_Dropdown<number> = {
    label: "Select a quantity",
    value: 42
};

const <%= participantName %>_booleanDropdown: <%= participantName %>_Dropdown<boolean> = {
    label: "Is it active?",
    value: true
};

// We can even use complex types:
interface <%= participantName %>_User {
    id: number;
    name: string;
}

const <%= participantName %>_userDropdown: <%= participantName %>_Dropdown<<%= participantName %>_User> = {
    label: "Select a user",
    value: { id: 1, name: "John" }
};


// Creating a dropdown component with generic onChange handler

type <%= participantName %>_DropdownOption<T> = {
    label: string;
    value: T;
};

type <%= participantName %>_DropdownList<T> = {
    options: <%= participantName %>_DropdownOption<T>[];
    selected?: T;
    onSelect?: (value: T) => void;
};

// Example usage:
const <%= participantName %>_colorDropdown: <%= participantName %>_DropdownList<string> = {
    options: [
        { label: "Red", value: "red" },
        { label: "Blue", value: "blue" },
        { label: "Green", value: "green" }
    ],
    onSelect: (value) => console.log("Selected:", value)
};

console.log("\n--- ✨ <%= participantName %> Generics Workshop complete! ---");

// Export something to make it a module
export const <%= participantName %>_genericsExerciseComplete = true;

