import { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/procedures";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Video } from "./components/video";
import { Testimonials } from "./components/testimonials";
import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import { FloatingWhatsApp } from "@carlos8a/react-whatsapp-floating-button";
import { Helmet } from "react-helmet";
import "./App.css";

import { useTranslation } from "react-i18next";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ProcedureDetail } from "./components/procedure-detail";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const langs = {
  es: { nativeName: "Español" },
  en: { nativeName: "English" },
};

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  const { t, i18n } = useTranslation();
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Helmet>
        <title>Dr Luis Arteaga Villa - Plastic Surgery in Colombia</title>
        <meta
          name="description"
          content="We offer a wide range of procedures: breast augmentation, breast reduction, tummy tuck, liposuction, buttocks enhancement and various face procedures."
        />
        <link rel="canonical" href="https://drluisarteagavilla.com/" />
        <meta
          name="keywords"
          content="plastic surgery, Colombia, tummy tuck, breast reduction, breast implants, buttocks enhancement, liposuction"
        />
      </Helmet>
      <Navigation />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header data={landingPageData.Header} />
              <Testimonials data={landingPageData.Testimonials}/>
              <About data={landingPageData.About} />
              <Features data={landingPageData.Features} />
              <Services data={landingPageData.Services} />
              <Team data={landingPageData.Team} />
              <Contact data={landingPageData.Contact} />
            </>
          }
        />
        <Route path="/procedure" Component={ProcedureDetail} />
      </Routes>
      <FloatingWhatsApp
        phoneNumber="573172272287"
        avatar="/img/doctor.png"
        initialMessageByServer="Hi there! How can I assist you?"
        statusMessage="Available"
        placeholder="Write here..."
        accountName="Dr. Luis Arteaga"
        allowEsc={true}
      />
    </div>
  );
};

export default App;
