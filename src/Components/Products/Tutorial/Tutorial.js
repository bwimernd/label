// Tutorial.js
import React, {useState} from 'react';
import LabelHeader from '../../Interactive/LabelHeader';
import './tutorial.css';

const Tutorial = () => {
    // Dummy data for the LabelHeader component
    const [inputValue, setInputValue] = useState(1); // Initial value for the input

    // Sample nutrient object
    const nutrient = {
        servings: 5,
        serving_size: '30g',
        calories: 150,
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
                    To calculate nutrient values, locate the <span className="tutorial-highlight">input field</span> in <b>Amount per __ Servings</b>and enter your desired serving size. This will automatically adjust the nutrient values based on your input. You may also input decimals as well (e.g. 0.5, 1.25, 2.75).
                </p>
            </div>

            <div className="tutorial-step">
                <h3>Step 2: Hover Over Nutrients</h3>
                <p>
                    Any text that is <span className="tutorial-highlight">underlined</span> can be hovered over. Place your cursor over these underlined items to view additional information or explanations in a popover.
                </p>
            </div>

           
            
            <h3>Interactive Demo</h3>
            <p>Below is an interactive demo of the label. Use the input field to adjust the serving size and hover over underlined items to learn more.</p>
            <div className="all">
                <article className="label">
                        <div>
                    <LabelHeader value={inputValue} inputValue={inputValue} handleChange={handleChange} nutrient={nutrient} />
                    </div>
                </article>
            </div>
            <p>Enjoy your healthy journey!</p>
        </div>
    );
};

export default Tutorial;

