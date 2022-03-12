import React from 'react';
import './Project.css';

function Project({ project }) {
  return (
    <div className="project">
      <div className="project__title">{project.name}</div>
      <div className="project__tech-container">
        <div className="project__tech">html</div>
        <div className="project__tech">html</div>
        <div className="project__tech">html</div>
      </div>
      <img
        className="project__img"
        alt={project.description}
        src={project.imgURL}
      />
    </div>
  );
}

export default Project;
