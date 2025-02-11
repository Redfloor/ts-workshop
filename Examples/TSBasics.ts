// Demonstrating the fundamentals of TypeScript with books

// Basic Types
let title: string = "The Great Gatsby";
let pages: number = 180;
let isAvailable: boolean = true;

console.log(`Title: ${title}`);
console.log(`Pages: ${pages}`);
console.log(`Is Available: ${isAvailable}`);

if (isAvailable.split()) {

}

// Union Types
// Type DESCRIBES something. What is a BookID made of when used later.
type BookID = string | number;

let bookId1: BookID = "ISBN1234567890";
let bookId2: BookID = 1234567890;

console.log(`Book ID 1: ${bookId1}`);
console.log(`Book ID 2: ${bookId2}`);

// Nullable Types
let author: string | null = "F. Scott Fitzgerald";
let publicationYear: number | null = 1925;

console.log(`Author: ${author}`);
console.log(`Publication Year: ${publicationYear}`);

// Function demonstrating union and nullable types
function getBookInfo(id: BookID, author: string | null): string {
  return `Book ID: ${id}, Author: ${author ?? "Unknown"}`;
}

console.log(getBookInfo(bookId1, author));
console.log(getBookInfo(bookId2, null));
console.log(getBookInfo(true, 1));

// Interface for a Book
interface Book {
  title: string;
  pages: number;
  isAvailable: boolean;
  author: string | null;
  publicationYear?: number;
  publisher: "Penguin" | "Random House" | "HarperCollins";
}

interface Genre {
  books: Book[],
}

// Creating a book object
const book: Book = {
  title: "The Great Gatsby",
  pages: 180,
  isAvailable: true,
  author: "F. Scott Fitzgerald",
  publicationYear: 1925,
  publisher: "Penguin",
};

// Here Author can be string or null, but must be explicitly defined as either. publication is an optional type, so it can be omitted.

console.log(`Book: ${book.title}, Pages: ${book.pages}, Available: ${book.isAvailable}, Author: ${book.author}, Year: ${book.publicationYear}`);
