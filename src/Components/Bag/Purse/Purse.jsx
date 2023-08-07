import React from 'react';
import WeddingPurse from './WeddingPurse/WeddingPurse';

const Purse = ({wedding}) => {
  return (
    <div>
      <h3>Purse 2023</h3>
      <WeddingPurse wedding={wedding}></WeddingPurse>
      <button>More</button>
    </div>
  );
};

export default Purse;

// new collection 2023