'use client';

import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">Shashwat Tripathi</h1>
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {['about', 'skills', 'experience', 'projects', 'achievements', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="hover:text-blue-600 transition-colors font-medium"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </div>
          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
          </button>
        </div>
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 mt-2 bg-white">
            <div className="flex flex-col space-y-2 py-4 px-4">
              {['about', 'skills', 'experience', 'projects', 'achievements', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="text-left hover:text-blue-600 transition-colors py-2 font-medium"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-28 pb-20 bg-gradient-to-br from-blue-50 to-indigo-100 text-center">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">Shashwat Tripathi</h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-6">
            Full Stack Developer & Blockchain Enthusiast
          </p>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Passionate about crafting efficient, scalable web solutions and exploring the future of blockchain. 
            Currently pursuing B.Tech in Computer Science and building real-world digital products.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection('projects')}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-all font-medium shadow-md"
            >
              View My Work
            </button>
            <a
              href="/Shashwat_Tripathi_CV.pdf"
              download
              className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-all font-medium"
            >
              Download CV
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-blue-600">Background</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                I’m a Computer Science undergraduate deeply passionate about full-stack development and blockchain innovation. 
                My journey in technology is fueled by curiosity, creativity, and a commitment to delivering impactful digital solutions.
              </p>
              <p className="text-gray-700 leading-relaxed">
                I love collaborating on projects that push boundaries and provide real-world value — from scalable web apps to decentralized systems.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-blue-600">Education</h3>
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h4 className="font-semibold text-lg">Bachelor of Technology</h4>
                <p className="text-gray-600">Computer Science & Engineering</p>
                <p className="text-gray-500 text-sm mt-2">Currently Pursuing</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Technical Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Frontend', skills: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML5 & CSS3'] },
              { title: 'Backend', skills: ['Node.js', 'Express.js', 'Python', 'MongoDB', 'PostgreSQL'] },
              { title: 'Blockchain', skills: ['Solidity', 'Web3.js', 'Ethereum', 'Smart Contracts', 'DeFi Protocols'] },
              { title: 'Tools & Others', skills: ['Git & GitHub', 'Docker', 'AWS', 'Vercel', 'Figma'] },
            ].map((category) => (
              <div key={category.title} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">{category.title}</h3>
                <ul className="space-y-2 text-gray-700">
                  {category.skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Experience</h2>
          <div className="space-y-8">
            {[
              {
                title: 'Full Stack Developer Intern',
                company: 'ByteNexus',
                period: '2024',
                desc: 'Developed and maintained production-grade web applications using modern frameworks and collaborated with teams to deliver scalable solutions.',
              },
              {
                title: 'Technical Intern',
                company: 'Vaishnav Technicals',
                period: '2024',
                desc: 'Gained hands-on experience in software development, debugging, and deployment. Contributed to internal tools and automation projects.',
              },
            ].map((exp) => (
              <div key={exp.title} className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-all">
                <div className="flex flex-col md:flex-row justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-semibold text-blue-600">{exp.title}</h3>
                    <p className="text-gray-600">{exp.company}</p>
                  </div>
                  <span className="text-gray-500 text-sm mt-2 md:mt-0">{exp.period}</span>
                </div>
                <p className="text-gray-700 leading-relaxed">{exp.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* BhumiDekho.com */}
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all">
              <h3 className="text-2xl font-semibold mb-4 text-blue-600">BhumiDekho.com</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                A modern property listing website that simplifies buying, selling, and renting properties 
                with advanced search, filtering, and clean UI for seamless real estate experiences.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {['PHP', 'MySQL', 'JavaScript', 'jQuery'].map((tech) => (
                  <span key={tech} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href="https://bhumidekho.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Visit Project →
              </a>
            </div>

            {/* Baguette Club */}
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all">
              <h3 className="text-2xl font-semibold mb-4 text-blue-600">Baguette Club</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                A stylish showcase website integrating blockchain features for unique digital collectibles. 
                Built using Next.js, Node.js, Firebase, and Ethereum for a seamless decentralized experience.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {['Next.js', 'Node.js', 'Firebase', 'Ethereum'].map((tech) => (
                  <span key={tech} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href="https://www.baguetteclub.wtf/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Visit Project →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Achievements</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: 'Smart India Hackathon 2025', desc: "Participated in SIH'25 presenting innovative solutions for real-world challenges." },
              { title: 'Technical Excellence', desc: 'Recognized for outstanding proficiency in full-stack development and blockchain technologies.' },
            ].map((item) => (
              <div key={item.title} className="bg-gradient-to-br from-blue-50 to-indigo-100 p-6 rounded-lg hover:shadow-md transition-all">
                <h3 className="text-xl font-semibold mb-2 text-blue-600">{item.title}</h3>
                <p className="text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Get In Touch</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-blue-600">Let’s Connect</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Open to collaborations, new opportunities, or even just a chat about technology and innovation. 
                Feel free to reach out — I’d love to connect!
              </p>
              <div className="space-y-4">
                <p className="flex items-center space-x-3">
                  <span className="text-blue-600 text-lg">📧</span>
                  <a href="mailto:shashwat.tripathi@email.com" className="text-gray-700 hover:text-blue-600">
                    shashwat.tripathi@email.com
                  </a>
                </p>
                <p className="flex items-center space-x-3">
                  <span className="text-blue-600 text-lg">💼</span>
                  <a href="https://linkedin.com/in/shashwat-tripathi" target="_blank" className="text-gray-700 hover:text-blue-600">
                    LinkedIn Profile
                  </a>
                </p>
                <p className="flex items-center space-x-3">
                  <span className="text-blue-600 text-lg">🐙</span>
                  <a href="https://github.com/shashwat-tripathi" target="_blank" className="text-gray-700 hover:text-blue-600">
                    GitHub Profile
                  </a>
                </p>
              </div>
            </div>

            <div>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    placeholder="Your message..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-all font-medium shadow-md"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h3 className="text-xl font-semibold mb-2">Shashwat Tripathi</h3>
          <p className="text-gray-400 mb-4">Full Stack Developer & Blockchain Enthusiast</p>
          <div className="flex justify-center space-x-6">
            <a href="https://linkedin.com/in/shashwat-tripathi" target="_blank" className="text-gray-400 hover:text-white">
              LinkedIn
            </a>
            <a href="https://github.com/shashwat-tripathi" target="_blank" className="text-gray-400 hover:text-white">
              GitHub
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Twitter
            </a>
          </div>
          <div className="mt-6 border-t border-gray-800 pt-6 text-gray-500 text-sm">
            © 2025 Shashwat Tripathi. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
