import { motion } from "framer-motion";
import binusLogo from "../assets/binus-logo.png";
import hariseninLogo from "../assets/harisenin-logo.svg";
import {
  BookOpen,
  Code2,
  GraduationCap,
  Sparkles,
} from "lucide-react";

const expertise = [
  "React JS",
  "Tailwind CSS",
  "JavaScript",
  "HTML",
  "Firebase",
  "Supabase",
  "Git & GitHub",
  "Node.js",
  "Vercel",
  "Figma",
];

export default function About() {
  return (
    <section id="about" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Header */}
        <div className="mb-14 text-center">
          <h2 className="text-4xl font-black tracking-tight text-slate-900 md:text-5xl">
            About{" "}
            <span className="bg-gradient-to-r from-sky-500 to-indigo-600 bg-clip-text text-transparent">
              Me
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-1xl text-base leading-7 text-slate-500">
            I enjoy building modern, simple websites and digital applications
            that provide a great user experience.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid gap-6 lg:grid-cols-2">
          {/* LEFT - Education */}
          <motion.article
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="group relative overflow-hidden rounded-3xl border border-slate-100 bg-white p-7 shadow-[0_10px_40px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(15,23,42,0.1)]"
          >
            {/* Decorative gradient */}
            <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-sky-100/60 blur-3xl transition-all group-hover:bg-sky-200/70" />

            <div className="relative">
              {/* Icon */}
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-50 text-sky-600">
                <GraduationCap size={26} strokeWidth={2} />
              </div>

              {/* Label */}
              <p className="text-2xl font-black uppercase tracking-[0.2em] text-sky-600">
                Education
              </p>

              {/* ==================== EDUCATION 1 ==================== */}

              {/* University */}
              <div className="mt-3 flex items-center gap-4">
                {/* Binus Logo */}
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-white p-1.5 shadow-sm ring-1 ring-slate-100">
                  <img
                    src={binusLogo}
                    alt="Bina Nusantara University Logo"
                    className="h-full w-full object-contain"
                  />
                </div>

                {/* University Name */}
                <h3 className="text-2xl font-black leading-tight text-slate-900">
                  Bina Nusantara University
                </h3>
              </div>

              {/* Education Details */}
              <div className="mt-6 space-y-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Field of Study
                  </p>

                  <p className="mt-1 text-sm font-bold text-slate-700">
                    Business Information Technology
                  </p>
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Graduation Period
                  </p>

                  <p className="mt-1 text-sm font-bold text-slate-700">
                    Sep 2019 – Mar 2026
                  </p>
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Academic Grade
                  </p>

                  <p className="mt-1 text-lg font-black text-indigo-600">
                    3.23{" "}
                    <span className="text-sm font-semibold text-slate-400">
                      / 4.00
                    </span>
                  </p>
                </div>
              </div>

              {/* Divider between Education 1 and Education 2 */}
              <div className="my-8 h-px bg-slate-100" />

              {/* ==================== EDUCATION 2 ==================== */}

              {/* Bootcamp */}
              <div className="flex items-center gap-4">
                {/* Harisenin Logo */}
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-white p-1.5 shadow-sm ring-1 ring-slate-100">
                  <img
                    src={hariseninLogo}
                    alt="Harisenin Logo"
                    className="h-full w-full object-contain"
                  />
                </div>

                {/* Bootcamp Name */}
                <h3 className="text-2xl font-black leading-tight text-slate-900">
                  Harisenin
                </h3>
              </div>

              {/* Education Details */}
              <div className="mt-6 space-y-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Field of Study
                  </p>

                  <p className="mt-1 text-sm font-bold text-slate-700">
                    Full Stack Web Development Bootcamp
                  </p>
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Graduation Period
                  </p>

                  <p className="mt-1 text-sm font-bold text-slate-700">
                    Jun 2026 – Sep 2026
                  </p>
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Academic Grade
                  </p>

                  <p className="mt-1 text-lg font-black text-indigo-600">
                    3.50{" "}
                    <span className="text-sm font-semibold text-slate-400">
                      / 4.00
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </motion.article>

          {/* RIGHT - Technical Expertise */}
          <motion.article
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group relative overflow-hidden rounded-3xl border border-slate-100 bg-white p-7 shadow-[0_10px_40px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(15,23,42,0.1)]"
          >
            {/* Decorative gradient */}
            <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-indigo-100/60 blur-3xl transition-all group-hover:bg-indigo-200/70" />

            <div className="relative">
              {/* Icon */}
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600">
                <Code2 size={26} strokeWidth={2} />
              </div>

              {/* Label */}
              <p className="text-2xl font-black uppercase tracking-[0.2em] text-indigo-600">
                Technical Expertise
              </p>

              {/* Title */}
              <h3 className="mt-3 text-2xl font-black leading-tight text-slate-900">
                Building for the web
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Technologies and tools I use to build modern, responsive, and
                scalable web applications.
              </p>

              {/* Skills */}
              <div className="mt-6 flex flex-wrap gap-2.5">
                {expertise.map((item, index) => (
                  <motion.span
                    key={item}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.25,
                      delay: index * 0.04,
                    }}
                    className="rounded-full border border-slate-100 bg-slate-50 px-3.5 py-2 text-xs font-bold text-slate-600 transition-all duration-200 hover:border-sky-200 hover:bg-sky-50 hover:text-sky-600"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.article>

          {/* Learning Mindset */}
          <motion.article
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-3xl border border-slate-100 bg-gradient-to-br from-sky-50 to-indigo-50 p-7 lg:col-span-2"
          >
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-sky-600 shadow-sm">
                  <BookOpen size={26} />
                </div>

                <p className="text-2xl font-black uppercase tracking-[0.2em] text-sky-600">
                  Learning Mindset
                </p>

                <h3 className="mt-3 text-2xl font-black text-slate-900">
                  Keep improving
                </h3>

                <p className="mt-3 max-w-2xl text-justify text-sm leading-7 text-slate-500">
                  I am always trying new things, improving old projects, and
                  seeking better ways to solve problems.
                  <br />
                  To me, the learning process is an essential part of the
                  journey as a developer.
                </p>
              </div>

              <div className="hidden shrink-0 sm:block">
                <div className="grid h-20 w-20 place-items-center rounded-3xl bg-white shadow-sm">
                  <Sparkles
                    size={34}
                    className="text-sky-400"
                    strokeWidth={1.8}
                  />
                </div>
              </div>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}