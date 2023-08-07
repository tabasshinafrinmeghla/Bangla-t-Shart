import React from 'react';
import Bag from '../Bag/Bag';
import MakeupItem from '../MakeupItem/MakeupItem';
import Shoes from '../Shoes/Shoes';
import "./newProduct.css"

const NewProduct = () => {
  return (
    <div className='product'>
      <h2 className='newProduct'>new Product</h2>
      <section className='flex'>
        <Bag></Bag>
        <MakeupItem></MakeupItem>
        <Shoes></Shoes>
      </section>
    </div>
  );
};

export default NewProduct;