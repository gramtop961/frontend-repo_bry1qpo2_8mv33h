import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 pt-16 lg:pt-24">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Shipping AI automations & websites that convert
          </div>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl">
            Your on-demand team for web and AI automation.
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-white/70 md:text-lg">
            We design, build, and automate modern digital experiences — from high-performance marketing sites to AI agents that streamline your operations.
          </p>
          <motion.div
            className="mt-8 flex flex-wrap items-center gap-3"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <a
              href="#contact"
              className="rounded-full bg-white px-5 py-3 text-sm font-medium text-neutral-950 transition hover:bg-white/90"
            >
              Book a strategy call
            </a>
            <a
              href="#services"
              className="rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10"
            >
              Explore services
            </a>
          </motion.div>
          <div className="mt-10 flex items-center gap-6 text-xs text-white/60">
            <div>
              <div className="font-semibold text-white">100+ deployments</div>
              <div>Production-grade delivery</div>
            </div>
            <div>
              <div className="font-semibold text-white">24/7 support</div>
              <div>SLAs available</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="relative h-[420px] w-full overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/50 shadow-2xl lg:h-[560px]"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <Spline
            scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
          {/* Visual glow overlay that doesn't block 3D interactions */}
          <div className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(ellipse_at_center,_rgba(168,85,247,0.18),_transparent_60%)]" />
        </motion.div>
      </div>
    </section>
  );
}
