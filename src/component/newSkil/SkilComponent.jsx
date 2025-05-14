import React from "react";
import "./skil.css";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const SkilComponent = ({ SkilData, isView }) => {
  return (
    <>
      <Container className="skil" style={{paddingTop:!isView && "100px"}}>
        <h1 className="skil-tittle mb-4" style={{textAlign:!isView && "center"}}>Skil & Sertificate</h1>
        <div className="d-flex gap-4 flex-wrap justify-content-center">
          {SkilData.map((item) => (
            <div className="sertificate-card">
              <div className="sertificate-image">
                <img src={item.image} alt="" />
              </div>
              <h2>{item.tittle}</h2>
              <p>{item.desc}</p>
              <a href={item.link}>credential</a>
            </div>
          ))}
        </div>
        {isView && (
          <Link to={"/skil"} className="view-more">
            View More
          </Link>
        )}
      </Container>
    </>
  );
};

export default SkilComponent;
