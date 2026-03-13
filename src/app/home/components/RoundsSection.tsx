'use client';

import React from 'react';

const rounds = [
  {
    emoji: '🧠',
    title: 'MCQ Blitz',
    colorClass: 'neon-blue',
    accent: '#00D4FF',
    description:
      'Test your coding knowledge with rapid-fire multiple choice questions across DSA, OS, DBMS, and system design. Speed and accuracy are both key — every second counts in this 20-minute sprint.',
    badge: 'Round 01',
    badgeColor: '#00D4FF',
    hoverClass: '',
  },
  {
    emoji: '⚡',
    title: 'UI Clone Wars',
    colorClass: 'neon-green',
    accent: '#00FF88',
    description:
      'Replicate a given website design with pixel-perfect precision using only HTML, CSS, and vanilla JavaScript. Your frontend skills, eye for detail, and speed will be put to the ultimate 60-minute test.',
    badge: 'Round 02',
    badgeColor: '#00FF88',
    hoverClass: 'card-hover-green',
  },
];

export default function RoundsSection() {
  return (
    <section className="relative py-24 px-4 md:px-12" style={{ zIndex: 1 }}>
      <div className="max-w-5xl mx-auto">
        {/* Section title */}
        <div className="reveal text-center mb-16">
          <h2
            className="gradient-cycle-text font-bold"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)' }}
          >
            The Rounds
          </h2>
          <div className="neon-separator mt-4 mx-auto" style={{ maxWidth: 200 }} />
        </div>

        {/* Cards */}
        <div className="reveal grid grid-cols-1 md:grid-cols-2 gap-8">
          {rounds?.map((r) => (
            <div
              key={r?.title}
              className={`glass card-hover ${r?.hoverClass} p-8 flex flex-col gap-5`}
              style={{ border: `1px solid rgba(255,255,255,0.1)` }}
            >
              {/* Badge */}
              <span
                className="self-start text-xs font-bold px-3 py-1 rounded-full"
                style={{
                  border: `1px solid ${r?.badgeColor}`,
                  color: r?.badgeColor,
                  boxShadow: `0 0 8px ${r?.badgeColor}40`,
                  letterSpacing: '0.1em',
                }}
              >
                {r?.badge}
              </span>

              {/* Title */}
              <h3
                className={`${r?.colorClass} font-bold flex items-center gap-3`}
                style={{ fontSize: '1.7rem' }}
              >
                <span>{r?.emoji}</span>
                {r?.title}
              </h3>

              {/* Description */}
              <p
                className="leading-relaxed text-sm"
                style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.8 }}
              >
                {r?.description}
              </p>

              {/* Bottom accent */}
              <div
                className="h-px w-full mt-auto"
                style={{
                  background: `linear-gradient(90deg, ${r?.accent}, transparent)`,
                  boxShadow: `0 0 6px ${r?.accent}60`,
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}