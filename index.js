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
      item_hash = cart[0];
      item = Object.keys(item_hash)[0];
      price = item_hash[item];
      message += `${item} at $${price}`;
      item_hash = cart[1];
      item = Object.keys(item_hash)[0];
      price = item_hash[item];
      message += ` and ${item} at $${price}.`;
    } else {
      item_hash = cart[0];
      item = Object.keys(item_hash)[0];
      price = item_hash[item];
      message += `${item} at $${price}`;
      for (var i = 1; i < cart.length - 1; i++) {
        item_hash = cart[i];
        item = Object.keys(item_hash)[0];
        price = item_hash[item];
        message += `, ${item} at $${price}`;
      }
      item_hash = cart[cart.length - 1];
      item = Object.keys(item_hash)[0];
      price = item_hash[item];
      message += `, and ${item} at $${price}.`;
    }
    console.log(message);
  }
}

function total() {
  // write your code here
  var total = 0;
  for (var i = 0; i < cart.length; i++) {
    var item = Object.keys(cart[i])[0];
    total += cart[i][item];
  }
  return total;
}

function removeFromCart(item) {
  // write your code here
  for (var i = 0; i < cart.length; i++) {
    var hash_item = Object.keys(cart[i])[0];
    if (hash_item === item) {
      cart.splice(i, 1);
    }
  }
  return cart
}

function placeOrder(cardNumber) {
  // write your code here
}
