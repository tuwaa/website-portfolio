'use client';
import Link from 'next/link';
import { FiGithub } from 'react-icons/fi';

export default function Navbar() {
  return (
    <nav className="fixed w-full top-0 z-50 bg-black/50 backdrop-blur-md">
      <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold">J</Link>
        
        <div className="flex items-center space-x-2">
          <Link href="/blog" className="nav-item">Blog</Link>
          <Link href="/projects" className="nav-item">Projects</Link>
          <Link href="/about" className="nav-item">About</Link>
          <a
            href="https://github.com/tuwaa"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1 nav-item"
          >
            <FiGithub className="w-5 h-5" />
            <span>10</span>
          </a>
        </div>
      </div>
    </nav>
  );
} 