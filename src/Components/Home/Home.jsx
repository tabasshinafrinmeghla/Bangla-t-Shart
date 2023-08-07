// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Tshart from '../Tshart/Tshart';
import Cart from '../Cart/Cart';
import './Home.css';
import toast from 'react-hot-toast';

const Home = () => {
  const tshart = useLoaderData();

  const [cart, setCart] = useState([]);

  const handleAddToCart = tshart => {
    // console.log(tshart);
    const exists = cart.find(ts => ts._id === tshart._id);
    if (exists) {
      toast("you already taken this one!")
    }
    else {
      const newCart = [...cart, tshart]
      setCart(newCart);

    }


    // console.log(cart);
  }

  const handleRemoveFromCart = id => {
    // console.log(id);
    const remaining = cart.filter(ts => ts._id !== id);
    setCart(remaining);
  }


  return (
    <div className='home-container'>
      {/* <h2>This is our Products : {tshart.length}</h2>  */}
      <div className='tshart-container '>
        {
          tshart.map(tshart => <Tshart key={tshart._id}
            tshart={tshart}
            handleAddToCart={handleAddToCart}
          ></Tshart>)
        }
      </div>
      <div>
        <Cart cart={cart}
          handleRemoveFromCart={handleRemoveFromCart}
        ></Cart>
      </div>

    </div>
  );
};

export default Home;