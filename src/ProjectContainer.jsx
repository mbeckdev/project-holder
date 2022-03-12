import React from 'react';
import './ProjectContainer.css';
import Project from './Project';

const projectList = [
  {
    name: 'little shop',
    imgURL: './assets/little-shop-img.png',
    description: 'shop shop shop shop',
    tech: ['html', 'css', 'react'],
  },
  {
    name: 'little shop2',
    imgURL: './assets/little-shop-img2.png',
    description: 'shop2 shop2 shop2 shop',
    tech: ['html', 'css', 'react'],
  },
  {
    name: 'little shop',
    imgURL: './assets/little-shop-img.png',
    description: 'shop shop shop shop',
    tech: ['html', 'css', 'react'],
  },
  {
    name: 'little shop2',
    imgURL: './assets/little-shop-img2.png',
    description: 'shop2 shop2 shop2 shop',
    tech: ['html', 'css', 'react'],
  },
  {
    name: 'little shop',
    imgURL: './assets/little-shop-img.png',
    description: 'shop shop shop shop',
    tech: ['html', 'css', 'react'],
  },
  {
    name: 'little shop2',
    imgURL: './assets/little-shop-img2.png',
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
