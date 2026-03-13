'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/contexts/AuthContext';
import ParticleCanvas from '@/app/home/components/ParticleCanvas';

interface StatCardProps {
  value: string;
  label: string;
  color: string;
  glow: string;
}

function StatCard({ value, label, color, glow }: StatCardProps) {
  return (
    <div
      className="glass flex flex-col items-center py-5 px-4 card-hover"
      style={{ minWidth: 120 }}
    >
      <span className="stat-num font-bold" style={{ color, textShadow: glow }}>
        {value}
      </span>
      <span className="mt-1 text-xs" style={{ color: 'rgba(255,255,255,0.5)', letterSpacing: '0.1em' }}>
        {label}
      </span>
    </div>
  );
}

export default function DashboardPage() {
  const router = useRouter();
  const { user, loading, signOut } = useAuth();

  useEffect(() => {
    if (!loading && !user) {
      router.replace('/login');
    }
  }, [user, loading, router]);

  const handleSignOut = async () => {
    try {
      await signOut();
      router.push('/home');
    } catch (err) {
      console.error('Sign out error:', err);
    }
  };

  if (loading) {
    return (
      <>
        <style>{`html, body { background-color: #0A0015; }`}</style>
        <div className="min-h-screen flex items-center justify-center font-mono" style={{ background: '#0A0015' }}>
          <div className="flex flex-col items-center gap-4">
            <div
              className="w-10 h-10 rounded-full border-2 border-transparent animate-spin"
              style={{ borderTopColor: '#00D4FF', borderRightColor: 'rgba(0,212,255,0.3)' }}
            />
            <p className="text-xs tracking-widest" style={{ color: 'rgba(0,212,255,0.6)' }}>
              // Loading...
            </p>
          </div>
        </div>
      </>
    );
  }

  if (!user) return null;

  const displayName = user?.user_metadata?.full_name || user?.email?.split('@')[0] || 'Hacker';
  const userEmail = user?.email || '';
  const joinedDate = user?.created_at
    ? new Date(user.created_at).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
    : 'Recently';

  return (
    <>
      <style>{`html, body { background-color: #0A0015; }`}</style>
      <div className="relative min-h-screen font-mono" style={{ zIndex: 1 }}>
        <ParticleCanvas />

        {/* Navbar */}
        <nav
          className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-4 flex items-center justify-between glass-nav"
          style={{ zIndex: 100 }}
        >
          <Link href="/home" className="logo-aura flex items-center gap-0 font-bold text-xl select-none">
            <span className="text-white">Code</span>
            <span className="neon-blue" style={{ textShadow: '0 0 10px #00D4FF, 0 0 20px #00D4FF, 0 0 40px #00D4FF' }}>
              Clash
            </span>
            <span className="neon-green ml-1" style={{ fontSize: '0.9em' }}>2025</span>
          </Link>

          <div className="flex items-center gap-4">
            <span className="hidden sm:block text-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>
              {userEmail}
            </span>
            <button
              onClick={handleSignOut}
              className="btn-secondary text-sm font-bold"
              style={{ borderRadius: 8, padding: '8px 20px', fontSize: '0.8rem' }}
            >
              Sign Out
            </button>
          </div>
        </nav>

        {/* Main content */}
        <main className="pt-28 pb-16 px-6 md:px-12 max-w-6xl mx-auto" style={{ position: 'relative', zIndex: 2 }}>

          {/* Welcome header */}
          <div className="mb-10">
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-4 text-xs"
              style={{ background: 'rgba(0,255,136,0.08)', border: '1px solid rgba(0,255,136,0.25)', color: '#00FF88' }}
            >
              <span className="inline-block w-2 h-2 rounded-full bg-neon-green animate-pulse" style={{ boxShadow: '0 0 6px #00FF88' }} />
              Authenticated — Arena Access Granted
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Welcome back,{' '}
              <span className="neon-blue" style={{ textShadow: '0 0 10px #00D4FF, 0 0 20px #00D4FF' }}>
                {displayName}
              </span>
            </h1>
            <p className="text-sm" style={{ color: 'rgba(255,255,255,0.45)' }}>
              // Your CodeClash 2025 command center
            </p>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            <StatCard value="500+" label="Participants" color="#00D4FF" glow="0 0 12px #00D4FF" />
            <StatCard value="₹50K" label="Prize Pool" color="#00FF88" glow="0 0 12px #00FF88" />
            <StatCard value="02" label="Days" color="#FFFFFF" glow="none" />
            <StatCard value="03" label="Rounds" color="#FF2D75" glow="0 0 12px #FF2D75" />
          </div>

          {/* Main grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Profile card */}
            <div
              className="glass card-hover p-6"
              style={{ border: '1px solid rgba(0,212,255,0.2)' }}
            >
              <h2
                className="text-xs font-bold uppercase tracking-widest mb-4"
                style={{ color: '#00D4FF', textShadow: '0 0 8px #00D4FF' }}
              >
                // Competitor Profile
              </h2>
              <div className="flex items-center gap-4 mb-5">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center font-bold text-xl"
                  style={{
                    background: 'linear-gradient(135deg, rgba(0,212,255,0.2), rgba(0,255,136,0.2))',
                    border: '2px solid rgba(0,212,255,0.4)',
                    color: '#00D4FF',
                    textShadow: '0 0 10px #00D4FF',
                  }}
                >
                  {displayName.charAt(0).toUpperCase()}
                </div>
                <div>
                  <p className="font-bold text-white">{displayName}</p>
                  <p className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.45)' }}>{userEmail}</p>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                {[
                  { label: 'Status', value: 'Registered', color: '#00FF88' },
                  { label: 'Joined', value: joinedDate, color: '#00D4FF' },
                  { label: 'Team', value: 'Solo / TBD', color: 'rgba(255,255,255,0.6)' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between py-2" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                    <span className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>{item.label}</span>
                    <span className="text-xs font-bold" style={{ color: item.color }}>{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Event schedule card */}
            <div
              className="glass card-hover p-6"
              style={{ border: '1px solid rgba(0,255,136,0.2)' }}
            >
              <h2
                className="text-xs font-bold uppercase tracking-widest mb-4"
                style={{ color: '#00FF88', textShadow: '0 0 8px #00FF88' }}
              >
                // Event Schedule
              </h2>
              <div className="flex flex-col gap-3">
                {[
                  { round: 'Round 1', name: 'Qualifier', time: 'Day 1 — 09:00 AM', status: 'upcoming', color: '#00D4FF' },
                  { round: 'Round 2', name: 'Semi-Final', time: 'Day 1 — 02:00 PM', status: 'upcoming', color: '#00D4FF' },
                  { round: 'Round 3', name: 'Grand Final', time: 'Day 2 — 10:00 AM', status: 'upcoming', color: '#FF2D75' },
                ].map((r) => (
                  <div
                    key={r.round}
                    className="flex items-center justify-between px-4 py-3 rounded-lg"
                    style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}
                  >
                    <div>
                      <p className="text-xs font-bold" style={{ color: r.color }}>{r.round} — {r.name}</p>
                      <p className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.4)' }}>{r.time}</p>
                    </div>
                    <span
                      className="text-xs px-2 py-1 rounded-full"
                      style={{
                        background: 'rgba(0,212,255,0.1)',
                        border: '1px solid rgba(0,212,255,0.3)',
                        color: '#00D4FF',
                      }}
                    >
                      {r.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick actions */}
            <div
              className="glass card-hover p-6 md:col-span-2"
              style={{ border: '1px solid rgba(255,45,117,0.15)' }}
            >
              <h2
                className="text-xs font-bold uppercase tracking-widest mb-4"
                style={{ color: '#FF2D75', textShadow: '0 0 8px #FF2D75' }}
              >
                // Quick Actions
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  { label: 'View Rules', href: '/home#rules', color: '#00D4FF' },
                  { label: 'View Challenge', href: '/home#challenge', color: '#00FF88' },
                  { label: 'Check Timer', href: '/home#timer', color: '#FF2D75' },
                  { label: 'Back to Home', href: '/home', color: 'rgba(255,255,255,0.6)' },
                ].map((action) => (
                  <Link
                    key={action.label}
                    href={action.href}
                    className="flex items-center justify-center py-3 px-4 rounded-lg text-xs font-bold text-center transition-all duration-200"
                    style={{
                      background: 'rgba(255,255,255,0.04)',
                      border: `1px solid ${action.color}33`,
                      color: action.color,
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.background = `${action.color}15`;
                      (e.currentTarget as HTMLElement).style.borderColor = `${action.color}66`;
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.04)';
                      (e.currentTarget as HTMLElement).style.borderColor = `${action.color}33`;
                    }}
                  >
                    {action.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
