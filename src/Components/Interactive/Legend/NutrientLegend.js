import React from 'react';
import './legend.css';

function getColor(nutrientName, percentage) {
  const redNutrients = ['Sodium', 'Saturated Fat', 'Includes Added Sugars'];
  const greenNutrients = ['Dietary Fiber', 'Vitamin D', 'Calcium', 'Potassium'];
  
  if (redNutrients.includes(nutrientName)) {
    return {
      backgroundColor: percentage >= 20 ? '#e6550d' : percentage > 5 ? '#fdae6b' : '#fee6ce',
      borderColor: percentage >= 20 ? '#a50f15' : percentage > 5 ? '#fd8d3c' : '#fdcdac',
    };
  } else if (greenNutrients.includes(nutrientName)) {
    return {
      backgroundColor: percentage >= 20 ? '#31a354' : percentage > 5 ? '#a1d99b' : '#e5f5e0',
      borderColor: percentage >= 20 ? '#006d2c' : percentage > 5 ? '#66c2a4' : '#ccece6',
      borderRadius: '10px'
    };
  } else {
    return null;
  }
}

const NutrientLegend = () => {
  const lowPercentage = 3;
  const mediumPercentage = 10;
  const highPercentage = 25;
  
  const lowRedColor = getColor('Sodium', lowPercentage);
  const mediumRedColor = getColor('Sodium', mediumPercentage);
  const highRedColor = getColor('Sodium', highPercentage);

  const lowGreenColor = getColor('Dietary Fiber', lowPercentage);
  const mediumGreenColor = getColor('Dietary Fiber', mediumPercentage);
  const highGreenColor = getColor('Dietary Fiber', highPercentage);

  return (
    <div className="legend-container">
      <h1>Per 1 serving</h1>
      <h2>Nutrients To Get Less Of </h2>
      <div className="legend-items">
        <div className="legend-item">
          <span className="color-encode" style={{backgroundColor: lowRedColor.backgroundColor, borderColor: lowRedColor.borderColor}}></span>
          <p>Low (&le; 5% DV)</p>
        </div>
        <div className="legend-item">
          <span className="color-encode" style={{backgroundColor: mediumRedColor.backgroundColor, borderColor: mediumRedColor.borderColor}}></span>
          <p>Medium (6-19% DV)</p>
        </div>
        <div className="legend-item">
          <span className="color-encode" style={{backgroundColor: highRedColor.backgroundColor, borderColor: highRedColor.borderColor}}></span>
          <p>High (&ge; 20% DV)</p>
        </div>
      </div>

      <h2>Nutrients To Get More Of</h2>
      <div className="legend-items">
        <div className="legend-item">
          <span className="color-encode" style={{backgroundColor: lowGreenColor.backgroundColor, borderRadius: lowGreenColor.borderRadius,borderColor: lowGreenColor.borderColor}}></span>
          <p>Low (&le; 5% DV)</p>
        </div>
        <div className="legend-item">
          <span className="color-encode" style={{backgroundColor: mediumGreenColor.backgroundColor, borderRadius: mediumGreenColor.borderRadius, borderColor: mediumGreenColor.borderColor}}></span>
          <p>Medium (6-19% DV)</p>
        
        </div>
        <div className="legend-item">
          <span className="color-encode" style={{backgroundColor: highGreenColor.backgroundColor, borderRadius: highGreenColor.borderRadius,borderColor: highGreenColor.borderColor}}></span>
          <p>High (&ge; 20% DV)</p>
        </div>
      </div>
    </div>
  );
};

export default React.memo(NutrientLegend);
