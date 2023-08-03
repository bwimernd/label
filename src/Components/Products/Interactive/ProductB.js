import React, {useState} from 'react';
import ProductOne from '../../Data/ProductOne';
import Interactive from '../../Interactive/Interactive.js';
import NutrientLegend from '../../Interactive/Legend/NutrientLegend.js';

function ProductB() {
    
  return (
    <div>
    <h1>Product B</h1>
    <div className='interactive-container'>
       
        <Interactive nutrition={ProductOne} value={1} />
        <NutrientLegend />
    </div>
    </div>
  );
}

export default ProductB;