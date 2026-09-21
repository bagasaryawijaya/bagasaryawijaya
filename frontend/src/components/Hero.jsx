import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDownRight, Instagram, Github, Linkedin, Mail, MoveRight } from 'lucide-react';
import RunnerAvatar from './RunnerAvatar';

const tech = ['Figma', 'React JS', 'Tailwind CSS', 'JavaScript', 'HTML', 'Firebase', 'Supabase', 'Git', 'GitHub', 'Node.js', 'Vercel'];
const greetings = [
  'Hello, welcome to my portfolio!',
  'Halo, selamat datang di portfolio saya!',
  '你好，欢迎来到我的作品集！',
  'नमस्ते, मेरे पोर्टफोलियो में आपका स्वागत है!',
  '¡Hola, bienvenido a mi portafolio!',
  'مرحبًا، أهلاً بك في ملف أعمالي!',
];

function TypewriterGreeting() {
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);
  const phrases = ['Hello, welcome to my portfolio!', 'Halo, selamat datang di portfolio saya!'];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const phrase = phrases[index];
    const delay = deleting ? 45 : 85;
    const timer = window.setTimeout(() => {
      if (!deleting && text.length < phrase.length) setText(phrase.slice(0, text.length + 1));
      else if (deleting && text.length > 0) setText(phrase.slice(0, text.length - 1));
      else if (!deleting) setDeleting(true);
      else { setDeleting(false); setIndex((value) => (value + 1) % phrases.length); }
    }, !deleting && text === phrase ? 1700 : deleting && text === '' ? 350 : delay);
    return () => window.clearTimeout(timer);
  }, [text, deleting, index]);

  return (
    <div className="typewriter-greeting" aria-label="Welcome to my portfolio">
      <span className="hero-greeting" aria-hidden="true" />
      <span>{text}</span><span className="typewriter-caret" aria-hidden="true" />
    </div>
  );
}

function AnimatedRole() {
  const roles = ['Full Stack Web Developer', 'UI/UX Designer'];
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setRoleIndex((index) => (index + 1) % roles.length);
    }, 2600);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="role-animation" aria-live="polite">
      <span className="role-animation-text" key={roles[roleIndex]}>
        {roles[roleIndex]}
      </span>
      <span className="role-animation-line" aria-hidden="true" />
    </div>
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden px-5 pb-16 pt-28 sm:px-8">
      <div className="hero-grid" />
      <div className="absolute -left-28 top-28 h-80 w-80 rounded-full bg-sky-300/30 blur-3xl" />
      <div className="absolute -right-28 bottom-10 h-96 w-96 rounded-full bg-blue-400/20 blur-3xl" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_.95fr]">
        <motion.div initial={{ opacity: 0, x: -35 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .8 }}>
          <TypewriterGreeting />

        <h1 className="hero-name mt-7 max-w-4xl text-5xl font-black leading-[.98] tracking-[-.04em] sm:text-6xl lg:text-7xl">
          Bagas Arya Wijaya
        </h1>

        <h2 className="mt-7 max-w-2xl">
          <AnimatedRole />
        </h2>

          <p className="mt-7 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            I create modern web applications and interactive experiences that combine reliable functionality with thoughtful visual design test.
          </p>

          <div className="mt-8 flex gap-3">
            {[
              { icon: Instagram, href: 'https://www.instagram.com/bagasarya_23/', label: 'Instagram' },
              { icon: Github, href: 'https://github.com/bagasaryawijaya', label: 'GitHub' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/bagas-arya-wijaya-0b6414261/', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:bagasaryawijaya27@gmail.com', label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} className="grid h-11 w-11 place-items-center rounded-full border border-slate-200 bg-white/80 text-slate-700 shadow-sm transition hover:-translate-y-1 hover:border-sky-300 hover:bg-sky-50 hover:text-sky-600">
                <Icon size={32} />
              </a>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#portfolio" className="group inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3.5 font-bold text-white shadow-xl shadow-slate-300/40 transition hover:-translate-y-1 hover:bg-sky-600">
              See My Projects <MoveRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#about" className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/70 px-6 py-3.5 font-bold text-slate-800 transition hover:-translate-y-1 hover:border-sky-300 hover:text-sky-600">
              About Me <ArrowDownRight size={18} />
            </a>
          </div>

        </motion.div>

        <motion.div initial={{ opacity: 0, scale: .86 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .9, delay: .15 }} className="flex justify-center lg:justify-end">
          <RunnerAvatar />
        </motion.div>
      </div>

      <div className="tech-marquee absolute bottom-0 left-0 right-0 border-y border-sky-100 bg-white/55 py-3 backdrop-blur" aria-label="Technology stack">
        <div className="tech-marquee-track">
          {[...tech, ...tech].map((item, i) => (
            <span key={`${item}-${i}`} className="tech-marquee-item">✦ {item}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
