import React from 'react';
import Footwear from './Footwear/Footwear';

const CasualShoes = ({regularUsed}) => {
  return (
    <div>
      <h3>Casual Shoes</h3>
      <Footwear regularUsed ={regularUsed} ></Footwear>
      <button>More</button>
    </div>
  );
};

export default CasualShoes;