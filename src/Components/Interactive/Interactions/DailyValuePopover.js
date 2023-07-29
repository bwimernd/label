import React, { useState } from 'react';
import './Popover.css'; // Import the CSS

const DailyValuePopover = ({title,dv_content, percentage, inputValue }) => (
  <div className="dv-popover">
    <h3>{title}</h3>
    <p>{dv_content}</p>
  </div>
);

export default DailyValuePopover;
