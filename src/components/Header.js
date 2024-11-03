import React, { useState } from "react";
import littlelemon_logo from "../images/littlelemon_logo.png";
import menuIcon from "../images/menu.svg";

const menuItems = [
  "Home",
  "About",
  "Menu",
  "Reservations",
  "Order Online",
  "Login",
];

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="fixed top-0 w-full h-16 bg-white z-10 flex items-center">
      <nav className="flex justify-between items-center p-5 w-full max-w-7xl">
        <a href="/">
          <img
            src={littlelemon_logo}
            alt="Little Lemon Logo"
            className="w-48 h-auto"
          />
        </a>
        <ul className="md:flex items-center gap-4 hidden">
          {menuItems.map((item) => (
            <li key={item}>
              <a href="/">{item}</a>
            </li>
          ))}
        </ul>

        <img
          src={menuIcon}
          alt="Menu Icon"
          className="md:hidden cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        />
        {isOpen && (
          <ul className="md:hidden flex flex-col items-center gap-4 absolute top-16 right-5 bg-white p-5 w-72 text-xl rounded-2xl shadow-md">
            {menuItems.map((item) => (
              <li key={item}>
                <a href="/">{item}</a>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Nav;
