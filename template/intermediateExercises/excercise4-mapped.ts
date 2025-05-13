// Exercise 4: Mapped Types - The Book Cover Designer
import {
    validateString,
    validateNumber,
    validateBoolean
} from "../validations";

// --- Introduction ---
// Mapped Types in TypeScript are like a book cover designer who can create variations
// of book covers based on different genres. Just as a designer might create different
// color schemes for different types of books, mapped types let you transform properties
// of a type systematically.

console.log("--- 📚 Welcome to the <%= participantName %> Book Cover Design Workshop! ---");

// --- Example 1: Basic Property Transformation (Readonly Covers) ---
console.log("\n--- Section 1: Readonly Book Covers ---");

// Define our book genres and their descriptions
const <%= participantName %>_BookGenres = {
    Adventure: "Exciting quests and daring journeys!",
    Mystery: "Intriguing puzzles and suspense!",
    Romance: "Heartwarming love stories!",
    Fantasy: "Magical worlds and epic battles!"
} as const;

// Create a type from the genres
type <%= participantName %>_Genre = keyof typeof <%= participantName %>_BookGenres;

// Basic mapped type: Make all properties readonly
type <%= participantName %>_ReadonlyCovers<T> = {
    readonly [P in keyof T]: T[P];
};

// Apply it to our book genres
type <%= participantName %>_ReadonlyGenres = <%= participantName %>_ReadonlyCovers<typeof <%= participantName %>_BookGenres>;

// Create an instance (this will be readonly)
const <%= participantName %>_genreDescriptions: <%= participantName %>_ReadonlyGenres = <%= participantName %>_BookGenres;

console.log("Genre Descriptions:", JSON.stringify(<%= participantName %>_genreDescriptions));

// Student Task 1: Create a mapped type that makes all properties optional.
// Apply it to the book genres and create a partial genre description object.
/*
type <%= participantName %>_OptionalCovers<T> = {
    [P in keyof T]?: T[P];
};
type <%= participantName %>_OptionalGenres = <%= participantName %>_OptionalCovers<typeof <%= participantName %>_BookGenres>;
const <%= participantName %>_partialGenres: <%= participantName %>_OptionalGenres = {
    Adventure: "Exciting quests!"
};
*/

// --- Example 2: Color Scheme Transformation ---
console.log("\n--- Section 2: Genre Color Schemes ---");

// Define color schemes for each genre
type <%= participantName %>_GenreColors = {
    [G in <%= participantName %>_Genre]: {
        primary: string;
        secondary: string;
        accent: string;
    };
};

const <%= participantName %>_genreColorSchemes: <%= participantName %>_GenreColors = {
    Adventure: {
        primary: "forest green",
        secondary: "khaki",
        accent: "gold"
    },
    Mystery: {
        primary: "deep purple",
        secondary: "slate gray",
        accent: "silver"
    },
    Romance: {
        primary: "rose pink",
        secondary: "cream",
        accent: "gold"
    },
    Fantasy: {
        primary: "royal blue",
        secondary: "silver",
        accent: "purple"
    }
};

console.log("Adventure Color Scheme:", JSON.stringify(<%= participantName %>_genreColorSchemes.Adventure));

// Student Task 2: Create a mapped type that adds a 'isDark' boolean property
// to each color scheme, indicating if the primary color is dark.
/*
type <%= participantName %>_ColorSchemeWithDark = {
    [G in <%= participantName %>_Genre]: <%= participantName %>_GenreColors[G] & {
        isDark: boolean;
    };
};
const <%= participantName %>_darkColorSchemes: <%= participantName %>_ColorSchemeWithDark = {
    Adventure: {
        primary: "forest green",
        secondary: "khaki",
        accent: "gold",
        isDark: true
    },
    // ... other genres
};
*/

// --- Example 3: Book Cover State Tracking ---
console.log("\n--- Section 3: Cover Design States ---");

// Track the state of each genre's cover design
type <%= participantName %>_CoverDesignState = {
    [G in <%= participantName %>_Genre]: {
        currentDesign: string;
        previousDesign: string | null;
        lastModified: Date;
        isApproved: boolean;
    };
};

const <%= participantName %>_coverStates: <%= participantName %>_CoverDesignState = {
    Adventure: {
        currentDesign: "Mountain landscape with golden title",
        previousDesign: "Forest scene with silver title",
        lastModified: new Date(),
        isApproved: true
    },
    Mystery: {
        currentDesign: "Silhouette with purple gradient",
        previousDesign: null,
        lastModified: new Date(),
        isApproved: false
    },
    Romance: {
        currentDesign: "Floral pattern with pink accents",
        previousDesign: "Simple heart design",
        lastModified: new Date(),
        isApproved: true
    },
    Fantasy: {
        currentDesign: "Dragon illustration with blue background",
        previousDesign: "Castle silhouette",
        lastModified: new Date(),
        isApproved: false
    }
};

console.log("Adventure Cover State:", JSON.stringify(<%= participantName %>_coverStates.Adventure));

// Student Task 3: Create a mapped type that tracks the number of revisions
// for each genre's cover design, along with a list of all previous designs.
/*
type <%= participantName %>_CoverRevisionHistory = {
    [G in <%= participantName %>_Genre]: {
        revisionCount: number;
        allDesigns: string[];
        currentDesign: string;
    };
};
const <%= participantName %>_revisionHistory: <%= participantName %>_CoverRevisionHistory = {
    Adventure: {
        revisionCount: 2,
        allDesigns: ["Forest scene", "Mountain landscape"],
        currentDesign: "Mountain landscape with golden title"
    },
    // ... other genres
};
*/

console.log("\n--- ✨ <%= participantName %> Book Cover Design Workshop complete! ---");

// Export something to make it a module
export const <%= participantName %>_mappedExerciseComplete = true;
