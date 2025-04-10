# TypeScript Intermediate Exercises - Introduction

## Exercise 1: Conditional Types
**File**: `01_conditional_types.ts`

Conditional types are one of TypeScript's most powerful features for creating flexible, reusable type definitions. They act like "if statements" for types, allowing you to create types that change based on conditions.

**Real-world applications**:
- API response handling (extracting success/error types)
- Type-safe data transformations
- Framework utilities (like React's `ComponentProps<T>`)
- Generic error handling systems

**Practical example**: When building an API client, you might want to automatically extract the success type from a response type:
```typescript
// Instead of manually typing each response
type UserResponse = APIResponse<User>;
type OrderResponse = APIResponse<Order>;

// You can automatically extract the data type
type ExtractData<T> = T extends APIResponse<infer U> ? U : never;
type UserData = ExtractData<UserResponse>; // Type is User
```

## Exercise 2: Type Inference
**File**: `02_type_inference.ts`

Type inference is TypeScript's ability to automatically determine types based on usage. Understanding and controlling type inference is crucial for writing clean, maintainable code without excessive type annotations.

**Real-world applications**:
- Function return type inference
- React hook type inference
- Generic function parameter inference
- Builder pattern implementations

**Practical example**: When building a state management system:
```typescript
// TypeScript can infer the correct action types
const createAction = <T extends string, P>(type: T, payload: P) => ({
    type,
    payload
});

const action = createAction('UPDATE_USER', { id: 1, name: 'John' });
// action.payload is inferred as { id: number, name: string }
```

## Exercise 3: Mapped Types
**File**: `03_mapped_types.ts`

Mapped types allow you to create new types based on transforming the properties of existing types. They're essential for building type-safe utilities and transformations.

**Real-world applications**:
- Form validation schemas
- API request/response transformations
- Immutable data structures
- Type-safe object transformations

**Practical example**: When building a form library:
```typescript
// Make all fields optional for partial updates
type PartialForm<T> = { [K in keyof T]?: T[K] };

// Add validation status to each field
type FormWithValidation<T> = {
    [K in keyof T]: {
        value: T[K];
        isValid: boolean;
        errorMessage?: string;
    }
};
```

## Exercise 4: Advanced Generics
**File**: `04_advanced_generics.ts`

Advanced generics with constraints allow you to create highly reusable components and utilities while maintaining type safety. They're fundamental for building flexible, type-safe abstractions.

**Real-world applications**:
- Generic UI components
- Data container classes
- Type-safe event systems
- Factory patterns

**Practical example**: When building a data table component:
```typescript
interface SortableTable<T extends Record<string, any>> {
    data: T[];
    sortBy<K extends keyof T>(key: K): void;
    filter(predicate: (item: T) => boolean): void;
}

// Type-safe usage:
const userTable: SortableTable<User> = {/*...*/};
userTable.sortBy('name'); // Only allows keys that exist in User
```

## Why These Concepts Matter

1. **Type Safety**: These patterns help catch errors at compile time rather than runtime.

2. **Code Reusability**: Advanced type features allow you to create flexible, reusable components and utilities.

3. **Developer Experience**: Better type inference and constraints provide better IDE support and documentation.

4. **Maintainability**: Strong typing makes refactoring safer and more predictable.

5. **Performance**: Many of these patterns have zero runtime cost while providing compile-time safety.

## Learning Path

These exercises are designed to build on each other:

1. Start with **Conditional Types** to understand type-level programming
2. Move to **Type Inference** to learn how TypeScript determines types
3. Progress to **Mapped Types** for type transformations
4. Finally, tackle **Advanced Generics** to build flexible abstractions

Each exercise includes practical examples and test cases to help you understand how these concepts apply in real-world scenarios. 