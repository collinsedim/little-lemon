import React from "react";
import small_logo from "../images/small_logo.png";

const Footer = () => {
  return (
    <footer>
      <section>
        <div>
          <img
            src={small_logo}
            alt="Little Lemon Logo"
            style={{ height: "200px", width: "auto" }}
          />
        </div>
        <div>
          <h3>Sitemap</h3>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Menu</li>
            <li>Reservations</li>
            <li>Order Online</li>
            <li>Login</li>
          </ul>
        </div>
        <div>
          <h3>Contact</h3>
          <ul>
            <li>Address</li>
            <li>Phone Number</li>
            <li>Email</li>
          </ul>
        </div>
        <div>
          <h3>Social</h3>
          <ul>
            <li>Address</li>
            <li>Phone Number</li>
            <li>Email</li>
          </ul>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
