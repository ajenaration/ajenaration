import React, { useState } from 'react';
import { X, Download, Copy, Check } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [isEmailCopied, setIsEmailCopied] = useState(false);
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={onClose}>
      <div className="relative w-full max-w-5xl h-[85vh]" onClick={(e) => e.stopPropagation()}>
        <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur-2xl opacity-20 animate-pulse"></div>
        <div className="bg-[#0a0a0a] w-full h-full rounded-2xl border border-white/10 flex flex-col shadow-2xl relative overflow-hidden">
          <div className="flex items-center justify-between p-4 border-b border-white/10 bg-[#1a1a1a]">
            <div className="flex items-center gap-4">
              <div className="flex gap-2"><div className="w-3 h-3 rounded-full bg-red-500/80"></div><div className="w-3 h-3 rounded-full bg-yellow-500/80"></div><div className="w-3 h-3 rounded-full bg-green-500/80"></div></div>
              <div className="font-mono text-sm flex items-center gap-2"><span className="text-cyan-400">~</span><span className="text-white">/resume.pdf</span></div>
            </div>
            <div className="flex items-center gap-4">
              <a href="/ayana-n-resume.pdf" download className="flex items-center gap-2 px-3 py-1.5 bg-white/5 hover:bg-white/10 rounded-lg text-xs font-bold text-gray-300 hover:text-white transition-colors"><Download size={14} /> Download PDF</a>
              <button onClick={() => { navigator.clipboard.writeText("work@ajenaration.com"); setIsEmailCopied(true); setTimeout(() => setIsEmailCopied(false), 2000); }} className="flex items-center gap-2 px-3 py-1.5 bg-white/5 hover:bg-white/10 rounded-lg text-xs font-bold text-gray-300 hover:text-white transition-colors">{isEmailCopied ? <Check size={14} /> : <Copy size={14} />}{isEmailCopied ? "Copied!" : "Copy Email"}</button>
              <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-lg transition-colors text-gray-400 hover:text-white"><X size={20} /></button>
            </div>
          </div>
          <div className="flex-1 bg-[#1a1a1a] p-1 overflow-hidden">
            <iframe src="/ayana-n-resume.pdf" className="w-full h-full rounded-lg bg-white" title="Resume PDF" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeModal;