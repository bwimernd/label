import React, {useState} from 'react';
import ProductOne from '../../Data/ProductOne';
import Label from '../../Label/Label';

function ProductB() {
    
    

  
  return (
    <>
    <div>
        <h1>Product B</h1>
        <Label nutrition={ProductOne} value={1}/>
    </div>
    
    </>
  );
}

export default ProductB;