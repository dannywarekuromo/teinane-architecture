import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Feature.css";
import CaneBack from "../../Assets/Images/Project-Image (4).png";
import SeaFront from "../../Assets/Images/Project-Image (37).jpg";
import MinimiOPtique from "../../Assets/Images/Project-Image (9).png";
import CubicVolume from "../../Assets/Images/Project-Image (15).jpg";

const projects = [
  {
    src: `${CaneBack}`,
    name: "feature-project-1",
    title: "Cane Back",
    label: "furniture",
    to: "/CaneBack",
  },
  {
    src: `${SeaFront}`,
    name: "feature-project-2",
    title: "Sea Front",
    label: "spatial design",
    to: "/SeaFront",
  },
  {
    src: `${MinimiOPtique}`,
    name: "feature-project-3",
    title: "Minimo Optique",
    label: "Interior Design",
    to: "/MinimoOptique",
  },
  {
    src: `${CubicVolume}`,
    name: "feature-project-4",
    title: "Cubic Volume",
    label: "architecture",
    to: "/CubicVolume",
  },
];

function ProjectItem({
  src,
  name,
  title,
  label,
  to,
  updateActiveProject,
  index,
}) {
  return (
    <div className="feature-item">
      <div className="feature-image">
        <img src={src} alt={name} />
      </div>

      <div className="feature-info">
        <p className="feature-label">{label}</p>
        <Link to={to} className="feature-title">
          {title}
        </Link>
      </div>
    </div>
  );
}

const Feature = () => {
  const [activepProject, setActiveProject] = useState(1);

  return (
    <section className="feature" data-scroll-section >
      <div className="feature-counter">
        <span>{activepProject}</span>
      </div>

      {projects.map((project, index) => (
        <ProjectItem
          key={project.src}
          index={index}
          {...project}
          updateActiveProject={(index) => setActiveProject(index + 1)}
        />
      ))}

      {/*<ProjectItem
        title={projects[0].title}
        label={projects[0].label}
        to={projects[0].to}
      >
        <img src={CaneBack} alt="feature-project-one" />
      </ProjectItem>
      <ProjectItem
        title={projects[1].title}
        label={projects[1].label}
        to={projects[1].to}
      >
        <img src={SeaFront} alt="feature-project-two" />
      </ProjectItem>
      <ProjectItem
        title={projects[2].title}
        label={projects[2].label}
        to={projects[2].to}
      >
        <img src={MinimiOPtique} alt="feature-project-three" />
      </ProjectItem>
      <ProjectItem
        title={projects[3].title}
        label={projects[3].label}
        to={projects[3].to}
  >
        <img src={CubicVolume} alt="feature-project-four" />
      </ProjectItem>*/}
    </section>
  );
};

export default Feature;
