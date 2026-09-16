import { motion } from 'framer-motion';
import { Braces, Cloud, Database, GitBranch, Globe, Layers3, Server, Terminal } from 'lucide-react';

const skills = [
  ['React JS', Braces], ['Tailwind CSS', Layers3], ['JavaScript', Terminal], ['HTML', Globe],
  ['Firebase', Cloud], ['Supabase', Database], ['Git & GitHub', GitBranch], ['Node.js', Server], ['Vercel', Cloud],
];

export default function Skills() {
  return (
    <section id="skills" className="section-shell bg-white/45">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="section-kicker">02 — Tech Stack</div>
        <div className="mt-5 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <h2 className="section-title max-w-2xl">Tools I use to <span className="gradient-text">stay in motion.</span></h2>
          <p className="max-w-md text-sm leading-6 text-slate-500">Teknologi utama yang saya gunakan untuk membangun, menyimpan data, version control, dan deploy aplikasi.</p>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {skills.map(([name, Icon], i) => (
            <motion.div key={name} initial={{ opacity: 0, scale: .94 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * .05 }} whileHover={{ y: -5 }} className="soft-card flex min-h-28 flex-col items-center justify-center gap-3 text-center">
              <Icon className="text-sky-500" size={27} />
              <span className="text-sm font-extrabold text-slate-800">{name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
