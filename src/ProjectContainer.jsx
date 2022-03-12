import React from 'react';
import './ProjectContainer.css';
import Project from './Project';

import imgCoolMemoryGame from './assets/a-cool-memory-game1280x640.png';
import imgAnnoyingButtonGame from './assets/annoying-button-game1280x640.png';
import imgEZResumeBuilder from './assets/EZ-Resume-Builder1280x640.png';

const projectList = [
  {
    name: 'little shop',
    imgURL: imgCoolMemoryGame,
    description:
      'shop shop shop shop asdf alsdkfj alsdfj alksdfj lajd sfasdflkj asldfjk ',
    tech: ['html', 'css', 'react'],
  },
  {
    name: 'little shop2',
    imgURL: imgAnnoyingButtonGame,
    description: 'shop2 shop2 shop2 shop Lorem ipsum stuff',
    tech: ['html', 'css', 'react'],
  },
  {
    name: 'little shop',
    imgURL: imgEZResumeBuilder,
    description: 'shop shop shop shop',
    tech: ['html', 'css', 'react'],
  },
  {
    name: 'little shop2',
    imgURL: imgCoolMemoryGame,
    description: 'shop2 shop2 shop2 shop',
    tech: ['html', 'css', 'react'],
  },
  {
    name: 'little shop',
    imgURL: imgCoolMemoryGame,
    description: 'shop shop shop shop',
    tech: ['html', 'css', 'react'],
  },
  {
    name: 'little shop2',
    imgURL: imgCoolMemoryGame,
    description: 'shop2 shop2 shop2 shop',
    tech: ['html', 'css', 'react'],
  },
];

function ProjectContainer() {
  return (
    <div className="project-container">
      <div>proj1</div>
      <div>proj2</div>

      {projectList.map((item) => (
        <Project project={item} />
      ))}
    </div>
  );
}

export default ProjectContainer;
