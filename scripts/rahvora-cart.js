import { cart, addtocart } from '../data/cart.js';
import { products } from '../data/product.js';

// Display a single product in the cart
function cartdisplay(product,cartItem) {
  const cartElement = document.querySelector('.item-detail');
  if (!cartElement) {
    console.error("Cart container '.item-detail' not found.");
    return;
  }

}

// Fetch and display matching products
function renderCart() {
  const cartElement = document.querySelector('.item-detail');
  if (!cartElement) {
    console.error("Cart container '.item-detail' not found.");
    return;
  }

  cartElement.innerHTML = ''; // Clear existing content

  // Iterate over the cart and find matching products
  cart.forEach(cartItem => {
    const product = products.find(product => product.id === cartItem.productId);
    if (product) {
      console.log(product);
      cartdisplay(product,cartItem);

    } else {
      console.warn(`Product with ID ${cartItem.productId} not found.`);
    }
  });
}

// Call the function to render the cart
renderCart();
