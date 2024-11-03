import React from "react";
import "./Specials.css";

import dish1Image from "../../images/dish0.png";
import dish2Image from "../../images/dish1.png";
import dish3Image from "../../images/dish3.jpg";

function Specials() {
  return (
    <section className="specials-container">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <h2>Specials</h2>
        <button className="menu-button">Online Menu</button>
      </div>
      <div className="specials-grid">
        {[
          {
            name: "Greek Salad",
            price: "$12.99",
            description:
              "The famous Greek salad of crispy lettuce, peppers, olives, and our Chicago special dressing.",
            image: dish1Image,
          },
          {
            name: "Bruschetta",
            price: "$5.99",
            description:
              "Our Bruschetta is made from grilled bread seasoned with garlic and topped with tomatoes.",
            image: dish2Image,
          },
          {
            name: "Lemon Dessert",
            price: "$5.00",
            description:
              "Our famous lemon dessert has been perfected and is sure to be loved by all.",
            image: dish3Image,
          },
        ].map((special, index) => (
          <div key={index} className="special-card">
            {/* <div className="image-placeholder"> */}
            <img
              src={special.image}
              alt={special.name}
              className="image-placeholder"
            />
            {/* </div> */}
            <div className="special-content">
              <div className="specials-header">
                <h3>{special.name}</h3>
                <p className="price">{special.price}</p>
              </div>
              <p className="description">{special.description}</p>
              <button className="order-button">Order a delivery ➔</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Specials;
