"use client";

import { useEffect, useState } from "react";
import "./preloader.css";

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [isUnmounted, setIsUnmounted] = useState(false);

  useEffect(() => {
    // Lock scrolling on mount and force scroll to top
    document.body.style.overflow = "hidden";
    window.scrollTo(0, 0);

    let currentProgress = 0;
    let timer: NodeJS.Timeout;

    const tick = () => {
      // Simulate fast network loading until 90%
      currentProgress += Math.random() * 15 + 2;
      if (currentProgress >= 90) {
        currentProgress = 90; // Wait at 90% for actual document load
      }
      setProgress(Math.floor(currentProgress));
    };

    timer = setInterval(tick, 100);

    const handleLoad = () => {
      clearInterval(timer);
      // Rapidly finish to 100%
      const finishTimer = setInterval(() => {
        currentProgress += 3;
        if (currentProgress >= 100) {
          currentProgress = 100;
          clearInterval(finishTimer);
          setProgress(100);
          
          setTimeout(() => {
            setIsFadingOut(true);
            window.scrollTo(0, 0); // Enforce top scroll position before unlocking
            document.body.style.overflow = ""; // Unlock scrolling
            setTimeout(() => {
                window.dispatchEvent(new Event('preloaderFinished'));
                setIsUnmounted(true);
            }, 1200); // Unmount after curtain reveals
          }, 400); // Brief pause at 100%
        }
        setProgress(Math.floor(currentProgress));
      }, 15);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => {
      clearInterval(timer);
      window.removeEventListener("load", handleLoad);
      document.body.style.overflow = "";
    };
  }, []);

  if (isUnmounted) return null;

  return (
    <div className={`premium-loader ${isFadingOut ? "slide-up" : ""}`}>
      <div className="loader-content">
        <div className="counter">
          <span className="counter-num">{progress}</span>
          <span className="counter-percent">%</span>
        </div>
        <div className="progress-bar-container">
          <div className="progress-bar" style={{ width: `${progress}%` }}></div>
        </div>
        <div className="loading-text-minimal">LOADING EXPERIENCE</div>
      </div>
    </div>
  );
}
