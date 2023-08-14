import React from 'react';
import './Popover.css'; // Import the CSS

function getIntensityText(percentage) {
  if (percentage >= 20) {
    return "high";
  } else if (percentage > 5) {
    return "medium";
  } else {
    return "low";
  }
}

function getColor(nutrientName, percentage) {
  const redNutrients = ['Sodium', 'Saturated Fat', 'Includes Added Sugars'];
  const greenNutrients = ['Dietary Fiber', 'Vitamin D', 'Calcium', 'Potassium','Iron'];
  const percentageIntensity = getIntensityText(percentage);

  if (redNutrients.includes(nutrientName)) {
    return {
      text: <p className='info-normal'>{nutrientName} is a nutrient to get <b>less</b> of and this product has a <b>{percentageIntensity}</b> amount in 1 serving.</p>,
      backgroundColor: percentage >= 20 ? '#e6550d' : percentage > 5 ? '#fdae6b' : '#fee6ce',
      borderColor: percentage >= 20 ? '#a50f15' : percentage > 5 ? '#fd8d3c' : '#fdcdac',
    };
  } else if (greenNutrients.includes(nutrientName)) {
    return {
      text: <p className='info-normal'>{nutrientName} is a nutrient to get <b>more</b> of and this product has a <b>{percentageIntensity}</b> amount in 1 serving.</p>,
      backgroundColor: percentage >= 20 ? '#31a354' : percentage > 5 ? '#a1d99b' : '#e5f5e0',
      borderColor: percentage >= 20 ? '#006d2c' : percentage > 5 ? '#66c2a4' : '#ccece6',
    };
  } else {
    return {
      text: <p className='info-normal'>{nutrientName} has a <b>{percentageIntensity}</b> amount in 1 serving.</p>,

    };
  }
}



function nutrientMessage(input,percent,name) {
  let nutrientMessage = '';
  if (percent > 100) {
    nutrientMessage = `If you ate ${input} amount of servings, you would have exceeded your recommended Daily Value for ${name}.`;
  } else if (input === 1) {
    nutrientMessage = `Consuming ${input} serving of this product, you would have achieved eating ${percent}% of your recommended Daily Value ${name}.`;
  } else {
    nutrientMessage = `Consuming ${input} servings of this product, you would have achieved eating ${percent}% of your recommended Daily Value for ${name}.`;
  }  
  return nutrientMessage;
}

const DailyValuePopover = ({title, inputValue, percentage,dv }) => {
  const color = getColor(title, dv);
  return(
  <div className="dv-popover">
    <h3>{title}</h3>
    <div style={{backgroundColor: color.backgroundColor, border: `1px solid ${color.borderColor} `}}> {color.text}</div>
    <p className='info-normal'>{nutrientMessage(inputValue,percentage,title)}</p>
  </div>
)};

export default DailyValuePopover;

