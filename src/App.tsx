import React, { useState, useEffect } from 'react';
import GenerativeArt from './components/GenerativeArt';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import SponsorshipPage from './pages/SponsorshipPage';
import AboutModal from './components/modals/AboutModal';
import TechStackModal from './components/modals/TechStackModal';
import ResumeModal from './components/modals/ResumeModal';
import { useNavigation } from './hooks/useNavigation';
import { ViewType } from './types';
import nameAudio from './fullname.mp3';

const App = () => {
  const { getInitialView, navigateTo } = useNavigation();
  const [currentView, setCurrentView] = useState<ViewType>(getInitialView());
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);
  const [isTechStackModalOpen, setIsTechStackModalOpen] = useState(false);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [terminalInput, setTerminalInput] = useState('');

  useEffect(() => {
    const handlePopState = () => {
      setCurrentView(getInitialView());
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [getInitialView]);

  const handleNavigate = (view: ViewType) => {
    setCurrentView(view);
    navigateTo(view);
  };

  const playNameAudio = () => {
    new Audio(nameAudio).play();
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-100 font-sans selection:bg-cyan-500 selection:text-white">
      <div className="fixed inset-0 z-0 pointer-events-none opacity-40">
        <GenerativeArt />
      </div>
      <div className="relative z-10">
        <Navigation 
          currentView={currentView} 
          onOpenResume={() => setIsResumeModalOpen(true)}
        />
        
        {currentView === 'home' && (
          <HomePage onOpenAboutModal={() => setIsAboutModalOpen(true)} />
        )}
        {currentView === 'about' && (
          <AboutPage onNavigate={handleNavigate} />
        )}
        {currentView === 'sponsorship' && (
          <SponsorshipPage onNavigate={handleNavigate} />
        )}
        
        <Footer />
      </div>

      {/* Modals */}
      <AboutModal
        isOpen={isAboutModalOpen}
        onClose={() => setIsAboutModalOpen(false)}
        onOpenTechStack={() => {
          setIsAboutModalOpen(false);
          setIsTechStackModalOpen(true);
        }}
        onPlayNameAudio={playNameAudio}
      />

      <TechStackModal
        isOpen={isTechStackModalOpen}
        onClose={() => setIsTechStackModalOpen(false)}
        terminalInput={terminalInput}
        setTerminalInput={setTerminalInput}
      />

      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </div>
  );
};


export default App;