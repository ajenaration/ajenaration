import React from 'react';
import { Zap, ChevronRight, MapPin, Github, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';
import { TiktokIcon, BlueskyIcon } from './ui/CustomIcons';
import { socialLinks } from '../data/socialLinks';
import mainImage from '../ajenaration-main.jpg';

interface HeroProps {
  onOpenAboutModal: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenAboutModal }) => {
  return (
    <section id="home" className="pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <button 
            onClick={onOpenAboutModal}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold mb-6 uppercase tracking-widest hover:bg-cyan-500/20 transition-colors cursor-pointer"
          >
            <Zap size={12} /> Available for Developer Advocate and Backend Roles
          </button>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Obsessed with the <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">new</span>.
          </h1>
          <p className="text-xl text-gray-400 mb-8 leading-relaxed">
            Creative Technologist & Developer Advocate. I bridge the gap between complex engineering and human-centric storytelling.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-black font-bold px-8 py-4 rounded-xl transition-all transform hover:-translate-y-1">
              View Projects <ChevronRight size={20} />
            </button>
            <div className="flex items-center gap-4 px-4">
              <a href={socialLinks.github} className="p-2 text-gray-400 hover:text-cyan-400 hover:scale-110 transition-all duration-300"><Github size={24} /></a>
              <a href={socialLinks.twitter} className="p-2 text-gray-400 hover:text-cyan-400 hover:scale-110 transition-all duration-300"><Twitter size={24} /></a>
              <a href={socialLinks.linkedin} className="p-2 text-gray-400 hover:text-cyan-400 hover:scale-110 transition-all duration-300"><Linkedin size={24} /></a>
              <a href={socialLinks.instagram} className="p-2 text-gray-400 hover:text-cyan-400 hover:scale-110 transition-all duration-300"><Instagram size={24} /></a>
              <a href={socialLinks.youtube} className="p-2 text-gray-400 hover:text-cyan-400 hover:scale-110 transition-all duration-300"><Youtube size={24} /></a>
              <a href={socialLinks.tiktok} className="p-2 text-gray-400 hover:text-cyan-400 hover:scale-110 transition-all duration-300"><TiktokIcon size={24} /></a>
              <a href={socialLinks.bluesky} className="p-2 text-gray-400 hover:text-cyan-400 hover:scale-110 transition-all duration-300"><BlueskyIcon size={24} /></a>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center max-w-lg mx-auto">
          <div className="relative w-full">
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur-2xl opacity-20 animate-pulse"></div>
            <img 
              src={mainImage}
              alt="Tech Setup" 
              className="relative rounded-2xl border border-white/10 shadow-2xl w-full h-[450px] object-cover object-top"
            />
          </div>
          <div className="flex items-center gap-2 mt-8 text-gray-400">
            <MapPin size={16} className="text-cyan-400" />
            <span className="text-sm font-medium">Toronto & New York</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;