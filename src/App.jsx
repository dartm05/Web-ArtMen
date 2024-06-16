import { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/procedures";
import { About } from "./components/about";
import { Services } from "./components/services";

import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import { FloatingWhatsApp } from "@carlos8a/react-whatsapp-floating-button";
import ReactPixel from "react-facebook-pixel";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const advancedMatching = { em: "leav66@yahoo.com" };
const options = {
  autoConfig: true,
  debug: false,
};

const hasMarketingPreference = true;
const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);

    ReactPixel.init("532462051648172", advancedMatching, options);
    if (hasMarketingPreference) {
      console.log("I've just viewed the page!");
      ReactPixel.pageView();
    } else {
      ReactPixel.revokeConsent();
    }
  }, []);

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <About data={landingPageData.About} />
      <Features data={landingPageData.Features} />
      <Services data={landingPageData.Services} />
      <Team data={landingPageData.Team} />
      <Contact data={landingPageData.Contact} />
      <FloatingWhatsApp
      phoneNumber="573172272287"
      avatar="/img/doctor.png"
      initialMessageByServer='Hi there! How can I assist you?'
      statusMessage='Available'
      placeholder='Write here...'
      accountName="Dr. Luis Arteaga"
      allowEsc={true} />
    </div>
  );
};

export default App;
