import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import "../navbar/navbar.css";
import menu from "../../assets/image/menu.png";
import {  Link, useNavigate ,useLocation} from "react-router-dom";

const NavbarComponent = () => {
  const [isVisible, setIsVible] = useState(false);
  const navigate =useNavigate()

  const handleVisible = () => {
    setIsVible(!isVisible);
  };
  const toHome = ()=>{
    navigate("/")
  }
  const toProject = ()=>{
    navigate("/project")
  }
  const toSkil = ()=>{
    navigate("/skil")
  }
  const toContact = ()=>{
    navigate("/contact")
  }

  const location = useLocation();
  const currentPath = location.pathname;
  console.log(currentPath)
  return (
    <>
      <div className="navbar ">
        <Container className="container-navbar">
          <div>
            <a className="logo" href="">
              Sandi Nofri
            </a>
          </div>
          <div>
            <div className="menu" onClick={handleVisible}>
              <img src={menu} alt="" />
            </div>

            <div className="d-flex  gap-5 list">
              <a className={currentPath === "/" ? "active" : "link"} href="#" onMouseOver={toHome}>
                Home
              </a>

              <a className={currentPath === "/project" ? "active" : "link"} href="#" onMouseOver={toProject}>
                Project
              </a>

              <a className={currentPath === "/skil" ? "active" : "link"} href="#" onMouseOver={toSkil}>
                Skil
              </a>

              <a className={currentPath === "/contact" ? "active" : "link"} href="#" onMouseOver={toContact}>
                Contact
              </a>
            </div>
          </div>
        </Container>
      </div>
      {isVisible && (
        <div className="toggle-menu border ">
          <div>
            <Link to={"/"} href="">Home</Link>
          </div>
          <div>
            <Link to={"/project"} href="">Project</Link>
          </div>
          <div>
            <Link to={"/skil"} href="">Skil</Link>
          </div>
          <div>
            <Link to={"/contact"} href="">Contact</Link>
          </div>
        </div>
      )}
    </>
  );
};

export default NavbarComponent;
