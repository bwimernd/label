import React from 'react';
import './Popover.css'; // Import the CSS

const Popover = ({title, content, dvContent }) => (
  <div className="popover">
    <h3>{title}</h3>
    {dvContent}
    {content}
  </div>
);

export default Popover;
