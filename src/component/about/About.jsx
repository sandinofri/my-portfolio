import React from "react";
import { Container } from "react-bootstrap";
import "./about.css";
import { FiInstagram } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const About = () => {
  return (
    
      <section className="about">
        <Container>
          <div className="row">
            <div className="col-lg-6 about-left">
              <h1>About Me</h1>
              <h2>I am very interested in programming</h2>
              <p>
                Hi, I am a student majoring in Informatics Engineering, I am
                very interested in programming, therefore I take various
                programming courses on various platforms
              </p>
            </div>
            <div className="col-lg-6 about-right">
              <h2>sosial media</h2>
              <p>
                Also follow all my social media accounts to see my daily
                activities
              </p>
              <div className="social-media-icon d-flex ">
                <a href="https://www.instagram.com/sandinofri/" className="me-2">
                  <FiInstagram />
                </a>
                <a href="https://www.facebook.com/sandi.nofri" className="me-2">
                  <FaFacebookF />
                </a>
                <a href="" className="me-2">
                  <FiTwitter />
                </a>
                <a href="https://www.linkedin.com/in/sandi-nofri-b66506245/" className="me-2">
                  <FaLinkedinIn />
                </a>
                <a href="https://github.com/sandinofri" className="me-2">
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>
    
  );
};

export default About;
