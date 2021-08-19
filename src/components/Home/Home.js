import React from "react";
import FirstSection from "./FirstSection";
// import Parag from "./paragraph-sec/parag";
import Order from "./Order/Order";
import Testimonial from "./Testimonial/Testimonial";
import Camp from "./Camp/Camp";
import First from "./new first section/first";
import Firstsec from "./first-sec/first-sec";

const Home = () => {
  return (
    <div style={{ overflowX: "hidden" }}>
      {/* <Scroll /> */}
      {/* <FirstSection /> */}
      {/* <Firstsec /> */}
      <First />
      {/* <Order /> */}
      <Camp />
      {/* <Parag /> */}
      <Testimonial />
    </div>
  );
};

export default Home;
