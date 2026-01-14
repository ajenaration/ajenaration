import React from 'react';
import { Star } from 'lucide-react';
import { sponsors } from '../data/socialLinks';

const SponsorshipBanner = () => (
  <section id="sponsorship" className="py-12 bg-white/[0.06] backdrop-blur-3xl backdrop-saturate-150 border-t border-white/20 border-b border-white/5 relative overflow-hidden shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]">
    <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-transparent pointer-events-none"></div>
    <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
      <div className="flex items-center gap-4 shrink-0">
        <Star className="text-yellow-400 fill-yellow-400" />
        <p className="text-lg font-medium">Trusted by industry leaders for hardware reviews & technical advocacy.</p>
      </div>
      <div className="w-full md:w-1/2 overflow-hidden relative marquee-mask">
        <div className="flex gap-8 animate-scroll whitespace-nowrap w-max opacity-50 grayscale hover:grayscale-0 transition-all">
          {[...sponsors, ...sponsors, ...sponsors, ...sponsors].map((sponsor, index) => (
            <span key={index} className="font-semibold text-sm tracking-wider">{sponsor}</span>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default SponsorshipBanner;