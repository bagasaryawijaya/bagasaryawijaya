import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowDownRight,
  Instagram,
  Github,
  Linkedin,
  Mail,
  MoveRight,
} from 'lucide-react';
import RunnerAvatar from './RunnerAvatar';

const tech = [
  'Figma',
  'React JS',
  'Tailwind CSS',
  'JavaScript',
  'HTML',
  'Firebase',
  'Supabase',
  'Git',
  'GitHub',
  'Node.js',
  'Vercel',
];

function TypewriterGreeting() {
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);
  const [index, setIndex] = useState(0);

  const phrases = [
    'Hello, welcome to my portfolio!',
    'Halo, selamat datang di portfolio saya!',
  ];

  useEffect(() => {
    const phrase = phrases[index];

    const delay = deleting ? 45 : 85;

    const timer = window.setTimeout(
      () => {
        if (!deleting && text.length < phrase.length) {
          setText(phrase.slice(0, text.length + 1));
        } else if (deleting && text.length > 0) {
          setText(phrase.slice(0, text.length - 1));
        } else if (!deleting) {
          setDeleting(true);
        } else {
          setDeleting(false);
          setIndex((value) => (value + 1) % phrases.length);
        }
      },
      !deleting && text === phrase
        ? 1700
        : deleting && text === ''
          ? 350
          : delay
    );

    return () => window.clearTimeout(timer);
  }, [text, deleting, index]);

  return (
    <div
      className="
        hero-greeting
        relative
        mx-auto
        flex
        min-h-[58px]
        w-full
        max-w-full
        items-center
        justify-center
        overflow-hidden
        rounded-full
        bg-white
        px-4
        py-3
        text-center
        shadow-[0_10px_30px_rgba(15,23,42,0.08)]
        sm:min-h-[64px]
        sm:max-w-xl
        sm:px-6
      "
      aria-label="Welcome to my portfolio"
    >
      <span
        className="
          relative
          z-10
          max-w-full
          whitespace-nowrap
          text-center
          text-[12px]
          font-semibold
          leading-tight
          text-slate-700
          sm:text-sm
          md:text-base
        "
      >
        {text}

        <span
          className="
            ml-1
            inline-block
            h-[15px]
            w-[2px]
            translate-y-[2px]
            animate-pulse
            bg-sky-500
            sm:h-[18px]
          "
          aria-hidden="true"
        />
      </span>
    </div>
  );
}

