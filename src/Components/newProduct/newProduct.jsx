import React from 'react';
import Bag from '../Bag/Bag';
import MakeupItem from '../MakeupItem/MakeupItem';
import Shoes from '../Shoes/Shoes';
import "./newProduct.css"

const NewProduct = () => {
  const wedding = 'collection 2023';
  const weddingContext = createContext('Wedding purse')



  const regularUsed = 'nEw2023';
  return (
    <div className='product'>
      <h2 className='newProduct'>new Product</h2>
      <weddingContext.provider value='New 2023 Wedding purse'>
        <section className='box'>
          <Bag wedding={wedding}></Bag>
          <MakeupItem></MakeupItem>
          <Shoes regularUsed={regularUsed} ></Shoes>
        </section>
      </weddingContext.provider>
    </div>
  );
};
export default NewProduct;




/*
1. 1st step create a context
2.Create a provider and pass a value 
3.Use useContext to receive the value






*/




