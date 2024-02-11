import React from "react";
import { Container } from "react-bootstrap";
import "./newProject.css"
import { Link } from "react-router-dom";


const ProjectComponent = ({ projectData ,isView}) => {
  return (
    <>
      <section className="new-project">
        <Container>
          <h1 className="project-header">New Project</h1>
          <p className="sub-header">Some projects I've worked on</p>
          <div className="d-flex flex-wrap gap-5 justify-content-center align-items-center">
            {projectData.map((data)=>(
                <div className="project-card shadow ">
                    <div className="project-image ">
                        <img src={data.image} alt=""/>
                    </div>
                    <h1>{data.tittle}</h1>
                    <p>{data.desc}</p>
                    <div className="d-flex justify-content-between">
                        <a href={data.live} className="button-live">View Live</a>
                        <a href={data.repo} className="button-repo">Github Repo</a>
                    </div>
                </div>
            ))}
          </div>
          
          {isView && <Link to={"/project"} className="view-more">View More</Link> }
        </Container>
      </section>
    </>
  );
};

export default ProjectComponent;
