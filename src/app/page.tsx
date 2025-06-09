'use client';
import Image from 'next/image';
import Link from 'next/link';
import { FiGithub, FiLinkedin, FiMail, FiFileText } from 'react-icons/fi';

export default function Home() {
  return (
    <main className="min-h-screen max-w-5xl mx-auto px-4 pt-16 sm:pt-24 md:pt-32">
      <div className="flex flex-col items-start gap-6 sm:gap-8">
        {/* Profile Section */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 w-full sm:w-auto">
          <div className="relative w-24 h-24 sm:w-28 sm:h-28">
            <Image
              src="https://avatars.githubusercontent.com/tuwaa"
              alt="Joshua Vergel Scalercio"
              fill
              className="rounded-full object-cover"
              sizes="(max-width: 640px) 96px, 112px"
              priority
            />
          </div>
          <div className="text-center sm:text-left">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">Joshua Vergel Scalercio</h1>
            <div className="inline-block bg-[#1a1a1a] px-3 py-1 rounded-md text-sm text-gray-300">
              Frontend.dev
            </div>
          </div>
        </div>

        {/* Bio */}
        <p className="text-base sm:text-lg text-gray-300 max-w-2xl text-center sm:text-left">
          👋 Hi, I'm Joshua, a frontend developer based in Davao City who specializes in React and Next.js.
          I'm here to share learning and projects. Please feel free to read and discover.
        </p>

        {/* Social Links */}
        <div className="flex flex-wrap gap-4 sm:gap-6 justify-center sm:justify-start w-full">
          <a href="https://github.com/tuwaa" className="social-link">
            <FiGithub /> Github
          </a>
          <a href="https://www.linkedin.com/in/joshua-vergel-scalercio-aa32342a9/" className="social-link">
            <FiLinkedin /> Linkedin
          </a>
          <a href="mailto:tuwa2421@gmail.com" className="social-link">
            <FiMail /> Email
          </a>
          <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer" className="social-link">
            <FiFileText /> View Resume
          </a>
        </div>

        {/* Projects Section */}
        <section className="w-full mt-8 sm:mt-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl sm:text-2xl font-semibold">Projects</h2>
            <Link href="/projects" className="view-more">
              view more →
            </Link>
          </div>

          <div className="card">
            <h3 className="text-lg sm:text-xl font-semibold mb-3">Personal Website</h3>
            <p className="text-gray-400 mb-4 text-sm sm:text-base">
              My personal website built with TypeScript, Next.js 14, and Tailwind CSS.
            </p>
            <div className="flex items-center gap-4">
              <div className="flex gap-2 text-sm">
                <span className="text-amber-400">★</span> 10
                <span className="text-gray-500 mx-2">•</span>
                <span>↓</span> 3
              </div>
            </div>
          </div>
        </section>

        {/* Blog Posts Section */}
        <section className="w-full mt-8 sm:mt-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl sm:text-2xl font-semibold">Latest Posts</h2>
            <Link href="/blog" className="view-more">
              view more →
            </Link>
          </div>

          <Link href="/blog" className="block">
            <article className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 text-gray-400 hover:text-white transition-colors duration-200">
              <span className="text-sm">May 17, 2025</span>
              <h3 className="text-base sm:text-lg">My Personal Website: A Journey of Learning and Inspiration</h3>
            </article>
          </Link>
        </section>
      </div>
    </main>
  );
}
