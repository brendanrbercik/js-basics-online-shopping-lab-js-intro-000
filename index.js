var cart = [];
var objTotal = {total:0};

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
    for (let i = 0; i < cart.length; i++) {
    objTotal.total = objTotal.total + cart[i].itemPrice;
  }
  return (objTotal.total);
}

function removeFromCart(item) {
  for (let i = 0; i < cart.length; i++) {
    if (item == cart[i].itemName) {
      cart.splice(i,1);
      return cart;
    }
  }
    return("That item is not in your cart.");
}

function placeOrder(cardNumber) {
  if (cardNumber !== undefined) {
    return(`Your total cost is $${total().total}, which will be charged to the card` + cardNumber +`.`)
  }
  else {
    return('Sorry, we don\'t have a credit card on file for you.');
  }
}
