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
 var item_obj = {[item]: Math.floor(Math.random() * 100)};
 cart.push(item_obj);
 console.log(`${item} has been added to your cart.`);
 return cart;
}

function viewCart() {
  // write your code here
  var message, item_hash, item, price;
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.");
  } else {
    message = `In your cart, you have `;

    if (cart.length === 1) {
      item_hash = cart[0];
      item = Object.keys(item_hash)[0];
      price = item_hash[item];
      message += `${item} at $${price}.`;
    } else if(cart.length === 2) {
      debugger;
      item_hash = cart[0];
      item = Object.keys(item_hash)[0];
      price = item_hash[item];
      message += `${item} at $${price}`;
      item_hash = cart[1];
      item = Object.keys(item_hash)[0];
      price = item_hash[item];
      message += ` and ${item} at $${price}.`;
    } else {
      //for (var i = 0; i < cart.length; i++) {
    }

    console.log(message);
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
