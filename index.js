var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 item_obj[item] = Math.floor(Math.random() * 100);
 cart.push(item_obj);
 console.log(`${item} has been added to your cart.`);
 return cart;
}

function viewCart() {
  // write your code here
  message = `In your cart, you have `
  for (var i = 0; i < cart.length; i++) {
    var item_hash = cart[i]
    var item = item_hash.keys().first
    var price = item_hash[item]
    message += `${item} at ${price}, `
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
