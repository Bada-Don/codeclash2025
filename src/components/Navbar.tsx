'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';

const navLinks = [
  { label: 'Rounds', href: '#rounds' },
  { label: 'Talk',   href: '#challenge' },
  { label: 'Rules',  href: '#rules' },
  { label: 'Timer',  href: '#timer' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, signOut } = useAuth();
  const router = useRouter();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSignOut = async () => {
    try {
      await signOut();
      router.push('/home');
    } catch (err) {
      console.error('Sign out error:', err);
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-4 flex items-center justify-between transition-all duration-300 glass-nav`}
        style={{ zIndex: 100 }}
      >
        {/* Logo */}
        <a
          href="#home"
          className="logo-aura flex items-center gap-0 font-bold text-xl select-none"
          onClick={(e) => { e.preventDefault(); handleNav('#home'); }}
          style={{ letterSpacing: '0.02em' }}
        >
          <span className="text-white">Code</span>
          <span
            className="neon-blue"
            style={{ textShadow: '0 0 10px #00D4FF, 0 0 20px #00D4FF, 0 0 40px #00D4FF' }}
          >
            Clash
          </span>
          <span className="neon-green ml-1" style={{ fontSize: '0.9em' }}>2025</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="nav-link font-mono text-sm"
              onClick={(e) => { e.preventDefault(); handleNav(l.href); }}
            >
              {l.label}
            </a>
          ))}
          {user ? (
            <div className="flex items-center gap-3">
              <Link
                href="/dashboard"
                className="nav-link font-mono text-sm"
                style={{ color: '#00FF88', textShadow: '0 0 8px #00FF88' }}
              >
                Dashboard
              </Link>
              <button
                onClick={handleSignOut}
                className="btn-secondary text-sm font-bold"
                style={{ borderRadius: 8, padding: '8px 20px', fontSize: '0.8rem' }}
              >
                Sign Out
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <Link
                href="/login"
                className="nav-link font-mono text-sm"
              >
                Sign In
              </Link>
              <Link
                href="/register"
                className="btn-primary text-sm font-bold"
                style={{ borderRadius: 8, padding: '10px 28px', fontSize: '0.875rem', textDecoration: 'none', display: 'inline-block' }}
              >
                Register
              </Link>
            </div>
          )}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className="ham-line"
            style={menuOpen ? { transform: 'translateY(7px) rotate(45deg)' } : {}}
          />
          <span
            className="ham-line"
            style={menuOpen ? { opacity: 0 } : {}}
          />
          <span
            className="ham-line"
            style={menuOpen ? { transform: 'translateY(-7px) rotate(-45deg)' } : {}}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`mobile-menu fixed top-[68px] left-0 right-0 z-40 glass-nav px-6 py-6 flex flex-col gap-4 md:hidden ${menuOpen ? 'open' : ''}`}
        style={{ zIndex: 99 }}
      >
        {navLinks.map((l) => (
          <a
            key={l.label}
            href={l.href}
            className="nav-link font-mono text-base py-2 border-b"
            style={{ borderColor: 'rgba(255,255,255,0.06)' }}
            onClick={(e) => { e.preventDefault(); handleNav(l.href); }}
          >
            {l.label}
          </a>
        ))}
        {user ? (
          <>
            <Link
              href="/dashboard"
              className="nav-link font-mono text-base py-2 border-b"
              style={{ borderColor: 'rgba(255,255,255,0.06)', color: '#00FF88' }}
              onClick={() => setMenuOpen(false)}
            >
              Dashboard
            </Link>
            <button
              onClick={() => { setMenuOpen(false); handleSignOut(); }}
              className="btn-secondary text-center mt-2"
              style={{ borderRadius: 8, display: 'block', width: '100%' }}
            >
              Sign Out
            </button>
          </>
        ) : (
          <>
            <Link
              href="/login"
              className="nav-link font-mono text-base py-2 border-b"
              style={{ borderColor: 'rgba(255,255,255,0.06)' }}
              onClick={() => setMenuOpen(false)}
            >
              Sign In
            </Link>
            <Link
              href="/register"
              className="btn-primary text-center mt-2"
              style={{ borderRadius: 8, textDecoration: 'none', display: 'block' }}
              onClick={() => setMenuOpen(false)}
            >
              Register
            </Link>
          </>
        )}
      </div>
    </>
  );
}