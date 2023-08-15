import React from 'react';
import Cereal from '../../Data/Cereal';
import Label from '../../Label/Label';

function ProductC() {
    
  

  return (
    <>
    <div className='interactive-container'>
    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSf-hzG2vmEpHDMadC5wMnyr8DW-nomsSBVvOj7_BxElFmmlag/viewform?embedded=true" title="Google Form for Static Product C" width="640" height="640" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
        <Label nutrition={Cereal} title="Cereal" value={1}/>
    </div>
    
    </>
  );
}

export default ProductC;