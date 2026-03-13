'use client';

import React from 'react';
import AppImage from '@/components/ui/AppImage';

export default function ChallengeSection() {
  return (
    <section className="relative py-24 px-4 md:px-12" style={{ zIndex: 1 }}>
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <div className="reveal text-center mb-4">
          <h2
            className="font-bold text-white"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
            
            Your{' '}
            <span className="neon-blue">Challenge</span>
          </h2>
          <div className="neon-separator mt-4 mx-auto" style={{ maxWidth: 180 }} />
        </div>

        <p className="reveal text-center mb-14 text-sm" style={{ color: 'rgba(255,255,255,0.5)', letterSpacing: '0.05em' }}>
          Study the provided design. Recreate it from scratch. Precision wins.
        </p>

        {/* Comparison layout */}
        <div className="reveal flex flex-col gap-8 items-stretch">
          {/* Top — Target */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <span
                className="text-xs font-bold px-3 py-1 rounded-full"
                style={{ background: 'rgba(0,212,255,0.1)', color: '#00D4FF', border: '1px solid rgba(0,212,255,0.3)' }}>
                PROVIDED
              </span>
              <span className="text-white font-semibold text-sm">Target Website</span>
            </div>
            <div className="challenge-frame p-3" style={{ minHeight: 260 }}>
              <div
                className="w-full h-full rounded-lg overflow-hidden flex items-center justify-center"
                style={{ background: 'rgba(0,212,255,0.04)', minHeight: 240 }}>
                <AppImage
                  src="https://img.rocket.new/generatedImages/rocket_gen_img_1e3661ae1-1773396135979.png"
                  alt="Reflect neon website example showing a modern dark UI with neon accents"
                  className="w-full h-full object-cover rounded-lg opacity-70"
                  width={900}
                  height={500} />
              </div>
            </div>
            <p className="text-xs text-center" style={{ color: 'rgba(255,255,255,0.35)', letterSpacing: '0.08em' }}>
              Revealed at competition start
            </p>
          </div>
        </div>

        {/* Bottom hint */}
        <div className="reveal mt-10 text-center">
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.3)', letterSpacing: '0.1em' }}>
            JUDGED ON: Visual Accuracy · Responsiveness · Code Quality · Completion
          </p>
        </div>
      </div>
    </section>);

}