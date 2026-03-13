'use client';

import React, { useEffect, useState } from 'react';

const TYPEWRITER_PHRASES = ['Claim the Throne', 'Hack · Build · Compete'];
const TYPING_SPEED = 70;
const DELETING_SPEED = 40;
const PAUSE_AFTER_TYPE = 1800;
const PAUSE_AFTER_DELETE = 400;

function useTypewriter(phrases: string[]) {
  const [displayed, setDisplayed] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[phraseIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && charIndex < current.length) {
      timeout = setTimeout(() => setCharIndex((c) => c + 1), TYPING_SPEED);
    } else if (!isDeleting && charIndex === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), PAUSE_AFTER_TYPE);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex((c) => c - 1), DELETING_SPEED);
    } else if (isDeleting && charIndex === 0) {
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setPhraseIndex((i) => (i + 1) % phrases.length);
      }, PAUSE_AFTER_DELETE);
    }

    setDisplayed(current.slice(0, charIndex));
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, phraseIndex, phrases]);

  return displayed;
}

export default function HeroSection() {
  const typedText = useTypewriter(TYPEWRITER_PHRASES);

  return (
    <section
      id="home"
      className="relative flex flex-col items-center justify-center text-center min-h-screen px-4 pt-20"
      style={{ zIndex: 1 }}
    >
      {/* Registration pill */}
      <div className="reg-pill mb-8 inline-flex items-center gap-2 px-5 py-2 rounded-full glass text-sm"
        style={{ border: '1px solid rgba(0,212,255,0.3)', color: 'rgba(255,255,255,0.85)' }}>
        <span className="inline-block w-2 h-2 rounded-full bg-neon-green animate-pulse" style={{ boxShadow: '0 0 6px #00FF88' }} />
        Registration Open — CodeClash 2025
      </div>
      {/* "Code" — glitch + shutter reveal */}
      <div className="relative select-none leading-none">
        <h1
          className="glitch-text text-white font-bold"
          data-text="CODE"
          style={{ fontSize: 'clamp(5rem, 12vw, 9rem)', lineHeight: 1 }}
        >
          CODE
        </h1>
      </div>
      {/* "Clash" — outline/stroke only + accent lines */}
      <div className="relative w-full max-w-2xl flex flex-col items-center my-1">
        <div className="clash-line-top w-full mb-2" />
        <h1
          className="clash-outline font-bold leading-none"
          style={{ fontSize: 'clamp(5rem, 12vw, 9rem)', lineHeight: 1 }}
        >
          CLASH
        </h1>
        <div className="clash-line-bottom w-full mt-2" />
      </div>
      {/* "2025" */}
      <p
        className="neon-green font-bold mt-2"
        style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', letterSpacing: '0.15em' }}
      >
        2025
      </p>
      {/* Tagline — typewriter effect */}
      <p
        className="mt-4 font-mono tracking-widest"
        style={{ fontSize: '0.95rem', letterSpacing: '0.2em', minHeight: '1.6em', color: '#00FF88', textShadow: '0 0 10px #00FF88, 0 0 20px #00FF88' }}
      >
        {typedText}
        <span
          style={{
            display: 'inline-block',
            width: '2px',
            height: '1em',
            background: '#00FF88',
            marginLeft: '2px',
            verticalAlign: 'middle',
            animation: 'blink-cursor 0.7s step-end infinite',
          }}
        />
      </p>
      {/* Stats row */}
      <div className="flex flex-col sm:flex-row gap-6 mt-10 w-full max-w-2xl justify-center">
        {[
          { value: '500+', label: 'Participants', color: '#00D4FF', glow: '0 0 12px #00D4FF' },
          { value: '₹50K', label: 'Prize Pool',   color: '#00FF88', glow: '0 0 12px #00FF88' },
          { value: '02',   label: 'Days',          color: '#FFFFFF', glow: 'none' },
        ]?.map((s) => (
          <div
            key={s?.label}
            className="glass flex-1 flex flex-col items-center py-5 px-4 card-hover"
            style={{ minWidth: 120 }}
          >
            <span
              className="stat-num font-bold"
              style={{ color: s?.color, textShadow: s?.glow }}
            >
              {s?.value}
            </span>
            <span className="mt-1 text-sm" style={{ color: 'rgba(255,255,255,0.5)', letterSpacing: '0.1em' }}>
              {s?.label}
            </span>
          </div>
        ))}
      </div>
      {/* CTA buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mt-10 items-center">
        <a href="/register" className="btn-primary" style={{ textDecoration: 'none' }}>Register Now</a>
        <button className="btn-secondary">View Task</button>
      </div>
      {/* Audio equalizer */}
      <div className="flex items-end gap-1 mt-10" style={{ height: 32 }}>
        {[1,2,3,4,5]?.map((n) => (
          <div
            key={n}
            className={`eq-bar-${n} rounded-sm`}
            style={{
              width: 6,
              background: 'linear-gradient(to top, #00D4FF, #00FF88)',
              boxShadow: '0 0 6px #00D4FF',
              minHeight: 6,
            }}
          />
        ))}
      </div>
      {/* Scroll indicator */}
      <div className="absolute bottom-8 flex flex-col items-center gap-2 opacity-40">
        <span className="text-xs tracking-widest" style={{ color: 'rgba(255,255,255,0.5)' }}>SCROLL</span>
        <div className="w-px h-8" style={{ background: 'linear-gradient(to bottom, rgba(0,212,255,0.6), transparent)' }} />
      </div>
    </section>
  );
}