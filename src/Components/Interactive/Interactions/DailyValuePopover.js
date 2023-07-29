import React from 'react';
import './Popover.css'; // Import the CSS

function nutrientAmount(percentage) {
  let nutrientAmountMessage = '';

  if (percentage >= 20) {
    nutrientAmountMessage = 'This is a high amount of nutrient.';
  } else if (percentage <= 5) {
    nutrientAmountMessage = 'This is a low amount of nutrient.';
  }

  return nutrientAmountMessage;
}

function nutrientMessage(input,percent) {
  let nutrientMessage = '';
  if (percent > 100) {
    nutrientMessage = `If you ate ${input} amount of servings, you would exceed your Daily Value for this nutrient.`;
  } else {
    nutrientMessage = `Consuming ${input} amount of servings, you would have achieved eating ${percent}% of your Daily Value`;
  }
  return nutrientMessage;
}

const DailyValuePopover = ({title, content, inputValue, percentage,dv }) => (
  <div className="dv-popover">
    <h3>{title}</h3>
    {content}
    <p className='info-normal'>{nutrientAmount(dv)}</p>
    <p>{nutrientMessage(inputValue,percentage)}</p>
  </div>
);

export default DailyValuePopover;

