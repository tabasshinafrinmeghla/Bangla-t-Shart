// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Tshart from '../Tshart/Tshart';
import Cart from '../Cart/Cart';
import './Home.css';

const Home = () => {
  const tshart =useLoaderData();
  return (
    <div className='home-container'>
      {/* <h2>This is our Products : {tshart.length}</h2>  */}
      <div className='tshart-container '>
      {
        tshart.map(tshart => <Tshart key={tshart._id}
          tshart={tshart}>
        </Tshart>)
      }
      </div>
      <div>
        <Cart></Cart>
      </div>

    </div>
  );
};

export default Home;