import React from 'react';
import './Popover.css'; // Import the CSS

const Popover = ({title, content }) => (
  <div className="popover">
    <h3>{title}</h3>
    <p>{content}</p>
  </div>
);

export default Popover;
