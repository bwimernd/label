import React from 'react';
import MacCheese from '../../Data/MacCheese';
import Interactive from '../../Interactive/Interactive.js';
import NutrientLegend from '../../Interactive/Legend/NutrientLegend.js';

function Usability() {
   

  
  return (
    <>
    <div>
    <div className='interactive-container'>
        <Interactive nutrition={MacCheese} title="Mac & Cheese" value={1} />
        <NutrientLegend />
    </div>
    </div>
    </>
  );
}

export default Usability;