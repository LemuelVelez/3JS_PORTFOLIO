import React from "react";
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";

const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box">
    <p className="font-medium sm:text-xl text-center">{text}</p>
    <Link to={link} className="neo-brutalism-white neo-btn">
      {btnText}
      <img src={arrow} className="w-4 h-4 object-contain" />
    </Link>
  </div>
);

const renderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      Hi, I am <span className="font-semibold">Lemuel</span>👋
      <br />A Front-End Developer from Philippines
    </h1>
  ),
  2: (
    <InfoBox
      text="I am a Front-End Developer based in the Philippines. I am currently looking for a job as a Front-End Developer. I am open to new opportunities and would love to connect with you!"
      link="/about"
      btnText="Learn More"
    />
  ),
  3: (
    <InfoBox
      text=" I am currently working on my portfolio. I have some projects that I have done in my time. I am open to new opportunities and would love to connect with you!"
      link="/projects"
      btnText="Visit Projects"
    />
  ),
  4: (
    <InfoBox
      text=" I am always looking for new opportunities to work on. If you like what you see and want to work together, feel free to contact me. I would love to hear from you!"
      link="/contact"
      btnText="Let's get in touch"
    />
  ),
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
