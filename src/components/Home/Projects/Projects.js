import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ParticlesContainer from "../../../ParticlesContainer/ParticlesContainer";
import { projectsData } from "../../Resume/ResumeData";
import Project from "./Project";
import "./Projects.css";
const Projects = () => {
  return (
    <div
      className="mt-5 container App"
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
      }}
    >
      <ParticlesContainer />
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
        }}
      >
        <h1 className=" text-white text-center text-uppercase text-shadow">
          Projects
        </h1>
        <span className="divider"></span>
        <span className="divider2"></span>
        <div className="row gx-5">
          {projectsData.map(project => <Project project={project}></Project>)
          }
        </div>

        <Link to="/projects" className="btn btn-success btn-custom mt-3">
          Go To Projects
        </Link>
      </div>
    </div>
  );
};

export default Projects;
