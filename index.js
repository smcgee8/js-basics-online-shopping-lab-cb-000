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
    for (var i = 0; i < cart.length; i++) {
      var item_hash = cart[i];
      var item = Object.keys(item_hash).first;
      var price = item_hash[item];

      
    }
    console.log(message)
  }
}
      
      if (i === (cart.length - 1)) {
        if (cart.length === 2) {
          message += `and ${item} at $${price}.`;
        } else {
          message += `and ${item} at $${price}.`;
        }
      } else {
        if (cart.length === 2) {
          message += `${item} at $${price} `;
        } else {
          message += `${item} at $${price} `;
        }
      }
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
