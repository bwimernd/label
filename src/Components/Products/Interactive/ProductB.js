import React from 'react';
import Milk from '../../Data/Milk';
import Interactive from '../../Interactive/Interactive.js';
import NutrientLegend from '../../Interactive/Legend/NutrientLegend.js';

function ProductB() {
    
  return (
    <div>
    
    <div className='interactive-container'>
    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfQil2Zb-Jm89DT0d-b_06kRjfwcavqz4KSp22yM2hHQyo5Dw/viewform?embedded=true" title="Google Form for Interactive Product B" width="640" height="640" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
        <Interactive nutrition={Milk} title="Milk" value={1} />
        <NutrientLegend />
    </div>
    </div>
  );
}

export default ProductB;