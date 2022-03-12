import React from 'react';
import './Project.css';

function Project({ project }) {
  return (
    <div className="project">
      <div className="project__title">{project.name}</div>
      <div className="project__img">{project.name}</div>
    </div>
  );
}

export default Project;
