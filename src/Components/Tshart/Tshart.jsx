// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Tshart.css'

const Tshart = ({tshart ,handleAddToCart}) => {
  const {picture,name,price } = tshart;
  return (
    <div className='t-shirt'>
      <img src={picture} alt="" />
      <h4>Name : {name}</h4>
      <p>${price}price</p>
      {/* <button onClick={handleAddToCart}>Buy Now</button> */}
      <button onClick={()=> handleAddToCart(tshart)} className="btn btn-primary">Buy Now</button>
    </div>
  );
};

export default Tshart;