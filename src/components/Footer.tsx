'use client';

import React, { useState } from 'react';

import Icon from '@/components/ui/AppIcon';

export default function Footer() {
  const [email, setEmail] = useState('');

  return (
    <footer
      className="relative pt-16 pb-8 px-6 md:px-12 mt-8"
      style={{
        zIndex: 1,
        borderTop: '1px solid rgba(0,212,255,0.2)',
        boxShadow: '0 -1px 20px rgba(0,212,255,0.08)',
        background: 'rgba(10,0,21,0.95)',
        backdropFilter: 'blur(12px)',
      }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Col 1 — Brand */}
          <div className="flex flex-col gap-4">
            <div className="font-bold text-xl logo-aura">
              <span className="text-white">Code</span>
              <span className="neon-blue" style={{ textShadow: '0 0 10px #00D4FF, 0 0 20px #00D4FF' }}>Clash</span>
              <span className="neon-green ml-1 text-base">2025</span>
            </div>
            <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)', maxWidth: 200 }}>
              The ultimate coding battleground. Where champions are forged and legends are born.
            </p>
            {/* Social icons */}
            <div className="flex gap-4 mt-2">
              {[
                { name: 'CodeBracketIcon', label: 'GitHub' },
                { name: 'LinkIcon',        label: 'LinkedIn' },
                { name: 'CameraIcon',      label: 'Instagram' },
                { name: 'ChatBubbleLeftIcon', label: 'Discord' },
              ].map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="social-icon"
                  title={s.label}
                >
                  <Icon name={s.name as any} size={18} variant="outline" />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 — Quick Links */}
          <div className="flex flex-col gap-3">
            <h4
              className="font-bold text-xs uppercase tracking-widest mb-1"
              style={{ color: '#00D4FF', textShadow: '0 0 8px #00D4FF' }}
            >
              Quick Links
            </h4>
            {['Home', 'Rounds', 'Rules', 'Register', 'Timer'].map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                className="nav-link text-sm"
                style={{ color: 'rgba(255,255,255,0.55)' }}
              >
                {l}
              </a>
            ))}
          </div>

          {/* Col 3 — Contact */}
          <div className="flex flex-col gap-3">
            <h4
              className="font-bold text-xs uppercase tracking-widest mb-1"
              style={{ color: '#00D4FF', textShadow: '0 0 8px #00D4FF' }}
            >
              Contact Us
            </h4>
            <div className="flex flex-col gap-2 text-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>
              <div className="flex items-start gap-2">
                <Icon name="EnvelopeIcon" size={14} className="shrink-0 mt-0.5" style={{ color: '#00D4FF' } as any} />
                <span>codeclash2025@example.com</span>
              </div>
              <div className="flex items-start gap-2">
                <Icon name="PhoneIcon" size={14} className="shrink-0 mt-0.5" style={{ color: '#00D4FF' } as any} />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-start gap-2">
                <Icon name="MapPinIcon" size={14} className="shrink-0 mt-0.5" style={{ color: '#00D4FF' } as any} />
                <span>Engineering Block, Tech Campus, Pune, MH 411001</span>
              </div>
            </div>
          </div>

          {/* Col 4 — Stay Updated */}
          <div className="flex flex-col gap-3">
            <h4
              className="font-bold text-xs uppercase tracking-widest mb-1"
              style={{ color: '#00D4FF', textShadow: '0 0 8px #00D4FF' }}
            >
              Stay Updated
            </h4>
            <p className="text-xs" style={{ color: 'rgba(255,255,255,0.45)', lineHeight: 1.6 }}>
              Get notified about schedule updates, new challenges, and announcements.
            </p>
            <div className="flex flex-col gap-2 mt-1">
              <input
                type="email"
                className="footer-input"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                className="btn-primary text-sm font-bold"
                style={{ borderRadius: 8, padding: '10px 16px', fontSize: '0.8rem' }}
                onClick={() => setEmail('')}
              >
                Subscribe →
              </button>
            </div>
          </div>
        </div>

        {/* Separator */}
        <div className="neon-separator mb-6" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>
            © 2025 CodeClash. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>
            <a href="#" className="nav-link" style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.3)' }}>Privacy Policy</a>
            <a href="#" className="nav-link" style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.3)' }}>Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}