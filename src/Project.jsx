import React from 'react';
import './Project.css';

import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons';

library.add(fab, faCheckSquare, faCoffee);

// <FontAwesomeIcon icon={faCoffee} />

// const element = <FontAwesomeIcon icon={faCoffee} />;
// ReactDOM.render(element, document.body)
function getFAName(simpleTechName) {
  switch (simpleTechName) {
    case 'css':
      return 'css3';
    case 'html':
      return 'html5';
    case 'react':
      return 'react';
    case 'javascript':
      return 'js';
    case 'sass':
      return 'sass';
    case 'git':
      return 'git';
    case 'd3':
      return 'd3';
    // case 'styled-components':
    //   return 'sc';
    // case 'webpack':
    //   return 'webpack';
    // case 'd3':
    //   return 'd3';
    default:
      return 'twitter';
  }
}

function Project({ project }) {
  return (
    <div className="project">
      <div className="project__img-container">
        <div className="project__overlay-container--onhover">
          {' '}
          <div className="project__title">{project.name}</div>
          <div className="project__tech-container">
            {project.tech.map((item) => (
              <FontAwesomeIcon
                key={item}
                icon={`fa-brands fa-${getFAName(item)}`}
                className="project__tech"
              />
            ))}
          </div>
          <div className="project__demo-and-code-container">
            <button>demo</button>
            <button>code</button>
          </div>
        </div>
        <img
          className="project__img"
          alt={project.description}
          src={project.imgURL}
        />
      </div>
    </div>
  );
}

export default Project;

{
  /* <FontAwesomeIcon icon={['fab', 'apple']} />
<FontAwesomeIcon icon={['fab', 'microsoft']} />
<FontAwesomeIcon icon={['fab', 'google']} />
<FontAwesomeIcon icon={['fab', 'html5']} />
<FontAwesomeIcon icon={['fab', 'css3']} />
<FontAwesomeIcon icon={['fab', 'css3-alt']} />
<FontAwesomeIcon icon={['fab', 'react']} /> */
}

{
  /* <FontAwesomeIcon key={item} icon={['fab', getFAName(item)]} /> */
}

{
  /* <FontAwesomeIcon key={item} icon={['fab', getFAName(item)]} /> */
}
{
  /* <FontAwesomeIcon key={item} icon={faCoffee} />; */
}
