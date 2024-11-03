import React from "react";
import "./App.css";
import Header from "./components/Header";
// import Header from "./components/Header"
import Main from "./components/Main";
import Footer from "./components/Footer";
import Specials from "./components/Specials/Specials";
import Testimonials from "./components/Testimonials/Testimonials";
import About from "./components/About/About";

function App() {
  return (
    <>
      <Header />
      <Main />
      <Specials />
      <Testimonials />
      <About />
      <Footer />
    </>
  );
}

export default App;
