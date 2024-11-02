import React from "react";
import "./App.css";
import Nav from "./components/Nav";
// import Header from "./components/Header"
import Main from "./components/Main";
import Footer from "./components/Footer";
import Specials from "./components/Specials";

function App() {
  return (
    <>
      <Nav />
      <Main />
      <Specials />
      <Footer />
    </>
  );
}

export default App;
