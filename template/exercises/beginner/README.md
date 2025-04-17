# TypeScript Workshop Exercises - Beginner Level

This workshop consists of 5 progressive exercises designed to help participants understand TypeScript fundamentals through practical, hands-on examples.

## Exercise Overview

### Exercise 1: Basic TypeScript Types
**File**: `excercise1.ts`  
**Topics Covered**:
- String, number, and boolean types
- Arrays and tuples
- Enums
- Basic interfaces
- Simple function types
- Type validation

**Key Learning Outcomes**:
- Understanding basic TypeScript type system
- Working with type validation
- Converting JavaScript to TypeScript

### Exercise 2: Pokemon API Integration
**File**: `excercise2.ts`  
**Topics Covered**:
- Async/await operations
- API integration
- Interface definitions
- Type casting
- Error handling

**Key Learning Outcomes**:
- Working with external APIs in TypeScript
- Defining types for API responses
- Basic error handling patterns

### Exercise 3: SpaceX API Integration
**File**: `excercise3.ts`  
**Topics Covered**:
- Complex API responses
- Union types
- Date handling
- Array operations
- Type narrowing

**Key Learning Outcomes**:
- Working with complex data structures
- Understanding union types
- Handling dates in TypeScript
- Basic type narrowing techniques

### Exercise 4: Shopping Cart System
**File**: `excercise4.ts`  
**Topics Covered**:
- Business logic implementation
- Arithmetic operations
- Array methods (reduce, find)
- Basic state management
- Type validation

**Key Learning Outcomes**:
- Implementing business logic with TypeScript
- Working with numeric operations
- Managing state with proper types
- Array manipulation with type safety

### Exercise 5: Card Deck Simulator
**File**: `excercise5.ts`  
**Topics Covered**:
- Class-like structures
- Complex interfaces
- Array manipulation
- Random operations
- Game logic

**Key Learning Outcomes**:
- Building complex systems with TypeScript
- Working with classes and interfaces
- Implementing game logic with type safety
- Managing complex state

## Workshop Structure

Each exercise follows a similar pattern:
1. Intentionally broken type definitions
2. Comments indicating what needs to be fixed
3. Working implementation logic
4. Prettified console output

## Exercise Format

```typescript
// Example structure in each exercise:

// ❌ Incorrect type definitions:
interface WrongInterface {
    property: wrongType;  // Expected: correctType
}

// Functions with incorrect types:
function brokenFunction(param: wrongType): wrongReturnType {
    // Implementation
}

// Sample usage and testing
```

## Getting Started

1. Each exercise file contains intentionally broken TypeScript code
2. Read the comments marked with ❌ to understand what needs fixing
3. Fix the type definitions while keeping the implementation logic working
4. Ensure the prettified output remains intact
5. Test your solutions with the provided sample usage

## Tips for Participants

- Read through all comments carefully
- Pay attention to the expected types mentioned in comments
- Keep the implementation logic unchanged
- Focus on fixing type definitions
- Test your changes with the sample usage code
- Use TypeScript compiler errors as guidance

## Learning Path

The exercises are designed to be completed in order, with each building upon concepts from previous exercises:

1. Start with basic types (Exercise 1)
2. Move to API integration (Exercises 2-3)
3. Progress to business logic (Exercise 4)
4. Finish with complex systems (Exercise 5)

## Success Criteria

For each exercise, you should:
1. Fix all TypeScript errors
2. Maintain the original functionality
3. Keep the prettified output format
4. Understand why the original types were incorrect
5. Be able to explain your fixes

## Additional Resources

- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [TypeScript Playground](https://www.typescriptlang.org/play)
- [TypeScript Deep Dive](https://basarat.gitbook.io/typescript/) 