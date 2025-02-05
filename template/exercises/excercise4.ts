// This file intentionally contains wrong type definitions and operations
// that will cause TypeScript errors. Workshop participants should fix these issues
// so that all arithmetic and type operations work correctly, while keeping the prettified output.

// ❌ Incorrect: Price should be a number, not a string.
interface <%= participantName %>WrongProduct {
  id: number;
  name: string;
  price: string; // Expected: number
}
  
// ❌ Incorrect: Quantity should be a number, not a string.
interface <%= participantName %>WrongCartItem {
  product: <%= participantName %>WrongProduct;
  quantity: string; // Expected: number
}
  
// The shopping cart holds multiple cart items.
interface <%= participantName %>WrongShoppingCart {
  items: <%= participantName %>WrongCartItem[];
}
  
// Create a new, empty shopping cart.
function <%= participantName %>CreateCart(): <%= participantName %>WrongShoppingCart {
  return { items: [] };
}
  
// Adds an item to the cart.
// ❌ Note: The parameter "quantity" is typed as string intentionally.
function <%= participantName %>AddItemToCart(cart: <%= participantName %>WrongShoppingCart, product: <%= participantName %>WrongProduct, quantity: string): void {
  const item: <%= participantName %>WrongCartItem = { product, quantity };
  cart.items.push(item);
}
  
// Calculates the total cost of the cart.
// ❌ Error: Multiplying string values (product.price and quantity) will cause an error.
function <%= participantName %>CalculateTotal(cart: <%= participantName %>WrongShoppingCart): number {
  return cart.items.reduce((total, item) => {
    return total + item.product.price * item.quantity;
    //         ^^^^^^^^^^^^^  ^^^^^^^^^^^
    // Both product.price and quantity are strings, but arithmetic requires numbers.
  }, 0);
}
  
// Applies a discount to the total cost.
// ❌ Error: Discount is provided as a string; subtraction from a number will fail.
function <%= participantName %>ApplyDiscount(cart: <%= participantName %>WrongShoppingCart, discount: string): number {
  const total = <%= participantName %>CalculateTotal(cart);
  return total - discount;
  //         ^^^^^            ^^^^^^^
  // 'discount' should be a number.
}
  
// Updates the quantity of a product in the cart.
// ❌ Error: newQuantity is typed as string instead of a number.
function <%= participantName %>updateItemQuantity(cart: <%= participantName %>WrongShoppingCart, productId: number, newQuantity: string): void {
  const item = cart.items.find((item) => item.product.id === productId);
  if (item) {
    item.quantity = newQuantity;
  }
}
  
// -------------------
// Prettified Console Output Helpers
// -------------------
function <%= participantName %>PrintDivider(): void {
  console.log('==========================================');
}

function <%= participantName %>PrintCartHeader(): void {
  <%= participantName %>PrintDivider();
  console.log('🛒 Shopping Cart Summary');
  <%= participantName %>PrintDivider();
}

function <%= participantName %>PrintCartItems(cart: <%= participantName %>WrongShoppingCart): void {
  console.log('📦 Cart Items:');
  cart.items.forEach((item, index) => {
    console.log(`  ${index + 1}. ${item.product.name}`);
    console.log(`       Price   : $${item.product.price}`);
    console.log(`       Quantity: ${item.quantity}`);
    // ❌ Error: Multiplying strings will cause arithmetic issues.
    const subtotal = item.product.price * item.quantity;
    console.log(`       Subtotal: $${subtotal}`);
    <%= participantName %>PrintDivider();
  });
}

function <%= participantName %>PrintCartTotals(cart: <%= participantName %>WrongShoppingCart, discount: string): void {
  const totalBefore = <%= participantName %>CalculateTotal(cart);
  const totalAfter = <%= participantName %>ApplyDiscount(cart, discount);
  console.log(`💰 Total before discount: $${totalBefore}`);
  console.log(`💸 Discount applied     : $${discount}`);
  console.log(`🤑 Total after discount  : $${totalAfter}`);
  <%= participantName %>PrintDivider();
}
  
// -------------------
// Sample Usage
// -------------------

// Create a new shopping cart.
const <%= participantName %>Cart = <%= participantName %>CreateCart();

// ❌ Product prices are incorrectly typed as strings.
const <%= participantName %>ProductA: <%= participantName %>WrongProduct = { id: 1, name: "Widget", price: "10.99" };
const <%= participantName %>ProductB: <%= participantName %>WrongProduct = { id: 2, name: "Gadget", price: "15.49" };

// Add items to the cart.
// ❌ Quantities are also strings, which will cause arithmetic errors later.
<%= participantName %>AddItemToCart(<%= participantName %>Cart, <%= participantName %>ProductA, "2");
<%= participantName %>AddItemToCart(<%= participantName %>Cart, <%= participantName %>ProductB, "3");

// Prettified output of the cart before discount.
<%= participantName %>PrintCartHeader();
<%= participantName %>PrintCartItems(<%= participantName %>Cart);
<%= participantName %>PrintCartTotals(<%= participantName %>Cart, "5");

// Update quantity for productA.
console.log('🔄 Updating quantity for product with ID 1 to "4"...');
<%= participantName %>updateItemQuantity(<%= participantName %>Cart, 1, "4");

// Prettified output of the cart after updating quantity.
<%= participantName %>PrintCartHeader();
<%= participantName %>PrintCartItems(<%= participantName %>Cart);
<%= participantName %>PrintCartTotals(<%= participantName %>Cart, "5");
