# Workshop Creator Notes - Advanced TypeScript Concepts

## 1. Type Inference
### What It Is
Type inference is TypeScript's ability to automatically detect and assign types based on how values are used in your code. It's like having a smart assistant that figures out what type of container you need based on what you're putting in it. 

### Metaphors
1. **Sorting Hat**
   - Automatic Sorting Hat: Just as the Sorting Hat in a magical school assigns students to houses based on their unique traits, TypeScript automatically assigns types based on value usage.

2. **Buying a bottle**
   - One assumes it would be a drink. But for all you know it could be a poison/cleaning agent/something else. Be aware that type inference is not always accurate, therefore manually defining types can be important.


### Example Exercises
```typescript
// Exercise 1: Return Type Inference
function createUser(name: string, age: number) {
    return { name, age, createdAt: new Date() };
}

// Exercise 2: Array Method Inference
const numbers = [1, 2, 3, 4, 5]; // this gets inferred as number[]
const doubled = numbers.map(n => n * 2);


// example type
const type UserConfigType= {
    theme: 'light' | 'dark',
    notifications: boolean,
    fontSize: number
    }

const testUser:UserConfigType = {
    theme: 'magenta', // will fail since it uses type inference
}

// Exercise 3: Destructuring Inference
let userConfig = {
    theme: 'dark',
    notifications: true,
    fontSize: 14
};

let userConfig2:UserConfigType = {
    theme: 'dark',
    notifications: true,
    fontSize: 14
};

userConfig.theme = 'magenta' // this will pass since inferred as a string
userConfig2.theme = 'magenta' // this will fail since theme is strictly typed and magenta doesn't fit

const { theme, notifications } = userConfig;
// Show how types are inferred from object shape
```

## 2. Conditional Types
### What It Is
Conditional types let you create types that change based on conditions, like an if-statement for types. They allow types to adapt based on other types.

### Metaphors
1. **Shape Sorter Toy**
   - Different shapes go into different holes 
   - Like how conditional types route different input types to different output types
2. **Vehicle**
   - Vehicle can either be a plane or a car
   - If it has wings it is a plane, else it's a car

### Example Exercises
```typescript
// Exercise 1: Basic Conditionals
type IsString<T> = T extends string ? true : false;
type Test1 = IsString<"hello">;  // true
type Test2 = IsString<123>;      // false

// Exercise 2: Response Handler
type APIResponse<T> = T extends void 
    ? { success: true }
    : { success: true; data: T };

// Exercise 3: Error Handler
type MaybeError<T> = T extends Error 
    ? { error: string; data: never }
    : { error: null; data: T };

// you need to be able to cover your code with null checks
// Typescript will yell at you if you don't do it right, but 'use with caution'
```

## 3. Utility Types
### What It Is
Built-in TypeScript types that transform other types in common ways.
They're like type transformation tools that come with TypeScript.
Extensions and abstractions that takes existing types and let you do more with that.

### Metaphors
1. **Kitchen Utensils**
   - Different tools for different food prep tasks
   - Like utility types being different tools for type transformations
     - E.g. tools. Tool and the material they're made of.
       - Spatula:
         - Steel can't use on a non-stick pan (canUseOnNonStick)
         - Dish washer safe (dishWasherSafe)
         - Pick can ignore everything but dishWasherSafe and name for context of function packThingsInDishWasher();
         - Omit, e.g. color. Color has no bearing on cooking or other related kitchen functionality.
         - Partial, large object, but specific function. (ANY OF)
           E.g. you have a kitchen object, spatula breaks and you want to replace it. Everything about spatula is still spatula, but maybe certain things about it is different, 
             e.g. 'dishwasherSafe' is different. 
            Partial means you don't need to specificy everything, only that which is different
         - Required.
           - E.g canCookAnOmelette() and canMakeFood() functions.
             - For canMakeFood() the type EggsAvailable can be optional, since we can make food that is non egg based
             - For canCookAnOmelette(), the type EggsAvailable should be required, since you can't make an omelette without breaking some eggs.

            

