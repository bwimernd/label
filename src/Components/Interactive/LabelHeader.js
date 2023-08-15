import React from 'react';
import './label.css';

const LabelHeader = ({ value, inputValue, handleChange, nutrient }) => (
  <>
    <h1>Nutrition Facts</h1>
    <hr />
    
    <div className="tooltip-contain">
    <h5 className='p-underline'>{nutrient.servings} servings per container</h5>
      <div className="popove">
        <p className='info-normal'>This product has <b>{nutrient.servings} servings </b> . Adjusting the 'Amount per ___ serving' to <b>{nutrient.servings}</b> will show nutrition values for consuming the entire product.</p>
     </div>
</div>

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
    <div className="tooltip-contain">
      <p className="alignRight p-bold p-underline">% Daily Value*</p>
      <div className="tooltip-content">
        <h3>% Daily Value (%DV) </h3>
        <p className='info-normal'>%DV shows <b>how much a nutrient in a serving of the food contributes to a total daily diet.</b></p>
        <p className='info-normal'>The %DV column doesn't add up vertically to 100%. Instead, the %DV is the <b>percentage of the Daily Value</b> for each nutrient in a serving of the food. The Daily Values are reference amounts (in grams, milligrams, or micrograms) of nutrients to consume or not to exceed each day.</p>
      </div>
    </div>
    <br />
    <hr />
  </>
);

export default React.memo(LabelHeader);
