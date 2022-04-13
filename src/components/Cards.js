import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Your Weight determines your Glory!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/img-9.jpg"
              text="Explore the hidden waterfall deep inside the Amazon Jungle"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src="https://res.cloudinary.com/tamstech-computer-repair-center/image/upload/v1647447427/bitcoin-coins-gold-black-colour-background-100851881_lbnots.jpg"
              text="Federal Government allowed the trading of BTC in Nigeria"
              label="LazkCurrency"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/img-8.jpg"
              text="This was how Paul and Barnabas travelled to Nazereth"
              label="Scripturals"
              path="/services"
            />
            <CardItem
              src="images/img-4.jpg"
              text="The drone view of a stadium, Drone is really good"
              label="The drone view"
              path="/services"
            />
            <CardItem
              src="https://res.cloudinary.com/tamstech-computer-repair-center/image/upload/v1646303394/cld-sample.jpg"
              text="Petting is one of the fast growing habit in our society today"
              label="FunnyPictures"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
