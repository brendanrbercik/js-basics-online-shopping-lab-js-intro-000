var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 100 + 1);
  var itemObject = new Object({ itemName : item, itemPrice : price });
  cart = [...cart, itemObject];
  return (item + " has been added to your cart.");
}

function viewCart() {
  var cartSentence = [];

  if (cart.length === 0) {
    return ("Your shopping cart is empty.");
  }

  else if (cart.length === 1) {
    cartSentence.push(` ${cart[0].itemName} at $${cart[0].itemPrice}`);
  }

  else {
    for (let i = 0; i < cart.length-1; i++) {
      cartSentence.push(` ${cart[i].itemName} at $${cart[i].itemPrice}`);
    }
    cartSentence.push(` and ${cart[cart.length-1].itemName} at $${cart[cart.length-1].itemPrice}`);
  }

  return (`In your cart, you have${cartSentence}.`);

}

function total() {
  var total = 0;
  for (let i = 0; i < cart.length; i++) {
    total = total + cart[i].itemPrice;
  }
  return (total);
}

function removeFromCart(item) {

  for (let i = 0; i < cart.length; i++) {
    if (item == cart[i]) {
      cart = cart.splice(i,1);
    }
  }

}

function placeOrder(cardNumber) {
  // write your code here
}
