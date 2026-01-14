import React from 'react';
import { X, ArrowLeft } from 'lucide-react';
import { fullTechStack } from '../../data/techStack';

interface TechStackModalProps {
  isOpen: boolean;
  onClose: () => void;
  terminalInput: string;
  setTerminalInput: (val: string) => void;
}

const TechStackModal: React.FC<TechStackModalProps> = ({ isOpen, onClose, terminalInput, setTerminalInput }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={onClose}>
      <div className="relative w-full max-w-2xl" onClick={(e) => e.stopPropagation()}>
        <div className="bg-[#0a0a0a] w-full rounded-2xl border border-white/10 flex flex-col shadow-2xl relative overflow-hidden">
          <div className="flex items-center justify-between p-4 border-b border-white/10 bg-[#1a1a1a]">
            <div className="flex items-center gap-4 flex-1">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              </div>
              <div className="font-mono text-sm flex items-center gap-2 flex-1">
                <span className="text-cyan-400">~</span>
                <span className="text-white">/tech-stack</span>
                <span className="text-gray-500">$</span>
                <input 
                  type="text" 
                  value={terminalInput} 
                  onChange={(e) => setTerminalInput(e.target.value)} 
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && terminalInput.trim() === 'cd ..') {
                      onClose();
                    }
                  }}
                  className="bg-transparent border-none outline-none text-white flex-1 focus:ring-0 placeholder:text-gray-700" placeholder="type 'cd ..' to go back" autoFocus />
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button onClick={onClose} className="flex items-center gap-2 px-3 py-1.5 bg-white/5 hover:bg-white/10 rounded-lg text-xs font-bold text-gray-400 hover:text-white transition-colors"><ArrowLeft size={14} /> Back</button>
            </div>
          </div>
          <div className="p-8 space-y-8 bg-[#0a0a0a] max-h-[70vh] overflow-y-auto">
            {/* Render tech stack here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStackModal;