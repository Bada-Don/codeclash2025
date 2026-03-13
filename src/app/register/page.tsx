'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import ParticleCanvas from '@/app/home/components/ParticleCanvas';

export default function RegisterPage() {
  const router = useRouter();
  const { signUp } = useAuth();

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters.');
      return;
    }

    setLoading(true);
    try {
      await signUp(email, password, { fullName });
      router.push('/dashboard');
    } catch (err: any) {
      setError(err?.message || 'Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <style>{`html, body { background-color: #0A0015; }`}</style>
      <div className="relative min-h-screen flex items-center justify-center px-4 py-12 font-mono" style={{ zIndex: 1 }}>
        <ParticleCanvas />

        {/* Card */}
        <div
          className="relative w-full max-w-md glass"
          style={{
            zIndex: 2,
            padding: '2.5rem',
            border: '1px solid rgba(0,255,136,0.25)',
            boxShadow: '0 0 40px rgba(0,255,136,0.08), 0 0 80px rgba(0,255,136,0.04)',
          }}
        >
          {/* Logo */}
          <div className="text-center mb-8">
            <Link href="/home" className="logo-aura inline-flex items-center gap-0 font-bold text-2xl select-none">
              <span className="text-white">Code</span>
              <span className="neon-blue" style={{ textShadow: '0 0 10px #00D4FF, 0 0 20px #00D4FF, 0 0 40px #00D4FF' }}>Clash</span>
              <span className="neon-green ml-1" style={{ fontSize: '0.85em' }}>2025</span>
            </Link>
            <p className="mt-3 text-xs tracking-widest uppercase" style={{ color: 'rgba(255,255,255,0.4)' }}>
              // New Challenger
            </p>
          </div>

          {/* Top accent line */}
          <div
            className="w-full mb-6"
            style={{
              height: 2,
              background: 'linear-gradient(90deg, transparent, #00FF88, #00FF88, transparent)',
              boxShadow: '0 0 8px #00FF88, 0 0 16px #00FF88',
            }}
          />

          <h1 className="text-xl font-bold text-white mb-1">Create Account</h1>
          <p className="text-xs mb-6" style={{ color: 'rgba(255,255,255,0.45)' }}>
            Join the arena and compete for glory
          </p>

          {/* Error */}
          {error && (
            <div
              className="mb-4 px-4 py-3 rounded-lg text-sm"
              style={{
                background: 'rgba(255,45,117,0.1)',
                border: '1px solid rgba(255,45,117,0.4)',
                color: '#FF2D75',
              }}
            >
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {/* Full Name */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs tracking-widest uppercase" style={{ color: 'rgba(0,255,136,0.8)' }}>
                Full Name
              </label>
              <input
                type="text"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Your Hacker Name"
                className="w-full px-4 py-3 rounded-lg text-sm text-white outline-none transition-all duration-200"
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(0,255,136,0.2)',
                  fontFamily: 'inherit',
                }}
                onFocus={(e) => (e.target.style.borderColor = 'rgba(0,255,136,0.6)')}
                onBlur={(e) => (e.target.style.borderColor = 'rgba(0,255,136,0.2)')}
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs tracking-widest uppercase" style={{ color: 'rgba(0,255,136,0.8)' }}>
                Email
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="hacker@codeclash.dev"
                className="w-full px-4 py-3 rounded-lg text-sm text-white outline-none transition-all duration-200"
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(0,255,136,0.2)',
                  fontFamily: 'inherit',
                }}
                onFocus={(e) => (e.target.style.borderColor = 'rgba(0,255,136,0.6)')}
                onBlur={(e) => (e.target.style.borderColor = 'rgba(0,255,136,0.2)')}
              />
            </div>

            {/* Password */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs tracking-widest uppercase" style={{ color: 'rgba(0,255,136,0.8)' }}>
                Password
              </label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Min. 6 characters"
                className="w-full px-4 py-3 rounded-lg text-sm text-white outline-none transition-all duration-200"
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(0,255,136,0.2)',
                  fontFamily: 'inherit',
                }}
                onFocus={(e) => (e.target.style.borderColor = 'rgba(0,255,136,0.6)')}
                onBlur={(e) => (e.target.style.borderColor = 'rgba(0,255,136,0.2)')}
              />
            </div>

            {/* Confirm Password */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs tracking-widest uppercase" style={{ color: 'rgba(0,255,136,0.8)' }}>
                Confirm Password
              </label>
              <input
                type="password"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-3 rounded-lg text-sm text-white outline-none transition-all duration-200"
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(0,255,136,0.2)',
                  fontFamily: 'inherit',
                }}
                onFocus={(e) => (e.target.style.borderColor = 'rgba(0,255,136,0.6)')}
                onBlur={(e) => (e.target.style.borderColor = 'rgba(0,255,136,0.2)')}
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full mt-2 font-bold py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center gap-2"
              style={{
                background: 'linear-gradient(135deg, #00FF88, #00D4FF)',
                color: '#0A0015',
                fontSize: '0.875rem',
                opacity: loading ? 0.7 : 1,
                cursor: loading ? 'not-allowed' : 'pointer',
                boxShadow: loading ? 'none' : '0 0 20px rgba(0,255,136,0.4)',
              }}
            >
              {loading ? (
                <>
                  <span
                    className="inline-block w-4 h-4 rounded-full border-2 border-transparent animate-spin"
                    style={{ borderTopColor: '#0A0015' }}
                  />
                  Registering...
                </>
              ) : (
                '→ Join the Arena'
              )}
            </button>
          </form>

          {/* Bottom accent line */}
          <div
            className="w-full mt-6 mb-5"
            style={{
              height: 2,
              background: 'linear-gradient(90deg, transparent, #00FF88, #00FF88, transparent)',
              boxShadow: '0 0 8px #00FF88, 0 0 16px #00FF88',
            }}
          />

          {/* Login link */}
          <p className="text-center text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>
            Already have an account?{' '}
            <Link
              href="/login"
              className="font-bold transition-colors duration-200"
              style={{ color: '#00FF88', textShadow: '0 0 8px #00FF88' }}
            >
              Sign In →
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
