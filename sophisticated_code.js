/*
filename: sophisticated_code.js
content: This code handles a complex online shopping cart system with various features such as adding/removing items, applying discounts, calculating total price, and processing payment.
*/

// Global variables
let cart = [];
let discountCode = "";
const TAX_RATE = 0.08;
const SHIPPING_FEE = 10.0;

// Function to add item to the cart
function addItem(name, price, quantity) {
  let item = {
    name: name,
    price: price,
    quantity: quantity
  };
  cart.push(item);
}

// Function to remove item from the cart
function removeItem(name) {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].name === name) {
      cart.splice(i, 1);
      break;
    }
  }
}

// Function to apply a discount code
function applyDiscount(code) {
  discountCode = code;
}

// Function to calculate the total price of the cart (without tax and shipping)
function calculateTotalPrice() {
  let totalPrice = 0;
  for (let i = 0; i < cart.length; i++) {
    totalPrice += cart[i].price * cart[i].quantity;
  }
  return totalPrice;
}

// Function to calculate tax amount
function calculateTax() {
  return calculateTotalPrice() * TAX_RATE;
}

// Function to calculate total price with tax and shipping
function calculateGrandTotal() {
  let grandTotal = calculateTotalPrice() + calculateTax() + SHIPPING_FEE;
  if (discountCode === "SUMMER20") {
    grandTotal *= 0.80; // 20% discount for summer promotion
  }
  return grandTotal;
}

// Function to simulate payment processing
function processPayment(paymentMethod) {
  // Payment processing logic here
  console.log(`Payment of $${calculateGrandTotal().toFixed(2)} successfully processed via ${paymentMethod}`);
}

// Main execution
addItem("Shirt", 20.0, 2);
addItem("Pants", 30.0, 1);
addItem("Shoes", 50.0, 2);
applyDiscount("SUMMER20");
console.log("Cart:", cart);
console.log("Total Price (before tax and shipping):", calculateTotalPrice().toFixed(2));
console.log("Tax:", calculateTax().toFixed(2));
console.log("Shipping Fee:", SHIPPING_FEE.toFixed(2));
console.log("Grand Total:", calculateGrandTotal().toFixed(2));
processPayment("Credit Card");