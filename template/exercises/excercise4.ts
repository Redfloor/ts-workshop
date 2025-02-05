// shoppingCartBrokenPrettified.ts
// This file intentionally contains wrong type definitions and operations
// that will cause TypeScript errors. Workshop participants should fix these issues
// so that all arithmetic and type operations work correctly, while keeping the prettified output.

// ❌ Incorrect: Price should be a number, not a string.
interface WrongProduct {
  id: number;
  name: string;
  price: string; // Expected: number
}
  
// ❌ Incorrect: Quantity should be a number, not a string.
interface WrongCartItem {
  product: WrongProduct;
  quantity: string; // Expected: number
}
  
// The shopping cart holds multiple cart items.
interface WrongShoppingCart {
  items: WrongCartItem[];
}
  
// Create a new, empty shopping cart.
function createCart(): WrongShoppingCart {
  return { items: [] };
}
  
// Adds an item to the cart.
// ❌ Note: The parameter "quantity" is typed as string intentionally.
function addItemToCart(cart: WrongShoppingCart, product: WrongProduct, quantity: string): void {
  const item: WrongCartItem = { product, quantity };
  cart.items.push(item);
}
  
// Calculates the total cost of the cart.
// ❌ Error: Multiplying string values (product.price and quantity) will cause an error.
function calculateTotal(cart: WrongShoppingCart): number {
  return cart.items.reduce((total, item) => {
    return total + item.product.price * item.quantity;
    //         ^^^^^^^^^^^^^  ^^^^^^^^^^^
    // Both product.price and quantity are strings, but arithmetic requires numbers.
  }, 0);
}
  
// Applies a discount to the total cost.
// ❌ Error: Discount is provided as a string; subtraction from a number will fail.
function applyDiscount(cart: WrongShoppingCart, discount: string): number {
  const total = calculateTotal(cart);
  return total - discount;
  //         ^^^^^            ^^^^^^^
  // 'discount' should be a number.
}
  
// Updates the quantity of a product in the cart.
// ❌ Error: newQuantity is typed as string instead of a number.
function updateItemQuantity(cart: WrongShoppingCart, productId: number, newQuantity: string): void {
  const item = cart.items.find((item) => item.product.id === productId);
  if (item) {
    item.quantity = newQuantity;
  }
}
  
// -------------------
// Prettified Console Output Helpers
// -------------------
function printDivider(): void {
  console.log('==========================================');
}

function printCartHeader(): void {
  printDivider();
  console.log('🛒 Shopping Cart Summary');
  printDivider();
}

function printCartItems(cart: WrongShoppingCart): void {
  console.log('📦 Cart Items:');
  cart.items.forEach((item, index) => {
    console.log(`  ${index + 1}. ${item.product.name}`);
    console.log(`       Price   : $${item.product.price}`);
    console.log(`       Quantity: ${item.quantity}`);
    // ❌ Error: Multiplying strings will cause arithmetic issues.
    const subtotal = item.product.price * item.quantity;
    console.log(`       Subtotal: $${subtotal}`);
    printDivider();
  });
}

function printCartTotals(cart: WrongShoppingCart, discount: string): void {
  const totalBefore = calculateTotal(cart);
  const totalAfter = applyDiscount(cart, discount);
  console.log(`💰 Total before discount: $${totalBefore}`);
  console.log(`💸 Discount applied     : $${discount}`);
  console.log(`🤑 Total after discount  : $${totalAfter}`);
  printDivider();
}
  
// -------------------
// Sample Usage
// -------------------

// Create a new shopping cart.
const cart = createCart();

// ❌ Product prices are incorrectly typed as strings.
const productA: WrongProduct = { id: 1, name: "Widget", price: "10.99" };
const productB: WrongProduct = { id: 2, name: "Gadget", price: "15.49" };

// Add items to the cart.
// ❌ Quantities are also strings, which will cause arithmetic errors later.
addItemToCart(cart, productA, "2");
addItemToCart(cart, productB, "3");

// Prettified output of the cart before discount.
printCartHeader();
printCartItems(cart);
printCartTotals(cart, "5");

// Update quantity for productA.
console.log('🔄 Updating quantity for product with ID 1 to "4"...');
updateItemQuantity(cart, 1, "4");

// Prettified output of the cart after updating quantity.
printCartHeader();
printCartItems(cart);
printCartTotals(cart, "5");
