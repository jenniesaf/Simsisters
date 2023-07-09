import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Let's See Some of Our Works</h1>
      <p>
        Other works you'll find on our <a href="/portfolio">Portfolio</a> page
      </p>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/mitzva.jpg"
              text="Bat/Bar Mitzvah"
              path="http://simsisters.com/bat-mitzvah-story"
            />
            <CardItem
              src="images/wedding.jpg"
              text="Wedding Day"
              path="http://simsisters.com/wedding-1"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/maternity.jpg"
              text="Maternity"
              path="http://simsisters.com/maternity-1"
            />
            <CardItem
              src="images/love.jpg"
              text="Love Story"
              path="http://simsisters.com/love-story-1"
            />
            <CardItem
              src="images/fasion.jpg"
              text="Fasion"
              path="http://simsisters.com/advertising"
            />
            <CardItem
              src="images/family.jpg"
              text="Family"
              path="http://simsisters.com/family-1"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Cards;
