import React from 'react';
import './Project.css';

function Project({ project }) {
  return (
    <div className="project">
      <div className="project__title">{project.name}</div>

      <img className="project__img" src={project.imgURL} />
    </div>
  );
}

export default Project;
