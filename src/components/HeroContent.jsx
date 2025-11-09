import React from 'react';
import { motion } from 'framer-motion';

export default function HeroContent() {
  return (
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-12 gap-10 items-center min-h-[72vh] pt-10">
        <div className="lg:col-span-6 text-white">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Available for collaboration
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight"
          >
            Anugrah Syawal.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-4 text-lg text-white/80 leading-relaxed"
          >
            Building Infrastructure (Terraform, Proxmox) and Applications (Next.js, React).
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              className="inline-flex items-center rounded-md bg-emerald-500 hover:bg-emerald-600 text-white px-5 py-2.5 text-sm font-medium transition-colors"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center rounded-md border border-white/15 bg-white/5 hover:bg-white/10 text-white px-5 py-2.5 text-sm font-medium transition-colors"
            >
              Contact Me
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 text-sm text-white/60"
          >
            <p>System Administrator & DevOps Specialist • Fullstack Developer</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {[
                'Proxmox',
                'Terraform',
                'Ansible',
                'ELK Stack',
                'React',
                'Next.js',
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="lg:col-span-6 h-[60vh] lg:h-[72vh]">
          <div className="relative h-full rounded-2xl overflow-hidden border border-white/10 bg-black/20">
            <div className="absolute inset-0">
              {/* Spline 3D scene */}
              {/* Imported and used in SplineCanvas component to keep single responsibility */}
            </div>
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
        </div>
      </div>
    </div>
  );
}
