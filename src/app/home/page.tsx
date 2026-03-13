'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/app/home/components/HeroSection';
import RoundsSection from '@/app/home/components/RoundsSection';
import ChallengeSection from '@/app/home/components/ChallengeSection';
import RulesSection from '@/app/home/components/RulesSection';
import TimerSection from '@/app/home/components/TimerSection';
import ParticleCanvas from '@/app/home/components/ParticleCanvas';

export default function HomePage() {
  // Scroll reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );

    const elements = document.querySelectorAll('.reveal');
    elements?.forEach((el) => observer?.observe(el));

    return () => observer?.disconnect();
  }, []);

  return (
    <>
      <style>{`html, body { background-color: #0A0015; }`}</style>
      <main className="relative min-h-screen font-mono" style={{ position: 'relative', zIndex: 1 }}>
        {/* Global particle background */}
        <ParticleCanvas />

        <Navbar />

        <HeroSection />

        <section id="rounds">
          <RoundsSection />
        </section>

        <section id="challenge">
          <ChallengeSection />
        </section>

        <section id="rules">
          <RulesSection />
        </section>

        <section id="timer">
          <TimerSection />
        </section>

        <Footer />
      </main>
    </>
  );
}