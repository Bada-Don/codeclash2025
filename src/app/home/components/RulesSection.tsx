'use client';

import React from 'react';

const rules = [
  {
    num: '01',
    title: 'Solo Participation',
    desc: 'CodeClash 2025 is strictly an individual event. Team submissions or external collaboration of any kind will result in immediate disqualification.',
  },
  {
    num: '02',
    title: 'No AI-Generated Code',
    desc: 'Use of AI tools (ChatGPT, Copilot, etc.) to generate code is strictly prohibited. All submitted code must be written by the participant during the contest.',
  },
  {
    num: '03',
    title: 'Time Limit is Absolute',
    desc: 'The 60-minute countdown is non-negotiable. Participants must stop coding the moment the timer hits 00:00. Judges monitor activity timestamps.',
  },
  {
    num: '04',
    title: 'Original Work Only',
    desc: 'All submissions must be created during the competition window. Pre-built templates, copied designs, or plagiarized code will be disqualified.',
  },
  {
    num: '05',
    title: 'Judges\' Decision is Final',
    desc: 'The evaluation panel\'s decisions on scoring, ranking, and disqualification are final and binding. No appeals will be entertained post-announcement.',
  },
  {
    num: '06',
    title: 'Official Submission Platform',
    desc: 'All code must be submitted exclusively via the designated platform link shared during the event. Email or WhatsApp submissions will not be accepted.',
  },
  {
    num: '07',
    title: 'Academic Integrity',
    desc: 'Participants must uphold the highest standards of academic honesty. Any form of cheating, malpractice, or unfair advantage will lead to permanent ban.',
  },
  {
    num: '08',
    title: 'No Late Submissions',
    desc: 'Submissions received after the official deadline — even by one second — will be automatically rejected by the system. Plan your time wisely.',
  },
];

export default function RulesSection() {
  return (
    <section className="relative py-24 px-4 md:px-12" style={{ zIndex: 1 }}>
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <div className="reveal text-center mb-4">
          <h2 className="font-bold text-white" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
            Rules &amp;{' '}
            <span className="neon-pink">Regulations</span>
          </h2>
          <div className="neon-separator mt-4 mx-auto" style={{ maxWidth: 180, background: 'linear-gradient(90deg, transparent, rgba(255,45,117,0.5), transparent)' }} />
        </div>

        <p className="reveal text-center mb-12 text-sm" style={{ color: 'rgba(255,255,255,0.45)', letterSpacing: '0.05em' }}>
          Read carefully. Ignorance of the rules is not an excuse.
        </p>

        {/* 4×2 Grid */}
        <div className="reveal grid grid-cols-1 sm:grid-cols-2 gap-5">
          {rules?.map((rule) => (
            <div
              key={rule?.num}
              className="glass rule-card p-6 flex gap-4"
            >
              {/* Number badge */}
              <div
                className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm"
                style={{
                  background: 'rgba(0,212,255,0.1)',
                  border: '1px solid rgba(0,212,255,0.3)',
                  color: '#00D4FF',
                  boxShadow: '0 0 8px rgba(0,212,255,0.2)',
                  fontFamily: 'inherit',
                }}
              >
                {rule?.num}
              </div>

              {/* Content */}
              <div className="flex flex-col gap-1">
                <h3 className="font-bold text-white text-sm" style={{ letterSpacing: '0.03em' }}>
                  {rule?.title}
                </h3>
                <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.7 }}>
                  {rule?.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}