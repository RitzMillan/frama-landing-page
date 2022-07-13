import React from "react";
import "./Home.scss";
import trail from "../../Assets/Images/trail.svg";
import globe from "../../Assets/Images/3dglobe.png";

function Home() {
  return (
    <>
      <div className="home-container">
        <p className="hero-text">AUTHORISED INSTITUTE PARTNERSHIP</p>
        <div className="text-container">
          <p className="text">
            Digital marketing presence on the local level, Opinverse Aims at
            partnering with private institutes, coaching centres, skill
            development centres and other similar institutes.
          </p>
        </div>
        <img src={trail} className="trail-img" alt=""></img>
        <img src={globe} className="globe-img" alt=""></img>
      </div>
    </>
  );
}

export default Home;
