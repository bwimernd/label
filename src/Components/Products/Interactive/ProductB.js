import React from 'react';
import Milk from '../../Data/Milk';
import Interactive from '../../Interactive/Interactive.js';
import NutrientLegend from '../../Interactive/Legend/NutrientLegend.js';

function ProductB() {
    
  return (
    <div>
    
    <div className='interactive-container'>
       
        <Interactive nutrition={Milk} title="Milk" value={1} />
        <NutrientLegend />
    </div>
    </div>
  );
}

export default ProductB;