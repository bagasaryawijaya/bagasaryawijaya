import { useCallback, useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';

export default function App() {
  const [showTop, setShowTop] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const finishLoading = useCallback(() => setIsLoading(false), []);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 420);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden">
      {isLoading && <LoadingScreen onComplete={finishLoading} />}
      <Navbar />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <Contact />
      </main>
      <Footer />

      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Kembali ke halaman atas"
        className={`back-to-top ${showTop ? 'back-to-top-visible' : ''}`}
      >
        <ArrowUp size={20} />
      </button>
    </div>
  );
}
