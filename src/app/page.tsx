'use client';

import React, { useEffect, useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence, Transition, Variants } from 'framer-motion';
import BackgroundOrbs from '@/components/BackgroundOrbs';

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
    'Blockchain & Web3': ['Web3 Fundamentals', 'Smart Contract Basics', 'Ethereum Concepts', 'Cryptocurrency Understanding'],
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
    <span className="inline-flex items-center justify-center px-3 py-1 rounded-full text-sm bg-blue-500/10 text-blue-300 border border-blue-500/20 backdrop-blur-sm">
      {text}
    </span>
  );

  return (
    <div className="min-h-screen text-gray-100 antialiased selection:bg-cyan-500/30">
      <BackgroundOrbs />
      {/* NAVBAR */}
      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="fixed inset-x-0 top-0 z-50"
      >
        <div className="backdrop-blur-md bg-black/30 border-b border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 shadow-lg shadow-blue-500/20 flex items-center justify-center">
                <span className="text-white font-bold text-lg">ST</span>
              </div>
              <div>
                <h1 className="text-lg font-bold leading-none tracking-tight">Shashwat Tripathi</h1>
                <p className="text-xs text-gray-400">Full Stack Developer</p>
              </div>
            </div>

            <nav className="hidden md:flex items-center gap-8">
              {['about', 'skills', 'experience', 'projects', 'achievements', 'contact'].map((section) => (
                <motion.button
                  key={section}
                  whileHover={{ y: -2 }}
                  onClick={() => scrollToSection(section)}
                  className="relative text-sm font-medium text-gray-300 hover:text-white transition-colors"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                  <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-[width] duration-300" />
                </motion.button>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <a
                href="/shashwat.resume.pdf"
                download
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-white/10 bg-white/5 text-gray-200 text-sm font-medium hover:bg-white/10 hover:border-white/20 transition-all backdrop-blur-sm"
              >
                Download CV
              </a>

              <button
                className="md:hidden p-2 rounded-md text-gray-300 hover:bg-white/10"
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
                className="md:hidden border-t border-white/10 bg-black/90 backdrop-blur-xl"
              >
                <div className="px-6 py-3 flex flex-col gap-2">
                  {['about', 'skills', 'experience', 'projects', 'achievements', 'contact'].map((s) => (
                    <button key={s} onClick={() => scrollToSection(s)} className="w-full text-left px-3 py-2 rounded-md text-gray-300 hover:bg-white/10">
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
        <section className="relative pt-12 pb-24 md:pt-20 md:pb-32">
          {/* Decorative glowing gradient behind text */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

          <motion.div variants={container} initial="hidden" animate="show" className="relative max-w-5xl mx-auto px-6 text-center z-10">
            <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight text-white mb-6">
              Shashwat Tripathi
            </motion.h1>
            <motion.p variants={subtleFloat} className="text-xl md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 font-medium mb-8">
              Full Stack Developer
            </motion.p>

            <motion.p variants={fadeUp} className="text-gray-400 max-w-2xl mx-auto leading-relaxed text-lg mb-10">
              Passionate about crafting efficient, scalable web solutions. Currently pursuing B.Tech in Computer Science and building real-world digital products.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => scrollToSection('projects')} className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold shadow-lg shadow-blue-900/20 hover:shadow-cyan-500/20 transition-all">
                View My Work
              </motion.button>

              <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="/shashwat.resume.pdf" download className="inline-flex items-center justify-center px-8 py-4 rounded-xl border border-white/10 bg-white/5 text-white font-medium hover:bg-white/10 backdrop-blur-sm transition-all">
                Download CV
              </motion.a>
            </motion.div>

            {/* subtle action hint */}
            <motion.div variants={subtleFloat} className="mt-16 text-sm text-gray-500 animate-pulse">
              <span className="inline-flex items-center gap-2">Scroll to explore ↓</span>
            </motion.div>
          </motion.div>
        </section>

        {/* ABOUT */}
        <motion.section id="about" variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="py-20 relative">
          <div className="max-w-6xl mx-auto px-6">
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">About Me</motion.h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeUp} className="space-y-6">
                <h3 className="text-2xl font-semibold text-cyan-400">Background</h3>
                <p className="text-gray-300 leading-relaxed text-lg">
                  I’m a Computer Science undergraduate deeply passionate about full-stack development. My journey in technology is fueled by curiosity, creativity, and a commitment to delivering impactful digital solutions.
                </p>
                <p className="text-gray-300 leading-relaxed text-lg">
                  I love collaborating on projects that push boundaries and provide real-world value — from scalable web apps to seamless user experiences.
                </p>
              </motion.div>

              <motion.div variants={fadeUp} className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 shadow-xl">
                <h4 className="font-semibold text-xl text-white mb-2">Bachelor of Technology</h4>
                <p className="text-cyan-400">Computer Science & Engineering</p>
                <p className="text-sm text-gray-500 mt-4">Currently Pursuing</p>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* SKILLS */}
        <motion.section id="skills" variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="py-20 bg-black/20">
          <div className="max-w-6xl mx-auto px-6">
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">Technical Skills</motion.h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(skills).map(([category, list]) => (
                <motion.div key={category} variants={fadeUp} className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/5 hover:border-cyan-500/30 transition-colors shadow-lg hover:shadow-cyan-500/10">
                  <h4 className="text-xl font-semibold mb-6 text-cyan-400">{category}</h4>
                  <ul className="space-y-3 text-gray-300">
                    {(list as string[]).map((skill) => (
                      <li key={skill} className="flex items-center gap-3">
                        <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.5)]" />
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
        <motion.section id="experience" variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="py-20">
          <div className="max-w-4xl mx-auto px-6">
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">Experience</motion.h2>
            <div className="space-y-6">
              {experiences.map((exp) => (
                <motion.article key={exp.title} variants={fadeUp} className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 hover:border-cyan-500/30 transition-all group">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-3 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">{exp.title}</h3>
                      <p className="text-gray-400 font-medium">{exp.company}</p>
                    </div>
                    <div className="text-gray-500 text-sm font-mono bg-white/5 px-3 py-1 rounded-full">{exp.period}</div>
                  </div>
                  <p className="text-gray-300 leading-relaxed">{exp.desc}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </motion.section>

        {/* PROJECTS */}
        <motion.section id="projects" variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="py-20 bg-black/20">
          <div className="max-w-6xl mx-auto px-6">
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">Featured Projects</motion.h2>
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((p) => (
                <motion.div key={p.title} variants={fadeUp} className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 hover:border-cyan-500/30 transition-all hover:-translate-y-1 group">
                  <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors">{p.title}</h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">{p.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-6">{p.tech.map((t) => (<TechChip key={t} text={t} />))}</div>
                  <a href={p.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium transition-colors">
                    Visit Project <span className="text-lg">→</span>
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* ACHIEVEMENTS */}
        <motion.section id="achievements" variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="py-20">
          <div className="max-w-5xl mx-auto px-6">
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">Achievements</motion.h2>
            <div className="grid md:grid-cols-2 gap-6">
              {achievements.map((a) => (
                <motion.div key={a.title} variants={fadeUp} className="bg-gradient-to-br from-white/5 to-white/0 p-8 rounded-3xl border border-white/10 hover:border-cyan-500/30 transition-all">
                  <h3 className="text-lg font-bold mb-3 text-cyan-400">{a.title}</h3>
                  <p className="text-gray-300">{a.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* CONTACT */}
        <motion.section id="contact" variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="py-24 bg-black/20">
          <div className="max-w-5xl mx-auto px-6">
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">Get In Touch</motion.h2>
            <div className="grid md:grid-cols-2 gap-12">
              <motion.div variants={fadeUp}>
                <h3 className="text-2xl font-semibold mb-4 text-cyan-400">Let’s Connect</h3>
                <p className="text-gray-300 mb-8 leading-relaxed">Open to collaborations, new opportunities, or even just a chat about technology. Feel free to reach out — I’d love to connect!</p>
                <div className="space-y-6">
                  <p className="flex items-center space-x-4"><span className="text-cyan-400 text-2xl">📧</span><a href="mailto:shashwatt49@gmail.com" className="text-gray-300 hover:text-cyan-400 transition-colors">shashwatt49@gmail.com</a></p>
                  <p className="flex items-center space-x-4"><span className="text-cyan-400 text-2xl">💼</span><a href="https://www.linkedin.com/in/shashwat-tripathi-41a8a9298" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-cyan-400 transition-colors">LinkedIn Profile</a></p>
                  <p className="flex items-center space-x-4"><span className="text-cyan-400 text-2xl">🐙</span><a href="https://github.com/Shashwat-Tripathi49" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-cyan-400 transition-colors">GitHub Profile</a></p>
                </div>
              </motion.div>

              <motion.div variants={fadeUp}>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                    <input id="name" type="text" placeholder="Your Name" className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white rounded-xl focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all placeholder:text-gray-600" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                    <input id="email" type="email" placeholder="your.email@example.com" className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white rounded-xl focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all placeholder:text-gray-600" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                    <textarea id="message" rows={4} placeholder="Your message..." className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white rounded-xl focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all placeholder:text-gray-600" />
                  </div>
                  <button type="submit" className="w-full inline-flex items-center justify-center px-6 py-4 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-medium hover:shadow-lg hover:shadow-cyan-500/20 active:scale-[0.98] transition-all">Send Message</button>
                </form>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* FOOTER */}
        <motion.footer initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="border-t border-white/10 bg-black/40 text-white py-12 mt-12 backdrop-blur-lg">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h3 className="text-xl font-bold mb-2">Shashwat Tripathi</h3>
            <p className="text-gray-400 mb-8">Full Stack Developer</p>
            <div className="flex justify-center gap-8">
              <a href="https://linkedin.com/in/shashwat-tripathi" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">LinkedIn</a>
              <a href="https://github.com/shashwat-tripathi" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">GitHub</a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Twitter</a>
            </div>
            <div className="mt-8 text-sm text-gray-600">© 2025 Shashwat Tripathi. All rights reserved.</div>
          </div>
        </motion.footer>
      </main>
    </div>
  );
}
