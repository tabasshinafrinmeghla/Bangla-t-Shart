// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Tshart.css'

const Tshart = ({tshart}) => {
  const {picture,name,price } = tshart;
  return (
    <div className='t-shirt'>
      <img src={picture} alt="" />
      
    </div>
  );
};

export default Tshart;