// eslint-disable-next-line no-unused-vars
import React from 'react';

const Cart = ({cart}) => {
 console.log(cart)
//  cosnt{name}=cart
  
  return (
    
    <div>
      <h2>Order summary: {cart.length }</h2>
      {
        // cart.map(tshart => <p key={tshart._id}
        // >Name:{tshart.name}
        // {/* <button>X</button> */}
        // </p>)
        cart.map(tshart => <p key={tshart._id}>
           {
            tshart.name
           }
        </p>

        )



      }
      
    </div>
  );
};

export default Cart;