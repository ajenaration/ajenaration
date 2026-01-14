import React from 'react';
import { Mail, Coffee } from 'lucide-react';

const ContactCTA: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-transparent to-cyan-950/20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Let's build something legendary.</h2>
        <p className="text-xl text-gray-400 mb-10">
          Looking for a technical speaker, hardware reviewer, or a developer advocate to grow your community?
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <a href="mailto:collab@ajenaration.com" className="flex items-center justify-center gap-2 bg-white text-black font-bold px-8 py-4 rounded-xl hover:bg-cyan-400 transition-all">
            <Mail size={20} /> Let's collab
          </a>
          <button className="flex items-center justify-center gap-2 bg-white/10 border border-white/10 font-bold px-8 py-4 rounded-xl hover:bg-white/20 transition-all">
            <Coffee size={20} /> Support me
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;