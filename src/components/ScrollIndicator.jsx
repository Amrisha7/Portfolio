import React from "react";
import "./ScrollIndicator.css"; 

const ScrollIndicator = () => {
  return (
    <div className="scroll-indicator">
      <div className="mouse">
        <div className="wheel"></div>
      </div>
      <p className="scroll-text">Scroll for more</p>
    </div>
  );
};

export default ScrollIndicator;
