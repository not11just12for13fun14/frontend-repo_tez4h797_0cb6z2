import React from 'react';
import Navigation from './components/Navigation';
import BackgroundEffects from './components/BackgroundEffects';
import HeroContent from './components/HeroContent';
import SplineCanvas from './components/SplineCanvas';

export default function App() {
  return (
    <div id="home" className="min-h-screen bg-black text-white relative">
      <Navigation />

      <main className="relative">
        <BackgroundEffects />

        <section className="relative">
          <div className="absolute inset-0">
            <SplineCanvas />
          </div>

          {/* Foreground hero content */}
          <div className="relative">
            <HeroContent />
          </div>
        </section>
      </main>

      {/* Footer placeholder for future sections */}
      <footer className="relative z-10 py-10 text-center text-xs text-white/40">
        © {new Date().getFullYear()} Anugrah Syawal. All rights reserved.
      </footer>
    </div>
  );
}
