export const cart=[
    {productId:'rv99999',
        quantity:7
    },
    {productId:'rv99996',
        quantity:1
    },
    {productId:'rv99997',
        quantity:2
    },
    {productId:'rv99992',
        quantity:1
    }
];

// items adding to cart

export function addtocart(productId) {
  
    let matchingitem;
    cart.forEach((cartItem) => {
        if (productId === cartItem.productId){
        matchingitem = cartItem;
        }
    });
    if (matchingitem) {
        matchingitem.quantity += 1;

    }
    else{
        cart.push(
        {productId:productId,
            quantity:1
    });
    }
    console.log(cart);

    }
    

  
  
  
  