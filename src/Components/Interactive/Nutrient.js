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



const Nutrient = ({ className, name, value, unit, percentage, hrClass, popoverContent, inputValue, dvContent, dv}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [dvHovered, setDVHovered] = useState(false)
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

