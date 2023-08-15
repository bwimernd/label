import React from 'react';
import Cake from '../../Data/Cake';
import Interactive from '../../Interactive/Interactive.js';
import NutrientLegend from '../../Interactive/Legend/NutrientLegend.js';

function ProductA() {
   

  
  return (
    <>
    <div>
    
    <div className='interactive-container'>
    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScPa6fhQt0dk0FcY9LGEy0uTGMDMvdYpmBZ4JgssDUMJR-icQ/viewform?embedded=true" title="Google Form for Interactive Product A" width="640" height="640" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
        <Interactive nutrition={Cake} title="Cake" value={1} />
        <NutrientLegend />
    </div>
    </div>
    </>
  );
}

export default ProductA;