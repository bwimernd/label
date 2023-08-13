import React from 'react';
import './label.css';

const LabelHeader = ({ value, inputValue, handleChange, nutrient }) => (
  <>
    <h1>Nutrition Facts</h1>
    <hr />
    <h5>{nutrient.servings} servings per container</h5>
    <h3 className='alignLeft'> Serving size </h3> 
    <h3 className='alignRight'>
      {nutrient.serving_size}
    </h3>
    <br />
    <hr className='new1'/>
    <p className='p-bold'>
      Amount per 
      <input type="number" id="myInput" min={1} value={inputValue} onChange={handleChange}  style={{width: '40px'}}/>  
      serving{inputValue > 1 ? 's' : ''}
    </p>
    <h2 className='alignLeft'>Calories</h2>
    <h2 className='alignRight'>{inputValue*nutrient.calories}</h2> 
    <br /><br />
    <hr className='new2'/>
    <div className="tooltip-container">
      <p className="alignRight p-bold">% Daily Value*</p>
    </div>
    <br />
    <hr />
  </>
);

export default React.memo(LabelHeader);
