'use client';
import { FiClock, FiTag, FiExternalLink } from 'react-icons/fi';

export default function Blog() {
  const blogPosts = [
    {
      title: 'Getting Started with my portfolio-website',
      excerpt: 'In this blog post, I will share my experience and learnings about building my portfolio website.',
      date: 'May 17, 2025',
      readTime: '1 min read',
      tags: ['Developer', 'Portfolio', 'Web Development'],
      url: 'https://medium.com/@tuwa2421/my-portfolio-website-2fe9f9885071',
    },
    {
      title: 'Building a Dark Mode Toggle with React',
      excerpt: 'A comprehensive guide to implementing dark mode in your React applications using Context API and CSS variables.',
      date: 'March 10, 2024',
      readTime: '8 min read',
      tags: ['React', 'CSS', 'Dark Mode'],
      url: 'https://react.dev/blog/dark-mode-with-react',
    },
    {
      title: 'Mastering TypeScript: Best Practices',
      excerpt: 'Explore advanced TypeScript concepts and best practices for building scalable applications.',
      date: 'March 5, 2024',
      readTime: '10 min read',
      tags: ['TypeScript', 'JavaScript', 'Programming'],
      url: 'https://www.typescriptlang.org/docs/handbook/intro.html',
    },
  ];

  return (
    <div className="min-h-screen section-padding py-16 sm:py-20">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8">Blog</h1>
        <div className="space-y-6 sm:space-y-8">
          {blogPosts.map((post, index) => (
            <a 
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              className="block"
            >
              <article 
                className="bg-[#111111] rounded-xl p-4 sm:p-6 transform transition-all duration-300 ease-in-out
                         hover:scale-105 hover:bg-white group cursor-pointer"
              >
                <div className="flex items-start sm:items-center justify-between mb-2 sm:mb-3">
                  <h2 className="text-xl sm:text-2xl font-semibold group-hover:text-black transition-colors duration-300 pr-4">
                    {post.title}
                  </h2>
                  <FiExternalLink className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 text-gray-400 group-hover:text-black transition-colors duration-300" />
                </div>
                <p className="text-sm sm:text-base text-gray-400 mb-3 sm:mb-4 group-hover:text-black transition-colors duration-300">
                  {post.excerpt}
                </p>
                <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-400 group-hover:text-black transition-colors duration-300">
                  <div className="flex items-center gap-1">
                    <FiClock className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span>{post.readTime}</span>
                  </div>
                  <span>•</span>
                  <span>{post.date}</span>
                </div>
                <div className="flex flex-wrap gap-2 mt-3 sm:mt-4">
                  {post.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="flex items-center gap-1 px-2 sm:px-3 py-1 text-xs sm:text-sm rounded-full bg-gray-800 text-gray-300
                               group-hover:bg-gray-200 group-hover:text-black transition-all duration-300"
                    >
                      <FiTag className="w-3 h-3" />
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
} 