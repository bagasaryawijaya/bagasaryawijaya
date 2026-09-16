import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/Muka-BagasAryaWijaya.jpg';

const links = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Portfolio', href: '#portfolio' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll);

    const sections = ['home', 'about', 'portfolio', 'contact']
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: '-25% 0px -55% 0px', threshold: [0.05, 0.2, 0.5] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => {
      window.removeEventListener('scroll', onScroll);
      observer.disconnect();
    };
  }, []);

  const allLinks = [...links, { name: 'Contact', href: '#contact' }];

  const handleClick = (id) => {
    setActive(id);
    setOpen(false);
  };

  return (
    <nav className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? 'nav-glass py-3' : 'py-5'}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#home" onClick={() => handleClick('home')} className="group flex items-center gap-2 font-black tracking-tight text-slate-950">
          <img src={logo} alt="Logo Bagas Arya Wijaya" className="h-10 w-10 rounded-2xl object-cover shadow-lg shadow-sky-300/30 transition-transform group-hover:-rotate-6" />
          <span className="hidden sm:block">Bagas <span className="text-sky-500">Arya</span></span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {allLinks.map((link) => {
            const id = link.href.slice(1);
            const isActive = active === id;
            return (
              <a key={link.name} href={link.href} onClick={() => handleClick(id)}
                className={`nav-link ${isActive ? 'nav-link-active' : ''} ${id === 'contact' && isActive ? 'nav-contact-active' : ''}`}>
                {link.name}
              </a>
            );
          })}
        </div>

        <button onClick={() => setOpen((v) => !v)} className="rounded-xl p-2 text-slate-800 hover:bg-white/70 md:hidden" aria-label="Toggle menu">
          {open ? <X size={25} /> : <Menu size={25} />}
        </button>
      </div>

      {open && (
        <div className="nav-glass mx-4 mt-3 rounded-3xl p-3 shadow-xl md:hidden">
          {allLinks.map((link) => {
            const id = link.href.slice(1);
            const isActive = active === id;
            return (
              <a key={link.name} href={link.href} onClick={() => handleClick(id)}
                className={`mobile-nav-link ${isActive ? 'mobile-nav-link-active' : ''} ${id === 'contact' && isActive ? 'mobile-nav-contact-active' : ''}`}>
                {link.name}
              </a>
            );
          })}
        </div>
      )}
    </nav>
  );
}
