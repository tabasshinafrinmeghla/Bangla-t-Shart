import React from 'react';
import Bag from '../Bag/Bag';
import MakeupItem from '../MakeupItem/MakeupItem';
import Shoes from '../Shoes/Shoes';
import "./newProduct.css"

const NewProduct = () => {
  const wedding ='collection 2023';
  const regularUsed='nEw2023';
  return (
    <div className='product'>
      <h2 className='newProduct'>new Product</h2>
      <section className='flex'>
        <Bag wedding ={wedding}></Bag>
        <MakeupItem></MakeupItem>
        <Shoes regularUsed={regularUsed} ></Shoes>
      </section>
    </div>
  );
};
export default NewProduct;