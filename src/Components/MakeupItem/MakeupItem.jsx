import React from 'react';
import Lipstick from './lipstick/lipstick';
import MakeupBrush from './MakeUpbrushSet/MakeupBrush';
import Shadowpalette from './Shadowpalette/Shadowpalette';

const MakeupItem = () => {
  return (
    <div>
      <h2>Make up Item </h2>
         <section>
          <Lipstick></Lipstick>
          <MakeupBrush></MakeupBrush>
          <Shadowpalette></Shadowpalette>
          </section>   
    </div>
  );
};

export default MakeupItem;

// Here you can see brand new make Up Item