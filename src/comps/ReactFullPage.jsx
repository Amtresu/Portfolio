import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import HomePage from "./Home";
import Projects from "./Projects";
import AboutMe from "./About";
import ContactForm from "./Contact";

const anchors = ["Home", "About", "Projects", "Contact"];

const FullPage = () => (

  <div>
    <ReactFullpage
      anchors={anchors}
      navigationTooltips={anchors}
      render={({ state, fullpageApi }) => {

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