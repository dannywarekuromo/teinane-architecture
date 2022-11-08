import React from "react";
import { Link } from "react-router-dom";

const ProjectCard = ({
  cardDiv,
  cardContext,
  projectTitle,
  titleOne,
  titleTwo,
  index,
  projectIndex
}) => {
  return (
    <div className={cardDiv}>
      <div className={cardContext}>
        <h2 className={projectTitle}>
          <i>{titleOne}</i> <br />
          {titleTwo}
        </h2>
        <Link to="/Projects">VIew Project {/* && Direction Icon*/}</Link>
        <h1 className={projectIndex}>{index}</h1>
      </div>
    </div>
  );
};

ProjectCard.defaultProps = {
  cardDiv: "card-container",
  cardContext: "card-context",
  projectTitle: "title",
  projectIndex: "project-index"
};

export default ProjectCard;
