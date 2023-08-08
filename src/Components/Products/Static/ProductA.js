import React from 'react';
import ProductOne from '../../Data/ProductOne';
import Label from '../../Label/Label';

function ProductA() {
   
  

  
  return (
    <>
    <div>
        <h1>Product A</h1>
        <Label nutrition={ProductOne} value={1}/>
    </div>
    
    </>
  );
}

export default ProductA;