import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Award,
  Download,
  ExternalLink,
  Layers3,
  Rocket,
  Sparkles,
  Eye,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

import {
  SiFigma,
  SiReact,
  SiTailwindcss,
  SiJavascript,
  SiHtml5,
  SiFirebase,
  SiSupabase,
  SiGit,
  SiGithub,
  SiNodedotjs,
  SiVercel,
} from 'react-icons/si';

import projectVideo from '../assets/website-video-belajar.png';

import certWordpress from '../assets/SertifikatMyskill.jpg';
import certWordpress2 from '../assets/SertifikatMyskill2.jpg';

import certRiseUp from '../assets/SertifikatRiseUp.jpg';

import certFullStack1 from '../assets/SertifikatFullStack1.jpg';
import certFullStack2 from '../assets/SertifikatFullStack2.jpg';
import certFullStack3 from '../assets/SertifikatFullStack3.jpg';

const projects = [
  {
    title: 'Video Belajar Platform',
    desc: 'A digital learning platform featuring courses, authentication, payments, quizzes, an admin dashboard, and a blog.',
    tags: ['Figma', 'React JS', 'Tailwind CSS', 'Node.js', 'Firebase'],
    link: 'https://video-belajar-three.vercel.app/',
    image: projectVideo,
  },
];

const certificates = [
  {
    title: 'Website Development With Wordpress',
    year: '2025',
    images: [
      {
        src: certWordpress,
        name: 'SertifikatMyskill.jpg',
      },
      {
        src: certWordpress2,
        name: 'SertifikatMyskill2.jpg',
      },
    ],
  },
  {
    title: 'RISE UP+ : Career Preparation Program',
    year: '2026',
    images: [
      {
        src: certRiseUp,
        name: 'SertifikatRiseUp.jpg',
      },
    ],
  },
  {
    title: 'Full Stack Web Developer',
    year: '2026',
    images: [
      {
        src: certFullStack1,
        name: 'SertifikatFullStack1.jpg',
      },
      {
        src: certFullStack2,
        name: 'SertifikatFullStack2.jpg',
      },
      {
        src: certFullStack3,
        name: 'SertifikatFullStack3.jpg',
      },
    ],
  },
];

