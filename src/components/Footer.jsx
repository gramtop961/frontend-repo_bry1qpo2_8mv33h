import React from 'react';

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="text-xl font-semibold">Let’s build something great</h3>
            <p className="mt-2 max-w-md text-white/70">
              Tell us about your goals. We’ll come back with a tailored plan, timeline, and cost — fast.
            </p>
          </div>
          <div className="md:justify-self-end">
            <a
              href="mailto:hello@aetherit.agency"
              className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-medium text-neutral-950 transition hover:bg-white/90"
            >
              Email hello@aetherit.agency
            </a>
            <div className="mt-4 text-sm text-white/60">Response within 1 business day</div>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 text-sm text-white/60 md:flex-row">
          <div>© {new Date().getFullYear()} Aether IT. All rights reserved.</div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
