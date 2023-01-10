import React, { useEffect, useRef } from "react";

import { Banner } from "./components/banner";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header";
import Parallax from "parallax-js";
import WOW from "wowjs";
import { Attention } from "./components/attention";
import { Advert } from "./components/advert";
import { Clock } from "./components/clock";
import { Help } from "./components/help";
import { Attracting } from "./components/attracting";
import { Work } from "./components/work";
import { Create } from "./components/create";
import { Customers } from "./components/customers";
import { Answer } from "./components/answer";
import { Pricing } from "./components/pricing";

function App() {
  useEffect(() => {
    new WOW.WOW().init();
    if (window.innerWidth > 767) {
      const text = document.getElementsByClassName("prl");
      Array.from(text).forEach((i) => new Parallax(i));
    }
  }, []);
  return (
    <div className="wrapper">
      <Header />
      <Banner />
      <Attention />
      <Advert />
      <Clock />
      <Help />
      <Attracting />
      <Work />
      <Create />
      <Customers />
      <Answer />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;
