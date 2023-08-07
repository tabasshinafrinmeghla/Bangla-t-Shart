import React from 'react';
import Bag from '../Bag/Bag';
import MakeupItem from '../MakeupItem/MakeupItem';
import Shoes from '../Shoes/Shoes';

const NewProduct = () => {
  return (
    <div>
      <h2>new Product</h2>
      <section>
        <Bag></Bag>
        <MakeupItem></MakeupItem>
        <Shoes></Shoes>
      </section>
    </div>
  );
};

export default NewProduct;