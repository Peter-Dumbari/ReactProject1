import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./Herosection.css";

function Herosection() {
  return (
    <div className="hero-container">
      <video
        src="https://res.cloudinary.com/tamstech-computer-repair-center/video/upload/v1649250487/video-2_fynwpw.mp4"
        autoPlay
        loop
        muted
      />
      <h1>TAMS-TECHNOLOGY</h1>
      <p>
        <i>Gratification and Integrity...</i>
      </p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          MARKETING
        </Button>
      </div>
    </div>
  );
}

export default Herosection;
