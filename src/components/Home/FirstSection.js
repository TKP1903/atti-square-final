import React from "react";
import "./FirstSection.css";
import Carousel from "react-bootstrap/Carousel";

import { Button } from "react-bootstrap";
const FirstSection = () => {
  return (
    <div className="first-section">
      <div className="outline">
        <div className="inner-content-left">
          Taste the best, tender,
          <br />
          jucilicious flavour in every bite
          <br />
          One stop shop for all your chicken cravings
        </div>
        <div className="inner-content-right"></div>
      </div>
    </div>
  );
};
export default FirstSection;