### Example Exercises
```typescript
// Exercise 1: Partial and Required
interface User {
    name: string;
    email: string;
    password: string;
}
type UpdateUser = Partial<User>;
type ValidUser = Required<User>;

// Exercise 2: Pick and Omit
interface Config {
    host: string;
    port: number;
    secure: boolean;
    timeout: number;
}
type NetworkConfig = Pick<Config, 'host' | 'port'>;
type BasicConfig = Omit<Config, 'secure' | 'timeout'>;

// Exercise 3: Record 
type UserRoles = 'admin' | 'user' | 'guest';
type RolePermissions = Record<UserRoles, string[]>;

// Exercise 4: Required
interface Props {
  a?: number;
  b?: string;
}
 
const obj: Props = { a: 5 };
 
const obj2: Required<Props> = { a: 5 };
// roperty 'b' is missing in type '{ a: number; }' but required in type 'Required<Props>'.

// Require type
// todo
```

## 4. Generics
### What It Is
Generics allow you to write flexible, reusable code that works with multiple types while maintaining type safety. They're like templates that can work with different types.

### Metaphors
1. **Adjustable Wrench**
    - One tool that works with different size nuts and bolts
    - Like how generics work with different types
2. **Modular Adapter**
    - Similar to an adapter that can connect different types of plugs to a single socket
    - generics offer a flexible way to interface with various types while maintaining a consistent structure.


### Example Exercises
```typescript
// Exercise 1: Generic Container
class Box<T> {
    private content: T;
    put(item: T) { this.content = item; }
    get(): T { return this.content; }
}

// Exercise 2: Generic Constraints
interface Lengthwise { length: number; }
function measureLength<T extends Lengthwise>(arg: T): number {
    return arg.length;
}

// Exercise 3: Generic Factory
class Factory<T> {
    create<K extends keyof T>(key: K, value: T[K]): Partial<T> {
        return { [key]: value } as Partial<T>;
    }
}
```

## 5. Mapped Types
### What It Is
Mapped types let you create new types by transforming each property in an existing type. Like applying the same transformation to every item in a collection.

### Metaphors

1. **Color Palette Generator**
   - Takes a color and creates variations (lighter, darker, etc.)
   - Similar to how mapped types create variations of properties

### Example Exercises
```typescript
// Exercise 1: Basic Property Transformation
type MakeReadonly<T> = {
    readonly [P in keyof T]: T[P];
};

// Exercise 2: Validation Type
type ValidationRules<T> = {
    [P in keyof T]: {
        value: T[P];
        isValid: boolean;
        errorMessage?: string;
    };
};

// Exercise 3: State Tracker
type StateTracker<T> = {
    [P in keyof T]: {
        current: T[P];
        previous: T[P] | null;
        isModified: boolean;
    };
};

// exercise 4: Book cover colours
const BookGenres = {
  Adventure: "Exciting quests!",
  Mystery: "Who did it?",
  Romance: "Love stories!"
} as const;

type Genre = keyof typeof BookGenres; // This is now "Adventure" | "Mystery" | "Romance"
type GenreColors = {
  [G in Genre]: string; // For every genre (G), give it a color (string)
};

const genreColors: GenreColors = {
  Adventure: "green",  // Forests and jungles!
  Mystery: "purple",   // Spooky and mysterious!
  Romance: "pink"      // Hearts and love!
};

```

## Workshop Flow Notes
1. Start with inference as it's most familiar to JavaScript developers
2. Move to conditionals to introduce type-level programming
3. Introduce utility types as practical tools
4. Show mapped types as a way to create custom utilities
5. End with generics to tie everything together

Each section should:
- Start with the metaphor
- Show a simple example
- Build to more complex use cases
- Include real-world scenarios
- End with exercises that combine concepts 
