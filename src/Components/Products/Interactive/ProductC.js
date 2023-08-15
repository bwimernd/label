import React from 'react';
import Cereal from '../../Data/Cereal';
import Interactive from '../../Interactive/Interactive.js';
import NutrientLegend from '../../Interactive/Legend/NutrientLegend.js';

function ProductC() {

  return (
    <div>
    
    <div className='interactive-container'>
    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSf-hzG2vmEpHDMadC5wMnyr8DW-nomsSBVvOj7_BxElFmmlag/viewform?embedded=true" title="Google Form for Interactive Product C" width="640" height="640" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
        <Interactive nutrition={Cereal} title="Cereal" value={1} />
        <NutrientLegend />
    </div>
    </div>
  );
}

export default ProductC;