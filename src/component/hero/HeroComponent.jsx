import React from "react";
import { Container } from "react-bootstrap";
import "../../component/hero/hero.css";
import profile from "../../assets/image/profile-image.png";
import elips from "../../assets/image/elips.png";
import { Link } from "react-router-dom";

const HeroComponent = () => {
  return (
    <>
      <div className="hero">
        <Container>
          <div className="row">
            <div className="col-lg-6 hero-left">
              <h2>Hello <span className="say-hi">🤚</span>, i’m</h2>
              <h1>Sandi Nofri</h1>
              <p>
                Programer, Fullstack Developer, & Student. I create
                seamless web experiences for end-users.
              </p>
              <div className="mt-3">
                <Link to={"/contact"} className="button-about me-2" href="">
                  Contact Me
                </Link>
                <Link to={"/project"} className="button-project" href="">
                  Project
                </Link>
              </div>
            </div>
            <div className="col-lg-6 hero-right">
              <div className="profile-image relative">
                <img src={profile} alt="" />
                <img src={elips} alt="" className="elips"/>
              </div>
            </div>
          </div>
        </Container>
        <div className="rectangle"></div>
      </div>
    </>
  );
};

export default HeroComponent;
