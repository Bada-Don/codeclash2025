'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';

const TOTAL_SECONDS = 60 * 60; // 60 minutes

export default function TimerSection() {
  const [secondsLeft, setSecondsLeft] = useState(TOTAL_SECONDS);
  const [running, setRunning]         = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const progress = (secondsLeft / TOTAL_SECONDS) * 100;

  const minutes = String(Math.floor(secondsLeft / 60)).padStart(2, '0');
  const seconds = String(secondsLeft % 60).padStart(2, '0');

  const start = useCallback(() => {
    if (secondsLeft === 0) return;
    setRunning(true);
  }, [secondsLeft]);

  const pause = useCallback(() => setRunning(false), []);

  const reset = useCallback(() => {
    setRunning(false);
    setSecondsLeft(TOTAL_SECONDS);
  }, []);

  useEffect(() => {
    if (running) {
      intervalRef.current = setInterval(() => {
        setSecondsLeft((s) => {
          if (s <= 1) {
            setRunning(false);
            return 0;
          }
          return s - 1;
        });
      }, 1000);
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current);
    }
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [running]);

  return (
    <section className="relative py-24 px-4 md:px-12" style={{ zIndex: 1 }}>
      <div className="max-w-3xl mx-auto">
        {/* Title */}
        <div className="reveal text-center mb-4">
          <h2 className="font-bold text-white" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
            Time{' '}
            <span className="neon-blue">Remaining</span>
          </h2>
          <div className="neon-separator mt-4 mx-auto" style={{ maxWidth: 160 }} />
        </div>

        <p className="reveal text-center mb-12 text-sm" style={{ color: 'rgba(255,255,255,0.4)', letterSpacing: '0.05em' }}>
          The clock is ticking. Every second is a line of code.
        </p>

        {/* Timer display */}
        <div className="reveal glass p-10 md:p-14 flex flex-col items-center gap-8">
          {/* Big countdown */}
          <div
            className="font-bold tabular-nums"
            style={{
              fontSize: 'clamp(4rem, 14vw, 8rem)',
              color: secondsLeft === 0 ? '#FF2D75' : '#FFFFFF',
              textShadow: secondsLeft === 0
                ? '0 0 20px #FF2D75, 0 0 40px #FF2D75' :'0 0 20px rgba(0,212,255,0.4)',
              letterSpacing: '0.05em',
              lineHeight: 1,
              transition: 'color 0.3s, text-shadow 0.3s',
            }}
          >
            {minutes}:{seconds}
          </div>

          {/* Seekbar */}
          <div className="w-full flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <span className="text-xs" style={{ color: 'rgba(255,255,255,0.35)', letterSpacing: '0.08em' }}>
                {running ? 'RUNNING' : secondsLeft === 0 ? 'FINISHED' : 'PAUSED'}
              </span>
              <span
                className="text-xs font-bold"
                style={{ color: '#00D4FF', textShadow: '0 0 6px #00D4FF' }}
              >
                {Math.round(progress)}%
              </span>
            </div>
            <div className="seekbar-track">
              <div
                className="seekbar-fill"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Controls */}
          <div className="flex gap-4 items-center">
            <button
              className="btn-start"
              onClick={running ? pause : start}
              disabled={secondsLeft === 0}
              style={{ opacity: secondsLeft === 0 ? 0.5 : 1 }}
            >
              {running ? '⏸ Pause' : '▶ Start'}
            </button>
            <button className="btn-reset" onClick={reset}>
              ↺ Reset
            </button>
          </div>

          {/* Equalizer decoration when running */}
          {running && (
            <div className="flex items-end gap-1" style={{ height: 24 }}>
              {[1,2,3,4,5].map((n) => (
                <div
                  key={n}
                  className={`eq-bar-${n} rounded-sm`}
                  style={{
                    width: 5,
                    background: 'linear-gradient(to top, #00D4FF, #00FF88)',
                    boxShadow: '0 0 4px #00D4FF',
                    minHeight: 4,
                  }}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}