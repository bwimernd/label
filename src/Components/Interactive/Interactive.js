import React, { useState, useRef, useEffect } from 'react';
import './label.css';
import Nutrient from './Nutrient'; // make sure the path is correct
import LabelHeader from './LabelHeader';

const Interactive = ({nutrition, value}) => {
  const [inputValue, setInputValue] = useState('1');
  const handleChange = event => setInputValue(event.target.value);
  
  return (
    <div className='all'>
      {nutrition.map(nutrient => (
        <article key={nutrient.id} className='label'>
          <div>
            <LabelHeader value={value} inputValue={inputValue} handleChange={handleChange} nutrient={nutrient}/>
            <Nutrient className="alignLeft" name="Total Fat" value={inputValue * nutrient.tfat} unit="g" percentage={inputValue * nutrient.tfatdv} popoverContent="The Dietary Guidelines for Americans recommend keeping the intake of dietary cholesterol as low as possible while maintaining a healthy diet"/>
            <Nutrient className="alignLeft" name="Saturated Fat" value={inputValue * nutrient.satfat} unit="g" percentage={inputValue * nutrient.satfat_dv} popoverContent="Saturated fat is a nutrient to get less of. Diets higher in saturated fat are associated with an increased risk of developing cardiovascular disease."/>
            <Nutrient className="alignLeft" name="Trans Fat" value={inputValue * nutrient.trans} unit="g" />
            <Nutrient className="alignLeft" name="Cholesterol" value={inputValue * nutrient.cholesterol} unit="mg" percentage={inputValue * nutrient.cholesterol_dv} popoverContent="The Dietary Guidelines for Americans recommend keeping the intake of dietary cholesterol as low as possible while maintaining a healthy diet."/>
            <Nutrient className="alignLeft" name="Sodium" value={inputValue * nutrient.sodium} unit="mg" percentage={inputValue * nutrient.sodium_dv} popoverContent="Sodium is a nutrient to get less of. Diets higher in sodium are associated with an increased risk of developing high blood pressure, which can raise the risk of heart attacks, heart failure, stroke, kidney disease, and blindness."/>
            <Nutrient className="alignLeft" name="Total Carbohydrate" value={inputValue * nutrient.tcarb} unit="g" percentage={inputValue * nutrient.tcarb_dv}/>
            <Nutrient className="alignLeft" name="Dietary Fiber" value={inputValue * nutrient.dfiber} unit="g" percentage={inputValue * nutrient.dfiber_dv} popoverContent="Dietary fiber is a nutrient to get more of. Diets higher in dietary fiber can increase the frequency of bowel movements and can reduce the risk of developing cardiovascular disease."/>
            <Nutrient className="alignLeft" name="Total Sugars" value={inputValue * nutrient.tsugar} unit="g" />
            <Nutrient className="alignLeft" name="Includes Added Sugars" value={inputValue * nutrient.isugar} unit="g" percentage={inputValue * nutrient.isugar_dv}/>
            <Nutrient className="alignLeft" name="Protein" value={inputValue * nutrient.protein} unit="g"  hrClass="new1" />
            <Nutrient className="alignLeft" name="Vitamin D" value={inputValue * nutrient.vitamind} unit="mcg" percentage={inputValue * nutrient.vitamind_dv}/>
            <Nutrient className="alignLeft" name="Calcium" value={inputValue * nutrient.calcium} unit="mg" percentage={inputValue * nutrient.calcium_dv}/>
            <Nutrient className="alignLeft" name="Iron" value={inputValue * nutrient.iron} unit="mg" percentage={inputValue * nutrient.iron_dv}/>
            <Nutrient className="alignLeft" name="Potassium" value={inputValue * nutrient.potassium} unit="mg" percentage={inputValue * nutrient.potassium_dv}/>
          </div>
        </article>
      ))}
    </div>
  );
};

export default Interactive;




