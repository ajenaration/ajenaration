import React from 'react';
import { Play, Star } from 'lucide-react';
import { sponsors } from '../data/socialLinks';
import { contentStats } from '../data/contentStats';
import { ContentStat } from '../types';

interface SponsorshipPageProps {
  onNavigate: (view: 'home') => void;
}

const SponsorshipPage: React.FC<SponsorshipPageProps> = ({ onNavigate }) => (
  <div className="pt-32 pb-20 px-6 min-h-screen">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-6">Sponsorships & <span className="text-cyan-400">Collaborations</span></h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Partnering with brands to tell compelling technical stories. From hardware reviews to developer advocacy, I help bridge the gap between product and community.
        </p>
      </div>

      <div className="mb-20 py-12 bg-white/[0.06] backdrop-blur-3xl backdrop-saturate-150 border-t border-white/20 border-b border-white/5 relative overflow-hidden shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] rounded-2xl">
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-transparent pointer-events-none"></div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 px-8">
          <div className="flex items-center gap-4 shrink-0">
            <Star className="text-yellow-400 fill-yellow-400" />
            <p className="text-lg font-medium">Trusted by industry leaders</p>
          </div>
          <div className="w-full md:w-1/2 overflow-hidden relative marquee-mask">
            <div className="flex gap-8 animate-scroll whitespace-nowrap w-max opacity-50 grayscale hover:grayscale-0 transition-all">
              {[...sponsors, ...sponsors, ...sponsors, ...sponsors].map((sponsor, index) => (
                <span key={index} className="font-semibold text-sm tracking-wider">{sponsor}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
        <Play className="text-cyan-400" /> Content Showcase
      </h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {contentStats.map((stat: ContentStat, index: number) => (
          <a key={index} href={stat.url} target="_blank" rel="noopener noreferrer" className="block group relative overflow-hidden rounded-xl border border-white/10 bg-[#1a1a1a] hover:border-cyan-500/50 transition-all">
            <div className="aspect-video overflow-hidden">
              <img src={stat.image} alt={stat.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
              </div>
            </div>
            <div className="p-4">
              <div className="flex justify-between items-start mb-2">
                <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">{stat.platform}</span>
                <span className="text-xs text-gray-400 flex items-center gap-1">{stat.views} views</span>
              </div>
              <h3 className="font-bold text-white group-hover:text-cyan-400 transition-colors line-clamp-1">{stat.title}</h3>
            </div>
          </a>
        ))}
      </div>
    </div>
  </div>
);

export default SponsorshipPage;