'use client';

import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-blue-600">Shashwat Tripathi</h1>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('about')} className="hover:text-blue-600 transition-colors">About</button>
              <button onClick={() => scrollToSection('skills')} className="hover:text-blue-600 transition-colors">Skills</button>
              <button onClick={() => scrollToSection('experience')} className="hover:text-blue-600 transition-colors">Experience</button>
              <button onClick={() => scrollToSection('projects')} className="hover:text-blue-600 transition-colors">Projects</button>
              <button onClick={() => scrollToSection('achievements')} className="hover:text-blue-600 transition-colors">Achievements</button>
              <button onClick={() => scrollToSection('contact')} className="hover:text-blue-600 transition-colors">Contact</button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
              <div className="flex flex-col space-y-2 pt-4">
                <button onClick={() => scrollToSection('about')} className="text-left hover:text-blue-600 transition-colors py-2">About</button>
                <button onClick={() => scrollToSection('skills')} className="text-left hover:text-blue-600 transition-colors py-2">Skills</button>
                <button onClick={() => scrollToSection('experience')} className="text-left hover:text-blue-600 transition-colors py-2">Experience</button>
                <button onClick={() => scrollToSection('projects')} className="text-left hover:text-blue-600 transition-colors py-2">Projects</button>
                <button onClick={() => scrollToSection('achievements')} className="text-left hover:text-blue-600 transition-colors py-2">Achievements</button>
                <button onClick={() => scrollToSection('contact')} className="text-left hover:text-blue-600 transition-colors py-2">Contact</button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Shashwat Tripathi
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Full Stack Developer & Blockchain Enthusiast
            </p>
            <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
              Passionate about creating innovative web solutions and exploring cutting-edge technologies. 
              Currently pursuing B.Tech in Computer Science with hands-on experience in modern development frameworks.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => scrollToSection('projects')}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                View My Work
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors font-medium"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">About Me</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-blue-600">Background</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  I&apos;m a dedicated Computer Science student with a passion for full-stack development and blockchain technology. 
                  My journey in tech has been driven by curiosity and a desire to build solutions that make a difference.
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  With experience in modern web technologies and a strong foundation in both frontend and backend development, 
                  I enjoy tackling complex problems and turning ideas into reality.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-blue-600">Education</h3>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-lg">Bachelor of Technology</h4>
                  <p className="text-gray-600">Computer Science & Engineering</p>
                  <p className="text-gray-500 text-sm mt-2">Currently Pursuing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Technical Skills</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">Frontend</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>React.js</li>
                  <li>Next.js</li>
                  <li>TypeScript</li>
                  <li>Tailwind CSS</li>
                  <li>HTML5 & CSS3</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">Backend</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>Node.js</li>
                  <li>Express.js</li>
                  <li>Python</li>
                  <li>MongoDB</li>
                  <li>PostgreSQL</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">Blockchain</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>Solidity</li>
                  <li>Web3.js</li>
                  <li>Ethereum</li>
                  <li>Smart Contracts</li>
                  <li>DeFi Protocols</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">Tools & Others</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>Git & GitHub</li>
                  <li>Docker</li>
                  <li>AWS</li>
                  <li>Vercel</li>
                  <li>Figma</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Experience</h2>
            <div className="space-y-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-blue-600">Full Stack Developer Intern</h3>
                    <p className="text-gray-600">ByteNexus</p>
                  </div>
                  <span className="text-gray-500 text-sm mt-2 md:mt-0">2024</span>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Developed and maintained web applications using modern technologies. 
                  Collaborated with cross-functional teams to deliver high-quality software solutions.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-blue-600">Technical Intern</h3>
                    <p className="text-gray-600">Vaishnav Technicals</p>
                  </div>
                  <span className="text-gray-500 text-sm mt-2 md:mt-0">2024</span>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Gained hands-on experience in software development and technical problem-solving. 
                  Contributed to various projects and learned industry best practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Featured Projects</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-2xl font-semibold mb-4 text-blue-600">MGNREGA ERP System</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  A comprehensive Enterprise Resource Planning system for MGNREGA scheme management. 
                  Built with modern web technologies to streamline government processes and improve efficiency.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">React</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Node.js</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">MongoDB</span>
                </div>
                <button className="text-blue-600 hover:text-blue-800 font-medium">View Project →</button>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-2xl font-semibold mb-4 text-blue-600">Float Boys NFT</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  An innovative NFT marketplace and collection platform. 
                  Implemented smart contracts and Web3 integration for seamless blockchain interactions.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Solidity</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Web3.js</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">React</span>
                </div>
                <button className="text-blue-600 hover:text-blue-800 font-medium">View Project →</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Achievements</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2 text-blue-600">Smart India Hackathon 2025</h3>
                <p className="text-gray-600">Participant in SIH&apos;25, showcasing innovative solutions for real-world problems.</p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2 text-blue-600">Technical Excellence</h3>
                <p className="text-gray-600">Demonstrated proficiency in full-stack development and blockchain technologies.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Get In Touch</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-blue-600">Let&apos;s Connect</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  I&apos;m always interested in new opportunities and collaborations. 
                  Whether you have a project in mind or just want to chat about technology, feel free to reach out!
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 text-sm">📧</span>
                    </div>
                    <span className="text-gray-600">shashwat.tripathi@email.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 text-sm">💼</span>
                    </div>
                    <span className="text-gray-600">LinkedIn Profile</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 text-sm">🐙</span>
                    </div>
                    <span className="text-gray-600">GitHub Profile</span>
                  </div>
                </div>
              </div>
              
              <div>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <textarea 
                      id="message" 
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your message..."
                    ></textarea>
                  </div>
                  <button 
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">Shashwat Tripathi</h3>
            <p className="text-gray-400 mb-4">Full Stack Developer & Blockchain Enthusiast</p>
            <div className="flex justify-center space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">GitHub</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Twitter</a>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-800 text-gray-400 text-sm">
              <p>&copy; 2024 Shashwat Tripathi. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
