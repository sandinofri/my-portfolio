import React from "react";
import { Container } from "react-bootstrap";
import { FiInstagram } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import "./footer.css"

const Footer = () => {
  return (
    <>
      <section className="footer">
        <Container>
          <div className="row row-cols-lg-2 mb-4">
            <div className="col-lg-5">
              <h1>Address</h1>
              <p>sandinofri92@gmail.com</p>
              <p>081210634387</p>
              <p>pademangan, jakarta utara, jakarta</p>
            </div>
            <div className="col-lg-5">
              <h1>Link</h1>
              <ul>
                <li><a href="">Home</a></li>
                <li><a href="">Project</a></li>
                <li><a href="">Skil</a></li>
                <li><a href="">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="icons-footer d-flex justify-content-center gap-3">
            <span>
              <FiInstagram />
            </span>
            <span>
              <FaFacebookF />
            </span>
            <span>
              <FiTwitter />
            </span>
            <span>
              <FaLinkedinIn />
            </span>
            <span>
              <FaGithub />
            </span>
          </div>
          <small >created by sandi nofri</small>
        </Container>
      </section>
    </>
  );
};

export default Footer;
