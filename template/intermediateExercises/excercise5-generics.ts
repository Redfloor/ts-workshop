// Exercise 5: Generics - From Basics to Styled Components
import {
    validateString,
    validateNumber,
    validateBoolean
} from "../validations";

// --- Introduction ---
// Generics in TypeScript are like templates that can work with any type while maintaining type safety.
// Think of them as "type parameters" that you fill in when you use the component.

console.log("--- 🎨 Welcome to the <%= participantName %> Generics Workshop! ---");

// ================ PART 1: Basic Generics ================
console.log("\n--- Section 1: Basic Generics ---");

// 1. Generic Function
function <%= participantName %>_identity<T>(arg: T): T {
    return arg;
}

// Try it out:
const <%= participantName %>_num = <%= participantName %>_identity<number>(42);    // num: number
const <%= participantName %>_str = <%= participantName %>_identity("hello");      // str: string (type inferred)

// 2. Generic Interface
interface <%= participantName %>_Box<T> {
    value: T;
}

// Try it out:
const <%= participantName %>_stringBox: <%= participantName %>_Box<string> = { value: "hello" };
const <%= participantName %>_numberBox: <%= participantName %>_Box<number> = { value: 42 };

// 3. Generic Class
class <%= participantName %>_Stack<T> {
    private items: T[] = [];
    
    push(item: T): void {
        this.items.push(item);
    }
    
    pop(): T | undefined {
        return this.items.pop();
    }
}

// Try it out:
const <%= participantName %>_stack = new <%= participantName %>_Stack<string>();
<%= participantName %>_stack.push("first");
<%= participantName %>_stack.push("second");

// ================ PART 2: Generic Constraints ================
console.log("\n--- Section 2: Generic Constraints ---");

// 1. Basic Constraint
function <%= participantName %>_logLength<T extends { length: number }>(arg: T): T {
    console.log(`Length: ${arg.length}`);
    return arg;
}

// Try it out:
<%= participantName %>_logLength("hello");     // OK - string has length
<%= participantName %>_logLength([1, 2, 3]);   // OK - array has length
// <%= participantName %>_logLength(42);      // Error - number has no length

// ================ PART 3: Styled Components ================
console.log("\n--- Section 3: Styled Components ---");

// 1. Basic Styled Component
interface <%= participantName %>_StyledProps {
    color?: string;
    backgroundColor?: string;
    padding?: string;
    margin?: string;
}

class <%= participantName %>_StyledDiv {
    private element: HTMLDivElement;
    private props: <%= participantName %>_StyledProps;

    constructor(props: <%= participantName %>_StyledProps) {
        this.element = document.createElement('div');
        this.props = props;
        this.applyStyles();
    }

    private applyStyles(): void {
        Object.entries(this.props).forEach(([key, value]) => {
            if (value) {
                this.element.style[key as any] = value;
            }
        });
    }

    getElement(): HTMLDivElement {
        return this.element;
    }
}

// Try it out:
const <%= participantName %>_redBox = new <%= participantName %>_StyledDiv({
    color: 'white',
    backgroundColor: 'red',
    padding: '10px',
    margin: '5px'
});

// 2. Generic Styled Component with Event Handler
interface <%= participantName %>_StyledButtonProps extends <%= participantName %>_StyledProps {
    onClick?: (event: MouseEvent) => void;
}

class <%= participantName %>_StyledButton {
    private element: HTMLButtonElement;
    private props: <%= participantName %>_StyledButtonProps;

    constructor(props: <%= participantName %>_StyledButtonProps) {
        this.element = document.createElement('button');
        this.props = props;
        this.applyStyles();
        this.setupEventHandlers();
    }

    private applyStyles(): void {
        Object.entries(this.props).forEach(([key, value]) => {
            if (value && key !== 'onClick') {
                this.element.style[key as any] = value;
            }
        });
    }

    private setupEventHandlers(): void {
        if (this.props.onClick) {
            this.element.addEventListener('click', this.props.onClick);
        }
    }

    getElement(): HTMLButtonElement {
        return this.element;
    }
}

// Try it out:
const <%= participantName %>_blueButton = new <%= participantName %>_StyledButton({
    color: 'white',
    backgroundColor: 'blue',
    padding: '10px',
    margin: '5px',
    onClick: (event) => console.log('Button clicked!', event)
});

// ================ Your Turn! ================

// TODO: Create a generic styled component that can work with any HTML element
// 1. Create a generic type for the element
// 2. Add support for custom event handlers
// 3. Make it work with any HTML element type

/*
class <%= participantName %>_GenericStyledElement<T extends HTMLElement> {
    // Your implementation here
}

// Example usage:
const <%= participantName %>_styledInput = new <%= participantName %>_GenericStyledElement<HTMLInputElement>({
    color: 'black',
    backgroundColor: 'white',
    padding: '5px',
    // Add your implementation
});
*/

console.log("\n--- ✨ <%= participantName %> Generics Workshop complete! ---");

// Export something to make it a module
export const <%= participantName %>_genericsExerciseComplete = true;
