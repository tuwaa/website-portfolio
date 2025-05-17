'use client';
import { FiCode, FiLayout, FiDatabase, FiServer } from 'react-icons/fi';

export default function About() {
  const skills = [
    {
      icon: FiCode,
      title: 'Frontend Development',
      description: 'React, Next.js, TypeScript, Tailwind CSS',
    },
    {
      icon: FiServer,
      title: 'Backend Development',
      description: 'Node.js, Express, Python, Django',
    },
    {
      icon: FiDatabase,
      title: 'Database',
      description: 'PostgreSQL, MongoDB, Redis',
    },
    {
      icon: FiLayout,
      title: 'UI/UX Design',
      description: 'Figma, Adobe XD, Responsive Design',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* About Section */}
      <section className="py-16 sm:py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8">About Me</h1>
          <div className="bg-[#111111] rounded-xl p-4 sm:p-6 md:p-8 transform transition-all duration-300 
                         hover:scale-[1.02] hover:bg-[#1a1a1a]">
            <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-4 sm:mb-6">
              I'm a passionate full-stack developer with a keen eye for design and a love for creating
              seamless user experiences. With several years of experience in web development, I
              specialize in building modern, responsive, and scalable applications.
            </p>
            <p className="text-sm sm:text-base md:text-lg text-gray-300">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source
              projects, or sharing my knowledge through technical writing and mentoring.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 sm:py-20 px-4 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-8 sm:mb-12 text-center">
            Skills & Expertise
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {skills.map((skill, index) => (
              <div 
                key={index} 
                className="bg-[#111111] rounded-xl p-4 sm:p-6 transform transition-all duration-300 ease-in-out
                         hover:scale-105 hover:bg-white group cursor-pointer"
              >
                <skill.icon className="w-6 h-6 sm:w-8 sm:h-8 mb-3 sm:mb-4 text-gray-400 
                                     group-hover:text-black transition-colors duration-300" />
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 
                             group-hover:text-black transition-colors duration-300">
                  {skill.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-400 
                             group-hover:text-black transition-colors duration-300">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 sm:py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-8 text-center">Experience</h2>
          <div className="bg-[#111111] rounded-xl p-4 sm:p-6 md:p-8">
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-0 top-0 h-full w-0.5 bg-gray-800"></div>

              {/* Timeline Items */}
              <div className="space-y-12">
                {/* Product Owner & QA Analyst */}
                <div className="relative pl-8">
                  {/* Timeline Point */}
                  <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-gray-800 border-2 border-white"></div>
                  <div className="bg-[#1a1a1a] rounded-lg p-4 transform transition-all duration-300 hover:scale-[1.02]">
                    <h3 className="text-lg sm:text-xl font-semibold mb-2">Product Owner & QA Analyst</h3>
                    <p className="text-gray-400 text-sm sm:text-base mb-4">Jairosoft • 2025 - Present</p>
                    <ul className="list-disc list-inside text-gray-300 text-sm sm:text-base space-y-2">
                      <li>Led product development initiatives and defined product roadmap</li>
                      <li>Conducted thorough quality assurance testing and documented software defects</li>
                      <li>Collaborated with development team to ensure product quality and user satisfaction</li>
                    </ul>
                  </div>
                </div>

                {/* Social Media Manager */}
                <div className="relative pl-8">
                  {/* Timeline Point */}
                  <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-gray-800 border-2 border-white"></div>
                  <div className="bg-[#1a1a1a] rounded-lg p-4 transform transition-all duration-300 hover:scale-[1.02]">
                    <h3 className="text-lg sm:text-xl font-semibold mb-2">Social Media Manager & Marketing Assistant</h3>
                    <p className="text-gray-400 text-sm sm:text-base mb-4">Indeed • 2021 - 2022</p>
                    <ul className="list-disc list-inside text-gray-300 text-sm sm:text-base space-y-2">
                      <li>Managed social media accounts and created engaging content strategies</li>
                      <li>Analyzed social media metrics and prepared performance reports</li>
                      <li>Assisted in developing and implementing marketing campaigns</li>
                    </ul>
                  </div>
                </div>

                {/* Virtual Assistant */}
                <div className="relative pl-8">
                  {/* Timeline Point */}
                  <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-gray-800 border-2 border-white"></div>
                  <div className="bg-[#1a1a1a] rounded-lg p-4 transform transition-all duration-300 hover:scale-[1.02]">
                    <h3 className="text-lg sm:text-xl font-semibold mb-2">Virtual Assistant</h3>
                    <p className="text-gray-400 text-sm sm:text-base mb-4">Upwork • 2020 - 2021</p>
                    <ul className="list-disc list-inside text-gray-300 text-sm sm:text-base space-y-2">
                      <li>Provided administrative support and managed client schedules</li>
                      <li>Handled email correspondence and calendar management</li>
                      <li>Assisted with data entry and document organization</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 