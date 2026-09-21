import { useEffect, useState } from 'react';
import { ArrowUp, Eye, MapPin } from 'lucide-react';

const VISITOR_KEY = 'bagas-running-portfolio-visitors';
const SESSION_KEY = 'bagas-running-portfolio-visited';

function getJakartaTime() {
  const parts = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Asia/Jakarta',
    day: '2-digit',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  }).formatToParts(new Date());

  const get = (type) => parts.find((p) => p.type === type)?.value || '';
  return `Jakarta, ${get('day')} ${get('month')} ${get('year')} - ${get('hour')}:${get('minute')}:${get('second')} WIB`;
}

const techStack = [
  {
    name: 'React',
    icon: 'https://cdn.simpleicons.org/react/61DAFB',
  },
  {
    name: 'Tailwind CSS',
    icon: 'https://cdn.simpleicons.org/tailwindcss/06B6D4',
  },
  {
    name: 'JavaScript',
    icon: 'https://cdn.simpleicons.org/javascript/F7DF1E',
  },
  {
    name: 'Firebase',
    icon: 'https://cdn.simpleicons.org/firebase/FFCA28',
  },
  {
    name: 'Vercel',
    icon: 'https://cdn.simpleicons.org/vercel/000000',
  },
  {
    name: 'HTML',
    icon: 'https://cdn.simpleicons.org/html5/E34F26',
  },
];

export default function Footer() {
  const [visitors, setVisitors] = useState(0);
  const [time, setTime] = useState(getJakartaTime());

  useEffect(() => {
    const hasVisited = sessionStorage.getItem(SESSION_KEY);
    let count = Number(localStorage.getItem(VISITOR_KEY) || '0');

    if (!hasVisited) {
      count += 1;
      localStorage.setItem(VISITOR_KEY, String(count));
      sessionStorage.setItem(SESSION_KEY, '1');
    }

    setVisitors(count);

    const timer = setInterval(() => {
      setTime(getJakartaTime());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <footer className="border-t border-sky-100 bg-white/70 px-5 py-8 backdrop-blur sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6">

        {/* Top Section */}
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">
          <div>
            <p className="font-black text-slate-900">
              Bagas Arya Wijaya
            </p>

            <p className="mt-1 text-sm text-slate-500">
              Keep moving. Keep building.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-xs font-bold text-slate-500">
            <span className="footer-stat">
              <Eye size={15} className="text-sky-500" />
              {visitors.toLocaleString('id-ID')} visitors
            </span>

            <span className="footer-stat">
              <MapPin size={15} className="text-sky-500" />
              {time}
            </span>

          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col justify-between gap-4 border-t border-sky-100 pt-5 text-xs text-slate-400 sm:flex-row sm:items-center">

          <p>
            © {new Date().getFullYear()} Bagas Arya Wijaya.
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="mr-1 font-medium text-slate-400">
              Made with:
            </span>

            {techStack.map((tech) => (
              <span
                key={tech.name}
                title={tech.name}
                className="group flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 bg-white transition-all duration-200 hover:-translate-y-1 hover:border-sky-200 hover:bg-sky-50 hover:shadow-sm"
              >
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="h-4 w-4 object-contain transition-transform duration-200 group-hover:scale-110"
                  loading="lazy"
                />
              </span>
            ))}
          </div>

        </div>
      </div>
    </footer>
  );
}