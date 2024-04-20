import React from "react";
import { PiCopyLight } from "react-icons/pi";
import { PiStarFourFill } from "react-icons/pi";
import "./Cont1.css";
import eight from "../assets/img/eight.svg";
import grainy from "../assets/img/grainy-bg.avif";
import logo11 from "../assets/img/logo-vscode.svg"
import logo12 from "../assets/img/logo-eu.svg"
import logo13 from "../assets/img/logo-github.svg"
import logo14 from "../assets/img/logo-airbnb.svg"
import logo15 from "../assets/img/logo-mozilla.svg"
import logo16 from "../assets/img/logo-monday.svg"
import logo17 from "../assets/img/logo-bbc.svg"


const Cont1 = () => {
  return (
    <div className="cont1">
      <img src={grainy} alt="" className="grainy" />
      <div className="elem">
        <div className="gooey1"></div>
        <div className="gooey"></div>
      </div>
      <h1>Build UIs without the grunt work</h1>
      <p>
        Storybook is a frontend workshop for building UI components and pages in
        isolation. Thousands of teams use it for UI development, testing, and
        documentation. It's open source and free.
      </p>
      <div className="cont11">
        <div className="left">
          <button className="start">Get Started</button>
          <button className="btn">
            npx storybook@latest init <PiCopyLight className="copy" />
          </button>
          <div className="info">
            <h4>23.47m</h4>
            <h5>Installs per month</h5>
          </div>
          <div className="info">
            <h4>2,234+</h4>
            <h5>Contributors</h5>
          </div>
        </div>
        <div className="right">
          <div className="cont111">
            <h5>Version</h5>
            <img src={eight} alt="" className="eightImg" />
          </div>
          <div className="starOverlay">
            <PiStarFourFill className="star1" />
            <PiStarFourFill className="star2" />
            <PiStarFourFill className="star3" />
            <PiStarFourFill className="star4" />
          </div>
        </div>
      </div>
      <div className="cont12">
        <div className="sidebar"></div>
      </div>
      <div className="cont13">
        <img src={logo11} alt="" className="logo11"/>
        <img src={logo12} alt="" className="logo11"/>
        <img src={logo13} alt="" />
        <img src={logo14} alt="" />
        <img src={logo15} alt="" />
        <img src={logo16} alt="" />
        <img src={logo17} alt="" />
      </div>
    </div>
  );
};

export default Cont1;