function AnimatedRole() {
  const roles = [
    'Full Stack Web Developer',
    'UI/UX Designer',
  ];

  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setRoleIndex((index) => (index + 1) % roles.length);
    }, 2600);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <div
      className="
        role-animation
        flex
        w-full
        justify-center
        overflow-hidden
        lg:justify-start
      "
      aria-live="polite"
    >
      <span
        className="
          role-animation-text
          block
          whitespace-nowrap
          text-center
          lg:text-left
        "
        key={roles[roleIndex]}
      >
        {roles[roleIndex]}
      </span>

      <span
        className="role-animation-line"
        aria-hidden="true"
      />
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="
        relative
        flex
        min-h-screen
        items-center
        overflow-hidden
        px-5
        pb-20
        pt-28
        text-center
        sm:px-8
        lg:text-left
      "
    >
      {/* BACKGROUND GRID */}
      <div className="hero-grid" />

      {/* BLUE GLOW LEFT */}
      <div
        className="
          absolute
          -left-28
          top-28
          h-80
          w-80
          rounded-full
          bg-sky-300/30
          blur-3xl
        "
      />

      {/* BLUE GLOW RIGHT */}
      <div
        className="
          absolute
          -right-28
          bottom-10
          h-96
          w-96
          rounded-full
          bg-blue-400/20
          blur-3xl
        "
      />

      {/* MAIN CONTAINER */}
      <div
        className="
          relative
          z-10
          mx-auto
          grid
          w-full
          max-w-7xl
          items-center
          gap-12
          lg:grid-cols-[1.05fr_.95fr]
        "
      >
        {/* =========================
            LEFT CONTENT
        ========================== */}
        <motion.div
          initial={{ opacity: 0, x: -35 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="
            flex
            w-full
            flex-col
            items-center
            lg:items-start
          "
        >
          {/* GREETING */}
          <TypewriterGreeting />

          {/* NAME */}
          <h1
            className="
              hero-name
              mx-auto
              mt-7
              w-full
              whitespace-nowrap
              text-center
              text-[clamp(2rem,8vw,3rem)]
              font-black
              leading-none
              tracking-[-0.04em]
              sm:text-6xl
              lg:mx-0
              lg:text-7xl
              lg:text-left
            "
          >
            Bagas Arya Wijaya
          </h1>

          {/* ROLE */}
          <h2 className="mt-6 w-full">
            <AnimatedRole />
          </h2>

          {/* DESCRIPTION */}
          <p
            className="
              mx-auto
              mt-7
              w-full
              max-w-2xl
              text-center
              text-justify
              text-base
              leading-7
              text-slate-600
              sm:text-lg
              lg:mx-0
              lg:text-left
            "
          >
            I create modern web applications and interactive experiences
            that combine reliable functionality with thoughtful visual
            design.
          </p>

          {/* SOCIAL MEDIA */}
          <div
            className="
              mt-8
              flex
              justify-center
              gap-3
              lg:justify-start
            "
          >
            {[
              {
                icon: Instagram,
                href: 'https://www.instagram.com/bagasarya_23/',
                label: 'Instagram',
              },
              {
                icon: Github,
                href: 'https://github.com/bagasaryawijaya',
                label: 'GitHub',
              },
              {
                icon: Linkedin,
                href: 'https://www.linkedin.com/in/bagas-arya-wijaya-0b6414261/',
                label: 'LinkedIn',
              },
              {
                icon: Mail,
                href: 'mailto:bagasaryawijaya27@gmail.com',
                label: 'Email',
              },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="
                  grid
                  h-11
                  w-11
                  place-items-center
                  rounded-full
                  border
                  border-slate-200
                  bg-white/80
                  text-slate-700
                  shadow-sm
                  transition
                  hover:-translate-y-1
                  hover:border-sky-300
                  hover:bg-sky-50
                  hover:text-sky-600
                "
              >
                <Icon size={22} />
              </a>
            ))}
          </div>

          {/* BUTTONS */}
          <div
            className="
              mt-8
              flex
              flex-wrap
              items-center
              justify-center
              gap-3
              lg:justify-start
            "
          >
            {/* PROJECT BUTTON */}
            <a
              href="#portfolio"
              className="
                group
                inline-flex
                items-center
                gap-2
                rounded-full
                bg-slate-950
                px-6
                py-3.5
                font-bold
                text-white
                shadow-xl
                shadow-slate-300/40
                transition
                hover:-translate-y-1
                hover:bg-sky-600
              "
            >
              See My Projects

              <MoveRight
                size={18}
                className="
                  transition-transform
                  group-hover:translate-x-1
                "
              />
            </a>

            {/* ABOUT BUTTON */}
            <a
              href="#about"
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-slate-300
                bg-white/70
                px-6
                py-3.5
                font-bold
                text-slate-800
                transition
                hover:-translate-y-1
                hover:border-sky-300
                hover:text-sky-600
              "
            >
              About Me

              <ArrowDownRight size={18} />
            </a>
          </div>
        </motion.div>

        {/* =========================
            RIGHT AVATAR
        ========================== */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.86,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.9,
            delay: 0.15,
          }}
          className="
            flex
            justify-center
            lg:justify-end
          "
        >
          <RunnerAvatar />
        </motion.div>
      </div>

      {/* =========================
          TECH MARQUEE
      ========================== */}
      <div
        className="
          tech-marquee
          absolute
          bottom-0
          left-0
          right-0
          border-y
          border-sky-100
          bg-white/55
          py-3
          backdrop-blur
        "
        aria-label="Technology stack"
      >
        <div className="tech-marquee-track">
          {[...tech, ...tech].map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="tech-marquee-item"
            >
              ✦ {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}