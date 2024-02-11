import React from "react";
import NewProject from "../../component/newProject/ProjectComponent";
import { project } from "../../data";

const Project = () => {
  return (
    <>
      <NewProject projectData={project} isView={false}/>
    </>
  );
};

export default Project;
