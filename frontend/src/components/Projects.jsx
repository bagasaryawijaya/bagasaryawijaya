import { motion } from 'framer-motion';
import { ArrowUpRight, Code2 } from 'lucide-react';

const projects = [
  { no: '01', title: 'Video Belajar Platform', desc: 'Platform belajar digital dengan course, authentication, pembayaran, quiz, admin dashboard, dan konten blog.', tags: ['React JS', 'Tailwind CSS', 'Node.js', 'Firebase'], tone: 'from-sky-400 to-blue-600' },
  { no: '02', title: 'Portfolio Analytics', desc: 'Dashboard portfolio untuk melihat aktivitas pengunjung dan insight performa website secara ringkas.', tags: ['React JS', 'Supabase', 'JavaScript'], tone: 'from-cyan-400 to-sky-600' },
  { no: '03', title: 'Responsive Web Experience', desc: 'Kumpulan landing page modern dengan fokus pada typography, responsive layout, micro-interactions, dan performance.', tags: ['HTML', 'Tailwind CSS', 'Vercel'], tone: 'from-blue-500 to-indigo-600' },
];

export default function Projects() {
  return (
    <section id="projects" className="section-shell">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="section-kicker">03 — Selected Work</div>
        <div className="mt-5 flex items-end justify-between gap-6">
          <h2 className="section-title">Projects that <span className="gradient-text">move ideas forward.</span></h2>
          <Code2 className="hidden text-sky-300 md:block" size={54} />
        </div>

        <div className="mt-10 space-y-5">
          {projects.map((project, i) => (
            <motion.article key={project.title} initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .1 }} className="project-card group">
              <div className={`project-number bg-gradient-to-br ${project.tone}`}>{project.no}</div>
              <div className="min-w-0 flex-1">
                <h3 className="text-2xl font-black tracking-tight text-slate-950">{project.title}</h3>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">{project.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">{project.tags.map(tag => <span key={tag} className="rounded-full bg-sky-50 px-3 py-1 text-xs font-bold text-sky-700">{tag}</span>)}</div>
              </div>
              <div className="ml-auto hidden shrink-0 items-center gap-3 sm:flex">
                <span className="text-xs font-bold uppercase tracking-widest text-slate-400">View project</span>
                <span className="grid h-12 w-12 place-items-center rounded-full border border-slate-200 bg-white text-slate-700 transition group-hover:border-sky-300 group-hover:bg-sky-500 group-hover:text-white"><ArrowUpRight size={20} /></span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
