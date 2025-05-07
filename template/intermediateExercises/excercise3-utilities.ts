// Exercise 3: Utility Types - The Kitchen Toolbox
import {
    validateString,
    validateNumber,
    validateBoolean,
    validateObject
} from "../validations";

// --- Introduction ---
// Utility Types in TypeScript are like different kitchen tools - each designed for a specific task.
// Just as you wouldn't use a spatula to chop vegetables, each utility type has its specific purpose
// in transforming and manipulating types.

console.log("--- 🥄 Welcome to the <%= participantName %> Kitchen Utility Types Workshop! ---");

// --- Example 1: Partial and Required (The Replaceable Tool) ---
console.log("\n--- Section 1: Partial and Required - The Replaceable Tool ---");

// Imagine you have a kitchen tool that needs replacement parts
interface <%= participantName %>_KitchenTool {
    name: string;
    material: string;
    canUseOnNonStick: boolean;
    dishWasherSafe: boolean;
    color?: string;  // Optional property
}

// Partial: When you only need to specify some properties for a replacement
type <%= participantName %>_ToolReplacement = Partial<<%= participantName %>_KitchenTool>;
// Now you can create a replacement with just the properties that changed
const <%= participantName %>_newSpatula: <%= participantName %>_ToolReplacement = {
    material: "silicone",  // Only specifying what changed
    canUseOnNonStick: true
};
console.log("New spatula replacement:", JSON.stringify(<%= participantName %>_newSpatula));

// Required: When all properties must be present (like for a complete tool)
type <%= participantName %>_CompleteTool = Required<<%= participantName %>_KitchenTool>;
const <%= participantName %>_completeTool: <%= participantName %>_CompleteTool = {
    name: "Spatula",
    material: "silicone",
    canUseOnNonStick: true,
    dishWasherSafe: true,
    color: "red"  // Now required!
};
console.log("Complete tool:", JSON.stringify(<%= participantName %>_completeTool));

// Student Task 1: Create an interface for a recipe ingredient with optional properties.
// Use Partial to create a type for ingredient substitutions where only some properties might change.
/*
interface <%= participantName %>_Ingredient {
    name: string;
    amount: number;
    unit: string;
    isOptional?: boolean;
    notes?: string;
}
type <%= participantName %>_IngredientSubstitution = Partial<<%= participantName %>_Ingredient>;
// Create a substitution that only changes the amount and unit
const <%= participantName %>_substitution: <%= participantName %>_IngredientSubstitution = {
    amount: 2,
    unit: "cups"
};
*/

// --- Example 2: Pick and Omit (The Specialized Tool) ---
console.log("\n--- Section 2: Pick and Omit - The Specialized Tool ---");

// For the dishwasher packing function, we only care about dishWasherSafe and name
type <%= participantName %>_DishwasherItem = Pick<<%= participantName %>_KitchenTool, 'name' | 'dishWasherSafe'>;

// For the cooking function, we don't care about color
type <%= participantName %>_CookingTool = Omit<<%= participantName %>_KitchenTool, 'color'>;

const <%= participantName %>_dishwasherItem: <%= participantName %>_DishwasherItem = {
    name: "Spatula",
    dishWasherSafe: true
};
console.log("Dishwasher item:", JSON.stringify(<%= participantName %>_dishwasherItem));

const <%= participantName %>_cookingTool: <%= participantName %>_CookingTool = {
    name: "Spatula",
    material: "silicone",
    canUseOnNonStick: true,
    dishWasherSafe: true
};
console.log("Cooking tool:", JSON.stringify(<%= participantName %>_cookingTool));

// Student Task 2: Create an interface for a recipe with multiple properties.
// Use Pick to create a type for the recipe card (just name and instructions).
// Use Omit to create a type for the shopping list (everything except instructions).
/*
interface <%= participantName %>_Recipe {
    name: string;
    ingredients: string[];
    instructions: string;
    prepTime: number;
    cookTime: number;
    difficulty: 'easy' | 'medium' | 'hard';
}
type <%= participantName %>_RecipeCard = Pick<<%= participantName %>_Recipe, 'name' | 'instructions'>;
type <%= participantName %>_ShoppingList = Omit<<%= participantName %>_Recipe, 'instructions'>;
*/

// --- Example 3: Record (The Recipe Book) ---
console.log("\n--- Section 3: Record - The Recipe Book ---");

// Define possible cooking methods
type <%= participantName %>_CookingMethod = 'boil' | 'fry' | 'bake' | 'grill';

// Create a record of tools suitable for each cooking method
type <%= participantName %>_MethodTools = Record<<%= participantName %>_CookingMethod, string[]>;

const <%= participantName %>_cookingTools: <%= participantName %>_MethodTools = {
    boil: ['Pot', 'Ladle', 'Strainer'],
    fry: ['Pan', 'Spatula', 'Tongs'],
    bake: ['Baking Sheet', 'Mixing Bowl', 'Whisk'],
    grill: ['Grill', 'Tongs', 'Brush']
};
console.log("Tools for baking:", <%= participantName %>_cookingTools.bake);

// Student Task 3: Create a Record type for kitchen safety rules.
// Define different areas of the kitchen and their specific safety rules.
/*
type <%= participantName %>_KitchenArea = 'stove' | 'sink' | 'counter' | 'storage';
type <%= participantName %>_SafetyRules = Record<<%= participantName %>_KitchenArea, string[]>;
const <%= participantName %>_safetyRules: <%= participantName %>_SafetyRules = {
    stove: ['Never leave unattended', 'Keep flammable items away'],
    sink: ['Clean up spills immediately', 'Don\'t block drain'],
    counter: ['Keep clean and dry', 'Don\'t overload'],
    storage: ['Label all containers', 'Keep heavy items low']
};
*/

console.log("\n--- ✨ <%= participantName %> Kitchen Utility Types exploration complete! ---");

// Export something to make it a module
export const <%= participantName %>_utilityExerciseComplete = true;
