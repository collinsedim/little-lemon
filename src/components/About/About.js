import React from "react";
import "./About.css";

function About() {
  return (
    <section className="little-lemon-container">
      <div className="text-content">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet. Amet minim mollit non deserunt
          ullamco est sit aliqua dolor do amet sint. Velit officia consequat
          duis enim velit mollit.
        </p>
      </div>
      <div className="image-gallery">
        <div className="image image1"></div>
        <div className="image image2"></div>
      </div>
    </section>
  );
}

export default About;
