import React from "react";
import littlelemon_logo from "../images/littlelemon_logo.png";

const menuItems = [
  "Home",
  "About",
  "Menu",
  "Reservations",
  "Order Online",
  "Login",
];

const Nav = () => {
  return (
    <nav>
      <a href="/">
        <img src={littlelemon_logo} alt="Little Lemon Logo" />
      </a>
      <ul>
        {menuItems.map((item) => (
          <li key={item}>
            <a href="/">{item}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
