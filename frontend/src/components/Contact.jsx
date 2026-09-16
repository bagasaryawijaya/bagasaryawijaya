import { motion } from 'framer-motion';
import { ArrowUpRight, Instagram, Linkedin, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="section-shell">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="contact-panel">
          <div>
            <div className="section-kicker text-sky-200">Contact</div>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-5 max-w-3xl text-4xl font-black tracking-tight text-white sm:text-6xl">
              Have an idea? <span className="text-sky-300">Let’s run with it.</span>
            </motion.h2>
            <p className="mt-5 max-w-xl leading-7 text-slate-300">Open to project websites, collaborations, or just chatting about technology and running.</p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="mailto:bagasaryawijaya27@gmail.com" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 font-black text-slate-950 transition hover:-translate-y-1 hover:bg-sky-100">Email Me <ArrowUpRight size={18} /></a>
            <a href="https://www.instagram.com/bagasarya_23/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3.5 font-black text-white transition hover:-translate-y-1 hover:bg-white/15"><Instagram size={18} /> Instagram</a>
            <a href="https://www.linkedin.com/in/bagas-arya-wijaya-0b6414261/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3.5 font-black text-white transition hover:-translate-y-1 hover:bg-white/15"><Linkedin size={18} /> LinkedIn</a>
          </div>
        </div>
      </div>
    </section>
  );
}