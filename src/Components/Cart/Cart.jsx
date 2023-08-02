// eslint-disable-next-line no-unused-vars
import React from 'react';

const Cart = ({cart}) => {
  return (
    <div>
      <h2>Order summary: {cart.length }</h2>
      {
        // cart.map(tshart => <p key={tshart._id}>{tshart.name} </p> )

        cart.map(tshart => <h6 key={tshart._id}
        >{tshart.name}
        <button>X</button>
        </h6>)


      }
      
    </div>
  );
};

export default Cart;