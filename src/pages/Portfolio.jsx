import React, { useState } from 'react';
import project1 from '../assets/ComingSoon.png';
import project2 from '../assets/ComingSoon.png';
import project3 from '../assets/ComingSoon.png';
import { AiFillGithub } from 'react-icons/ai';

const projects = [
  {
    img: project1,
    title: 'Project #1',
    description: 'MERN Stack application that lets users buy and sell their products in an auction. (In development - You can register, login, logout, post and bid)',
    links: {
      site: '#',
      github: 'https://github.com/TPereira3713/LeilaoApp'
    }
  },
  {
    img: project2,
    title: 'Project #2',
    description: 'Coming Soon',
    links: {
      site: '#',
      github: '#'
    }
  },
  {
    img: project3,
    title: 'Project #3',
    description: 'Coming Soon',
    links: {
      site: '#',
      github: '#'
    }
  }
];

const Portfolio = () => {
  const [currentProject, setCurrentProject] = useState(0);

  const current = projects[currentProject];

  return (
    <div className='relative max-w-[800px] mx-auto p-6 md:my-20 flex flex-col md:flex-row' id='experience'>
      <div className='p-6 w-full border-2 max-w-[600px] glass'>
        <div className='w-full h-80 '>
          <img src={current.img} alt={current.title} className='w-full h-full object-cover rounded-lg mb-4 ' />
        </div>
        <p className='text-gray-200 my-4'>{current.description}</p>
        <div className='flex space-x-4'>
          <a href={current.links.site} className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700 transition duration-300'>View Site</a>
          <a href={current.links.github} className='px-4 py-2 bg-slate-800 text-gray-200 text-2xl rounded-lg hover:bg-gray-600 transition duration-300'><AiFillGithub /></a>
        </div>
      </div>

      <ul className='ml-6 flex flex-row md:flex-col gap-6 flex-wrap justify-center mt-4 md:gap-1'>
        {projects.map((project, index) => (
          <li
            key={index}
            onClick={() => setCurrentProject(index)}
            className={`cursor-pointer text-gray-300 bg-slate-700 rounded-lg p-2 max-w-[100px] hover:bg-slate-800 transition duration-300 ${currentProject === index ? 'bg-slate-900' : ''}`}
          >
            {project.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Portfolio;
