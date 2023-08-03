import React from 'react';
import './label.css';

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

const Nutrient = ({ className, name, value, unit, percentage, hrClass }) => (
  <>
    <p className={`${className} ${getClassName(name)}  ${getIndentClass(name)}`}> {name} <span className='p-normal'>{value}{unit}</span></p>
    {(percentage !== null && percentage !== undefined) &&
      <p className='p-bold alignRight'>
        {percentage}%
      </p>
    }
    <br /><hr className={hrClass}/>
  </>
);

export default React.memo(Nutrient);
