import React from "react";
import { Button } from "./Button";
import { ButtonWork } from "./ButtonWork";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <h1>Hi! We're SIMSISTERS</h1>
      <p>It's nice to meet you</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          Contact Us
        </Button>
        <ButtonWork
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          Watch Our Work
        </ButtonWork>
      </div>
    </div>
  );
}

export default HeroSection;
