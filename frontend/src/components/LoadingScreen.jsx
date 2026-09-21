import { useEffect, useState } from 'react';

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const start = performance.now();
    const duration = 1900;
    let frame;

    const tick = (now) => {
      const raw = Math.min((now - start) / duration, 1);
      const eased =
        raw < 0.5
          ? 4 * raw * raw * raw
          : 1 - Math.pow(-2 * raw + 2, 3) / 2;

      setProgress(Math.round(eased * 100));

      if (raw < 1) {
        frame = requestAnimationFrame(tick);
        return;
      }

      setTimeout(() => setLeaving(true), 140);
      setTimeout(() => onComplete?.(), 500);
    };

    frame = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(frame);
  }, [onComplete]);

  return (
    <div
      className={`loading-screen ${leaving ? 'loading-screen-leaving' : ''}`}
      role="status"
      aria-live="polite"
      aria-label={`Loading portfolio ${progress}%`}
    >
      <div className="loading-modern">
        <div className="loading-header">
          <span className="loading-kicker">BAGAS ARYA WIJAYA</span>
          <span className="loading-year">PORTFOLIO</span>
        </div>

        <div className="loading-title-wrap">
          <p className="loading-eyebrow">GETTING READY</p>
          <h1 className="loading-title">Run Your Way</h1>
        </div>

        <div className="loading-bottom">
          <span>BUILDING DIGITAL EXPERIENCES</span>
          <strong>{progress}%</strong>
        </div>

        <div className="loading-progress" aria-hidden="true">
          <span style={{ transform: `scaleX(${progress / 100})` }} />
        </div>
      </div>
    </div>
  );
}