import React, {useState} from 'react';
import ProductOne from '../../Data/ProductOne';
import Interactive from '../../Interactive/Interactive.js';
import NutrientLegend from '../../Interactive/Legend/NutrientLegend.js';

function ProductA() {
   

  
  return (
    <>
    <div>
    <h1>Product A</h1>
    <div className='interactive-container'>
    
        <Interactive nutrition={ProductOne} value={1} />
        <NutrientLegend />
    </div>
    </div>
    </>
  );
}

export default ProductA;