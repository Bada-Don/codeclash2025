'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import ParticleCanvas from '@/app/home/components/ParticleCanvas';

export default function LoginPage() {
  const router = useRouter();
  const { signIn } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await signIn(email, password);
      router.push('/dashboard');
    } catch (err: any) {
      setError(err?.message || 'Invalid email or password. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <style>{`html, body { background-color: #0A0015; }`}</style>
      <div className="relative min-h-screen flex items-center justify-center px-4 font-mono" style={{ zIndex: 1 }}>
        <ParticleCanvas />

        {/* Card */}
        <div
          className="relative w-full max-w-md glass"
          style={{
            zIndex: 2,
            padding: '2.5rem',
            border: '1px solid rgba(0,212,255,0.25)',
            boxShadow: '0 0 40px rgba(0,212,255,0.1), 0 0 80px rgba(0,212,255,0.05)',
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
              // Access Terminal
            </p>
          </div>

          {/* Top accent line */}
          <div className="clash-line-top w-full mb-6" />

          <h1 className="text-xl font-bold text-white mb-1">Sign In</h1>
          <p className="text-xs mb-6" style={{ color: 'rgba(255,255,255,0.45)' }}>
            Enter your credentials to access the arena
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
            {/* Email */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs tracking-widest uppercase" style={{ color: 'rgba(0,212,255,0.8)' }}>
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
                  border: '1px solid rgba(0,212,255,0.2)',
                  fontFamily: 'inherit',
                }}
                onFocus={(e) => (e.target.style.borderColor = 'rgba(0,212,255,0.6)')}
                onBlur={(e) => (e.target.style.borderColor = 'rgba(0,212,255,0.2)')}
              />
            </div>

            {/* Password */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs tracking-widest uppercase" style={{ color: 'rgba(0,212,255,0.8)' }}>
                Password
              </label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-3 rounded-lg text-sm text-white outline-none transition-all duration-200"
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(0,212,255,0.2)',
                  fontFamily: 'inherit',
                }}
                onFocus={(e) => (e.target.style.borderColor = 'rgba(0,212,255,0.6)')}
                onBlur={(e) => (e.target.style.borderColor = 'rgba(0,212,255,0.2)')}
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="btn-primary w-full mt-2 flex items-center justify-center gap-2"
              style={{ opacity: loading ? 0.7 : 1, cursor: loading ? 'not-allowed' : 'pointer' }}
            >
              {loading ? (
                <>
                  <span
                    className="inline-block w-4 h-4 rounded-full border-2 border-transparent animate-spin"
                    style={{ borderTopColor: '#0A0015' }}
                  />
                  Authenticating...
                </>
              ) : (
                '→ Enter Arena'
              )}
            </button>
          </form>

          {/* Bottom accent line */}
          <div className="clash-line-bottom w-full mt-6 mb-5" />

          {/* Demo credentials */}
          <div
            className="mb-5 px-4 py-3 rounded-lg text-xs"
            style={{
              background: 'rgba(0,255,136,0.05)',
              border: '1px solid rgba(0,255,136,0.2)',
              color: 'rgba(255,255,255,0.5)',
            }}
          >
            <span className="neon-green font-bold">// Demo:</span>{' '}
            demo@codeclash.dev / demo1234
          </div>

          {/* Register link */}
          <p className="text-center text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>
            No account?{' '}
            <Link
              href="/register"
              className="font-bold transition-colors duration-200"
              style={{ color: '#00D4FF', textShadow: '0 0 8px #00D4FF' }}
            >
              Register Now →
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
