import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Feature.css";

const projects = [
  { 
    src:  "feature-project-1",
    title: "Cane Back",
    description: "Custom made leisure chair with polished bamboo.",
    category: "furniture",
  },
  {
    src:  "feature-project-2",
    title: "Sea front",
    description: "Fusion of design with a formidabble force of nature.",
    category: "spatial design",
  },
  {
    src:  "feature-project-3",
    title: "Minimo Optique",
    description: "Less is more, quickly is an old trend.",
    category: "Interior Design",
  },
  {
    src: "feature-project-4",
    title: "Cubic Volume",
    description: "A glasshouse that dares the will to throw a stone.",
    category: "architecture",
  },
];

function ProjectItem({
  src,
  title,
  description,
  category,
  index,
}) {
  return (
    <div className="feature-item">
      <div className={src}></div>
      <div className="feature-info">
        <h3 className="feature-title">{title}</h3>
        <p className="feature-desc">{description}</p>
        <p className="feature-cat">{category}</p>
      </div>
    </div>
  );
}

const Feature = () => {
  const [activepProject, setActiveProject] = useState(1);

  return (
    <section className="feature">
      <div className="feature-wrapper">
        <div className="feature-counter">
          <span>{activepProject}</span>
          <span className="divider">/</span>
          <span>{projects.length}</span>
        </div>
        {projects.map((project, index) => (
          <ProjectItem 
            key={project.src}
            index={index}
            {... project}
            updateActiveProject={(index) => setActiveProject(index + 1)}
          />
        )) }
      </div>
      <div className="feature-cta">
        <Link to="/Projects">All Projects</Link>
      </div>
    </section>
  );
};

export default Feature;
