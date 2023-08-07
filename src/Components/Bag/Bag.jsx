import React from 'react';
import Womensbag from './Womensbag.jsx/Womensbag';
import MenSbag from './MenSbag/MenSbag';
import Purse from './Purse/Purse';
import './bag.css';

const Bag = () => {
  return (
    <div>
      <h2>Bag's</h2>
      <section >
        <Womensbag></Womensbag>
        <MenSbag></MenSbag>
        <Purse></Purse>
      </section>
    </div>
  );
};

export default Bag;