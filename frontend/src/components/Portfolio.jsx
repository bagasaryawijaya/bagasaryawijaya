import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, Download, ExternalLink, Layers3, Rocket, Sparkles } from 'lucide-react';
import { SiReact, SiTailwindcss, SiJavascript, SiHtml5, SiFirebase, SiSupabase, SiGit, SiGithub, SiNodedotjs, SiVercel } from 'react-icons/si';

import projectVideo from '../assets/website-video-belajar.png';

import certWordpress from '../assets/SertifikatMyskill.jpg';



const projects = [{
  title: 'Video Belajar Platform',
  desc: 'A digital learning platform featuring courses, authentication, payments, quizzes, an admin dashboard, and a blog.',
  tags: ['React JS', 'Tailwind CSS', 'Node.js', 'Firebase'],
  link: 'https://video-belajar-three.vercel.app/',
  image: projectVideo,
}];

const certificates = [
  { title: 'Website Development With Wordpress', year: '2025', image: certWordpress },
  // { title: 'Full Stack Web Developer', year: '2026', image: certFullStack },
];

const stack = [
  { name: 'React JS', icon: SiReact, color: '#61DAFB' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
  { name: 'HTML', icon: SiHtml5, color: '#E34F26' },
  { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
  { name: 'Supabase', icon: SiSupabase, color: '#3ECF8E' },
  { name: 'Git', icon: SiGit, color: '#F05032' },
  { name: 'GitHub', icon: SiGithub, color: '#181717' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
  { name: 'Vercel', icon: SiVercel, color: '#000000' },
];

export default function Portfolio() {
  const [tab, setTab] = useState('projects');
  const tabs = [
    { id: 'projects', label: 'Projects', icon: Rocket },
    { id: 'certificates', label: 'Certificates', icon: Award },
    { id: 'stack', label: 'Tech Stack', icon: Layers3 },
  ];

  return (
    <section id="portfolio" className="section-shell bg-white/35">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-4xl font-black text-sky-500 sm:text-5xl md:text-6xl">Portfolio Showcase</h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-500">
            Explore my journey through projects, certifications, and technical expertise. Each section represents a milestone in my continuous learning path.
          </p>
          <Sparkles className="mt-5 text-sky-400" size={42} />
        </div>

        <div className="mt-9 flex w-full justify-center">
          <div className="portfolio-tabs">
            {tabs.map(({ id, label, icon: Icon }) => (
              <button key={id} onClick={() => setTab(id)} className={`portfolio-tab ${tab === id ? 'portfolio-tab-active' : ''}`}>
                <Icon size={17} /><span>{label}</span>
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          {tab === 'projects' && (
            <motion.div key="projects" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} className="mx-auto mt-8 max-w-5xl space-y-5">
              {projects.map((project, i) => (
                <article key={project.title} className="project-card group flex-col sm:flex-row">
                  <img src={project.image} alt={`${project.title} preview`} className="h-44 w-full shrink-0 rounded-2xl object-cover sm:h-32 sm:w-52" />
                  <div className="min-w-0 flex-1">
                    <h3 className="text-xl font-black text-slate-950 sm:text-2xl">{project.title}</h3>
                    <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-500">{project.desc}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tags.map((tag) => <span key={tag} className="rounded-full bg-sky-50 px-3 py-1 text-xs font-bold text-sky-700">{tag}</span>)}
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <a href={project.image} download="project-video-belajar.png" className="download-btn"><Download size={16} /> Unduh Foto Project</a>
                      <a href={project.link} target="_blank" rel="noreferrer" className="download-btn download-btn-primary"><ExternalLink size={16} /> Buka Project</a>
                    </div>
                  </div>
                </article>
              ))}
            </motion.div>
          )}

          {tab === 'certificates' && (
            <motion.div key="certificates" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} className="mx-auto mt-8 grid max-w-5xl gap-5 md:grid-cols-2">
              {certificates.map((certificate) => (
                <article key={certificate.title} className="soft-card group overflow-hidden p-0">
                  <img src={certificate.image} alt={`${certificate.title} certificate`} className="h-56 w-full object-cover transition duration-500 group-hover:scale-[1.02]" />
                  <div className="p-5">
                    <p className="text-xs font-black uppercase tracking-[.18em] text-sky-600">{certificate.year}</p>
                    <h3 className="mt-2 text-xl font-black text-slate-900">{certificate.title}</h3>
                    <a href={certificate.image} download className="download-btn mt-4"><Download size={16} /> Unduh Certificate</a>
                  </div>
                </article>
              ))}
            </motion.div>
          )}

          {tab === 'stack' && (
            <motion.div key="stack" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} className="mx-auto mt-8 grid max-w-5xl grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
              {stack.map(({ name, icon: Icon, color }) => (
                <motion.div key={name} whileHover={{ y: -7, scale: 1.02 }} transition={{ type: 'spring', stiffness: 300, damping: 20 }} className="soft-card group flex min-h-32 items-center justify-center text-center">
                  <div className="flex flex-col items-center">
                    <div className="mb-4 grid h-14 w-14 place-items-center rounded-2xl bg-slate-50 shadow-sm transition-all duration-300 group-hover:scale-110">
                      <Icon size={30} style={{ color }} />
                    </div>
                    <span className="text-sm font-extrabold text-slate-800">{name}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
