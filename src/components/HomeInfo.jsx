import React from "react";
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";

const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box">
    <p className="font-medium sm:text-xl text-center">{text}</p>
    <Link to={link} className="neo-brutalism-white neo-btn">
      {btnText}
      <img src={arrow} />
    </Link>
  </div>
);

const renderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      Hi, I am <span className="font-semibold">Lemuel</span>👋
      <br />A Frontend Developer from Philippines
    </h1>
  ),
  2: (
    <InfoBox
      text="I am a Frontend Developer based in the Philippines. I am currently looking for a job as a Frontend Developer. I am open to new opportunities and would love to connect with you!"
      link="/about"
      btnText="Learn More"
    />
  ),
  3: <h1>3</h1>,
  4: <h1>4</h1>,
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
