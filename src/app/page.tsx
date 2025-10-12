'use client';

import React, { useEffect, useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence, Transition, Variants } from 'framer-motion';

export default function Home() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onResize = () => setIsMenuOpen(false);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setIsMenuOpen(false);
  };

  // Motion variants
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.08 } },
  };

  const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.6, 
      ease: [0.25, 0.1, 0.25, 1] // cubic bezier equivalent to "easeOut"
    } as Transition,
  },
};

 const subtleFloat: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.8, 
      ease: [0.42, 0, 0.58, 1] // cubic-bezier equivalent to easeInOut
    } as Transition,
  },
};

  // Static content (kept identical to your original text where possible)
  const skills = {
    Frontend: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML5 & CSS3'],
    Backend: ['Node.js', 'Express.js', 'Python', 'MongoDB', 'PostgreSQL'],
    Blockchain: ['Solidity', 'Web3.js', 'Ethereum', 'Smart Contracts'],
    Tools: ['Git & GitHub', 'Docker', 'AWS', 'Vercel', 'Figma'],
  };

  const experiences = [
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
  ];

  const projects = [
    {
      title: 'BhumiDekho.com',
      desc:
        'A modern property listing website that simplifies buying, selling, and renting properties with advanced search, filtering, and clean UI for seamless real estate experiences.',
      tech: ['PHP', 'MySQL', 'JavaScript', 'jQuery'],
      href: 'https://bhumidekho.com/',
    },
    {
      title: 'Baguette Club',
      desc:
        'A stylish showcase website integrating blockchain features for unique digital collectibles. Built using Next.js, Node.js, Firebase, and Ethereum for a seamless decentralized experience.',
      tech: ['Next.js', 'Node.js', 'Firebase', 'Ethereum'],
      href: 'https://www.baguetteclub.wtf/',
    },
  ];

  const achievements = [
    { title: "Smart India Hackathon 2025", desc: "Participated in SIH'25 presenting innovative solutions for real-world challenges." },
    { title: 'Technical Excellence', desc: 'Recognized for outstanding proficiency in full-stack development and blockchain technologies.' },
  ];

  // Small helper to render tech chips
  const TechChip = ({ text }: { text: string }) => (
    <span className="inline-flex items-center justify-center px-3 py-1 rounded-full text-sm bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 border border-blue-100">
      {text}
    </span>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-blue-100 text-gray-900 antialiased">
      {/* NAVBAR */}
      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="fixed inset-x-0 top-0 z-50"
      >
        <div className="backdrop-blur-sm bg-white/70 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 shadow-xl flex items-center justify-center">
                <span className="text-white font-semibold">ST</span>
              </div>
              <div>
                <h1 className="text-lg font-semibold leading-none">Shashwat Tripathi</h1>
                <p className="text-xs text-gray-500">Full Stack Developer</p>
              </div>
            </div>

            <nav className="hidden md:flex items-center gap-8">
              {['about', 'skills', 'experience', 'projects', 'achievements', 'contact'].map((section) => (
                <motion.button
                  key={section}
                  whileHover={{ y: -3 }}
                  onClick={() => scrollToSection(section)}
                  className="relative text-sm text-gray-700 hover:text-blue-600 transition-colors"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                  <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-blue-400 to-indigo-500 group-hover:w-full transition-[width] duration-300" />
                </motion.button>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <a
                href="/Shashwat_Tripathi_CV.pdf"
                download
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-blue-600 text-blue-600 text-sm font-medium hover:bg-blue-50 transition"
              >
                Download CV
              </a>

              <button
                className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
                onClick={() => setIsMenuOpen((s) => !s)}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
              </button>
            </div>
          </div>

          <AnimatePresence>
            {isMenuOpen && (
              <motion.nav
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.18 }}
                className="md:hidden border-t border-gray-200 bg-white"
              >
                <div className="px-6 py-3 flex flex-col gap-2">
                  {['about', 'skills', 'experience', 'projects', 'achievements', 'contact'].map((s) => (
                    <button key={s} onClick={() => scrollToSection(s)} className="w-full text-left px-3 py-2 rounded-md text-gray-700 hover:bg-gray-50">
                      {s.charAt(0).toUpperCase() + s.slice(1)}
                    </button>
                  ))}
                </div>
              </motion.nav>
            )}
          </AnimatePresence>
        </div>
      </motion.header>

      <main className="pt-28">
        {/* HERO */}
        <section className="relative overflow-hidden pt-8 pb-20">
          <div className="absolute -z-10 left-[-8%] top-[-8%] w-[520px] h-[520px] rounded-full bg-gradient-to-br from-blue-200/40 to-indigo-200/30 blur-3xl" />
          <div className="absolute -z-10 right-[-6%] bottom-[-6%] w-[420px] h-[420px] rounded-full bg-gradient-to-br from-indigo-100/30 to-blue-100/20 blur-2xl" />

          <motion.div variants={container} initial="hidden" animate="show" className="max-w-5xl mx-auto px-6 text-center">
            <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight text-gray-900">Shashwat Tripathi</motion.h1>
            <motion.p variants={subtleFloat} className="mt-4 text-xl md:text-2xl text-blue-700 font-medium">Full Stack Developer & Blockchain Enthusiast</motion.p>

            <motion.p variants={fadeUp} className="mt-6 text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Passionate about crafting efficient, scalable web solutions and exploring the future of blockchain. Currently pursuing B.Tech in Computer Science and building real-world digital products.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} onClick={() => scrollToSection('projects')} className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium shadow-xl">View My Work</motion.button>

              <motion.a whileHover={{ scale: 1.03 }} href="/Shashwat_Tripathi_CV.pdf" download className="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-gray-200 text-gray-700 font-medium hover:bg-gray-50">Download CV</motion.a>
            </motion.div>

            {/* subtle action hint */}
            <motion.div variants={subtleFloat} className="mt-6 text-sm text-gray-500">
              <span className="inline-flex items-center gap-2">Scroll to explore ↓</span>
            </motion.div>
          </motion.div>
        </section>

        {/* ABOUT */}
        <motion.section id="about" variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-center mb-10">About Me</motion.h2>
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <motion.div variants={fadeUp} className="space-y-4">
                <h3 className="text-2xl font-semibold mb-2 text-blue-600">Background</h3>
                <p className="text-gray-700 leading-relaxed">
                  I’m a Computer Science undergraduate deeply passionate about full-stack development and blockchain innovation. My journey in technology is fueled by curiosity, creativity, and a commitment to delivering impactful digital solutions.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  I love collaborating on projects that push boundaries and provide real-world value — from scalable web apps to decentralized systems.
                </p>
              </motion.div>

              <motion.div variants={fadeUp} className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl shadow-md border border-gray-100">
                <h4 className="font-semibold text-lg">Bachelor of Technology</h4>
                <p className="text-gray-600">Computer Science & Engineering</p>
                <p className="text-sm text-gray-500 mt-2">Currently Pursuing</p>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* SKILLS */}
        <motion.section id="skills" variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6">
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-center mb-10">Technical Skills</motion.h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {Object.entries(skills).map(([category, list]) => (
                <motion.div key={category} variants={fadeUp} className="bg-white p-5 rounded-2xl shadow-md hover:shadow-xl transition">
                  <h4 className="text-lg font-semibold mb-3 text-blue-600">{category}</h4>
                  <ul className="space-y-2 text-gray-700">
                    {(list as string[]).map((skill) => (
                      <li key={skill} className="flex items-center gap-3">
                        <span className="h-2 w-2 rounded-full bg-gradient-to-r from-blue-400 to-indigo-500 inline-block" />
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* EXPERIENCE */}
        <motion.section id="experience" variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-center mb-8">Experience</motion.h2>
            <div className="space-y-6">
              {experiences.map((exp) => (
                <motion.article key={exp.title} variants={fadeUp} className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl shadow-md hover:shadow-xl transition">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-3">
                    <div>
                      <h3 className="text-lg font-semibold text-blue-600">{exp.title}</h3>
                      <p className="text-gray-600">{exp.company}</p>
                    </div>
                    <div className="text-gray-500 text-sm">{exp.period}</div>
                  </div>
                  <p className="text-gray-700 mt-3">{exp.desc}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </motion.section>

        {/* PROJECTS */}
        <motion.section id="projects" variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6">
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-center mb-10">Featured Projects</motion.h2>
            <div className="grid md:grid-cols-2 gap-6">
              {projects.map((p) => (
                <motion.div key={p.title} variants={fadeUp} className="bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl transition">
                  <h3 className="text-2xl font-semibold mb-3 text-blue-600">{p.title}</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">{p.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-4">{p.tech.map((t) => (<TechChip key={t} text={t} />))}</div>
                  <a href={p.href} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">Visit Project →</a>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* ACHIEVEMENTS */}
        <motion.section id="achievements" variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-center mb-10">Achievements</motion.h2>
            <div className="grid md:grid-cols-2 gap-6">
              {achievements.map((a) => (
                <motion.div key={a.title} variants={fadeUp} className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl shadow-md hover:shadow-xl transition">
                  <h3 className="text-lg font-semibold mb-2 text-blue-600">{a.title}</h3>
                  <p className="text-gray-700">{a.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* CONTACT */}
        <motion.section id="contact" variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="py-16 bg-gray-50">
          <div className="max-w-5xl mx-auto px-6">
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-center mb-10">Get In Touch</motion.h2>
            <div className="grid md:grid-cols-2 gap-12">
              <motion.div variants={fadeUp}>
                <h3 className="text-2xl font-semibold mb-4 text-blue-600">Let’s Connect</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">Open to collaborations, new opportunities, or even just a chat about technology and innovation. Feel free to reach out — I’d love to connect!</p>
                <div className="space-y-4">
                  <p className="flex items-center space-x-3"><span className="text-blue-600 text-lg">📧</span><a href="mailto:shashwatt49@gmail.com" className="text-gray-700 hover:text-blue-600">shashwatt49@gmail.com</a></p>
                  <p className="flex items-center space-x-3"><span className="text-blue-600 text-lg">💼</span><a href="https://www.linkedin.com/in/shashwat-tripathi-41a8a9298" target="_blank" rel="noreferrer" className="text-gray-700 hover:text-blue-600">LinkedIn Profile</a></p>
                  <p className="flex items-center space-x-3"><span className="text-blue-600 text-lg">🐙</span><a href="https://github.com/Shashwat-Tripathi49" target="_blank" rel="noreferrer" className="text-gray-700 hover:text-blue-600">GitHub Profile</a></p>
                </div>
              </motion.div>

              <motion.div variants={fadeUp}>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                    <input id="name" type="text" placeholder="Your Name" className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-200" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input id="email" type="email" placeholder="your.email@example.com" className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-200" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <textarea id="message" rows={4} placeholder="Your message..." className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-200" />
                  </div>
                  <button type="submit" className="w-full inline-flex items-center justify-center px-4 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium hover:scale-[1.02] transition">Send Message</button>
                </form>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* FOOTER */}
        <motion.footer initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="bg-gradient-to-t from-blue-900 via-blue-800 to-blue-700 text-white py-10 mt-8">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h3 className="text-lg font-semibold mb-2">Shashwat Tripathi</h3>
            <p className="text-blue-100 mb-6">Full Stack Developer & Blockchain Enthusiast</p>
            <div className="flex justify-center gap-6">
              <a href="https://linkedin.com/in/shashwat-tripathi" target="_blank" rel="noreferrer" className="text-blue-100 hover:text-white">LinkedIn</a>
              <a href="https://github.com/shashwat-tripathi" target="_blank" rel="noreferrer" className="text-blue-100 hover:text-white">GitHub</a>
              <a href="#" className="text-blue-100 hover:text-white">Twitter</a>
            </div>
            <div className="mt-6 text-sm text-blue-200">© 2025 Shashwat Tripathi. All rights reserved.</div>
          </div>
        </motion.footer>
      </main>
    </div>
  );
}
