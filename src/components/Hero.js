import React from "react";
import food1 from "../images/restauranfood.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container grid md:grid-cols-2 grid-cols-1 justify-center gap-20">
        <div className="flex flex-col gap-5">
          <h2>Little Lemon</h2>
          <h3>Chicago</h3>
          <p>
            We are a family owned Mediterraneran restaurant, focused on
            traditional recipes servred with a modern twist.
          </p>
          <Link to="/Booking">
            <button aria-label="On Click">Reserve Table</button>
          </Link>
        </div>
        <div>
          <img
            src={food1}
            className="w-full h-[400px] object-cover rounded-2xl"
            alt="logo"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
