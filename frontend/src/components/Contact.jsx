import React, { useState } from "react";
import {
  Mail,
  Calendar,
  Linkedin,
  Instagram,
  Github,
  Send,
  ArrowUpRight,
} from "lucide-react";

export default function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "", message: "" });
    setIsSending(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(data.error || "Gagal mengirim pesan.");
      }

      setStatus({
        type: "success",
        message: "Message sent successfully! I'll get back to you soon.",
      });

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error.message ||
          "Unable to send your message. Please try again later.",
      });
    } finally {
      setIsSending(false);
    }
  };

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

        {/* Main Grid */}
        <div className="grid gap-8 lg:grid-cols-5">
          {/* LEFT SIDE */}
          <div className="space-y-6 lg:col-span-3">
            {/* Get In Touch */}
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-2xl shadow-sky-950/20 backdrop-blur-xl sm:p-8">
              <div className="mb-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-400/10 text-sky-400">
                  <Mail size={24} />
                </div>

                <h2 className="text-2xl font-bold text-white">
                  Get in Touch
                </h2>

                <p className="mt-2 max-w-xl text-sm leading-6 text-slate-400">
                  Have something to discuss? Send me a message and let's talk.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-slate-300"
                  >
                    Your Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full rounded-xl border border-white/10 bg-slate-900/70 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-sky-400/60 focus:ring-2 focus:ring-sky-400/10"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-slate-300"
                  >
                    Your Email
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="email@gmail.com"
                    className="w-full rounded-xl border border-white/10 bg-slate-900/70 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-sky-400/60 focus:ring-2 focus:ring-sky-400/10"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-slate-300"
                  >
                    Your Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    className="w-full resize-none rounded-xl border border-white/10 bg-slate-900/70 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-sky-400/60 focus:ring-2 focus:ring-sky-400/10"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="group flex w-full items-center justify-center gap-2 rounded-xl bg-sky-400 px-5 py-3.5 text-sm font-semibold text-slate-950 transition duration-300 hover:bg-sky-300 hover:shadow-lg hover:shadow-sky-400/20"
                >
                  <Send
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />

                  {isSending
                    ? "Sending..."
                    : status.type === "success"
                      ? "Message Sent!"
                      : "Send Message"}
                </button>

                {status.message && (
                  <p
                    role="status"
                    aria-live="polite"
                    className={`text-sm ${
                      status.type === "success"
                        ? "text-emerald-400"
                        : "text-rose-400"
                    }`}
                  >
                    {status.message}
                  </p>
                )}
              </form>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-6 lg:col-span-2">
            {/* Connect With Me */}
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
                  className="group flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900/50 p-4 transition duration-300 hover:border-sky-400/30 hover:bg-sky-400/5"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-400/10 text-sky-400 transition group-hover:bg-sky-400 group-hover:text-slate-950">
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
                    className="text-slate-600 transition group-hover:text-sky-400"
                  />
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/bagasarya_23/"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900/50 p-4 transition duration-300 hover:border-sky-400/30 hover:bg-sky-400/5"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-400/10 text-sky-400 transition group-hover:bg-sky-400 group-hover:text-slate-950">
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
                    className="text-slate-600 transition group-hover:text-sky-400"
                  />
                </a>

                {/* Github */}
                <a
                  href="https://github.com/bagasaryawijaya"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900/50 p-4 transition duration-300 hover:border-sky-400/30 hover:bg-sky-400/5"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-400/10 text-sky-400 transition group-hover:bg-sky-400 group-hover:text-slate-950">
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
                    className="text-slate-600 transition group-hover:text-sky-400"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

      </section>
    </main>
  );
}
