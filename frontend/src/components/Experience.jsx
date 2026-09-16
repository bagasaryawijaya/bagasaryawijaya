import { motion } from 'framer-motion';
import { BriefcaseBusiness, GraduationCap, Medal } from 'lucide-react';

const timeline = [
  { type: 'experience', period: '2023 — Sekarang', title: 'Full Stack Developer', place: 'Web Development', desc: 'Mengembangkan aplikasi web modern dengan React, JavaScript, Node.js, dan database cloud.', icon: BriefcaseBusiness },
  { type: 'education', period: 'Jun 2025 — Sept 2025', title: 'Hari Senin', place: 'Education', desc: 'Program pembelajaran untuk memperkuat kemampuan digital dan pengembangan website.', icon: GraduationCap },
  { type: 'experience', period: '2022 — 2023', title: 'Frontend Developer', place: 'Digital Project', desc: 'Membangun UI responsive dan integrasi API dengan fokus pada pengalaman pengguna.', icon: BriefcaseBusiness },
  { type: 'education', period: '2018 — 2022', title: 'S1 Teknik Informatika', place: 'Bina Nusantara University', desc: 'Mempelajari pengembangan perangkat lunak, web, database, dan dasar UI/UX.', icon: GraduationCap },
];

export default function Experience() {
  return (
    <section id="experience" className="section-shell bg-white/45">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <div className="section-kicker">04 — Journey</div>
        <h2 className="section-title mt-5">The road so far<span className="gradient-text">.</span></h2>
        <div className="relative mt-12">
          <div className="absolute bottom-2 left-5 top-2 w-px bg-gradient-to-b from-sky-300 via-blue-300 to-transparent sm:left-1/2" />
          {timeline.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div key={`${item.title}-${item.period}`} initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .08 }} className={`relative mb-8 pl-14 sm:w-1/2 sm:pl-0 ${i % 2 ? 'sm:ml-auto sm:pl-12' : 'sm:pr-12'}`}>
                <div className={`absolute left-0 top-1 grid h-10 w-10 place-items-center rounded-full border-4 border-white bg-sky-500 text-white shadow-lg shadow-sky-200 sm:left-auto ${i % 2 ? 'sm:-left-5' : 'sm:-right-5'}`}><Icon size={17} /></div>
                <div className="soft-card">
                  <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-sky-600"><Medal size={14} /> {item.period}</div>
                  <h3 className="mt-3 text-xl font-black text-slate-900">{item.title}</h3>
                  <p className="mt-1 text-sm font-bold text-slate-500">{item.place}</p>
                  <p className="mt-3 text-sm leading-6 text-slate-500">{item.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
