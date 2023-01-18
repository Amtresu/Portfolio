import React, { useState } from "react";
import { createContext } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
// import './index.css';
import HomePage from "./Home";
import Projects from "./Projects";
import AboutMe from "./About";
import ContactForm from "./Contact";

const anchors = ["Home", "About", "Projects", "Contact"];

const FullPage = () => (

    <div>
      <ReactFullpage
        anchors={anchors}
        navigation
        navigationTooltips={anchors}
        navigate
        // sectionsColor={["#0A0A0A", "#0A0A0A", "#0A0A0A"]}
        onLeave={(origin, destination, direction) => {
          // console.log("onLeave event", { origin, destination, direction });
        }}
        render={({ state, fullpageApi }) => {
          // console.log("render prop change", state, fullpageApi);

          return (
            <div>
              <div className="section"><h3><HomePage /></h3></div>
              <div className="section"><h3><AboutMe /></h3></div>
              <div className="section"><h3><Projects /></h3></div>
              <div className="section"><h3><ContactForm /></h3></div>
            </div>
          );
        }}
      />
    </div>

);
export default FullPage;