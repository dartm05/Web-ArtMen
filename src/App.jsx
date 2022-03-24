import { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
import { Testimonials } from "./components/testimonials";
import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import { FloatingWhatsApp } from 'react-floating-whatsapp-button'
import 'react-floating-whatsapp-button/dist/index.css'
import ReactPixel from 'react-facebook-pixel';
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});


const advancedMatching = { em: 'some@email.com' }
const options = {
  autoConfig: true,
  debug: false,
}

const hasMarketingPreference = true;
const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);

    ReactPixel.init('532462051648172', advancedMatching, options);
    if (hasMarketingPreference) {
      console.log("I've just viewed the page!")
      ReactPixel.pageView()
    } else {
      ReactPixel.revokeConsent()
    }
  }, []);



  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
  
      <About data={landingPageData.About} />
      <Features data={landingPageData.Features} />
      <Services data={landingPageData.Services} />
      <Gallery data={landingPageData.Gallery}/>
      <FloatingWhatsApp phone="+573172272287" popupMessage="Hello, how can we help you?"/>
      <Team data={landingPageData.Team} />
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

export default App;
