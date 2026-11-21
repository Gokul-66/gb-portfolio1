import { useState, useEffect } from 'react';

export const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const start = performance.now();
    const duration = 1600;
    let raf;

    const tick = (now) => {
      const elapsed = now - start;
      const p = Math.min(elapsed / duration, 1);
      setProgress(Math.round(p * 100));
      if (p < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setTimeout(() => {
          setDone(true);
          setTimeout(onComplete, 500);
        }, 200);
      }
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [onComplete]);

  return (
    <div className={`loading-screen${done ? ' done' : ''}`}>
      <div className="loading-wordmark">GB.</div>
      <div className="loading-bar-track">
        <div
          className="loading-bar-fill"
          style={{ width: `${progress}%`, transition: 'width 0.05s linear' }}
        />
      </div>
    </div>
  );
};
