import React from 'react';
import Cereal from '../../Data/Cereal';
import Label from '../../Label/Label';

function ProductC() {
    
  

  return (
    <>
    <div>
        
        <Label nutrition={Cereal} title="Cereal" value={1}/>
    </div>
    
    </>
  );
}

export default ProductC;