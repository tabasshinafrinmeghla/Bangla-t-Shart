import React from 'react';
import CasualShoes from './CasualShoes/CasualShoes';
import ComfortShoes from './ComfortShoes/ComfortShoes';
import Heels from './Heels/Heels';

const Shoes = ({regularUsed}) => {
  return (
    <div>
     <h2>Shoes</h2> 
     <section>
      <CasualShoes regularUsed={regularUsed} ></CasualShoes>
      <ComfortShoes></ComfortShoes>
      <Heels></Heels>
     </section>
    </div>
  );
};

export default Shoes;
// style with new design 