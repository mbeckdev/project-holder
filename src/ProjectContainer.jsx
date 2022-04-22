import React from 'react';
import './ProjectContainer.css';
import Project from './Project';

import imgLittleShop from './assets/mini-jungle-1280x640.png';
// import imgLittleShop from './assets/mini-jungle-alt-1280x640.png';
import imgCoolMemoryGame from './assets/a-cool-memory-game1280x640.png';
import imgAnnoyingButtonGame from './assets/annoying-button-game1280x640.png';
import imgAdventCalendar from './assets/advent-calendar.png';
import imgAprilFools from './assets/april-fools-21.png';
import imgEZResumeBuilder from './assets/EZ-Resume-Builder1280x640.png';
import imgTinyCrudClassComponents from './assets/tiny-crud-class-components-1280x640.png';
import imgTinyCrudFunctionalComponents from './assets/tiny-crud-functional-components-1280x640.png';
import imgMnemonic from './assets/mnemonic-1280x640.png';
import imgSassRestaurant from './assets/sass-restaurant-1280x640.png';
import imgBattleship from './assets/battleship-1280x640.png';
import imgToDoList from './assets/to-do-list-github.png';
import imgMonsterRolodex from './assets/monsters-rolodex-1280x640.png';
import imgWordChomp from './assets/word-chomp-1280x640.png';
// import imgWordChomp from './assets/word-chomp-alt-1280x640.png';
import imgCanvasShenanigans from './assets/canvas-shenanigans-1280x640.png';
import imgRestaurantPage from './assets/restaurant-page.png';
import imgTicTacToe from './assets/tic-tac-toe.jpg';

