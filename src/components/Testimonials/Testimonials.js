import React from "react";
import "./Testimonials.css";

function Testimonials() {
  return (
    <section className="testimonials-container">
      <h2>Testimonials</h2>
      <div className="testimonials-grid">
        {[...Array(4)].map((_, index) => (
          <div key={index} className="testimonial-card">
            <div className="image-placeholder"></div>
            <div className="testimonial-content">
              <p className="rating">Rating</p>
              <p className="name">Name</p>
              <p className="review">Review text...</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