const stack = [
  { name: 'Figma', icon: SiFigma, color: '#F24E1E' },
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
  const [certificateIndexes, setCertificateIndexes] = useState({});

  const tabs = [
    { id: 'projects', label: 'Projects', icon: Rocket },
    { id: 'certificates', label: 'Certificates', icon: Award },
    { id: 'stack', label: 'Tech Stack', icon: Layers3 },
  ];

  const changeCertificate = (title, direction, total) => {
    setCertificateIndexes((prev) => {
      const current = prev[title] ?? 0;
      const next = (current + direction + total) % total;

      return {
        ...prev,
        [title]: next,
      };
    });
  };

  return (
    <section id="portfolio" className="section-shell bg-white/35">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center">
          <h2 className="text-4xl font-black text-sky-500 sm:text-5xl md:text-6xl">
            Portfolio Showcase
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-500">
            Explore my journey through projects, certifications, and
            technical expertise. Each section represents a milestone
            in my continuous learning path.
          </p>

          <Sparkles className="mt-5 text-sky-400" size={42} />
        </div>

        {/* Navigation Tabs */}
        <div className="mt-9 flex w-full justify-center">
          <div className="portfolio-tabs">
            {tabs.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setTab(id)}
                className={`portfolio-tab ${
                  tab === id ? 'portfolio-tab-active' : ''
                }`}
              >
                <Icon size={17} />
                <span>{label}</span>
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          {/* Projects */}
          {tab === 'projects' && (
            <motion.div
              key="projects"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              className="mx-auto mt-8 max-w-5xl space-y-5"
            >
              {projects.map((project) => (
                <article
                  key={project.title}
                  className="project-card group flex-col sm:flex-row"
                >
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    className="h-44 w-full shrink-0 rounded-2xl object-cover sm:h-32 sm:w-52"
                  />

                  <div className="min-w-0 flex-1">
                    <h3 className="text-xl font-black text-slate-950 sm:text-2xl">
                      {project.title}
                    </h3>

                    <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-500">
                      {project.desc}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-sky-50 px-3 py-1 text-xs font-bold text-sky-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="mt-4 flex flex-wrap gap-2">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="download-btn download-btn-primary"
                      >
                        <ExternalLink size={16} />
                        Buka Project
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </motion.div>
          )}

          {/* Certificates */}
          {tab === 'certificates' && (
            <motion.div
              key="certificates"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              className="mx-auto mt-8 grid max-w-5xl gap-5 md:grid-cols-2"
            >
              {certificates.map((certificate) => {
                const total = certificate.images.length;
                const activeIndex =
                  certificateIndexes[certificate.title] ?? 0;
                const activeImage = certificate.images[activeIndex];

                return (
                  <article
                    key={certificate.title}
                    className="soft-card min-w-0 overflow-hidden p-0"
                  >
                    {/* Certificate Header */}
                    <div className="p-5 pb-3">
                      <p className="text-xs font-black uppercase tracking-[.18em] text-sky-600">
                        {certificate.year}
                      </p>

                      <h3 className="mt-2 text-xl font-black text-slate-900">
                        {certificate.title}
                      </h3>
                    </div>

                    {/* Carousel */}
                    <div className="px-5 pb-5">
                      <div className="relative overflow-hidden rounded-2xl border border-slate-100 bg-white">
                        <AnimatePresence mode="wait">
                          <motion.div
                            key={activeImage.name}
                            initial={{ opacity: 0, x: 35 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -35 }}
                            transition={{ duration: 0.22 }}
                          >
                            <a
                              href={activeImage.src}
                              target="_blank"
                              rel="noreferrer"
                              aria-label={`Lihat ${activeImage.name} ukuran penuh`}
                            >
                              <img
                                src={activeImage.src}
                                alt={`${certificate.title} ${activeIndex + 1}`}
                                loading="lazy"
                                className="h-56 w-full cursor-zoom-in object-contain sm:h-64"
                              />
                            </a>
                          </motion.div>
                        </AnimatePresence>

                        {/* Previous / Next */}
                        {total > 1 && (
                          <>
                            <button
                              type="button"
                              onClick={() =>
                                changeCertificate(
                                  certificate.title,
                                  -1,
                                  total
                                )
                              }
                              aria-label="Sertifikat sebelumnya"
                              className="absolute left-2 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-slate-800 shadow-md transition hover:bg-sky-500 hover:text-white"
                            >
                              <ChevronLeft size={22} />
                            </button>

                            <button
                              type="button"
                              onClick={() =>
                                changeCertificate(
                                  certificate.title,
                                  1,
                                  total
                                )
                              }
                              aria-label="Sertifikat berikutnya"
                              className="absolute right-2 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-slate-800 shadow-md transition hover:bg-sky-500 hover:text-white"
                            >
                              <ChevronRight size={22} />
                            </button>
                          </>
                        )}
                      </div>

                      {/* Pagination Dots */}
                      {total > 1 && (
                        <div className="mt-4 flex items-center justify-center gap-2">
                          {certificate.images.map((image, index) => (
                            <button
                              key={image.name}
                              type="button"
                              onClick={() =>
                                setCertificateIndexes((prev) => ({
                                  ...prev,
                                  [certificate.title]: index,
                                }))
                              }
                              aria-label={`Lihat sertifikat ${index + 1}`}
                              aria-current={
                                activeIndex === index ? 'true' : undefined
                              }
                              className={`h-2.5 rounded-full transition-all ${
                                activeIndex === index
                                  ? 'w-7 bg-sky-500'
                                  : 'w-2.5 bg-slate-300 hover:bg-sky-300'
                              }`}
                            />
                          ))}
                        </div>
                      )}

                      {/* Image Counter */}
                      {total > 1 && (
                        <p className="mt-2 text-center text-xs text-slate-500">
                          {activeIndex + 1} / {total}
                        </p>
                      )}

                      {/* Actions */}
                      <div className="mt-4 flex flex-wrap gap-2">
                        <a
                          href={activeImage.src}
                          target="_blank"
                          rel="noreferrer"
                          className="download-btn"
                        >
                          <Eye size={16} />
                          Lihat Sertifikat
                        </a>

                        <a
                          href={activeImage.src}
                          download={activeImage.name}
                          className="download-btn download-btn-primary"
                        >
                          <Download size={16} />
                          Unduh Certificate
                        </a>
                      </div>
                    </div>
                  </article>
                );
              })}
            </motion.div>
          )}

          {/* Tech Stack */}
          {tab === 'stack' && (
            <motion.div
              key="stack"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              className="mx-auto mt-8 grid max-w-5xl grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5"
            >
              {stack.map(({ name, icon: Icon, color }) => (
                <motion.div
                  key={name}
                  whileHover={{ y: -7, scale: 1.02 }}
                  transition={{
                    type: 'spring',
                    stiffness: 300,
                    damping: 20,
                  }}
                  className="soft-card group flex min-h-32 items-center justify-center text-center"
                >
                  <div className="flex flex-col items-center">
                    <div className="mb-4 grid h-14 w-14 place-items-center rounded-2xl bg-slate-50 shadow-sm transition-all duration-300 group-hover:scale-110">
                      <Icon size={30} style={{ color }} />
                    </div>

                    <span className="text-sm font-extrabold text-slate-800">
                      {name}
                    </span>
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
