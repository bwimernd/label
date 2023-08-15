import React from 'react';
import Cake from '../../Data/Cake';
import Label from '../../Label/Label';

function ProductA() {
   
  

  
  return (
    <>
    <div className='interactive-container'>
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScPa6fhQt0dk0FcY9LGEy0uTGMDMvdYpmBZ4JgssDUMJR-icQ/viewform?embedded=true" title="Google Form for Static Product A" width="640" height="640" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
        <Label nutrition={Cake} title="Cake" value={1}/>
    </div>
    
    </>
  );
}

export default ProductA;