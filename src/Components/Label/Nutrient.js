import React from 'react';
import './label.css';

const Nutrient = ({ className, name, value, unit, percentage, hrClass }) => (
  <>
    <p className={className}><b>{name}</b> {value}{unit}</p>
    {(percentage !== null && percentage !== undefined) &&
      <p className='p-bold alignRight'>
        {percentage}%
      </p>
    }
    <br /><hr className={hrClass}/>
  </>
);

export default React.memo(Nutrient);
