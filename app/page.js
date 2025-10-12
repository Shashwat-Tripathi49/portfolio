"use client";
import { motion } from "framer-motion";

const projects = [
  {
    title: "MGNREGA ERP — Intelligent Attendance System",
    period: "Sept 2025",
    desc: "Blockchain-backed intelligent ERP system enhancing transparency and efficiency in MGNREGA attendance tracking and reporting.",
    tech: ["React", "Tailwind CSS", "Node.js", "MongoDB", "Hyperledger Fabric"],
    link: "#"
  },
  {
    title: "FLOAT BOYS — NFT Distribution",
    period: "2025",
    desc: "NFT distribution platform enabling decentralized content ownership with Ethereum and Firebase.",
    tech: ["Next.js", "Ethereum", "Firebase"],
    link: "#"
  }
];

export default function Home() {
  return (
    <>
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-slate-100 to-sky-50 text-gray-900 antialiased">
      <motion.header initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="bg-white/80 backdrop-blur shadow-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-wrap items-center justify-between">
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight text-sky-700">SHASHWAT TRIPATHI</h1>
            <p className="text-sm text-gray-600 mt-1">Software Developer • B.Tech Computer Science (Information Technology)</p>
          </div>
          <div className="flex items-center gap-3 mt-3 sm:mt-0">
            <a
  href="/Shashwat_Tripathi_CV.pdf"
  download="Shashwat_Tripathi_CV.pdf"
  className="inline-block px-4 py-2 bg-sky-600 text-white rounded-lg text-sm hover:scale-105 hover:bg-sky-700 transition-transform"
>
  Download CV
</a>
{/* okok */}

            <a
              href="https://www.linkedin.com/in/shashwat-tripathi-"
              target="_blank"
              rel="noreferrer"
              className="text-sm text-sky-700 font-medium hover:underline"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </motion.header>

      <main className="max-w-6xl mx-auto px-6 py-12 grid gap-10 lg:grid-cols-3">
        {/* LEFT SECTION */}
        <section className="lg:col-span-2 space-y-8">
          {/* About */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="bg-white p-8 rounded-2xl shadow-sm">
            <h2 className="text-2xl font-bold text-sky-700">About Me</h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              I’m a software developer passionate about crafting impactful digital experiences. Skilled in full-stack development, I focus on creating responsive, user-centric web apps. I enjoy building real-world problem-solving products—like MGNREGA ERP—and continuously exploring innovations in blockchain and web technologies.
            </p>
          </motion.div>

          {/* Experience */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="bg-white p-8 rounded-2xl shadow-sm">
            <h2 className="text-2xl font-bold text-sky-700">Experience</h2>
            <div className="mt-5 space-y-6">
              <Experience
                title="Junior Web Developer Intern — ByteNexus"
                period="Oct 2024 - Nov 2024"
                bullets={[
                  "Developed responsive websites using React.js and modern JavaScript (ES6+)",
                  "Collaborated with teams to debug, optimize, and enhance code quality",
                  "Improved UX through refined interfaces and accessibility enhancements"
                ]}
              />
              <Experience
                title="Junior Web Developer Intern — Vaishnav Technicals"
                period="2024"
                bullets={[
                  "Designed and implemented cross-browser compatible web pages",
                  "Integrated SQL databases for backend data management",
                  "Utilized Excel for efficient data analysis and reporting"
                ]}
              />
            </div>
          </motion.div>

          {/* Projects */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="bg-white p-8 rounded-2xl shadow-sm">
            <h2 className="text-2xl font-bold text-sky-700">Projects</h2>
            <div className="mt-5 grid gap-6">
              {projects.map((p) => (
                <motion.article key={p.title} whileHover={{ scale: 1.02 }} className="border border-slate-200 p-5 rounded-xl hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-800">{p.title}</h3>
                    <span className="text-sm text-gray-500">{p.period}</span>
                  </div>
                  <p className="mt-2 text-sm text-gray-700">{p.desc}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <span key={t} className="text-xs px-2 py-1 bg-sky-50 text-sky-700 border border-sky-100 rounded-full">{t}</span>
                    ))}
                  </div>
                  {p.link && (
                    <div className="mt-3">
                      <a href={p.link} className="text-sm underline text-sky-600">View Project</a>
                    </div>
                  )}
                </motion.article>
              ))}
            </div>
          </motion.div>
        </section>

        {/* SIDEBAR */}
        <aside className="space-y-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="bg-white p-8 rounded-2xl shadow-sm">
            <h2 className="text-xl font-semibold text-sky-700">Skills</h2>
            <ul className="mt-4 grid grid-cols-2 gap-3 text-sm text-gray-800">
              <li>JavaScript (ES6+)</li>
              <li>React.js</li>
              <li>Node.js</li>
              <li>MongoDB / SQL</li>
              <li>Tailwind CSS</li>
              <li>Hyperledger Fabric</li>
              <li>Blockchain Basics</li>
              <li>Excel (Advanced)</li>
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="bg-white p-8 rounded-2xl shadow-sm">
            <h2 className="text-xl font-semibold text-sky-700">Education</h2>
            <div className="mt-3 text-sm text-gray-700 space-y-2">
              <div>
                <p className="font-medium">B.Tech — Computer Science & IT</p>
                <p className="text-gray-600">KIET Group of Institutions (AKTU) • Graduation: 2027</p>
              </div>
              <div>
                <p className="font-medium">CBSE — Oxford Public School (2021)</p>
              </div>
              <div>
                <p className="font-medium">ICSE — HP Children's Academy (2019)</p>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="bg-white p-8 rounded-2xl shadow-sm">
            <h2 className="text-xl font-semibold text-sky-700">Achievements</h2>
            <ul className="mt-3 text-sm text-gray-700 list-disc list-inside">
              <li>Completed multiple web development internships</li>
              <li>Showcased full-stack expertise in academic & practical projects</li>
              <li>Represented college at SIH'25 (National Level)</li>
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="bg-white p-8 rounded-2xl shadow-sm">
            <h2 className="text-xl font-semibold text-sky-700">Contact</h2>
            <p className="mt-3 text-sm text-gray-700">Interested in collaborating or hiring? Let’s connect.</p>
            <a href="mailto:shashwat.2327115csit@kiet.edu" className="mt-5 block text-center bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition">Email Me</a>
          </motion.div>
        </aside>
      </main>

      <footer className="bg-white border-t mt-10">
        <div className="max-w-6xl mx-auto px-6 py-6 text-sm text-gray-600 flex justify-between">
          <span>© {new Date().getFullYear()} Shashwat Tripathi</span>
          <span>Crafted with React, Tailwind & Framer Motion</span>
        </div>
      </footer>
    </div>
    </>
  );
}

function Experience({ title, period, bullets }) {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h4 className="font-semibold text-gray-800">{title}</h4>
        <span className="text-sm text-gray-500">{period}</span>
      </div>
      <ul className="mt-2 list-disc list-inside text-sm text-gray-700 space-y-1">
        {bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
    </div>
  );
}