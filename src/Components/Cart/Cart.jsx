// eslint-disable-next-line no-unused-vars
import React from 'react';

const Cart = ({cart}) => {
    // console.log(cart)
  return (
    
    <div>
      <h2>Order summary: {cart.length }</h2>
      {
        cart.map(tshart => 
          // console.log(tshart)
        <p key={tshart._id}>
            {tshart.name}
           <button>x</button>
      </p>,
      
        )
      }
      
    </div>
  );
};

export default Cart;