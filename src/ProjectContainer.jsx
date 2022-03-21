import React from 'react';
import './ProjectContainer.css';
import Project from './Project';

import imgCoolMemoryGame from './assets/a-cool-memory-game1280x640.png';
import imgAnnoyingButtonGame from './assets/annoying-button-game1280x640.png';
import imgAdventCalendar from './assets/advent-calendar.png';
import imgAprilFools from './assets/april-fools-21.png';
import imgEZResumeBuilder from './assets/EZ-Resume-Builder1280x640.png';

const projectList = [
  {
    name: 'Memory Game',
    imgURL: imgCoolMemoryGame,
    description:
      'A memory game where the cards get shuffled every time. Made with React hooks.',
    tech: ['react', 'javascript', 'html', 'css', 'lol'],
  },
  {
    name: 'Advent Calendar',
    imgURL: imgAdventCalendar,
    description: 'An advent calendar of silly website links.',
    tech: ['git', 'sass', 'react', 'javascript', 'html', 'css'],
  },
  {
    name: 'Annoying Button Game',
    imgURL: imgAnnoyingButtonGame,
    description: 'Terrible puns about april fools.',
    tech: ['html', 'css', 'javascript'],
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
        <Project key={item.name} project={item} />
      ))}
    </div>
  );
}

export default ProjectContainer;
