import React from 'react';

import Chips2 from '../../Data/Chips2';
import Chips3 from '../../Data/Chips3';
import Label from '../../Label/Label';



function Ranking() {
    const components = [
        <Label nutrition={Chips2} title="Chips A" value={1} />,
        <Label nutrition={Chips3} title="Chips B" value={1} />
    ];

    

    return (
      <>
        <div className='interactive-container'>
          <div className='interactive-wrapper'>
            {components}
          </div>
        </div>
      </>
    );
}

export default Ranking;
