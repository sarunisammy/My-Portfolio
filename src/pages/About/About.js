import React from "react";
import Header from "../../component/Header";
import "./About.css";
import HeaderImage from "../../photos/header_bg_1.jpg";
import StoryImage from "../../photos/about1.jpg";
import VisionImage from "../../photos/about2.jpg";
import MissionImage from "../../photos/about3.jpg";







const About = () => {
  //we using prop drilling to get the children from our header
  return (
    <>
      <Header title="About Us" image={HeaderImage}>
        Lorem ipsum Culpa dolor eusit enim velit nostrud veniamex eautid
        deserunt deserunt deserunt deserunt .
      </Header>
      <section className="about__story">
        <div className="container about__story-container">
          <div className="about__section-image">
            <img src={StoryImage} alt="Our Story Image" />
          </div>
          <div className="about__section-container">
            <h1>Our Story</h1>
            <p>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
             
            </p>
            <p>
               Reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            </p>
            <p>
               Reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              
            </p>
            
          </div>
        </div>
      </section>

      {/* vision */}
      <section className="about__vision">
        <div className="container about__vision-container">
          <div className="about__section-container">
            <h1>Our VisionImage</h1>
            <p>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
             
            </p>
            <p>
               Reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            </p>
           
            
          </div>
          <div className="about__section-image">
            <img src={VisionImage} alt="Our Story Image" />
          </div>
        </div >
      </section>
      {/* mission */}
      <section className="about__mission">
        <div className="container about__mission-container">
          <div className="about__section-image">
            <img src={MissionImage} alt="Our Mission Image" />
          </div>
          <div className="about__section-container">
            <h1>Our Mission</h1>
            <p>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
             
            </p>
            <p>
               Reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            </p>
            <p>
               Reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              
            </p>
            
          </div>
        </div>
      </section>
     
    </>
  );
};

export default About;
