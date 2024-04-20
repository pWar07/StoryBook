import React from "react";
import "./Home.css";
import Header from "../components/Header";
import Cont1 from "../Home/Cont1";
import Cont2 from "../Home/Cont2";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <Cont1 />
      <Cont2/>
    </div>
  );
};

export default Home;
