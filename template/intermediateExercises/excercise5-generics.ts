// Exercise 5: Generics - The Event Handler Workshop
import {
    validateString,
    validateNumber,
    validateBoolean
} from "../validations";

// --- Introduction ---
// Generics in TypeScript are like a Swiss Army knife for your code - they let you write
// flexible, reusable components that can work with different types while maintaining type safety.
// Think of them as templates that can adapt to whatever type you need.

console.log("--- 🛠️ Welcome to the <%= participantName %> Event Handler Workshop! ---");

// --- Example 1: Basic Generic Event Handler ---
console.log("\n--- Section 1: Basic Event Handlers ---");

// Define our event types
type <%= participantName %>_EventType = 'click' | 'input' | 'change';

// Generic event handler type
type <%= participantName %>_EventHandler<T extends HTMLElement, E extends Event> = {
    handle: (event: E, element: T) => void;
    type: <%= participantName %>_EventType;
};

// Generic button component
class <%= participantName %>_GenericButton<T extends HTMLElement, E extends Event> {
    private element: T;
    private handler: <%= participantName %>_EventHandler<T, E>;

    constructor(element: T, handler: <%= participantName %>_EventHandler<T, E>) {
        this.element = element;
        this.handler = handler;
        this.element.addEventListener(handler.type as any, (e: E) => this.handler.handle(e, this.element));
    }
}

// --- Example 2: Generic Form Input Handler ---
console.log("\n--- Section 2: Form Input Handlers ---");

// Generic input handler interface
interface <%= participantName %>_InputHandler<T extends HTMLInputElement, V> {
    onInput: (event: Event, element: T) => V;
    validate: (value: V) => boolean;
    transform?: (value: V) => V;
}

class <%= participantName %>_GenericInput<T extends HTMLInputElement, V> {
    private element: T;
    private handler: <%= participantName %>_InputHandler<T, V>;

    constructor(element: T, handler: <%= participantName %>_InputHandler<T, V>) {
        this.element = element;
        this.handler = handler;
        this.element.addEventListener('input', (e: Event) => {
            const value = this.handler.onInput(e, this.element);
            if (this.handler.validate(value)) {
                const transformedValue = this.handler.transform?.(value) ?? value;
                console.log('Valid input:', transformedValue);
            }
        });
    }
}

// --- Example 3: Generic Form Handler ---
console.log("\n--- Section 3: Form Handlers ---");

// Generic form data type
type <%= participantName %>_FormData<T> = {
    [K in keyof T]: T[K];
};

// Generic form handler interface
interface <%= participantName %>_FormHandler<T extends HTMLFormElement, D> {
    onSubmit: (event: Event, form: T) => D;
    validate: (data: D) => boolean;
    onSuccess?: (data: D) => void;
    onError?: (error: string) => void;
}

class <%= participantName %>_GenericForm<T extends HTMLFormElement, D> {
    private form: T;
    private handler: <%= participantName %>_FormHandler<T, D>;

    constructor(form: T, handler: <%= participantName %>_FormHandler<T, D>) {
        this.form = form;
        this.handler = handler;
        this.form.addEventListener('submit', (e: Event) => {
            e.preventDefault();
            const data = this.handler.onSubmit(e, this.form);
            if (this.handler.validate(data)) {
                this.handler.onSuccess?.(data);
            } else {
                this.handler.onError?.('Validation failed');
            }
        });
    }
}

// ================ Example Usage ================

// Example 1: Button with click event
const <%= participantName %>_button = document.createElement('button');
const <%= participantName %>_buttonHandler: <%= participantName %>_EventHandler<HTMLButtonElement, MouseEvent> = {
    type: 'click',
    handle: (event, element) => {
        console.log('Button clicked!', event.clientX, event.clientY);
    }
};
new <%= participantName %>_GenericButton(<%= participantName %>_button, <%= participantName %>_buttonHandler);

// Example 2: Text input with string validation
const <%= participantName %>_textInput = document.createElement('input');
const <%= participantName %>_textInputHandler: <%= participantName %>_InputHandler<HTMLInputElement, string> = {
    onInput: (event, element) => element.value,
    validate: (value) => value.length >= 3,
    transform: (value) => value.toUpperCase()
};
new <%= participantName %>_GenericInput(<%= participantName %>_textInput, <%= participantName %>_textInputHandler);

// Example 3: Number input with number validation
const <%= participantName %>_numberInput = document.createElement('input');
const <%= participantName %>_numberInputHandler: <%= participantName %>_InputHandler<HTMLInputElement, number> = {
    onInput: (event, element) => Number(element.value),
    validate: (value) => !isNaN(value) && value > 0,
    transform: (value) => Math.round(value)
};
new <%= participantName %>_GenericInput(<%= participantName %>_numberInput, <%= participantName %>_numberInputHandler);

// ================ Your Turn! ================

// TODO: Create a generic form handler for a login form
// 1. Define a LoginFormData interface with username and password
// 2. Create a login form handler that validates the data
// 3. Implement success and error callbacks

/*
interface <%= participantName %>_LoginFormData {
    username: string;
    password: string;
}

const <%= participantName %>_loginForm = document.createElement('form');
const <%= participantName %>_loginFormHandler: <%= participantName %>_FormHandler<HTMLFormElement, <%= participantName %>_LoginFormData> = {
    onSubmit: (event, form) => {
        const formData = new FormData(form);
        return {
            username: formData.get('username') as string,
            password: formData.get('password') as string
        };
    },
    validate: (data) => data.username.length >= 3 && data.password.length >= 6,
    onSuccess: (data) => console.log('Login successful:', data.username),
    onError: (error) => console.error('Login failed:', error)
};
new <%= participantName %>_GenericForm(<%= participantName %>_loginForm, <%= participantName %>_loginFormHandler);
*/

console.log("\n--- ✨ <%= participantName %> Event Handler Workshop complete! ---");

// Export something to make it a module
export const <%= participantName %>_genericsExerciseComplete = true;
