// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
  const tshart =useLoaderData();
  return (
    <div>
      <h2>This is our Products : {tshart.length}</h2> 
    </div>
  );
};

export default Home;