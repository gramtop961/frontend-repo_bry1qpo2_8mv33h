import React from 'react';
import { Rocket } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/70 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-tr from-fuchsia-500 via-purple-500 to-sky-400">
            <Rocket className="h-5 w-5 text-white" />
          </div>
          <span className="text-lg font-semibold tracking-tight">Aether IT</span>
        </div>
        <nav className="hidden items-center gap-6 md:flex">
          <a href="#services" className="text-sm text-white/80 transition hover:text-white">Services</a>
          <a href="#services" className="text-sm text-white/80 transition hover:text-white">Work</a>
          <a href="#contact" className="text-sm text-white/80 transition hover:text-white">Contact</a>
        </nav>
        <a
          href="#contact"
          className="rounded-full bg-white px-4 py-2 text-sm font-medium text-neutral-950 transition hover:bg-white/90"
        >
          Get a proposal
        </a>
      </div>
    </header>
  );
}
