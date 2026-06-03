'use client';

import React, { useEffect, useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence, Variants, Transition } from 'framer-motion';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const onResize = () => setIsMenuOpen(false);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    const sections = ['about', 'skills', 'experience', 'projects', 'achievements', 'contact'];
    const observers: IntersectionObserver[] = [];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { threshold: 0.3 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setIsMenuOpen(false);
  };

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } as Transition,
    },
  };

  const container: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const stagger: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.07 } },
  };

  const navSections = ['about', 'skills', 'experience', 'projects', 'achievements', 'contact'];

  // ── DATA ──
  const skills = {
    '⚛️  Frontend': ['React.js', 'Next.js', 'HTML5 & CSS3', 'Tailwind CSS', 'jQuery'],
    '🖥️  Backend': ['Node.js', 'Express.js', 'REST APIs', 'Redis', 'PHP'],
    '🗄️  Databases': ['MongoDB', 'MySQL', 'Firebase', 'React Query'],
    '🛠️  Tools & AI': ['Git & GitHub', 'Basic Linux', 'Web3.js & IPFS', 'LangChain', 'OpenAI API'],
  };

  const experiences = [
    {
      title: 'Full Stack Developer Intern',
      company: 'Skyably Solutions',
      period: 'Apr 2025 – Jun 2025',
      type: 'Remote',
      color: 'from-blue-500 to-indigo-500',
      initials: 'SS',
      bullets: [
        'Integrated multiple AI agents (OpenAI API, LangChain) to automate complex data extraction workflows, reducing manual processing time by 40%.',
        'Optimized RESTful backend APIs and database queries in Node.js, scaling infrastructure to handle live production traffic and improving system response time by 25%.',
        'Collaborated in an Agile team using Git version control, branch management, and code reviews to maintain code quality.',
      ],
    },
    {
      title: 'Junior Web Developer Intern',
      company: 'ByteNexus',
      period: 'Oct 2024 – Nov 2024',
      type: 'Remote',
      color: 'from-violet-500 to-purple-500',
      initials: 'BN',
      bullets: [
        'Engineered responsive and cross-browser compatible UIs using React.js, Tailwind CSS, and HTML5/CSS3, improving mobile user engagement.',
        'Identified and resolved 30+ UI bugs and performance bottlenecks, optimizing React bundle sizes and rendering performance for smoother transitions.',
      ],
    },
  ];

  const projects = [
    {
      title: 'SuperG.in',
      subtitle: 'E-commerce Platform',
      desc: 'High-performance full-featured e-commerce platform using Next.js App Router and React Query. Implemented secure auth, dynamic cart & checkout, and Redis caching — reducing API latency by 35%.',
      tech: ['Next.js', 'Node.js', 'Redis', 'React Query'],
      href: 'https://superg.in/',
      accent: 'from-blue-500 to-cyan-400',
      live: true,
    },
    {
      title: 'BhumiDekho',
      subtitle: 'Property Listing Platform',
      desc: 'Dynamic real-estate listing platform with advanced search, multi-criteria filtering, and pagination. Normalized MySQL schemas with indexing ensuring sub-150ms query times.',
      tech: ['PHP', 'jQuery', 'MySQL', 'AJAX'],
      href: 'https://bhumidekho.com/',
      accent: 'from-emerald-500 to-teal-400',
      live: true,
    },
    {
      title: 'MGNREGA ERP',
      subtitle: 'Attendance System',
      desc: 'Decentralized PoC attendance tracking system for public works using React.js, Node.js, MongoDB, and Hyperledger Fabric. Optimized schemas for minimal write latency and data consistency.',
      tech: ['React.js', 'Node.js', 'MongoDB', 'Hyperledger Fabric'],
      href: '#',
      accent: 'from-orange-500 to-amber-400',
      live: false,
    },
    {
      title: 'NFT Web Platforms',
      subtitle: 'Web3 Showcase Sites',
      desc: 'Multiple Next.js interfaces for NFT showcases, integrating Web3 wallet connections and displaying digital assets stored on decentralized IPFS storage with seamless wallet-connect flows.',
      tech: ['Next.js', 'Web3.js', 'IPFS', 'Ethereum'],
      href: 'https://www.baguetteclub.wtf/',
      accent: 'from-violet-500 to-pink-400',
      live: true,
    },
  ];

  const achievements = [
    {
      icon: '🏆',
      title: 'Smart India Hackathon 2025',
      desc: "Participated in SIH'25, presenting innovative solutions for real-world challenges and competing against top engineering teams across India.",
    },
    {
      icon: '🤖',
      title: 'AI Workflow Automation',
      desc: 'Reduced manual data processing time by 40% at Skyably Solutions by integrating OpenAI API and LangChain agents into production systems.',
    },
    {
      icon: '⚡',
      title: 'Performance Engineering',
      desc: 'Improved system response time by 25% and reduced API latency by 35% through Redis caching and backend query optimization in live environments.',
    },
  ];

  const heroStats = [
    { value: '2', label: 'Internships' },
    { value: '4+', label: 'Projects Built' },
    { value: '40%', label: 'Efficiency Gains' },
    { value: '2027', label: 'Graduating' },
  ];

  // ── HELPERS ──
  const TechChip = ({ text }: { text: string }) => (
    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-500/10 text-blue-300 border border-blue-500/20 hover:bg-blue-500/20 transition-colors">
      {text}
    </span>
  );

  const SkillTag = ({ text }: { text: string }) => (
    <span className="inline-flex items-center px-3 py-1.5 rounded-lg text-sm font-medium bg-slate-800 text-slate-300 border border-slate-700 hover:border-blue-500/50 hover:text-blue-300 transition-all duration-200 cursor-default">
      {text}
    </span>
  );

  const SectionLabel = ({ children }: { children: React.ReactNode }) => (
    <div className="flex items-center justify-center gap-3 mb-4">
      <div className="h-px flex-1 max-w-16 bg-gradient-to-r from-transparent to-blue-500/40" />
      <span className="text-blue-400 text-xs font-mono tracking-[0.2em] uppercase">{children}</span>
      <div className="h-px flex-1 max-w-16 bg-gradient-to-l from-transparent to-blue-500/40" />
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 antialiased">

      {/* ════════════════════════════════
          NAVBAR
      ════════════════════════════════ */}
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="fixed inset-x-0 top-0 z-50"
      >
        <div className="bg-slate-950/80 backdrop-blur-xl border-b border-white/5">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center shadow-lg shadow-blue-500/25 flex-shrink-0">
                <span className="text-white font-bold text-sm">ST</span>
              </div>
              <div>
                <p className="text-sm font-semibold text-white leading-none">Shashwat Tripathi</p>
                <p className="text-xs text-slate-500 mt-0.5">Full Stack Developer</p>
              </div>
            </div>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-1">
              {navSections.map((section) => (
                <motion.button
                  key={section}
                  whileHover={{ y: -1 }}
                  onClick={() => scrollToSection(section)}
                  className={`px-3 py-1.5 rounded-md text-sm transition-all duration-200 ${
                    activeSection === section
                      ? 'text-blue-400 bg-blue-500/10'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </motion.button>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <a
                href="/Shashwat_Tripathi_CV.pdf"
                download
                className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-violet-600 text-white text-sm font-medium hover:opacity-90 transition shadow-lg shadow-blue-500/20"
              >
                ↓ Download CV
              </a>
              <button
                className="md:hidden p-2 rounded-md text-slate-400 hover:text-slate-200 hover:bg-white/5 transition"
                onClick={() => setIsMenuOpen((s) => !s)}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <XMarkIcon className="h-5 w-5" /> : <Bars3Icon className="h-5 w-5" />}
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.nav
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
                className="md:hidden border-t border-white/5"
              >
                <div className="px-6 py-3 flex flex-col gap-1">
                  {navSections.map((s) => (
                    <button
                      key={s}
                      onClick={() => scrollToSection(s)}
                      className="w-full text-left px-3 py-2.5 rounded-md text-slate-300 hover:text-white hover:bg-white/5 text-sm transition"
                    >
                      {s.charAt(0).toUpperCase() + s.slice(1)}
                    </button>
                  ))}
                  <a
                    href="/Shashwat_Tripathi_CV.pdf"
                    download
                    className="mt-2 w-full text-center px-3 py-2.5 rounded-md bg-gradient-to-r from-blue-600 to-violet-600 text-white text-sm font-medium"
                  >
                    Download CV
                  </a>
                </div>
              </motion.nav>
            )}
          </AnimatePresence>
        </div>
      </motion.header>

      <main>
        {/* ════════════════════════════════
            HERO
        ════════════════════════════════ */}
        <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20">
          {/* Animated background */}
          <div className="absolute inset-0 -z-10">
            <motion.div
              animate={{ scale: [1, 1.12, 1], opacity: [0.25, 0.45, 0.25] }}
              transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-[-15%] left-[-10%] w-[700px] h-[700px] rounded-full bg-gradient-to-br from-blue-600/20 to-violet-600/10 blur-3xl"
            />
            <motion.div
              animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.35, 0.15] }}
              transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
              className="absolute bottom-[-15%] right-[-10%] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-violet-600/20 to-pink-600/10 blur-3xl"
            />
            {/* Subtle grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:72px_72px]" />
          </div>

          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="max-w-4xl mx-auto px-6 text-center"
          >
            {/* Open-to-work badge */}
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-400" />
              </span>
              Open to opportunities
            </motion.div>

            {/* Name */}
            <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-extrabold tracking-tight leading-none mb-5">
              <span className="text-white">Shashwat </span>
              <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-blue-400 bg-clip-text text-transparent">
                Tripathi
              </span>
            </motion.h1>

            {/* Role */}
            <motion.p variants={fadeUp} className="text-xl md:text-2xl text-slate-400 font-medium mb-6">
              Software Developer &amp; Full Stack Engineer
            </motion.p>

            {/* Bio */}
            <motion.p variants={fadeUp} className="text-slate-400 max-w-2xl mx-auto leading-relaxed mb-9 text-base">
              Detail-oriented Full Stack Developer with hands-on experience designing, building, and deploying
              responsive web applications. Proficient in React.js, Next.js, Node.js, and databases — with a strong
              foundation in API optimization and AI-integrated workflows.
            </motion.p>

            {/* CTA buttons */}
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => scrollToSection('projects')}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 text-white font-semibold shadow-2xl shadow-blue-500/30 hover:shadow-blue-500/50 transition-shadow"
              >
                View My Work ↗
              </motion.button>
              <motion.a
                whileHover={{ scale: 1.04 }}
                href="/Shashwat_Tripathi_CV.pdf"
                download
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl border border-slate-700 text-slate-300 font-semibold hover:border-slate-500 hover:text-white transition-all"
              >
                Download CV ↓
              </motion.a>
            </motion.div>

            {/* Social links */}
            <motion.div variants={fadeUp} className="flex items-center justify-center gap-6 mb-16 text-sm">
              <a href="https://github.com/Shashwat-Tripathi49" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-slate-500 hover:text-white transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub
              </a>
              <span className="text-slate-700">·</span>
              <a href="https://www.linkedin.com/in/shashwat-tripathi-41a8a9298" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-slate-500 hover:text-white transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
              <span className="text-slate-700">·</span>
              <a href="mailto:shashwatt49@gmail.com" className="flex items-center gap-1.5 text-slate-500 hover:text-white transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email
              </a>
            </motion.div>

            {/* Stats bar */}
            <motion.div variants={stagger} className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-xl mx-auto">
              {heroStats.map((s) => (
                <motion.div
                  key={s.label}
                  variants={fadeUp}
                  className="bg-slate-900/60 border border-slate-800 rounded-xl p-4 text-center hover:border-slate-700 transition-colors"
                >
                  <p className="text-xl font-bold bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">{s.value}</p>
                  <p className="text-slate-500 text-xs mt-1">{s.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Scroll hint */}
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute bottom-8 flex flex-col items-center gap-1 text-slate-600"
          >
            <span className="text-[10px] tracking-[0.25em] font-mono uppercase">Scroll</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
            </svg>
          </motion.div>
        </section>

        {/* ════════════════════════════════
            ABOUT
        ════════════════════════════════ */}
        <section id="about" className="py-24 bg-slate-900">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <SectionLabel>About Me</SectionLabel>
              <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-14">
                Building things that{' '}
                <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                  actually matter
                </span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 items-start">
              <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="space-y-5">
                <p className="text-slate-400 leading-relaxed text-lg">
                  I&apos;m a Computer Science undergraduate at{' '}
                  <span className="text-white font-medium">KIET Group of Institutions (AKTU)</span>,
                  passionate about full-stack development and building products that solve real-world problems.
                </p>
                <p className="text-slate-400 leading-relaxed">
                  My experience spans{' '}
                  <span className="text-blue-400 font-medium">AI-integrated backend systems</span>,{' '}
                  <span className="text-violet-400 font-medium">high-performance e-commerce platforms</span>, and{' '}
                  <span className="text-emerald-400 font-medium">decentralized Web3 applications</span>.
                  I thrive in Agile environments and love optimizing systems for scale.
                </p>
                <p className="text-slate-400 leading-relaxed">
                  From Redis-cached APIs to blockchain-based attendance systems — I enjoy collaborating on projects
                  that push boundaries and deliver measurable impact.
                </p>
              </motion.div>

              <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="space-y-4">
                {/* Education card */}
                <motion.div variants={fadeUp} className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-5">
                  <div className="flex items-start gap-4">
                    <span className="text-3xl flex-shrink-0">🎓</span>
                    <div>
                      <h4 className="text-white font-semibold">Bachelor of Technology</h4>
                      <p className="text-blue-400 text-sm mt-0.5">Computer Science &amp; Information Technology</p>
                      <p className="text-slate-400 text-sm mt-0.5">KIET Group of Institutions (AKTU)</p>
                      <p className="text-slate-500 text-sm">Ghaziabad, Uttar Pradesh &nbsp;·&nbsp; 2023 – 2027</p>
                    </div>
                  </div>
                </motion.div>

                {/* Mini stat cards */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { icon: '💼', value: '2', label: 'Internships' },
                    { icon: '🚀', value: '4+', label: 'Projects' },
                    { icon: '⚡', value: '40%', label: 'Efficiency ↑' },
                  ].map((stat) => (
                    <motion.div key={stat.label} variants={fadeUp} className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-4 text-center">
                      <div className="text-2xl mb-1">{stat.icon}</div>
                      <div className="text-white font-bold text-lg">{stat.value}</div>
                      <div className="text-slate-500 text-xs mt-0.5">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════
            SKILLS
        ════════════════════════════════ */}
        <section id="skills" className="py-24 bg-slate-950">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <SectionLabel>Technical Skills</SectionLabel>
              <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-14">
                My{' '}
                <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                  tech stack
                </span>
              </h2>
            </motion.div>

            <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid md:grid-cols-2 gap-5">
              {Object.entries(skills).map(([category, list]) => (
                <motion.div
                  key={category}
                  variants={fadeUp}
                  className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-slate-700 transition-colors"
                >
                  <h4 className="text-white font-semibold text-base mb-4">{category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {list.map((skill) => (
                      <SkillTag key={skill} text={skill} />
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ════════════════════════════════
            EXPERIENCE — Timeline
        ════════════════════════════════ */}
        <section id="experience" className="py-24 bg-slate-900">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <SectionLabel>Experience</SectionLabel>
              <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-14">
                Where I&apos;ve{' '}
                <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                  worked
                </span>
              </h2>
            </motion.div>

            <div className="relative">
              {/* Timeline vertical line */}
              <div className="absolute left-6 top-6 bottom-6 w-px bg-gradient-to-b from-blue-500/60 via-violet-500/30 to-transparent" />

              <div className="space-y-8">
                {experiences.map((exp) => (
                  <motion.div
                    key={exp.title}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="relative pl-20"
                  >
                    {/* Timeline avatar */}
                    <div className={`absolute left-0 top-4 h-12 w-12 rounded-xl bg-gradient-to-br ${exp.color} flex items-center justify-center shadow-lg flex-shrink-0`}>
                      <span className="text-white font-bold text-xs">{exp.initials}</span>
                    </div>

                    <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 hover:border-slate-700 transition-colors">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                        <div>
                          <h3 className="text-white font-semibold text-lg">{exp.title}</h3>
                          <p className={`text-transparent bg-clip-text bg-gradient-to-r ${exp.color} font-medium text-sm`}>
                            {exp.company}
                          </p>
                        </div>
                        <div className="flex items-center gap-2 flex-shrink-0">
                          <span className="px-3 py-1 rounded-full bg-slate-800 text-slate-400 text-xs border border-slate-700">
                            {exp.period}
                          </span>
                          <span className="px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs border border-blue-500/20">
                            {exp.type}
                          </span>
                        </div>
                      </div>
                      <ul className="space-y-3">
                        {exp.bullets.map((b, bi) => (
                          <li key={bi} className="flex items-start gap-3 text-slate-400 text-sm leading-relaxed">
                            <span className="text-blue-400 mt-0.5 flex-shrink-0 text-xs">▸</span>
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════
            PROJECTS
        ════════════════════════════════ */}
        <section id="projects" className="py-24 bg-slate-950">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <SectionLabel>Projects</SectionLabel>
              <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-14">
                Things I&apos;ve{' '}
                <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                  built
                </span>
              </h2>
            </motion.div>

            <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid md:grid-cols-2 gap-5">
              {projects.map((p) => (
                <motion.div
                  key={p.title}
                  variants={fadeUp}
                  whileHover={{ y: -5 }}
                  className="group bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-700 transition-all duration-300 hover:shadow-2xl hover:shadow-black/50 flex flex-col"
                >
                  {/* Accent bar */}
                  <div className={`h-1 w-full bg-gradient-to-r ${p.accent}`} />

                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div>
                        <h3 className="text-white font-bold text-xl">{p.title}</h3>
                        <p className="text-slate-500 text-sm mt-0.5">{p.subtitle}</p>
                      </div>
                      {p.live && (
                        <span className="flex-shrink-0 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs border border-emerald-500/20">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          Live
                        </span>
                      )}
                    </div>

                    <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1">{p.desc}</p>

                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {p.tech.map((t) => <TechChip key={t} text={t} />)}
                    </div>

                    <a
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-1.5 text-sm font-medium transition-all group-hover:gap-2.5 ${
                        p.href === '#'
                          ? 'text-slate-600 pointer-events-none'
                          : `bg-gradient-to-r ${p.accent} bg-clip-text text-transparent`
                      }`}
                    >
                      {p.href === '#' ? 'Private Project' : 'Visit Project'}{p.href !== '#' && ' →'}
                    </a>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ════════════════════════════════
            ACHIEVEMENTS
        ════════════════════════════════ */}
        <section id="achievements" className="py-24 bg-slate-900">
          <div className="max-w-5xl mx-auto px-6">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <SectionLabel>Achievements</SectionLabel>
              <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-14">
                Milestones &amp;{' '}
                <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                  wins
                </span>
              </h2>
            </motion.div>

            <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid md:grid-cols-3 gap-5">
              {achievements.map((a) => (
                <motion.div
                  key={a.title}
                  variants={fadeUp}
                  whileHover={{ y: -5 }}
                  className="bg-slate-950 border border-slate-800 rounded-2xl p-6 hover:border-slate-700 transition-all duration-300"
                >
                  <div className="text-4xl mb-4">{a.icon}</div>
                  <h3 className="text-white font-semibold mb-2 text-base">{a.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{a.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ════════════════════════════════
            CONTACT
        ════════════════════════════════ */}
        <section id="contact" className="py-24 bg-slate-950">
          <div className="max-w-5xl mx-auto px-6">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <SectionLabel>Contact</SectionLabel>
              <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">
                Let&apos;s{' '}
                <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                  work together
                </span>
              </h2>
              <p className="text-center text-slate-400 mb-14 max-w-xl mx-auto">
                Open to collaborations, new opportunities, or even just a chat about tech. Feel free to reach out — I&apos;d love to connect!
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact links */}
              <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="space-y-3">
                {[
                  { icon: '📧', label: 'Email', value: 'shashwatt49@gmail.com', href: 'mailto:shashwatt49@gmail.com' },
                  { icon: '📞', label: 'Phone', value: '+91-7393969350', href: 'tel:+917393969350' },
                  { icon: '💼', label: 'LinkedIn', value: 'linkedin.com/in/shashwat-tripathi-41a8a9298', href: 'https://www.linkedin.com/in/shashwat-tripathi-41a8a9298' },
                  { icon: '🐙', label: 'GitHub', value: 'github.com/Shashwat-Tripathi49', href: 'https://github.com/Shashwat-Tripathi49' },
                ].map((item) => (
                  <motion.a
                    key={item.label}
                    variants={fadeUp}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel="noreferrer"
                    whileHover={{ x: 4 }}
                    className="flex items-center gap-4 p-4 bg-slate-900 border border-slate-800 rounded-xl hover:border-slate-700 hover:bg-slate-800/50 transition-all group"
                  >
                    <span className="text-2xl flex-shrink-0">{item.icon}</span>
                    <div className="flex-1 min-w-0">
                      <p className="text-slate-500 text-xs">{item.label}</p>
                      <p className="text-slate-300 text-sm group-hover:text-white transition-colors truncate">{item.value}</p>
                    </div>
                    <svg className="w-4 h-4 text-slate-700 group-hover:text-slate-400 transition-colors flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </motion.a>
                ))}
              </motion.div>

              {/* Contact form */}
              <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
                <form
                  className="space-y-4 bg-slate-900 border border-slate-800 rounded-2xl p-6"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <div>
                    <label htmlFor="name" className="block text-sm text-slate-400 mb-1.5">Name</label>
                    <input
                      id="name"
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-lg text-slate-200 placeholder-slate-600 focus:outline-none focus:border-blue-500/70 focus:ring-1 focus:ring-blue-500/30 transition-all text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm text-slate-400 mb-1.5">Email</label>
                    <input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      className="w-full px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-lg text-slate-200 placeholder-slate-600 focus:outline-none focus:border-blue-500/70 focus:ring-1 focus:ring-blue-500/30 transition-all text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm text-slate-400 mb-1.5">Message</label>
                    <textarea
                      id="message"
                      rows={4}
                      placeholder="Your message..."
                      className="w-full px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-lg text-slate-200 placeholder-slate-600 focus:outline-none focus:border-blue-500/70 focus:ring-1 focus:ring-blue-500/30 transition-all text-sm resize-none"
                    />
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-600 to-violet-600 text-white font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-blue-500/20"
                  >
                    Send Message ↗
                  </motion.button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════
            FOOTER
        ════════════════════════════════ */}
        <footer className="bg-slate-900 border-t border-slate-800 py-10">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-xs">ST</span>
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">Shashwat Tripathi</p>
                  <p className="text-slate-500 text-xs">Software Developer &amp; Full Stack Engineer</p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <a href="https://www.linkedin.com/in/shashwat-tripathi-41a8a9298" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-white transition-colors text-sm">LinkedIn</a>
                <a href="https://github.com/Shashwat-Tripathi49" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-white transition-colors text-sm">GitHub</a>
                <a href="mailto:shashwatt49@gmail.com" className="text-slate-500 hover:text-white transition-colors text-sm">Email</a>
              </div>

              <p className="text-slate-700 text-xs">© 2025 Shashwat Tripathi. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
