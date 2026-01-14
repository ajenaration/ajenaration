import React from 'react';
import { Volume2, Download, Mail, X } from 'lucide-react';
import { fullTechStack } from '../data/techStack';
import nameAudio from '../fullname.mp3';

interface AboutPageProps {
  onNavigate: (view: 'home') => void;
}

const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const playNameAudio = () => {
    new Audio(nameAudio).play();
  };

  return (
    <div className="pt-32 pb-20 px-6 min-h-screen">
      <div className="relative w-full max-w-6xl mx-auto">
        <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur-2xl opacity-20 animate-pulse"></div>
        <div className="bg-[#0a0a0a] w-full rounded-2xl border border-white/10 flex flex-col shadow-2xl relative overflow-hidden">
          <div className="flex items-center justify-between p-4 border-b border-white/10 bg-[#1a1a1a]">
            <div className="flex items-center gap-4">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              </div>
              <div className="font-mono text-sm flex items-center gap-2">
                <span className="text-green-400">➜</span>
                <span className="text-cyan-400">~</span>
                <span className="text-white">sudo whoami</span>
                <span className="animate-blink w-2 h-4 bg-gray-400 block"></span>
              </div>
            </div>
            <button onClick={() => onNavigate('home')} className="p-2 hover:bg-white/10 rounded-lg transition-colors text-gray-400 hover:text-white">
              <X size={20} />
            </button>
          </div>
          <div className="p-8 space-y-12 bg-[#0a0a0a]">
            <div>
              <h3 className="text-xl font-bold mb-2 text-white">
                I'm Ayana (/ə ˈjenə/) 
                <button 
                  onClick={playNameAudio}
                  className="inline-flex mx-2 align-middle p-1.5 bg-white/10 rounded-full hover:bg-cyan-500/20 text-cyan-400 transition-colors"
                  title="Play pronunciation"
                >
                  <Volume2 size={16} />
                </button>
                Nithey, a Production Engineer based at the intersection of hardware and software.
              </h3>
              <p className="text-gray-400 leading-relaxed">
                My work focuses on making complex technology accessible through storytelling and interactive media. My journey in tech is fueled by curiosity, creativity, and a relentless pursuit of knowledge. I'm a passionate technologist driven by the desire to build meaningful connections and foster innovation within developer communities. 
              </p>
            </div>

            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-cyan-400 mb-6">Tech Stack</h4>
              <div className="grid md:grid-cols-2 gap-8">
                {Object.entries(fullTechStack).map(([category, skills]) => (
                  <div key={category}>
                    <h5 className="text-xs font-bold text-gray-500 mb-3 uppercase tracking-wider">{category}</h5>
                    <div className="flex flex-wrap gap-2">
                      {skills.map(skill => (
                        <span key={skill} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm font-medium text-gray-300">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-cyan-400 mb-2">DevRel & Sponsorships</h4>
              <p className="text-gray-400 leading-relaxed mb-6">
                I partner with innovative dev tools, API platforms, and open-source projects to create technical content that drives adoption. From SDK walkthroughs to infrastructure deep-dives, I help developers build the future.
              </p>
              <div className="flex flex-col md:flex-row gap-4">
                <button className="flex items-center gap-2 px-6 py-3 bg-white text-black font-bold rounded-xl hover:bg-cyan-400 transition-all w-full md:w-auto justify-center">
                  <Download size={18} /> Download Media Kit
                </button>
                <a href="mailto:collab@ajenaration.com" className="flex items-center gap-2 px-6 py-3 bg-white/10 border border-white/10 text-white font-bold rounded-xl hover:bg-white/20 transition-all w-full md:w-auto justify-center">
                  <Mail size={18} /> Email Me
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;