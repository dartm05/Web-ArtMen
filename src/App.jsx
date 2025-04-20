import { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Catalogue } from "./components/catalogue";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Testimonials } from "./components/testimonials";
import { Stay } from "./components/Stay";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import { FloatingWhatsApp } from "@carlos8a/react-whatsapp-floating-button";
import "./App.css";


import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ProcedureDetail } from "./components/procedure-detail";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});


const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
 
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header data={landingPageData.Header} />
              <Testimonials data={landingPageData.Testimonials} />
              <About data={landingPageData.About} />
              <Catalogue data={landingPageData.Catalogue} />
              <Services data={landingPageData.Services} />
              <Stay data={landingPageData.Stay} />
              <Contact data={landingPageData.Contact} />
            </>
          }
        />
        <Route
          path="/procedure/:procedureId"
          element={<ProcedureDetail data={landingPageData.CatalogueDetail} />}
        />
      </Routes>
      <FloatingWhatsApp
        phoneNumber="573172272287"
        avatar="/img/doctor.png"
        initialMessageByServer="Hi there! How can I assist you?"
        statusMessage="Available"
        placeholder="Write here..."
        accountName="Dr. Luis Arteaga"
        allowEsc={true}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          zIndex: 1000,
          backgroundColor: "#25D366",
          color: "#fff",
          borderRadius: "50%",
          width: "60px",
          height: "60px",
        }}
      />
    </div>
  );
};

export default App;
