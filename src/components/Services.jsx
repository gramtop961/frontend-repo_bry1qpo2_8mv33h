import React from 'react';
import { Code, Bot, Database, Shield } from 'lucide-react';

const services = [
  {
    icon: Code,
    title: 'Web Engineering',
    desc: 'High-performance websites and web apps with modern stacks, SEO, and accessibility baked-in.'
  },
  {
    icon: Bot,
    title: 'AI Automations',
    desc: 'Custom AI agents, workflow automations, and integrations that reduce manual work at scale.'
  },
  {
    icon: Database,
    title: 'Data Platforms',
    desc: 'APIs, data pipelines, and dashboards to unlock insights and power your products.'
  },
  {
    icon: Shield,
    title: 'Security & Compliance',
    desc: 'Best practices, audits, and governance to keep your systems reliable and compliant.'
  }
];

export default function Services() {
  return (
    <section id="services" className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="mb-10">
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">What we do</h2>
        <p className="mt-2 max-w-2xl text-white/70">
          End-to-end delivery — from strategy and UX to engineering and AI enablement.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {services.map(({ icon: Icon, title, desc }) => (
          <div
            key={title}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/40 p-5 transition hover:border-white/20 hover:bg-neutral-900/60"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-tr from-fuchsia-500/20 to-sky-400/20 ring-1 ring-inset ring-white/10">
              <Icon className="h-6 w-6 text-white" />
            </div>
            <h3 className="mt-4 text-lg font-semibold">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/70">{desc}</p>
            <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[radial-gradient(circle,_rgba(99,102,241,0.15),_transparent_60%)]" />
          </div>
        ))}
      </div>

      <div className="mt-12 rounded-2xl border border-white/10 bg-gradient-to-tr from-fuchsia-500/10 via-purple-500/10 to-sky-400/10 p-6 text-center">
        <p className="text-white/80">
          Not sure where to start? We’ll map your highest ROI opportunities across web and AI in a free discovery call.
        </p>
        <a
          href="#contact"
          className="mt-4 inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-medium text-neutral-950 transition hover:bg-white/90"
        >
          Claim your roadmap
        </a>
      </div>
    </section>
  );
}
