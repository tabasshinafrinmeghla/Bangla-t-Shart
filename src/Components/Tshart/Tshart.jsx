// eslint-disable-next-line no-unused-vars
import React from 'react';

const Tshart = ({tshart}) => {
  const {picture,name,price } = tshart;
  return (
    <div>
      <img src={picture} alt="" />
      
    </div>
  );
};

export default Tshart;