import React from 'react';
import Cereal from '../../Data/Cereal';
import Interactive from '../../Interactive/Interactive.js';
import NutrientLegend from '../../Interactive/Legend/NutrientLegend.js';

function ProductC() {

  return (
    <div>
    
    <div className='interactive-container'>
       
        <Interactive nutrition={Cereal} title="Cereal" value={1} />
        <NutrientLegend />
    </div>
    </div>
  );
}

export default ProductC;