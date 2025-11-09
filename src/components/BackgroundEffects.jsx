import React from 'react';

export default function BackgroundEffects() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Subtle radial gradient glow */}
      <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-[600px] w-[900px] rounded-full bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.25),transparent_60%)] blur-3xl" />
      {/* Ambient corner glow */}
      <div className="pointer-events-none absolute bottom-[-10%] right-[-10%] h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15),transparent_60%)] blur-3xl" />
    </div>
  );
}
