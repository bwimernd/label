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
              popoverContent={<p className='info-normal'>Includes Saturated Fat, Trans Fat, Monounsaturated and Polyunsaturated Fats</p>}
              dvContent={
                <p className="info-bold info-normal">To reach 100% of the Daily Value (%DV), you would need to consume 78 g of Total Fat per day.</p>
} 
            />

            <Nutrient 
              className="alignLeft" 
              name="Saturated Fat" 
              value={inputValue * nutrient.satfat} 
              unit="g" 
              percentage={inputValue * nutrient.satfat_dv} 
              dv={nutrient.satfat_dv}
              inputValue={inputValue}
              popoverContent={<p className='info-normal'>Diets higher in saturated fat are associated with an increased risk of developing cardiovascular disease.</p>}
              dvContent={
                <p className=" info-bold info-normal">To reach 100% of the Daily Value (%DV), you would need to consume 20 g of Saturated Fat per day.</p>
} 
           />

            <Nutrient 
              className="alignLeft" 
              name="Trans Fat" 
              value={inputValue * nutrient.trans} 
              inputValue={inputValue}
              unit="g" 
              popoverContent={<p className='info-normal'>Trans fat is an unsaturated fat. Trans fat occurs naturally in some animal foods but is not essential in the diet. Trans fat has no % Daily Value (%DV), so use the number of grams (g) to compare and choose foods.</p>}
             
              
            />

            <Nutrient 
              className="alignLeft" 
              name="Cholesterol" 
              value={inputValue * nutrient.cholesterol} 
              unit="mg" 
              percentage={inputValue * nutrient.cholesterol_dv} 
              dv={nutrient.cholesterol_dv}
              inputValue={inputValue}
              popoverContent={<p className='info-normal'>The Dietary Guidelines for Americans recommend keeping the intake of dietary cholesterol as low as possible while maintaining a healthy diet.</p>}
              dvContent={
                <p className="info-bold info-normal">To reach 100% of the Daily Value (%DV), you would need to consume 300 mg of Cholesterol per day.</p>
} 
            />

            <Nutrient 
              className="alignLeft" 
              name="Sodium" 
              value={inputValue * nutrient.sodium} 
              unit="mg" 
              percentage={inputValue * nutrient.sodium_dv} 
              dv={nutrient.sodium_dv}
              inputValue={inputValue}
              popoverContent={<p className='info-normal'>Diets higher in sodium are associated with an increased risk of developing high blood pressure, which can raise the risk of heart attacks, heart failure, stroke, kidney disease, and blindness.</p>}
              dvContent={
                <p className=" info-bold info-normal">To reach 100% of the Daily Value (%DV), you would need to consume 2,300mg of Sodium per day.</p>} 
            />

            <Nutrient 
              className="alignLeft" 
              name="Total Carbohydrate" 
              value={inputValue * nutrient.tcarb} 
              unit="g" 
              percentage={inputValue * nutrient.tcarb_dv}
              dv={nutrient.tcarb_dv}
              inputValue={inputValue}
              popoverContent={<p className='info-normal'>Carbohydrates are found primarily in plant foods; the exception is dairy products, which contain milk sugar (lactose).</p>}
              dvContent={
                
                 
                <p className="info-bold info-normal">To reach 100% of the Daily Value (%DV), you would need to consume 275 g of Total Carbohydrates per day.</p>
               } 
            />

            <Nutrient 
              className="alignLeft" 
              name='Dietary Fiber'
              value={inputValue * nutrient.dfiber} 
              unit="g" 
              percentage={inputValue * nutrient.dfiber_dv} 
              dv={nutrient.dfiber_dv}
              inputValue={inputValue}
              popoverContent={<p className='info-normal'>Diets higher in dietary fiber can increase the frequency of bowel movements and can reduce the risk of developing cardiovascular disease.</p>} 
              dvContent={
                <p className="info-bold info-normal">To reach 100% of the Daily Value (%DV), you would need to consume 28 g of Dietary Fiber per day.</p>
} 
            />

            <Nutrient 
              className="alignLeft" 
              name="Total Sugars" 
              value={inputValue * nutrient.tsugar} 
              unit="g" 
              inputValue={inputValue}
              popoverContent={<p className='info-normal'>Sugars are the smallest and simplest type of carbohydrate. They are easily digested and absorbed by the body. Total Sugars on the Nutrition Facts label includes: Sugars naturally present and Added Sugars.
              </p>}
/>
            <Nutrient 
              className="alignLeft" 
              name="Includes Added Sugars" 
              value={inputValue * nutrient.isugar} 
              unit="g" 
              percentage={inputValue * nutrient.isugar_dv}
              inputValue={inputValue}
              dv={nutrient.isugar_dv}
              popoverContent={<p className='info-normal'>Diets high in calories from added sugars can make it difficult to meet daily recommended levels of important nutrients while staying within calorie limits. </p>}
              dvContent={
                <p className="info-bold info-normal">To reach 100% of the Daily Value (%DV), you would need to consume 50 g of Added Sugars per day.</p>
} 
            />

            <Nutrient 
              className="alignLeft" 
              name="Protein" 
              value={inputValue * nutrient.protein} 
              inputValue={inputValue}
              unit="g"  
              hrClass="new1" 
              popoverContent={<p className='info-normal'>Protein is found in foods from both plants and animals. Protein generally has no % Daily Value (%DV) listed on the label, so use the number of grams (g) as a guide."</p>}
              
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
                <p className="info-bold info-normal">To reach 100% of the Daily Value (%DV), you would need to consume 20 mcg of Vitamin D per day.</p>} 
              popoverContent={<p className='info-normal'>Vitamins and minerals are nutrients to get more of. Diets rich in vitamins and minerals promote growth, development, and normal body functioning.</p>}
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
                <p className="info-bold info-normal">To reach 100% of the Daily Value (%DV), you would need to consume 1,300 mg of Calcium per day.</p>} 
                 popoverContent={<p className='info-normal'>Vitamins and minerals are nutrients to get more of. Diets rich in vitamins and minerals promote growth, development, and normal body functioning.</p>}
            />

            <Nutrient 
              className="alignLeft" 
              name="Iron" 
              value={inputValue * nutrient.iron} 
              unit="mg" 
              percentage={inputValue * nutrient.iron_dv}
              dv={nutrient.iron_dv}
              inputValue={inputValue}
              dvContent={<p className="info-bold info-normal">To reach 100% of the Daily Value (%DV), you would need to consume 18 mg of Iron per day.</p>} 
              popoverContent={<p className='info-normal'>Vitamins and minerals are nutrients to get more of. Diets rich in vitamins and minerals promote growth, development, and normal body functioning.</p>}
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
                <p className="info-bold info-normal">To reach 100% of the Daily Value (%DV), you would need to consume 4,700 mg of Potassium per day.</p>} 
              hrClass="new1"
              popoverContent={<p className='info-normal'>Vitamins and minerals are nutrients to get more of. Diets rich in vitamins and minerals promote growth, development, and normal body functioning.</p>}
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




