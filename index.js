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
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.");
  } else {
    var message = `In your cart, you have `;

    if (cart.length === 1) {

    } else if(cart.length === 2) {

    } else {

    }

    console.log(message);
  }
}

    for (var i = 0; i < cart.length; i++) {
      var item_hash = cart[i];
      var item = Object.keys(item_hash).first;
      var price = item_hash[item];
      //`and ${item} at $${price}.`;

    }
    console.log(message)
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
