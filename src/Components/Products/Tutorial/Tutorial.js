// Tutorial.js
import React from 'react';
import './tutorial.css';

const Tutorial = () => {
    return (
        <div className="tutorial-container">
            <h2>Interactive Label Tutorial</h2>

            <div className="tutorial-step">
                <h3>Step 1: Input Value</h3>
                <p>
                    To calculate nutrient values, locate the <span className="tutorial-highlight">input field</span> and enter your desired serving size. This will automatically adjust the nutrient values based on your input.
                </p>
            </div>

            <div className="tutorial-step">
                <h3>Step 2: Hover Over Nutrients</h3>
                <p>
                    Any text that is <span className="tutorial-highlight">underlined</span> can be hovered over. Place your cursor over these underlined items to view additional information or explanations in a popover.
                </p>
            </div>

            <div className="tutorial-step">
                <h3>Step 3: Interpret Results</h3>
                <p>
                    After inputting your serving size, review the adjusted nutrient values. These values provide insights into the nutritional content for your selected serving size.
                </p>
            </div>

            <p>Enjoy your healthy journey!</p>
        </div>
    );
};

export default Tutorial;
