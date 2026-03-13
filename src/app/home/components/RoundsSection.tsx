'use client';

import React from 'react';

const rounds = [
  {
    emoji: '🧠',
    title: 'MCQ Blitz',
    accent: '#00FF88',
    description:
      'Test your coding knowledge with rapid-fire multiple choice questions across DSA, OS, DBMS, and system design.',
    badge: 'Round 01',
    badgeColor: '#00FF88',
    colorClass: 'neon-green',
    animationDelay: '0s',
    animationDuration: '2.4s',
    difficulty: 'Medium',
    difficultyPercent: 55,
    difficultyColor: '#00FF88',
    bullets: [
      '⏱ 20-minute rapid-fire sprint',
      '📚 Topics: DSA, OS, DBMS, System Design',
      '🎯 Speed + accuracy both scored',
      '❓ 30 questions, 4 options each',
      '⚡ Negative marking applies',
    ],
  },
  {
    emoji: '⚡',
    title: 'UI Clone Wars',
    accent: '#A855F7',
    description:
      'Replicate a given website design with pixel-perfect precision using only HTML, CSS, and vanilla JavaScript.',
    badge: 'Round 02',
    badgeColor: '#A855F7',
    colorClass: 'neon-purple',
    animationDelay: '0.9s',
    animationDuration: '3.1s',
    difficulty: 'Hard',
    difficultyPercent: 80,
    difficultyColor: '#A855F7',
    bullets: [
      '⏳ 60-minute design challenge',
      '🎨 Pixel-perfect UI replication',
      '🛠 HTML, CSS & vanilla JS only',
      '📐 Judged on accuracy & responsiveness',
      '🏆 Bonus points for animations',
    ],
  },
];

export default function RoundsSection() {
  return (
    <section className="relative py-24 px-4 md:px-12" style={{ zIndex: 1 }}>
      <style>{`
        @keyframes floatA {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes floatB {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .emoji-float-a {
          display: inline-block;
          animation: floatA 2.4s ease-in-out 0s infinite;
        }
        .emoji-float-b {
          display: inline-block;
          animation: floatB 3.1s ease-in-out 0.9s infinite;
        }
        .neon-purple {
          color: #A855F7;
          text-shadow: 0 0 8px #A855F7, 0 0 20px #A855F780;
        }
      `}</style>

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
          {rounds?.map((r, idx) => (
            <div
              key={r?.title}
              className="glass card-hover p-8 flex flex-col gap-5"
              style={{ border: `1px solid ${r?.accent}30` }}
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

              {/* Title with independently animated emoji */}
              <h3
                className={`${r?.colorClass} font-bold flex items-center gap-3`}
                style={{ fontSize: '1.7rem' }}
              >
                <span className={idx === 0 ? 'emoji-float-a' : 'emoji-float-b'}>
                  {r?.emoji}
                </span>
                {r?.title}
              </h3>

              {/* Description */}
              <p
                className="leading-relaxed text-sm"
                style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.8 }}
              >
                {r?.description}
              </p>

              {/* Bullet details */}
              <ul className="flex flex-col gap-2 mt-1">
                {r?.bullets?.map((b) => (
                  <li
                    key={b}
                    className="text-sm flex items-start gap-2"
                    style={{ color: 'rgba(255,255,255,0.75)' }}
                  >
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              {/* Spacer */}
              <div className="mt-auto" />

              {/* Difficulty bar */}
              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center text-xs font-semibold" style={{ color: r?.difficultyColor }}>
                  <span style={{ letterSpacing: '0.08em' }}>DIFFICULTY</span>
                  <span>{r?.difficulty}</span>
                </div>
                <div
                  className="w-full rounded-full overflow-hidden"
                  style={{ height: 6, background: 'rgba(255,255,255,0.08)' }}
                >
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${r?.difficultyPercent}%`,
                      background: `linear-gradient(90deg, ${r?.accent}99, ${r?.accent})`,
                      boxShadow: `0 0 8px ${r?.accent}80`,
                    }}
                  />
                </div>
              </div>

              {/* Bottom accent line */}
              <div
                className="h-px w-full"
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