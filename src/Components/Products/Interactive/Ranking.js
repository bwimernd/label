import React from 'react';
import Chips1 from '../../Data/Chips1';
import Chips2 from '../../Data/Chips2';
import Chips3 from '../../Data/Chips3';
import Interactive from '../../Interactive/Interactive.js';
import NutrientLegend from '../../Interactive/Legend/NutrientLegend.js';

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function Ranking() {
    const components = [
        <Interactive nutrition={Chips1} title="Chips" value={1} />,
        <Interactive nutrition={Chips2} title="Chips" value={1} />,
        <Interactive nutrition={Chips3} title="Chips" value={1} />
    ];

    const shuffledComponents = shuffleArray(components);

    return (
      <>
        <div className='interactive-container'>
          <div className='interactive-wrapper'>
            {shuffledComponents}
          </div>
          <div className="nutrient-legend-wrapper">
            <NutrientLegend />
          </div>
        </div>
      </>
    );
}

export default Ranking;
