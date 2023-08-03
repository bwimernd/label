import React, { useState } from 'react';
import Popover from '../Interactive/Interactions/Popover';
import DailyValuePopover from './Interactions/DailyValuePopover';
import './label.css';

// Function to return CSS class name based on nutrient's name
function getClassName(nutrientName) {
  const nutrientsToBold = ['Total Fat', 'Cholesterol', 'Sodium', 'Total Carbohydrate', 'Protein'];

  return nutrientsToBold.includes(nutrientName) ? 'p-bold' : 'p-normal';
}

function getIndentClass(nutrientName) {
  const nutrientsToIndent = ['Saturated Fat', 'Trans Fat', 'Dietary Fiber', 'Total Sugars'];
  const nutrientsToIndentMore = ['Includes Added Sugars'];

  if (nutrientsToIndent.includes(nutrientName)) {
    return 'tab';
  } else if (nutrientsToIndentMore.includes(nutrientName)) {
    return 'tab2';
  } else {
    return 'no-tab';
  }
}

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





const Nutrient = ({ className, name, value, unit, percentage, hrClass, popoverContent, inputValue, dvContent, dv}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [dvHovered, setDVHovered] = useState(false);

  const color = getColor(name, dv);


  return (
    <div className="tooltip-container" 
         
    >
      <p className={`${className} ${getClassName(name)}  ${getIndentClass(name)}`} onMouseEnter={() => setIsHovered(true)} 
         onMouseLeave={() => setIsHovered(false)}>
        {name} <span className='p-normal'>{value}{unit}</span>
        
        {isHovered && <Popover title={name} content={popoverContent} />}
      </p>
      
      {(percentage !== null && percentage !== undefined) &&
        <p className='p-bold alignRight' onMouseEnter={() => setDVHovered(true)} 
        onMouseLeave={() => setDVHovered(false)}>
         {color && <span className="color-encode" style={{display: 'inline-block', width: '12.5px', height: '12.5px', borderRadius: color.borderRadius, backgroundColor: color.backgroundColor, border: `1px solid ${color.borderColor}`, marginRight: '5px'}}></span>}
          {percentage}%
          {dvHovered && <DailyValuePopover title={name} content={dvContent} inputValue={inputValue} percentage={percentage} dv={dv} />}
         </p>
      }
      <br />
      <hr className={hrClass} />
      </div>
  );
};

export default React.memo(Nutrient);

