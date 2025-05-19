'use client';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

export default function Projects() {
  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'A full-stack e-commerce platform built with Next.js, TypeScript, and Stripe integration.',
      tags: ['Next.js', 'TypeScript', 'Stripe', 'Tailwind CSS'],
      github: 'https://github.com',
      demo: 'https://demo.com',
    },
    {
      title: 'Hirely - Job Marketplace',
      description: 'A modern job marketplace platform connecting job seekers with employers, featuring job listings, applications, and user profiles.',
      tags: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
      github: 'https://github.com/tuwaa',
      demo: 'https://job-marketplace-website.vercel.app/',
    },
    {
      title: 'Portfolio Website',
      description: 'A modern and minimalist portfolio website with dark mode support.',
      tags: ['Next.js', 'Tailwind CSS', 'TypeScript'],
      github: 'https://github.com/tuwaa',
      demo: 'https://joshuascalercio.vercel.app/',
    },
    {
      title: 'Weather Dashboard',
      description: 'A weather dashboard that displays current and forecasted weather data.',
      tags: ['React', 'Weather API', 'Chart.js'],
      github: 'https://github.com',
      demo: 'https://demo.com',
    },
  ];

  return (
    <div className="min-h-screen section-padding py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8">Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-[#111111] rounded-xl p-4 sm:p-6 transform transition-all duration-300 ease-in-out
                       hover:scale-105 hover:bg-white group cursor-pointer"
            >
              <h2 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3 group-hover:text-black transition-colors duration-300">
                {project.title}
              </h2>
              <p className="text-sm sm:text-base text-gray-400 mb-4 group-hover:text-black transition-colors duration-300">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-2 sm:px-3 py-1 text-xs sm:text-sm rounded-full bg-gray-800 text-gray-300
                             group-hover:bg-gray-200 group-hover:text-black transition-all duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-3 sm:gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 sm:gap-2 text-sm sm:text-base text-gray-400 group-hover:text-black transition-colors duration-300"
                >
                  <FiGithub className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>Code</span>
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 sm:gap-2 text-sm sm:text-base text-gray-400 group-hover:text-black transition-colors duration-300"
                >
                  <FiExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>Demo</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 