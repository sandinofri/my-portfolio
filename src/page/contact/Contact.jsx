import React from "react";
import { Container } from "react-bootstrap";
import { FiInstagram } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import "./contact.css";
const Contact = () => {
  return (
    <>
      <section className="contact">
        <Container>
          <div className="row row-cols-lg-2">
            <div className="col-lg-5">
              <h2>Connect With Me</h2>
              <p>Satisfied with me? Please contact me</p>
              <div className="d-flex">
                <a href="https://www.instagram.com/sandinofri/" className="me-2">
                  <FiInstagram />
                </a>
                <a href="https://web.facebook.com/sandi.nofri" className="me-2">
                  <FaFacebookF />
                </a>
                <a href="#" className="me-2">
                  <FiTwitter />
                </a>
                <a href="https://linkedin.com/in/sandi-nofri" className="me-2">
                  <FaLinkedinIn />
                </a>
                <a href="https://github.com/sandinofri" className="me-2">
                  <FaGithub />
                </a>
              </div>
            </div>
            <div className="col-lg-5">
              <p>Contact me, let’s make magic together</p>
              <form action="">
                <input type="text" placeholder="Name :"/>
                <input type="text" placeholder="Email :"/>
                <textarea name="" id="" cols="30" rows="5" placeholder="Message :" className="message"></textarea>
                <button className="contact-button">Send</button>
              </form>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Contact;
