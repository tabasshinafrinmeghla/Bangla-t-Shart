// eslint-disable-next-line no-unused-vars
import React from 'react';

const Cart = ({cart,handleRemoveFromCart}) => {
    // console.log(cart)
  return (
    
    <div>
      <h2>Order summary: {cart.length }</h2>
      {
        cart.map(tshart => 
          // console.log(tshart)
        <p key={tshart._id}>
            {tshart.name}
           <button onClick={() =>handleRemoveFromCart(tshart._id)}>Remove</button>
      </p>,
      
        )
      }
      
    </div>
  );
};

export default Cart;

