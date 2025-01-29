// validations.ts
import { z, ZodError } from "zod";

/*** Basic Types ***/

// Validate String
export function validateString(data: unknown): boolean {
  const StringSchema = z.string();
  try {
    StringSchema.parse(data);
    console.log("✔️ String validation passed!");
    return true;
  } catch (error) {
    if (error instanceof ZodError) {
      console.log("❌ String validation failed:", error.errors);
    } else {
      console.log("❌ String validation failed:", error);
    }
    return false;
  }
}

// Validate Number
export function validateNumber(data: unknown): boolean {
  const NumberSchema = z.number();
  try {
    NumberSchema.parse(data);
    console.log("✔️ Number validation passed!");
    return true;
  } catch (error) {
    if (error instanceof ZodError) {
      console.log("❌ Number validation failed:", error.errors);
    } else {
      console.log("❌ Number validation failed:", error);
    }
    return false;
  }
}

// Validate Boolean
export function validateBoolean(data: unknown): boolean {
  const BooleanSchema = z.boolean();
  try {
    BooleanSchema.parse(data);
    console.log("✔️ Boolean validation passed!");
    return true;
  } catch (error) {
    if (error instanceof ZodError) {
      console.log("❌ Boolean validation failed:", error.errors);
    } else {
      console.log("❌ Boolean validation failed:", error);
    }
    return false;
  }
}

/*** Arrays and Tuples ***/

// Validate Array of Numbers
export function validateNumberArray(data: unknown): boolean {
  const NumberArraySchema = z.array(z.number());
  try {
    NumberArraySchema.parse(data);
    console.log("✔️ Number Array validation passed!");
    return true;
  } catch (error) {
    if (error instanceof ZodError) {
      console.log("❌ Number Array validation failed:", error.errors);
    } else {
      console.log("❌ Number Array validation failed:", error);
    }
    return false;
  }
}

// Validate Tuple [string, number]
export function validateStringNumberTuple(data: unknown): boolean {
  const StringNumberTupleSchema = z.tuple([z.string(), z.number()]);
  try {
    StringNumberTupleSchema.parse(data);
    console.log("✔️ Tuple [string, number] validation passed!");
    return true;
  } catch (error) {
    if (error instanceof ZodError) {
      console.log("❌ Tuple [string, number] validation failed:", error.errors);
    } else {
      console.log("❌ Tuple [string, number] validation failed:", error);
    }
    return false;
  }
}

/*** Enums ***/

// Define the Direction enum
export enum Direction {
  Up,
  Down,
  Left,
  Right
}

// Validate Direction Enum
export function validateDirection(data: unknown): boolean {
  const DirectionSchema = z.nativeEnum(Direction);
  try {
    DirectionSchema.parse(data);
    console.log("✔️ Direction enum validation passed!");
    return true;
  } catch (error) {
    if (error instanceof ZodError) {
      console.log("❌ Direction enum validation failed:", error.errors);
    } else {
      console.log("❌ Direction enum validation failed:", error);
    }
    return false;
  }
}

/*** Objects and Interfaces ***/

// Define the Person schema
const PersonSchema = z.object({
  name: z.string(),
  age: z.number()
});

// Export Person type inferred from schema
export type Person = z.infer<typeof PersonSchema>;

// Validate Person Object
export function validatePerson(data: unknown): boolean {
  try {
    PersonSchema.parse(data);
    console.log("✔️ Person object validation passed!");
    return true;
  } catch (error) {
    if (error instanceof ZodError) {
      console.log("❌ Person object validation failed:", error.errors);
    } else {
      console.log("❌ Person object validation failed:", error);
    }
    return false;
  }
}

/*** Functions ***/

// Validate Greet Function Signature
export function validateGreetFunction(fn: unknown): boolean {
  const GreetFunctionSchema = z.function(z.tuple([z.string()]), z.string());
  try {
    GreetFunctionSchema.parse(fn);
    console.log("✔️ Greet function validation passed!");
    return true;
  } catch (error) {
    if (error instanceof ZodError) {
      console.log("❌ Greet function validation failed:", error.errors);
    } else {
      console.log("❌ Greet function validation failed:", error);
    }
    return false;
  }
}

/*** Classes ***/

// Validate Animal Instance
export function validateAnimalInstance(instance: unknown): boolean {
  const AnimalSchema = z.object({
    name: z.string(),
    speak: z.function(z.tuple([]), z.string())
  });
  try {
    AnimalSchema.parse(instance);
    console.log("✔️ Animal instance validation passed!");
    return true;
  } catch (error) {
    if (error instanceof ZodError) {
      console.log("❌ Animal instance validation failed:", error.errors);
    } else {
      console.log("❌ Animal instance validation failed:", error);
    }
    return false;
  }
}

/*** Generics ***/

// Validate Identity Function
export function validateIdentityFunction(
  fn: unknown,
  input: unknown,
  expectedOutput: unknown
): boolean {
  const IdentityFunctionSchema = z.function(z.tuple([z.any()]), z.any());
  try {
    IdentityFunctionSchema.parse(fn);
    const result = (fn as (arg: any) => any)(input);
    if (result === expectedOutput) {
      console.log("✔️ Identity function validation passed!");
      return true;
    } else {
      console.log(
        `❌ Identity function output mismatch. Expected: ${expectedOutput}, Received: ${result}`
      );
      return false;
    }
  } catch (error) {
    if (error instanceof ZodError) {
      console.log("❌ Identity function validation failed:", error.errors);
    } else {
      console.log("❌ Identity function validation failed:", error);
    }
    return false;
  }
}
