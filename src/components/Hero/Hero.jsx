import React from "react";
import "./Hero.css";
import CEO from "../../images/ceo.jpg";

function Hero() {

  return (
    <div className="hero">
      <img className="ceo" src={CEO} alt="" />
    </div>
  );
}

export default Hero;
