import React from "react";
import Card from "./Card";

import dish1Image from "../images/dish0.png";
import dish2Image from "../images/dish1.png";
import dish3Image from "../images/dish3.jpg";

const dishes = [
  {
    name: "Greek Salad",
    description:
      "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    price: "$12.99",
    image: dish1Image,
  },
  {
    name: "Lemon Dessert",
    description:
      "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    price: "$5.75",
    image: dish2Image,
  },
  {
    name: "Bruchetta",
    description:
      "Our Bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
    price: "$5.99",
    image: dish3Image,
  },
];

const Specials = () => {
  return (
    <section
      className="specials"
      style={{ maxWidth: "80%", margin: "0 auto", padding: "100px 0" }}
    >
      <h2 style={{ color: "black", fontSize: "40px" }}>This Week's Specials</h2>
      <main
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: "20px",
          maxWidth: "80%",
        }}
      >
        {dishes.map((d) => (
          <Card key={d.name} {...d} />
        ))}
      </main>
    </section>
  );
};

export default Specials;
