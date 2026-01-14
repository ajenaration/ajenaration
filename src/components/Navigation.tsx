import React from 'react';
import { Terminal } from 'lucide-react';
import { useNavigation } from '../hooks/useNavigation';
import { ViewType } from '../types';

interface NavigationProps {
  currentView: ViewType;
  onOpenResume: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentView, onOpenResume }) => {
  const { navigateTo, scrollToSection } = useNavigation();

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2 font-bold text-xl tracking-tighter">
          <Terminal size={28} className="text-cyan-400" />
          <span className="font-accent font-normal text-2xl">ajenaration</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
          <button onClick={() => navigateTo('home')} className={`hover:text-cyan-400 transition-colors ${currentView === 'home' ? 'text-cyan-400' : ''}`}>Home</button>
          <button onClick={() => navigateTo('about')} className={`hover:text-cyan-400 transition-colors ${currentView === 'about' ? 'text-cyan-400' : ''}`}>About</button>
          <a 
            href="#work" 
            onClick={(e) => { e.preventDefault(); navigateTo('home'); scrollToSection('work'); }} 
            className="hover:text-cyan-400 transition-colors"
          >
            Work
          </a>
          <button onClick={() => navigateTo('sponsorship')} className={`hover:text-cyan-400 transition-colors ${currentView === 'sponsorship' ? 'text-cyan-400' : ''}`}>Sponsorship</button>
          <button 
            onClick={onOpenResume}
            className="bg-white text-black px-4 py-2 rounded-full hover:bg-cyan-400 transition-all duration-300"
          >
            Hire Me
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;