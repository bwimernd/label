import React, { useState} from 'react';
import './label.css';
import Nutrient from './Nutrient'; // make sure the path is correct
import LabelHeader from './LabelHeader';

const Interactive = ({nutrition, title, value}) => {
  const [inputValue, setInputValue] = useState('1');
  const handleChange = event => setInputValue(event.target.value);
  
  return (
    <div>
    <h3>{title}</h3>
    <div className='all'>
      
      {nutrition.map(nutrient => (
        <article key={nutrient.id} className='label'>
          <div>
            <LabelHeader value={value} inputValue={inputValue} handleChange={handleChange} nutrient={nutrient}/>
            
            <Nutrient 
              className="alignLeft" 
              name="Total Fat" 
              value={inputValue * nutrient.tfat} 
              unit="g" 
              percentage={inputValue * nutrient.tfatdv} 
              dv={nutrient.tfatdv}
              inputValue={inputValue}
              popoverContent="Includes Saturated Fat, Trans Fat, Monounsaturated and Polyunsaturated Fats"
              dvContent={
                <div>
                  <p className="info-normal">The Daily Value for Total Fat is 78g per day</p>
                </div>} 
            />

            <Nutrient 
              className="alignLeft" 
              name="Saturated Fat" 
              value={inputValue * nutrient.satfat} 
              unit="g" 
              percentage={inputValue * nutrient.satfat_dv} 
              dv={nutrient.satfat_dv}
              inputValue={inputValue}
              popoverContent="Diets higher in saturated fat are associated with an increased risk of developing cardiovascular disease."
              dvContent={
                <div>
                  <p className='info-header-bad'>Saturated Fat is a nutrient to get less of.</p>
                  <p className="info-normal">The Daily Value for Saturated Fat is <b>less</b> than 20g per day</p>
                </div>} 
           />

            <Nutrient 
              className="alignLeft" 
              name="Trans Fat" 
              value={inputValue * nutrient.trans} 
              inputValue={inputValue}
              unit="g" 
              popoverContent="Trans fat is an unsaturated fat.Trans fat occurs naturally in some animal foods but is not essential in the diet. Trans fat has no % Daily Value (%DV), so use the number of grams (g) to compare and choose foods."
              
              
            />

            <Nutrient 
              className="alignLeft" 
              name="Cholesterol" 
              value={inputValue * nutrient.cholesterol} 
              unit="mg" 
              percentage={inputValue * nutrient.cholesterol_dv} 
              dv={nutrient.cholesterol_dv}
              inputValue={inputValue}
              popoverContent="The Dietary Guidelines for Americans recommend keeping the intake of dietary cholesterol as low as possible while maintaining a healthy diet."
              dvContent={
                <div>
                  <p className="info-normal">The Daily Value for Cholesterol is <b>less</b> than 300mg per day</p>
                </div>} 
            />

            <Nutrient 
              className="alignLeft" 
              name="Sodium" 
              value={inputValue * nutrient.sodium} 
              unit="mg" 
              percentage={inputValue * nutrient.sodium_dv} 
              dv={nutrient.sodium_dv}
              inputValue={inputValue}
              popoverContent="Diets higher in sodium are associated with an increased risk of developing high blood pressure, which can raise the risk of heart attacks, heart failure, stroke, kidney disease, and blindness."
              dvContent={
                <div>
                  <p className='info-header-bad'>Sodium is a nutrient to get less of. </p>
                  <p className="info-normal">The Daily Value for total fat is 78g per day</p>
                </div>} 
            />

            <Nutrient 
              className="alignLeft" 
              name="Total Carbohydrate" 
              value={inputValue * nutrient.tcarb} 
              unit="g" 
              percentage={inputValue * nutrient.tcarb_dv}
              dv={nutrient.tcarb_dv}
              inputValue={inputValue}
              popoverContent="Carbohydrates are found primarily in plant foods; the exception is dairy products, which contain milk sugar (lactose)."
              dvContent={
                <div>
                  <p className='info-normal'>This includes the amount in grams (g) per serving of dietary fiber, total sugars, and added sugars; as well as the %DV of dietary fiber and added sugars.</p>
                  <p className="info-normal">The Daily Value for Total Carbohydrates is 275 g per day.</p>
                </div>} 
            />

            <Nutrient 
              className="alignLeft" 
              name='Dietary Fiber'
              value={inputValue * nutrient.dfiber} 
              unit="g" 
              percentage={inputValue * nutrient.dfiber_dv} 
              dv={nutrient.dfiber_dv}
              inputValue={inputValue}
              popoverContent="Diets higher in dietary fiber can increase the frequency of bowel movements and can reduce the risk of developing cardiovascular disease." 
              dvContent={
                <div>
                  <p className="info-header-good">Dietary Fiber is a nutrient to get more of.</p>
                  <p className="info-normal">The Daily Value for dietary fiber is 28 g per day.</p>
                </div>} 
            />

            <Nutrient 
              className="alignLeft" 
              name="Total Sugars" 
              value={inputValue * nutrient.tsugar} 
              unit="g" 
              inputValue={inputValue}
              popoverContent="Sugars are the smallest and simplest type of carbohydrate. They are easily digested and absorbed by the body. Total Sugars on the Nutrition Facts label includes: Sugars naturally present and Added Sugars."
            />

            <Nutrient 
              className="alignLeft" 
              name="Includes Added Sugars" 
              value={inputValue * nutrient.isugar} 
              unit="g" 
              percentage={inputValue * nutrient.isugar_dv}
              inputValue={inputValue}
              dv={nutrient.isugar_dv}
              popoverContent="Diets high in calories from added sugars can make it difficult to meet daily recommended levels of important nutrients while staying within calorie limits. "
              dvContent={
                <div>
                  <p className='info-header-bad'>Added sugars are a nutrient to get less of.</p>
                  <p className="info-normal">The Daily Value for Added Sugars is <b>less</b> than 50 g per day.</p>
                </div>} 
            />

            <Nutrient 
              className="alignLeft" 
              name="Protein" 
              value={inputValue * nutrient.protein} 
              inputValue={inputValue}
              unit="g"  
              hrClass="new1" 
              popoverContent="Protein is found in foods from both plants and animals. Protein generally has no % Daily Value (%DV) listed on the label, so use the number of grams (g) as a guide."
              
            />

            <Nutrient 
              className="alignLeft" 
              name="Vitamin D" 
              value={inputValue * nutrient.vitamind} 
              unit="mcg" 
              percentage={inputValue * nutrient.vitamind_dv}
              inputValue={inputValue}
              dv={nutrient.vitamind_dv}
              dvContent={
                <div>
                  <p className="info-header-good">Vitamin D is a nutrient to get more of.</p>
                  <p className="info-normal">The Daily Value for Vitamin D is 20mcg per day</p>
                </div>} 
              popoverContent="Vitamins and minerals are nutrients to get more of. Diets rich in vitamins and minerals promote growth, development, and normal body functioning.              "
            />

            <Nutrient 
              className="alignLeft" 
              name="Calcium" 
              value={inputValue * nutrient.calcium} 
              unit="mg" 
              percentage={inputValue * nutrient.calcium_dv}
              dv={nutrient.calcium_dv}
              inputValue={inputValue}
              dvContent={
                <div>
                  <p className="info-header-good">Calcium is a nutrient to get more of.</p>
                  <p className="info-normal">The Daily Value for total fat is 1,300mg per day</p>
                </div>} 
                popoverContent="Vitamins and minerals are nutrients to get more of. Diets rich in vitamins and minerals promote growth, development, and normal body functioning.              "
                
            />

            <Nutrient 
              className="alignLeft" 
              name="Iron" 
              value={inputValue * nutrient.iron} 
              unit="mg" 
              percentage={inputValue * nutrient.iron_dv}
              dv={nutrient.iron_dv}
              inputValue={inputValue}
              dvContent={
                <div>
                  <p className="info-header-good">Iron is a nutrient to get more of.</p>
                  <p className="info-normal">The Daily Value for total fat is 18mg per day</p>
                </div>} 
                popoverContent="Vitamins and minerals are nutrients to get more of. Diets rich in vitamins and minerals promote growth, development, and normal body functioning.              "
                
            />

            <Nutrient 
              className="alignLeft" 
              name="Potassium" 
              value={inputValue * nutrient.potassium} 
              unit="mg" 
              percentage={inputValue * nutrient.potassium_dv}
              dv={nutrient.potassium_dv}
              inputValue={inputValue}
              dvContent={
                <div>
                  <p className="info-header-good">Potassium is a nutrient to get more of.</p>
                  <p className="info-normal">The Daily Value for total fat is 4,700mg per day</p>
                </div>} 
              hrClass="new1"
              popoverContent="Vitamins and minerals are nutrients to get more of. Diets rich in vitamins and minerals promote growth, development, and normal body functioning.              "
            
            />
            <p className='footnote'><span>*</span> The % Daily Value (DV) tells you how much a nutrient in a serving of food contributes to a daily diet. 2,000 calories a day is used for general nutrition advice. </p>
          </div>
        </article>
      ))}
    </div>
    </div>
  );
};

export default Interactive;