const projectList = [
  {
    name: 'Memory Game',
    imgURL: imgCoolMemoryGame,
    description:
      'A memory game where the cards get shuffled every time. Made with React hooks.',
    tech: ['react', 'javascript', 'html', 'css', 'lol'],
    demoLink: 'https://mbeckdev.github.io/memory-card/',
    codeLink: 'https://github.com/mbeckdev/memory-card',
  },
  {
    name: 'little shop',
    imgURL: imgLittleShop,
    description: 'shop shop shop shop',
    tech: ['html', 'css', 'react'],
    demoLink: 'https://mbeckdev.github.io/little-shop/',
    codeLink: 'https://github.com/mbeckdev/little-shop',
  },
  {
    name: 'Advent Calendar',
    imgURL: imgAdventCalendar,
    description: 'An advent calendar of silly website links.',
    tech: ['git', 'sass', 'react', 'javascript', 'html', 'css'],
    demoLink: 'https://mbeckdev.github.io/advent-calendar/',
    codeLink: 'https://github.com/mbeckdev/advent-calendar',
  },
  {
    name: 'CV/Resume Project',
    imgURL: imgEZResumeBuilder,
    description: 'An advent calendar of silly website links.',
    tech: ['git', 'sass', 'react', 'javascript', 'html', 'css'],
    demoLink: 'https://mbeckdev.github.io/cv-project/',
    codeLink: 'https://github.com/mbeckdev/cv-project',
  },
  {
    name: 'Annoying Button Game',
    imgURL: imgAnnoyingButtonGame,
    description: 'Terrible puns about april fools.',
    tech: ['html', 'css', 'javascript'],
    demoLink: 'https://mbeckdev.github.io/javascript-mini-projects/',
    codeLink:
      'https://github.com/thinkswell/javascript-mini-projects/tree/master/AnnoyingButtonGame/MBECKDEV',
  },
  {
    name: 'Tiny CRUD Class Components',
    imgURL: imgTinyCrudClassComponents,
    description:
      'A tiny CRUD task list - code to help remember state and props with class components in React. CRUD stands for Create, Read, Update, and Delete',
    tech: ['react', 'html', 'css'],
    demoLink: 'https://mbeckdev.github.io/tiny-crud-class-components/',
    codeLink: 'https://github.com/mbeckdev/tiny-crud-class-components',
  },
  {
    name: 'Tiny CRUD Functional Components',
    imgURL: imgTinyCrudFunctionalComponents,
    description:
      'A tiny CRUD task list - code to help remember Hooks with functional components in React. CRUD stands for Create, Read, Update, and Delete',
    tech: ['react', 'html', 'css'],
    demoLink: 'https://mbeckdev.github.io/tiny-crud-functional-components/',
    codeLink: 'https://github.com/mbeckdev/tiny-crud-functional-components',
  },
  {
    name: 'A Mnemonic Device',
    imgURL: imgMnemonic,
    description:
      'Need help remembering a few letters? Enter your letters and click the button. Bam! A sentence appears with every word starting with one of your letters. If you remember that sentence, you can remember your word easier.',
    tech: ['javascript', 'html', 'css'],
    demoLink: 'https://mbeckdev.github.io/mnemonic/',
    codeLink: 'https://github.com/mbeckdev/mnemonic',
  },
  {
    name: 'SASS Restaurant',
    imgURL: imgSassRestaurant,
    description: 'The front page of an italian restaurant using SASS',
    tech: ['html', 'sass'],
    demoLink: 'https://mbeckdev.github.io/sass-restaurant/',
    codeLink: 'https://github.com/mbeckdev/sass-restaurant',
  },
  {
    name: 'Battleship',
    imgURL: imgBattleship,
    description:
      'A battleship game against a computer that uses Jest to test the logic of the code before starting to code the visual dom parts. Jest, Webpack, HTML, CSS, JavaScript',
    tech: ['javascript', 'html', 'css'],
    demoLink: 'https://mbeckdev.github.io/battleship/',
    codeLink: 'https://github.com/mbeckdev/battleship',
  },
  {
    name: 'To Do List',
    imgURL: imgToDoList,
    description:
      'A CRUD project that saves your todo list that uses webpack, localStorage, HTML, CSS, and JavaScript, and a third party library "date-fns", babel, and tried out eslint in my editor.',
    tech: ['javascript', 'css', 'html'],
    demoLink: 'https://mbeckdev.github.io/to-do-list/',
    codeLink: 'https://github.com/mbeckdev/to-do-list',
  },
  {
    name: 'Monster Rolodex',
    imgURL: imgMonsterRolodex,
    description:
      "Search through a list of names to find the person/monster you're looking for. Uses data fetched from APIs",
    tech: ['react', 'html', 'css', 'javascript'],
    demoLink: 'https://mbeckdev.github.io/monsters-rolodex/',
    codeLink: 'https://github.com/mbeckdev/monsters-rolodex',
  },
  {
    name: 'Word Chomp',
    imgURL: imgWordChomp,
    description:
      'an HTML5 spelling game for kids. Made with two other people for the first Odin Project Gamejam The link takes you to itch.io where you can play it.',
    tech: ['html', 'css', 'javascript'],
    demoLink: 'https://mbeckdev.itch.io/word-chomp',
    codeLink: 'https://github.com/mbeckdev/spell-man',
  },
  {
    name: 'Canvas Shenanigans',
    imgURL: imgCanvasShenanigans,
    description:
      "What's possible in canvas? I made a few projects using canvas that could go behind a header on a site someday.",
    tech: ['html', 'css', 'javascript'],
    demoLink: 'https://mbeckdev.github.io/canvas-shenanigans/',
    codeLink: 'https://github.com/mbeckdev/canvas-shenanigans',
  },
  {
    name: 'Kabob Restaurant',
    imgURL: imgRestaurantPage,
    description: 'A kabob restaurant made using webpack',
    tech: ['html', 'css', 'javascript'],
    demoLink: 'https://mbeckdev.github.io/restaurant-page/',
    codeLink: 'https://github.com/mbeckdev/restaurant-page',
  },
  {
    name: 'Tic-Tac-Toe',
    imgURL: imgTicTacToe,
    description: 'Play against a computer or human. Factory functions!',
    tech: ['javascript', 'html', 'css'],
    demoLink: 'https://mbeckdev.github.io/tic-tac-toe/',
    codeLink: 'https://github.com/mbeckdev/tic-tac-toe',
  },
  {
    name: 'little shop2',
    imgURL: imgCoolMemoryGame,
    description: 'shop2 shop2 shop2 shop',
    tech: ['html', 'css', 'react'],
    demoLink: '',
    codeLink: '',
  },
];

function ProjectContainer() {
  return (
    <div className="project-container">
      {projectList.map((item) => (
        <Project key={item.name} project={item} />
      ))}
    </div>
  );
}

export default ProjectContainer;
