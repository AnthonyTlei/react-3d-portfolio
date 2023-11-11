import { Link } from "react-router-dom";
import arrow from "../assets/icons/arrow.svg";

const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box">
    <p className="font-medium sm:text-xl text-center">{text}</p>
    <Link to={link} className="neo-brutalism-white neo-btn">
      {btnText}
      <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
    </Link>
  </div>
);

const renderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      Hi, I am <span className="font-bold">Anthony</span>
      <br />A Software Engineer from Lebanon
    </h1>
  ),
  2: (
    <InfoBox
      text="Want to learn more about me?"
      link="/about"
      btnText="About"
    />
  ),
  3: (
    <InfoBox
      text="Want to checkout my projects?"
      link="/projects"
      btnText="Projects"
    />
  ),
  4: (
    <InfoBox
      text="Want to get in touch? Let's talk!"
      link="/contact"
      btnText="Contact"
    />
  ),
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
