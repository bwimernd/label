import React, {useState} from 'react';
import ProductOne from '../../Data/ProductOne';
import Label from '../../Label/Label';

function ProductC() {
    
  

  return (
    <>
    <div>
        <h1>Product C</h1>
        <Label nutrition={ProductOne} value={1}/>
    </div>
    
    </>
  );
}

export default ProductC;