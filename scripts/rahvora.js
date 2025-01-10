import {cart,addtocart} from '../data/cart.js';
import {products} from '../data/product.js';



//printing items on home page
let menuElement = document.querySelector('.menu');
let menuHTML = menuElement.innerHTML;
products.forEach((item) => {
  menuHTML += `<div class="product-container">
    <div class="prodimg">
      <img src ="images/${item.image}" alt="prod img">
    </div>
    <div class = 'prodinfo'>
      <h3>${item.pname}</h3>
      <h4><i class="fa-solid fa-indian-rupee-sign"></i>${item.price}</h4>
      
      <select class='quantity-selector' data-testid="quantity-selector">
            <option selected="" value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        <p style="padding: 5px 0 ;color:green;"><i style="background-color:green;color:white;border-radius:50%;" class="fa-solid fa-check"></i>    Added</p>
      <button data-price = "${item.price}" data-productId = "${item.id}" id = "cartbtn" >Add to Cart</button>
    </div>
  </div>`

  });
menuElement.innerHTML = menuHTML;



// updating cart quantity
export function updatecartquantity() {

  let cartQuantity = 0;  
  let cartelement = document.querySelector('.cart-quantity');
  let cartHTML = cartelement.innerHTML;
  
  cart.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;

  });
  cartHTML = `<span id = 'bom'>${cartQuantity}</span> Cart`; 
  cartelement.innerHTML = cartHTML;  
}



//added anim


//button working

document.querySelectorAll('#cartbtn').forEach((button) => {
  button.addEventListener('click', (event) => {
    const productId =button.dataset.productId;
    addtocart(productId);
    updatecartquantity();
    
  });
});


