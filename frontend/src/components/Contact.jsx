import React from "react";
import {
  Linkedin,
  Instagram,
  Github,
  ArrowUpRight,
} from "lucide-react";

export default function App() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Background Decoration */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-[-200px] top-[-200px] h-[500px] w-[500px] rounded-full bg-sky-500/10 blur-[120px]" />

        <div className="absolute bottom-[-200px] right-[-150px] h-[500px] w-[500px] rounded-full bg-sky-400/10 blur-[120px]" />
      </div>

      {/* Contact Section */}
      <section
        id="contact"
        className="relative mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-12"
      >
        {/* Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Contact{" "}
            <span className="text-sky-400">Me</span>
          </h1>

          <p className="mt-6 text-base leading-7 text-slate-400 sm:text-lg">
            Got a question? Send me a message, and I'll get back to you soon.
          </p>
        </div>

        {/* Connect With Me */}
        <div className="mx-auto max-w-2xl">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-2xl shadow-sky-950/20 backdrop-blur-xl sm:p-8">
            <h2 className="text-2xl font-bold text-white">
              Connect With Me
            </h2>

            <p className="mt-2 text-sm leading-6 text-slate-400">
              Let's connect and keep in touch.
            </p>

            <div className="mt-8 space-y-3">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/bagas-arya-wijaya-0b6414261/"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900/50 p-4 transition duration-300 hover:border-[#0A66C2]/40 hover:bg-[#0A66C2]/5"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0A66C2]/10 text-[#0A66C2] transition-all duration-300 group-hover:bg-[#0A66C2] group-hover:text-white group-hover:shadow-lg group-hover:shadow-[#0A66C2]/30">
                    <Linkedin size={20} />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-white">
                      LinkedIn
                    </p>

                    <p className="text-xs text-slate-500">
                      Let's connect professionally
                    </p>
                  </div>
                </div>

                <ArrowUpRight
                  size={18}
                  className="text-slate-600 transition duration-300 group-hover:text-[#0A66C2]"
                />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/bagasarya_23/"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900/50 p-4 transition duration-300 hover:border-pink-400/40 hover:bg-pink-400/5"
              >
                <div className="flex items-center gap-4">
                  <div
                    className="
                      flex h-11 w-11 items-center justify-center rounded-xl
                      bg-gradient-to-br from-[#833AB4]/10 via-[#E1306C]/10 to-[#F77737]/10
                      text-[#E1306C]
                      transition-all duration-300
                      group-hover:bg-gradient-to-br
                      group-hover:from-[#833AB4]
                      group-hover:via-[#E1306C]
                      group-hover:to-[#F77737]
                      group-hover:text-white
                      group-hover:shadow-lg
                      group-hover:shadow-pink-500/30
                    "
                  >
                    <Instagram size={20} />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-white">
                      Instagram
                    </p>

                    <p className="text-xs text-slate-500">
                      Follow my journey
                    </p>
                  </div>
                </div>

                <ArrowUpRight
                  size={18}
                  className="text-slate-600 transition duration-300 group-hover:text-[#E1306C]"
                />
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/bagasaryawijaya"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900/50 p-4 transition duration-300 hover:border-white/30 hover:bg-white/[0.03]"
              >
                <div className="flex items-center gap-4">
                  <div
                    className="
                      flex h-11 w-11 items-center justify-center rounded-xl
                      bg-white/10
                      text-white/80
                      transition-all duration-300
                      group-hover:bg-white
                      group-hover:text-slate-950
                      group-hover:shadow-lg
                      group-hover:shadow-white/20
                    "
                  >
                    <Github size={20} />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-white">
                      GitHub
                    </p>

                    <p className="text-xs text-slate-500">
                      Check out my projects
                    </p>
                  </div>
                </div>

                <ArrowUpRight
                  size={18}
                  className="text-slate-600 transition duration-300 group-hover:text-white"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}