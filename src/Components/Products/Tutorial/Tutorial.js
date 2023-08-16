// Tutorial.js
import React, {useState} from 'react';
import LabelHeader from '../../Interactive/LabelHeader';
import Nutrient from '../../Interactive/Nutrient';
import NutrientLegend from '../../Interactive/Legend/NutrientLegend';
import './tutorial.css';

const Tutorial = () => {
    // Dummy data for the LabelHeader component
    const [inputValue, setInputValue] = useState(1); // Initial value for the input

    // Sample nutrient object
    const nutrient = {
        servings: 5,
        serving_size: '30g',
        calories: 150,
        satfat: 3,
        satfat_dv: 14,
        dfiber: 12,
        dfiber_dv: 41
    };

    // Handle change function for the input
    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    return (
        <div className="tutorial-container">
            <h2>Interactive Label Tutorial</h2>

            <div className="tutorial-step">
                <h3>Step 1: Input Value</h3>
                <p>
                    To calculate nutrient values, locate the <span className='p-bold'>Amount per
      <input type="number" id="input" min={1} style={{width: '40px'}}/>  
      serving{inputValue > 1 ? 's' : ''}</span> and enter your desired serving size. This will automatically adjust the calories and nutrient values based on your input. You may also input decimals as well (e.g. 0.5, 1.25, 2.75).
                </p>
            </div>

            <div className="tutorial-step">
                <h3>Step 2: Hover Over Underlined Text</h3>
                <p>
    Any text that is <span className="tutorial-highlight">underlined</span> provides additional information. Hover your cursor over these underlined items to view detailed explanations in a popover. For instance, hovering over underlined nutrients will reveal the daily value for each nutrient and offer more insights about that nutrient.
</p>

            </div>
    
            <div className="tutorial-step">
    <h3>Step 3: Understand the Nutrient Legend</h3>
    <p>
        Located next to the nutrition label, the nutrient legend uses distinct shapes and colors to highlight the main nutrients that consumers should pay attention to. A red/orange square <span className='red'></span> next to the %DV signifies nutrients you should consume less of, while a green circle <span className='green'></span> indicates those you should aim to consume more.
    </p>
    <p>
        The shading of these shapes also offers insights. Darker shades indicate higher amounts of the nutrient, while lighter shades suggest lower amounts. And as mentioned in Step 2, you can hover over the underlined <span className='tutorial-highlight'>%DV</span> to access more specific information about the nutrient's amount.
    </p>
</div>



           
            
            <h3>Interactive Demo</h3>
            <p>Below is an interactive demo of the label. Follow steps from above to understand how they work in action.</p>
            <div className="all">
                <article className="label">
                        <div>
                    <LabelHeader value={inputValue} inputValue={inputValue} handleChange={handleChange} nutrient={nutrient} />
                    <Nutrient 
              className="alignLeft" 
              name="Saturated Fat" 
              value={inputValue * nutrient.satfat} 
              unit="g" 
              percentage={inputValue * nutrient.satfat_dv} 
              dv={nutrient.satfat_dv}
              inputValue={inputValue}
              popoverContent={<p>Diets higher in saturated fat are associated with an increased risk of developing cardiovascular disease.</p>}
              dvContent={
                
    
                  <p className="info-bold info-normal">The Daily Value for Saturated Fat is <b>less</b> than 20g per day</p>
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
                
                  
                  <p className=" info-bold info-normal">The Daily Value for dietary fiber is 28 g per day.</p>
                } 
                
            />
               
                    </div>
                    
                </article>
                <NutrientLegend />
            </div>
            
        </div>
    );
};

export default Tutorial;

