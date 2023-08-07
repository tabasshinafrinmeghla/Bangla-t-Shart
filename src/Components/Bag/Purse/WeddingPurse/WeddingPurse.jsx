import React from 'react';
import './WeddingPurse.css';

const WeddingPurse = ({wedding}) => {
  return (
    <div >
      <h5>Wedding Purse</h5>
      <p><small>New:{wedding}</small></p>
    </div>
  );
};

export default WeddingPurse;