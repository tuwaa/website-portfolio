'use client';
import Image from 'next/image';

interface Certificate {
  title: string;
  issuer: string;
  date: string;
  image: string;
  url?: string;
}

export default function Certificates() {
  const certificates: Certificate[] = [
    {
      title: 'Software Engineer Intern',
      issuer: 'HackerRank',
      date: 'June 2025',
      image: '/certificates/Cert1.png',
      url: 'https://www.hackerrank.com/certificates/753987f95b79'
    },
    {
      title: 'Php Course',
      issuer: 'Udemy',
      date: 'May 2025',
      image: '/certificates/Cert2.png',
      url: 'https://www.udemy.com/certificate/UC-14922897-5e6a-4b13-8578-ebd31a0ed937/'
    },

    {
      title: 'Full Stack Development Course',
      issuer: 'Udemy',
      date: 'March 2024',
      image: '/certificates/Cert3.png',
      url: 'https://www.udemy.com/certificate/UC-88e73c38-9d43-4758-8c3e-b7800499047c/'
    },

    {
      title: 'Website Hosting using Wordpress',
      issuer: 'Coursera',
      date: 'March 2024',
      image: '/certificates/Cert4.png',
      url: 'https://www.coursera.org/account/accomplishments/verify/X4YCVEX9PZTX?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=project'
    },

    {
      title: 'Responsive Web Design',
      issuer: 'FreeCodeCamp',
      date: 'July 2023',
      image: '/certificates/Cert5.png',
      url: 'https://www.freecodecamp.org/certification/fccfb30b681-89d2-4bcf-a9c6-f952fb218f96/responsive-web-design'
    }
  ];

  return (
    <div className="min-h-screen section-padding py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8">Certificates</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {certificates.length === 0 ? (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-400">Certificates will be displayed here soon.</p>
            </div>
          ) : (
            certificates.map((certificate, index) => (
              <div
                key={index}
                className="bg-[#111111] rounded-xl p-4 sm:p-6 transform transition-all duration-300 ease-in-out
                         hover:scale-105 hover:bg-white group cursor-pointer"
              >
                <div className="relative w-full h-48 mb-4">
                  <Image
                    src={certificate.image}
                    alt={certificate.title}
                    fill
                    className="rounded-lg object-cover"
                  />
                </div>
                <h2 className="text-xl font-semibold mb-2 group-hover:text-black transition-colors duration-300">
                  {certificate.title}
                </h2>
                <p className="text-gray-400 mb-2 group-hover:text-black transition-colors duration-300">
                  {certificate.issuer}
                </p>
                <p className="text-sm text-gray-500 group-hover:text-black transition-colors duration-300">
                  {certificate.date}
                </p>
                {certificate.url && (
                  <a
                    href={certificate.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block text-sm text-blue-400 hover:text-blue-300"
                  >
                    View Certificate →
                  </a>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
} 