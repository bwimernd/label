import React, { useState } from 'react';
import Popover from '../Interactive/Interactions/Popover';
import DailyValuePopover from './Interactions/DailyValuePopover';
import './label.css';

const Nutrient = ({ className, name, value, unit, percentage, hrClass, popoverContent, inputValue, dvContent, dv}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [dvHovered, setDVHovered] = useState(false)
  return (
    <div className="tooltip-container" 
         
    >
      <p className={className} onMouseEnter={() => setIsHovered(true)} 
         onMouseLeave={() => setIsHovered(false)}>
        <b>{name}</b> {value}{unit}
        
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

